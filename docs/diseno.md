# Los Inocentes — diseño de la primera versión

## Propósito y contenido

Archivo público de las salas de escape jugadas por Los Inocentes. La tarea principal es encontrar una experiencia y comparar su valoración con otras salas. Las reseñas sin spoilers se incorporarán a las fichas a medida que estén disponibles. La primera versión publica Inicio, Expedientes y Ranking. Equipo e Historial no aparecen hasta que tengan contenido propio.

La imagen de referencia aporta la atmósfera de archivo interno, terminal y expedientes físicos. La interfaz usa esa ficción como marco visual; las acciones, etiquetas y reseñas conservan lenguaje claro. Los sellos y registros decorativos nunca se presentan como estados reales de seguridad o sincronización.

## Sistema visual

| Elemento | Decisión |
| --- | --- |
| Base | Tinta azul `#090e11` y pizarra `#17242a` |
| Texto | Papel envejecido `#d6cebc`; secundario `#adb8aa` |
| Acción | Lacre `#c77b61`, reservado para acciones y sellos |
| Estado y datos | Pátina `#9db7a3` para estados; latón `#d0b47c` para puntuaciones |
| Tipografía | Barlow Condensed para títulos; IBM Plex Mono para texto, controles y cifras, con fuentes de sistema como alternativa |
| Emblema | Símbolo original de cerradura y cuatro marcas cardinales, sin reproducir el águila de la referencia |
| Imagen | Promocionales oficiales identificadas para las salas, dos imágenes ficticias de archivo para fichas sin foto, seis decorados generales, seis fondos temáticos y una imagen del grupo para Inicio |
| Efectos | Líneas CRT de baja opacidad y doble sombra cromática en títulos; transiciones breves en controles, desactivadas con movimiento reducido |

La jerarquía prioriza título, acción y contenido. La nota siempre se acompaña de cifra; tipo y ubicación se escriben con texto. Contraste, foco y lectura tienen prioridad sobre la textura CRT.

La paleta y sus combinaciones están detalladas en [`paleta.md`](paleta.md). La capa cromática se mantiene en `src/styles/palette.css`, separada de la estructura y el comportamiento responsive de `global.css`.

Los recursos `terror-archive-photo.webp` y `aventura-archive-photo.webp` se generaron para esta interfaz a partir de escenas ficticias de una mansión y un templo. No representan ninguna de las salas reales. Los originales generados se conservaron fuera del proyecto y las versiones WebP se empaquetaron en `public/art/`. Otros seis recursos originales en `public/decor/` ambientan las páginas y están descritos en [`elementos-decorativos.md`](elementos-decorativos.md). Seis fondos completos en `public/themes/` distinguen las subtemáticas de las fichas y están documentados en [`tematicas-visuales.md`](tematicas-visuales.md). La fotografía original del grupo aparece en Inicio; el emblema generado a partir de ella aparece en Inicio y la cabecera. Ambos recursos están descritos en [`identidad-grupo.md`](identidad-grupo.md). Las imágenes promocionales de las webs oficiales tienen prioridad cuando la sala está identificada; su procedencia y el estado pendiente de sus derechos están en `imagenes-oficiales.md`.

## Navegación y estados

- Cabecera con marca y tres enlaces; en móvil los enlaces pasan a una fila desplazable o envuelta, sin menú oculto.
- Cada página tiene un título único y un camino claro de vuelta al archivo. El enlace «Saltar al contenido» aparece al recibir foco.
- Si todavía no hay fichas publicadas, Inicio muestra una presentación completa; Expedientes y Ranking explican por qué están vacíos. Nunca se inventan valoraciones públicas.
- Las 57 fichas actuales muestran puntuaciones reales y señalan las fechas y reseñas pendientes. La identidad de una sala sigue por confirmar; se muestra con su nombre original, sin web atribuida.
- El listado mantiene las tarjetas navegables sin JavaScript. La búsqueda y los filtros se activan solo cuando el navegador puede ejecutarlos. El ranking general queda visible sin JavaScript.

## Bocetos de estructura

### Escritorio

```text
┌──────────────────── cabecera: marca · Inicio · Expedientes · Ranking ────────────────────┐
│ INICIO: título y relato + acciones          │ composición de carpetas y emblema          │
│ cifras derivadas de los datos               │ fichas destacadas / acceso al ranking        │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ EXPEDIENTES: título + recuento   │ filtro lateral · tarjetas compactas                 │
│ tarjetas en 3 columnas: imagen / nombre / datos / nota                                  │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ FICHA: imagen + título + nota + datos │ criterios · reseña disponible o aviso pendiente │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ RANKING: título · vistas General/Terror/Aventura                                        │
│ filas numeradas: puesto · sala · tipo · ubicación · nota                                 │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### Móvil

```text
┌──────── marca ────────┐
│ Inicio Expedientes    │
│ Ranking               │
├───────────────────────┤
│ título y descripción  │
│ acción principal      │
│ imagen / emblema      │
│ cifras en dos columnas│
│ filtros apilados      │
│ tarjetas en una col.  │
│ ficha: datos → relato │
│ ranking: filas compact│
└───────────────────────┘
```

El cambio de columnas ocurre cuando el contenido deja de caber; no se reducen los textos hasta ser ilegibles. A zoom alto se mantiene una sola columna y las acciones siguen visibles. Las imágenes decorativas tienen texto alternativo vacío; las fotos con contenido informativo reciben descripción.

## Contenido y reglas

- Una ficha representa una sala. Una nueva visita se añade al historial de esa ficha.
- Se publican registros con identificador, slug, nombre, tipo y nota final entre 0 y 10. La ubicación, la fecha y la reseña son opcionales; su ausencia se comunica claramente en la ficha.
- La reseña pública no contiene spoilers. El ranking usa la nota final existente; los empates se ordenan por nombre.
- Se puede buscar por nombre oficial o nombre del ranking y filtrar por tipo y ubicación. El orden del archivo se puede cambiar entre nota y nombre; el orden por fecha aparecerá cuando haya visitas fechadas.
- La tabla de Notion está copiada como datos estáticos (véase `docs/importacion-notion.md`). El origen se encapsula para sustituir los datos locales por un adaptador de build sin cambiar las páginas.

## Revisión del diseño

Antes de cerrar el diseño visual, comprobar portada, listado, ficha y ranking a 360 px, 768 px y escritorio; navegación con teclado; zoom al 200 %; texto largo; alto contraste y movimiento reducido. Validar con el grupo que el emblema y el tono representan a Los Inocentes y que las reseñas se leen cómodamente.
