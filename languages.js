/**
 * languages.js — ITW.Languages
 * Data-driven registry and loader for language courses.
 *
 * Courses live in data/languages/<id>/dataset.js. Each dataset is a plain
 * JS file (no fetch — works on file:// and inside Wallpaper Engine CEF)
 * that self-registers by calling ITW.Languages.register(dataset).
 * The list of folders to load is declared in data/languages/manifest.js
 * (global ITW_LANGUAGE_MANIFEST).
 *
 * Generic dataset schema:
 *   {
 *     id:             'thai',                       // unique, equals folder name
 *     name:           { en: 'Thai', ru: '...' },    // localized course name
 *     transcriptions: [ { id, label: { en, ru } } ],// column defs, order fixed
 *     lessons: [{
 *       symbol:    'ก',                             // main glyph
 *       name:      'กอ ไก่',                         // native name / counterpart
 *       tr:        ['г/к', 'к', 'g/k'],             // aligned with transcriptions
 *       meaning:   { en, ru },                      // short description
 *       syllables: [{ text, tr[], example?: { en, ru }, note? }],   // optional
 *       words:     [{ text, tr[], translation: { en, ru } }],       // optional
 *       phrases:   [{ text, tr[], translation: { en, ru } }]        // optional
 *     }]
 *   }
 *
 * The lesson widget renders whatever the dataset declares; it contains no
 * language-specific logic.
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  /* id -> dataset */
  var registry = {};

  ITW.Languages = {
    /**
     * Registers a course dataset. Called by each dataset.js on load.
     * Datasets without an id, or with a duplicate id, are ignored.
     */
    register: function (dataset) {
      if (!dataset || !dataset.id || registry[dataset.id]) return;
      if (!dataset.lessons || !dataset.lessons.length) return;
      registry[dataset.id] = dataset;
    },

    /**
     * Returns the dataset for a course id, or null if not registered.
     */
    get: function (id) {
      return registry[id] || null;
    },

    /**
     * Returns registered course ids in manifest order.
     */
    ids: function () {
      var list = (typeof ITW_LANGUAGE_MANIFEST !== 'undefined') ? ITW_LANGUAGE_MANIFEST : [];
      var out = [];
      for (var i = 0; i < list.length; i++) {
        if (registry[list[i]]) out.push(list[i]);
      }
      return out;
    },

    /**
     * Loads every dataset listed in the manifest by injecting <script> tags,
     * then invokes done() once all of them have loaded or failed.
     */
    load: function (done) {
      var list = (typeof ITW_LANGUAGE_MANIFEST !== 'undefined') ? ITW_LANGUAGE_MANIFEST : [];
      var pending = list.length;
      if (!pending) { done(); return; }

      /* Decrements the pending counter and fires done() on the last script. */
      function settle() {
        pending--;
        if (!pending) done();
      }

      for (var i = 0; i < list.length; i++) {
        var s = document.createElement('script');
        s.src = 'data/languages/' + list[i] + '/dataset.js';
        s.onload  = settle;
        s.onerror = settle;
        document.body.appendChild(s);
      }
    }
  };
})(window);
