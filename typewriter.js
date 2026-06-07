/**
 * components/typewriter.js
 * Центральный JS-редактор дашборда: модель, рендерер и машинопись-интро.
 *
 * Архитектура трёх слоёв:
 *   МОДЕЛЬ    — buildModel() возвращает массив строк с токенами
 *   РЕНДЕРЕР  — createRenderer(gutterEl, codeEl) — низкоуровневый DOM-построитель
 *   API       — ITW.Editor (мгновенный рендер + обновление значений)
 *               ITW.Typewriter (символ-за-символом интро)
 *
 * Оба слоя используют одну и ту же модель, поэтому DOM идентичен
 * независимо от того, был ли запущен typewriter-интро.
 *
 * Отображаемый файл: ~/dev/clock.js
 * Живые значения обновляются через ITW.Editor.update() каждую секунду.
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  /* =========================================================================
     Вспомогательные функции создания токенов
  ========================================================================= */

  /* Ключевое слово: const, let, var */
  function kw(t)  { return { t: t, c: 'tk-kw' };      }
  /* Имя переменной */
  function vr(t)  { return { t: t, c: 'tk-var' };     }
  /* Имя свойства объекта */
  function pr(t)  { return { t: t, c: 'tk-prop' };    }
  /* Пунктуация: { } ; : , */
  function pu(t)  { return { t: t, c: 'tk-punct' };   }
  /* Комментарий */
  function cm(t)  { return { t: t, c: 'tk-comment' }; }

  /* Числовое живое значение с DOM-id */
  function numVal(id, init) {
    return { t: (init || '0'), c: 'tk-num', id: id };
  }

  /* Строковое живое значение с DOM-id (без кавычек — они рядом отдельными токенами) */
  function strVal(id, init) {
    return { t: (init || '—'), c: 'tk-str', id: id };
  }

  /* Пустая строка (добавляет номер строки без контента) */
  var BLANK = [];

  /* =========================================================================
     МОДЕЛЬ: ~/dev/clock.js
     Структура: однофайловый JS с одним const-объектом clock.
     Значения (id="v-*") — живые, обновляются через ITW.Editor.update().
  ========================================================================= */
  function buildModel() {
    return [
      /* Строка 1: комментарий-заголовок файла */
      [cm('// ~/dev/clock.js')],

      /* Строка 2: пустая */
      BLANK,

      /* Строка 3: открытие объекта */
      [kw('const '), vr('clock'), pu(' = '), pu('{')],

      /* Строки 4–9: свойства с выравниванием двоеточий */
      [pu('  '), pr('hour'),   pu('  : '), numVal('v-h',  '00'), pu(',')],
      [pu('  '), pr('minute'), pu(': '),   numVal('v-m',  '00'), pu(',')],
      [pu('  '), pr('second'), pu(': '),   numVal('v-s',  '00'), pu(',')],
      [pu('  '), pr('day'),    pu('   : '), numVal('v-d',   '1'), pu(',')],
      [pu('  '), pr('month'),  pu(' : '),
        pu('"'), strVal('v-mo', 'January'), pu('"'), pu(',')],
      [pu('  '), pr('year'),   pu('  : '), numVal('v-y', '2026')],

      /* Строка 10: закрытие объекта (каретка добавляется через appendCaret) */
      [pu('};')]
    ];
  }

  /* =========================================================================
     Идентификаторы живых значений.
     Ключ совпадает с суффиксом DOM-id (v-KEY): update({ h: '23', ... })
  ========================================================================= */
  var VALUE_IDS = ['h', 'm', 's', 'd', 'mo', 'y'];

  /* =========================================================================
     НИЗКОУРОВНЕВЫЙ РЕНДЕРЕР
     Получает ссылки на гаттер и код, строит DOM построчно.
     Используется и Editor.renderInstant(), и Typewriter.run().
  ========================================================================= */
  function createRenderer(gutterEl, codeEl) {
    gutterEl.innerHTML = '';
    codeEl.innerHTML   = '';

    var lineNo      = 0;
    var currentLine = null;
    var currentSpan = null;

    return {
      /* Начать новую строку: добавить номер в гаттер, строку в код */
      newline: function () {
        lineNo++;

        var g = document.createElement('div');
        g.className   = 'gln';
        g.textContent = lineNo;
        gutterEl.appendChild(g);

        currentLine = document.createElement('div');
        currentLine.className = 'cline';
        codeEl.appendChild(currentLine);
        currentSpan = null;
      },

      /* Начать новый span с CSS-классом и опциональным DOM-id */
      span: function (cls, id) {
        currentSpan = document.createElement('span');
        if (cls) currentSpan.className = cls;
        if (id)  currentSpan.id        = id;
        (currentLine || codeEl).appendChild(currentSpan);
      },

      /* Добавить текст в текущий span */
      text: function (s) {
        if (!currentSpan) this.span(null, null);
        currentSpan.textContent += s;
      },

      /* Вернуть текущую строку (нужно для appendCaret) */
      lastLine: function () { return currentLine; }
    };
  }

  /* Добавить мигающую каретку в конец последней строки */
  function appendCaret(renderer) {
    var line = renderer.lastLine();
    if (!line) return;
    var caret       = document.createElement('span');
    caret.id        = 'caret';
    caret.className = 'caret';
    line.appendChild(caret);
  }

  /* =========================================================================
     ITW.Editor — публичный API редактора
  ========================================================================= */

  var gutterEl    = null;
  var codeEl      = null;
  var lastRenderer = null;

  ITW.Editor = {
    /**
     * Инициализировать редактор: запомнить DOM-узлы.
     * Должен вызываться до renderInstant() или Typewriter.run().
     */
    init: function (gutterElement, codeElement) {
      gutterEl = gutterElement;
      codeEl   = codeElement;
    },

    /**
     * Построить весь DOM мгновенно (без интро-эффекта).
     * Используется когда modTypewriter = false.
     */
    renderInstant: function () {
      var model = buildModel();
      var r     = createRenderer(gutterEl, codeEl);
      model.forEach(function (line) {
        r.newline();
        line.forEach(function (tok) {
          r.span(tok.c, tok.id);
          r.text(tok.t);
        });
      });
      appendCaret(r);
      lastRenderer = r;
    },

    /**
     * Обновить живые значения.
     * data: { h, m, s, d, mo, y } — строки для подстановки.
     * Обновляет только изменившиеся значения + запускает flash-анимацию.
     */
    update: function (data) {
      for (var i = 0; i < VALUE_IDS.length; i++) {
        var key = VALUE_IDS[i];
        if (data[key] == null) continue;
        var el = document.getElementById('v-' + key);
        if (!el) continue;
        /* Перерисовываем только при реальном изменении */
        if (el.textContent !== String(data[key])) {
          el.textContent = String(data[key]);
          /* Flash-анимация — кратковременная вспышка при изменении */
          el.classList.remove('flash');
          void el.offsetWidth; /* принудительный reflow для перезапуска */
          el.classList.add('flash');
        }
      }
    },

    /* Внутренние ссылки для Typewriter */
    _buildModel:    buildModel,
    _createRenderer: createRenderer,
    _appendCaret:   appendCaret,
    _refs: function () {
      return {
        gutterEl: gutterEl,
        codeEl:   codeEl,
        set: function (r) { lastRenderer = r; }
      };
    }
  };

  /* =========================================================================
     ITW.Typewriter — символ-за-символом печать файла при старте
  ========================================================================= */

  ITW.Typewriter = {
    /**
     * Напечатать файл посимвольно, затем вызвать onComplete().
     * charsPerTick + tickDelay определяют скорость (~3-4 секунды для модели).
     */
    run: function (onComplete) {
      var refs = ITW.Editor._refs();
      var r    = ITW.Editor._createRenderer(refs.gutterEl, refs.codeEl);
      refs.set(r);

      /* Преобразуем модель в линейную очередь операций */
      var model = ITW.Editor._buildModel();
      var ops   = [];
      model.forEach(function (line) {
        ops.push({ k: 'nl' });
        line.forEach(function (tok) {
          ops.push({ k: 'span', c: tok.c, id: tok.id });
          /* Каждый символ токена — отдельная операция */
          for (var i = 0; i < tok.t.length; i++) {
            ops.push({ k: 'ch', ch: tok.t[i] });
          }
        });
      });

      var i           = 0;
      var charsPerTick = 3;  /* символов за один тик */
      var tickDelay    = 14; /* мс между тиками */

      function step() {
        var budget = charsPerTick;
        while (i < ops.length) {
          var op = ops[i++];
          if (op.k === 'nl')   { r.newline();              continue; }
          if (op.k === 'span') { r.span(op.c, op.id);      continue; }
          if (op.k === 'ch')   {
            r.text(op.ch);
            if (--budget <= 0) break;
          }
        }
        if (i < ops.length) {
          setTimeout(step, tickDelay);
        } else {
          /* Печать завершена: добавляем каретку и вызываем callback */
          ITW.Editor._appendCaret(r);
          if (typeof onComplete === 'function') onComplete();
        }
      }

      step();
    }
  };

})(window);
