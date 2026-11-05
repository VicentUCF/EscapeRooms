import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { averageScore, latestRooms, publishRooms, rankRooms, roomLocations } from "../src/lib/rooms.ts";
import { rooms as notionDrafts } from "../src/data/rooms.ts";
import { localRoomSource } from "../src/data/catalog.ts";
import { officialImages } from "../src/data/official-images.ts";
import { roomDescriptions } from "../src/data/room-descriptions.ts";
import { getRoomTheme, roomThemeBySlug, themeInfo } from "../src/data/room-themes.ts";

const base = {
  id: "a",
  slug: "sala-a",
  name: "Sala A",
  type: "Terror",
  place: "Valencia",
  date: "2026-10-01",
  finalScore: 9.2,
  scores: { acting: null, ambience: null, entry: null, finale: null, puzzles: null, terror: null },
  review: { summary: "Resumen", experience: "Experiencia", verdict: "Veredicto" },
};

test("publica fichas parciales con nota y excluye datos básicos inválidos", () => {
  const rooms = publishRooms([
    base,
    { ...base, id: "b", slug: "sala-b", review: null, place: null, date: null },
    { ...base, id: "c", slug: "sala-c", date: "2026-02-30" },
    { ...base, id: "d", slug: "sala-d", finalScore: 11 },
  ]);
  assert.deepEqual(rooms.map((room) => room.slug), ["sala-a", "sala-b"]);
});

test("detecta dos fichas publicadas con la misma ruta", () => {
  assert.throws(() => publishRooms([base, { ...base, id: "b" }]), /duplicado/);
  assert.throws(() => publishRooms([base, { ...base, slug: "sala-b" }]), /duplicado/);
});

test("ranking por nota y tipo; empates por nombre en español", () => {
  const rooms = publishRooms([
    base,
    { ...base, id: "b", slug: "sala-b", name: "Álamo", type: "Aventura", finalScore: 9.5 },
    { ...base, id: "c", slug: "sala-c", name: "Zafiro", type: "Terror", finalScore: 9.5 },
  ]);
  assert.deepEqual(rankRooms(rooms).map((room) => room.name), ["Álamo", "Zafiro", "Sala A"]);
  assert.deepEqual(rankRooms(rooms, "Terror").map((room) => room.name), ["Zafiro", "Sala A"]);
  assert.equal(rooms[0].name, "Sala A");
});

test("últimas visitas, ubicaciones y media se derivan de las fichas publicadas", () => {
  const rooms = publishRooms([
    base,
    { ...base, id: "b", slug: "sala-b", name: "Sala B", date: "2026-11-01", place: "Alicante", finalScore: 8.8 },
  ]);
  assert.deepEqual(latestRooms(rooms).map((room) => room.slug), ["sala-b", "sala-a"]);
  assert.deepEqual(roomLocations(rooms), ["Alicante", "Valencia"]);
  assert.equal(averageScore(rooms), 9);
  assert.equal(averageScore([]), null);
});

test("la copia de Notion conserva 57 salas con nota y solo usa identidades verificadas", () => {
  assert.equal(notionDrafts.length, 57);
  assert.equal(new Set(notionDrafts.map((room) => room.id)).size, notionDrafts.length);
  assert.equal(new Set(notionDrafts.map((room) => room.slug)).size, notionDrafts.length);
  assert.equal(publishRooms(notionDrafts).length, 57);
  assert.equal(notionDrafts.filter((room) => room.identityStatus === "verified" && room.website && room.place).length, 56);
  assert.equal(notionDrafts.filter((room) => room.identityStatus === "pending" && !room.website).length, 1);
  assert.equal(notionDrafts.find((room) => room.slug === "atraco-al-compadre")?.finalScore, 10);
  assert.equal(notionDrafts.find((room) => room.slug === "caronte")?.finalScore, 9.5);
});

test("cada sala publicada tiene una de las seis temáticas y una imagen decorativa local", () => {
  assert.deepEqual(new Set(Object.keys(roomThemeBySlug)), new Set(notionDrafts.map((room) => room.slug)));
  const used = new Set();
  for (const room of publishRooms(notionDrafts)) {
    const theme = getRoomTheme(room);
    assert.ok(theme, `Temática ausente o incoherente: ${room.slug}`);
    assert.equal(theme.type, room.type);
    assert.ok(existsSync(new URL(`../public${theme.background}`, import.meta.url)), `Falta ${theme.background}`);
    used.add(theme.id);
  }
  assert.deepEqual(used, new Set(Object.keys(themeInfo)));
});

test("las imágenes oficiales apuntan a salas verificadas y archivos locales existentes", async () => {
  const catalog = await localRoomSource.load();
  const bySlug = new Map(catalog.map((room) => [room.slug, room]));
  for (const [slug, asset] of Object.entries(officialImages)) {
    const room = bySlug.get(slug);
    assert.ok(room, `No existe la sala ${slug}`);
    assert.equal(room.identityStatus, "verified");
    assert.equal(room.image, asset.path);
    assert.ok(existsSync(new URL(`../public${asset.path}`, import.meta.url)), `Falta ${asset.path}`);
    assert.ok(asset.sourcePage.startsWith("https://"));
  }
  assert.equal(bySlug.get("sesion-de-soterismo-exorcista")?.image, undefined);
});

test("todas las salas publicadas tienen sinopsis y las fuentes siguen la identidad verificada", async () => {
  const catalog = await localRoomSource.load();
  assert.equal(Object.keys(roomDescriptions).length, catalog.length);
  for (const room of catalog) {
    assert.ok(room.description && room.description.length >= 70, `Sinopsis insuficiente: ${room.slug}`);
    assert.ok(!/reseña en preparación/i.test(room.description), `Texto provisional: ${room.slug}`);
    if (room.identityStatus === "verified") {
      assert.ok(room.descriptionSource?.startsWith("https://"), `Falta fuente oficial: ${room.slug}`);
    } else {
      assert.equal(room.descriptionSource, null, `Fuente no verificada: ${room.slug}`);
    }
  }
});
