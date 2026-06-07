# INSTALLATION — ITWallpaper Dev Desk

## Quick Start

1. Download or clone the `ITwallpaper` folder.
2. Open **Wallpaper Engine** → **Create Wallpaper** → **Web**.
3. Select `index.html` from the folder.
4. Done — all properties appear in the right-side panel automatically.

---

## Wallpaper Engine Setup

### Setting the Weather City

In the WE properties panel, set **Weather city** to your city name in English
(e.g. `Bangkok`, `Moscow`, `London`). Weather loads from Open-Meteo (free,
no API key required). If the city is not found, the wallpaper falls back to
mock weather data.

### OpenWeatherMap (optional)

If you prefer OpenWeatherMap:

1. Get a free API key at https://openweathermap.org/api
2. Paste it into the **OWM API key** field in WE properties.

The wallpaper switches to OpenWeatherMap automatically when a key is present.

---

## Font Setup (optional but recommended)

The wallpaper uses **JetBrains Mono** for the code-editor aesthetic.

**Loading priority:**
1. Local files in `assets/fonts/` — fast, works offline
2. Google Fonts CDN (loaded async in `<head>`) — requires internet
3. System fallback: Cascadia Code → Consolas → monospace — always available

Without local font files the wallpaper still looks good via CDN or system fonts.
For a fully offline / Workshop-ready setup, add the font files manually:

### Steps

1. Download JetBrains Mono (free, OFL license):
   https://www.jetbrains.com/lp/mono/

2. Extract the archive and convert (or find pre-built) `.woff2` files
   for weights **400** (Regular) and **500** (Medium).
   Any online converter works: https://cloudconvert.com/ttf-to-woff2

3. Place files in `assets/fonts/` with these exact names:
   ```
   assets/fonts/JetBrainsMono-Regular.woff2
   assets/fonts/JetBrainsMono-Medium.woff2
   ```

4. No code changes needed — the `@font-face` rules in `style.css` already
   reference these paths and activate automatically when files are present.

---

## Offline Mode

When there is no internet connection:

| Feature | Behaviour |
|---|---|
| Weather | Falls back to animated mock data (plausible, not real) |
| Google Fonts CDN | Falls back to local `assets/fonts/` or system fonts |
| Thai lesson | Works fully offline (data is bundled in `thaiAlphabet.js`) |
| Everything else | Works fully offline |

---

## Running Outside Wallpaper Engine

Open `index.html` directly in any modern browser (`file://` or local server).

Differences from WE mode:
- Audio reactivity is inactive (no `wallpaperRegisterAudioListener`)
- WE property overrides are inactive (uses `config.js` defaults)
- All other features work normally

To change defaults when running outside WE, edit the `defaults` object in
`config.js`.

---

## Troubleshooting

**Clock shows wrong timezone**
The clock uses `new Date()` — it reads the system timezone. No fix needed;
it is correct by definition.

**Weather shows mock data**
Check that the city name is spelled correctly in English and that Open-Meteo
is reachable. The console (F12) will show a warning if geocoding failed.

**Widgets snap back after restart**
Positions are saved in `localStorage`. If the browser profile or WE clears
storage between sessions, positions reset. This is a browser/WE limitation.

**Settings gear not visible**
The gear icon is in the bottom-center bar. If the bottom bar is off-screen,
reduce zoom or increase monitor resolution in WE.
