/**
 * components/audio.js
 * Audio-reactive level provider.
 *
 * Uses the real Wallpaper Engine hook window.wallpaperRegisterAudioListener,
 * which delivers a 128-float array each frame (0..63 left, 64..127 right,
 * values roughly 0..1). We reduce it to a single smoothed level in [0,1] and
 * publish it both as ITW.Audio.level and as the CSS variable --audio on :root.
 *
 * Other modules read the level instead of registering their own listener.
 * Degrades silently to 0 when not running inside Wallpaper Engine.
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  var level = 0;            /* сглаженное значение, публикуемое наружу */
  var target = 0;           /* последнее сырое значение от WE */
  var registered = false;
  var lastWritten = -1;     /* последнее записанное в CSS значение (пропуск лишних записей) */

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function onAudio(arr) {
    var cfg = ITW.Config.get().audio;
    if (!cfg.enabled) { target = 0; return; }

    var len = arr.length || 0;
    if (!len) { target = 0; return; }

    // Emphasize lower/mid bands; they carry musical energy without spiking.
    var sum = 0, count = 0;
    var bands = Math.min(48, len);
    for (var i = 0; i < bands; i++) {
      sum += arr[i];
      count++;
    }
    var avg = count ? sum / count : 0;
    target = Math.max(0, Math.min(1, avg * cfg.sensitivity));
  }

  ITW.Audio = {
    get level() { return level; },

    init: function () {
      if (registered) return;
      registered = true;
      if (typeof root.wallpaperRegisterAudioListener === 'function') {
        root.wallpaperRegisterAudioListener(onAudio);
      }
    },

    /** Вызывается каждый кадр из rAF-цикла: сглаживание + запись CSS-переменной. */
    update: function () {
      /* Быстрая атака, медленный спад — музыкальное ощущение */
      var t = target > level ? 0.35 : 0.08;
      level = lerp(level, target, t);
      if (level < 0.0005) level = 0;

      /* Пишем CSS-переменную только при реальном изменении —
         style.setProperty принудительно запускает style recalc каждый кадр */
      var rounded = parseFloat(level.toFixed(3));
      if (rounded !== lastWritten) {
        lastWritten = rounded;
        var rootEl = document.documentElement;
        if (rootEl) rootEl.style.setProperty('--audio', rounded);
      }
    }
  };
})(window);
