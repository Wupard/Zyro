/* ============================================================
   Zyro — shared 5-day workout program
   Single source of truth for the Workouts page and the dashboard.
   Schedule: Tue Push · Wed Pull · Fri Legs · Sat Upper · Sun Lower
   Monday and Thursday are rest days.
   ============================================================ */
(function () {
  'use strict';

  const exercises = function (list) {
    return list.map(function (e) {
      return { name: e[0], sets: e[1], reps: e[2], rir: e[3], cat: e[4] };
    });
  };

  const DAYS = {
    pzt: {
      key: 'pzt', order: 0, dayIndex: 1, rest: true,
      abbr: { tr: 'Pzt', en: 'Mon' },
      name: { tr: 'Pazartesi', en: 'Monday' },
      split: 'Rest',
      title: { tr: ['Dinlenme', 'günü'], en: ['Rest', 'day'] },
      focus: { tr: 'Dinlenme günü', en: 'Rest day' },
      exercises: []
    },
    sal: {
      key: 'sal', order: 1, dayIndex: 2, rest: false,
      abbr: { tr: 'Sal', en: 'Tue' },
      name: { tr: 'Salı', en: 'Tuesday' },
      split: 'Push',
      title: { tr: ['Üst vücut', 'itiş'], en: ['Upper body', 'push'] },
      focus: { tr: 'Üst göğüs ve yan omuz', en: 'Upper chest and side delts' },
      exercises: exercises([
        ['Barbell Bench Press', 3, '5–8', '2', 'chest'],
        ['Incline Dumbbell Press', 3, '8–12', '1–2', 'chest'],
        ['Seated Shoulder Press', 2, '8–10', '2', 'shoulders'],
        ['Cable Lateral Raise', 3, '12–20', '1–2', 'shoulders'],
        ['Seated Cable Crossover', 2, '12–15', '1–2', 'chest'],
        ['Triceps Pushdown', 3, '10–15', '1–2', 'triceps']
      ])
    },
    car: {
      key: 'car', order: 2, dayIndex: 3, rest: false,
      abbr: { tr: 'Çar', en: 'Wed' },
      name: { tr: 'Çarşamba', en: 'Wednesday' },
      split: 'Pull',
      title: { tr: ['Sırt', 'çekiş'], en: ['Back', 'pull'] },
      focus: { tr: 'Sırt genişliği ve arka omuz', en: 'Back width and rear delts' },
      exercises: exercises([
        ['Barbell Row', 3, '6–10', '2', 'back'],
        ['Seated Machine Lat Pulldown', 3, '8–12', '1–2', 'back'],
        ['Seated Cable Row (Close Grip)', 2, '10–12', '1–2', 'back'],
        ['Chest-Supported Rear Delt Fly', 3, '12–20', '1–2', 'shoulders'],
        ['Barbell Shrug', 2, '10–15', '2', 'back'],
        ['Incline Dumbbell Curl', 3, '8–12', '1–2', 'biceps'],
        ['Hammer Curl', 2, '10–15', '1–2', 'biceps']
      ])
    },
    per: {
      key: 'per', order: 3, dayIndex: 4, rest: true,
      abbr: { tr: 'Per', en: 'Thu' },
      name: { tr: 'Perşembe', en: 'Thursday' },
      split: 'Rest',
      title: { tr: ['Dinlenme', 'günü'], en: ['Rest', 'day'] },
      focus: { tr: 'Dinlenme günü', en: 'Rest day' },
      exercises: []
    },
    cum: {
      key: 'cum', order: 4, dayIndex: 5, rest: false,
      abbr: { tr: 'Cum', en: 'Fri' },
      name: { tr: 'Cuma', en: 'Friday' },
      split: 'Legs',
      title: { tr: ['Bacak', '+ core'], en: ['Legs', '+ core'] },
      focus: { tr: 'Arka bacak ve baldır', en: 'Posterior chain and calves' },
      exercises: exercises([
        ['Squat', 3, '5–8', '2', 'legs'],
        ['Romanian Deadlift', 3, '8–10', '2', 'legs'],
        ['Leg Press', 2, '10–12', '1–2', 'legs'],
        ['Lying Leg Curl', 3, '10–15', '1', 'legs'],
        ['Leg Press Calf Raise', 4, '10–15', '1–2', 'legs'],
        ['Hanging Leg Raise', 3, '10–15', '2', 'core']
      ])
    },
    cmt: {
      key: 'cmt', order: 5, dayIndex: 6, rest: false,
      abbr: { tr: 'Cmt', en: 'Sat' },
      name: { tr: 'Cumartesi', en: 'Saturday' },
      split: 'Upper',
      title: { tr: ['Üst vücut', 'full'], en: ['Upper body', 'full'] },
      focus: { tr: 'Üst gövde dengesi', en: 'Upper-body balance' },
      exercises: exercises([
        ['Incline Smith Machine Press', 3, '8–10', '2', 'chest'],
        ['Pull-Up veya Assisted Pull-Up', 3, '6–10', '2', 'back'],
        ['Chest Supported Row', 3, '8–12', '2', 'back'],
        ['Dumbbell Lateral Raise', 3, '12–20', '1–2', 'shoulders'],
        ['Seated Cable Fly', 2, '12–15', '1–2', 'chest'],
        ['EZ Bar Curl', 2, '10–12', '1–2', 'biceps'],
        ['Skull Crusher', 2, '10–12', '2', 'triceps'],
        ['Reverse Wrist Curl', 2, '15–20', '2', 'biceps']
      ])
    },
    paz: {
      key: 'paz', order: 6, dayIndex: 0, rest: false,
      abbr: { tr: 'Paz', en: 'Sun' },
      name: { tr: 'Pazar', en: 'Sunday' },
      split: 'Lower',
      title: { tr: ['Alt vücut', '+ core'], en: ['Lower body', '+ core'] },
      focus: { tr: 'Arka bacak, kalça ve baldır', en: 'Hamstrings, glutes and calves' },
      exercises: exercises([
        ['Bulgarian Split Squat', 2, '8–10', '2', 'legs'],
        ['Cable Pull-Through', 3, '8–12', '2', 'legs'],
        ['Seated Leg Curl', 3, '10–15', '1–2', 'legs'],
        ['Leg Extension', 2, '12–15', '2', 'legs'],
        ['Seated Calf Raise', 4, '12–20', '1–2', 'legs'],
        ['Cable Crunch', 3, '12–15', '2', 'core']
      ])
    }
  };

  const ORDER = ['pzt', 'sal', 'car', 'per', 'cum', 'cmt', 'paz'];
  const JS_DAY = ['paz', 'pzt', 'sal', 'car', 'per', 'cum', 'cmt'];

  const allExercises = [];
  const seen = {};
  ORDER.forEach(function (key) {
    DAYS[key].exercises.forEach(function (ex) {
      if (seen[ex.name]) return;
      seen[ex.name] = true;
      allExercises.push(ex);
    });
  });

  window.ZYRO_PROGRAM = {
    days: DAYS,
    order: ORDER,
    restDays: ['pzt', 'per'],
    keyForDate: function (date) { return JS_DAY[(date || new Date()).getDay()]; },
    todayKey: function () { return JS_DAY[new Date().getDay()]; },
    isProgramDay: function (key) { return !!(DAYS[key] && !DAYS[key].rest); },
    nextKey: function (fromDate) {
      const base = fromDate || new Date();
      for (let i = 1; i <= 7; i++) {
        const d = new Date(base);
        d.setDate(d.getDate() + i);
        const key = JS_DAY[d.getDay()];
        if (DAYS[key] && !DAYS[key].rest) return key;
      }
      return 'sal';
    },
    allExercises: allExercises
  };
})();
