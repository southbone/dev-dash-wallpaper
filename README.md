<div align="center">

# Developer Dashboard for Wallpaper Engine

**A minimalist developer dashboard built for Wallpaper Engine.**  
Dark, functional, distraction-free. Inspired by VS Code and Cursor.

[![Wallpaper Engine](https://img.shields.io/badge/Wallpaper%20Engine-Web%20Wallpaper-blue?style=flat-square)](https://store.steampowered.com/app/431960/Wallpaper_Engine/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES5%2B-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

**Navigation / Навигация / การนำทาง**

[🇬🇧 English](#english) · [🇷🇺 Русский](#русский) · [🇹🇭 ภาษาไทย](#ภาษาไทย)

---

<a name="english"></a>

# 🇬🇧 English

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Customization](#customization)
- [Thai Learning Module](#thai-learning-module)
- [Installation](#installation)
- [Settings Reference](#settings-reference)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

Developer Dashboard is a fully interactive web wallpaper for [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/). It replaces your desktop background with a functional developer environment: live weather, a code-style clock, sticky notes, reference panels, and a Thai language learning module — all in a dark, minimal interface.

Every widget is draggable, resizable, and individually customizable. Settings persist across sessions via `localStorage`. No external dependencies, no build step, no API keys required.

---

## Screenshots

### Overview
> *Add a full-dashboard screenshot here.*

### Weather Widget
> *Add a screenshot of the weather panel with city name and conditions.*

### Thai Learning Module
> *Add a screenshot showing the daily consonant lesson.*

### Layout Editor
> *Add a screenshot with resize handles and drag mode active.*

### Settings Panel
> *Add a screenshot of the settings panel open.*

---

## Features

### Live Weather
Real-time weather data powered by [Open-Meteo](https://open-meteo.com/) — no API key required. The weather panel displays:

| Field | Description |
|---|---|
| Temperature | Current temperature in °C or °F |
| Condition | Clear, cloudy, rain, snow, fog, thunderstorm |
| Feels like | Apparent temperature |
| Humidity | Relative humidity % |
| Wind | Wind speed |
| Sunrise / Sunset | Local solar times |
| City name | Resolved name returned by geocoding |

The weather icon updates automatically based on WMO weather codes and time of day (day/night variants).

### User-Configurable Weather City
The city is configurable directly from the in-browser settings panel — no file editing required. Type any city name; the dashboard geocodes it via the Open-Meteo Geocoding API and fetches weather for the resolved coordinates. The city is saved to `localStorage` and restored on every startup.

### Code-Style Clock
The clock renders as a syntax-highlighted JavaScript object, matching the VS Code / Cursor aesthetic. Supports 24-hour and 12-hour formats. A typewriter intro animation plays on startup.

### Notes Widget
A persistent sticky notepad. Content is auto-saved to `localStorage` on every keystroke. Works completely offline.

### Windows Hotkeys Reference
A grouped reference panel for Windows keyboard shortcuts. Categories: System, Navigation, Productivity, Screenshots. Fully translated in EN and RU.

### Terminal Commands Reference
A cheatsheet for common terminal/shell commands. Categories: Navigation, Files, View & Search, System. Fully translated in EN and RU.

### Thai Alphabet Learning Module
One Thai consonant per session day, with full phonetic and vocabulary context. See the [Thai Learning Module](#thai-learning-module) section for details.

### EN / RU Localization
All interface text is available in English and Russian. Language is auto-detected from the browser and can be switched at any time from the language bar or settings panel.

### Widget Drag & Drop
In Layout Edit Mode, every widget can be dragged to any position. Positions persist across sessions.

### Widget Resizing
Each widget has a resize handle (bottom-right corner). Drag to resize freely. Sizes persist across sessions.

### Widget Background Toggle
Each widget panel can be toggled between a dark background and fully transparent. Useful for cleaner aesthetics on dark wallpapers.

### Layout Edit Mode
A dedicated mode for repositioning and resizing widgets. An indicator bar appears at the top while active. Exit by toggling the button in the settings panel.

### Theme Support
Three built-in themes:

| Theme | Description |
|---|---|
| VS Code Dark | Default dark theme |
| Cursor | Slightly warmer dark variant |
| Midnight | Maximum contrast, deep blacks |

### Persistent Settings
All user preferences (theme, language, clock format, widget positions, sizes, visibility, backgrounds, city, notes) are stored in `localStorage` and restored automatically on every load.

### Wallpaper Engine Integration
All dashboard properties are exposed in the Wallpaper Engine properties panel: accent color, theme, clock format, weather city, temperature units, widget visibility, audio reactivity, particle density, and typewriter intro toggle.

---

## Customization

### Drag Widgets
1. Open the settings panel (⚙ gear icon, bottom bar).
2. Click **Edit Mode**.
3. Drag any widget by clicking and holding its body.
4. Click **Edit Mode** again or close settings to exit.

Positions are saved automatically.

### Resize Widgets
While in Edit Mode, drag the triangle handle in the bottom-right corner of any widget. Sizes are saved automatically.

### Hide Widgets
Open the settings panel → **Show panels** section. Click the toggle button next to any widget to hide or show it. Visibility is saved automatically.

### Change Widget Backgrounds
Open the settings panel → **Widget Appearance** section. Click the **BG** button next to any widget to toggle its background on or off.

### Change Language
Click **Auto**, **EN**, or **RU** in the language bar at the bottom of the screen, or use the **Language** selector in the settings panel. **Auto** detects your browser language.

### Change Theme
Open the settings panel → **Theme** row. Choose **VS Code**, **Cursor**, or **Night**.

### Change Weather City
Open the settings panel → **Weather** section. Type any city name in the input field and press **Enter** or click away. The dashboard geocodes the city and updates weather immediately.

### Edit Notes
Click anywhere on the notes widget body and start typing. Content is saved automatically.

---

## Thai Learning Module

The Thai Learning Module displays one Thai consonant per day, advancing automatically at midnight. Manual navigation is available at any time.

### Daily Lesson
Each lesson covers a single Thai consonant (there are 44 in total). The lesson includes:

- The consonant character with a phonetic glow effect
- The Thai name of the letter (e.g., กอ ไก่)
- RTGS standard romanization
- Phuket / Southern Thai dialect pronunciation
- English romanization

### Lesson Navigation
Use the ← → arrow buttons in the nav bar above the lesson to jump to any consonant manually. The auto-advance moves forward one consonant per calendar day.

### Syllables Table
Each lesson includes a syllables table with example words demonstrating the consonant in initial and final position.

### Words Section
A vocabulary list showing common Thai words using the consonant. Each word is shown with:

| Column | Content |
|---|---|
| Thai | Thai script |
| RU | Russian translation |
| Phuket | Southern dialect pronunciation |
| EN | English translation |
| Meaning | Additional context |

### Phrases Section
Common conversational phrases are shown in Thai script with transliteration and translation.

### Progress Tracking
A progress bar at the top of the widget shows position within the 44-consonant cycle. The lesson index is saved to `localStorage`.

---

## Installation

### Wallpaper Engine (Recommended)

1. Download or clone this repository.
2. Open **Wallpaper Engine**.
3. Click **Open Wallpaper** in the bottom-left.
4. Navigate to the project folder and select `index.html`.
5. The wallpaper loads with default settings.
6. Configure all properties from the Wallpaper Engine properties panel on the right.

### Browser Preview

Open `index.html` directly in any modern Chromium-based browser. All UI elements and weather functionality work. Audio reactivity requires Wallpaper Engine.

> **Note:** The wallpaper uses the `file://` protocol. All assets are local; no server is required.

---

## Settings Reference

### Wallpaper Engine Properties

| Property | Type | Default | Description |
|---|---|---|---|
| Accent Color | Color | Cyan | Dashboard highlight and border color |
| Theme | Combo | VS Code Dark | Visual theme |
| 24-hour Clock | Bool | true | Clock format |
| Weather City | Text | Phuket | City for weather lookup |
| Temperature Units | Combo | Metric (°C) | Celsius or Fahrenheit |
| Show Clock | Bool | true | Toggle clock widget visibility |
| Show Weather | Bool | true | Toggle weather widget visibility |
| Show Notes | Bool | true | Toggle notes widget visibility |
| Show Hotkeys | Bool | true | Toggle hotkeys widget visibility |
| Show Terminal | Bool | true | Toggle terminal widget visibility |
| Show Thai Lesson | Bool | true | Toggle Thai widget visibility |
| Audio Reactive | Bool | true | Enable particle audio reactivity |
| Audio Sensitivity | Slider | 1.0 | Audio response multiplier (0.2–3.0) |
| Particle Density | Slider | 1.0 | Background particle density (0.2–2.0) |
| Typewriter Intro | Bool | true | Enable clock typewriter animation on startup |

### In-Browser Settings Panel

| Setting | Options | Description |
|---|---|---|
| Language | Auto / EN / RU | Interface language |
| Theme | VS Code / Cursor / Night | Visual theme |
| Clock | 24h / 12h | Time format |
| Show panels | Toggle per widget | Individual widget visibility |
| Widget Appearance | BG per widget | Toggle background per panel |
| Weather → City | Text input | City name for weather |
| Layout → Edit Mode | Button | Enter drag & resize mode |
| Layout → Reset Layout | Button | Restore default widget positions and sizes |
| Reset All Settings | Button | Clear all localStorage keys and reload |

### localStorage Keys

| Key | Type | Description |
|---|---|---|
| `itw_lang` | string | Selected language (`en` / `ru` / `auto`) |
| `itw_theme` | string | Active theme identifier |
| `itw_format24h` | string | Clock format flag |
| `itw_weather_city` | string | User-configured weather city |
| `itw_visibility` | JSON | Widget visibility state per panel |
| `itw_widget_pos` | JSON | Widget positions (left, top) |
| `itw_widget_sizes` | JSON | Widget dimensions (width, height) |
| `itw_widget_bg` | JSON | Background toggle state per panel |
| `itw_notes_v2` | string | Notes textarea content |
| `itw_thai_index` | string | Current Thai lesson index |
| `itw_thai_date` | string | Date of last auto-advance |

---

## Technologies

| Technology | Usage |
|---|---|
| HTML5 | Structure and widget markup |
| CSS3 | Themes, animations, responsive layout |
| JavaScript (ES5+) | All runtime logic, no framework |
| [Open-Meteo API](https://open-meteo.com/) | Free weather data, no API key |
| [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) | City name → coordinates |
| localStorage | All settings and content persistence |
| Wallpaper Engine Web Wallpaper | CEF/Chromium runtime, property bridge |
| JetBrains Mono | Primary monospace font (local + CDN fallback) |
| SVG | Animated weather icons |

---

## Project Structure

```
ITWallpaper/
├── index.html              # Entry point, widget markup, settings panel HTML
├── style.css               # All styles: themes, layout, widgets, responsive
├── script.js               # Main orchestrator — clock, weather, settings, layout, Thai
├── config.js               # Runtime config object + Wallpaper Engine property bridge
├── audio.js                # Audio-reactive level provider (WE audio hook)
├── weather.js              # Weather service: Open-Meteo + geocoding + mock fallback
├── particles.js            # Background floating glyph particle system
├── terminal.js             # Terminal commands cheatsheet component
├── hotkeys.js              # Windows hotkeys cheatsheet component
├── typewriter.js           # Clock editor model, renderer, and typewriter intro
├── project.json            # Wallpaper Engine manifest and property definitions
├── preview.jpg             # Workshop thumbnail (Steam)
├── data/
│   └── thaiAlphabet.js     # 44 Thai consonants database (global JS variable, no fetch)
└── assets/
    ├── fonts/
    │   ├── JetBrainsMono-Regular.woff2
    │   └── JetBrainsMono-Medium.woff2
    └── weather/
        ├── clear-day.svg
        ├── clear-night.svg
        ├── partly-cloudy-day.svg
        ├── partly-cloudy-night.svg
        ├── cloudy.svg
        ├── drizzle.svg
        ├── rain.svg
        ├── snow.svg
        ├── fog.svg
        └── thunderstorm.svg
```

---

## Roadmap

- [ ] Additional themes (light mode, high contrast)
- [ ] More Thai lesson content (tones, vowels, common phrases expanded)
- [ ] Extended customization options (font size, widget opacity)
- [ ] Additional localizations

---

## License

MIT License — see [LICENSE](LICENSE) for details.

JetBrains Mono — [SIL Open Font License](https://scripts.sil.org/OFL).  
Weather data — [Open-Meteo](https://open-meteo.com/) (CC BY 4.0).

---

<a name="русский"></a>
# 🇷🇺 Русский

## Содержание

- [Обзор](#обзор)
- [Скриншоты](#скриншоты)
- [Функции](#функции)
- [Кастомизация](#кастомизация)
- [Модуль тайского языка](#модуль-тайского-языка)
- [Установка](#установка)
- [Настройки](#настройки)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Дорожная карта](#дорожная-карта)
- [Лицензия](#лицензия)

---

## Обзор

Developer Dashboard — интерактивный веб-обои для [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/). Заменяет рабочий стол функциональной средой разработчика: погода в реальном времени, часы в стиле кода, заметки, справочные панели и модуль изучения тайского языка — всё в тёмном минималистичном интерфейсе.

Каждый виджет можно перетаскивать, менять размер и настраивать отдельно. Настройки сохраняются между сессиями через `localStorage`. Нет внешних зависимостей, сборки и API-ключей.

---

## Скриншоты

### Общий вид
> *Добавьте скриншот всего дашборда.*

### Виджет погоды
> *Добавьте скриншот панели погоды с названием города и условиями.*

### Модуль тайского языка
> *Добавьте скриншот с ежедневным уроком.*

### Редактор макета
> *Добавьте скриншот с активными маркерами изменения размера.*

### Панель настроек
> *Добавьте скриншот открытой панели настроек.*

---

## Функции

### Погода в реальном времени
Данные о погоде через [Open-Meteo](https://open-meteo.com/) — без API-ключа. Панель погоды отображает:

| Поле | Описание |
|---|---|
| Температура | Текущая температура в °C или °F |
| Состояние | Ясно, облачно, дождь, снег, туман, гроза |
| Ощущается | Ощущаемая температура |
| Влажность | Относительная влажность % |
| Ветер | Скорость ветра |
| Рассвет / Закат | Местное солнечное время |
| Город | Название города, полученное геокодированием |

### Настраиваемый город погоды
Город настраивается прямо из панели настроек браузера — без редактирования файлов. Введите любое название города; дашборд выполняет геокодирование через Open-Meteo Geocoding API и получает погоду по найденным координатам. Город сохраняется в `localStorage`.

### Часы в стиле кода
Часы отображаются как синтаксически подсвеченный JavaScript-объект в стиле VS Code / Cursor. Поддерживаются форматы 24 часа и 12 часов. При запуске воспроизводится анимация печатной машинки.

### Виджет заметок
Постоянная записная книжка. Содержимое сохраняется автоматически при каждом нажатии клавиши. Работает полностью офлайн.

### Справочник горячих клавиш Windows
Сгруппированный справочник сочетаний клавиш. Категории: Система, Навигация, Продуктивность, Скриншоты. Переведён на EN и RU.

### Справочник команд терминала
Шпаргалка по командам терминала. Категории: Навигация, Файлы, Просмотр и поиск, Система. Переведён на EN и RU.

### Модуль тайского языка
Один тайский согласный в день с полным фонетическим и лексическим контекстом. Подробнее — в разделе [Модуль тайского языка](#модуль-тайского-языка).

### Локализация EN / RU
Весь текст интерфейса доступен на английском и русском языках. Язык определяется автоматически из браузера и может быть изменён в любое время.

### Перетаскивание виджетов
В режиме редактирования макета каждый виджет можно перетаскивать в любое место экрана. Позиции сохраняются.

### Изменение размеров виджетов
У каждого виджета есть маркер изменения размера в правом нижнем углу. Размеры сохраняются.

### Переключение фона виджета
Каждую панель можно переключить между тёмным фоном и полной прозрачностью.

### Режим редактирования макета
Специальный режим для перемещения и изменения размеров виджетов. В верхней части экрана появляется индикатор.

### Темы оформления
Три встроенные темы:

| Тема | Описание |
|---|---|
| VS Code Dark | Тёмная тема по умолчанию |
| Cursor | Чуть теплее тёмный вариант |
| Midnight | Максимальный контраст, глубокий чёрный |

### Сохранение настроек
Все настройки (тема, язык, формат часов, позиции и размеры виджетов, видимость, фоны, город, заметки) хранятся в `localStorage` и восстанавливаются автоматически.

### Интеграция с Wallpaper Engine
Все свойства дашборда доступны в панели свойств Wallpaper Engine: цвет акцента, тема, формат часов, город погоды, единицы температуры, видимость виджетов, аудиореактивность, плотность частиц, анимация вступления.

---

## Кастомизация

### Перетаскивание виджетов
1. Откройте панель настроек (значок ⚙ в нижней панели).
2. Нажмите **Режим редакт.**
3. Перетащите любой виджет за его тело.
4. Нажмите кнопку снова или закройте настройки для выхода.

Позиции сохраняются автоматически.

### Изменение размеров виджетов
В режиме редактирования потяните треугольный маркер в правом нижнем углу виджета. Размеры сохраняются автоматически.

### Скрытие виджетов
Настройки → раздел **Показать панели**. Нажмите кнопку-переключатель рядом с нужным виджетом.

### Изменение фона виджетов
Настройки → раздел **Внешний вид**. Нажмите **ФОН** рядом с нужным виджетом.

### Изменение языка
Нажмите **Авто**, **EN** или **RU** в языковой панели внизу экрана, или используйте селектор **Язык** в панели настроек.

### Изменение темы
Настройки → строка **Тема**. Выберите VS Code, Cursor или Night.

### Изменение города погоды
Настройки → раздел **Погода**. Введите название города и нажмите **Enter** или кликните вне поля.

### Редактирование заметок
Кликните по телу виджета заметок и начните вводить текст. Содержимое сохраняется автоматически.

---

## Модуль тайского языка

Модуль отображает один тайский согласный в день, автоматически переходя к следующему в полночь. Доступна ручная навигация в любое время.

### Ежедневный урок
Каждый урок охватывает один согласный (всего 44). Урок включает:

- Символ буквы с фонетическим свечением
- Тайское название буквы (например, กอ ไก่)
- Стандартную романизацию RTGS
- Произношение в диалекте Пхукет / Южного Таиланда
- Английскую романизацию

### Навигация по урокам
Кнопки ← → над уроком позволяют перейти к любому согласному вручную. Автопереход — раз в сутки.

### Таблица слогов
Каждый урок содержит таблицу слогов с примерами слов в начальной и конечной позиции.

### Раздел слов

| Столбец | Содержимое |
|---|---|
| Thai | Тайское написание |
| RU | Перевод на русский |
| Phuket | Произношение на диалекте Пхукет |
| EN | Перевод на английский |
| Meaning | Дополнительный контекст |

### Раздел фраз
Разговорные фразы на тайском с транслитерацией и переводом.

### Отслеживание прогресса
Полоса прогресса вверху виджета показывает позицию в цикле из 44 согласных. Индекс урока сохраняется в `localStorage`.

---

## Установка

### Wallpaper Engine (рекомендуется)

1. Скачайте или клонируйте репозиторий.
2. Откройте **Wallpaper Engine**.
3. Нажмите **Open Wallpaper** в левом нижнем углу.
4. Перейдите в папку проекта и выберите `index.html`.
5. Обои загрузятся с настройками по умолчанию.
6. Настройте всё из панели свойств Wallpaper Engine.

### Предпросмотр в браузере

Откройте `index.html` напрямую в современном браузере на базе Chromium. Вся функциональность, включая погоду, работает. Аудиореактивность требует Wallpaper Engine.

---

## Настройки

### Панель свойств Wallpaper Engine

| Свойство | Тип | По умолчанию | Описание |
|---|---|---|---|
| Accent Color | Цвет | Голубой | Цвет акцента и рамок |
| Theme | Список | VS Code Dark | Визуальная тема |
| 24-hour Clock | Булево | true | Формат часов |
| Weather City | Текст | Phuket | Город для погоды |
| Temperature Units | Список | Metric (°C) | Цельсий или Фаренгейт |
| Show [Widget] | Булево | true | Показать / скрыть каждую панель |
| Audio Reactive | Булево | true | Аудиореактивность частиц |
| Audio Sensitivity | Слайдер | 1.0 | Чувствительность (0.2–3.0) |
| Particle Density | Слайдер | 1.0 | Плотность частиц (0.2–2.0) |
| Typewriter Intro | Булево | true | Анимация печатной машинки при запуске |

### Внутрибраузерная панель настроек

| Настройка | Опции | Описание |
|---|---|---|
| Язык | Авто / EN / RU | Язык интерфейса |
| Тема | VS Code / Cursor / Night | Визуальная тема |
| Часы | 24h / 12h | Формат времени |
| Показать панели | Переключатель | Видимость каждого виджета |
| Внешний вид | ФОН per widget | Фон панели вкл/выкл |
| Погода → Город | Ввод текста | Название города |
| Макет → Режим редакт. | Кнопка | Режим перемещения и изменения размеров |
| Макет → Сбросить макет | Кнопка | Сброс позиций и размеров |
| Сбросить всё | Кнопка | Очистить localStorage и перезагрузить |

### Ключи localStorage

| Ключ | Тип | Описание |
|---|---|---|
| `itw_lang` | string | Выбранный язык (`en` / `ru` / `auto`) |
| `itw_theme` | string | Идентификатор активной темы |
| `itw_format24h` | string | Флаг формата часов |
| `itw_weather_city` | string | Настроенный пользователем город погоды |
| `itw_visibility` | JSON | Состояние видимости виджетов |
| `itw_widget_pos` | JSON | Позиции виджетов (left, top) |
| `itw_widget_sizes` | JSON | Размеры виджетов (width, height) |
| `itw_widget_bg` | JSON | Состояние фона по панелям |
| `itw_notes_v2` | string | Содержимое заметок |
| `itw_thai_index` | string | Текущий индекс урока тайского |
| `itw_thai_date` | string | Дата последнего автоперехода |

---

## Технологии

| Технология | Применение |
|---|---|
| HTML5 | Разметка виджетов и панели настроек |
| CSS3 | Темы, анимации, адаптивная вёрстка |
| JavaScript (ES5+) | Вся логика, без фреймворков |
| Open-Meteo API | Бесплатные данные о погоде, без ключа |
| Open-Meteo Geocoding API | Название города → координаты |
| localStorage | Сохранение всех настроек и контента |
| Wallpaper Engine Web Wallpaper | CEF/Chromium runtime, мост свойств |
| JetBrains Mono | Основной моноширинный шрифт |
| SVG | Анимированные иконки погоды |

---

## Структура проекта

```
ITWallpaper/
├── index.html              # Точка входа, разметка виджетов
├── style.css               # Стили: темы, макет, виджеты
├── script.js               # Оркестратор: часы, погода, настройки, тайский
├── config.js               # Конфиг + мост Wallpaper Engine
├── audio.js                # Аудиореактивность (WE)
├── weather.js              # Сервис погоды: Open-Meteo + геокодирование
├── particles.js            # Фоновые частицы
├── terminal.js             # Компонент команд терминала
├── hotkeys.js              # Компонент горячих клавиш
├── typewriter.js           # Редактор часов и анимация
├── project.json            # Манифест Wallpaper Engine
├── preview.jpg             # Превью для мастерской Steam
├── data/
│   └── thaiAlphabet.js     # База тайских согласных (JS-переменная)
└── assets/
    ├── fonts/
    │   ├── JetBrainsMono-Regular.woff2
    │   └── JetBrainsMono-Medium.woff2
    └── weather/
        └── *.svg           # Иконки погоды (день/ночь)
```

---

## Дорожная карта

- [ ] Дополнительные темы (светлая, высококонтрастная)
- [ ] Расширенный контент уроков тайского (тоны, гласные)
- [ ] Расширенные опции кастомизации (размер шрифта, прозрачность виджетов)
- [ ] Дополнительные локализации

---

## Лицензия

MIT License — подробнее в файле [LICENSE](LICENSE).

JetBrains Mono — [SIL Open Font License](https://scripts.sil.org/OFL).  
Данные о погоде — [Open-Meteo](https://open-meteo.com/) (CC BY 4.0).

---

<a name="ภาษาไทย"></a>

# 🇹🇭 ภาษาไทย

## สารบัญ

- [ภาพรวม](#ภาพรวม)
- [ภาพหน้าจอ](#ภาพหน้าจอ)
- [คุณสมบัติ](#คุณสมบัติ)
- [การปรับแต่ง](#การปรับแต่ง)
- [โมดูลภาษาไทย](#โมดูลภาษาไทย)
- [การติดตั้ง](#การติดตั้ง)
- [การตั้งค่า](#การตั้งค่า)
- [เทคโนโลยี](#เทคโนโลยี)
- [โครงสร้างโปรเจค](#โครงสร้างโปรเจค)
- [แผนการพัฒนา](#แผนการพัฒนา)
- [สัญญาอนุญาต](#สัญญาอนุญาต)

---

## ภาพรวม

Developer Dashboard คือวอลเปเปอร์เว็บแบบโต้ตอบสำหรับ [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/) ที่แทนที่พื้นหลังเดสก์ท็อปด้วยสภาพแวดล้อมนักพัฒนาที่ใช้งานได้จริง ได้แก่ สภาพอากาศแบบเรียลไทม์ นาฬิกาสไตล์โค้ด โน้ต แผงอ้างอิง และโมดูลเรียนภาษาไทย ทั้งหมดในอินเทอร์เฟซมินิมอลสีเข้ม

วิดเจ็ตทุกตัวสามารถลาก ปรับขนาด และปรับแต่งได้แยกกัน การตั้งค่าทั้งหมดบันทึกผ่าน `localStorage` ไม่มีการพึ่งพาภายนอก ไม่ต้องคอมไพล์ และไม่ต้องใช้ API key

---

## ภาพหน้าจอ

### ภาพรวมทั้งหมด
> *เพิ่มภาพหน้าจอของแดชบอร์ดทั้งหมดที่นี่*

### วิดเจ็ตสภาพอากาศ
> *เพิ่มภาพหน้าจอของแผงสภาพอากาศพร้อมชื่อเมืองและสภาวะ*

### โมดูลภาษาไทย
> *เพิ่มภาพหน้าจอบทเรียนรายวัน*

### โปรแกรมแก้ไขเลย์เอาต์
> *เพิ่มภาพหน้าจอที่แสดงตัวจับปรับขนาดและโหมดลาก*

### แผงการตั้งค่า
> *เพิ่มภาพหน้าจอแผงการตั้งค่าที่เปิดอยู่*

---

## คุณสมบัติ

### สภาพอากาศแบบเรียลไทม์
ข้อมูลสภาพอากาศผ่าน [Open-Meteo](https://open-meteo.com/) โดยไม่ต้องใช้ API key แผงสภาพอากาศแสดง:

| ช่อง | คำอธิบาย |
|---|---|
| อุณหภูมิ | อุณหภูมิปัจจุบันในหน่วย °C หรือ °F |
| สภาวะ | แจ่มใส มีเมฆ ฝน หิมะ หมอก พายุฟ้าคะนอง |
| รู้สึกเหมือน | อุณหภูมิที่รู้สึก |
| ความชื้น | ความชื้นสัมพัทธ์ % |
| ลม | ความเร็วลม |
| พระอาทิตย์ขึ้น / ตก | เวลาสุริยะท้องถิ่น |
| ชื่อเมือง | ชื่อที่ได้จากการ geocoding |

### เมืองสภาพอากาศที่กำหนดเองได้
ตั้งค่าเมืองได้โดยตรงจากแผงการตั้งค่าในเบราว์เซอร์ พิมพ์ชื่อเมืองใดก็ได้ แดชบอร์ดจะทำ geocoding ผ่าน Open-Meteo Geocoding API และอัปเดตสภาพอากาศทันที เมืองจะถูกบันทึกใน `localStorage`

### นาฬิกาสไตล์โค้ด
นาฬิกาแสดงผลเป็น JavaScript object ที่มีการเน้นสีไวยากรณ์สไตล์ VS Code / Cursor รองรับรูปแบบ 24 ชั่วโมงและ 12 ชั่วโมง มีแอนิเมชันพิมพ์ดีดเมื่อเริ่มต้น

### วิดเจ็ตโน้ต
สมุดโน้ตถาวร เนื้อหาบันทึกอัตโนมัติทุกครั้งที่กดแป้น ทำงานได้โดยไม่ต้องเชื่อมต่ออินเทอร์เน็ต

### ข้อมูลอ้างอิงปุ่มลัด Windows
แผงอ้างอิงปุ่มลัด Windows แบบจัดกลุ่ม หมวดหมู่: ระบบ การนำทาง ประสิทธิภาพ ภาพหน้าจอ แปลเป็น EN และ RU

### ข้อมูลอ้างอิงคำสั่ง Terminal
คู่มือคำสั่ง terminal ทั่วไป หมวดหมู่: การนำทาง ไฟล์ ดูและค้นหา ระบบ แปลเป็น EN และ RU

### โมดูลเรียนภาษาไทย
พยัญชนะไทยหนึ่งตัวต่อวัน พร้อมบริบทเสียงและคำศัพท์ครบถ้วน

### การแปลภาษา EN / RU
ข้อความอินเทอร์เฟซทั้งหมดมีทั้งภาษาอังกฤษและรัสเซีย ตรวจจับภาษาจากเบราว์เซอร์อัตโนมัติ

### การลากวิดเจ็ต
ในโหมดแก้ไขเลย์เอาต์ สามารถลากวิดเจ็ตไปตำแหน่งใดก็ได้ ตำแหน่งจะถูกบันทึก

### การปรับขนาดวิดเจ็ต
วิดเจ็ตแต่ละตัวมีตัวจับปรับขนาดที่มุมขวาล่าง ขนาดจะถูกบันทึก

### การสลับพื้นหลังวิดเจ็ต
แต่ละแผงสามารถสลับระหว่างพื้นหลังสีเข้มและโปร่งใสสมบูรณ์

### โหมดแก้ไขเลย์เอาต์
โหมดเฉพาะสำหรับการย้ายและปรับขนาดวิดเจ็ต แถบตัวบ่งชี้จะปรากฏที่ด้านบนขณะใช้งาน

### รองรับธีม
ธีมในตัวสามตัว: VS Code Dark, Cursor, Midnight

### การบันทึกการตั้งค่า
การตั้งค่าทั้งหมดบันทึกใน `localStorage` และโหลดอัตโนมัติทุกครั้ง

### การรวมกับ Wallpaper Engine
คุณสมบัติแดชบอร์ดทั้งหมดเปิดเผยในแผงคุณสมบัติ Wallpaper Engine

---

## การปรับแต่ง

### ลากวิดเจ็ต
1. เปิดแผงการตั้งค่า (ไอคอน ⚙ ที่แถบด้านล่าง)
2. คลิก **Edit Mode**
3. ลากวิดเจ็ตใดก็ได้โดยคลิกค้างที่ตัวมัน
4. คลิกปุ่มอีกครั้งหรือปิดการตั้งค่าเพื่อออก

ตำแหน่งจะบันทึกอัตโนมัติ

### ปรับขนาดวิดเจ็ต
ในโหมดแก้ไข ลากสามเหลี่ยมที่มุมขวาล่างของวิดเจ็ต ขนาดจะบันทึกอัตโนมัติ

### ซ่อนวิดเจ็ต
การตั้งค่า → ส่วน **Show panels** คลิกปุ่มสลับข้างวิดเจ็ตที่ต้องการ

### เปลี่ยนพื้นหลังวิดเจ็ต
การตั้งค่า → ส่วน **Widget Appearance** คลิก **BG** ข้างวิดเจ็ตที่ต้องการ

### เปลี่ยนภาษา
คลิก **Auto**, **EN** หรือ **RU** ที่แถบภาษาด้านล่างหน้าจอ หรือใช้ตัวเลือก **Language** ในแผงการตั้งค่า

### เปลี่ยนธีม
การตั้งค่า → แถว **Theme** เลือก VS Code, Cursor หรือ Night

### เปลี่ยนเมืองสภาพอากาศ
การตั้งค่า → ส่วน **Weather** พิมพ์ชื่อเมืองและกด **Enter** หรือคลิกที่อื่น

### แก้ไขโน้ต
คลิกที่ตัววิดเจ็ตโน้ตแล้วเริ่มพิมพ์ เนื้อหาจะบันทึกอัตโนมัติ

---

## โมดูลภาษาไทย

โมดูลนี้แสดงพยัญชนะไทยหนึ่งตัวต่อวัน โดยเลื่อนไปยังตัวถัดไปโดยอัตโนมัติเมื่อเที่ยงคืน มีการนำทางด้วยตนเองได้ตลอดเวลา

### บทเรียนรายวัน
แต่ละบทเรียนครอบคลุมพยัญชนะหนึ่งตัวจากทั้งหมด 44 ตัว บทเรียนประกอบด้วย:

- ตัวอักษรพร้อมเอฟเฟกต์เรืองแสงสัทศาสตร์
- ชื่อไทยของตัวอักษร (เช่น กอ ไก่)
- การถอดเสียงมาตรฐาน RTGS
- การออกเสียงภาษาถิ่นภูเก็ต / ภาคใต้
- การถอดเสียงภาษาอังกฤษ

### การนำทางบทเรียน
ใช้ปุ่มลูกศร ← → เหนือบทเรียนเพื่อข้ามไปยังพยัญชนะใดก็ได้ด้วยตนเอง การเลื่อนอัตโนมัติ — หนึ่งตัวต่อวัน

### ตารางพยางค์
แต่ละบทเรียนมีตารางพยางค์พร้อมตัวอย่างคำ แสดงพยัญชนะในตำแหน่งต้นและท้าย

### ส่วนคำศัพท์

| คอลัมน์ | เนื้อหา |
|---|---|
| Thai | อักษรไทย |
| RU | คำแปลภาษารัสเซีย |
| Phuket | การออกเสียงภาษาถิ่นภูเก็ต |
| EN | คำแปลภาษาอังกฤษ |
| Meaning | บริบทเพิ่มเติม |

### ส่วนวลี
วลีสนทนาทั่วไปในภาษาไทยพร้อมการถอดเสียงและคำแปล

### การติดตามความคืบหน้า
แถบความคืบหน้าที่ด้านบนของวิดเจ็ตแสดงตำแหน่งในวงจร 44 พยัญชนะ ดัชนีบทเรียนบันทึกใน `localStorage`

---

## การติดตั้ง

### Wallpaper Engine (แนะนำ)

1. ดาวน์โหลดหรือ clone repository
2. เปิด **Wallpaper Engine**
3. คลิก **Open Wallpaper** ที่มุมล่างซ้าย
4. ไปที่โฟลเดอร์โปรเจคและเลือก `index.html`
5. วอลเปเปอร์โหลดด้วยการตั้งค่าเริ่มต้น
6. ปรับแต่งทุกอย่างจากแผงคุณสมบัติ Wallpaper Engine

### ดูตัวอย่างในเบราว์เซอร์

เปิด `index.html` โดยตรงในเบราว์เซอร์ที่ใช้ Chromium ฟังก์ชันทั้งหมดรวมถึงสภาพอากาศทำงานได้ การตอบสนองต่อเสียงต้องการ Wallpaper Engine

---

## การตั้งค่า

### แผงคุณสมบัติ Wallpaper Engine

| คุณสมบัติ | ประเภท | ค่าเริ่มต้น | คำอธิบาย |
|---|---|---|---|
| Accent Color | สี | ฟ้าอมเขียว | สีเน้นและเส้นขอบ |
| Theme | รายการ | VS Code Dark | ธีมภาพ |
| 24-hour Clock | บูลีน | true | รูปแบบนาฬิกา |
| Weather City | ข้อความ | Phuket | เมืองสำหรับสภาพอากาศ |
| Temperature Units | รายการ | Metric (°C) | เซลเซียสหรือฟาเรนไฮต์ |
| Show [Widget] | บูลีน | true | แสดง/ซ่อนแต่ละแผง |
| Audio Reactive | บูลีน | true | การตอบสนองต่อเสียงของอนุภาค |
| Audio Sensitivity | สไลเดอร์ | 1.0 | การตอบสนอง (0.2–3.0) |
| Particle Density | สไลเดอร์ | 1.0 | ความหนาแน่นของอนุภาค (0.2–2.0) |
| Typewriter Intro | บูลีน | true | แอนิเมชันพิมพ์ดีดเมื่อเริ่มต้น |

### แผงการตั้งค่าในเบราว์เซอร์

| การตั้งค่า | ตัวเลือก | คำอธิบาย |
|---|---|---|
| Language | Auto / EN / RU | ภาษาอินเทอร์เฟซ |
| Theme | VS Code / Cursor / Night | ธีมภาพ |
| Clock | 24h / 12h | รูปแบบเวลา |
| Show panels | สลับต่อวิดเจ็ต | การมองเห็นวิดเจ็ตแต่ละตัว |
| Widget Appearance | BG ต่อวิดเจ็ต | สลับพื้นหลังของแผง |
| Weather → City | ช่องข้อความ | ชื่อเมือง |
| Layout → Edit Mode | ปุ่ม | โหมดลากและปรับขนาด |
| Layout → Reset Layout | ปุ่ม | รีเซ็ตตำแหน่งและขนาด |
| Reset All Settings | ปุ่ม | ล้าง localStorage และโหลดใหม่ |

---

## เทคโนโลยี

| เทคโนโลยี | การใช้งาน |
|---|---|
| HTML5 | โครงสร้างวิดเจ็ตและแผงการตั้งค่า |
| CSS3 | ธีม แอนิเมชัน เลย์เอาต์ |
| JavaScript (ES5+) | ลอจิกทั้งหมด ไม่มี framework |
| Open-Meteo API | ข้อมูลสภาพอากาศฟรี ไม่ต้องใช้ key |
| Open-Meteo Geocoding API | ชื่อเมือง → พิกัด |
| localStorage | บันทึกการตั้งค่าทั้งหมด |
| Wallpaper Engine Web Wallpaper | CEF/Chromium runtime |
| JetBrains Mono | ฟอนต์ monospace หลัก |
| SVG | ไอคอนสภาพอากาศแบบแอนิเมชัน |

---

## โครงสร้างโปรเจค

```
ITWallpaper/
├── index.html              # จุดเริ่มต้น โครงสร้างวิดเจ็ต
├── style.css               # สไตล์ทั้งหมด: ธีม เลย์เอาต์ วิดเจ็ต
├── script.js               # ออร์เคสเตรเตอร์หลัก
├── config.js               # คอนฟิก + bridge Wallpaper Engine
├── audio.js                # การตอบสนองต่อเสียง
├── weather.js              # บริการสภาพอากาศ
├── particles.js            # ระบบอนุภาคพื้นหลัง
├── terminal.js             # คอมโพเนนต์คำสั่ง terminal
├── hotkeys.js              # คอมโพเนนต์ปุ่มลัด
├── typewriter.js           # โมเดลนาฬิกาและแอนิเมชัน
├── project.json            # Manifest Wallpaper Engine
├── preview.jpg             # ภาพตัวอย่าง Steam Workshop
├── data/
│   └── thaiAlphabet.js     # ฐานข้อมูลพยัญชนะไทย 44 ตัว
└── assets/
    ├── fonts/
    │   ├── JetBrainsMono-Regular.woff2
    │   └── JetBrainsMono-Medium.woff2
    └── weather/
        └── *.svg           # ไอคอนสภาพอากาศ (กลางวัน/กลางคืน)
```

---

## แผนการพัฒนา

- [ ] ธีมเพิ่มเติม (โหมดสว่าง ความคมชัดสูง)
- [ ] เนื้อหาบทเรียนภาษาไทยที่ขยายเพิ่ม (เสียงวรรณยุกต์ สระ วลีที่ขยายเพิ่ม)
- [ ] ตัวเลือกการปรับแต่งเพิ่มเติม (ขนาดฟอนต์ ความโปร่งใสของวิดเจ็ต)
- [ ] การแปลภาษาเพิ่มเติม

---

## สัญญาอนุญาต

MIT License — ดูรายละเอียดในไฟล์ [LICENSE](LICENSE)

JetBrains Mono — [SIL Open Font License](https://scripts.sil.org/OFL)  
ข้อมูลสภาพอากาศ — [Open-Meteo](https://open-meteo.com/) (CC BY 4.0)
