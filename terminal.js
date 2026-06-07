/**
 * components/terminal.js
 * Шпаргалка по командам терминала (bash / PowerShell).
 * Периодически подсвечивает одну строку (ротация).
 *
 * init(containerEl, extGroups) — принимает внешние группы из локализации.
 * Если extGroups не передан — используются встроенные GROUPS на английском.
 *
 * Формат группы:
 *   { cat: 'NAVIGATION', items: [{ cmd: 'cd', desc: 'change directory' }] }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  var GROUPS = [
    { cat: 'NAVIGATION', items: [
      { cmd: 'cd <path>',    desc: 'change directory'       },
      { cmd: 'cd ..',        desc: 'parent directory'       },
      { cmd: 'cd ~',         desc: 'home directory'         },
      { cmd: 'pwd',          desc: 'print working dir'      },
      { cmd: 'ls',           desc: 'list files (dir on Win)' },
      { cmd: 'ls -la',       desc: 'detailed list + hidden' }
    ]},
    { cat: 'FILES', items: [
      { cmd: 'mkdir <dir>',  desc: 'create directory'       },
      { cmd: 'touch <file>', desc: 'create empty file'      },
      { cmd: 'cp <a> <b>',   desc: 'copy file / folder'     },
      { cmd: 'mv <a> <b>',   desc: 'move / rename'          },
      { cmd: 'rm <file>',    desc: 'delete file'            },
      { cmd: 'rm -rf <dir>', desc: 'delete folder recursive' }
    ]},
    { cat: 'VIEW & SEARCH', items: [
      { cmd: 'cat <file>',   desc: 'print file contents'    },
      { cmd: 'head <file>',  desc: 'first 10 lines'         },
      { cmd: 'tail -f <f>',  desc: 'follow log output'      },
      { cmd: 'grep <pat>',   desc: 'search in text'         },
      { cmd: 'find . -name', desc: 'find files by name'     },
      { cmd: 'which <cmd>',  desc: 'locate executable'      }
    ]},
    { cat: 'SYSTEM', items: [
      { cmd: 'clear',        desc: 'clear screen (cls)'     },
      { cmd: 'history',      desc: 'command history'        },
      { cmd: 'echo <text>',  desc: 'print text'             },
      { cmd: 'man <cmd>',    desc: 'manual / help'          },
      { cmd: 'exit',         desc: 'close session'          },
      { cmd: 'sudo <cmd>',   desc: 'run as admin'           }
    ]}
  ];

  var rows    = [];
  var timer   = null;
  var idx     = 0;
  var running = false;

  function render(containerEl, groups) {
    var frag = document.createDocumentFragment();
    rows = [];

    for (var g = 0; g < groups.length; g++) {
      var group = groups[g];
      var groupEl = document.createElement('div');
      groupEl.className = 'tm-group';

      var titleEl = document.createElement('div');
      titleEl.className   = 'tm-title';
      titleEl.textContent = '// ' + (group.cat || group.title || '');
      groupEl.appendChild(titleEl);

      var items = group.items || [];
      for (var i = 0; i < items.length; i++) {
        var it   = items[i];
        var cmd  = Array.isArray(it) ? it[0] : it.cmd;
        var desc = Array.isArray(it) ? it[1] : it.desc;

        var row = document.createElement('div');
        row.className = 'tm-row';

        var cmdEl  = document.createElement('span');
        cmdEl.className   = 'tm-cmd';
        cmdEl.textContent = cmd;

        var descEl = document.createElement('span');
        descEl.className   = 'tm-desc';
        descEl.textContent = desc;

        row.appendChild(cmdEl);
        row.appendChild(descEl);
        groupEl.appendChild(row);
        rows.push(row);
      }

      frag.appendChild(groupEl);
    }

    containerEl.innerHTML = '';
    containerEl.appendChild(frag);
  }

  function cycle() {
    if (!running || !rows.length) return;
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove('tm-hot');
    rows[idx % rows.length].classList.add('tm-hot');
    idx++;
    timer = setTimeout(cycle, 2800);
  }

  ITW.Terminal = {
    init: function (containerEl, extGroups) {
      render(containerEl, extGroups || GROUPS);
    },
    start: function () {
      if (running) return;
      running = true;
      cycle();
    },
    stop: function () {
      running = false;
      if (timer) { clearTimeout(timer); timer = null; }
      for (var i = 0; i < rows.length; i++) rows[i].classList.remove('tm-hot');
    },
    setEnabled: function (on) {
      var panelEl = document.getElementById('panel-terminal');
      if (panelEl) panelEl.style.display = on ? '' : 'none';
      if (on) this.start(); else this.stop();
    }
  };
})(window);
