/**
 * services/steam.js
 * Steam integration.
 *
 * HARD REALITY: api.steampowered.com does NOT send CORS headers, so a direct
 * browser fetch is blocked by the user agent. There are exactly two ways to get
 * real data:
 *   1) Run your own tiny proxy that calls Steam server-side and returns JSON
 *      WITH Access-Control-Allow-Origin. Set config.steam.proxyBase to it.
 *   2) Use mock data (default).
 *
 * Proxy contract (you implement the backend, any language):
 *   GET {proxyBase}/summary?steamid=ID   ->
 *       { user, playing, lastGame }
 *   GET {proxyBase}/dota?steamid=ID      ->
 *       { dotaHours }
 * The proxy holds the Steam Web API key. Never put a real Steam key in a
 * client-side wallpaper; it ships to every viewer.
 *
 * Public shape:
 *   { user, playing, dotaHours, lastGame }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  var DOTA_APPID = 570;

  function viaProxy(cfg) {
    var base = cfg.proxyBase.replace(/\/+$/, '');
    var id = encodeURIComponent(cfg.steamId);

    var summary = fetch(base + '/summary?steamid=' + id).then(toJson);
    var dota = fetch(base + '/dota?steamid=' + id).then(toJson).catch(function () {
      return { dotaHours: '—' };
    });

    return Promise.all([summary, dota]).then(function (parts) {
      var s = parts[0] || {};
      var d = parts[1] || {};
      return {
        user: s.user || '—',
        playing: s.playing || 'Idle',
        dotaHours: d.dotaHours != null ? String(d.dotaHours) : '—',
        lastGame: s.lastGame || '—'
      };
    });
  }

  function toJson(res) {
    if (!res.ok) throw new Error('steam http ' + res.status);
    return res.json();
  }

  // --- Mock ----------------------------------------------------------------

  var mockGames = ['Dota 2', 'Counter-Strike 2', 'Factorio', 'Baldur\'s Gate 3', null];

  function mock() {
    var t = Math.floor(Date.now() / 30000);
    var playingIdx = t % mockGames.length;
    var playing = mockGames[playingIdx];
    return Promise.resolve({
      user: 'devuser',
      playing: playing || 'Idle',
      dotaHours: String(1480 + (t % 9)),
      lastGame: 'Dota 2'
    });
  }

  ITW.Steam = {
    /** Never rejects; falls back to mock on any error or when mock is enabled. */
    fetch: function () {
      var cfg = ITW.Config.get().steam;

      if (cfg.mock || !cfg.proxyBase || !cfg.steamId) return mock();

      return viaProxy(cfg).catch(function (err) {
        if (root.console) console.warn('[steam] proxy failed, using mock:', err.message);
        return mock();
      });
    },

    DOTA_APPID: DOTA_APPID
  };
})(window);
