import type { EscapeRoom } from "../types/escape-room.ts";
import { publishRooms } from "../lib/rooms.ts";
import { officialImages } from "./official-images.ts";
import { rooms } from "./rooms.ts";
import { roomDescriptions } from "./room-descriptions.ts";

/** Replace this adapter with a Notion build-time loader when automatic sync is enabled. */
export interface RoomSource {
  load(): Promise<readonly EscapeRoom[]>;
}

export const localRoomSource: RoomSource = {
  async load() {
    return rooms.map((room) => {
      const image = officialImages[room.slug];
      const copy = roomDescriptions[room.slug];
      return {
        ...room,
        ...(copy ? { description: copy.text, descriptionSource: copy.source } : {}),
        ...(image ? { image: image.path, imageAlt: `Imagen promocional de ${room.name} publicada en la web de ${room.company ?? "la sala"}.` } : {}),
      };
    });
  },
};

export async function getPublishedRooms(source: RoomSource = localRoomSource) {
  return publishRooms(await source.load());
}
