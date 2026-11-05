# Elementos decorativos originales

Seis composiciones generadas con la herramienta integrada de generación de imágenes y optimizadas a WebP. Son decorativas: no contienen texto, datos ni controles; por ello no necesitan texto alternativo. La interfaz mantiene títulos y contenido HTML por encima de cada imagen. Las dos piezas nuevas tienen transparencia real y se colocan a baja opacidad; se ocultan en modo de alto contraste y la de la cabecera también en pantallas estrechas. Las seis piezas suman aproximadamente 624 KiB.

| Archivo | Tamaño | Uso |
| --- | --- | --- |
| `public/decor/evidence-desk.webp` | 1536 × 1024 | Fondo de la composición de carpetas en Inicio |
| `public/decor/archive-map.webp` | 1672 × 941 | Cabecera de Expedientes y página 404 |
| `public/decor/classification-radar.webp` | 1672 × 941 | Cabecera de Ranking |
| `public/decor/pending-dossier.webp` | 1672 × 941 | Panel de reseña pendiente en cada ficha |
| `public/decor/archive-atmosphere.webp` | 1500 × 750 | Ornamentación ambiental fija a todo el ancho de la ventana, detrás del contenido |
| `public/decor/header-key.webp` | 700 × 461 | Llave y sello en el extremo derecho de la cabecera de escritorio |

## Prompts finales

La dirección común fue una oficina de archivo de una agencia ficticia, con tinta azul casi negra, papel envejecido, latón y acentos de lacre. Se evitaron logotipos, emblemas y personajes de franquicias existentes, cuadrículas de fondo, texto, números y marcas de agua. El efecto CRT se aplica por CSS sobre toda la web, no está incrustado en las imágenes.

1. **Mesa de evidencias:** fotografía cinematográfica cenital de una mesa de pizarra oscura con carpetas antiguas sin rotular, contactos fotográficos de vigilancia, brújula de latón, clips, sello de lacre, luz cálida de flexo y reflejo de pantalla cian. Composición con interés en el centro y a la derecha; sin personas ni palabras.
2. **Mapa de archivo:** fragmento de mapa aéreo sobre una mesa oscura con chinchetas de latón, ruta marcada en terracota y negativos fotográficos. Los dos tercios de la izquierda permanecen oscuros y despejados para colocar texto HTML; sin palabras ni cuadrícula digital.
3. **Radar de clasificación:** visor de radar analógico antiguo, anillos de metal patinado, medidor e índices de archivo a la derecha. Gran espacio oscuro a la izquierda para el título; sin números, letras ni símbolos de marca.
4. **Expediente pendiente:** cajón de archivo abierto con carpetas sin rotular, clip, fragmento de sello de lacre y tira de película a la derecha y abajo. El 70 % izquierdo queda oscuro y despejado para la reseña; sin letras, números ni logotipos.
5. **Atmósfera de archivo:** collage horizontal sobre fondo transparente con fragmentos de curvas cartográficas dibujadas a mano, anillos de brújula de latón, arcos de rutas forenses, fibras de papel rasgado y pequeñas motas de tinta cobriza. El centro queda vacío para el contenido; los detalles se concentran en los extremos. Paleta de latón `#d0b47c`, pátina `#9db7a3` y lacre `#c77b61` sobre tinta `#090e11`. Sin texto, números, logotipos, cuadrícula ni fondo opaco.
6. **Llave de cabecera:** bodegón aislado sobre fondo transparente de una llave antigua de latón, papel oscuro rasgado, hilo de cobre y pequeño sello de lacre sin marca. Composición horizontal con espacio libre a la izquierda; fotografía macro de tono cinematográfico. Paleta de latón `#d0b47c`, pizarra `#17242a` y lacre `#c77b61`. Sin texto, símbolos, personas, fondo ni marcas de agua.

Los archivos WebP son los recursos finales usados por el sitio. Las fuentes PNG de generación se conservaron fuera del repositorio; la página no depende de ellas. Las dos piezas nuevas se generaron con la herramienta integrada, se redimensionaron y convirtieron a WebP con ImageMagick; la llave se recortó para eliminar espacio transparente sobrante. Ambas conservan canal alfa.
