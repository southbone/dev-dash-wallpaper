/**
 * services/system.js
 * "System monitor".
 *
 * HARD REALITY: a browser/CEF context inside Wallpaper Engine cannot read host
 * CPU / RAM / GPU / network counters. There is no API for it. These values are
 * therefore SIMULATED with a bounded random walk so the panel looks alive and
 * plausible without lying about precision.
 *
 * The only genuinely real metric is FPS, which is fed in from the main rAF loop
 * via ITW.System.reportFps(fps).
 *
 * Public shape:
 *   { cpu: "17%", ram: "8.4GB", gpu: "23%", fps: "60", net: "1.2MB/s" }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  // Internal state for the random walk.
  var state = {
    cpu: 14,        // %
    gpu: 20,        // %
    ramUsed: 8.2,   // GB
    netUp: 0.4,     // MB/s
    netDown: 1.1,   // MB/s
    fps: 60
  };

  // Total RAM hint, if the browser exposes it; else assume 16 GB.
  var ramTotal = (root.navigator && navigator.deviceMemory) ? navigator.deviceMemory : 16;
  if (ramTotal < 8) ramTotal = 16; // deviceMemory caps low; keep it sane for display

  function walk(value, min, max, step) {
    value += (Math.random() - 0.5) * step;
    if (value < min) value = min;
    if (value > max) value = max;
    return value;
  }

  function tick() {
    state.cpu = walk(state.cpu, 3, 92, 6);
    state.gpu = walk(state.gpu, 2, 95, 7);
    state.ramUsed = walk(state.ramUsed, 4.5, ramTotal - 1, 0.25);
    state.netDown = walk(state.netDown, 0.05, 12, 1.4);
    state.netUp = walk(state.netUp, 0.02, 4, 0.5);
  }

  ITW.System = {
    /** Real FPS from the render loop. */
    reportFps: function (fps) {
      state.fps = fps;
    },

    /** Advance the simulation and return the formatted snapshot. */
    read: function () {
      tick();
      return {
        cpu: Math.round(state.cpu) + '%',
        gpu: Math.round(state.gpu) + '%',
        ram: state.ramUsed.toFixed(1) + 'GB',
        fps: String(Math.round(state.fps)),
        net: '↓' + state.netDown.toFixed(1) + ' ↑' + state.netUp.toFixed(1) + 'MB/s'
      };
    }
  };
})(window);
