/**
 * components/hotkeys.js
 * Рендерит сгруппированную шпаргалку по горячим клавишам.
 * Периодически подсвечивает одну строку (ротация).
 *
 * init(containerEl, extGroups) — принимает внешние группы из системы локализации.
 * Если extGroups не передан — используются встроенные GROUPS на английском.
 *
 * Формат группы (оба варианта поддерживаются):
 *   { cat: 'SYSTEM', items: [{ key: 'Win+X', desc: 'Power Menu' }] }
 *   { title: 'system', items: [['Win+X', 'Power Menu']] }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  /* Встроенные группы (используются когда внешние не переданы) */
  var GROUPS = [
    { cat: 'WINDOWS', items: [
      { key: 'Win+Shift+S', desc: 'screenshot'  },
      { key: 'Win+V',       desc: 'clipboard'   },
      { key: 'Win+X',       desc: 'power menu'  },
      { key: 'Win+E',       desc: 'explorer'    }
    ]},
    { cat: 'CURSOR', items: [
      { key: 'Ctrl+L', desc: 'chat'        },
      { key: 'Ctrl+K', desc: 'inline edit' },
      { key: 'Ctrl+I', desc: 'composer'    }
    ]},
    { cat: 'GIT', items: [
      { key: 'git status', desc: 'state'   },
      { key: 'git pull',   desc: 'sync'    },
      { key: 'git push',   desc: 'publish' }
    ]}
  ];

  var rows    = [];   /* все строки для ротации подсветки */
  var timer   = null;
  var idx     = 0;
  var running = false;

  /* -------------------------------------------------------------------------
     Отрисовка групп в контейнер
  ------------------------------------------------------------------------- */
  function render(containerEl, groups) {
    var frag = document.createDocumentFragment();
    rows = [];

    for (var g = 0; g < groups.length; g++) {
      var group = groups[g];

      /* Контейнер группы */
      var groupEl = document.createElement('div');
      groupEl.className = 'hk-group';

      /* Заголовок группы */
      var titleEl = document.createElement('div');
      titleEl.className   = 'hk-title';
      titleEl.textContent = '// ' + (group.cat || group.title || '');
      groupEl.appendChild(titleEl);

      /* Строки клавиш */
      var items = group.items || [];
      for (var i = 0; i < items.length; i++) {
        /* Поддерживаем оба формата: объект { key, desc } и массив ['key', 'desc'] */
        var it   = items[i];
        var key  = Array.isArray(it) ? it[0] : it.key;
        var desc = Array.isArray(it) ? it[1] : it.desc;

        var row = document.createElement('div');
        row.className = 'hk-row';

        var keyEl  = document.createElement('span');
        keyEl.className   = 'hk-key';
        keyEl.textContent = key;

        var descEl = document.createElement('span');
        descEl.className   = 'hk-desc';
        descEl.textContent = desc;

        row.appendChild(keyEl);
        row.appendChild(descEl);
        groupEl.appendChild(row);
        rows.push(row);
      }

      frag.appendChild(groupEl);
    }

    containerEl.innerHTML = '';
    containerEl.appendChild(frag);
  }

  /* -------------------------------------------------------------------------
     Цикл ротации подсветки строк
  ------------------------------------------------------------------------- */
  function cycle() {
    if (!running || !rows.length) return;
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove('hk-hot');
    rows[idx % rows.length].classList.add('hk-hot');
    idx++;
    timer = setTimeout(cycle, 2600);
  }

  /* =========================================================================
     ПУБЛИЧНЫЙ API
  ========================================================================= */
  ITW.Hotkeys = {

    /**
     * Инициализировать компонент.
     * @param {HTMLElement} containerEl — контейнер для рендера
     * @param {Array}       [extGroups] — локализованные группы; если не переданы, используется GROUPS
     */
    init: function (containerEl, extGroups) {
      var groups = extGroups || GROUPS;
      render(containerEl, groups);
    },

    /* Запустить ротацию подсветки */
    start: function () {
      if (running) return;
      running = true;
      cycle();
    },

    /* Остановить ротацию подсветки */
    stop: function () {
      running = false;
      if (timer) { clearTimeout(timer); timer = null; }
      for (var i = 0; i < rows.length; i++) rows[i].classList.remove('hk-hot');
    }
  };

})(window);
