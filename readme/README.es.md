# ITWallpaper — Dev Desk

Un panel de desarrollador en vivo inspirado en VS Code / Cursor para **Wallpaper Engine**.

## Características
- **Reloj-editor** — la hora actual como un archivo `clock.js` con resaltado de sintaxis e introducción tipo máquina de escribir (opcional).
- **Clima** — datos en tiempo real (Open-Meteo, sin clave; clave OpenWeatherMap opcional): temperatura, sensación, máx/mín del día, humedad, punto de rocío, viento + dirección y rachas, presión, nubosidad, índice UV, visibilidad, precipitación y su probabilidad, amanecer/atardecer.
- **Lecciones de idiomas** — widget totalmente basado en datos. Cursos incluidos: **tailandés, español, inglés, ruso, japonés, coreano**. La transcripción sigue al idioma de la interfaz (cirílico para RU, latino en los demás).
- **Notas**, **Chuleta de terminal**, **Atajos de Windows**.
- **Apps de acceso rápido** — tablero de accesos editable (la página de Steam del autor por defecto; añadir/eliminar/reordenar con clic derecho). Los enlaces web se abren en el navegador; las apps locales se muestran como mosaicos (el entorno web de WE no puede ejecutar programas externos).
- **Duplicar módulos** — los paneles de notas y apps se pueden clonar, cada uno con su propio contenido.

## Personalización (ajustes ⚙)
- **Idioma principal** (interfaz) e **Idioma de estudio** (lecciones) se eligen por separado — EN / RU / ES / JA / KO / TH.
- **Temas**: VS Code Dark, Cursor, Midnight. **Color de acento** desde Wallpaper Engine.
- Selectores de **color de módulos** y **color de texto** (con entrada hex).
- **Fondo por widget**: sólido → semitransparente → ninguno.
- **Arrastrar y redimensionar** (modo edición), mostrar/ocultar widgets, botón de menú flotante y arrastrable.
- Todo se guarda en `localStorage`; "Restablecer todo" vuelve a los valores por defecto.

## Arquitectura
ES5, módulos IIFE, sin compilación — funciona en `file://` y dentro del runtime CEF de Wallpaper Engine.

## Autor
Hecho por **southbone** — https://steamcommunity.com/id/southbone/

Versión 1.2
