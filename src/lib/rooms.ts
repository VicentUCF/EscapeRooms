import type { EscapeRoom, EscapeType, PublishedEscapeRoom } from "../types/escape-room.ts";

const nameCollator = new Intl.Collator("es", { sensitivity: "base", numeric: true });

const isFilled = (value: string | null | undefined): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isIsoDate = (value: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  !Number.isNaN(Date.parse(`${value}T12:00:00Z`)) &&
  new Date(`${value}T12:00:00Z`).toISOString().slice(0, 10) === value;

export function isPublishedRoom(room: EscapeRoom): room is PublishedEscapeRoom {
  return (
    isFilled(room.id) &&
    isFilled(room.slug) &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(room.slug) &&
    isFilled(room.name) &&
    (room.type === "Aventura" || room.type === "Terror") &&
    typeof room.finalScore === "number" &&
    Number.isFinite(room.finalScore) &&
    room.finalScore >= 0 &&
    room.finalScore <= 10 &&
    (room.date == null || (isFilled(room.date) && isIsoDate(room.date)))
  );
}

export function publishRooms(source: readonly EscapeRoom[]): PublishedEscapeRoom[] {
  const rooms = source.filter(isPublishedRoom);
  const slugs = new Set<string>();
  const ids = new Set<string>();
  for (const room of rooms) {
    if (slugs.has(room.slug)) throw new Error(`Slug de expediente duplicado: ${room.slug}`);
    if (ids.has(room.id)) throw new Error(`Identificador de expediente duplicado: ${room.id}`);
    slugs.add(room.slug);
    ids.add(room.id);
  }
  return rooms;
}

export function rankRooms(rooms: readonly PublishedEscapeRoom[], type?: EscapeType): PublishedEscapeRoom[] {
  return rooms
    .filter((room) => !type || room.type === type)
    .sort((a, b) => b.finalScore - a.finalScore || nameCollator.compare(a.name, b.name));
}

export function latestRooms(rooms: readonly PublishedEscapeRoom[]): PublishedEscapeRoom[] {
  return [...rooms].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || nameCollator.compare(a.name, b.name));
}

export function roomLocations(rooms: readonly PublishedEscapeRoom[]): string[] {
  return [...new Set(rooms.map((room) => room.place).filter(isFilled))].sort(nameCollator.compare);
}

export function hasCompleteReview(room: EscapeRoom): room is EscapeRoom & { review: NonNullable<EscapeRoom["review"]> } {
  return room.review != null && isFilled(room.review.summary) && isFilled(room.review.experience) && isFilled(room.review.verdict);
}

export function averageScore(rooms: readonly PublishedEscapeRoom[]): number | null {
  if (rooms.length === 0) return null;
  return rooms.reduce((total, room) => total + room.finalScore, 0) / rooms.length;
}
