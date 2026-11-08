/* ============================================================
   Zyro Panel v3 — core helpers
   Shared namespace, htm binding, formatting and i18n.
   Loaded before the component files.
   ============================================================ */
(function () {
  'use strict';

  const Z = (window.ZyroDashboard = window.ZyroDashboard || {});
  const html = window.htm.bind(window.React.createElement);
  Z.html = html;
  Z.React = window.React;
  Z.ReactDOM = window.ReactDOM;

  Z.STR = {
    tr: {
      navLabel: 'Ana menü',
      nav: {
        dashboard: 'Panel',
        workouts: 'Antrenmanlar',
        progress: 'İlerleme',
        diet: 'Beslenme',
        posture: 'Duruş',
        calculators: 'Hesaplayıcılar',
        leaderboard: 'Liderlik',
        notes: 'Notlar'
      },
      greeting: { morning: 'Günaydın', day: 'İyi günler', evening: 'İyi akşamlar' },
      streak: 'günlük seri',
      heroEyebrow: 'Bugünün antrenmanı',
      restTitle: 'Dinlenme',
      restTitle2: 'günü',
      restDesc: 'Bugün planlanmış antrenman yok.',
      nextWorkout: 'Sıradaki antrenman',
      start: 'Antrenmanı başlat',
      goWorkouts: 'Antrenmanları gör',
      weeklyGoal: 'Haftalık hedef',
      workoutWord: 'antrenman',
      completed: 'tamamlandı',
      currentWeight: 'Güncel kilo',
      consistency: 'Düzen',
      strength: 'Güç artışı',
      progress: 'İlerleme',
      weight: 'Kilo',
      volume: 'Hacim',
      records: 'En iyi rekorlar',
      heat: 'Son 16 hafta',
      level: 'Seviye',
      days: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
      daysLong: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      kg: 'kg',
      ton: 'ton',
      today: 'Bugün',
      yesterday: 'Dün',
      daysAgo: (n) => `${n} gün önce`,
      weekAgo: '1 hafta önce',
      sameAsLast: 'Geçen ayla aynı',
      monthCompare: 'Geçen aya göre',
      sinceFirst: 'Toplam, ilk haftaya göre',
      last30: 'son 30 gün',
      inDays: (n) => `${n} günde`,
      singleMeasure: 'Tek ölçüm',
      noProgress: 'Henüz artış yok',
      emptyWeight: 'Henüz kilo yok. İlk kilonu girdiğinde grafik burada görünür.',
      emptyChart: 'Henüz veri yok. İlk kilonu girdiğinde grafik burada görünür.',
      emptyVolume: 'Henüz hacim verisi yok. İlk antrenmanını kaydettiğinde grafik burada görünür.',
      emptyConsistency: 'Henüz antrenman yok. İlk antrenmanınla düzenini görmeye başla.',
      emptyStrength: 'Henüz güç verisi yok. Egzersiz kaydettikçe artışın burada görünür.',
      emptyRecords: 'Henüz rekor yok. İlk antrenmanını kaydettiğinde rekorlar burada görünür.',
      emptyHeat: 'Son 16 haftada antrenman yok. İlk antrenmanınla harita dolmaya başlar.',
      addWeight: 'Kilo ekle',
      addWorkout: 'Antrenman ekle',
      logWorkout: 'Antrenman kaydet',
      muscle: 'kas haritası',
      mapLabel: 'Çalışan kas haritası',
      front: 'Ön',
      back: 'Arka',
      viewLabel: 'Görünüm',
      sets: 'set',
      workoutCount: (n) => `${n} antrenman`,
      progressPoints: (n) => `${n} kayıt`,
      firstRecord: 'İlk kayıt',
      noData: 'Veri yok',
      muscleNames: {
        chest: 'Göğüs',
        delt: 'Omuz',
        tri: 'Arka kol',
        bi: 'Biceps',
        fore: 'Ön kol',
        abs: 'Karın',
        obl: 'Yanlar',
        quad: 'Quadriceps',
        calf: 'Baldır',
        trap: 'Trapez',
        lat: 'Sırt',
        low: 'Alt sırt',
        glute: 'Kalça',
        ham: 'Hamstring'
      },
      program: {
        day1: { title: ['Üst vücut', 'itiş'], focus: 'Göğüs, omuz ve arka kol' },
        day2: { title: ['Sırt', 'çekiş'], focus: 'Sırt, biceps ve trapez' },
        day3: { title: ['Bacak', '+ core'], focus: 'Quadriceps, hamstring, kalça ve core' },
        day4: { title: ['Üst vücut', 'full'], focus: 'Omuz, sırt, göğüs ve kol' },
        day5: { title: ['Alt vücut', '+ core'], focus: 'Kalça, hamstring, baldır ve core' }
      }
    },
    en: {
      navLabel: 'Main menu',
      nav: {
        dashboard: 'Dashboard',
        workouts: 'Workouts',
        progress: 'Progress',
        diet: 'Nutrition',
        posture: 'Posture',
        calculators: 'Calculators',
        leaderboard: 'Leaderboard',
        notes: 'Notes'
      },
      greeting: { morning: 'Good morning', day: 'Good afternoon', evening: 'Good evening' },
      streak: 'day streak',
      heroEyebrow: "Today's workout",
      restTitle: 'Rest',
      restTitle2: 'day',
      restDesc: 'No workout is planned for today.',
      nextWorkout: 'Next workout',
      start: 'Start workout',
      goWorkouts: 'See workouts',
      weeklyGoal: 'Weekly goal',
      workoutWord: 'workouts',
      completed: 'completed',
      currentWeight: 'Current weight',
      consistency: 'Consistency',
      strength: 'Strength gain',
      progress: 'Progress',
      weight: 'Weight',
      volume: 'Volume',
      records: 'Best records',
      heat: 'Last 16 weeks',
      level: 'Level',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      daysLong: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      kg: 'kg',
      ton: 'ton',
      today: 'Today',
      yesterday: 'Yesterday',
      daysAgo: (n) => `${n} days ago`,
      weekAgo: '1 week ago',
      sameAsLast: 'Same as last month',
      monthCompare: 'Compared to last month',
      sinceFirst: 'Total, since the first week',
      last30: 'last 30 days',
      inDays: (n) => `in ${n} days`,
      singleMeasure: 'Single measurement',
      noProgress: 'No gain yet',
      emptyWeight: 'No weight yet. Your chart appears once you add your first weight.',
      emptyChart: 'No data yet. Your chart appears once you add your first weight.',
      emptyVolume: 'No volume data yet. Your chart appears after your first workout.',
      emptyConsistency: 'No workouts yet. Log your first workout to start building consistency.',
      emptyStrength: 'No strength data yet. Your gains appear as you log exercises.',
      emptyRecords: 'No records yet. Your first workout will show up here.',
      emptyHeat: 'No workouts in the last 16 weeks. Your first workout starts filling the map.',
      addWeight: 'Add weight',
      addWorkout: 'Add workout',
      logWorkout: 'Log workout',
      muscle: 'muscle map',
      mapLabel: 'Worked muscle map',
      front: 'Front',
      back: 'Back',
      viewLabel: 'View',
      sets: 'sets',
      workoutCount: (n) => `${n} workouts`,
      progressPoints: (n) => `${n} entries`,
      firstRecord: 'First entry',
      noData: 'No data',
      muscleNames: {
        chest: 'Chest',
        delt: 'Shoulder',
        tri: 'Triceps',
        bi: 'Biceps',
        fore: 'Forearm',
        abs: 'Abs',
        obl: 'Obliques',
        quad: 'Quads',
        calf: 'Calves',
        trap: 'Traps',
        lat: 'Back',
        low: 'Lower back',
        glute: 'Glutes',
        ham: 'Hamstrings'
      },
      program: {
        day1: { title: ['Upper body', 'push'], focus: 'Chest, shoulders and triceps' },
        day2: { title: ['Back', 'pull'], focus: 'Back, biceps and traps' },
        day3: { title: ['Legs', '+ core'], focus: 'Quads, hamstrings, glutes and core' },
        day4: { title: ['Upper body', 'full'], focus: 'Shoulders, back, chest and arms' },
        day5: { title: ['Lower body', '+ core'], focus: 'Glutes, hamstrings, calves and core' }
      }
    }
  };

  Z.lang = function () {
    try {
      return typeof currentLang !== 'undefined' && currentLang === 'tr' ? 'tr' : 'en';
    } catch (e) {
      return 'en';
    }
  };
  Z.str = function () { return Z.STR[Z.lang()]; };
  Z.locale = function () { return Z.lang() === 'tr' ? 'tr-TR' : 'en-US'; };

  Z.num = function (value, dec) {
    const d = dec || 0;
    const s = Math.abs(Number(value) || 0).toFixed(d);
    return (Z.lang() === 'tr' ? s.replace('.', ',') : s);
  };
  Z.signed = function (value, dec) {
    const n = Number(value) || 0;
    if (Math.abs(n) < 0.0001) return Z.num(0, dec);
    return (n > 0 ? '+' : '−') + Z.num(n, dec);
  };
  Z.int = function (value) {
    return (Number(value) || 0).toLocaleString(Z.locale());
  };

  Z.ymd = function (date) {
    if (typeof dateStr === 'function') return dateStr(date);
    const off = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - off).toISOString().split('T')[0];
  };
  Z.today = function () { return Z.ymd(new Date()); };
  Z.monday = function (date) {
    if (typeof getMonday === 'function') return getMonday(date);
    const d = new Date(date);
    const day = d.getDay() || 7;
    d.setDate(d.getDate() - (day - 1));
    d.setHours(0, 0, 0, 0);
    return d;
  };
  Z.addDays = function (date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
  };
  Z.dayDiff = function (a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  };
  Z.fmtDate = function (date, opts) {
    try {
      return new Date(date + 'T00:00:00').toLocaleDateString(Z.locale(), opts || { day: 'numeric', month: 'long' });
    } catch (e) { return ''; }
  };

  Z.parseSets = function (raw) {
    const m = String(raw == null ? '' : raw).match(/(\d+)/);
    const n = m ? parseInt(m[1], 10) : 1;
    return n > 0 ? n : 1;
  };

  Z.titleCase = function (text) {
    const t = String(text || '');
    if (!t) return t;
    return t.charAt(0).toLocaleUpperCase(Z.locale()) + t.slice(1);
  };
  Z.lower = function (text) {
    return String(text || '').toLocaleLowerCase(Z.locale());
  };
})();
