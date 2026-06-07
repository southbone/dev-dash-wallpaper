/**
 * services/weather.js
 * Сервис погоды с абстракцией провайдера и mock-фолбеком.
 *
 * Провайдеры:
 *   openmeteo      — бесплатно, без ключа (геокодинг + прогноз)
 *   openweathermap — требует API-ключ; включается автоматически при наличии apiKey
 *
 * При любой ошибке возвращается mock — обои никогда не показывают пустые поля.
 *
 * Публичный объект данных:
 *   {
 *     temp, feelsLike, condition, humidity, wind,
 *     location, code, isDay, sunrise, sunset
 *   }
 */
(function (root) {
  'use strict';

  var ITW = (root.ITW = root.ITW || {});

  /* Кэш геокодинга: не запрашиваем координаты при каждом обновлении */
  var geoCache = {};

  /* Суффикс единицы температуры */
  function unitSymbol(units) {
    return units === 'imperial' ? '°F' : '°C';
  }

  /* Суффикс единицы скорости ветра */
  function windSuffix(units) {
    return units === 'imperial' ? ' mph' : ' km/h';
  }

  /* =========================================================================
     Таблица WMO-кодов погоды → текстовое описание
  ========================================================================= */
  var WMO_DESC = {
    0:  'Clear Sky',       1:  'Mainly Clear',    2: 'Partly Cloudy',    3: 'Overcast',
    45: 'Foggy',           48: 'Icy Fog',
    51: 'Light Drizzle',   53: 'Drizzle',         55: 'Heavy Drizzle',
    61: 'Light Rain',      63: 'Rain',             65: 'Heavy Rain',
    71: 'Light Snow',      73: 'Snow',             75: 'Heavy Snow',      77: 'Snow Grains',
    80: 'Showers',         81: 'Showers',          82: 'Heavy Showers',
    85: 'Snow Showers',    86: 'Heavy Snow Showers',
    95: 'Thunderstorm',    96: 'Thunderstorm+Hail', 99: 'Heavy Thunderstorm'
  };

  /* Получить описание по WMO-коду с фолбеком по диапазону */
  function wmoDesc(code) {
    return WMO_DESC[code] ||
      (code <= 49 ? 'Foggy'
        : code <= 69 ? 'Rain'
        : code <= 79 ? 'Snow'
        : code <= 84 ? 'Showers'
        : 'Thunderstorm');
  }

  /* Преобразовать ISO-строку "2026-06-05T06:12" → "06:12" */
  function isoToHHMM(iso) {
    var parts = ((iso || '').split('T')[1] || '00:00').split(':');
    return parts[0] + ':' + parts[1];
  }

  /* =========================================================================
     ГЕОКОДИНГ: название города → { lat, lon, name }
     Использует бесплатный Open-Meteo Geocoding API.
     Результат кэшируется на всё время жизни страницы.
  ========================================================================= */
  function geocode(city) {
    var key = city.toLowerCase();
    if (geoCache[key]) return Promise.resolve(geoCache[key]);

    var url =
      'https://geocoding-api.open-meteo.com/v1/search' +
      '?name=' + encodeURIComponent(city) +
      '&count=1&language=en&format=json';

    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('geocode http ' + res.status);
        return res.json();
      })
      .then(function (data) {
        var r = data.results && data.results[0];
        if (!r) throw new Error('город не найден: ' + city);
        var result = { lat: r.latitude, lon: r.longitude, name: r.name };
        geoCache[key] = result;
        return result;
      });
  }

  /* =========================================================================
     ПРОВАЙДЕР: Open-Meteo (бесплатно, без ключа)
     Сначала геокодирует город, затем запрашивает погоду.
  ========================================================================= */
  function openmeteo(cfg) {
    return geocode(cfg.city).then(function (geo) {
      var windU  = cfg.units === 'imperial' ? 'mph'        : 'kmh';
      var tempU  = cfg.units === 'imperial' ? 'fahrenheit' : 'celsius';

      var url =
        'https://api.open-meteo.com/v1/forecast' +
        '?latitude='  + geo.lat + '&longitude=' + geo.lon +
        '&current=temperature_2m,relative_humidity_2m,apparent_temperature,' +
                  'is_day,weather_code,wind_speed_10m' +
        '&daily=sunrise,sunset' +
        '&wind_speed_unit=' + windU +
        '&temperature_unit=' + tempU +
        '&timezone=auto';

      return fetch(url)
        .then(function (res) {
          if (!res.ok) throw new Error('openmeteo http ' + res.status);
          return res.json();
        })
        .then(function (data) {
          var c     = data.current;
          var daily = data.daily || {};
          var sym   = unitSymbol(cfg.units);
          var wsuf  = windSuffix(cfg.units);

          return {
            temp:      Math.round(c.temperature_2m) + sym,
            feelsLike: Math.round(c.apparent_temperature) + sym,
            condition: wmoDesc(c.weather_code),
            humidity:  c.relative_humidity_2m + '%',
            wind:      Math.round(c.wind_speed_10m) + wsuf,
            location:  geo.name || cfg.city,
            code:      c.weather_code,
            isDay:     c.is_day === 1,
            sunrise:   daily.sunrise ? isoToHHMM(daily.sunrise[0]) : '—',
            sunset:    daily.sunset  ? isoToHHMM(daily.sunset[0])  : '—'
          };
        });
    });
  }

  /* =========================================================================
     ПРОВАЙДЕР: OpenWeatherMap (требует API-ключ)
  ========================================================================= */
  function openweathermap(cfg) {
    var url =
      'https://api.openweathermap.org/data/2.5/weather' +
      '?q='     + encodeURIComponent(cfg.city) +
      '&units=' + encodeURIComponent(cfg.units) +
      '&appid=' + encodeURIComponent(cfg.apiKey);

    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('openweathermap http ' + res.status);
        return res.json();
      })
      .then(function (data) {
        var sym  = unitSymbol(cfg.units);
        var wsuf = windSuffix(cfg.units);
        var h    = new Date().getHours();

        return {
          temp:      Math.round(data.main.temp) + sym,
          feelsLike: Math.round(data.main.feels_like) + sym,
          condition: (data.weather && data.weather[0] && data.weather[0].main) || '—',
          humidity:  data.main.humidity + '%',
          wind:      Math.round((data.wind && data.wind.speed) || 0) + wsuf,
          location:  data.name || cfg.city,
          code:      null,       /* OWM не использует WMO-коды, иконка по isDay */
          isDay:     h >= 6 && h < 20,
          sunrise:   '—',
          sunset:    '—'
        };
      });
  }

  /* =========================================================================
     MOCK: плавно меняющиеся псевдо-значения на основе времени
     Возвращается когда нет ключа/провайдера или при любой ошибке.
  ========================================================================= */
  var MOCK_CONDITIONS = ['Clear Sky', 'Partly Cloudy', 'Rain', 'Haze', 'Thunderstorm'];
  var MOCK_CODES      = [0, 2, 63, 45, 95];

  function mock(cfg) {
    var t    = Date.now() / 60000;
    var base = cfg.units === 'imperial' ? 88 : 31;
    var sym  = unitSymbol(cfg.units);
    var wsuf = windSuffix(cfg.units);
    var idx  = Math.floor((Math.sin(t / 11) + 1) * 2) % MOCK_CONDITIONS.length;
    var h    = new Date().getHours();

    return Promise.resolve({
      temp:      Math.round(base + Math.sin(t / 7) * 3) + sym,
      feelsLike: Math.round(base + Math.sin(t / 7) * 3 - 2) + sym,
      condition: MOCK_CONDITIONS[idx],
      humidity:  Math.round(60 + Math.sin(t / 5) * 12) + '%',
      wind:      Math.round(8 + Math.sin(t / 3) * 4) + wsuf,
      location:  cfg.city,
      code:      MOCK_CODES[idx],
      isDay:     h >= 6 && h < 20,
      sunrise:   '06:12',
      sunset:    '18:30'
    });
  }

  /* =========================================================================
     ПУБЛИЧНЫЙ API
  ========================================================================= */
  ITW.Weather = {
    /**
     * Запросить погоду. Никогда не отклоняет промис:
     * при любой ошибке переключается на mock и логирует в консоль.
     */
    fetch: function () {
      var cfg = ITW.Config.get().weather;

      /* Если задан API-ключ — используем OpenWeatherMap, иначе Open-Meteo */
      var provider = (cfg.apiKey && cfg.provider === 'openweathermap')
        ? openweathermap
        : openmeteo;

      return provider(cfg).catch(function (err) {
        if (root.console) {
          console.warn('[weather] ошибка запроса, использую mock:', err.message);
        }
        return mock(cfg);
      });
    }
  };

})(window);
