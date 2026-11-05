# Imagen de archivo y emblema del grupo

La portada usa una copia idéntica de la fotografía original facilitada por el usuario, sin recreación ni alteración de sus píxeles. El emblema sí se generó con la herramienta integrada de imágenes tomando esa foto y la identidad previa del sitio como referencias.

| Recurso | Archivo | Formato y uso |
| --- | --- | --- |
| Emblema de Los Inocentes | `public/brand/los-inocentes-emblem.webp` | 320 × 320, transparencia; cabecera y sello de Inicio |
| Icono del navegador | `public/favicon.png` | 64 × 64, derivado del emblema |
| Fotografía original del grupo | `public/art/grupo-original.jpeg` | 1200 × 1600; copia byte por byte de `public/WhatsApp Image 2026-11-04 at 12.49.19.jpeg`, mostrada en el dossier de Inicio |

## Prompts

**Emblema:** usar como referencias el sello circular previo, la cabecera previa y la fotografía del grupo. Crear un símbolo original circular sobre fondo transparente con doble aro de latón, tres retratos grabados y simplificados que conserven la disposición y rasgos distintivos de los integrantes, y un pequeño acento de cerradura. Debe leerse a 48 px. Paleta de latón, papel envejecido y lacre sobre tinta azul oscura. Sin texto, números, símbolos de las cintas, marcas externas ni personas adicionales.

El dossier recorta la fotografía solo mediante CSS para que encaje en su marco; el archivo de imagen conserva el original íntegro. Las condiciones de uso del emblema generado y de la fotografía dependen de la herramienta empleada y de los derechos de quien facilitó la foto; no se atribuye aquí una licencia externa.

## Fotos de las visitas

Las 13 fotos adicionales de WhatsApp se copiaron sin modificar sus píxeles a `public/art/visitas/`. Se muestran en `/visitas/` y una selección aparece en Inicio. Las siete fotos con sala reconocible se muestran además en sus fichas: Atraco al Compadre, Night of the Meteor, El Lechero, La Casa sin Ojos, La Juguetería Mimitos, Los Portales y Valhalla. Las seis restantes permanecen en la galería general porque la sala exacta no se puede asegurar solo con la imagen. El inventario y sus textos alternativos están en `src/data/group-photos.ts`.
