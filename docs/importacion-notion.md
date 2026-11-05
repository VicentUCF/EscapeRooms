# Estado de la importación de Notion

Fuente confirmada: [base de datos «Escape Rooms»](https://app.notion.com/p/1ab32ed9160a80a68d78d2dc31f7da78), consultada el 4 de noviembre de 2026. Se han copiado 57 salas a `src/data/rooms.ts` como datos estáticos. La fila «Escape Rooms 1ab32ed9160a80a68d78d2dc31f7da78» se excluyó porque no tiene ninguna puntuación y parece un registro de metadatos. Dos exportaciones CSV de la misma base se guardan en `src/data/source/`; contienen las mismas 57 filas en distinto orden y aportan el valor calculado de «Nota Final». La hoja adicional de nombres oficiales y webs se conserva en esa misma carpeta.

## Correspondencia de campos

| Notion | Proyecto | Estado |
| --- | --- | --- |
| URL de página | `id`, `notionUrl` | Importado; el identificador estable se extrae de la URL |
| Nombre | `name`, `rankingName`, `slug` | `rankingName` y `slug` conservan el nombre de Notion; `name` usa el nombre oficial de la hoja cuando la correspondencia figura como verificada |
| Tipo | `type` | Importado como Terror o Aventura |
| Actuación, Ambientacion, Entrada, Final, Puzzles, Terror, Historia | `scores` | Importado; los criterios vacíos quedan en `null` |
| Place | `place` | Vacío en Notion; 56 localidades se tomaron de la hoja adicional |
| Date | `date` | Vacío en las 57 salas |
| Nota Final | `finalScore` | El conector devolvió una referencia de fórmula; se importaron los 57 resultados numéricos del CSV |
| Cuerpo de cada página | `review` | No hay campo de reseña en la base; las tres páginas revisadas estaban vacías |
| Web pública del operador | `description`, `descriptionSource` | Se añadieron 57 sinopsis editoriales; 56 enlazan a una fuente oficial y la identidad pendiente no tiene fuente asignada |
| Hoja de nombres oficiales | `company`, `website`, `identityStatus` | 56 correspondencias marcadas como verificadas en la hoja; una identidad pendiente conserva el nombre original y no muestra web ni localidad |

El proyecto no calcula una nota sustitutiva: el ranking usa la **nota final existente** del CSV. Las sinopsis resumen la premisa pública disponible de cada sala y mencionan, cuando procede, criterios puntuados por el grupo; no se presentan como reseñas vividas ni inventan fechas de visita. La verificación de 56 nombres y webs refleja el estado de la hoja proporcionada. Los enlaces de `src/data/room-descriptions.ts` documentan las páginas de operador usadas como fuente editorial el 5 de noviembre de 2026; cuando la información pública era escasa, el texto se mantuvo deliberadamente general. Los CSV se retiraron de `public/` para que Astro no los copie al sitio publicado.

## Información pendiente

Faltan las fechas de visita y las reseñas personales sin spoilers (resumen, experiencia y veredicto) de las 57 salas. Queda por confirmar la identidad de «Sesión de Soterismo Exorcista» antes de asignarle argumento oficial, localidad o web. Se pueden añadir después duración, jugadores y visitas repetidas. Hay 47 imágenes promocionales obtenidas de las webs oficiales para la maqueta y 10 fichas conservan recursos de archivo. Su procedencia consta en `imagenes-oficiales.md`; queda pendiente confirmar los derechos de reutilización antes de publicar.

La sincronización automática con Notion sigue pendiente. Su futura implementación debe resolver el valor de la fórmula o consumir una exportación que lo incluya, y mapear los campos añadidos, conservando el contrato `RoomSource` para que las páginas no cambien.
