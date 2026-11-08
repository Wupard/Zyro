/* ============================================================
   Zyro Panel v3 — data model
   Turns the app's existing appData / helpers into the view model.
   Never writes to the app's data layer.
   ============================================================ */
(function () {
  'use strict';

  const Z = window.ZyroDashboard;

  const MAP_MUSCLES = ['chest', 'delt', 'bi', 'fore', 'abs', 'obl', 'quad', 'calf', 'trap', 'tri', 'lat', 'low', 'glute', 'ham'];
  const FRONT_KEYS = ['chest', 'delt', 'bi', 'fore', 'abs', 'obl', 'quad', 'calf'];
  const COLORS = {
    chest: '#8fb3cc', delt: '#a9c7da', bi: '#dcc7a8', fore: '#dcc7a8',
    abs: '#a9c7da', obl: '#c99a9a', quad: '#8fb3cc', calf: '#a9c7da',
    trap: '#a9c7da', tri: '#dcc7a8', lat: '#8fb3cc', low: '#c99a9a',
    glute: '#dcc7a8', ham: '#c99a9a'
  };
  /* app muscle keys → one map path */
  const APP_TO_MAP = {
    chest: ['chest'], triceps: ['tri'], back: ['lat'], traps: ['trap'],
    shoulders: ['delt'], biceps: ['bi'], forearms: ['fore'], quads: ['quad'],
    glutes: ['glute'], hamstrings: ['ham'], calves: ['calf'], core: ['abs'],
    abs: ['abs'], obliques: ['obl'], 'lower back': ['low'],
    legs: ['quad', 'ham', 'glute']
  };
  /* fallback matcher for exercises that are not in EXERCISE_MUSCLES */
  const FALLBACK = [
    [/leg curl/i, ['hamstrings']],
    [/leg extension/i, ['quads']],
    [/calf/i, ['calves']],
    [/pull.?through|romanian|\brdl\b|deadlift|hip thrust|good morning/i, ['hamstrings', 'glutes']],
    [/split squat|lunge|squat|leg press|hack/i, ['quads', 'glutes']],
    [/rear delt|face.?pull/i, ['shoulders', 'traps']],
    [/row|pulldown|pull.?up|lat\b|back/i, ['back', 'biceps']],
    [/lateral|shoulder|overhead|arnold/i, ['shoulders', 'traps']],
    [/tricep|pushdown|skull|kickback/i, ['triceps']],
    [/bench|chest|fly|pec|crossover/i, ['chest', 'triceps']],
    [/wrist/i, ['forearms']],
    [/curl/i, ['biceps']],
    [/plank|crunch|woodchop|leg raise|twist|side bend|core/i, ['core']],
    [/shrug|neck|trap/i, ['traps']]
  ];

  function appDataSafe() {
    try { return (typeof appData !== 'undefined' && appData) ? appData : {}; }
    catch (e) { return {}; }
  }
  function userSafe() {
    try { return (typeof currentUser !== 'undefined') ? currentUser : null; }
    catch (e) { return null; }
  }
  function call(name, fallback) {
    try {
      if (typeof window[name] === 'function') return window[name]();
    } catch (e) { /* ignore */ }
    return fallback;
  }

  function sharedProgram() {
    try { return window.ZYRO_PROGRAM || null; }
    catch (e) { return null; }
  }
  function programs() {
    const data = appDataSafe();
    if (data.programs && typeof data.programs === 'object') return data.programs;
    try { return typeof DEFAULT_PROGRAMS !== 'undefined' ? DEFAULT_PROGRAMS : {}; }
    catch (e) { return {}; }
  }
  function goalFromProgram() {
    const shared = sharedProgram();
    if (shared) {
      const count = shared.order.filter(key => shared.days[key] && !shared.days[key].rest && shared.days[key].exercises.length).length;
      return count > 0 ? count : 1;
    }
    const p = programs();
    const count = Object.keys(p).filter(k => Array.isArray(p[k]) && p[k].length > 0).length;
    return count > 0 ? count : 1;
  }

  function exerciseMuscles(exercise) {
    const name = typeof exercise === 'string' ? exercise : (exercise && exercise.name) || '';
    const cat = (exercise && exercise.cat) || '';
    let map = {};
    try { map = (typeof EXERCISE_MUSCLES !== 'undefined' && EXERCISE_MUSCLES) || {}; }
    catch (e) { map = {}; }
    if (map[name]) return map[name];
    for (let i = 0; i < FALLBACK.length; i++) {
      if (FALLBACK[i][0].test(name)) return FALLBACK[i][1];
    }
    if (cat && APP_TO_MAP[cat]) return [cat];
    return [];
  }

  function activityOn(ds) {
    const data = appDataSafe();
    if (data.attendance && data.attendance[ds] === true) return true;
    return ((data.workoutLogs || {})[ds] || []).length > 0;
  }
  function setsOn(ds) {
    const logs = (appDataSafe().workoutLogs || {})[ds] || [];
    return logs.reduce((sum, l) => sum + (parseInt(l.sets, 10) || 0), 0);
  }
  function activeDaysBetween(startDate, endDate) {
    let count = 0;
    const d = new Date(startDate);
    while (d <= endDate) {
      if (activityOn(Z.ymd(d))) count++;
      d.setDate(d.getDate() + 1);
    }
    return count;
  }

  function greeting(lang) {
    const h = new Date().getHours();
    if (h < 6) return Z.STR[lang].greeting.evening;
    if (h < 12) return Z.STR[lang].greeting.morning;
    if (h < 18) return Z.STR[lang].greeting.day;
    return Z.STR[lang].greeting.evening;
  }

  function userName() {
    const data = appDataSafe();
    const user = userSafe();
    const profile = data.profile || {};
    let name = profile.displayName || (user && user.displayName) || '';
    if (!name && user && user.email) name = String(user.email).split('@')[0];
    if (!name) name = Z.lang() === 'tr' ? 'Sporcu' : 'Athlete';
    return String(name).trim().split(/\s+/)[0];
  }

  function computeStreak() {
    let d = new Date();
    if (!activityOn(Z.ymd(d))) d.setDate(d.getDate() - 1);
    let count = 0;
    while (count < 3650 && activityOn(Z.ymd(d))) {
      count++;
      d.setDate(d.getDate() - 1);
    }
    return count;
  }

  function todayTab() {
    const shared = sharedProgram();
    if (shared) {
      const key = shared.todayKey();
      const day = shared.days[key];
      return day && !day.rest && day.exercises.length ? key : null;
    }
    const byDow = { 2: 'day1', 3: 'day2', 5: 'day3', 6: 'day4', 0: 'day5' };
    return byDow[new Date().getDay()] || null;
  }
  function nextWorkout() {
    const shared = sharedProgram();
    if (shared) {
      for (let i = 1; i <= 7; i++) {
        const d = Z.addDays(new Date(), i);
        const key = shared.keyForDate(d);
        const day = shared.days[key];
        if (day && !day.rest && day.exercises.length) {
          return { key, tab: key, day, date: d, weekday: (d.getDay() + 6) % 7 };
        }
      }
      return null;
    }
    for (let i = 1; i <= 7; i++) {
      const d = Z.addDays(new Date(), i);
      const byDow = { 2: 'day1', 3: 'day2', 5: 'day3', 6: 'day4', 0: 'day5' };
      const tab = byDow[d.getDay()];
      if (tab && (programs()[tab] || []).length) {
        return { tab, date: d, weekday: (d.getDay() + 6) % 7 };
      }
    }
    return null;
  }

  function buildWork(exercises, lang) {
    const work = {};
    exercises.forEach(ex => {
      const sets = Z.parseSets(ex.sets);
      const muscles = exerciseMuscles(ex);
      muscles.forEach(appMuscle => {
        (APP_TO_MAP[appMuscle] || []).forEach(mapMuscle => {
          if (!work[mapMuscle]) {
            work[mapMuscle] = {
              sets: 0,
              key: mapMuscle,
              label: Z.STR[lang].muscleNames[mapMuscle] || mapMuscle,
              color: COLORS[mapMuscle] || '#8fb3cc',
              view: FRONT_KEYS.indexOf(mapMuscle) >= 0 ? 'front' : 'back'
            };
          }
          work[mapMuscle].sets += sets;
        });
      });
    });
    Object.keys(work).forEach(key => {
      const w = work[key];
      w.opacity = Math.min(0.98, 0.32 + 0.06 * w.sets);
    });
    return work;
  }

  function buildHero(lang) {
    const S = Z.STR[lang];
    const shared = sharedProgram();
    const tab = todayTab();
    let exercises = [];
    let info = null;
    if (shared) {
      if (tab) {
        const day = shared.days[tab];
        exercises = day.exercises || [];
        info = { title: day.title[lang], focus: day.focus[lang] };
      }
    } else {
      const all = programs();
      exercises = (tab && Array.isArray(all[tab])) ? all[tab] : [];
      info = S.program[tab] || { title: [tab, ''], focus: '' };
    }
    if (!exercises.length) {
      const next = nextWorkout();
      let nextText = '';
      if (next) {
        let nextTitle = ['', ''];
        if (next.day) nextTitle = next.day.title[lang];
        else {
          const nextInfo = S.program[next.tab] || { title: ['', ''] };
          nextTitle = nextInfo.title;
        }
        nextText = `${S.nextWorkout}: ${S.daysLong[next.weekday]} — ${nextTitle.join(' ')}`;
      }
      return {
        rest: true,
        eyebrow: S.heroEyebrow,
        title: [S.restTitle, S.restTitle2],
        desc: nextText ? `${S.restDesc} ${nextText}.` : S.restDesc,
        tags: [],
        exercises: [],
        work: {},
        tab: null
      };
    }
    const work = buildWork(exercises, lang);
    const tags = Object.values(work).sort((a, b) => b.sets - a.sets);
    const names = [];
    exercises.forEach(ex => {
      exerciseMuscles(ex).forEach(appMuscle => {
        (APP_TO_MAP[appMuscle] || []).forEach(mapMuscle => {
          const label = S.muscleNames[mapMuscle];
          if (label && names.indexOf(label) < 0) names.push(label);
        });
      });
    });
    const focus = names.length
      ? Z.titleCase(names.map(n => Z.lower(n)).join(', ')) + '.'
      : info.focus;
    const minutes = exercises.length * 8;
    return {
      rest: false,
      eyebrow: S.heroEyebrow,
      title: info.title,
      desc: `${focus} ${exercises.length} ${lang === 'tr' ? 'egzersiz' : 'exercises'}, ${lang === 'tr' ? 'yaklaşık' : 'about'} ${minutes} ${lang === 'tr' ? 'dakika' : 'min'}.`,
      tags,
      exercises,
      work,
      tab
    };
  }

  function weekData(lang) {
    const S = Z.STR[lang];
    const monday = Z.monday(new Date());
    const goal = goalFromProgram();
    const today = Z.today();
    const days = [];
    const setsList = [];
    let completed = 0;
    for (let i = 0; i < 7; i++) {
      const d = Z.addDays(monday, i);
      const ds = Z.ymd(d);
      const sets = setsOn(ds);
      setsList.push(sets);
      const on = activityOn(ds);
      if (on) completed++;
      days.push({ key: ds, label: S.days[i], on, now: ds === today, sets });
    }
    const maxSets = Math.max.apply(null, setsList.concat([1]));
    days.forEach(day => {
      if (!day.on) day.height = 10;
      else if (day.sets > 0) day.height = Math.round(14 + 44 * (day.sets / maxSets));
      else day.height = 34;
    });
    return { goal, completed, days, ratio: Math.min(1, goal > 0 ? completed / goal : 0) };
  }

  function weightSeries() {
    const entries = Object.entries(appDataSafe().weightLog || {})
      .map(([date, value]) => ({ date, value: Number(value) }))
      .filter(e => !isNaN(e.value))
      .sort((a, b) => a.date.localeCompare(b.date));
    return entries;
  }

  function buildWeight(lang) {
    const S = Z.STR[lang];
    const entries = weightSeries();
    if (!entries.length) return { has: false, title: S.currentWeight };
    const latest = entries[entries.length - 1];
    const today = Z.today();
    let delta = null;
    let suffix = '';
    const old = entries.filter(e => Z.dayDiff(e.date, today) >= 30);
    if (old.length) {
      const ref = old[old.length - 1];
      delta = latest.value - ref.value;
      suffix = S.last30;
    } else if (entries.length > 1) {
      const first = entries[0];
      delta = latest.value - first.value;
      const span = Math.max(1, Z.dayDiff(first.date, latest.date));
      suffix = S.inDays(span);
    }
    const spark = entries.slice(-9).map(e => e.value);
    return {
      has: true,
      title: S.currentWeight,
      value: latest.value,
      decimals: 1,
      unit: S.kg,
      deltaText: delta === null ? S.singleMeasure : `${Z.signed(delta, 1)} ${S.kg} ${suffix}`,
      spark: spark.length === 1 ? [spark[0], spark[0]] : spark
    };
  }

  function consistencyAt(startOffsetDays) {
    const goal = goalFromProgram();
    const start = Z.addDays(new Date(), -startOffsetDays + 1);
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    const days = startOffsetDays;
    const active = activeDaysBetween(start, end);
    const target = Math.max(1, (days / 7) * goal);
    return Math.min(100, Math.round((active / target) * 100));
  }

  function buildConsistency(lang) {
    const S = Z.STR[lang];
    const data = appDataSafe();
    const hasAny = Object.keys(data.workoutLogs || {}).some(d => (data.workoutLogs[d] || []).length) ||
      Object.keys(data.attendance || {}).some(d => data.attendance[d] === true);
    if (!hasAny) return { has: false, title: S.consistency };
    const value = consistencyAt(28);
    const prev = consistencyAt(56);
    const diff = value - prev;
    const spark = [];
    for (let w = 8; w >= 0; w--) {
      spark.push(consistencyAt(7 * (w + 1)));
    }
    return {
      has: true,
      title: S.consistency,
      value,
      decimals: 0,
      unit: '%',
      deltaText: diff === 0
        ? S.sameAsLast
        : (lang === 'tr' ? `${S.monthCompare} ${Z.signed(diff, 0)}` : `${S.monthCompare} ${Z.signed(diff, 0)}`),
      spark: spark.length === 1 ? [spark[0], spark[0]] : spark
    };
  }

  function buildStrength(lang) {
    const S = Z.STR[lang];
    let stats = [];
    try {
      if (typeof computeExerciseStats === 'function') stats = computeExerciseStats();
    } catch (e) { stats = []; }
    if (!Array.isArray(stats) || !stats.length) return { has: false, title: S.strength };
    let gain = 0;
    stats.forEach(s => {
      const diff = (Number(s.currentWeightKg) || 0) - (Number(s.baselineWeightKg) || 0);
      if (diff > 0) gain += diff;
    });
    const weekly = call('getVolumePerWeek', { data: [] });
    let spark = (weekly.data || []).slice(-9);
    if (!spark.length) {
      spark = stats.slice(0, 9).map(s => Number(s.currentWeightKg) || 0);
    }
    if (spark.length === 1) spark = [spark[0], spark[0]];
    return {
      has: true,
      title: S.strength,
      value: gain,
      decimals: 1,
      unit: S.kg,
      deltaText: gain > 0 ? S.sinceFirst : S.noProgress,
      spark
    };
  }

  function buildChart(lang) {
    const S = Z.STR[lang];
    const weights = weightSeries().slice(-14);
    const weight = {
      has: weights.length > 0,
      kind: 'w',
      unit: S.kg,
      values: weights.map(w => w.value),
      dates: weights.map(w => w.date),
      decimals: 1
    };
    const weekly = call('getVolumePerWeek', { data: [], labels: [] });
    const vals = (weekly.data || []).slice(-14);
    const labs = (weekly.labels || []).slice(-14);
    const volume = {
      has: vals.length > 0,
      kind: 'v',
      unit: S.kg,
      values: vals,
      dates: labs,
      decimals: 0
    };
    return { weight, volume, lang };
  }

  function agoText(lang, date) {
    const S = Z.STR[lang];
    const days = Z.dayDiff(date, Z.today());
    if (days <= 0) return S.today;
    if (days === 1) return S.yesterday;
    if (days < 7) return S.daysAgo(days);
    if (days < 14) return S.weekAgo;
    return S.daysAgo(days);
  }

  function buildRecords(lang) {
    const S = Z.STR[lang];
    const best = {};
    Object.entries(appDataSafe().workoutLogs || {}).forEach(([date, logs]) => {
      (logs || []).forEach(log => {
        const kg = Number(log.weight) || 0;
        if (kg <= 0) return;
        if (!best[log.exercise] || kg > best[log.exercise].kg) {
          best[log.exercise] = {
            name: log.exercise,
            kg,
            display: log.unit === 'lbs' ? (Number(log.inputWeight) || kg) : kg,
            unit: log.unit === 'lbs' ? 'lbs' : S.kg,
            date
          };
        }
      });
    });
    return Object.values(best)
      .sort((a, b) => b.kg - a.kg)
      .slice(0, 4)
      .map(r => ({ name: r.name, value: r.display, unit: r.unit, ago: agoText(lang, r.date) }));
  }

  function buildHeat(lang) {
    const S = Z.STR[lang];
    const thisMonday = Z.monday(new Date());
    const start = Z.addDays(thisMonday, -15 * 7);
    const today = Z.today();
    const cells = [];
    let active = 0;
    for (let i = 0; i < 7 * 16; i++) {
      const week = Math.floor(i / 7);
      const wd = i % 7;
      const d = Z.addDays(start, week * 7 + wd);
      const ds = Z.ymd(d);
      const sets = setsOn(ds);
      const isFuture = ds > today;
      const on = !isFuture && activityOn(ds);
      if (on) active++;
      let a = 0.05;
      if (on) {
        if (sets >= 10) a = 0.85;
        else if (sets >= 5) a = 0.55;
        else a = 0.35;
      } else if (!isFuture && setsOn(ds) > 0) {
        a = 0.35;
      }
      cells.push({ a, n: i, date: ds, on });
    }
    return { cells, count: active, has: active > 0 };
  }

  function buildLevel(lang) {
    const S = Z.STR[lang];
    let xp = call('calculateXP', 0);
    let level = call('calculateLevel', 1);
    if (typeof window.calculateLevel === 'function') level = window.calculateLevel(xp);
    else {
      try { level = calculateLevel(xp); } catch (e) { level = 1; }
    }
    let current = 0;
    let next = 50;
    try {
      current = getXPForLevel(level);
      next = getXPForLevel(level + 1);
    } catch (e) { /* ignore */ }
    const range = next - current;
    const progress = range > 0 ? Math.max(0, Math.min(100, ((xp - current) / range) * 100)) : 100;
    return { label: S.level, level, xp, next, progress };
  }

  Z.buildModel = function () {
    const lang = Z.lang();
    const S = Z.STR[lang];
    const dateLabel = new Date().toLocaleDateString(Z.locale(), {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    return {
      lang,
      S,
      userName: userName(),
      greeting: greeting(lang),
      dateLabel,
      streak: computeStreak(),
      level: buildLevel(lang),
      hero: buildHero(lang),
      week: weekData(lang),
      stats: {
        weight: buildWeight(lang),
        consistency: buildConsistency(lang),
        strength: buildStrength(lang)
      },
      chart: buildChart(lang),
      records: buildRecords(lang),
      heat: buildHeat(lang),
      maps: { front: FRONT_KEYS, back: MAP_MUSCLES.filter(m => FRONT_KEYS.indexOf(m) < 0) }
    };
  };

  Z.MAP_MUSCLES = MAP_MUSCLES;
  Z.FRONT_KEYS = FRONT_KEYS;
  Z.activityOn = activityOn;
  Z.appDataSafe = appDataSafe;
})();
