/**
 * script.js — ITWallpaper Language Desk v1.2.0
 *
 * Dashboard orchestrator. Responsibilities:
 *   1.  Localization     — EN/RU translation table, language switcher
 *   2.  Visibility       — applyVisibility() + persistence
 *   3.  WE bridge        — wallpaperPropertyListener → ITW.Config
 *   4.  WeatherCanvas    — SVG icons mapped from WMO codes
 *   5.  Weather          — delegates to ITW.Weather
 *   6.  Editor clock     — delegates to ITW.Editor / ITW.Typewriter
 *   7.  Notes            — localStorage
 *   8.  Language lessons — data-driven widget over ITW.Languages registry
 *   9.  Language bar
 *   10. Widget system    — positioning, persistence
 *   11. Drag & Drop      — moving widgets in layout-edit mode
 *   12. Settings panel   — opened via the gear button
 *   13. RAF loop         — particles + audio
 *   14. Initialization   — boot()
 *
 * Compatibility: ES5, no modules — works on file:// and inside WE CEF.
 */

/* Application version — displayed in the settings panel */
var APP_VERSION = '1.2.0';

(function () {
  'use strict';

  /* =========================================================================
     1. LOCALIZATION
     UI language: saved in localStorage → browser → EN.
  ========================================================================= */

  var LANG_KEY         = 'itw_lang';
  var WEATHER_CITY_KEY = 'itw_weather_city';
  var LANGBAR_KEY      = 'itw_langbar_hidden';   /* bottom menu collapsed flag */
  var APPS_KEY         = 'itw_apps';         /* quick-access items, per panel id */
  var INSTANCES_KEY    = 'itw_instances';    /* duplicated notes/apps instances */
  var TITLES_KEY       = 'itw_titles';       /* custom panel header titles */

  /* Supported interface ("primary") languages. Adding one only requires a
     TRANSLATIONS[<code>] table (missing keys fall back to English) and a
     button in the language bar / settings — no other logic changes. */
  var UI_LANGS = ['en', 'ru', 'es', 'ja', 'ko', 'th'];

  /**
   * Returns true when the given code is a supported interface language.
   */
  function isUiLang(code) {
    for (var i = 0; i < UI_LANGS.length; i++) if (UI_LANGS[i] === code) return true;
    return false;
  }

  /**
   * Detects the active UI locale. Saved choice → browser language → English.
   */
  function detectLocale() {
    var saved = '';
    try { saved = localStorage.getItem(LANG_KEY) || ''; } catch (e) {}
    if (saved && saved !== 'auto' && isUiLang(saved)) return saved;
    return 'en';   /* English is the default interface language */
  }

  /**
   * Maps an interface locale to the script family used to pick a transcription
   * column: Russian → Cyrillic readings, everything else → Latin readings.
   */
  function scriptGroup(lc) {
    return lc === 'ru' ? 'ru' : 'en';
  }

  var locale = detectLocale();

  /* Translation table */
  var TRANSLATIONS = {

    en: {
      panels: {
        weather:  '// weather',
        notes:    '// notes',
        hotkeys:  '// windows hotkeys',
        terminal: '// terminal commands',
        clock:    '// clock',
        lessons:  '// lessons',
        apps:     '// apps',
        numbers:  '// numbers'
      },
      weather: {
        feelsLike: 'feels like', humidity: 'humidity', wind: 'wind',
        sunrise: 'sunrise', sunset: 'sunset',
        tempHL: 'high / low', dewPoint: 'dew point', gust: 'gust',
        pressure: 'pressure', cloud: 'cloud cover', uv: 'UV index',
        visibility: 'visibility', precip: 'precipitation', precipProb: 'precip. chance',
        loading: 'Loading…', unavailable: 'Unavailable', setCity: 'Set your city ⚙'
      },
      notes: {
        placeholder: 'click to edit…',
        defaultText: '[ ] Deploy bot\n[ ] Fix landing\n[ ] Learn a language'
      },
      lang: { auto: 'Auto' },
      lessons: {
        loading: 'Loading…', notFound: 'No language data found',
        lesson: 'Lesson', words: 'Words',
        syllables: 'Syllables', phrases: 'Phrases'
      },
      apps: {
        add: 'Add', name: 'Name', url: 'URL or path',
        open: 'Open', delete: 'Delete', moveLeft: 'Move left', moveRight: 'Move right'
      },
      settings: {
        language: 'Primary language', theme: 'Theme', clockFmt: 'Clock',
        panels: 'Show panels', layout: 'Layout',
        editMode: 'Edit Mode', reset: 'Reset Layout',
        resetAll: 'Reset All Settings',
        appearance: 'Widget Appearance', bg: 'BG',
        colors: 'Colors', moduleColor: 'Module color', textColor: 'Text color',
        weatherSection: 'Weather', city: 'City',
        lessonsSection: 'Lessons', course: 'Study language'
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
        lessons:  '// уроки',
        apps:     '// программы',
        numbers:  '// числа'
      },
      weather: {
        feelsLike: 'ощущается', humidity: 'влажность', wind: 'ветер',
        sunrise: 'рассвет', sunset: 'закат',
        tempHL: 'макс / мин', dewPoint: 'точка росы', gust: 'порывы',
        pressure: 'давление', cloud: 'облачность', uv: 'УФ-индекс',
        visibility: 'видимость', precip: 'осадки', precipProb: 'вероятн. осадков',
        loading: 'Загрузка…', unavailable: 'Недоступно', setCity: 'Укажите город ⚙'
      },
      notes: {
        placeholder: 'нажмите для ввода…',
        defaultText: '[ ] Деплой бота\n[ ] Починить лендинг\n[ ] Учить язык'
      },
      lang: { auto: 'Авто' },
      lessons: {
        loading: 'Загрузка…', notFound: 'Данные языков не найдены',
        lesson: 'Урок', words: 'Слова',
        syllables: 'Слоги', phrases: 'Фразы'
      },
      apps: {
        add: 'Добавить', name: 'Название', url: 'URL или путь',
        open: 'Открыть', delete: 'Удалить', moveLeft: 'Влево', moveRight: 'Вправо'
      },
      settings: {
        language: 'Основной язык', theme: 'Тема', clockFmt: 'Часы',
        panels: 'Показать панели', layout: 'Макет',
        editMode: 'Режим редакт.', reset: 'Сбросить макет',
        resetAll: 'Сбросить всё',
        appearance: 'Внешний вид', bg: 'ФОН',
        colors: 'Цвета', moduleColor: 'Цвет модулей', textColor: 'Цвет текста',
        weatherSection: 'Погода', city: 'Город',
        lessonsSection: 'Уроки', course: 'Язык изучения'
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
    },

    /* Spanish UI. Lesson content and terminal/hotkey lists fall back to EN. */
    es: {
      panels: { weather: '// clima', notes: '// notas', hotkeys: '// atajos windows',
                terminal: '// comandos terminal', clock: '// reloj', lessons: '// lecciones',
                apps: '// apps', numbers: '// números' },
      weather: { feelsLike: 'sensación', humidity: 'humedad', wind: 'viento',
                 sunrise: 'amanecer', sunset: 'atardecer', tempHL: 'máx / mín',
                 dewPoint: 'punto de rocío', gust: 'racha', pressure: 'presión',
                 cloud: 'nubosidad', uv: 'índice UV', visibility: 'visibilidad',
                 precip: 'precipitación', precipProb: 'prob. lluvia',
                 loading: 'Cargando…', unavailable: 'No disponible', setCity: 'Indica tu ciudad ⚙' },
      notes: { placeholder: 'clic para editar…',
               defaultText: '[ ] Desplegar bot\n[ ] Arreglar la landing\n[ ] Aprender un idioma' },
      lang: { auto: 'Auto' },
      lessons: { loading: 'Cargando…', notFound: 'No se encontraron datos de idioma',
                 lesson: 'Lección', words: 'Palabras', syllables: 'Sílabas', phrases: 'Frases' },
      apps: { add: 'Añadir', name: 'Nombre', url: 'URL o ruta',
              open: 'Abrir', delete: 'Eliminar', moveLeft: 'Mover izq.', moveRight: 'Mover der.' },
      settings: { language: 'Idioma principal', theme: 'Tema', clockFmt: 'Reloj',
                  panels: 'Mostrar paneles', layout: 'Diseño', editMode: 'Modo edición',
                  reset: 'Restablecer diseño', resetAll: 'Restablecer todo',
                  appearance: 'Apariencia', bg: 'FONDO',
                  colors: 'Colores', moduleColor: 'Color de módulos', textColor: 'Color del texto',
                  weatherSection: 'Clima', city: 'Ciudad',
                  lessonsSection: 'Lecciones', course: 'Idioma de estudio' }
    },

    /* Japanese UI. */
    ja: {
      panels: { weather: '// 天気', notes: '// メモ', hotkeys: '// ショートカット',
                terminal: '// ターミナル', clock: '// 時計', lessons: '// レッスン',
                apps: '// アプリ', numbers: '// 数字' },
      weather: { feelsLike: '体感', humidity: '湿度', wind: '風', sunrise: '日の出', sunset: '日の入',
                 tempHL: '最高 / 最低', dewPoint: '露点', gust: '突風', pressure: '気圧',
                 cloud: '雲量', uv: 'UV指数', visibility: '視程', precip: '降水量',
                 precipProb: '降水確率', loading: '読み込み中…', unavailable: '利用不可', setCity: '都市を設定 ⚙' },
      notes: { placeholder: 'クリックして編集…',
               defaultText: '[ ] ボットをデプロイ\n[ ] LPを修正\n[ ] 言語を学ぶ' },
      lang: { auto: '自動' },
      lessons: { loading: '読み込み中…', notFound: '言語データが見つかりません',
                 lesson: 'レッスン', words: '単語', syllables: '音節', phrases: 'フレーズ' },
      apps: { add: '追加', name: '名前', url: 'URL / パス',
              open: '開く', delete: '削除', moveLeft: '左へ', moveRight: '右へ' },
      settings: { language: '主言語', theme: 'テーマ', clockFmt: '時計', panels: 'パネル表示',
                  layout: 'レイアウト', editMode: '編集モード', reset: 'レイアウト初期化',
                  resetAll: '全設定リセット', appearance: '外観', bg: '背景',
                  colors: '色', moduleColor: 'モジュール色', textColor: '文字色',
                  weatherSection: '天気',
                  city: '都市', lessonsSection: 'レッスン', course: '学習言語' }
    },

    /* Korean UI. */
    ko: {
      panels: { weather: '// 날씨', notes: '// 메모', hotkeys: '// 단축키',
                terminal: '// 터미널', clock: '// 시계', lessons: '// 레슨',
                apps: '// 앱', numbers: '// 숫자' },
      weather: { feelsLike: '체감', humidity: '습도', wind: '바람', sunrise: '일출', sunset: '일몰',
                 tempHL: '최고 / 최저', dewPoint: '이슬점', gust: '돌풍', pressure: '기압',
                 cloud: '구름량', uv: '자외선지수', visibility: '시정', precip: '강수량',
                 precipProb: '강수확률', loading: '불러오는 중…', unavailable: '사용 불가', setCity: '도시를 설정 ⚙' },
      notes: { placeholder: '클릭하여 편집…',
               defaultText: '[ ] 봇 배포\n[ ] 랜딩 수정\n[ ] 언어 배우기' },
      lang: { auto: '자동' },
      lessons: { loading: '불러오는 중…', notFound: '언어 데이터를 찾을 수 없음',
                 lesson: '레슨', words: '단어', syllables: '음절', phrases: '문장' },
      apps: { add: '추가', name: '이름', url: 'URL / 경로',
              open: '열기', delete: '삭제', moveLeft: '왼쪽', moveRight: '오른쪽' },
      settings: { language: '기본 언어', theme: '테마', clockFmt: '시계', panels: '패널 표시',
                  layout: '레이아웃', editMode: '편집 모드', reset: '레이아웃 초기화',
                  resetAll: '모든 설정 초기화', appearance: '모양', bg: '배경',
                  colors: '색상', moduleColor: '모듈 색', textColor: '글자 색',
                  weatherSection: '날씨',
                  city: '도시', lessonsSection: '레슨', course: '학습 언어' }
    },

    /* Thai UI. */
    th: {
      panels: { weather: '// อากาศ', notes: '// บันทึก', hotkeys: '// คีย์ลัด',
                terminal: '// คำสั่งเทอร์มินัล', clock: '// นาฬิกา', lessons: '// บทเรียน',
                apps: '// แอป', numbers: '// ตัวเลข' },
      weather: { feelsLike: 'รู้สึกเหมือน', humidity: 'ความชื้น', wind: 'ลม',
                 sunrise: 'พระอาทิตย์ขึ้น', sunset: 'พระอาทิตย์ตก', tempHL: 'สูง / ต่ำ',
                 dewPoint: 'จุดน้ำค้าง', gust: 'ลมกระโชก', pressure: 'ความกดอากาศ',
                 cloud: 'เมฆ', uv: 'ดัชนี UV', visibility: 'ทัศนวิสัย', precip: 'หยาดน้ำฟ้า',
                 precipProb: 'โอกาสฝน', loading: 'กำลังโหลด…', unavailable: 'ไม่พร้อมใช้งาน', setCity: 'ตั้งค่าเมือง ⚙' },
      notes: { placeholder: 'คลิกเพื่อแก้ไข…',
               defaultText: '[ ] ดีพลอยบอท\n[ ] แก้แลนดิ้ง\n[ ] เรียนภาษา' },
      lang: { auto: 'อัตโนมัติ' },
      lessons: { loading: 'กำลังโหลด…', notFound: 'ไม่พบข้อมูลภาษา',
                 lesson: 'บทเรียน', words: 'คำศัพท์', syllables: 'พยางค์', phrases: 'วลี' },
      apps: { add: 'เพิ่ม', name: 'ชื่อ', url: 'URL หรือพาธ',
              open: 'เปิด', delete: 'ลบ', moveLeft: 'ย้ายซ้าย', moveRight: 'ย้ายขวา' },
      settings: { language: 'ภาษาหลัก', theme: 'ธีม', clockFmt: 'นาฬิกา', panels: 'แสดงแผง',
                  layout: 'เลย์เอาต์', editMode: 'โหมดแก้ไข', reset: 'รีเซ็ตเลย์เอาต์',
                  resetAll: 'รีเซ็ตทั้งหมด', appearance: 'รูปลักษณ์', bg: 'พื้นหลัง',
                  colors: 'สี', moduleColor: 'สีโมดูล', textColor: 'สีข้อความ',
                  weatherSection: 'อากาศ', city: 'เมือง', lessonsSection: 'บทเรียน',
                  course: 'ภาษาที่เรียน' }
    }

  }; /* end of translation table */

  /**
   * Resolves a translation dot-path (e.g. 'panels.clock') in a specific
   * language table, returning null when the key is absent.
   */
  function tLookup(lc, path) {
    var parts = path.split('.');
    var node  = TRANSLATIONS[lc];
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return null;
      node = node[parts[i]];
    }
    return typeof node === 'string' ? node : null;
  }

  /**
   * Returns the UI translation for a dot path, falling back to English when
   * the active language has no entry, then to the raw path.
   */
  function t(path) {
    var v = tLookup(locale, path);
    if (v !== null) return v;
    if (locale !== 'en') { v = tLookup('en', path); if (v !== null) return v; }
    return path;
  }

  /**
   * Resolves a localized value object (e.g. { en, ru, es, … }) for the active
   * locale, falling back through English, Russian, then any present value.
   * This lets datasets ship only the translations they have without breaking
   * other languages.
   */
  function localized(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    if (obj[locale] != null && obj[locale] !== '') return obj[locale];
    if (obj.en != null && obj.en !== '') return obj.en;
    if (obj.ru != null && obj.ru !== '') return obj.ru;
    for (var k in obj) { if (obj.hasOwnProperty(k) && obj[k]) return obj[k]; }
    return '';
  }

  /**
   * Applies translations to all elements carrying a data-i18n attribute.
   */
  function applyLocale() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute('data-i18n'));
    }
    var ta = document.getElementById('notes-area');
    if (ta) ta.placeholder = t('notes.placeholder');
    /* Re-apply custom / auto-suffix panel titles (data-i18n just overwrote them) */
    if (typeof applyAllCustomTitles === 'function') applyAllCustomTitles();
    /* Update the <html> lang attribute so browser tooling behaves correctly */
    document.documentElement.lang = locale;
  }

  /* =========================================================================
     2. WIDGET VISIBILITY
  ========================================================================= */

  /* Map: config key → widget DOM id */
  var VISIBILITY_MAP = {
    clock:    'panel-clock',
    weather:  'panel-weather',
    notes:    'panel-notes',
    hotkeys:  'panel-hotkeys',
    terminal: 'panel-terminal',
    lessons:  'panel-lessons',
    apps:     'panel-apps',
    numbers:  'panel-numbers'
  };

  var VIS_KEY = 'itw_visibility';

  /**
   * Applies panel visibility from a partial { key: bool } map.
   */
  function applyVisibility(vis) {
    for (var key in VISIBILITY_MAP) {
      if (!VISIBILITY_MAP.hasOwnProperty(key)) continue;
      if (vis[key] === undefined) continue;
      var el = document.getElementById(VISIBILITY_MAP[key]);
      if (el) el.style.display = vis[key] ? '' : 'none';
    }
  }

  /**
   * Loads persisted visibility from localStorage and applies it.
   */
  function loadVisibility() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(VIS_KEY) || '{}'); } catch (e) {}
    if (Object.keys(saved).length) {
      ITW.Config.apply({ visibility: saved });
    }
    applyVisibility(ITW.Config.get().visibility);
  }

  /**
   * Persists the current visibility map to localStorage.
   */
  function saveVisibility() {
    try { localStorage.setItem(VIS_KEY, JSON.stringify(ITW.Config.get().visibility)); } catch (e) {}
  }

  /**
   * Toggles visibility of a single widget and persists the change.
   */
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
     3. WALLPAPER ENGINE BRIDGE
  ========================================================================= */

  /**
   * Applies the accent color ("r,g,b" string) to CSS variables and particles.
   */
  function applyAccent(rgb) {
    var root = document.documentElement;
    root.style.setProperty('--accent-rgb', rgb);
    root.style.setProperty('--accent', 'rgb(' + rgb + ')');
    if (ITW.Particles) ITW.Particles.setAccent(rgb);
  }

  /**
   * Applies the color theme via the data-theme attribute.
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme || 'vscode');
  }

  /* localStorage keys for the user color overrides */
  var PANEL_COLOR_KEY = 'itw_panel_color';
  var TEXT_COLOR_KEY  = 'itw_text_color';

  /**
   * Converts a #rgb / #rrggbb hex string to an "r,g,b" string, or '' if invalid.
   */
  function hexToRgb(hex) {
    if (!hex) return '';
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.replace(/./g, '$&$&');
    if (!/^[0-9a-fA-F]{6}$/.test(hex)) return '';
    var n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(',');
  }

  /**
   * Applies a custom module (panel) background color, or restores the theme
   * default when hex is empty. Overrides --panel-rgb globally.
   */
  function applyPanelColor(hex) {
    var root = document.documentElement;
    var rgb = hexToRgb(hex);
    if (rgb) root.style.setProperty('--panel-rgb', rgb);
    else     root.style.removeProperty('--panel-rgb');
  }

  /**
   * Applies a custom text color, or restores the theme default when empty.
   */
  function applyTextColor(hex) {
    var root = document.documentElement;
    if (hexToRgb(hex)) root.style.setProperty('--text', hex);
    else               root.style.removeProperty('--text');
  }

  /**
   * Loads persisted custom colors and applies them.
   */
  function loadCustomColors() {
    var p = '', tx = '';
    try {
      p  = localStorage.getItem(PANEL_COLOR_KEY) || '';
      tx = localStorage.getItem(TEXT_COLOR_KEY)  || '';
    } catch (e) {}
    if (p)  applyPanelColor(p);
    if (tx) applyTextColor(tx);
  }

  /* WE hook — invoked on startup and whenever the user edits WE properties */
  window.wallpaperPropertyListener = {
    applyUserProperties: function (props) {
      var patch = {};
      var weatherChanged = false;

      /* Accent color: WE passes three space-separated floats 0..1 */
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
        /* Sync with localStorage so the settings panel knows the theme */
        try { localStorage.setItem('itw_theme', props.theme.value); } catch (e) {}
      }
      if (props.format24h !== undefined) {
        patch.general = patch.general || {};
        patch.general.format24h = props.format24h.value !== false;
        try { localStorage.setItem('itw_format24h', String(props.format24h.value !== false)); } catch (e) {}
      }
      if (props.city && props.city.value !== undefined) {
        patch.weather = patch.weather || {};
        patch.weather.city = String(props.city.value).trim();
        weatherChanged = true;
      }
      if (props.weatherKey && props.weatherKey.value) {
        patch.weather = patch.weather || {};
        patch.weather.apiKey   = props.weatherKey.value;
        patch.weather.provider = 'openweathermap';
        weatherChanged = true;
      }
      if (props.weatherUnits && props.weatherUnits.value) {
        patch.weather = patch.weather || {};
        patch.weather.units = props.weatherUnits.value;
        weatherChanged = true;
      }
      /* Language course selection from WE */
      if (props.course && props.course.value) {
        patch.lessons = patch.lessons || {};
        patch.lessons.course = props.course.value;
        /* If datasets are already loaded, switch immediately */
        if (ITW.Languages && ITW.Languages.get(props.course.value)) {
          setCourse(props.course.value);
        }
      }
      /* Typewriter intro toggle from WE */
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
      /* Language/settings bar visibility from WE (lets the user restore the
         bar after hiding it on the desktop) */
      if (props.showLangBar !== undefined) {
        setMenuCollapsed(props.showLangBar.value === false);
      }
      /* Widget visibility from WE */
      var visPatch = {};
      if (props.showClock    !== undefined) visPatch.clock    = props.showClock.value    !== false;
      if (props.showWeather  !== undefined) visPatch.weather  = props.showWeather.value  !== false;
      if (props.showNotes    !== undefined) visPatch.notes    = props.showNotes.value    !== false;
      if (props.showHotkeys  !== undefined) visPatch.hotkeys  = props.showHotkeys.value  !== false;
      if (props.showTerminal !== undefined) visPatch.terminal = props.showTerminal.value !== false;
      if (props.showLessons  !== undefined) visPatch.lessons  = props.showLessons.value  !== false;
      if (props.showApps     !== undefined) visPatch.apps     = props.showApps.value     !== false;
      if (props.showNumbers  !== undefined) visPatch.numbers  = props.showNumbers.value  !== false;
      if (Object.keys(visPatch).length) {
        patch.visibility = visPatch;
        applyVisibility(visPatch);
      }

      ITW.Config.apply(patch);

      /* Refresh the weather immediately when the city/units/key change,
         instead of waiting for the next 10-minute interval. */
      if (weatherChanged) {
        try { localStorage.setItem(WEATHER_CITY_KEY, ITW.Config.get().weather.city || ''); } catch (e) {}
        var ci = document.getElementById('settings-city-input');
        if (ci && document.activeElement !== ci) ci.value = ITW.Config.get().weather.city || '';
        if (typeof fetchWeather === 'function') fetchWeather();
      }
    }
  };

  /* =========================================================================
     4. WEATHER SVG ICONS
  ========================================================================= */
  var WeatherCanvas = (function () {
    /* WMO code ranges → [day icon, night icon] */
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

    /**
     * Resolves the SVG asset path for a WMO weather code.
     */
    function svgName(code, isDay) {
      for (var i = 0; i < SVG_MAP.length; i++) {
        if (code >= SVG_MAP[i][0] && code <= SVG_MAP[i][1])
          return 'assets/weather/' + (isDay ? SVG_MAP[i][2] : SVG_MAP[i][3]) + '.svg';
      }
      return 'assets/weather/' + (isDay ? 'clear-day' : 'clear-night') + '.svg';
    }

    /**
     * Sets the initial icon based on the local time of day.
     */
    function init() {
      var el = document.getElementById('w-icon-svg');
      if (!el) return;
      el.src = svgName(0, new Date().getHours() >= 6 && new Date().getHours() < 20);
    }

    /**
     * Swaps the icon with a short fade when the weather code changes.
     */
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
     5. WEATHER
  ========================================================================= */

  /**
   * Fetches weather via ITW.Weather and renders it into the weather panel.
   */
  function fetchWeather() {
    var condEl = document.getElementById('w-cond');
    /* Empty city → ITW.Weather auto-detects the location by IP. */
    if (condEl) condEl.textContent = t('weather.loading');

    ITW.Weather.fetch()
      .then(function (data) {
        var map = {
          'w-temp':     data.temp,      'w-feels':    data.feelsLike,
          'w-hl':       data.tempHL,    'w-hum':      data.humidity,
          'w-dew':      data.dewPoint,  'w-wind':     data.wind,
          'w-gust':     data.gust,      'w-press':    data.pressure,
          'w-cloud':    data.cloud,     'w-uv':       data.uv,
          'w-vis':      data.visibility,'w-precip':   data.precip,
          'w-precipprob': data.precipProb,
          'w-cond':     data.condition, 'w-rise':     data.sunrise,
          'w-set':      data.sunset,    'w-location': data.location
        };
        for (var id in map) {
          if (!map.hasOwnProperty(id)) continue;
          var el = document.getElementById(id);
          /* Allow 0 (e.g. UV index 0) but skip null/undefined/empty values. */
          if (el && map[id] !== null && map[id] !== undefined && map[id] !== '')
            el.textContent = map[id];
        }
        if (data.code !== null && data.code !== undefined)
          WeatherCanvas.update(data.code, data.isDay);
      })
      .catch(function () {
        /* On failure clear every field — never show stale data */
        var fields = ['w-temp','w-feels','w-hl','w-hum','w-dew','w-wind','w-gust',
                      'w-press','w-cloud','w-uv','w-vis','w-precip','w-precipprob',
                      'w-rise','w-set'];
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
     6. EDITOR CLOCK
  ========================================================================= */

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

  /**
   * Pads a number to two digits.
   */
  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  /**
   * Pushes the current date/time into the editor clock.
   */
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

  /**
   * Starts the 1-second clock interval.
   */
  function startClock() {
    tickClock();
    setInterval(tickClock, 1000);
  }

  /**
   * Initializes the editor clock, optionally with the typewriter intro.
   */
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
     7. NOTES
  ========================================================================= */

  var NOTES_KEY = 'itw_notes_v2';

  /**
   * Initializes the notes textarea with persistence on input.
   */
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

  /**
   * Attaches a defensive wheel-to-scroll handler to a scrollable element.
   * Wallpaper Engine's CEF runtime does not always forward native wheel
   * scrolling to overflowed panels, so we translate the wheel delta into an
   * explicit scrollTop change. No-op when the element cannot scroll.
   */
  function attachWheelScroll(el) {
    if (!el) return;
    el.addEventListener('wheel', function (e) {
      if (el.scrollHeight <= el.clientHeight) return;
      el.scrollTop += e.deltaY * (e.deltaMode === 1 ? 16 : 1);
      e.preventDefault();
    }, { passive: false });
  }

  /**
   * Enables mouse interaction in the content panels: wheel scrolling for the
   * terminal, hotkeys, lessons, weather and notes bodies, plus focusing the
   * notes textarea when its panel is clicked (outside layout-edit mode).
   *
   * Note: typing into the notes field requires keyboard input, which Wallpaper
   * Engine only delivers to a wallpaper while it has focus (e.g. in the WE
   * editor/preview). On the live desktop the OS keeps keyboard focus, so this
   * is a platform limitation, not a bug in the wallpaper.
   */
  function initPanelInteractions() {
    attachWheelScroll(document.getElementById('terminal-body'));
    attachWheelScroll(document.getElementById('hotkeys-body'));
    attachWheelScroll(document.getElementById('lesson-content'));
    attachWheelScroll(document.getElementById('notes-area'));
    attachWheelScroll(document.querySelector('#panel-weather .panel-body'));

    var ta = document.getElementById('notes-area');
    var np = document.getElementById('panel-notes');
    if (ta && np) {
      np.addEventListener('mousedown', function () {
        if (!layoutEditMode) setTimeout(function () { ta.focus(); }, 0);
      });
    }
  }

  /* =========================================================================
     8a. QUICK-ACCESS APPS  (editable shortcut board)
     Web links (http/https) open in the external browser; local paths are
     shown as tiles only — Wallpaper Engine's web runtime cannot launch
     external programs. Items are stored per panel id so duplicated apps
     panels keep independent lists.
  ========================================================================= */

  /* Default quick-access item shipped to every user (deletable). */
  var APPS_DEFAULT  = { name: 'Steam', url: 'https://steamcommunity.com/id/southbone/' };
  var APPS_SEED_KEY = 'itw_apps_seeded';   /* one-time seed marker */

  /**
   * Returns the persisted apps store: { panelId: [ { name, url } ] }.
   */
  function loadAppsStore() {
    var s = {};
    try { s = JSON.parse(localStorage.getItem(APPS_KEY) || '{}'); } catch (e) {}
    return s;
  }

  /**
   * Persists the apps store.
   */
  function saveAppsStore(store) {
    try { localStorage.setItem(APPS_KEY, JSON.stringify(store)); } catch (e) {}
  }

  /**
   * Seeds the default Steam shortcut into the base apps panel exactly once
   * (even for users who already have other items). After this runs the user
   * may delete it permanently — the seed marker prevents it from coming back.
   * Also strips the old non-clickable "My Computer" placeholder.
   */
  function ensureAppsSeed() {
    var seeded = false;
    try { seeded = localStorage.getItem(APPS_SEED_KEY) === '1'; } catch (e) { return; }
    if (seeded) return;

    var store = loadAppsStore();
    var list  = store['panel-apps'] || [];
    var cleaned = [], i;
    for (i = 0; i < list.length; i++) {
      var it = list[i];
      if (it && (it.def || (!it.name && !it.url))) continue;   /* drop legacy placeholder */
      cleaned.push(it);
    }
    var hasSteam = false;
    for (i = 0; i < cleaned.length; i++) {
      if (cleaned[i].url === APPS_DEFAULT.url) { hasSteam = true; break; }
    }
    if (!hasSteam) cleaned.unshift({ name: APPS_DEFAULT.name, url: APPS_DEFAULT.url });

    store['panel-apps'] = cleaned;
    saveAppsStore(store);
    try { localStorage.setItem(APPS_SEED_KEY, '1'); } catch (e) {}
  }

  /**
   * Returns the item list for a panel. A brand-new base panel is seeded with
   * the Steam default; duplicated panels start empty.
   */
  function getAppsList(panelId) {
    var store = loadAppsStore();
    if (!store[panelId]) {
      store[panelId] = (panelId === 'panel-apps')
        ? [ { name: APPS_DEFAULT.name, url: APPS_DEFAULT.url } ]
        : [];
      saveAppsStore(store);
    }
    return store[panelId];
  }

  /**
   * Replaces the item list for a panel.
   */
  function setAppsList(panelId, list) {
    var store = loadAppsStore();
    store[panelId] = list;
    saveAppsStore(store);
  }

  /**
   * Resolves an item's display name.
   */
  function appItemName(item) {
    return (item && item.name) || '';
  }

  /**
   * Opens an item: http/https links launch the external browser, other
   * targets do nothing (cannot be launched from the WE sandbox).
   */
  function openAppItem(item) {
    var url = item && item.url || '';
    if (/^https?:\/\//i.test(url)) { try { window.open(url, '_blank'); } catch (e) {} }
  }

  /**
   * Renders the tile grid (plus the add form) for one apps panel.
   */
  function renderApps(panelId) {
    var panel = document.getElementById(panelId);
    if (!panel) return;
    var body = panel.querySelector('.apps-body');
    if (!body) return;
    var list = getAppsList(panelId);

    var html = '<div class="apps-grid">';
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      var icon = /^https?:\/\//i.test(it.url || '') ? '🔗' : '▸';
      html += '<div class="app-tile" data-idx="' + i + '" title="' +
              esc(it.url || appItemName(it)) + '">' +
              '<div class="app-icon">' + icon + '</div>' +
              '<div class="app-name">' + esc(appItemName(it)) + '</div></div>';
    }
    html += '<div class="app-tile app-add" data-add="1" title="' + esc(t('apps.add')) + '">' +
            '<div class="app-icon">+</div><div class="app-name">' + esc(t('apps.add')) + '</div></div>';
    html += '</div>';
    html += '<div class="apps-addform" hidden>' +
            '<input type="text" class="apps-input apps-name" placeholder="' + esc(t('apps.name')) +
              '" maxlength="40" autocomplete="off" spellcheck="false" />' +
            '<input type="text" class="apps-input apps-url" placeholder="' + esc(t('apps.url')) +
              '" autocomplete="off" spellcheck="false" />' +
            '<button class="apps-add-ok">' + esc(t('apps.add')) + '</button></div>';
    body.innerHTML = html;
    wireApps(panelId, body);
  }

  /**
   * Re-renders every apps panel (used after a locale change).
   */
  function renderAllApps() {
    for (var i = 0; i < WIDGET_IDS.length; i++) {
      var el = document.getElementById(WIDGET_IDS[i]);
      if (el && el.getAttribute('data-widget-type') === 'apps') renderApps(WIDGET_IDS[i]);
    }
  }

  /**
   * Shows or hides the inline add form of an apps panel.
   */
  function toggleAppsForm(body, show) {
    var form = body.querySelector('.apps-addform');
    if (form) form.hidden = !show;
    if (show) { var n = body.querySelector('.apps-name'); if (n) n.focus(); }
  }

  /**
   * Wires tile clicks, the add form and the right-click context menu.
   */
  function wireApps(panelId, body) {
    var tiles = body.querySelectorAll('.app-tile');
    for (var i = 0; i < tiles.length; i++) {
      (function (tile) {
        if (tile.getAttribute('data-add')) {
          tile.addEventListener('click', function () {
            var f = body.querySelector('.apps-addform');
            toggleAppsForm(body, f ? f.hidden : true);
          });
          return;
        }
        var idx = parseInt(tile.getAttribute('data-idx'), 10);
        tile.addEventListener('click', function () { openAppItem(getAppsList(panelId)[idx]); });
        tile.addEventListener('contextmenu', function (e) {
          e.preventDefault();
          showAppsMenu(e.clientX, e.clientY, panelId, idx);
        });
      }(tiles[i]));
    }

    var form = body.querySelector('.apps-addform');
    if (form) {
      var nameI = form.querySelector('.apps-name');
      var urlI  = form.querySelector('.apps-url');
      var ok    = form.querySelector('.apps-add-ok');

      /* Adds the typed item to the list and re-renders. */
      function add() {
        var nm = (nameI.value || '').trim();
        if (!nm) { nameI.focus(); return; }
        var list = getAppsList(panelId);
        list.push({ name: nm, url: (urlI.value || '').trim() });
        setAppsList(panelId, list);
        renderApps(panelId);
      }
      if (ok)   ok.addEventListener('click', add);
      if (urlI) urlI.addEventListener('keydown', function (e) { if (e.key === 'Enter') add(); });
      if (nameI) nameI.addEventListener('keydown', function (e) { if (e.key === 'Enter') { if (urlI) urlI.focus(); } });
    }
  }

  /**
   * Moves an item left/right (dir = -1 | +1).
   */
  function moveApp(panelId, idx, dir) {
    var list = getAppsList(panelId);
    var ni = idx + dir;
    if (ni < 0 || ni >= list.length) return;
    var tmp = list[idx]; list[idx] = list[ni]; list[ni] = tmp;
    setAppsList(panelId, list);
    renderApps(panelId);
  }

  /**
   * Deletes an item (the default entry cannot be deleted).
   */
  function deleteApp(panelId, idx) {
    var list = getAppsList(panelId);
    list.splice(idx, 1);
    setAppsList(panelId, list);
    renderApps(panelId);
  }

  /**
   * Removes the apps context menu and its outside-click listener.
   */
  function hideAppsMenu() {
    var m = document.getElementById('apps-ctxmenu');
    if (m && m.parentNode) m.parentNode.removeChild(m);
    document.removeEventListener('mousedown', hideAppsMenuOutside, true);
  }

  /**
   * Closes the context menu when clicking outside it.
   */
  function hideAppsMenuOutside(e) {
    var m = document.getElementById('apps-ctxmenu');
    if (m && !m.contains(e.target)) hideAppsMenu();
  }

  /**
   * Shows the localized right-click menu for an item.
   */
  function showAppsMenu(x, y, panelId, idx) {
    hideAppsMenu();
    var list = getAppsList(panelId);
    var item = list[idx];
    if (!item) return;
    var menu = document.createElement('div');
    menu.className = 'apps-ctxmenu';
    menu.id = 'apps-ctxmenu';

    /* Adds one menu row (disabled rows are shown greyed out). */
    function row(label, fn, disabled) {
      var b = document.createElement('button');
      b.className = 'apps-ctx-item';
      b.textContent = label;
      if (disabled) b.disabled = true;
      else b.addEventListener('click', function () { fn(); hideAppsMenu(); });
      menu.appendChild(b);
    }
    if (/^https?:\/\//i.test(item.url || '')) row(t('apps.open'), function () { openAppItem(item); }, false);
    row(t('apps.moveLeft'),  function () { moveApp(panelId, idx, -1); }, idx === 0);
    row(t('apps.moveRight'), function () { moveApp(panelId, idx, 1); }, idx === list.length - 1);
    row(t('apps.delete'), function () { deleteApp(panelId, idx); }, false);

    document.body.appendChild(menu);
    menu.style.left = Math.min(x, window.innerWidth  - menu.offsetWidth  - 4) + 'px';
    menu.style.top  = Math.min(y, window.innerHeight - menu.offsetHeight - 4) + 'px';
    setTimeout(function () { document.addEventListener('mousedown', hideAppsMenuOutside, true); }, 0);
  }

  /* =========================================================================
     8b. MODULE INSTANCES  (duplicate notes / apps)
  ========================================================================= */

  var instanceCounter = 1;   /* base panels are "1"; duplicates start at 2 */

  /**
   * Loads a notes textarea instance backed by its own localStorage key.
   */
  function initNotesInstance(panelEl, key) {
    var el = panelEl.querySelector('.notes-area');
    if (!el) return;
    var saved = '';
    try { saved = localStorage.getItem(key) || ''; } catch (e) {}
    el.value = saved;
    el.placeholder = t('notes.placeholder');
    el.addEventListener('input', function () {
      try { localStorage.setItem(key, el.value); } catch (e) {}
    });
  }

  /**
   * Wires the per-instance remove button (and focuses notes on click).
   */
  function attachInstanceControls(panelEl) {
    var rm = panelEl.querySelector('[data-remove]');
    if (rm) rm.addEventListener('click', function () { removeInstance(panelEl.id); });
    var ta = panelEl.querySelector('.notes-area');
    if (ta) panelEl.addEventListener('mousedown', function () {
      if (!layoutEditMode) setTimeout(function () { ta.focus(); }, 0);
    });
  }

  /**
   * Localizes [data-i18n] elements inside a freshly created element.
   */
  function localizeWithin(root) {
    var els = root.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute('data-i18n'));
  }

  /**
   * Creates a duplicate of a notes/apps panel. When existingId is supplied the
   * instance is being restored from storage (no new persistence write).
   */
  function createInstance(type, existingId) {
    var baseId = (type === 'notes') ? 'panel-notes' : 'panel-apps';
    var base = document.getElementById(baseId);
    if (!base) return null;

    var id = existingId || (baseId + '-' + (++instanceCounter));
    if (existingId) {
      var n = parseInt((existingId.split('-')[2] || '0'), 10);
      if (n > instanceCounter) instanceCounter = n;
    }
    if (document.getElementById(id)) return null;

    var clone = base.cloneNode(true);
    clone.id = id;
    clone.removeAttribute('data-drag-wired');
    /* Drop inner ids so the clone keeps no duplicates of the originals. */
    var withId = clone.querySelectorAll('[id]');
    for (var i = 0; i < withId.length; i++) withId[i].removeAttribute('id');
    /* Turn the duplicate (+) button into a remove (✕) button. */
    var ctl = clone.querySelector('[data-dup]');
    if (ctl) {
      ctl.removeAttribute('data-dup');
      ctl.setAttribute('data-remove', id);
      ctl.textContent = '✕';
      ctl.title = 'Remove';
    }
    /* Offset the clone from the original so it is immediately visible
       (a restored instance is repositioned afterwards by loadWidgetPositions). */
    var r = base.getBoundingClientRect();
    clone.style.left = (r.left + 28) + 'px';
    clone.style.top  = (r.top + 28) + 'px';
    clone.style.right = clone.style.bottom = '';
    clone.style.transform = 'none';
    document.body.appendChild(clone);

    if (WIDGET_IDS.indexOf(id) < 0) WIDGET_IDS.push(id);

    if (type === 'notes') {
      var ta = clone.querySelector('.notes-area');
      if (ta) ta.value = '';
      initNotesInstance(clone, 'itw_notes_' + id);
    } else {
      renderApps(id);
    }

    wireWidgetDragResize(clone);
    attachInstanceControls(clone);
    localizeWithin(clone);
    makeTitleEditable(clone);
    applyCustomTitle(clone);
    widgetBgState[id] = 0;
    applyWidgetBg(id);
    attachWheelScroll(clone.querySelector('.panel-body'));

    if (!existingId) saveInstances();
    return id;
  }

  /**
   * Removes a duplicated instance and its persisted data.
   */
  function removeInstance(id) {
    var el = document.getElementById(id);
    if (el && el.parentNode) el.parentNode.removeChild(el);
    var pos = WIDGET_IDS.indexOf(id);
    if (pos >= 0) WIDGET_IDS.splice(pos, 1);
    var store = loadAppsStore();
    if (store[id]) { delete store[id]; saveAppsStore(store); }
    try { localStorage.removeItem('itw_notes_' + id); } catch (e) {}
    saveInstances();
    saveWidgetPositions();
    saveWidgetSizes();
  }

  /**
   * Persists the list of currently open instances.
   */
  function saveInstances() {
    var arr = [];
    WIDGET_IDS.forEach(function (id) {
      if (id === 'panel-notes' || id === 'panel-apps') return;
      var el = document.getElementById(id);
      var type = el && el.getAttribute('data-widget-type');
      if (type) arr.push({ type: type, id: id });
    });
    try { localStorage.setItem(INSTANCES_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  /**
   * Recreates duplicated instances saved from a previous session.
   */
  function loadInstances() {
    var arr = [];
    try { arr = JSON.parse(localStorage.getItem(INSTANCES_KEY) || '[]'); } catch (e) {}
    arr.forEach(function (o) { if (o && o.type && o.id) createInstance(o.type, o.id); });
  }

  /**
   * Initializes the base apps panel and wires the duplicate buttons.
   */
  function initApps() {
    ensureAppsSeed();
    renderApps('panel-apps');
    var dups = document.querySelectorAll('[data-dup]');
    for (var i = 0; i < dups.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () { createInstance(btn.getAttribute('data-dup')); });
      }(dups[i]));
    }
    /* Base notes & apps headers are renamable too. */
    makeTitleEditable(document.getElementById('panel-notes'));
    makeTitleEditable(document.getElementById('panel-apps'));
    applyAllCustomTitles();
  }

  /* =========================================================================
     8c. RENAMABLE PANEL TITLES  (give notes/apps duplicates their identity)
  ========================================================================= */

  /**
   * Returns the custom-title store: { panelId: 'Custom name' }.
   */
  function loadTitles() {
    try { return JSON.parse(localStorage.getItem(TITLES_KEY) || '{}'); } catch (e) { return {}; }
  }

  /**
   * Persists the custom-title store.
   */
  function saveTitles(t) {
    try { localStorage.setItem(TITLES_KEY, JSON.stringify(t)); } catch (e) {}
  }

  /**
   * Sets a panel's header title: a custom name if set, otherwise the localized
   * default with an auto number suffix for duplicates ("// apps 2").
   */
  function applyCustomTitle(panelEl) {
    if (!panelEl) return;
    var titleEl = panelEl.querySelector('.panel-header-title');
    if (!titleEl) return;
    var custom = loadTitles()[panelEl.id];
    if (custom != null && custom !== '') { titleEl.textContent = custom; return; }
    var key  = titleEl.getAttribute('data-i18n');
    var base = key ? t(key) : titleEl.textContent;
    var m = panelEl.id.match(/^panel-(?:notes|apps)-(\d+)$/);
    titleEl.textContent = m ? (base + ' ' + m[1]) : base;
  }

  /**
   * Re-applies custom/suffix titles to every notes & apps panel.
   */
  function applyAllCustomTitles() {
    var els = document.querySelectorAll('[data-widget-type]');
    for (var i = 0; i < els.length; i++) applyCustomTitle(els[i]);
  }

  /**
   * Makes a panel header title editable on double-click (Enter saves, Esc
   * cancels, empty restores the default name).
   */
  function makeTitleEditable(panelEl) {
    if (!panelEl) return;
    var titleEl = panelEl.querySelector('.panel-header-title');
    if (!titleEl || titleEl.getAttribute('data-editable')) return;
    titleEl.setAttribute('data-editable', '1');
    titleEl.style.cursor = 'text';
    titleEl.addEventListener('dblclick', function () {
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'panel-title-input';
      inp.value = titleEl.textContent;
      inp.maxLength = 24;
      titleEl.style.display = 'none';
      titleEl.parentNode.insertBefore(inp, titleEl);
      inp.focus(); inp.select();
      var done = false;

      /* Finishes editing; save=true stores the typed value. */
      function commit(save) {
        if (done) return; done = true;
        if (save) {
          var v = inp.value.trim();
          var titles = loadTitles();
          if (v) titles[panelEl.id] = v;
          else   delete titles[panelEl.id];
          saveTitles(titles);
        }
        if (inp.parentNode) inp.parentNode.removeChild(inp);
        titleEl.style.display = '';
        applyCustomTitle(panelEl);
      }
      inp.addEventListener('blur', function () { commit(true); });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); commit(true); }
        else if (e.key === 'Escape') { commit(false); }
      });
    });
  }

  /* =========================================================================
     8. LANGUAGE LESSONS
     Fully data-driven widget. Renders whatever course is registered in
     ITW.Languages — no language-specific logic lives here.
  ========================================================================= */

  var COURSE_KEY = 'itw_course';
  var courseData  = null;   /* active dataset object */
  var lessonIndex = 0;

  /**
   * Returns the localStorage key holding the lesson index of a course.
   */
  function lessonIdxKey(courseId) { return 'itw_lesson_idx_' + courseId; }

  /**
   * Returns the localStorage key holding the rotation date of a course.
   */
  function lessonDateKey(courseId) { return 'itw_lesson_date_' + courseId; }

  /**
   * Resolves today's lesson index for a course: advances by one on the
   * first launch of each day (daily auto-rotation), otherwise restores
   * the saved index.
   */
  function getLessonIndex(courseId, total) {
    var today = new Date().toDateString();
    var savedDate = '', savedIndex = 0;
    try {
      savedDate  = localStorage.getItem(lessonDateKey(courseId))  || '';
      savedIndex = parseInt(localStorage.getItem(lessonIdxKey(courseId)) || '0', 10) || 0;
    } catch (e) {}
    if (savedDate !== today) {
      var newIndex = (savedDate === '') ? 0 : (savedIndex + 1) % total;
      try {
        localStorage.setItem(lessonDateKey(courseId), today);
        localStorage.setItem(lessonIdxKey(courseId), String(newIndex));
      } catch (e) {}
      return newIndex;
    }
    return savedIndex % total;
  }

  /**
   * Persists the lesson index of the active course.
   */
  function saveLessonIndex(idx) {
    if (!courseData) return;
    try { localStorage.setItem(lessonIdxKey(courseData.id), String(idx)); } catch (e) {}
  }

  /**
   * Escapes HTML special characters in a string.
   */
  function esc(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /**
   * Updates the lesson progress bar width.
   */
  function updateLessonProgress(idx, total) {
    var bar = document.getElementById('lesson-progress-bar');
    if (bar) bar.style.width = ((idx + 1) / total * 100).toFixed(1) + '%';
  }

  /**
   * Updates the lessons panel header with the localized course name.
   */
  function renderLessonHeader() {
    var header = document.getElementById('lessons-header');
    if (!header) return;
    header.textContent = courseData
      ? '// ' + localized(courseData.name).toLowerCase()
      : t('panels.lessons');
  }

  /**
   * Returns the transcription columns visible for the active UI locale.
   * A column shows when it has no `locale` tag or its tag equals the current
   * locale (RU → Cyrillic readings, EN → Latin readings). If filtering would
   * hide every column, all columns are returned (defensive fallback for
   * datasets that declare no locale tags).
   * Each entry keeps the column's original index so the positional tr[] values
   * stay aligned after filtering.
   */
  function visibleTrans(defs) {
    var out = [], i;
    var group = scriptGroup(locale);
    for (i = 0; i < defs.length; i++) {
      var loc = defs[i].locale;
      if (!loc || loc === group) out.push({ def: defs[i], idx: i });
    }
    if (!out.length) {
      for (i = 0; i < defs.length; i++) out.push({ def: defs[i], idx: i });
    }
    return out;
  }

  /**
   * Builds the transcription <span> sequence for a tr[] array, using only the
   * locale-visible columns. Column colors are positional by display order:
   * .lesson-tr-1 / -2 / -3.
   */
  function trSpans(tr, vdefs, brackets) {
    var html = '';
    for (var i = 0; i < vdefs.length; i++) {
      var val = (tr && tr[vdefs[i].idx]) || '';
      var text = val ? (brackets ? '[' + esc(val) + ']' : esc(val)) : '';
      html += '<span class="lesson-tr-' + (i + 1) + '" title="' +
              esc(localized(vdefs[i].def.label)) + '">' + text + '</span>';
    }
    return html;
  }

  /**
   * Builds a grid header row: blank symbol cell, one cell per visible
   * transcription column, plus an optional trailing blank cell.
   */
  function gridHead(vdefs, trailing) {
    var html = '<span></span>';
    for (var i = 0; i < vdefs.length; i++) {
      html += '<span>' + esc(localized(vdefs[i].def.label)) + '</span>';
    }
    if (trailing) html += '<span></span>';
    return html;
  }

  /**
   * Returns a grid-template-columns value for N transcription columns.
   */
  function gridColumns(symbolCol, trCount, trailingCol) {
    var cols = symbolCol;
    for (var i = 0; i < trCount; i++) cols += ' 1fr';
    if (trailingCol) cols += ' ' + trailingCol;
    return cols;
  }

  /**
   * Renders one lesson of the active course into the panel.
   */
  function renderLesson(idx) {
    if (!courseData || !courseData.lessons.length) return;
    var lessons = courseData.lessons;
    lessonIndex = ((idx % lessons.length) + lessons.length) % lessons.length;
    var entry = lessons[lessonIndex];
    var defs  = courseData.transcriptions || [];
    var vdefs = visibleTrans(defs);   /* columns shown for the active locale */

    var navLabel = document.getElementById('lesson-nav-label');
    if (navLabel)
      navLabel.textContent = t('lessons.lesson') + ' ' + (lessonIndex + 1) + ' / ' + lessons.length;

    updateLessonProgress(lessonIndex, lessons.length);
    renderLessonHeader();

    var content = document.getElementById('lesson-content');
    if (!content) return;

    var html = '';
    var i;

    /* Main symbol block */
    html += '<div class="lesson-letter-row">';
    html +=   '<div class="lesson-letter">' + esc(entry.symbol) + '</div>';
    html +=   '<div class="lesson-letter-info">';
    html +=     '<div class="lesson-letter-name">' + esc(entry.name || '') + '</div>';
    html +=     '<div class="lesson-transcriptions">' + trSpans(entry.tr, vdefs, true) + '</div>';
    if (entry.meaning) {
      html +=   '<div class="lesson-meaning">' + esc(localized(entry.meaning)) + '</div>';
    }
    html +=   '</div>';
    html += '</div>';
    html += '<div class="lesson-divider"></div>';

    /* Syllables — single grid with display:contents rows */
    if (entry.syllables && entry.syllables.length) {
      var hasExample = false;
      for (i = 0; i < entry.syllables.length; i++) {
        if (entry.syllables[i].example) { hasExample = true; break; }
      }
      var sylCols = gridColumns('1.4em', vdefs.length, hasExample ? '1.5fr' : '');
      html += '<div class="lesson-section-label">' + t('lessons.syllables') + '</div>';
      html += '<div class="lesson-syllables" style="grid-template-columns:' + sylCols + '">';
      html += '<div class="lesson-syl-head">' + gridHead(vdefs, hasExample) + '</div>';
      for (i = 0; i < entry.syllables.length; i++) {
        var sl = entry.syllables[i];
        html += '<div class="lesson-syllable">';
        html +=   '<span class="lesson-syl-text">' + esc(sl.text) + '</span>';
        html +=   trSpans(sl.tr, vdefs, true);
        if (hasExample) {
          var exText = sl.example ? esc(localized(sl.example)) : '';
          if (sl.note) exText += ' <span class="lesson-note">(' + esc(sl.note) + ')</span>';
          html += '<span class="lesson-syl-ex">' + exText + '</span>';
        }
        html += '</div>';
      }
      html += '</div>';
      html += '<div class="lesson-divider"></div>';
    }

    /* Words — one grid per row to keep the hover highlight */
    if (entry.words && entry.words.length) {
      var wordCols = gridColumns('minmax(4.5em,1.4fr)', vdefs.length, '1.2fr');
      html += '<div class="lesson-section-label">' + t('lessons.words') + '</div>';
      html += '<div class="lesson-words">';
      html += '<div class="lesson-word-head" style="grid-template-columns:' + wordCols + '">' +
              gridHead(vdefs, true) + '</div>';
      for (i = 0; i < entry.words.length; i++) {
        var w = entry.words[i];
        html += '<div class="lesson-word" style="grid-template-columns:' + wordCols + '">';
        html +=   '<span class="lesson-word-text">' + esc(w.text) + '</span>';
        html +=   trSpans(w.tr, vdefs, false);
        html +=   '<span class="lesson-word-tr">' + esc(localized(w.translation)) + '</span>';
        html += '</div>';
      }
      html += '</div>';
    }

    /* Phrases */
    if (entry.phrases && entry.phrases.length) {
      html += '<div class="lesson-divider"></div>';
      html += '<div class="lesson-section-label">' + t('lessons.phrases') + '</div>';
      html += '<div class="lesson-phrases">';
      for (i = 0; i < entry.phrases.length; i++) {
        var p = entry.phrases[i];
        html += '<div class="lesson-phrase">';
        html +=   '<div class="lesson-phrase-text">' + esc(p.text) + '</div>';
        html +=   '<div class="lesson-phrase-subs">' + trSpans(p.tr, vdefs, true) + '</div>';
        html +=   '<div class="lesson-phrase-tr">' + esc(localized(p.translation)) + '</div>';
        html += '</div>';
      }
      html += '</div>';
    }

    content.innerHTML = html;
  }

  /**
   * Renders the numbers panel for the active course (counting 1-10, 100, 1000).
   * Uses the same locale-visible transcription columns as the lessons widget.
   */
  function renderNumbers() {
    var body = document.getElementById('numbers-body');
    if (!body) return;
    if (!courseData || !courseData.numbers || !courseData.numbers.length) {
      body.innerHTML = '<div class="lesson-loading">' + t('lessons.notFound') + '</div>';
      return;
    }
    var vdefs = visibleTrans(courseData.transcriptions || []);
    var cols = 'minmax(2.6em,auto) minmax(3em,1fr)';
    for (var c = 0; c < vdefs.length; c++) cols += ' 1fr';
    cols += ' 1.2fr';

    var html = '<div class="num-grid" style="grid-template-columns:' + cols + '">';
    html += '<div class="num-head">#</div><div class="num-head"></div>';
    for (c = 0; c < vdefs.length; c++)
      html += '<div class="num-head">' + esc(localized(vdefs[c].def.label)) + '</div>';
    html += '<div class="num-head"></div>';
    for (var i = 0; i < courseData.numbers.length; i++) {
      var n = courseData.numbers[i];
      html += '<div class="num-val">' + esc(n.value) + '</div>';
      html += '<div class="num-text">' + esc(n.text) + '</div>';
      html += trSpans(n.tr, vdefs, false);
      html += '<div class="num-tr">' + esc(localized(n.translation)) + '</div>';
    }
    html += '</div>';
    body.innerHTML = html;
  }

  /**
   * Activates a course by id, persists the choice and renders its lesson.
   */
  function setCourse(courseId) {
    var data = ITW.Languages.get(courseId);
    if (!data) return;
    courseData = data;
    try { localStorage.setItem(COURSE_KEY, courseId); } catch (e) {}
    ITW.Config.apply({ lessons: { course: courseId } });
    lessonIndex = getLessonIndex(courseId, data.lessons.length);
    renderLesson(lessonIndex);
    renderNumbers();
    updateSettingsUI();
  }

  /**
   * Resolves the startup course: WE/config value → saved → first registered.
   */
  function pickCourse() {
    var ids = ITW.Languages.ids();
    if (!ids.length) return null;
    var cfgCourse = ITW.Config.get().lessons.course;
    if (cfgCourse && ITW.Languages.get(cfgCourse)) return cfgCourse;
    var saved = '';
    try { saved = localStorage.getItem(COURSE_KEY) || ''; } catch (e) {}
    if (saved && ITW.Languages.get(saved)) return saved;
    return ids[0];
  }

  /**
   * Populates the course selector in the settings panel with one button
   * per registered course (localized names).
   */
  function renderCourseOptions() {
    var box = document.getElementById('settings-course-opts');
    if (!box) return;
    var ids = ITW.Languages.ids();
    var html = '';
    for (var i = 0; i < ids.length; i++) {
      var data = ITW.Languages.get(ids[i]);
      html += '<button class="settings-opt" data-value="' + esc(ids[i]) + '">' +
              esc(localized(data.name)) + '</button>';
    }
    box.innerHTML = html;
    var btns = box.querySelectorAll('.settings-opt');
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener('click', (function (btn) {
        return function () { setCourse(btn.getAttribute('data-value')); };
      }(btns[j])));
    }
    if (courseData) highlightOpt('course', courseData.id);
  }

  /**
   * Initializes the lessons widget once all manifest datasets are loaded.
   */
  function initLessons() {
    var ids = ITW.Languages.ids();
    if (!ids.length) {
      var c = document.getElementById('lesson-content');
      if (c) c.innerHTML = '<div class="lesson-loading">' + t('lessons.notFound') + '</div>';
      if (window.console) console.warn('[lessons] no datasets registered');
      return;
    }

    renderCourseOptions();
    setCourse(pickCourse());

    var prevBtn = document.getElementById('lesson-prev');
    var nextBtn = document.getElementById('lesson-next');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      if (!courseData) return;
      var idx = ((lessonIndex - 1) + courseData.lessons.length) % courseData.lessons.length;
      saveLessonIndex(idx);
      renderLesson(idx);
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      if (!courseData) return;
      var idx = (lessonIndex + 1) % courseData.lessons.length;
      saveLessonIndex(idx);
      renderLesson(idx);
    });
  }

  /* =========================================================================
     9. LANGUAGE BAR
  ========================================================================= */

  /**
   * Switches the UI locale ('en' | 'ru' | 'auto') and re-renders all
   * locale-dependent widgets.
   */
  function setLocale(newLang) {
    try { localStorage.setItem(LANG_KEY, newLang); } catch (e) {}
    if (newLang === 'auto')      locale = detectLocale();
    else if (isUiLang(newLang))  locale = newLang;
    else                         locale = detectLocale();

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
    if (courseData) {
      renderLesson(lessonIndex);
      renderNumbers();
      renderCourseOptions();
    }
    renderAllApps();

    updateSettingsUI();
  }

  /**
   * Collapses the bottom menu into the bottom-left corner, or restores it to
   * the centre, and persists the state. Restorable from the Wallpaper Engine
   * "Show language bar" property.
   */
  function setMenuCollapsed(collapsed) {
    var bar = document.getElementById('lang-bar');
    if (bar) bar.classList.toggle('collapsed', collapsed);
    try { localStorage.setItem(LANGBAR_KEY, collapsed ? 'true' : 'false'); } catch (e) {}
  }

  /**
   * Applies the persisted collapsed state on startup.
   */
  function loadMenuCollapsed() {
    var collapsed = false;
    try { collapsed = localStorage.getItem(LANGBAR_KEY) === 'true'; } catch (e) {}
    setMenuCollapsed(collapsed);
  }

  /**
   * Wires the bottom menu: the close (✕) button collapses it into the corner,
   * the restore (☰) button brings it back to the centre.
   */
  function initLangBar() {
    var hideBtn = document.getElementById('langbar-hide');
    if (hideBtn) hideBtn.addEventListener('click', function () { setMenuCollapsed(true); });
    var restoreBtn = document.getElementById('langbar-restore');
    if (restoreBtn) restoreBtn.addEventListener('click', function () { setMenuCollapsed(false); });
  }

  /* =========================================================================
     10. WIDGET SYSTEM — positioning and persistence
  ========================================================================= */

  var WIDGET_POS_KEY  = 'itw_widget_pos';
  var WIDGET_SIZE_KEY = 'itw_widget_sizes';
  var WIDGET_BG_KEY   = 'itw_widget_bg';
  var widgetBgState   = {};          /* panel-id -> bool (true = bg visible) */
  var resizeState     = null;        /* { el, startMouseX, startMouseY, startW, startH } */

  /* DOM ids of all widgets */
  var WIDGET_IDS = ['panel-clock','panel-lessons','panel-weather','panel-notes','panel-hotkeys','panel-terminal','panel-apps','panel-numbers'];

  /**
   * Loads persisted widget positions and applies them to the DOM.
   */
  function loadWidgetPositions() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(WIDGET_POS_KEY) || '{}'); } catch (e) {}
    WIDGET_IDS.forEach(function (id) {
      var pos = saved[id];
      if (!pos) return;
      var el = document.getElementById(id);
      if (!el) return;
      /* Override the CSS default with explicit coordinates */
      el.style.left      = pos.x + 'px';
      el.style.top       = pos.y + 'px';
      el.style.right     = '';
      el.style.bottom    = '';
      el.style.transform = 'none';
    });
  }

  /**
   * Persists positions of widgets that have been moved.
   */
  function saveWidgetPositions() {
    var positions = {};
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el || !el.style.left) return; /* never moved — skip */
      positions[id] = {
        x: parseFloat(el.style.left),
        y: parseFloat(el.style.top)
      };
    });
    try { localStorage.setItem(WIDGET_POS_KEY, JSON.stringify(positions)); } catch (e) {}
  }

  /**
   * Resets positions and sizes: removes inline styles so CSS defaults apply.
   */
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

  /**
   * Loads persisted widget sizes and applies them.
   */
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

  /**
   * Persists the current pixel sizes of all widgets.
   */
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

  /**
   * Removes inline size overrides from all widgets.
   */
  function resetWidgetSizes() {
    WIDGET_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.style.width  = '';
      el.style.height = '';
    });
    try { localStorage.removeItem(WIDGET_SIZE_KEY); } catch (e) {}
  }

  /* ── Tri-state background per widget (0 solid · 1 semi · 2 none) ───────── */

  /* CSS class per background state; index = state value. */
  var BG_CLASS  = ['', 'panel--bg-semi', 'panel--bg-none'];
  /* Short label per state, used on the settings button. */
  var BG_LABELS = ['BG', '½', '○'];

  /**
   * Loads the per-widget background state from localStorage and applies it.
   * Legacy boolean values are migrated (false → none, true → solid).
   */
  function loadWidgetBg() {
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(WIDGET_BG_KEY) || '{}'); } catch (e) {}
    WIDGET_IDS.forEach(function (id) {
      var v = saved[id];
      if (v === false) v = 2;
      else if (v === true || v == null) v = 0;
      widgetBgState[id] = (v === 1 || v === 2) ? v : 0;
      applyWidgetBg(id);
    });
  }

  /**
   * Applies the current background state class to a widget.
   */
  function applyWidgetBg(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('panel--bg-semi', 'panel--bg-none');
    var cls = BG_CLASS[widgetBgState[id] || 0];
    if (cls) el.classList.add(cls);
  }

  /**
   * Persists the background state of every widget.
   */
  function saveWidgetBg() {
    var data = {};
    WIDGET_IDS.forEach(function (wid) { data[wid] = widgetBgState[wid] || 0; });
    try { localStorage.setItem(WIDGET_BG_KEY, JSON.stringify(data)); } catch (e) {}
  }

  /**
   * Cycles the background of one panel: solid → semi → none → solid.
   */
  function cycleWidgetBg(panelKey) {
    var id = VISIBILITY_MAP[panelKey];
    if (!id) return;
    widgetBgState[id] = ((widgetBgState[id] || 0) + 1) % 3;
    applyWidgetBg(id);
    saveWidgetBg();
    updateSettingsUI();
  }

  /* ── Resize helpers ─────────────────────────────────────────────────────── */

  /**
   * Begins a resize interaction from the corner handle.
   */
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

  /**
   * Applies mouse movement to the widget being resized (clamped).
   */
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

  /**
   * Finishes the resize interaction and persists sizes.
   */
  function onResizeEnd() {
    if (!resizeState) return;
    resizeState.el.classList.remove('resizing');
    document.body.classList.remove('is-resizing');
    saveWidgetSizes();
    resizeState = null;
  }

  /* =========================================================================
     11. DRAG & DROP — moving widgets in layout-edit mode
  ========================================================================= */

  var layoutEditMode = false;
  var dragState = null; /* { el, startMouseX, startMouseY, startElX, startElY } */

  /**
   * Toggles layout-edit mode on the body and the settings button.
   */
  function setLayoutEditMode(on) {
    layoutEditMode = on;
    document.body.classList.toggle('layout-edit', on);
    var btn = document.getElementById('settings-layout-btn');
    if (btn) btn.classList.toggle('active', on);
  }

  /**
   * Begins a drag interaction on a widget.
   */
  function startDrag(el, e) {
    var rect = el.getBoundingClientRect();
    /* Convert from CSS positioning to absolute coordinates */
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

  /**
   * Applies mouse movement to the widget being dragged (clamped to viewport).
   */
  function onDragMove(e) {
    if (!dragState) return;
    var dx   = e.clientX - dragState.startMouseX;
    var dy   = e.clientY - dragState.startMouseY;
    var newX = Math.max(0, Math.min(dragState.startElX + dx, window.innerWidth  - dragState.el.offsetWidth));
    var newY = Math.max(0, Math.min(dragState.startElY + dy, window.innerHeight - dragState.el.offsetHeight));
    dragState.el.style.left = newX + 'px';
    dragState.el.style.top  = newY + 'px';
  }

  /**
   * Finishes the drag interaction and persists positions.
   */
  function onDragEnd() {
    if (!dragState) return;
    dragState.el.classList.remove('dragging');
    document.body.classList.remove('is-dragging');
    saveWidgetPositions();
    dragState = null;
  }

  /**
   * Attaches the resize handle and drag/resize mouse handlers to one widget.
   * Reused for both the static widgets and dynamically duplicated instances.
   */
  function wireWidgetDragResize(el) {
    if (!el || el.getAttribute('data-drag-wired')) return;
    el.setAttribute('data-drag-wired', '1');

    /* Inject the resize handle into the panel */
    var handle = document.createElement('div');
    handle.className = 'resize-handle';
    el.appendChild(handle);

    /* Resize: mousedown on the corner handle */
    handle.addEventListener('mousedown', function (e) {
      if (!layoutEditMode) return;
      startResize(el, e);
    });

    /* Drag: mousedown on the panel body (skip handle and interactive elements) */
    el.addEventListener('mousedown', function (e) {
      if (!layoutEditMode) return;
      if (e.target.classList.contains('resize-handle')) return;
      var tag = e.target.tagName;
      if (tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'INPUT') return;
      startDrag(el, e);
    });
  }

  /**
   * Initializes drag + resize handlers for all widgets.
   */
  function initDragHandlers() {
    WIDGET_IDS.forEach(function (id) {
      wireWidgetDragResize(document.getElementById(id));
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
     12. SETTINGS PANEL
  ========================================================================= */

  /**
   * Opens the settings panel and its overlay.
   */
  function openSettings() {
    var panel   = document.getElementById('settings-panel');
    var overlay = document.getElementById('settings-overlay');
    if (!panel) return;
    updateSettingsUI();
    panel.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  /**
   * Closes the settings panel and its overlay.
   */
  function closeSettings() {
    var panel   = document.getElementById('settings-panel');
    var overlay = document.getElementById('settings-overlay');
    if (panel)   panel.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  /**
   * Refreshes every control in the settings panel to match current state.
   */
  function updateSettingsUI() {
    var cfg = ITW.Config.get();

    /* UI language */
    var savedLang = 'auto';
    try { savedLang = localStorage.getItem(LANG_KEY) || 'auto'; } catch (e) {}
    highlightOpt('lang', savedLang);

    /* Theme */
    var savedTheme = 'vscode';
    try { savedTheme = localStorage.getItem('itw_theme') || cfg.general.theme; } catch (e) {}
    highlightOpt('theme', savedTheme);

    /* Clock format */
    highlightOpt('format24h', String(cfg.general.format24h));

    /* Active course */
    if (courseData) highlightOpt('course', courseData.id);

    /* Widget visibility + background state */
    var vis = cfg.visibility;
    var panels = ['clock','weather','notes','hotkeys','terminal','lessons','apps','numbers'];
    panels.forEach(function (key) {
      var btn = document.getElementById('toggle-' + key);
      if (btn) {
        var isOn = vis[key] !== false;
        btn.classList.toggle('active', isOn);
        btn.textContent = isOn ? '●' : '○';
      }
      var bgBtn = document.getElementById('bg-' + key);
      if (bgBtn) {
        var st = widgetBgState[VISIBILITY_MAP[key]] || 0;
        bgBtn.textContent = BG_LABELS[st];
        bgBtn.classList.toggle('active', st !== 0);
      }
    });

    /* Layout edit mode button */
    var layoutBtn = document.getElementById('settings-layout-btn');
    if (layoutBtn) layoutBtn.classList.toggle('active', layoutEditMode);

    /* Weather city */
    var cityInput = document.getElementById('settings-city-input');
    if (cityInput && document.activeElement !== cityInput) {
      cityInput.value = ITW.Config.get().weather.city || '';
    }

    /* Version */
    var verEl = document.getElementById('settings-version');
    if (verEl) verEl.textContent = 'v' + APP_VERSION;
  }

  /* Author's public Steam profile, opened from the version label. */
  var STEAM_URL = 'https://steamcommunity.com/id/southbone/';

  /**
   * Opens the author's Steam profile in the external browser.
   */
  function openSteamProfile() {
    try { window.open(STEAM_URL, '_blank'); } catch (e) {}
  }

  /**
   * Highlights the active option inside a .settings-opts group.
   */
  function highlightOpt(setting, value) {
    var container = document.querySelector('.settings-opts[data-setting="' + setting + '"]');
    if (!container) return;
    var opts = container.querySelectorAll('.settings-opt');
    for (var i = 0; i < opts.length; i++)
      opts[i].classList.toggle('active', opts[i].getAttribute('data-value') === value);
  }

  /**
   * Applies a settings change triggered from the panel UI.
   */
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

  /**
   * Clears every persisted key (including per-course lesson state)
   * and reloads the page.
   */
  function resetAllSettings() {
    var keys = [
      LANG_KEY, NOTES_KEY, COURSE_KEY,
      VIS_KEY, WIDGET_POS_KEY, WIDGET_SIZE_KEY, WIDGET_BG_KEY,
      'itw_theme', 'itw_format24h', WEATHER_CITY_KEY, LANGBAR_KEY,
      PANEL_COLOR_KEY, TEXT_COLOR_KEY, APPS_KEY, APPS_SEED_KEY, INSTANCES_KEY, TITLES_KEY
    ];
    var ids = ITW.Languages ? ITW.Languages.ids() : [];
    ids.forEach(function (id) {
      keys.push(lessonIdxKey(id));
      keys.push(lessonDateKey(id));
    });
    keys.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
    location.reload();
  }

  /**
   * Initializes the whole settings panel: triggers, options, toggles,
   * appearance buttons, city input and action buttons.
   */
  function initSettingsPanel() {
    var trigger  = document.getElementById('settings-trigger');
    var closeBtn = document.getElementById('settings-close');
    var overlay  = document.getElementById('settings-overlay');

    if (trigger)  trigger.addEventListener('click', openSettings);
    if (closeBtn) closeBtn.addEventListener('click', closeSettings);
    if (overlay)  overlay.addEventListener('click', closeSettings);

    /* Option buttons (language, theme, clock format) — static groups only;
       course buttons are created dynamically in renderCourseOptions() */
    var opts = document.querySelectorAll('.settings-opts .settings-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', (function (opt) {
        return function () {
          var setting = opt.parentElement.getAttribute('data-setting');
          if (setting === 'course') return; /* handled in renderCourseOptions */
          var value = opt.getAttribute('data-value');
          applySettingChange(setting, value);
        };
      }(opts[i])));
    }

    /* Widget visibility toggles */
    var toggleRows = document.querySelectorAll('.settings-toggle-row');
    for (var j = 0; j < toggleRows.length; j++) {
      toggleRows[j].addEventListener('click', (function (row) {
        return function (e) {
          /* Skip clicks on the button itself — handled below */
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

    /* Action buttons */
    var layoutBtn = document.getElementById('settings-layout-btn');
    if (layoutBtn) layoutBtn.addEventListener('click', function () {
      setLayoutEditMode(!layoutEditMode);
      closeSettings(); /* auto-close so the user can immediately interact */
    });

    /* Widget background toggle buttons */
    var bgBtns = document.querySelectorAll('.settings-bg-btn');
    for (var bi = 0; bi < bgBtns.length; bi++) {
      bgBtns[bi].addEventListener('click', (function (btn) {
        return function () {
          var panel = btn.getAttribute('data-panel');
          if (panel) cycleWidgetBg(panel);
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

    /* Weather city input */
    var cityInput = document.getElementById('settings-city-input');
    if (cityInput) {
      cityInput.value = ITW.Config.get().weather.city || '';

      /**
       * Applies the city from the input field and refreshes the weather.
       */
      function applyCity() {
        var city = cityInput.value.trim();
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

    initColorControls();

    /* Version label → author's Steam profile */
    var verEl = document.getElementById('settings-version');
    if (verEl) {
      verEl.classList.add('clickable');
      verEl.title = STEAM_URL;
      verEl.addEventListener('click', openSteamProfile);
    }
  }

  /**
   * Wires one color picker: a native color swatch, a hex text field and a
   * reset button, all kept in sync. apply(hex) sets the CSS override, an empty
   * string restores the theme default; the chosen value is persisted in `key`.
   */
  function wireColorControl(swatchId, hexId, resetId, key, apply) {
    var swatch = document.getElementById(swatchId);
    var hexEl  = document.getElementById(hexId);
    var reset  = document.getElementById(resetId);
    if (!swatch || !hexEl) return;

    var saved = '';
    try { saved = localStorage.getItem(key) || ''; } catch (e) {}
    if (saved) { swatch.value = saved; hexEl.value = saved; }

    /* Stores and applies a hex value (empty restores the default). */
    function commit(hex) {
      apply(hex);
      try {
        if (hex) localStorage.setItem(key, hex);
        else     localStorage.removeItem(key);
      } catch (e) {}
    }

    swatch.addEventListener('input', function () {
      hexEl.value = swatch.value;
      commit(swatch.value);
    });
    hexEl.addEventListener('change', function () {
      var v = hexEl.value.trim();
      if (v && v.charAt(0) !== '#') v = '#' + v;
      if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v)) {
        hexEl.value = v; swatch.value = v.length === 4
          ? '#' + v.charAt(1) + v.charAt(1) + v.charAt(2) + v.charAt(2) + v.charAt(3) + v.charAt(3)
          : v;
        commit(v);
      } else if (v === '') {
        commit('');
      }
    });
    if (reset) reset.addEventListener('click', function () {
      hexEl.value = '';
      commit('');
    });
  }

  /**
   * Initializes both color pickers (module background + text).
   */
  function initColorControls() {
    wireColorControl('color-panel', 'color-panel-hex', 'color-panel-reset',
                     PANEL_COLOR_KEY, applyPanelColor);
    wireColorControl('color-text', 'color-text-hex', 'color-text-reset',
                     TEXT_COLOR_KEY, applyTextColor);
  }

  /**
   * Loads the persisted weather city into the config and the input field.
   */
  function loadWeatherCity() {
    var city = '';
    try { city = localStorage.getItem(WEATHER_CITY_KEY) || ''; } catch (e) {}
    if (city) {
      ITW.Config.apply({ weather: { city: city } });
    }
    var input = document.getElementById('settings-city-input');
    if (input) input.value = ITW.Config.get().weather.city || '';
  }

  /**
   * Persists the weather city.
   */
  function saveWeatherCity(city) {
    try { localStorage.setItem(WEATHER_CITY_KEY, city); } catch (e) {}
  }

  /**
   * Loads persisted theme and clock format into the config.
   */
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
     13. RAF LOOP — particles + audio
  ========================================================================= */

  var lastRafTime = 0;

  /**
   * Per-frame update for audio reactivity and particles.
   */
  function rafLoop(now) {
    var dt = Math.min((now - lastRafTime) / 1000, 0.1);
    lastRafTime = now;
    ITW.Audio.update();
    ITW.Particles.update(dt);
    requestAnimationFrame(rafLoop);
  }

  /* =========================================================================
     14. INITIALIZATION
  ========================================================================= */

  /**
   * Boots the dashboard: persisted settings, locale, widgets, modules.
   */
  function boot() {
    /* Apply persisted settings before anything else */
    loadPersistedSettings();

    var cfg = ITW.Config.get();

    /* Localization */
    applyLocale();

    /* Initial visuals from the config */
    applyAccent(cfg.general.accent);
    applyTheme(cfg.general.theme);

    /* Widget visibility */
    loadVisibility();

    /* Widget positions from localStorage */
    loadWidgetPositions();

    /* Widget sizes from localStorage */
    loadWidgetSizes();

    /* Widget background state */
    loadWidgetBg();

    /* Custom module / text colors */
    loadCustomColors();

    /* Drag & Drop */
    initDragHandlers();

    /* Audio reactivity */
    ITW.Audio.init();

    /* Particles */
    var pCanvas = document.getElementById('particles-canvas');
    if (pCanvas) ITW.Particles.init(pCanvas);

    /* Weather */
    loadWeatherCity();
    WeatherCanvas.init();
    fetchWeather();
    setInterval(fetchWeather, 10 * 60 * 1000);

    /* Notes */
    initNotes();

    /* Quick-access apps module */
    initApps();

    /* Panel mouse interactions (wheel scroll + notes focus) */
    initPanelInteractions();

    /* Hotkeys */
    var hkEl = document.getElementById('hotkeys-body');
    if (hkEl) {
      ITW.Hotkeys.init(hkEl, TRANSLATIONS[locale].hotkeyGroups);
      ITW.Hotkeys.start();
    }

    /* Terminal */
    var termEl = document.getElementById('terminal-body');
    if (termEl) {
      ITW.Terminal.init(termEl, TRANSLATIONS[locale].terminalGroups);
      ITW.Terminal.start();
    }

    /* Language lessons — datasets load asynchronously via script injection */
    ITW.Languages.load(initLessons);

    /* Editor clock */
    initEditor();

    /* Language bar */
    initLangBar();
    loadMenuCollapsed();

    /* Settings panel */
    initSettingsPanel();

    /* Duplicated module instances, then re-apply persisted geometry/bg so the
       restored clones pick up their saved positions, sizes and backgrounds. */
    loadInstances();
    loadWidgetPositions();
    loadWidgetSizes();
    loadWidgetBg();

    /* rAF loop */
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
