/**
 * components/particles.js
 * Very subtle floating "code fragments" on a single full-screen canvas.
 *
 * Design constraints:
 *   - Low CPU: capped particle count scaled by viewport + density setting,
 *     no per-frame allocations, integer-friendly math.
 *   - Elegant: tiny low-opacity glyphs drifting upward, gentle parallax.
 *   - Audio-reactive: a small brightness/size nudge from ITW.Audio.level.
 *
 * Driven by the main loop: init(canvas), then update(dt) each frame.
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  var GLYPHS = '01{}();=>=<>/*+-_$.[]|&'.split('');

  var canvas, ctx, w = 0, h = 0, dpr = 1;
  var particles = [];
  var enabled = true;
  var accent = '86,212,221';

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function targetCount() {
    var cfg = ITW.Config.get().particles;
    var area = (w * h) / (dpr * dpr);
    // ~1 particle per 26k CSS px², clamped, scaled by density.
    var base = Math.round(area / 26000);
    var n = Math.round(base * cfg.density);
    return Math.max(12, Math.min(140, n));
  }

  function makeParticle() {
    return {
      x: rand(0, w),
      y: rand(0, h),
      vy: rand(6, 22) * dpr,          // px/s upward drift
      vx: rand(-4, 4) * dpr,
      size: rand(9, 16) * dpr,
      alpha: rand(0.04, 0.16),
      glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
      twinkle: rand(0, Math.PI * 2)
    };
  }

  function rebuild() {
    var n = targetCount();
    particles.length = 0;
    for (var i = 0; i < n; i++) particles.push(makeParticle());
  }

  function resize() {
    dpr = Math.min(root.devicePixelRatio || 1, 1.5); // cap DPR for perf at 4K
    w = canvas.clientWidth * dpr;
    h = canvas.clientHeight * dpr;
    canvas.width = w;
    canvas.height = h;
    rebuild();
  }

  ITW.Particles = {
    init: function (canvasEl) {
      canvas = canvasEl;
      ctx = canvas.getContext('2d');
      resize();
      root.addEventListener('resize', resize);
    },

    setAccent: function (rgb) {
      accent = rgb;
    },

    setEnabled: function (on) {
      enabled = on;
      if (!on && ctx) ctx.clearRect(0, 0, w, h);
    },

    update: function (dt) {
      if (!enabled || !ctx) return;

      var audio = ITW.Audio ? ITW.Audio.level : 0;
      ctx.clearRect(0, 0, w, h);
      ctx.font = '500 14px "JetBrains Mono", monospace';
      ctx.textBaseline = 'middle';

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.y -= p.vy * dt;
        p.x += p.vx * dt;
        p.twinkle += dt * 1.5;

        if (p.y < -20) { p.y = h + 20; p.x = rand(0, w); }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        var tw = 0.5 + 0.5 * Math.sin(p.twinkle);
        var a = p.alpha * (0.6 + 0.4 * tw) + audio * 0.08;
        var size = p.size + audio * 2 * dpr;

        ctx.font = '500 ' + size.toFixed(1) + 'px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(' + accent + ',' + a.toFixed(3) + ')';
        ctx.fillText(p.glyph, p.x, p.y);
      }
    }
  };
})(window);
