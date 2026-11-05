import type { EscapeType } from "../types/escape-room.ts";

export const themeInfo = {
  "adventure-fantasy": { type: "Aventura", label: "Fantasía", background: "/themes/adventure-fantasy-bg.webp" },
  "adventure-mystery": { type: "Aventura", label: "Misterio", background: "/themes/adventure-mystery-bg.webp" },
  "adventure-mission": { type: "Aventura", label: "Misión", background: "/themes/adventure-mission-bg.webp" },
  "horror-paranormal": { type: "Terror", label: "Paranormal", background: "/themes/horror-paranormal-bg.webp" },
  "horror-psychological": { type: "Terror", label: "Psicológico", background: "/themes/horror-psychological-bg.webp" },
  "horror-survival": { type: "Terror", label: "Supervivencia", background: "/themes/horror-survival-bg.webp" },
} as const satisfies Record<string, { type: EscapeType; label: string; background: string }>;

export type RoomThemeId = keyof typeof themeInfo;

/** Editorial classification based on each room's public premise. */
export const roomThemeBySlug: Record<string, RoomThemeId> = {
  "atraco-al-compadre": "adventure-mission",
  "peluqueria": "adventure-mission",
  "the-night-of-meteor": "adventure-mystery",
  "la-tienda-de-te-senor-miyagi": "adventure-mission",
  "psicofonia": "horror-paranormal",
  "caronte": "horror-psychological",
  "sesion-de-soterismo-exorcista": "horror-paranormal",
  "la-guarida": "horror-survival",
  "paranoia": "horror-psychological",
  "hotel-de-los-suicidas": "horror-paranormal",
  "sanatoriun": "adventure-mystery",
  "lechero": "adventure-mystery",
  "anillo-del-dragon": "adventure-fantasy",
  "casa-sin-ojos": "horror-survival",
  "alojamientos-becker": "adventure-mystery",
  "9-1-blackout": "horror-survival",
  "fantasmas": "horror-paranormal",
  "jugueteria-mimitos": "adventure-mystery",
  "remigio-vs-trump": "adventure-mission",
  "the-hammer-killer": "adventure-mystery",
  "el-secreto-de-alcatraz": "adventure-mystery",
  "jardin-del-buda": "adventure-mission",
  "kilometro-18": "adventure-mystery",
  "loco-del-callejon": "horror-psychological",
  "la-beerdad-oculta": "adventure-mystery",
  "mazmorra": "adventure-mission",
  "alien-invaders": "adventure-mission",
  "anos-oscuros": "horror-psychological",
  "las-reliquias-de-judi": "adventure-fantasy",
  "extintion": "horror-survival",
  "comando-murcielago": "adventure-mission",
  "resident-corporation": "adventure-mission",
  "el-ultimo-dragon": "adventure-fantasy",
  "mortifagos": "adventure-fantasy",
  "sotano": "horror-psychological",
  "haunted-house": "horror-paranormal",
  "el-viaje": "adventure-mystery",
  "la-herencia-del-panteon": "adventure-mystery",
  "portales-malfoy": "adventure-fantasy",
  "portales": "adventure-mission",
  "no-respires": "adventure-mystery",
  "elisabeth": "horror-paranormal",
  "las-maravillas-de-alicia": "adventure-fantasy",
  "corredor-de-la-muerte": "adventure-mission",
  "la-pelicula": "horror-psychological",
  "la-purga": "horror-survival",
  "reliquias-harry-potter": "adventure-fantasy",
  "vallhala": "adventure-fantasy",
  "apocalipsis-2076": "adventure-mission",
  "el-tesoro-del-jaguar": "adventure-mystery",
  "atraco-a-central-bank": "adventure-mission",
  "psyquiatricum": "horror-psychological",
  "casa-maldita": "horror-paranormal",
  "saw": "horror-survival",
  "el-ermitano": "horror-paranormal",
  "los-inocentes": "horror-psychological",
  "laboratorio": "adventure-mission",
};

export function getRoomTheme(room: { slug: string; type: EscapeType }) {
  const id = roomThemeBySlug[room.slug];
  const info = id ? themeInfo[id] : null;
  return info?.type === room.type ? { id, ...info } : null;
}
