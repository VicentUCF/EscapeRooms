# Los Inocentes

Archivo público de experiencias en escape rooms. Astro genera páginas estáticas; no hay base de datos ni conexión a Notion en esta primera versión.

## Desarrollo

Requiere Node 22.12 o superior y pnpm 10.18.3.

```sh
pnpm install
pnpm dev
pnpm check
pnpm test
pnpm build
```

El sitio muestra 57 salas reales con sinopsis originales sin spoilers y sus puntuaciones. Las sinopsis resumen la premisa publicada por cada operador; las notas son del grupo. La clasificación usa la nota final registrada, sin calcular valoraciones alternativas.

## Organización

- `src/data/rooms.ts`: copia estática de las 57 salas de Notion, con notas finales del CSV y nombres oficiales, ubicaciones y webs de la hoja aportada cuando su identidad figura como verificada.
- `src/data/room-descriptions.ts`: sinopsis editoriales de las 57 salas y enlace a la página oficial consultada. La sala de identidad pendiente conserva la fuente a `null`.
- `src/data/catalog.ts`: adaptador de lectura. Una futura integración de Notion durante el build sustituirá esta fuente sin cambiar las páginas.
- `src/data/official-images.ts` y `public/rooms/`: imágenes promocionales obtenidas de las webs oficiales, con su procedencia registrada.
- `src/types/escape-room.ts`: contrato de datos para fichas parciales y completas.
- `src/lib/rooms.ts`: reglas de publicación, ordenación y estadísticas.
- `src/components/` y `src/layouts/`: presentación compartida.
- `src/pages/`: Inicio, Expedientes, ficha, Ranking y 404.
- `src/styles/global.css`, `src/styles/palette.css`, `public/brand/`, `public/art/` y `public/decor/`: estructura visual, paleta, emblema, imágenes de apoyo para fichas sin fotografía y decorados originales.
- `docs/diseno.md`: decisiones visuales, estados y bocetos de escritorio y móvil.
- `docs/paleta.md`: colores, usos y combinaciones contrastadas, con enlace editable en Coolors.
- `docs/imagenes-oficiales.md`: procedencia de cada imagen y estado de sus derechos de reutilización.
- `docs/elementos-decorativos.md`: inventario, ubicación y prompts de los cuatro decorados generados para la interfaz.

## Datos y publicación

La tabla confirmada está mapeada a `EscapeRoom`; el detalle de las fuentes y los campos pendientes está en `docs/importacion-notion.md`. Para publicar una ficha se requieren identificador y slug únicos, nombre, tipo (Terror o Aventura) y nota final entre 0 y 10. La ubicación, la fecha ISO (`AAAA-MM-DD`) y la reseña personal pueden añadirse después. Las sinopsis no se presentan como reseñas de primera mano. Si se añade una reseña, debe tener resumen, experiencia y veredicto sin spoilers. Las 47 imágenes promocionales incorporadas sirven para la maqueta; sus derechos de reutilización aún no están confirmados y deben resolverse antes del lanzamiento. La ruta `image` puede apuntar a un archivo en `public/`. Si la imagen aporta información, añadir también `imageAlt` con una descripción breve. Los CSV de origen están en `src/data/source/`, fuera de `public/`.

Antes de publicar, ejecutar `pnpm check`, `pnpm test` y `pnpm build`. Confirmar que las reseñas no contienen spoilers. La elección de alojamiento y dominio sigue pendiente.
