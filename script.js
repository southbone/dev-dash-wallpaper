/**
 * script.js — ITWallpaper Dashboard v1.0.0
 *
 * Оркестратор дашборда. Уникальная логика:
 *   1.  Локализация    — таблица переводов EN/RU, переключатель языка
 *   2.  Видимость      — applyVisibility() + persistence
 *   3.  WE-мост        — wallpaperPropertyListener → ITW.Config
 *   4.  WeatherCanvas  — SVG-иконки по WMO-кодам
 *   5.  Погода         — делегирует в ITW.Weather
 *   6.  Редактор-часы  — делегирует в ITW.Editor / ITW.Typewriter
 *   7.  Заметки        — localStorage
 *   8.  Тайский        — 44 буквы, слоги, навигация, авторотация
 *   9.  Языковая панель
 *   10. Система виджетов — позиционирование, persistence
 *   11. Drag & Drop    — перетаскивание виджетов в layout-edit режиме
 *   12. Панель настроек — открывается через шестерёнку
 *   13. RAF-цикл       — частицы + аудио
 *   14. Инициализация  — boot()
 *
 * Совместимость: ES5, без модулей — работает на file:// и в WE CEF.
 */

/* Версия приложения — отображается в панели настроек */
var APP_VERSION = '1.0.0';

(function () {
  'use strict';

  /* =========================================================================
     1. ЛОКАЛИЗАЦИЯ
     Язык: сохранённый в localStorage → браузер → EN.
  ========================================================================= */

  var LANG_KEY         = 'itw_lang';
  var WEATHER_CITY_KEY = 'itw_weather_city';

  /* Определить активный язык (en | ru) */
  function detectLocale() {
    var saved = '';
    try { saved = localStorage.getItem(LANG_KEY) || ''; } catch (e) {}
    if (saved === 'ru') return 'ru';
    if (saved === 'en') return 'en';
    var browser = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    return browser === 'ru' ? 'ru' : 'en';
  }

  var locale = detectLocale();

  /* Таблица переводов */
  var TRANSLATIONS = {

    en: {
      panels: {
        weather:  '// weather',
        notes:    '// notes',
        hotkeys:  '// windows hotkeys',
        terminal: '// terminal commands',
        clock:    '// clock',
        thai:     '// thai'
      },
      weather: {
        feelsLike: 'feels like', humidity: 'humidity', wind: 'wind',
        sunrise: 'sunrise', sunset: 'sunset',
        loading: 'Loading…', unavailable: 'Unavailable'
      },
      notes: {
        placeholder: 'click to edit…',
        defaultText: '[ ] Deploy bot\n[ ] Fix landing\n[ ] Learn Thai'
      },
      lang: { auto: 'Auto' },
      thai: {
        loading: 'Loading…', lesson: 'Lesson', words: 'Words',
        syllables: 'Syllables', phrases: 'Phrases',
        phuket: 'Phuket', standard: 'Central'
      },
      settings: {
        language: 'Language', theme: 'Theme', clockFmt: 'Clock',
        panels: 'Show panels', layout: 'Layout',
        editMode: 'Edit Mode', reset: 'Reset Layout',
        resetAll: 'Reset All Settings',
        appearance: 'Widget Appearance', bg: 'BG',
        weatherSection: 'Weather', city: 'City'
      },
      terminalGroups: [
        { cat: 'NAVIGATION', items: [
          { cmd: 'cd <path>',    desc: 'change directory'        },
          { cmd: 'cd ..',        desc: 'parent directory'        },
          { cmd: 'cd ~',         desc: 'home directory'          },
          { cmd: 'pwd',          desc: 'print working directory' },
          { cmd: 'ls',           desc: 'list files (dir on Win)' },
          { cmd: 'ls -la',       desc: 'detailed list + hidden'  }
        ]},
        { cat: 'FILES', items: [
          { cmd: 'mkdir <dir>',  desc: 'create directory'        },
          { cmd: 'touch <file>', desc: 'create empty file'       },
          { cmd: 'cp <a> <b>',   desc: 'copy file / folder'      },
          { cmd: 'mv <a> <b>',   desc: 'move / rename'           },
          { cmd: 'rm <file>',    desc: 'delete file'             },
          { cmd: 'rm -rf <dir>', desc: 'delete folder recursive' }
        ]},
        { cat: 'VIEW & SEARCH', items: [
          { cmd: 'cat <file>',   desc: 'print file contents'     },
          { cmd: 'head <file>',  desc: 'first 10 lines'          },
          { cmd: 'tail -f <f>',  desc: 'follow log output'       },
          { cmd: 'grep <pat>',   desc: 'search in text'          },
          { cmd: 'find . -name', desc: 'find files by name'      },
          { cmd: 'which <cmd>',  desc: 'locate executable'       }
        ]},
        { cat: 'SYSTEM', items: [
          { cmd: 'clear',        desc: 'clear screen (cls)'      },
          { cmd: 'history',      desc: 'command history'         },
          { cmd: 'echo <text>',  desc: 'print text'              },
          { cmd: 'man <cmd>',    desc: 'manual / help'           },
          { cmd: 'exit',         desc: 'close session'           },
          { cmd: 'sudo <cmd>',   desc: 'run as administrator'    }
        ]}
      ],
      hotkeyGroups: [
        { cat: 'SYSTEM', items: [
          { key: 'Win + X',          desc: 'Power Menu'        },
          { key: 'Win + I',          desc: 'Settings'          },
          { key: 'Win + L',          desc: 'Lock Screen'       },
          { key: 'Win + D',          desc: 'Show Desktop'      }
        ]},
        { cat: 'NAVIGATION', items: [
          { key: 'Win + E',          desc: 'File Explorer'     },
          { key: 'Win + Tab',        desc: 'Task View'         },
          { key: 'Alt + Tab',        desc: 'Switch App'        },
          { key: 'Win + Left/Right', desc: 'Snap Window'       }
        ]},
        { cat: 'PRODUCTIVITY', items: [
          { key: 'Win + V',          desc: 'Clipboard History' },
          { key: 'Win + .',          desc: 'Emoji Panel'       },
          { key: 'Win + R',          desc: 'Run Dialog'        },
          { key: 'Ctrl+Shift+Esc',   desc: 'Task Manager'      }
        ]},
        { cat: 'SCREENSHOTS', items: [
          { key: 'Win + Shift + S',  desc: 'Snipping Tool'     },
          { key: 'Win + PrtScn',     desc: 'Save Screenshot'   }
        ]}
      ]
    },

    ru: {
      panels: {
        weather:  '// погода',
        notes:    '// заметки',
        hotkeys:  '// горячие клавиши',
        terminal: '// команды терминала',
        clock:    '// часы',
        thai:     '// тайский'
      },
      weather: {
        feelsLike: 'ощущается', humidity: 'влажность', wind: 'ветер',
        sunrise: 'рассвет', sunset: 'закат',
        loading: 'Загрузка…', unavailable: 'Недоступно'
      },
      notes: {
        placeholder: 'нажмите для ввода…',
        defaultText: '[ ] Деплой бота\n[ ] Починить лендинг\n[ ] Учить тайский'
      },
      lang: { auto: 'Авто' },
      thai: {
        loading: 'Загрузка…', lesson: 'Урок', words: 'Слова',
        syllables: 'Слоги', phrases: 'Фразы',
        phuket: 'Пхукет', standard: 'Центр.'
      },
      settings: {
        language: 'Язык', theme: 'Тема', clockFmt: 'Часы',
        panels: 'Показать панели', layout: 'Макет',
        editMode: 'Режим редакт.', reset: 'Сбросить макет',
        resetAll: 'Сбросить всё',
        appearance: 'Внешний вид', bg: 'ФОН',
        weatherSection: 'Погода', city: 'Город'
      },
      terminalGroups: [
        { cat: 'НАВИГАЦИЯ', items: [
          { cmd: 'cd <путь>',    desc: 'перейти в каталог'        },
          { cmd: 'cd ..',        desc: 'на уровень выше'          },
          { cmd: 'cd ~',         desc: 'домашний каталог'         },
          { cmd: 'pwd',          desc: 'текущий каталог'          },
          { cmd: 'ls',           desc: 'список файлов (dir)'      },
          { cmd: 'ls -la',       desc: 'подробный список'         }
        ]},
        { cat: 'ФАЙЛЫ', items: [
          { cmd: 'mkdir <имя>',  desc: 'создать папку'            },
          { cmd: 'touch <файл>', desc: 'создать пустой файл'      },
          { cmd: 'cp <а> <б>',   desc: 'копировать'               },
          { cmd: 'mv <а> <б>',   desc: 'переместить / переименовать' },
          { cmd: 'rm <файл>',    desc: 'удалить файл'             },
          { cmd: 'rm -rf <пап>', desc: 'удалить папку рекурсивно' }
        ]},
        { cat: 'ПРОСМОТР', items: [
          { cmd: 'cat <файл>',   desc: 'вывести содержимое'       },
          { cmd: 'head <файл>',  desc: 'первые 10 строк'          },
          { cmd: 'tail -f <ф>',  desc: 'следить за логом'         },
          { cmd: 'grep <шабл>',  desc: 'поиск по тексту'          },
          { cmd: 'find . -name', desc: 'найти файл по имени'      },
          { cmd: 'which <cmd>',  desc: 'путь к программе'         }
        ]},
        { cat: 'СИСТЕМА', items: [
          { cmd: 'clear',        desc: 'очистить экран (cls)'     },
          { cmd: 'history',      desc: 'история команд'           },
          { cmd: 'echo <текст>', desc: 'вывести текст'            },
          { cmd: 'man <cmd>',    desc: 'справка / мануал'         },
          { cmd: 'exit',         desc: 'закрыть сессию'           },
          { cmd: 'sudo <cmd>',   desc: 'запуск от администратора' }
        ]}
      ],
      hotkeyGroups: [
        { cat: 'СИСТЕМА', items: [
          { key: 'Win + X',          desc: 'Меню питания'        },
          { key: 'Win + I',          desc: 'Параметры'           },
          { key: 'Win + L',          desc: 'Блокировка'          },
          { key: 'Win + D',          desc: 'Рабочий стол'        }
        ]},
        { cat: 'НАВИГАЦИЯ', items: [
          { key: 'Win + E',          desc: 'Проводник'           },
          { key: 'Win + Tab',        desc: 'Просмотр задач'      },
          { key: 'Alt + Tab',        desc: 'Переключить окно'    },
          { key: 'Win + Left/Right', desc: 'Прикрепить окно'     }
        ]},
        { cat: 'ПРОДУКТИВНОСТЬ', items: [
          { key: 'Win + V',          desc: 'Буфер обмена'        },
          { key: 'Win + .',          desc: 'Панель эмодзи'       },
          { key: 'Win + R',          desc: 'Диалог Выполнить'    },
          { key: 'Ctrl+Shift+Esc',   desc: 'Диспетчер задач'     }
        ]},
        { cat: 'СНИМКИ ЭКРАНА', items: [
          { key: 'Win + Shift + S',  desc: 'Инструмент вырезки'  },
          { key: 'Win + PrtScn',     desc: 'Сохранить снимок'    }
        ]}
      ]
    }

  }; /* конец таблицы переводов */

  /* Получить строку перевода по пути 'panels.clock' */
  function t(path) {
    var parts = path.split('.');
    var node  = TRANSLATIONS[locale];
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return path;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : path;
  }

  /* Применить переводы к элементам с data-i18n */
  function applyLocale() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute('data-i18n'));
    }
    var ta = document.getElementById('notes-area');
    if (ta) ta.placeholder = t('notes.placeholder');
    /* Обновляем lang-атрибут <html> для корректной работы браузерных инструментов */
    document.documentElement.lang = locale;
  }

  /* =========================================================================
     2. ВИДИМОСТЬ ВИДЖЕТОВ
  ========================================================================= */

  /* Карта: ключ конфига → DOM id виджета */
  var VISIBILITY_MAP = {
    clock:    'panel-clock',
    weather:  'panel-weather',
    notes:    'panel-notes',
    hotkeys:  'panel-hotkeys',
    terminal: 'panel-terminal',
    thai:     'panel-thai'
  };

  var VIS_KEY = 'itw_visibility';

  /* Применить видимость панелей */
  function applyVisibility(vis) {
    for (var key in VISIBILITY_MAP) {
      if (!VISIBILITY_MAP.hasOwnProperty(key)) continue;
      if (vis[key] === undefined) continue;
      var el = document.getElementById(VISIBILITY_MAP[key]);
      if (el) el.style.display = vis[key] ? '' : 'none';
    }
  }

  /* Загрузить сохранённую видимость и применить */
  function loadVisibility() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(VIS_KEY) || '{}'); } catch (e) {}
    if (Object.keys(saved).length) {
      ITW.Config.apply({ visibility: saved });
    }
    applyVisibility(ITW.Config.get().visibility);
  }

  /* Сохранить текущую видимость */
  function saveVisibility() {
    try { localStorage.setItem(VIS_KEY, JSON.stringify(ITW.Config.get().visibility)); } catch (e) {}
  }

  /* Переключить видимость конкретного виджета */
  function toggleWidget(panel) {
    var vis     = ITW.Config.get().visibility;
    var newVal  = !(vis[panel] !== false);
    var patch   = {};
    patch[panel] = newVal;
    ITW.Config.apply({ visibility: patch });
    applyVisibility(patch);
    saveVisibility();
    updateSettingsUI();
  }

  /* =========================================================================
     3. МОСТ WALLPAPER ENGINE
  ========================================================================= */

  /* Применить акцентный цвет */
  function applyAccent(rgb) {
    var root = document.documentElement;
    root.style.setProperty('--accent-rgb', rgb);
    root.style.setProperty('--accent', 'rgb(' + rgb + ')');
    if (ITW.Particles) ITW.Particles.setAccent(rgb);
  }

  /* Применить тему */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme || 'vscode');
  }

  /* Хук WE — вызывается при запуске и изменении настроек в WE-панели */
  window.wallpaperPropertyListener = {
    applyUserProperties: function (props) {
      var patch = {};

      /* Акцентный цвет: WE передаёт float 0..1 через пробел */
      if (props.schemecolor && props.schemecolor.value) {
        var parts = String(props.schemecolor.value).split(' ');
        if (parts.length === 3) {
          var rgb = [
            Math.round(parseFloat(parts[0]) * 255),
            Math.round(parseFloat(parts[1]) * 255),
            Math.round(parseFloat(parts[2]) * 255)
          ].join(',');
          applyAccent(rgb);
          patch.general = patch.general || {};
          patch.general.accent = rgb;
        }
      }
      if (props.theme && props.theme.value) {
        applyTheme(props.theme.value);
        patch.general = patch.general || {};
        patch.general.theme = props.theme.value;
        /* Синхронизируем с localStorage чтобы панель настроек знала о теме */
        try { localStorage.setItem('itw_theme', props.theme.value); } catch (e) {}
      }
      if (props.format24h !== undefined) {
        patch.general = patch.general || {};
        patch.general.format24h = props.format24h.value !== false;
        try { localStorage.setItem('itw_format24h', String(props.format24h.value !== false)); } catch (e) {}
      }
      if (props.city && props.city.value) {
        patch.weather = patch.weather || {};
        patch.weather.city = props.city.value;
      }
      if (props.weatherKey && props.weatherKey.value) {
        patch.weather = patch.weather || {};
        patch.weather.apiKey   = props.weatherKey.value;
        patch.weather.provider = 'openweathermap';
      }
      if (props.weatherUnits && props.weatherUnits.value) {
        patch.weather = patch.weather || {};
        patch.weather.units = props.weatherUnits.value;
      }
      /* Typewriter intro — теперь прокидывается из WE */
      if (props.modTypewriter !== undefined) {
        patch.modules = patch.modules || {};
        patch.modules.typewriter = props.modTypewriter.value !== false;
      }
      if (props.modParticles !== undefined && ITW.Particles) {
        ITW.Particles.setEnabled(props.modParticles.value !== false);
      }
      if (props.audioEnabled !== undefined) {
        patch.audio = patch.audio || {};
        patch.audio.enabled = props.audioEnabled.value !== false;
      }
      if (props.audioSensitivity && props.audioSensitivity.value !== undefined) {
        patch.audio = patch.audio || {};
        patch.audio.sensitivity = parseFloat(props.audioSensitivity.value) || 1.0;
      }
      if (props.particleDensity && props.particleDensity.value !== undefined) {
        patch.particles = patch.particles || {};
        patch.particles.density = parseFloat(props.particleDensity.value) || 1.0;
      }
      /* Видимость виджетов из WE */
      var visPatch = {};
      if (props.showClock       !== undefined) visPatch.clock    = props.showClock.value       !== false;
      if (props.showWeather     !== undefined) visPatch.weather  = props.showWeather.value     !== false;
      if (props.showNotes       !== undefined) visPatch.notes    = props.showNotes.value       !== false;
      if (props.showHotkeys     !== undefined) visPatch.hotkeys  = props.showHotkeys.value     !== false;
      if (props.showTerminal    !== undefined) visPatch.terminal = props.showTerminal.value    !== false;
      if (props.showThaiLesson  !== undefined) visPatch.thai     = props.showThaiLesson.value  !== false;
      if (Object.keys(visPatch).length) {
        patch.visibility = visPatch;
        applyVisibility(visPatch);
      }

      ITW.Config.apply(patch);
    }
  };

  /* =========================================================================
     4. SVG-ИКОНКИ ПОГОДЫ
  ========================================================================= */
  var WeatherCanvas = (function () {
    var SVG_MAP = [
      [0,  1,  'clear-day',         'clear-night'],
      [2,  2,  'partly-cloudy-day', 'partly-cloudy-night'],
      [3,  3,  'cloudy',            'cloudy'],
      [45, 49, 'fog',               'fog'],
      [51, 59, 'drizzle',           'drizzle'],
      [60, 67, 'rain',              'rain'],
      [70, 79, 'snow',              'snow'],
      [80, 84, 'rain',              'rain'],
      [85, 86, 'snow',              'snow'],
      [87, 99, 'thunderstorm',      'thunderstorm']
    ];
    function svgName(code, isDay) {
      for (var i = 0; i < SVG_MAP.length; i++) {
        if (code >= SVG_MAP[i][0] && code <= SVG_MAP[i][1])
          return 'assets/weather/' + (isDay ? SVG_MAP[i][2] : SVG_MAP[i][3]) + '.svg';
      }
      return 'assets/weather/' + (isDay ? 'clear-day' : 'clear-night') + '.svg';
    }
    function init() {
      var el = document.getElementById('w-icon-svg');
      if (!el) return;
      el.src = svgName(0, new Date().getHours() >= 6 && new Date().getHours() < 20);
    }
    function update(code, isDay) {
      var el = document.getElementById('w-icon-svg');
      if (!el) return;
      var src = svgName(code, isDay);
      if (el.src.indexOf(src) === -1) {
        el.style.opacity = '0';
        el.src = src;
        setTimeout(function () { el.style.opacity = '1'; }, 80);
      }
    }
    return { init: init, update: update };
  }());

  /* =========================================================================
     5. ПОГОДА
  ========================================================================= */

  function fetchWeather() {
    var condEl = document.getElementById('w-cond');
    if (condEl) condEl.textContent = t('weather.loading');

    ITW.Weather.fetch()
      .then(function (data) {
        var map = {
          'w-temp':     data.temp,      'w-feels': data.feelsLike,
          'w-hum':      data.humidity,  'w-wind':  data.wind,
          'w-cond':     data.condition, 'w-rise':  data.sunrise,
          'w-set':      data.sunset,    'w-location': data.location
        };
        for (var id in map) {
          if (!map.hasOwnProperty(id)) continue;
          var el = document.getElementById(id);
          if (el && map[id]) el.textContent = map[id];
        }
        if (data.code !== null && data.code !== undefined)
          WeatherCanvas.update(data.code, data.isDay);
      })
      .catch(function () {
        /* При ошибке сбрасываем все поля — не оставляем устаревшие данные */
        var fields = ['w-temp','w-feels','w-hum','w-wind','w-rise','w-set'];
        fields.forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.textContent = '—';
        });
        var el = document.getElementById('w-cond');
        if (el) el.textContent = t('weather.unavailable');
        var locEl = document.getElementById('w-location');
        if (locEl) locEl.textContent = '';
      });
  }

  /* =========================================================================
     6. РЕДАКТОР-ЧАСЫ
  ========================================================================= */

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  function tickClock() {
    var d   = new Date();
    var cfg = ITW.Config.get().general;
    var h   = d.getHours();
    if (!cfg.format24h) h = h % 12 || 12;
    ITW.Editor.update({
      h:  pad2(h),
      m:  pad2(d.getMinutes()),
      s:  pad2(d.getSeconds()),
      d:  String(d.getDate()),
      mo: MONTHS[d.getMonth()],
      y:  String(d.getFullYear())
    });
  }

  function startClock() {
    tickClock();
    setInterval(tickClock, 1000);
  }

  function initEditor() {
    var gutterEl = document.getElementById('clock-gutter');
    var codeEl   = document.getElementById('clock-code');
    if (!gutterEl || !codeEl) return;
    ITW.Editor.init(gutterEl, codeEl);
    if (ITW.Config.get().modules.typewriter) {
      ITW.Typewriter.run(startClock);
    } else {
      ITW.Editor.renderInstant();
      startClock();
    }
  }

  /* =========================================================================
     7. ЗАМЕТКИ
  ========================================================================= */

  var NOTES_KEY = 'itw_notes_v2';

  function initNotes() {
    var el = document.getElementById('notes-area');
    if (!el) return;
    var saved = '';
    try { saved = localStorage.getItem(NOTES_KEY) || ''; } catch (e) {}
    el.value = saved || t('notes.defaultText');
    el.addEventListener('input', function () {
      try { localStorage.setItem(NOTES_KEY, el.value); } catch (e) {}
    });
  }

  /* =========================================================================
     8. ТАЙСКИЙ АЛФАВИТ
  ========================================================================= */

  var THAI_KEY_INDEX = 'itw_thai_index';
  var THAI_KEY_DATE  = 'itw_thai_date';
  var thaiData  = null;
  var thaiIndex = 0;

  function getThaiIndex(total) {
    var today = new Date().toDateString();
    var savedDate = '', savedIndex = 0;
    try {
      savedDate  = localStorage.getItem(THAI_KEY_DATE)  || '';
      savedIndex = parseInt(localStorage.getItem(THAI_KEY_INDEX) || '0', 10) || 0;
    } catch (e) {}
    if (savedDate !== today) {
      var newIndex = (savedDate === '') ? 0 : (savedIndex + 1) % total;
      try {
        localStorage.setItem(THAI_KEY_DATE,  today);
        localStorage.setItem(THAI_KEY_INDEX, String(newIndex));
      } catch (e) {}
      return newIndex;
    }
    return savedIndex % total;
  }

  function saveThaiIndex(idx) {
    try { localStorage.setItem(THAI_KEY_INDEX, String(idx)); } catch (e) {}
  }

  function esc(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function updateThaiProgress(idx, total) {
    var bar = document.getElementById('thai-progress-bar');
    if (bar) bar.style.width = ((idx + 1) / total * 100).toFixed(1) + '%';
  }

  function renderThaiLesson(idx) {
    if (!thaiData || !thaiData.length) return;
    thaiIndex = ((idx % thaiData.length) + thaiData.length) % thaiData.length;
    var entry = thaiData[thaiIndex];

    var navLabel = document.getElementById('thai-nav-label');
    if (navLabel)
      navLabel.textContent = t('thai.lesson') + ' ' + (thaiIndex + 1) + ' / ' + thaiData.length;

    updateThaiProgress(thaiIndex, thaiData.length);

    var content = document.getElementById('thai-content');
    if (!content) return;

    var html = '';

    /* Блок главной буквы */
    html += '<div class="thai-letter-row">';
    html +=   '<div class="thai-letter">' + esc(entry.letter) + '</div>';
    html +=   '<div class="thai-letter-info">';
    html +=     '<div class="thai-letter-name">' + esc(entry.thaiName) + '</div>';
    html +=     '<div class="thai-transcriptions">';
    html +=       '<span class="thai-tr-ru" title="' + esc(t('thai.standard')) + '">[' + esc(entry.ruTranscription) + ']</span>';
    if (entry.phuketRuTranscription) {
      html +=   '<span class="thai-tr-pk" title="' + esc(t('thai.phuket')) + '">[' + esc(entry.phuketRuTranscription) + ']</span>';
    }
    html +=       '<span class="thai-tr-en">[' + esc(entry.enTranscription) + ']</span>';
    html +=     '</div>';
    html +=     '<div class="thai-meaning">' + esc(entry.meaning) + '</div>';
    html +=   '</div>';
    html += '</div>';
    html += '<div class="thai-divider"></div>';

    /* Слоги */
    if (entry.syllables && entry.syllables.length) {
      html += '<div class="thai-section-label">' + t('thai.syllables') + '</div>';
      html += '<div class="thai-syllables">';
      html += '<div class="thai-syl-head"><span></span><span>' + esc(t('thai.standard')) + '</span><span>' + esc(t('thai.phuket')) + '</span><span>EN</span><span></span></div>';
      for (var s = 0; s < entry.syllables.length; s++) {
        var sl = entry.syllables[s];
        html += '<div class="thai-syllable">';
        html +=   '<span class="thai-syl-th">' + esc(sl.syllable) + '</span>';
        html +=   '<span class="thai-syl-ru">[' + esc(sl.ruTr) + ']</span>';
        html +=   '<span class="thai-syl-pk">[' + esc(sl.phuketRuTr || '') + ']</span>';
        html +=   '<span class="thai-syl-en">[' + esc(sl.enTr) + ']</span>';
        var exText = esc(sl.example);
        if (sl.examplePhuketRu && sl.examplePhuketRu !== '—')
          exText += ' <span class="thai-syl-ex-pk">(' + esc(sl.examplePhuketRu) + ')</span>';
        html +=   '<span class="thai-syl-ex">' + exText + '</span>';
        html += '</div>';
      }
      html += '</div>';
      html += '<div class="thai-divider"></div>';
    }

    /* Слова */
    if (entry.words && entry.words.length) {
      html += '<div class="thai-section-label">' + t('thai.words') + '</div>';
      html += '<div class="thai-words">';
      html += '<div class="thai-word-head"><span></span><span>' + esc(t('thai.standard')) + '</span><span>' + esc(t('thai.phuket')) + '</span><span>EN</span><span></span></div>';
      for (var i = 0; i < entry.words.length; i++) {
        var w = entry.words[i];
        html += '<div class="thai-word">';
        html +=   '<span class="thai-word-th">' + esc(w.thai)             + '</span>';
        html +=   '<span class="thai-word-ru">' + esc(w.ruTr)             + '</span>';
        html +=   '<span class="thai-word-pk">' + esc(w.phuketRuTr || '') + '</span>';
        html +=   '<span class="thai-word-en">' + esc(w.enTr)             + '</span>';
        html +=   '<span class="thai-word-tr">' + esc(w.translation)      + '</span>';
        html += '</div>';
      }
      html += '</div>';
    }

    /* Фразы */
    if (entry.phrases && entry.phrases.length) {
      html += '<div class="thai-divider"></div>';
      html += '<div class="thai-section-label">' + t('thai.phrases') + '</div>';
      html += '<div class="thai-phrases">';
      for (var j = 0; j < entry.phrases.length; j++) {
        var p = entry.phrases[j];
        html += '<div class="thai-phrase">';
        html +=   '<div class="thai-phrase-th">'   + esc(p.thai)        + '</div>';
        html +=   '<div class="thai-phrase-subs">';
        html +=     '<span class="thai-phrase-ru">' + esc(p.ruTr)       + '</span>';
        if (p.phuketRuTr)
          html += '<span class="thai-phrase-pk">' + esc(p.phuketRuTr) + '</span>';
        html +=     '<span class="thai-phrase-en">' + esc(p.enTr)       + '</span>';
        html +=   '</div>';
        html +=   '<div class="thai-phrase-tr">'   + esc(p.translation) + '</div>';
        html += '</div>';
      }
      html += '</div>';
    }

    content.innerHTML = html;
  }

  function initThai() {
    var data = (typeof THAI_ALPHABET !== 'undefined') ? THAI_ALPHABET : null;
    if (!data || !data.length) {
      var c = document.getElementById('thai-content');
      if (c) c.innerHTML = '<div class="thai-loading">Thai data not found</div>';
      console.warn('[thai] THAI_ALPHABET не определён');
      return;
    }
    thaiData  = data;
    thaiIndex = getThaiIndex(data.length);
    renderThaiLesson(thaiIndex);

    var prevBtn = document.getElementById('thai-prev');
    var nextBtn = document.getElementById('thai-next');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      if (!thaiData) return;
      var idx = ((thaiIndex - 1) + thaiData.length) % thaiData.length;
      saveThaiIndex(idx);
      renderThaiLesson(idx);
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      if (!thaiData) return;
      var idx = (thaiIndex + 1) % thaiData.length;
      saveThaiIndex(idx);
      renderThaiLesson(idx);
    });
  }

  /* =========================================================================
     9. ЯЗЫКОВАЯ ПАНЕЛЬ
  ========================================================================= */

  function setLocale(newLang) {
    try { localStorage.setItem(LANG_KEY, newLang); } catch (e) {}
    if (newLang === 'ru')       locale = 'ru';
    else if (newLang === 'en')  locale = 'en';
    else                        locale = detectLocale();

    applyLocale();

    var hkEl = document.getElementById('hotkeys-body');
    if (hkEl && ITW.Hotkeys) {
      ITW.Hotkeys.stop();
      ITW.Hotkeys.init(hkEl, TRANSLATIONS[locale].hotkeyGroups);
      ITW.Hotkeys.start();
    }
    var termEl = document.getElementById('terminal-body');
    if (termEl && ITW.Terminal) {
      ITW.Terminal.stop();
      ITW.Terminal.init(termEl, TRANSLATIONS[locale].terminalGroups);
      ITW.Terminal.start();
    }
    if (thaiData) renderThaiLesson(thaiIndex);

    updateLangButtons(newLang);
    updateSettingsUI();
  }

  function updateLangButtons(activeLang) {
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++)
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === activeLang);
  }

  function initLangBar() {
    var saved = 'auto';
    try { saved = localStorage.getItem(LANG_KEY) || 'auto'; } catch (e) {}
    updateLangButtons(saved);
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', (function (btn) {
        return function () { setLocale(btn.getAttribute('data-lang')); };
      }(btns[i])));
    }
  }

  /* =========================================================================
     10. СИСТЕМА ВИДЖЕТОВ — позиционирование и persistence
  ========================================================================= */

  var WIDGET_POS_KEY  = 'itw_widget_pos';
  var WIDGET_SIZE_KEY = 'itw_widget_sizes';
  var WIDGET_BG_KEY   = 'itw_widget_bg';
  var widgetBgState   = {};          /* panel-id -> bool (true = bg visible) */
  var resizeState     = null;        /* { el, startMouseX, startMouseY, startW, startH } */

  /* Идентификаторы всех виджетов */
  var WIDGET_IDS = ['panel-clock','panel-thai','panel-weather','panel-notes','panel-hotkeys','panel-terminal'];

  /* Загрузить сохранённые позиции и применить к DOM */
  function loadWidgetPositions() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(WIDGET_POS_KEY) || '{}'); } catch (e) {}
    WIDGET_IDS.forEach(function (id) {
      var pos = saved[id];
      if (!pos) return;
      var el = document.getElementById(id);
      if (!el) return;
      /* Перекрываем CSS-дефолт явными координатами */
      el.style.left      = pos.x + 'px';
      el.style.top       = pos.y + 'px';
      el.style.right     = '';
      el.style.bottom    = '';
      el.style.transform = 'none';
    });
  }

  /* Сохранить позиции виджетов, которые были перемещены */
  function saveWidgetPositions() {
    var positions = {};
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el || !el.style.left) return; /* не перемещался — не сохраняем */
      positions[id] = {
        x: parseFloat(el.style.left),
        y: parseFloat(el.style.top)
      };
    });
    try { localStorage.setItem(WIDGET_POS_KEY, JSON.stringify(positions)); } catch (e) {}
  }

  /* Reset positions and sizes: remove inline styles, CSS defaults restore */
  function resetWidgetPositions() {
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.style.left = el.style.top = el.style.right =
        el.style.bottom = el.style.transform = '';
    });
    try { localStorage.removeItem(WIDGET_POS_KEY); } catch (e) {}
    resetWidgetSizes();
  }

  /* Load saved sizes and apply to widgets */
  function loadWidgetSizes() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(WIDGET_SIZE_KEY) || '{}'); } catch (e) {}
    WIDGET_IDS.forEach(function (id) {
      var sz = saved[id];
      if (!sz) return;
      var el = document.getElementById(id);
      if (!el) return;
      if (sz.w) el.style.width  = sz.w + 'px';
      if (sz.h) el.style.height = sz.h + 'px';
    });
  }

  /* Save current pixel sizes of all widgets */
  function saveWidgetSizes() {
    var sizes = {};
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var w = el.offsetWidth;
      var h = el.offsetHeight;
      if (w && h) sizes[id] = { w: w, h: h };
    });
    try { localStorage.setItem(WIDGET_SIZE_KEY, JSON.stringify(sizes)); } catch (e) {}
  }

  /* Remove inline size overrides */
  function resetWidgetSizes() {
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.style.width  = '';
      el.style.height = '';
    });
    try { localStorage.removeItem(WIDGET_SIZE_KEY); } catch (e) {}
  }

  /* ── Background toggle per widget ─────────────────────────────────────── */

  /* Load bg state from localStorage and apply */
  function loadWidgetBg() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(WIDGET_BG_KEY) || '{}'); } catch (e) {}
    WIDGET_IDS.forEach(function (id) {
      widgetBgState[id] = saved[id] !== false; /* default true */
      applyWidgetBg(id, widgetBgState[id]);
    });
  }

  /* Add or remove no-bg class */
  function applyWidgetBg(id, enabled) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('panel--no-bg', !enabled);
  }

  /* Toggle background for one panel (key = 'clock', 'weather', etc.) */
  function toggleWidgetBg(panelKey) {
    var id = VISIBILITY_MAP[panelKey];
    if (!id) return;
    widgetBgState[id] = !widgetBgState[id];
    applyWidgetBg(id, widgetBgState[id]);
    var data = {};
    WIDGET_IDS.forEach(function (wid) { data[wid] = widgetBgState[wid] !== false; });
    try { localStorage.setItem(WIDGET_BG_KEY, JSON.stringify(data)); } catch (e) {}
    updateSettingsUI();
  }

  /* ── Resize helpers ─────────────────────────────────────────────────────── */

  function startResize(el, e) {
    resizeState = {
      el:          el,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startW:      el.offsetWidth,
      startH:      el.offsetHeight
    };
    el.classList.add('resizing');
    document.body.classList.add('is-resizing');
    e.preventDefault();
    e.stopPropagation();
  }

  function onResizeMove(e) {
    if (!resizeState) return;
    var dx   = e.clientX - resizeState.startMouseX;
    var dy   = e.clientY - resizeState.startMouseY;
    var minW = 180, minH = 120;
    var maxW = window.innerWidth  * 0.92;
    var maxH = window.innerHeight * 0.88;
    var newW = Math.max(minW, Math.min(resizeState.startW + dx, maxW));
    var newH = Math.max(minH, Math.min(resizeState.startH + dy, maxH));
    resizeState.el.style.width  = newW + 'px';
    resizeState.el.style.height = newH + 'px';
  }

  function onResizeEnd() {
    if (!resizeState) return;
    resizeState.el.classList.remove('resizing');
    document.body.classList.remove('is-resizing');
    saveWidgetSizes();
    resizeState = null;
  }

  /* =========================================================================
     11. DRAG & DROP — перетаскивание виджетов в режиме редактирования макета
  ========================================================================= */

  var layoutEditMode = false;
  var dragState = null; /* { el, startMouseX, startMouseY, startElX, startElY } */

  /* Переключить режим редактирования макета */
  function setLayoutEditMode(on) {
    layoutEditMode = on;
    document.body.classList.toggle('layout-edit', on);
    var btn = document.getElementById('settings-layout-btn');
    if (btn) btn.classList.toggle('active', on);
  }

  /* Начать перетаскивание виджета */
  function startDrag(el, e) {
    var rect = el.getBoundingClientRect();
    /* Переводим из CSS-позиционирования в абсолютное */
    el.style.left      = rect.left + 'px';
    el.style.top       = rect.top  + 'px';
    el.style.right     = '';
    el.style.bottom    = '';
    el.style.transform = 'none';

    dragState = {
      el:          el,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startElX:    rect.left,
      startElY:    rect.top
    };
    el.classList.add('dragging');
    document.body.classList.add('is-dragging');
    e.preventDefault();
  }

  /* Обработчик движения мыши */
  function onDragMove(e) {
    if (!dragState) return;
    var dx   = e.clientX - dragState.startMouseX;
    var dy   = e.clientY - dragState.startMouseY;
    var newX = Math.max(0, Math.min(dragState.startElX + dx, window.innerWidth  - dragState.el.offsetWidth));
    var newY = Math.max(0, Math.min(dragState.startElY + dy, window.innerHeight - dragState.el.offsetHeight));
    dragState.el.style.left = newX + 'px';
    dragState.el.style.top  = newY + 'px';
  }

  /* Завершить перетаскивание */
  function onDragEnd() {
    if (!dragState) return;
    dragState.el.classList.remove('dragging');
    document.body.classList.remove('is-dragging');
    saveWidgetPositions();
    dragState = null;
  }

  /* Initialize drag + resize handlers for all widgets */
  function initDragHandlers() {
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;

      /* Inject resize handle into panel */
      var handle = document.createElement('div');
      handle.className = 'resize-handle';
      el.appendChild(handle);

      /* Resize: mousedown on corner handle */
      handle.addEventListener('mousedown', function (e) {
        if (!layoutEditMode) return;
        startResize(el, e);
      });

      /* Drag: mousedown on panel body (skip handle and interactive elements) */
      el.addEventListener('mousedown', function (e) {
        if (!layoutEditMode) return;
        if (e.target.classList.contains('resize-handle')) return;
        var tag = e.target.tagName;
        if (tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'INPUT') return;
        startDrag(el, e);
      });
    });

    /* Unified move/end — resize takes priority */
    document.addEventListener('mousemove', function (e) {
      if (resizeState) { onResizeMove(e); return; }
      onDragMove(e);
    });
    document.addEventListener('mouseup', function () {
      if (resizeState) { onResizeEnd(); return; }
      onDragEnd();
    });
  }

  /* =========================================================================
     12. ПАНЕЛЬ НАСТРОЕК
  ========================================================================= */

  function openSettings() {
    var panel   = document.getElementById('settings-panel');
    var overlay = document.getElementById('settings-overlay');
    if (!panel) return;
    updateSettingsUI();
    panel.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeSettings() {
    var panel   = document.getElementById('settings-panel');
    var overlay = document.getElementById('settings-overlay');
    if (panel)   panel.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  /* Обновить состояние кнопок в панели настроек */
  function updateSettingsUI() {
    var cfg = ITW.Config.get();

    /* Язык */
    var savedLang = 'auto';
    try { savedLang = localStorage.getItem(LANG_KEY) || 'auto'; } catch (e) {}
    highlightOpt('lang', savedLang);

    /* Тема */
    var savedTheme = 'vscode';
    try { savedTheme = localStorage.getItem('itw_theme') || cfg.general.theme; } catch (e) {}
    highlightOpt('theme', savedTheme);

    /* Формат часов */
    highlightOpt('format24h', String(cfg.general.format24h));

    /* Видимость виджетов */
    var vis = cfg.visibility;
    var panels = ['clock','weather','notes','hotkeys','terminal','thai'];
    panels.forEach(function (key) {
      var btn = document.getElementById('toggle-' + key);
      if (!btn) return;
      var isOn = vis[key] !== false;
      btn.classList.toggle('active', isOn);
      btn.textContent = isOn ? '●' : '○';
    });

    /* Background state */
    var bgKeys = ['clock','weather','notes','hotkeys','terminal','thai'];
    bgKeys.forEach(function (key) {
      var bgBtn = document.getElementById('bg-' + key);
      if (!bgBtn) return;
      var id = VISIBILITY_MAP[key];
      var bgOn = widgetBgState[id] !== false;
      bgBtn.classList.toggle('active', bgOn);
    });

    /* Layout edit mode button */
    var layoutBtn = document.getElementById('settings-layout-btn');
    if (layoutBtn) layoutBtn.classList.toggle('active', layoutEditMode);

    /* Город */
    var cityInput = document.getElementById('settings-city-input');
    if (cityInput && document.activeElement !== cityInput) {
      cityInput.value = ITW.Config.get().weather.city || 'Phuket';
    }

    /* Версия */
    var verEl = document.getElementById('settings-version');
    if (verEl) verEl.textContent = 'v' + APP_VERSION;
  }

  /* Подсветить активную опцию в группе */
  function highlightOpt(setting, value) {
    var container = document.querySelector('.settings-opts[data-setting="' + setting + '"]');
    if (!container) return;
    var opts = container.querySelectorAll('.settings-opt');
    for (var i = 0; i < opts.length; i++)
      opts[i].classList.toggle('active', opts[i].getAttribute('data-value') === value);
  }

  /* Применить изменение настройки из UI */
  function applySettingChange(setting, value) {
    if (setting === 'lang') {
      setLocale(value);
    } else if (setting === 'theme') {
      applyTheme(value);
      ITW.Config.apply({ general: { theme: value } });
      try { localStorage.setItem('itw_theme', value); } catch (e) {}
    } else if (setting === 'format24h') {
      var is24h = (value === 'true');
      ITW.Config.apply({ general: { format24h: is24h } });
      try { localStorage.setItem('itw_format24h', String(is24h)); } catch (e) {}
    }
    updateSettingsUI();
  }

  /* Сбросить все настройки и позиции (перезагрузка страницы) */
  function resetAllSettings() {
    var keys = [
      LANG_KEY, NOTES_KEY, THAI_KEY_INDEX, THAI_KEY_DATE,
      VIS_KEY, WIDGET_POS_KEY, WIDGET_SIZE_KEY, WIDGET_BG_KEY,
      'itw_theme', 'itw_format24h', WEATHER_CITY_KEY
    ];
    keys.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
    location.reload();
  }

  /* Инициализация всей панели настроек */
  function initSettingsPanel() {
    var trigger  = document.getElementById('settings-trigger');
    var closeBtn = document.getElementById('settings-close');
    var overlay  = document.getElementById('settings-overlay');

    if (trigger)  trigger.addEventListener('click', openSettings);
    if (closeBtn) closeBtn.addEventListener('click', closeSettings);
    if (overlay)  overlay.addEventListener('click', closeSettings);

    /* Кнопки выбора опций (язык, тема, формат) */
    var opts = document.querySelectorAll('.settings-opts .settings-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', (function (opt) {
        return function () {
          var setting = opt.parentElement.getAttribute('data-setting');
          var value   = opt.getAttribute('data-value');
          applySettingChange(setting, value);
        };
      }(opts[i])));
    }

    /* Переключатели видимости виджетов */
    var toggleRows = document.querySelectorAll('.settings-toggle-row');
    for (var j = 0; j < toggleRows.length; j++) {
      toggleRows[j].addEventListener('click', (function (row) {
        return function (e) {
          /* Исключаем клик по самой кнопке — он обрабатывается ниже */
          if (e.target.classList.contains('settings-toggle-btn')) return;
          var panel = row.getAttribute('data-panel');
          if (panel) toggleWidget(panel);
        };
      }(toggleRows[j])));
    }
    var toggleBtns = document.querySelectorAll('.settings-toggle-btn');
    for (var k = 0; k < toggleBtns.length; k++) {
      toggleBtns[k].addEventListener('click', (function (btn) {
        return function () {
          var panel = btn.parentElement.getAttribute('data-panel');
          if (panel) toggleWidget(panel);
        };
      }(toggleBtns[k])));
    }

    /* Кнопки действий */
    var layoutBtn = document.getElementById('settings-layout-btn');
    if (layoutBtn) layoutBtn.addEventListener('click', function () {
      setLayoutEditMode(!layoutEditMode);
      closeSettings(); /* auto-close so user can immediately interact with widgets */
    });

    /* Widget background toggle buttons */
    var bgBtns = document.querySelectorAll('.settings-bg-btn');
    for (var bi = 0; bi < bgBtns.length; bi++) {
      bgBtns[bi].addEventListener('click', (function (btn) {
        return function () {
          var panel = btn.getAttribute('data-panel');
          if (panel) toggleWidgetBg(panel);
        };
      }(bgBtns[bi])));
    }

    var resetLayoutBtn = document.getElementById('settings-reset-layout');
    if (resetLayoutBtn) resetLayoutBtn.addEventListener('click', function () {
      resetWidgetPositions();
      closeSettings();
    });

    var resetAllBtn = document.getElementById('settings-reset-all');
    if (resetAllBtn) resetAllBtn.addEventListener('click', resetAllSettings);

    /* Ввод города для погоды */
    var cityInput = document.getElementById('settings-city-input');
    if (cityInput) {
      cityInput.value = ITW.Config.get().weather.city || 'Phuket';

      function applyCity() {
        var city = cityInput.value.trim();
        if (!city) { city = 'Phuket'; cityInput.value = city; }
        if (city === ITW.Config.get().weather.city) return;
        saveWeatherCity(city);
        ITW.Config.apply({ weather: { city: city } });
        fetchWeather();
      }

      cityInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); applyCity(); cityInput.blur(); }
      });
      cityInput.addEventListener('blur', applyCity);
    }
  }

  /* Загрузить сохранённый город и применить в конфиг */
  function loadWeatherCity() {
    var city = '';
    try { city = localStorage.getItem(WEATHER_CITY_KEY) || ''; } catch (e) {}
    if (city) {
      ITW.Config.apply({ weather: { city: city } });
    }
    /* Синхронизировать поле ввода, если панель настроек уже в DOM */
    var input = document.getElementById('settings-city-input');
    if (input) input.value = ITW.Config.get().weather.city || 'Phuket';
  }

  function saveWeatherCity(city) {
    try { localStorage.setItem(WEATHER_CITY_KEY, city); } catch (e) {}
  }

  /* Загрузить персистированные настройки (тема, формат часов) */
  function loadPersistedSettings() {
    var theme = '', fmt = '';
    try {
      theme = localStorage.getItem('itw_theme')     || '';
      fmt   = localStorage.getItem('itw_format24h') || '';
    } catch (e) {}
    if (theme) {
      applyTheme(theme);
      ITW.Config.apply({ general: { theme: theme } });
    }
    if (fmt !== '') {
      ITW.Config.apply({ general: { format24h: fmt !== 'false' } });
    }
  }

  /* =========================================================================
     13. RAF-ЦИКЛ — частицы + аудио
  ========================================================================= */

  var lastRafTime = 0;

  function rafLoop(now) {
    var dt = Math.min((now - lastRafTime) / 1000, 0.1);
    lastRafTime = now;
    ITW.Audio.update();
    ITW.Particles.update(dt);
    requestAnimationFrame(rafLoop);
  }

  /* =========================================================================
     14. ИНИЦИАЛИЗАЦИЯ
  ========================================================================= */

  function boot() {
    /* Применяемперсистированные настройки до всего остального */
    loadPersistedSettings();

    var cfg = ITW.Config.get();

    /* Локализация */
    applyLocale();

    /* Визуальные начальные значения из конфига */
    applyAccent(cfg.general.accent);
    applyTheme(cfg.general.theme);

    /* Видимость виджетов */
    loadVisibility();

    /* Widget positions from localStorage */
    loadWidgetPositions();

    /* Widget sizes from localStorage */
    loadWidgetSizes();

    /* Widget background state */
    loadWidgetBg();

    /* Drag & Drop */
    initDragHandlers();

    /* Аудиореактивность */
    ITW.Audio.init();

    /* Частицы */
    var pCanvas = document.getElementById('particles-canvas');
    if (pCanvas) ITW.Particles.init(pCanvas);

    /* Погода */
    loadWeatherCity();
    WeatherCanvas.init();
    fetchWeather();
    setInterval(fetchWeather, 10 * 60 * 1000);

    /* Заметки */
    initNotes();

    /* Горячие клавиши */
    var hkEl = document.getElementById('hotkeys-body');
    if (hkEl) {
      ITW.Hotkeys.init(hkEl, TRANSLATIONS[locale].hotkeyGroups);
      ITW.Hotkeys.start();
    }

    /* Терминал */
    var termEl = document.getElementById('terminal-body');
    if (termEl) {
      ITW.Terminal.init(termEl, TRANSLATIONS[locale].terminalGroups);
      ITW.Terminal.start();
    }

    /* Тайский */
    initThai();

    /* Редактор-часы */
    initEditor();

    /* Языковая панель */
    initLangBar();

    /* Панель настроек */
    initSettingsPanel();

    /* rAF-цикл */
    requestAnimationFrame(function (now) {
      lastRafTime = now;
      requestAnimationFrame(rafLoop);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

}());
