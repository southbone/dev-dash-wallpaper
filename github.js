/**
 * services/github.js
 * GitHub panel data.
 *
 * GitHub's REST API IS CORS-enabled, so public data works from the browser
 * (unauthenticated limit: 60 req/h per IP; a token raises it but exposes the
 * token client-side, so use a low-scope token or leave empty).
 *
 * Derived metrics:
 *   - commitsToday: counts PushEvent commits from /users/:u/events with today's date
 *   - repos:        public_repos from /users/:u
 *   - streak:       approximate consecutive-day streak from recent push events
 *
 * Public shape:
 *   { user, commitsToday, repos, streak }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  function headers(token) {
    var h = { 'Accept': 'application/vnd.github+json' };
    if (token) h['Authorization'] = 'Bearer ' + token;
    return h;
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth() === b.getMonth() &&
           a.getDate() === b.getDate();
  }

  function real(cfg) {
    var u = encodeURIComponent(cfg.username);
    var opt = { headers: headers(cfg.token) };

    var profile = fetch('https://api.github.com/users/' + u, opt).then(json);
    var events = fetch('https://api.github.com/users/' + u + '/events/public?per_page=100', opt).then(json);

    return Promise.all([profile, events]).then(function (parts) {
      var p = parts[0] || {};
      var ev = Array.isArray(parts[1]) ? parts[1] : [];
      var now = new Date();

      // commits today
      var commitsToday = 0;
      ev.forEach(function (e) {
        if (e.type === 'PushEvent' && e.created_at && sameDay(new Date(e.created_at), now)) {
          commitsToday += (e.payload && e.payload.commits ? e.payload.commits.length : 1);
        }
      });

      // streak: distinct push-days back from today with no gap
      var days = {};
      ev.forEach(function (e) {
        if (e.type === 'PushEvent' && e.created_at) {
          var d = new Date(e.created_at);
          days[d.toISOString().slice(0, 10)] = true;
        }
      });
      var streak = 0;
      var cursor = new Date(now);
      for (var i = 0; i < 60; i++) {
        var key = cursor.toISOString().slice(0, 10);
        if (days[key]) {
          streak++;
        } else if (i > 0) {
          break; // gap ends the streak (today may legitimately be empty)
        }
        cursor.setDate(cursor.getDate() - 1);
      }

      return {
        user: p.login || cfg.username,
        commitsToday: String(commitsToday),
        repos: p.public_repos != null ? String(p.public_repos) : '—',
        streak: streak + 'd'
      };
    });
  }

  function json(res) {
    if (!res.ok) throw new Error('github http ' + res.status);
    return res.json();
  }

  // --- Mock ----------------------------------------------------------------

  function mock() {
    var t = Math.floor(Date.now() / 60000);
    return Promise.resolve({
      user: 'octodev',
      commitsToday: String(8 + (t % 7)),
      repos: '42',
      streak: (90 + (t % 5)) + 'd'
    });
  }

  ITW.GitHub = {
    /** Never rejects; mock on missing username or any error. */
    fetch: function () {
      var cfg = ITW.Config.get().github;
      if (!cfg.username) return mock();

      return real(cfg).catch(function (err) {
        if (root.console) console.warn('[github] real fetch failed, using mock:', err.message);
        return mock();
      });
    }
  };
})(window);
