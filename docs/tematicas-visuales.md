# Temáticas visuales de las fichas

La clasificación es editorial y se basa en la premisa pública disponible de cada sala. No representa una categoría oficial de los operadores. Se asigna por `slug` en `src/data/room-themes.ts`; cuando se añada una sala nueva, hay que revisar su argumento y clasificarla. La identidad de «Sesión de soterismo exorcista» sigue pendiente de verificación, por lo que su subtema se ha inferido solo del nombre disponible.

| Tipo | Subtema | Salas | Fondo de ficha |
| --- | --- | ---: | --- |
| Aventura | Fantasía | 8 | `public/themes/adventure-fantasy-bg.webp` |
| Aventura | Misterio | 13 | `public/themes/adventure-mystery-bg.webp` |
| Aventura | Misión | 14 | `public/themes/adventure-mission-bg.webp` |
| Terror | Paranormal | 8 | `public/themes/horror-paranormal-bg.webp` |
| Terror | Psicológico | 8 | `public/themes/horror-psychological-bg.webp` |
| Terror | Supervivencia | 6 | `public/themes/horror-survival-bg.webp` |

Los seis fondos completos se generaron con la herramienta integrada, se redujeron a 1200 × 675 y se convirtieron a WebP. Suman aproximadamente 304 KiB. Cada uno ambienta el cuerpo de las tarjetas, la cabecera y los paneles de datos de la ficha; un degradado oscuro mantiene legible el texto. La fotografía oficial de cada sala se conserva. La barra lateral de cada tarjeta y fila distingue Aventura de Terror; el fondo, el color y el texto sencillo distinguen el subtema. Se eliminaron los recuadros con iconos. En alto contraste se conserva la etiqueta textual y se simplifican los fondos.

## Prompts de los fondos completos

Base compartida: «Full-bleed landscape decorative background image for an escape-room website card body and case-file detail panel. Immersive environment, not an isolated icon. Wide cinematic archival noir composition with realistic tactile materials. Left and center quiet, dark and low contrast for HTML text; environmental details primarily on the right and edges. No text, letters, numbers, logos, people, UI, borders, badges or watermark.» Los fondos de Terror añadieron «no gore».

1. **Fantasía:** ancient stone chamber with a muted violet portal at far right, brass constellation instrument and worn parchment; ink blue, antique brass, amethyst and moss.
2. **Misterio:** dim detective desk with folded map, magnifying glass, red thread, evidence pins and teal lamp glow on the right; ink blue, patina teal, parchment and brass.
3. **Misión:** dark operations table with mechanical lockbox, unmarked plan, copper cables and safe dial on the right; ink blue, olive, copper and brass, no weapons.
4. **Paranormal:** haunted corridor with a half-open door, iron lantern and blue-green spectral mist; oxidized teal, moonlit cyan and charcoal, no visible ghost.
5. **Psicológico:** empty institutional hallway reflected in cracked mirrors at disorienting angles; bruised plum, mauve, cold gray and deep ink, no figure or blood.
6. **Supervivencia:** abandoned industrial evacuation corridor with rusted blast door, broken chain, red beacon and steam; ember red, rusted iron and near-black, no weapons or gore.

Los PNG originales permanecen fuera del repositorio; la web depende solo de los WebP finales. Las condiciones de uso de las imágenes generadas dependen de la herramienta integrada utilizada.
