/**
 * config.js — ITWallpaper Dashboard v1.0.0
 * Единственный источник истины для runtime-конфигурации.
 *
 * Дефолты живут здесь. При запуске Wallpaper Engine проталкивает
 * пользовательские свойства (см. project.json) через
 * window.wallpaperPropertyListener (script.js) → ITW.Config.apply().
 *
 * Файл не выполняет I/O. Только данные и минимальные аксессоры.
 *
 * ─── localStorage-ключи (всё персистирование проекта) ──────────────────────
 *
 *   itw_lang          string   'en' | 'ru' | 'auto'     Выбранный язык интерфейса
 *   itw_theme         string   'vscode'|'cursor'|'midnight'  Активная тема
 *   itw_format24h     string   'true' | 'false'         Формат часов
 *   itw_visibility    JSON     { clock, weather, ... }  Видимость виджетов
 *   itw_widget_pos    JSON     { "panel-id": {x,y} }    Позиции виджетов после drag
 *   itw_notes_v2      string   произвольный текст       Содержимое блокнота
 *   itw_thai_index    string   число                    Индекс текущего урока тайского
 *   itw_thai_date     string   Date.toDateString()      Дата последней авторотации урока
 *
 * ─── Очистка ────────────────────────────────────────────────────────────────
 *   Все ключи удаляются через «Reset All Settings» в панели настроек.
 * ───────────────────────────────────────────────────────────────────────────
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  var defaults = {
    general: {
      format24h: true,
      theme: 'vscode',          // vscode | cursor | midnight
      // Accent is an "r,g,b" string (0..255). Updated from WE color (0..1 floats).
      accent: '86,212,221'
    },
    weather: {
      enabled: true,
      provider: 'openmeteo',    // openmeteo — бесплатно без ключа; openweathermap — требует apiKey
      apiKey: '',               // empty -> mock data
      city: 'Phuket',
      units: 'metric',          // metric | imperial
      refreshMs: 10 * 60 * 1000
    },
    modules: {
      typewriter: true,
      particles: true,
      terminal: true,
      hotkeys: true
    },
    audio: {
      enabled: true,
      sensitivity: 1.0
    },
    particles: {
      density: 1.0
    },
    /* Видимость виджетов: управляется из панели настроек и WE-свойств */
    visibility: {
      clock:    true,
      weather:  true,
      notes:    true,
      hotkeys:  true,
      terminal: true,
      thai:     true
    }
  };

  // Live config object (mutated in place so module references stay valid).
  var config = JSON.parse(JSON.stringify(defaults));

  function deepMerge(target, patch) {
    Object.keys(patch).forEach(function (key) {
      var val = patch[key];
      if (val && typeof val === 'object' && !Array.isArray(val)) {
        if (!target[key] || typeof target[key] !== 'object') target[key] = {};
        deepMerge(target[key], val);
      } else {
        target[key] = val;
      }
    });
    return target;
  }

  ITW.Config = {
    /** Returns the live config object. */
    get: function () {
      return config;
    },
    /** Deep-merge a partial patch into the live config. */
    apply: function (patch) {
      deepMerge(config, patch);
      return config;
    }
  };
})(window);
