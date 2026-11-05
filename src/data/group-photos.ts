export interface GroupPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  roomSlug?: string;
  roomName?: string;
}

// Copias exactas de las fotos aportadas por el grupo. Solo se enlazan a una
// ficha cuando el nombre o la escenografía de la sala permite identificarla.
export const groupPhotos: GroupPhoto[] = [
  { src: "/art/visitas/atraco-al-compadre.jpeg", alt: "El grupo disfrazado tras jugar Atraco al Compadre", width: 1024, height: 1024, roomSlug: "atraco-al-compadre", roomName: "Atraco al Compadre" },
  { src: "/art/visitas/night-of-the-meteor.jpeg", alt: "El grupo en la fotografía de Night of the Meteor", width: 1080, height: 1350, roomSlug: "the-night-of-meteor", roomName: "Night of the Meteor" },
  { src: "/art/visitas/el-lechero.jpeg", alt: "El grupo en el recuerdo fotográfico de El Lechero", width: 1080, height: 1080, roomSlug: "lechero", roomName: "El Lechero" },
  { src: "/art/visitas/casa-sin-ojos.jpeg", alt: "El grupo en la fotografía de La Casa sin Ojos", width: 1030, height: 809, roomSlug: "casa-sin-ojos", roomName: "La Casa sin Ojos" },
  { src: "/art/visitas/jugueteria-mimitos.jpeg", alt: "El grupo con los personajes de La Juguetería Mimitos", width: 1080, height: 1350, roomSlug: "jugueteria-mimitos", roomName: "La Juguetería Mimitos" },
  { src: "/art/visitas/los-portales.jpeg", alt: "El grupo en la fotografía de Los Portales", width: 610, height: 1356, roomSlug: "portales", roomName: "Los Portales" },
  { src: "/art/visitas/valhalla.jpeg", alt: "El grupo en el trono de Valhalla", width: 1201, height: 1600, roomSlug: "vallhala", roomName: "Valhalla" },
  { src: "/art/visitas/visita-01-mascaras.jpeg", alt: "Tres integrantes del grupo con máscaras en una visita a un escape room", width: 1600, height: 900 },
  { src: "/art/visitas/visita-02-tren.jpeg", alt: "Tres integrantes del grupo junto a la decoración de un tren", width: 2048, height: 1536 },
  { src: "/art/visitas/visita-04-fantasia.jpeg", alt: "El grupo vestido de fantasía junto a un personaje con capa gris", width: 1152, height: 2048 },
  { src: "/art/visitas/visita-11-run-rabbit.jpeg", alt: "El grupo en un escenario medieval de Run Rabbit", width: 1824, height: 1368 },
  { src: "/art/visitas/visita-12-grupo.jpeg", alt: "Cuatro integrantes del grupo en una sala oscura", width: 1824, height: 1368 },
  { src: "/art/visitas/visita-13-jumper.jpeg", alt: "El grupo con disfraces frente al cartel de Jumper", width: 1152, height: 2048 },
];

export function getGroupPhotosForRoom(slug: string): GroupPhoto[] {
  return groupPhotos.filter((photo) => photo.roomSlug === slug);
}
