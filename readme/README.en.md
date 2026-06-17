# ITWallpaper — Dev Desk

A VS Code / Cursor-inspired live developer dashboard for **Wallpaper Engine**.

![preview](preview.jpg)

## Features
- **Editor clock** — live time rendered as a syntax-highlighted `clock.js` file, with an optional typewriter intro.
- **Weather** — real-time data (Open-Meteo, no key required; optional OpenWeatherMap key) with temperature, feels-like, daily high/low, humidity, dew point, wind + direction & gusts, pressure, cloud cover, UV index, visibility, precipitation and its probability, sunrise/sunset.
- **Language lessons** — fully data-driven course widget. Built-in courses: **Thai, Spanish, English, Russian, Japanese, Korean**. Transcription follows the interface language (Cyrillic for RU, Latin otherwise).
- **Notes**, **Terminal cheatsheet**, **Windows hotkeys**.
- **Quick-access apps** — editable shortcut board (the author Steam page by default, add/remove/reorder via right-click). Web links open in the browser; local apps are shown as tiles (Wallpaper Engine's web runtime cannot launch external programs).
- **Duplicate modules** — notes and apps panels can be cloned, each keeping its own content.

## Customization (in-wallpaper settings ⚙)
- **Primary language** (interface) and **Study language** (lessons) chosen independently — EN / RU / ES / JA / KO / TH.
- **Themes**: VS Code Dark, Cursor, Midnight. **Accent color** from Wallpaper Engine.
- **Module color** and **Text color** pickers (with hex input).
- **Per-widget background**: solid → semi-transparent → none.
- **Drag & resize** layout (Edit Mode), per-widget show/hide, collapsible draggable menu button.
- Everything persists in `localStorage`; **Reset All** restores defaults.

## Architecture
ES5, IIFE modules, no build step — works on `file://` and inside the Wallpaper Engine CEF runtime.
New languages are added by dropping a folder in `data/languages/<id>/dataset.js` and listing it in `data/languages/manifest.js`; no core logic changes.

## Localized descriptions
See the [`readme/`](readme/) folder for this description in English, Русский, Español, 日本語, 한국어 and ไทย.

## Author
Made by **southbone** — https://steamcommunity.com/id/southbone/

Version 1.2
