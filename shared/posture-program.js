/* ============================================================
   Zyro — shared posture program
   Single source of truth for the Posture page and any other view
   that needs the 7-day posture routine. Exercise names stay in
   English because they are the persistence key.
   ============================================================ */
(function () {
  'use strict';

  function r(tr, en) { return { tr: tr, en: en }; }
  function t(tr, en) { return { tr: tr, en: en }; }

  var TYPES = {
    A: {
      key: 'A',
      name: t('Üst postür', 'Upper posture'),
      focus: t('Göğüs, omuz ve boyun', 'Chest, shoulders and neck'),
      exercises: [
        {
          id: 'doorway-stretch',
          name: 'Doorway Stretch',
          area: t('Göğüs', 'Chest'),
          type: 'time',
          rounds: [r('Set 1', 'Set 1'), r('Set 2', 'Set 2')],
          value: 30,
          summary: t('2 × 30 sn', '2 × 30 sec'),
          note: t('', '')
        },
        {
          id: 'ytw-raises',
          name: 'Y-T-W Raises',
          area: t('Üst sırt ve omuz', 'Upper back and shoulders'),
          type: 'reps',
          rounds: [r('Y', 'Y'), r('T', 'T'), r('W', 'W')],
          value: 15,
          summary: t('3 × 15', '3 × 15'),
          note: t('Her harf için 15 tekrar — toplam 45', '15 reps per letter — 45 total')
        },
        {
          id: 'wall-angels',
          name: 'Wall Angels',
          area: t('Omuz ve sırt', 'Shoulders and back'),
          type: 'reps',
          rounds: [r('Set 1', 'Set 1')],
          value: 20,
          summary: t('20 tekrar', '20 reps'),
          note: t('', '')
        },
        {
          id: 'chin-tuck',
          name: 'Chin Tuck',
          area: t('Boyun', 'Neck'),
          type: 'reps',
          rounds: [r('Set 1', 'Set 1')],
          value: 15,
          summary: t('15 tekrar', '15 reps'),
          note: t('Her birinde 3 sn bekle', 'Hold 3 sec on each rep')
        }
      ]
    },
    B: {
      key: 'B',
      name: t('Kalça ve core', 'Hips and core'),
      focus: t('Kalça, bel ve karın', 'Hips, lower back and core'),
      exercises: [
        {
          id: 'cat-cow',
          name: 'Cat-Cow',
          area: t('Omurga', 'Spine'),
          type: 'reps',
          rounds: [r('Set 1', 'Set 1')],
          value: 20,
          summary: t('20 tekrar', '20 reps'),
          note: t('', '')
        },
        {
          id: 'hip-flexor-stretch',
          name: 'Kneeling Hip Flexor Stretch',
          area: t('Kalça', 'Hips'),
          type: 'time',
          rounds: [r('Sağ bacak', 'Right leg'), r('Sol bacak', 'Left leg')],
          value: 30,
          summary: t('2 × 30 sn', '2 × 30 sec'),
          note: t('Her bacak için 30 saniye', '30 seconds per leg')
        },
        {
          id: 'glute-bridge',
          name: 'Glute Bridge',
          area: t('Kalça', 'Glutes'),
          type: 'reps',
          rounds: [r('Set 1', 'Set 1'), r('Set 2', 'Set 2')],
          value: 20,
          summary: t('2 × 20', '2 × 20'),
          note: t('', '')
        },
        {
          id: 'deadbug',
          name: 'Deadbug',
          area: t('Karın ve bel', 'Core and lower back'),
          type: 'reps',
          rounds: [r('Sağ', 'Right'), r('Sol', 'Left')],
          value: 10,
          summary: t('20 tekrar', '20 reps'),
          note: t('10 sağ, 10 sol', '10 right, 10 left')
        }
      ]
    },
    C: {
      key: 'C',
      name: t('Toparlanma', 'Recovery'),
      focus: t('Esneme ve nefes', 'Mobility and breathing'),
      exercises: [
        {
          id: 'thoracic-extension',
          name: 'Thoracic Extension',
          area: t('Üst sırt', 'Upper back'),
          type: 'time',
          rounds: [r('Set 1', 'Set 1'), r('Set 2', 'Set 2')],
          value: 30,
          summary: t('2 × 30 sn', '2 × 30 sec'),
          note: t('Rulo veya sandalye ile', 'Use a foam roller or chair')
        },
        {
          id: 'childs-pose',
          name: "Child's Pose",
          nameTr: "Child's Pose (Çocuk Pozu)",
          area: t('Sırt ve bel', 'Back and lower back'),
          type: 'time',
          rounds: [r('Set 1', 'Set 1')],
          value: 60,
          summary: t('1 dakika', '1 minute'),
          note: t('Pozisyonda kal ve derin nefes al', 'Stay in the pose and breathe deeply')
        },
        {
          id: 'doorway-stretch',
          name: 'Doorway Stretch',
          area: t('Göğüs', 'Chest'),
          type: 'time',
          rounds: [r('Set 1', 'Set 1')],
          value: 30,
          summary: t('1 × 30 sn', '1 × 30 sec'),
          note: t('', '')
        }
      ]
    }
  };

  var DAYS = {
    pzt: {
      key: 'pzt', dayIndex: 1, rest: false, type: 'A',
      abbr: t('Pzt', 'Mon'),
      name: t('Pazartesi', 'Monday')
    },
    sal: {
      key: 'sal', dayIndex: 2, rest: false, type: 'B',
      abbr: t('Sal', 'Tue'),
      name: t('Salı', 'Tuesday')
    },
    car: {
      key: 'car', dayIndex: 3, rest: false, type: 'A',
      abbr: t('Çar', 'Wed'),
      name: t('Çarşamba', 'Wednesday')
    },
    per: {
      key: 'per', dayIndex: 4, rest: false, type: 'B',
      abbr: t('Per', 'Thu'),
      name: t('Perşembe', 'Thursday')
    },
    cum: {
      key: 'cum', dayIndex: 5, rest: false, type: 'A',
      abbr: t('Cum', 'Fri'),
      name: t('Cuma', 'Friday')
    },
    cmt: {
      key: 'cmt', dayIndex: 6, rest: false, type: 'B',
      abbr: t('Cmt', 'Sat'),
      name: t('Cumartesi', 'Saturday')
    },
    paz: {
      key: 'paz', dayIndex: 0, rest: false, type: 'C',
      abbr: t('Paz', 'Sun'),
      name: t('Pazar', 'Sunday')
    }
  };

  var ORDER = ['pzt', 'sal', 'car', 'per', 'cum', 'cmt', 'paz'];
  var JS_DAY = ['paz', 'pzt', 'sal', 'car', 'per', 'cum', 'cmt'];

  window.ZYRO_POSTURE = {
    types: TYPES,
    days: DAYS,
    order: ORDER,
    keyForDate: function (date) { return JS_DAY[(date || new Date()).getDay()]; },
    todayKey: function () { return JS_DAY[new Date().getDay()]; },
    type: function (dayKey) {
      var day = DAYS[dayKey];
      return day ? TYPES[day.type] : null;
    },
    totalRounds: function (dayKey) {
      var type = this.type(dayKey);
      if (!type) return 0;
      return type.exercises.reduce(function (sum, ex) { return sum + ex.rounds.length; }, 0);
    },
    label: function (ex, lang) {
      if (lang === 'tr' && ex.nameTr) return ex.nameTr;
      return ex.name;
    }
  };
})();
