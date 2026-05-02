/* ===========================
   Zyro — Dashboard V2
   i18n, Firebase Auth, Routing, Logging, Charts
   =========================== */

// Global Error Handler for better debugging
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Global Error Detected:', { message, source, lineno, colno, error });
  // You could optionally show a toast or notification to the user here
  return false;
};

// =============================================
// TRANSLATIONS
// =============================================
const I18N = {
  en: {
    authSubtitle: 'Personal Development Dashboard',
    signInGoogle: 'Sign in with Google',
    continueWithout: 'Continue without account',
    authNote: 'Sign in to sync your data across devices',
    navDashboard: 'Dashboard',
    navWorkouts: 'Workouts',
    navProgress: 'Progress',
    navNotes: 'Notes',
    navComments: 'Comments',
    navPosture: 'Posture',
    navCalculators: 'Calculators',
    navWupard: 'WFIT',
    thisWeek: 'This Week',
    dailyPosture: 'Daily Posture',
    postureProgram: 'Posture Program',
    weeklyWorkouts: 'Weekly Workouts',
    currentWeight: 'Current Weight',
    totalVolume: 'Total Volume (kg)',
    consistency: 'Consistency',
    muscleMap: 'Muscle Map',
    intensity: 'Intensity',
    lowVolume: 'Low volume',
    medVolume: 'Medium volume',
    highVolume: 'High volume',
    notTrained: 'Not trained',
    progressOverview: 'Progress Overview',
    weight: 'Weight',
    volume: 'Volume',
    workoutProgram: 'Workout Program',
    exercise: 'Exercise',
    setsReps: 'Sets × Reps',
    weightLabel: 'Weight',
    done: 'Done',
    logExercise: 'Log Exercise',
    logSubtitle: 'Record what you actually did today',
    weightKg: 'Weight (kg)',
    saveLog: 'Save Log',
    todaysLog: "Today's Log",
    today: 'Today',
    noExercisesLogged: 'No exercises logged yet today.',
    progressTracking: 'Progress Tracking',
    bodyWeight: 'Body Weight',
    log: 'Log',
    strengthProgress: 'Strength Progress',
    totalVolumeWeek: 'Total Volume per Week',
    personalRecords: 'Personal Records',
    maxWeight: 'Max Weight',
    bestReps: 'Best Reps',
    date: 'Date',
    dailyNotes: 'Daily Notes',
    todaysEntry: "Today's Entry",
    saveNote: 'Save Note',
    pastEntries: 'Past Entries',
    noNotes: 'No notes yet. Start journaling!',
    noData: 'No data yet',
    noPRs: 'Log exercises to see your PRs here.',
    weeklyVolume: 'Weekly Volume',
    noWorkoutsWeek: 'No workouts logged this week yet.',
    selectExercise: 'Select exercise...',
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    goodNight: 'Good night',
    synced: '● Synced',
    localMode: '● Local Mode',
    notePlaceholder: 'How was your day? What did you learn? How do you feel?...',
    calc1RM: 'Calculate 1RM',
    calcConverter: 'Unit Converter',
    calcBfp: 'Body Fat',
    calcGrowth: 'Growth',
    calcMacros: 'Macros/Calories',
    catAll: 'All (Full Body)',
    catLegs: 'Legs & Glutes',
    catChest: 'Chest',
    catBack: 'Back & Lats',
    catShoulders: 'Shoulders',
    catArms: 'Arms',
    catCore: 'Core & Abs',
    lblCategory: 'Category',
    repetitions: 'Reps',
    sets: 'Sets',
    achievements: 'Achievements',
    beforeAfter: 'Before/After'
  },
  tr: {
    authSubtitle: 'Kişisel Gelişim Paneli',
    signInGoogle: 'Google ile Giriş Yap',
    continueWithout: 'Hesap olmadan devam et',
    authNote: 'Verilerinizi cihazlar arasında senkronize etmek için giriş yapın',
    navDashboard: 'Ana Sayfa',
    navWorkouts: 'Antrenman',
    navProgress: 'İlerleme',
    navNotes: 'Notlar',
    navComments: 'Yorumlar',
    navPosture: 'Postür',
    navCalculators: 'Hesaplayıcılar',
    navWupard: 'WFIT',
    thisWeek: 'Bu Hafta',
    dailyPosture: 'Günlük Postür',
    postureProgram: 'Postür Programı',
    weeklyWorkouts: 'Haftalık Antrenman',
    currentWeight: 'Mevcut Kilo',
    totalVolume: 'Toplam Hacim (kg)',
    consistency: 'Tutarlılık',
    muscleMap: 'Kas Haritası',
    intensity: 'Yoğunluk',
    lowVolume: 'Düşük hacim',
    medVolume: 'Orta hacim',
    highVolume: 'Yüksek hacim',
    notTrained: 'Çalışılmadı',
    progressOverview: 'İlerleme Özeti',
    weight: 'Kilo',
    volume: 'Hacim',
    workoutProgram: 'Antrenman Programı',
    exercise: 'Egzersiz',
    setsReps: 'Set × Tekrar',
    weightLabel: 'Ağırlık',
    done: 'Tamam',
    logExercise: 'Egzersiz Kaydet',
    logSubtitle: 'Bugün gerçekte ne yaptığını kaydet',
    weightKg: 'Ağırlık (kg)',
    saveLog: 'Kaydet',
    todaysLog: 'Bugünkü Kayıt',
    today: 'Bugün',
    noExercisesLogged: 'Bugün henüz egzersiz kaydedilmedi.',
    progressTracking: 'İlerleme Takibi',
    bodyWeight: 'Vücut Ağırlığı',
    log: 'Kaydet',
    strengthProgress: 'Güç İlerlemesi',
    totalVolumeWeek: 'Haftalık Toplam Hacim',
    personalRecords: 'Kişisel Rekorlar',
    maxWeight: 'Maks Ağırlık',
    bestReps: 'En İyi Tekrar',
    date: 'Tarih',
    dailyNotes: 'Günlük Notlar',
    todaysEntry: 'Bugünkü Giriş',
    saveNote: 'Notu Kaydet',
    pastEntries: 'Geçmiş Girişler',
    noNotes: 'Henüz not yok. Günlük tutmaya başla!',
    noData: 'Henüz veri yok',
    noPRs: 'Rekorlarınızı görmek için egzersiz kaydedin.',
    weeklyVolume: 'Haftalık Hacim',
    noWorkoutsWeek: 'Bu hafta henüz antrenman kaydedilmedi.',
    selectExercise: 'Egzersiz seçin...',
    goodMorning: 'Günaydın',
    goodAfternoon: 'İyi öğleden sonralar',
    goodEvening: 'İyi akşamlar',
    goodNight: 'İyi geceler',
    synced: '● Senkronize',
    localMode: '● Yerel Mod',
    notePlaceholder: 'Günün nasıldı? Ne öğrendin? Nasıl hissediyorsun?...',
    calc1RM: '1RM Hesapla',
    calcConverter: 'Birim Dönüştürücü',
    calcBfp: 'Yağ Oranı',
    calcGrowth: 'Gelişim',
    calcMacros: 'Makro/Kalori',
    catAll: 'Tümü (Tüm Vücut)',
    catLegs: 'Bacak & Kalça',
    catChest: 'Göğüs',
    catBack: 'Sırt & Kanat',
    catShoulders: 'Omuz',
    catArms: 'Kollar',
    catCore: 'Karın & Merkez',
    lblCategory: 'Kategori',
    repetitions: 'Tekrar',
    sets: 'Set',
    achievements: 'Başarımlar',
    beforeAfter: 'Gelişim Fotoğrafları',
    // Posture Exercises
    'Warm-up: Light shoulder circles': 'Isınma: Hafif omuz daireleri ve kafa hareketleri',
    'Y-T-W Raises': 'Y-T-W Raises',
    'Wall Angels': 'Wall Angels',
    'Chin Tuck & Neck Nod': 'Chin Tuck & Neck Nod',
    'Doorway Stretch': 'Doorway Stretch',
    'Thoracic Extension': 'Thoracic Extension',
    'Wrist Stretch': 'Wrist Stretch',
    'Warm-up: Marching in place / walking': 'Isınma: Marching in place / walking',
    'Cat-Cow': 'Cat-Cow',
    'Pelvic Tilt + Deadbug': 'Pelvic Tilt + Deadbug',
    'Glute Bridge': 'Glute Bridge',
    'Kneeling Hip Flexor Stretch': 'Kneeling Hip Flexor Stretch',
    'Active Plank': 'Active Plank',
    'Clamshell & Side-Lying Hip Abduction': 'Clamshell & Side-Lying Hip Abduction',
    'Towel Curls & Short Foot': 'Towel Curls & Short Foot',
    // Posture Sets
    '5 min': '5 dk',
    '10 reps per letter (2s hold)': 'Her harf 10 tekrar (2 sn beklemeli)',
    '15 reps': '15 tekrar',
    '10 reps each (5s hold)': "10'ar tekrar (5 sn beklemeli)",
    '3 sets x 30 sec': '3 set x 30 sn',
    '2 sets x 60 sec': '2 set x 60 sn',
    '2 sets x 30 sec': '2 set x 30 sn',
    '12 reps': '12 tekrar',
    '20 slow reps': '20 yavaş tekrar',
    '3 sets x 15 reps': '3 set x 15 tekrar',
    '30 sec each side': 'Her taraf 30 sn',
    '3 sets x 30-45 sec': '3 set x 30-45 sn',
    '20 reps each': '20\'şer tekrar',
    '15 rounds / 12 reps': '15 tur / 12 tekrar',
    '30 sec': '30 sn',
    '60 sec': '60 sn',
    '10 reps': '10 tekrar',
  }
};

let currentLang = localStorage.getItem('zyro_lang') || 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });
  // Placeholders
  const noteInput = document.getElementById('noteInput');
  if (noteInput) noteInput.placeholder = t('notePlaceholder');
  const logEx = document.getElementById('logExercise');
  if (logEx && logEx.options[0]) logEx.options[0].text = t('selectExercise');
  // Greeting
  setGreeting();
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('zyro_lang', currentLang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTranslations();
      // Re-render dynamic content
      renderAttendance();
      if (currentPage === 'posture') { renderPosture(currentPostureTab); }
      updateMuscleMap();
    });
  });
}

// =============================================
// DATA
// =============================================
const DAYS_EN = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const DAYS_TR = ['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'];

const EXERCISE_MUSCLES = {
  // Göğüs
  'Barbell Bench Press': ['chest', 'triceps'],
  'İncline Bench Press': ['chest', 'triceps'],
  'Upper-lower Cable crossover': ['chest'],
  
  // Omuz
  'Cable Shoulder': ['shoulders', 'triceps'],
  'Face Pull': ['shoulders', 'traps'],
  'Seated Dumbbell Rear Delt Fly': ['shoulders', 'traps'],
  
  // Sırt — Sırt egzersizleri sadece traps/lats'ı primary gösterir; biceps secondary sayılmaz
  'Lat Pulldown': ['traps'],
  'Close-Grip V-Bar Pulldown': ['traps'],
  'Seated Row Machine': ['traps'],
  'Smith Machine Shrug': ['traps'],
  'DB Shrug': ['traps'],
  
  // Bacak
  'Squat': ['quads', 'glutes', 'traps'],
  'Romanian Deadlift': ['glutes', 'traps'],
  'Farmers Walk': ['forearms', 'traps', 'core'],
  'Hip Abductor Machines': ['glutes'],
  'Standing Calf Raise': ['calves'],
  
  // Kol & Bilek
  'Seated DB Biceps Curl': ['biceps'],
  'Cross-Body Hammer Curl': ['biceps', 'forearms'],
  'Single-Arm DB Preacher Curl': ['biceps'],
  'V-Bar Triceps Pushdown': ['triceps'],
  'Single-Arm Cable Reverse Pushdown': ['triceps'],
  'Skull Crusher': ['triceps'],
  'Overhead DB Triceps Extension': ['triceps'],
  'Yusuf\'s Forearm Exercise': ['forearms'],
  'Z-Bar Reverse Curl': ['biceps', 'forearms'],
  'Classic Forearm Exercises': ['forearms'],
  
  // Karın & Core
  'Straight Bar Cable Crunch': ['abs'],
  'Sit-up': ['abs'],
  'Reverse Crunch': ['abs'],
  'Russian twist': ['obliques', 'abs'],
};
const ALL_EXERCISES = Object.keys(EXERCISE_MUSCLES).sort();

// =============================================
// GLOBAL EXERCISE CATEGORIES
// =============================================
const EXERCISE_CATEGORIES = {
  'chest': ['Barbell Bench Press', 'İncline Bench Press', 'Upper-lower Cable crossover'],
  'shoulders': ['Cable Shoulder', 'Face Pull', 'Seated Dumbbell Rear Delt Fly', 'Smith Machine Shrug', 'DB Shrug'],
  'back': ['Lat Pulldown', 'Close-Grip V-Bar Pulldown', 'Seated Row Machine'],
  'legs': ['Squat', 'Romanian Deadlift', 'Farmers Walk', 'Hip Abductor Machines', 'Standing Calf Raise'],
  'arms': ['Seated DB Biceps Curl', 'Cross-Body Hammer Curl', 'Single-Arm DB Preacher Curl', 'V-Bar Triceps Pushdown', 'Single-Arm Cable Reverse Pushdown', 'Skull Crusher', 'Overhead DB Triceps Extension', 'Yusuf\'s Forearm Exercise', 'Z-Bar Reverse Curl', 'Classic Forearm Exercises'],
  'core': ['Straight Bar Cable Crunch', 'Sit-up', 'Reverse Crunch', 'Russian twist']
};

const RANKS = {
  'mod': { label: 'MOD', color: '#FFD700', bg: 'rgba(255, 215, 0, 0.15)', canAdmin: true },
  'special': { label: 'SPECIAL', color: '#A855F7', bg: 'rgba(168, 85, 247, 0.15)', canAdmin: false },
  'premium': { label: 'PREMIUM', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)', canAdmin: false },
  'member': { label: 'MEMBER', color: '#22C55E', bg: 'rgba(34, 197, 94, 0.15)', canAdmin: false },
  'mal': { label: 'MAL', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)', canAdmin: false },
  'default': { label: 'USER', color: '#94A3B8', bg: 'rgba(148, 163, 184, 0.1)', canAdmin: false }
};

const CATEGORY_ICONS = {
  'chest':     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  'shoulders': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
  'back':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  'legs':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4v16M18 4v16M6 12h12"/></svg>',
  'arms':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>',
  'core':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>'
};

const DEFAULT_PROGRAMS = {
  day1: [
    {name:'Barbell Bench Press',sets:'3×8-10',weight:'-'},
    {name:'İncline Bench Press',sets:'3×10-12',weight:'-'},
    {name:'Upper-lower Cable crossover',sets:'3×12-15',weight:'-'},
    {name:'Cable Shoulder',sets:'3×10-12',weight:'-'},
    {name:'Face Pull',sets:'3×15',weight:'-'},
    {name:'Seated Dumbbell Rear Delt Fly',sets:'3×15',weight:'-'},
    {name:'Seated DB Biceps Curl',sets:'3×10-12',weight:'-'},
    {name:'Cross-Body Hammer Curl',sets:'3×10-12',weight:'-'},
    {name:'Single-Arm DB Preacher Curl',sets:'3×12-15',weight:'-'},
  ],
  day2: [
    {name:'Lat Pulldown',sets:'3×8-12',weight:'-'},
    {name:'Close-Grip V-Bar Pulldown',sets:'3×10-12',weight:'-'},
    {name:'Seated Row Machine',sets:'3×10-12',weight:'-'},
    {name:'V-Bar Triceps Pushdown',sets:'3×12-15',weight:'-'},
    {name:'Single-Arm Cable Reverse Pushdown',sets:'3×12-15',weight:'-'},
    {name:'Skull Crusher',sets:'3×10-12',weight:'-'},
    {name:'Overhead DB Triceps Extension',sets:'3×12-15',weight:'-'},
    {name:'Yusuf\'s Forearm Exercise',sets:'3×Maks',weight:'-'},
    {name:'Z-Bar Reverse Curl',sets:'3×12-15',weight:'-'},
    {name:'Classic Forearm Exercises',sets:'3×15',weight:'-'},
  ],
  day3: [
    {name:'Squat',sets:'3×8-10',weight:'-'},
    {name:'Romanian Deadlift',sets:'3×10-12',weight:'-'},
    {name:'Farmers Walk',sets:'3×Maks',weight:'-'},
    {name:'Hip Abductor Machines',sets:'3×15',weight:'-'},
    {name:'Standing Calf Raise',sets:'4×15-20',weight:'-'},
    {name:'Smith Machine Shrug',sets:'4×10-12',weight:'-'},
    {name:'DB Shrug',sets:'4×10-12',weight:'-'},
    {name:'Straight Bar Cable Crunch',sets:'3×15-20',weight:'-'},
    {name:'Sit-up',sets:'3×20',weight:'-'},
    {name:'Reverse Crunch',sets:'3×20',weight:'-'},
    {name:'Russian twist',sets:'3×20',weight:'-'},
    {name:'Yusuf\'s Forearm Exercise',sets:'3×Maks',weight:'-'},
    {name:'Z-Bar Reverse Curl',sets:'3×12-15',weight:'-'},
    {name:'Classic Forearm Exercises',sets:'3×15',weight:'-'},
  ],
};

// =============================================
// POSTURE VIDEO URLS
// =============================================
const POSTURE_VIDEO_URLS = {
  'Warm-up: Light shoulder circles': 'https://www.youtube.com/watch?v=-dXpizOGkxI',
  'Y-T-W Raises': 'https://www.youtube.com/watch?v=0pq5oFywQDc',
  'Wall Angels': 'https://www.youtube.com/watch?v=XdCsMsaY90k',
  'Chin Tuck & Neck Nod': 'https://www.youtube.com/watch?v=kaplx1ocaw8',
  'Doorway Stretch': 'https://www.youtube.com/watch?v=kXgmUP81c6U',
  'Thoracic Extension': 'https://www.youtube.com/watch?v=1uFnObPDZz0',
  'Wrist Stretch': 'https://www.youtube.com/watch?v=xiRFZD7eh4U',
  'Warm-up: Marching in place / walking': 'https://www.youtube.com/watch?v=tM6hPeF7O4I',
  'Cat-Cow': 'https://www.youtube.com/watch?v=lgFQUsbpF6I',
  'Pelvic Tilt + Deadbug': 'https://www.youtube.com/watch?v=zd160L4tPPs',
  'Glute Bridge': 'https://www.youtube.com/watch?v=R1OXPHRqehw',
  'Kneeling Hip Flexor Stretch': 'https://www.youtube.com/watch?v=8kfH_OhZNAg',
  'Active Plank': 'https://www.youtube.com/watch?v=7m3DGFtS3yA',
  'Clamshell & Side-Lying Hip Abduction': 'https://www.youtube.com/watch?v=d6mS1WUnvOw',
  'Towel Curls & Short Foot': 'https://www.youtube.com/watch?v=kemS6qku8d0',
};

// =============================================
// WORKOUT VIDEO URLS
// =============================================
const WORKOUT_VIDEO_URLS = {
  // Salı: Göğüs-Omuz-Biceps
  'Barbell Bench Press': 'https://www.youtube.com/shorts/ZR1i47nkH9c',
  'İncline Bench Press': 'https://www.youtube.com/shorts/98HWfiRonkE',
  'Upper-lower Cable crossover': 'https://m.youtube.com/shorts/LCgCPxcUIOM',
  'Cable Shoulder': 'https://www.youtube.com/shorts/6wHaXpM6JgE',
  'Face Pull': 'https://www.youtube.com/shorts/7kXfVIwmfwE',
  'Seated Dumbbell Rear Delt Fly': 'https://www.youtube.com/watch?v=d_feFQGGVh4',
  'Seated DB Biceps Curl': 'https://www.youtube.com/watch?v=aez76Uo6xkA',
  'Cross-Body Hammer Curl': 'https://www.youtube.com/shorts/7HkJh-OBA0s',
  'Single-Arm DB Preacher Curl': 'https://m.youtube.com/shorts/-CJEoRtcyHc',

  // Perşembe: Sırt-Triceps-Bilek
  'Lat Pulldown': 'https://www.youtube.com/shorts/8kgs9hrgNks',
  'Close-Grip V-Bar Pulldown': 'https://www.youtube.com/shorts/wrt5Y25QbH4',
  'Seated Row Machine': 'https://www.youtube.com/shorts/DHA7QGDa2qg',
  'V-Bar Triceps Pushdown': 'https://www.youtube.com/shorts/8xT4OwwiACQ',
  'Single-Arm Cable Reverse Pushdown': 'https://www.youtube.com/watch?v=AzxlbXEDMq4',
  'Skull Crusher': 'https://www.youtube.com/shorts/u3W3uE5F-ig',
  'Overhead DB Triceps Extension': 'https://m.youtube.com/channel/UCcoCfmrZG4f_QRnGXf09NuQ/videos?view=0&sort=dd&shelf_id=0',
  'Yusuf\'s Forearm Exercise': 'https://www.youtube.com/shorts/SDHjq-okXYk',
  'Z-Bar Reverse Curl': 'https://m.youtube.com/shorts/VMda3081JI8',
  'Classic Forearm Exercises': 'https://www.youtube.com/watch?v=sOlAqdzsomM',

  // Cumartesi: Bacak-Trapez-Core-Bilek
  'Squat': 'https://www.youtube.com/watch?v=-_bBA1bHc9M',
  'Romanian Deadlift': 'https://www.youtube.com/shorts/LJAnNYPex6Y',
  'Farmers Walk': 'https://www.youtube.com/shorts/1uOs1hP3u4A',
  'Hip Abductor Machines': 'https://www.youtube.com/shorts/kbk2E1ziO8Q',
  'Standing Calf Raise': 'https://www.youtube.com/shorts/FmJKR_fGDz8',
  'Smith Machine Shrug': 'https://www.youtube.com/shorts/_beyMmxuNwk',
  'DB Shrug': 'https://www.youtube.com/shorts/zhnJErrN6FU',
  'Straight Bar Cable Crunch': 'https://www.youtube.com/watch?v=rRC3iZorDC8',
  'Sit-up': 'https://www.youtube.com/shorts/q5EOcLVXwZ8',
  'Reverse Crunch': 'https://www.youtube.com/shorts/OaUHOeCq3Po',
  'Russian twist': 'https://www.youtube.com/shorts/KUsvxlmpPoI',
};

const DEFAULT_POSTURE_PROGRAMS = {
  mon: [
    {name:'Warm-up: Light shoulder circles',sets:'5 min',done:false},
    {name:'Y-T-W Raises',sets:'10 reps per letter (2s hold)',done:false},
    {name:'Wall Angels',sets:'15 reps',done:false},
    {name:'Chin Tuck & Neck Nod',sets:'10 reps each (5s hold)',done:false},
    {name:'Doorway Stretch',sets:'3 sets x 30 sec',done:false},
    {name:'Thoracic Extension',sets:'2 sets x 60 sec',done:false},
    {name:'Wrist Stretch',sets:'2 sets x 30 sec',done:false},
  ],
  tue: [
    {name:'Warm-up: Marching in place / walking',sets:'5 min',done:false},
    {name:'Cat-Cow',sets:'12 reps',done:false},
    {name:'Pelvic Tilt + Deadbug',sets:'20 slow reps',done:false},
    {name:'Glute Bridge',sets:'3 sets x 15 reps',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'30 sec each side',done:false},
    {name:'Active Plank',sets:'3 sets x 30-45 sec',done:false},
    {name:'Clamshell & Side-Lying Hip Abduction',sets:'20 reps each',done:false},
    {name:'Towel Curls & Short Foot',sets:'15 rounds / 12 reps',done:false},
  ],
  wed: [
    {name:'Warm-up: Light shoulder circles',sets:'5 min',done:false},
    {name:'Y-T-W Raises',sets:'10 reps per letter (2s hold)',done:false},
    {name:'Wall Angels',sets:'15 reps',done:false},
    {name:'Chin Tuck & Neck Nod',sets:'10 reps each (5s hold)',done:false},
    {name:'Doorway Stretch',sets:'3 sets x 30 sec',done:false},
    {name:'Thoracic Extension',sets:'2 sets x 60 sec',done:false},
    {name:'Wrist Stretch',sets:'2 sets x 30 sec',done:false},
  ],
  thu: [
    {name:'Warm-up: Marching in place / walking',sets:'5 min',done:false},
    {name:'Cat-Cow',sets:'12 reps',done:false},
    {name:'Pelvic Tilt + Deadbug',sets:'20 slow reps',done:false},
    {name:'Glute Bridge',sets:'3 sets x 15 reps',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'30 sec each side',done:false},
    {name:'Active Plank',sets:'3 sets x 30-45 sec',done:false},
    {name:'Clamshell & Side-Lying Hip Abduction',sets:'20 reps each',done:false},
    {name:'Towel Curls & Short Foot',sets:'15 rounds / 12 reps',done:false},
  ],
  fri: [
    {name:'Warm-up: Light shoulder circles',sets:'5 min',done:false},
    {name:'Y-T-W Raises',sets:'10 reps per letter (2s hold)',done:false},
    {name:'Wall Angels',sets:'15 reps',done:false},
    {name:'Chin Tuck & Neck Nod',sets:'10 reps each (5s hold)',done:false},
    {name:'Doorway Stretch',sets:'3 sets x 30 sec',done:false},
    {name:'Thoracic Extension',sets:'2 sets x 60 sec',done:false},
    {name:'Wrist Stretch',sets:'2 sets x 30 sec',done:false},
  ],
  sat: [
    {name:'Warm-up: Marching in place / walking',sets:'5 min',done:false},
    {name:'Cat-Cow',sets:'12 reps',done:false},
    {name:'Pelvic Tilt + Deadbug',sets:'20 slow reps',done:false},
    {name:'Glute Bridge',sets:'3 sets x 15 reps',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'30 sec each side',done:false},
    {name:'Active Plank',sets:'3 sets x 30-45 sec',done:false},
    {name:'Clamshell & Side-Lying Hip Abduction',sets:'20 reps each',done:false},
    {name:'Towel Curls & Short Foot',sets:'15 rounds / 12 reps',done:false},
  ],
  sun: [
    {name:'Doorway Stretch',sets:'30 sec',done:false},
    {name:'Thoracic Extension',sets:'60 sec',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'30 sec',done:false},
    {name:'Wrist Stretch',sets:'30 sec',done:false},
    {name:'Cat-Cow',sets:'10 reps',done:false},
  ]
};

// =============================================
// STATE
// =============================================
let currentUser = null;
let currentPage = 'dashboard';
let currentWorkoutTab = 'day1';
let currentPostureTab = 'mon';
let currentChartType = 'weight';
let attendanceWeekOffset = 0;

let appData = {
  workoutLogs:{},
  attendance:{},
  notes:{},
  weightLog:{},
  programs:null,
  posturePrograms:null,
  completedDays:{},
  streak:0,
  userRank: 'default',
  achievements: {},
  progressImages: [],
  weeklyGoal: 0
};

// =============================================
// UTILITIES
// =============================================
function todayStr(){ return dateStr(new Date()); }
function dateStr(d){ 
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().split('T')[0];
}
function getMonday(d){const date=new Date(d);const day=date.getDay();const diff=date.getDate()-day+(day===0?-6:1);return new Date(date.setDate(diff))}
function formatDate(d){return d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{month:'short',day:'numeric'})}
function formatDateLong(d){return d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}

// =============================================
// DATA PERSISTENCE
// =============================================
function saveData(){
  if(isFirebaseConfigured&&currentUser&&db){
    db.collection('users').doc(currentUser.uid).set({
      data:appData,
      email: currentUser.email || '',
      displayName: currentUser.displayName || '',
      photoURL: currentUser.photoURL || ''
    },{merge:true}).catch(e=>console.error('Save:',e));
  }
  localStorage.setItem('zyro_data',JSON.stringify(appData));
}

const CURRENT_PROGRAM_VERSION = 10; // Force full cache reset and clear notes

function enforceVersion() {
  if(appData.programVersion !== CURRENT_PROGRAM_VERSION) {
    appData.programs = null;
    appData.posturePrograms = null;
    appData.notes = {};
    appData.programVersion = CURRENT_PROGRAM_VERSION;
    saveData();
  }
}

let isDataSyncing = false;
function loadData(cb){
  const local=localStorage.getItem('zyro_data');
  if(local){try{appData={...appData,...JSON.parse(local)}}catch(e){}}
  
  enforceVersion();

  if(isFirebaseConfigured && currentUser && db){
    if (isDataSyncing) { if(cb) cb(); return; }
    isDataSyncing = true;
    const docRef = db.collection('users').doc(currentUser.uid);
    // Realtime listen: Server is the MASTER truth
    docRef.onSnapshot(snap => {
      if(snap.exists && snap.data().data) {
         // Veriler her zaman sunucudan cihazınıza en güncel haliyle senkronize olur
         // Böylece telefon ile PC birbirini EZMEZ.
         appData = snap.data().data;
         enforceVersion();
         localStorage.setItem('zyro_data', JSON.stringify(appData));
         if(cb) cb();
         refreshAllViews();
      } else {
         // Eğer sunucuda (hesapta) hiç veri yoksa, ilk giriş demektir: Local veriyi sunucuya gönder
         docRef.set({ 
           data: appData,
           email: currentUser.email || '',
           displayName: currentUser.displayName || '',
           photoURL: currentUser.photoURL || ''
         }, { merge: true });
         if(cb) cb();
         refreshAllViews();
      }
    }, err => {
      console.error("Firebase Sync Error:", err);
      if(cb) cb();
    });
  } else {
    if(cb) cb();
  }
}

// =============================================
// AUTH
// =============================================
function initAuth(){
  const overlay=document.getElementById('authOverlay');
  const googleBtn=document.getElementById('googleSignInBtn');
  const skipBtn=document.getElementById('skipAuthBtn');

  // Check if Firebase auth is initialized
  if(window.isFirebaseConfigured && window.auth){
    // Listen for auth state changes
    window.auth.onAuthStateChanged(user=>{
      if(user){
        console.log('User signed in:', user.email);
        currentUser=user;
        overlay.classList.add('hidden');
        updateUserUI(user);
        // Ensure backend always has latest auth data
        db.collection('users').doc(user.uid).set({
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || ''
        }, { merge: true }).catch(e => console.error('Silent user info update error:', e));
        loadData(()=>refreshAllViews());
      } else {
        console.log('No user signed in');
        overlay.classList.remove('hidden');
      }
    });

    // Handle Redirect Result (for fallback)
    window.auth.getRedirectResult().catch(e => {
      console.error('Redirect Auth Error:', e);
      if (e.code !== 'auth/internal-error') {
        alert('Sign-in failed: ' + e.message);
      }
    });

    googleBtn.addEventListener('click',()=>{
      console.log('Google Sign-In clicked');
      
      if (window.location.protocol === 'file:') {
        alert('Google Sign-in does not work when opening the HTML file directly (file://). Please use a local server (e.g., Live Server in VS Code or "npm start").');
        return;
      }

      if (typeof firebase === 'undefined' || !firebase.auth) {
        alert('Firebase Auth SDK not loaded. Please check your internet connection.');
        return;
      }

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      
      // Try Popup first
      window.auth.signInWithPopup(provider).catch(e=>{
        console.warn('Popup blocked or failed, trying redirect...', e);
        // Fallback to Redirect if Popup fails (common in some browsers)
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/cancelled-popup-request') {
          window.auth.signInWithRedirect(provider);
        } else {
          console.error('Auth Error:', e);
          alert('Sign-in failed: ' + e.message);
        }
      });
    });

    const signOutBtn = document.getElementById('signOutBtn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click',()=>{
        window.auth.signOut().then(() => {
          currentUser=null;
          signOutBtn.style.display='none';
          location.reload(); // Reload to clear states
        });
      });
    }
  } else {
    console.error('Firebase Auth not initialized. Check firebase-config.js');
    googleBtn.addEventListener('click',()=>{
      alert('Firebase not configured correctly. Please check your settings.');
    });
  }

  skipBtn.addEventListener('click',()=>{
    overlay.classList.add('hidden');
    loadData(()=>refreshAllViews());
  });
}

function updateUserUI(user){
  const avatar=document.getElementById('userAvatar');
  const name=document.getElementById('userName');
  const status=document.getElementById('userStatus');
  const signOutBtn=document.getElementById('signOutBtn');

  if(user&&user.photoURL){
    avatar.innerHTML=`<img src="${user.photoURL}" alt="Avatar" referrerpolicy="no-referrer">`;
  } else {
    avatar.textContent=(user&&user.displayName)?user.displayName[0].toUpperCase():'Z';
  }
  name.textContent=(user&&user.displayName)?user.displayName.split(' ')[0]:'User';
  status.textContent=user?t('synced'):t('localMode');
  status.style.color=user?'var(--green-vivid)':'var(--text-tertiary)';
  signOutBtn.style.display=user?'block':'none';

  // Rank Display in Sidebar
  if (user) {
    const rankInfo = document.getElementById('userRankInfo') || document.createElement('div');
    rankInfo.id = 'userRankInfo';
    rankInfo.style.fontSize = '0.65rem';
    rankInfo.style.marginTop = '2px';
    rankInfo.style.fontWeight = '800';
    rankInfo.style.letterSpacing = '0.05em';
    rankInfo.style.display = 'inline-flex';
    rankInfo.style.padding = '2px 6px';
    rankInfo.style.borderRadius = '4px';
    rankInfo.style.marginRight = '6px';
    
    // Get rank from data
    const userRank = appData.userRank || (user.email === 'wupard@gmail.com' ? 'mod' : 'default');
    const rank = RANKS[userRank] || RANKS.default;
    rankInfo.textContent = rank.label;
    rankInfo.style.color = rank.color;
    rankInfo.style.background = rank.bg;
    
    const nameEl = document.getElementById('userName');
    if (nameEl && !document.getElementById('userRankInfo')) {
      nameEl.parentNode.style.display = 'flex';
      nameEl.parentNode.style.alignItems = 'center';
      nameEl.parentNode.insertBefore(rankInfo, nameEl);
    } else if (document.getElementById('userRankInfo')) {
      document.getElementById('userRankInfo').textContent = rank.label;
      document.getElementById('userRankInfo').style.color = rank.color;
      document.getElementById('userRankInfo').style.background = rank.bg;
    }

    // Ban Check
    checkUserBan(user);
  }

  // Admin Check
  const userRank = appData.userRank || (user && user.email === 'wupard@gmail.com' ? 'mod' : 'default');
  const rank = RANKS[userRank] || RANKS.default;
  
  if (user && rank.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += ` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>`;
    }
    renderAdminPanel();
  } else {
    document.body.classList.remove('is-admin');
  }

  // Update current user rank from Firestore in real-time
  if (user && isFirebaseConfigured && db) {
    db.collection('users').doc(user.uid).onSnapshot(snap => {
      if (snap.exists) {
        const userData = snap.data().data || {};
        if (userData.userRank) {
          appData.userRank = userData.userRank;
          const rank = RANKS[userData.userRank] || RANKS.default;
          const rankEl = document.getElementById('userRankInfo');
          if (rankEl) {
            rankEl.textContent = rank.label;
            rankEl.style.color = rank.color;
          }
        }
      }
    });
  }
}

async function checkUserBan(user) {
  if (!isFirebaseConfigured || !db) return;
  
  try {
    const banDoc = await db.collection('bans').doc(user.uid).get();
    let isBanned = false;
    let banData = null;

    if (banDoc.exists) {
      isBanned = true;
      banData = banDoc.data();
    } else {
      // Check IP Ban
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      const ipBanDoc = await db.collection('bans').where('ip', '==', ipData.ip).get();
      if (!ipBanDoc.empty) {
        isBanned = true;
        banData = ipBanDoc.docs[0].data();
      }
    }

    if (isBanned) {
      document.body.innerHTML = `
        <div style="height: 100vh; background: #0d0d12; color: white; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; padding: 20px;">
          <div style="max-width: 500px; padding: 40px; background: #181822; border-radius: 24px; border: 1px solid #ef4444; box-shadow: 0 0 40px rgba(239, 68, 68, 0.2);">
            <div style="font-size: 4rem; margin-bottom: 20px;">🚫</div>
            <h1 style="color: #ef4444; margin-bottom: 16px;">BANLANDINIZ</h1>
            <p style="color: #94a3b8; margin-bottom: 24px;">Sistem kurallarını ihlal ettiğiniz için erişiminiz engellendi.</p>
            <div style="text-align: left; background: rgba(0,0,0,0.2); padding: 20px; border-radius: 12px; font-size: 0.9rem;">
              <div style="margin-bottom: 8px;"><span style="color: #625f7a;">Yetkili:</span> <span style="color: #FFD700; font-weight: bold;">Wupard</span></div>
              <div style="margin-bottom: 8px;"><span style="color: #625f7a;">Sebep:</span> ${banData.reason || 'Kural ihlali'}</div>
              <div><span style="color: #625f7a;">Süre:</span> ${banData.duration || 'Süresiz'}</div>
            </div>
            <button onclick="location.reload()" style="margin-top: 32px; padding: 12px 24px; background: #3d3d52; color: white; border: none; border-radius: 12px; cursor: pointer;">Yeniden Dene</button>
          </div>
        </div>
      `;
    }
  } catch (e) {
    console.error('Ban Check Error:', e);
  }
}

// =============================================
// NAVIGATION
// =============================================
function navigateTo(page){
  currentPage=page;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const nav=document.querySelector(`.nav-item[data-page="${page}"]`);
  if(nav)nav.classList.add('active');
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.querySelector(`.page[data-page="${page}"]`);
  if(pg)pg.classList.add('active');

  if(page==='dashboard')refreshDashboard();
  else if(page==='workouts'){renderWorkout(currentWorkoutTab);renderLoggedExercises()}
  else if(page==='posture'){renderPosture(currentPostureTab)}
  else if(page==='progress')setTimeout(()=>{drawWeightChart();renderProgressTracker();renderPRTable();renderMonthlyTracker();},50);
  else if(page==='notes')renderNotes();
  else if(page==='comments')renderComments();
  else if(page==='beforeafter'){
    renderProgressPhotos();
    renderPRTable();
    renderBodyMeasurements();
    const df = document.getElementById('measFormDate');
    if (df && !df.value) df.value = todayStr();
    const pf = document.getElementById('photoDate');
    if (pf && !pf.value) pf.value = todayStr();
  }
  else if(page==='achievements')renderAchievements();
  else if(page==='profile')renderProfilePage();

  if(window.innerWidth<=768)document.getElementById('sidebar').classList.remove('open');
}

function initNav(){
  if(localStorage.getItem('zyro_sidebar_collapsed')==='true'){
    document.body.classList.add('sidebar-collapsed');
  }
  const collapseBtn=document.getElementById('sidebarCollapseBtn');
  if(collapseBtn){
    collapseBtn.addEventListener('click',()=>{
      document.body.classList.toggle('sidebar-collapsed');
      localStorage.setItem('zyro_sidebar_collapsed',document.body.classList.contains('sidebar-collapsed'));
      setTimeout(()=>{if(currentPage==='dashboard')drawDashboardChart();else if(currentPage==='progress'){drawWeightChart();drawStrengthChart()}},350);
    });
  }
  document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('click',e=>{
      if(!item.dataset.page) return;
      e.preventDefault();
      navigateTo(item.dataset.page);
    });
  });
  document.getElementById('menuToggle').addEventListener('click',()=>{
    document.getElementById('sidebar').classList.toggle('open');
  });
  document.addEventListener('click',e=>{
    const sb=document.getElementById('sidebar');const tg=document.getElementById('menuToggle');
    if(window.innerWidth<=768&&!sb.contains(e.target)&&!tg.contains(e.target))sb.classList.remove('open');
  });
  initGestures();
}

function goToStrengthProgress() {
  navigateTo('progress');
  setTimeout(() => {
    const card = document.getElementById('progressTrackerCard');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add a subtle flash animation to draw attention
      card.style.transition = 'box-shadow 0.3s ease';
      card.style.boxShadow = '0 0 20px rgba(139, 124, 247, 0.4)';
      setTimeout(() => {
        card.style.boxShadow = '';
      }, 1500);
    }
  }, 100);
}

// =============================================
// GESTURE HANDLER (Swipe to open sidebar)
// =============================================
function initGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const minDistance = 70; // Minimum distance for swipe
  const maxVerticalDistance = 100; // Ignore if heavy vertical scroll

  const handleGesture = () => {
    const dx = touchEndX - touchStartX;
    const dy = Math.abs(touchEndY - touchStartY);

    if (dy > maxVerticalDistance) return;

    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
      if (dx > minDistance && !sidebar.classList.contains('open')) {
        // Open if swiped right anywhere on the screen
        sidebar.classList.add('open');
      } else if (dx < -minDistance && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  };

  document.addEventListener('touchstart', e => {
    // Check if the target is inside a scrollable list or horizontal menu or calculator
    if (e.target.closest('.workout-list') || 
        e.target.closest('.card-tabs') || 
        e.target.closest('.monthly-tracker') ||
        e.target.closest('#pageCalculators') ||
        e.target.closest('.no-swipe')) {
      touchStartX = -1; // Ignore this swipe
      return;
    }
    
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (touchStartX === -1) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
  }, { passive: true });

  // Mouse dragging support
  let isDragging = false;
  document.addEventListener('mousedown', e => {
    if (e.button !== 0) return; // Only left click
    isDragging = true;
    touchStartX = e.screenX;
    touchStartY = e.screenY;
  });

  document.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    touchEndX = e.screenX;
    touchEndY = e.screenY;
    handleGesture();
  });
}

// =============================================
// GREETING
// =============================================
function setGreeting(){
  const h=new Date().getHours();const el=document.getElementById('greeting');
  if(h<6)el.textContent=t('goodNight');
  else if(h<12)el.textContent=t('goodMorning');
  else if(h<18)el.textContent=t('goodAfternoon');
  else el.textContent=t('goodEvening');
}
function setDate(){document.getElementById('dateDisplay').textContent=formatDateLong(new Date())}

// =============================================
// ATTENDANCE
// =============================================
function renderAttendance(){
  const container=document.getElementById('attendanceDays');const label=document.getElementById('attWeekLabel');
  const today=new Date();const monday=getMonday(today);
  monday.setDate(monday.getDate()+attendanceWeekOffset*7);
  const sunday=new Date(monday);sunday.setDate(sunday.getDate()+6);
  label.textContent=`${formatDate(monday)} – ${formatDate(sunday)}`;
  const days=currentLang==='tr'?DAYS_TR:DAYS_EN;
  let html='';
  for(let i=0;i<7;i++){
    const d=new Date(monday);d.setDate(d.getDate()+i);
    const ds=dateStr(d);const isToday=ds===todayStr();const attended=appData.attendance[ds]===true;
    html+=`<div class="att-day ${isToday?'today':''} ${attended?'active':''}" data-date="${ds}">
      <span class="att-day-name">${days[i]}</span>
      <span class="att-day-num">${d.getDate()}</span>
      <div class="att-day-check">${attended?'✓':''}</div>
    </div>`;
  }
  container.innerHTML=html;
  container.querySelectorAll('.att-day').forEach(el=>{
    el.addEventListener('click',()=>{
      const ds=el.dataset.date;appData.attendance[ds]=!appData.attendance[ds];
      saveData();renderAttendance();updateStats();
    });
  });
}

function initAttendanceNav(){
  document.getElementById('attPrev').addEventListener('click',()=>{attendanceWeekOffset--;renderAttendance()});
  document.getElementById('attNext').addEventListener('click',()=>{attendanceWeekOffset++;renderAttendance()});
}

// =============================================
// WORKOUTS
// =============================================
function renderWorkout(tab){
  currentWorkoutTab=tab;
  const list=document.getElementById('workoutList');
  const programs=appData.programs||DEFAULT_PROGRAMS;
  const exercises=programs[tab]||[];
  const allDone = exercises.length > 0 && exercises.every(ex => ex.done);
  let btnHtml = '';
  if(allDone) {
    btnHtml = `
    <button class="btn-primary complete-btn" style="width:100%; margin-top:16px; justify-content:center; padding:12px; font-weight: bold; font-size: 1.1rem;" onclick="completeDay('workout','${tab}')">
      ${currentLang==='tr'?'🎉 Spor Programını Tamamla (Bugün) 🎉':'🎉 Complete Workout (Today) 🎉'}
    </button>`;
  }

  list.innerHTML=exercises.map((ex,i)=>{
    const videoUrl = WORKOUT_VIDEO_URLS[ex.name];
    const videoBtn = videoUrl
      ? `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="posture-video-btn" title="${currentLang==='tr'?'YouTube\'da İzle':'Watch on YouTube'}" onclick="event.stopPropagation()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          ${currentLang==='tr'?'İzle':'Watch'}
        </a>`
      : '<span></span>';
    return `<div class="exercise-row workout-exercise-row">
      <span class="exercise-name">${ex.name}</span>
      <span class="exercise-detail">${ex.sets}</span>
      ${videoBtn}
      <button class="exercise-check ${ex.done?'done':''}" data-index="${i}">${ex.done?'✓':''}</button>
    </div>`;
  }).join('') + btnHtml;

  list.querySelectorAll('.exercise-check').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=parseInt(btn.dataset.index);
      if(!appData.programs)appData.programs=JSON.parse(JSON.stringify(DEFAULT_PROGRAMS));
      appData.programs[tab][idx].done=!appData.programs[tab][idx].done;
      
      // Auto-complete if all exercises done
      const allDone = appData.programs[tab].every(ex => ex.done);
      if (allDone) {
        completeDay('workout', tab);
      } else {
        saveData();
        renderWorkout(tab);
      }
    });
  });
  populateExerciseDropdown();
}

function initWorkoutTabs(){
  document.querySelectorAll('[data-wktab]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-wktab]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');renderWorkout(btn.dataset.wktab);
    });
  });
}

function populateExerciseDropdown(){
  const select=document.getElementById('logExercise');
  const catSelect=document.getElementById('logCategory');
  if(!select)return;
  const cur=select.value;
  const cat = catSelect ? catSelect.value : 'all';
  select.innerHTML=`<option value="">${t('selectExercise')}</option>`;
  
  ALL_EXERCISES.forEach(ex=>{
    let show = false;
    if (cat === 'all') show = true;
    else if (EXERCISE_CATEGORIES[cat] && EXERCISE_CATEGORIES[cat].includes(ex)) show = true;
    
    if (show) select.innerHTML+=`<option value="${ex}" ${ex===cur?'selected':''}>${ex}</option>`;
  });
}

// =============================================
// EXERCISE LOGGING
// =============================================
function initLogForm(){
  const catSelect=document.getElementById('logCategory');
  if(catSelect) catSelect.addEventListener('change',()=>populateExerciseDropdown());
  const logF = document.getElementById('logForm');
  if(logF) logF.addEventListener('submit',e=>{
    e.preventDefault();
    const exercise=document.getElementById('logExercise').value;
    const weight=parseFloat(document.getElementById('logWeight').value);
    // 1.5: Read from custom radio buttons instead of select
    const checkedUnit = document.querySelector('input[name="logUnitRadio"]:checked');
    const unit = checkedUnit ? checkedUnit.value : 'kg';
    const reps=parseInt(document.getElementById('logReps').value);
    const sets=parseInt(document.getElementById('logSets').value);
    if(!exercise||isNaN(weight)||isNaN(reps)||isNaN(sets))return;
    
    // Internal storage is always in KG
    const finalWeight = unit === 'lbs' ? Math.round(weight * 0.453592 * 10) / 10 : weight;
    
    const td=todayStr();
    if(!appData.workoutLogs[td])appData.workoutLogs[td]=[];
    appData.workoutLogs[td].push({exercise,weight:finalWeight,inputWeight:weight,unit:unit,reps,sets,timestamp:Date.now()});
    appData.attendance[td]=true;
    saveData();renderLoggedExercises();renderAttendance();updateMuscleMap();updateStats();
    // Check achievements on each log
    checkAchievements(exercise, finalWeight);
    document.getElementById('logWeight').value='';
    document.getElementById('logReps').value='';
    document.getElementById('logSets').value='';
  });
  // 1.5: Sync aria-checked on radio change
  document.querySelectorAll('input[name="logUnitRadio"]').forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('input[name="logUnitRadio"]').forEach(x => x.setAttribute('aria-checked', x.checked ? 'true' : 'false'));
    });
  });
}

// =============================================
// POSTURE
// =============================================
function renderPosture(tab){
  currentPostureTab=tab;
  const list=document.getElementById('postureList');
  if(!list)return;
  const programs=appData.posturePrograms||DEFAULT_POSTURE_PROGRAMS;
  const exercises=programs[tab]||[];
  const allDone = exercises.length > 0 && exercises.every(ex => ex.done);
  let btnHtml = '';
  if(allDone) {
    btnHtml = `
    <button class="btn-primary complete-btn" style="width:100%; margin-top:16px; justify-content:center; padding:12px; font-weight: bold; font-size: 1.1rem;" onclick="completeDay('posture','${tab}')">
      ${currentLang==='tr'?'🎉 Postür Programını Tamamla (Bugün) 🎉':'🎉 Complete Posture (Today) 🎉'}
    </button>`;
  }
  
  list.innerHTML=exercises.map((ex,i)=>{
    const videoUrl = POSTURE_VIDEO_URLS[ex.name];
    const videoBtn = videoUrl
      ? `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="posture-video-btn" title="${currentLang==='tr'?'Youtube\'da İzle':'Watch on YouTube'}" onclick="event.stopPropagation()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          ${currentLang==='tr'?'İzle':'Watch'}
        </a>`
      : '';
    return `<div class="exercise-row posture-exercise-row">
      <span class="exercise-name">${ex.name}</span>
      <span class="exercise-detail">${t(ex.sets)}</span>
      ${videoBtn}
      <button class="exercise-check ${ex.done?'done':''}" data-index="${i}">${ex.done?'✓':''}</button>
    </div>`;
  }).join('') + btnHtml;

  list.querySelectorAll('.exercise-check').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      e.stopPropagation();
      const idx=parseInt(btn.dataset.index);
      if(!appData.posturePrograms)appData.posturePrograms=JSON.parse(JSON.stringify(DEFAULT_POSTURE_PROGRAMS));
      appData.posturePrograms[tab][idx].done=!appData.posturePrograms[tab][idx].done;
      saveData();renderPosture(tab);
    });
  });
}

// =============================================
// VIDEO MODAL
// =============================================
function openVideoModal(embedUrl, exName) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoModalIframe');
  const title = document.getElementById('videoModalTitle');
  if (!modal || !iframe) return;
  // YouTube Shorts embed: append ?autoplay=1&rel=0
  iframe.src = embedUrl + '?autoplay=1&rel=0&modestbranding=1';
  if (title) title.textContent = exName || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoModalIframe');
  if (!modal) return;
  modal.classList.remove('open');
  if (iframe) iframe.src = '';
  document.body.style.overflow = '';
}

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('videoModalClose');
  if (!modal) return;
  if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeVideoModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideoModal();
  });
}

function initPostureTabs(){
  document.querySelectorAll('[data-pstab]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-pstab]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');renderPosture(btn.dataset.pstab);
    });
  });
}

// =============================================
// COMPLETION
// =============================================
window.completeDay = function(type, tab) {
  if(!appData.completedDays) appData.completedDays = {};
  const td = todayStr();
  if(!appData.completedDays[td]) appData.completedDays[td] = {};
  appData.completedDays[td][type] = true;
  appData.attendance[td] = true;
  
  if(type === 'workout' && appData.programs && appData.programs[tab]) {
    appData.programs[tab].forEach(p => p.done = false); 
  } else if(type === 'posture' && appData.posturePrograms && appData.posturePrograms[tab]) {
    appData.posturePrograms[tab].forEach(p => p.done = false);
  }
  
  saveData();
  renderAttendance();
  updateStats();
  if(type === 'workout') renderWorkout(tab);
  if(type === 'posture') renderPosture(tab);
  
  // Confetti effect
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B7CF7', '#ffffff', '#FFD700']
    });
  }
  
  // Toast instead of alert
  const msg = currentLang==='tr' ? (type==='workout'?'Spor Programı Kaydedildi! 💪':'Postür Programı Kaydedildi! 🌟') : 'Program Completed!';
  setTimeout(() => showToast(msg, 'success'), 400);
};

// =============================================
// LOGGED EXERCISES & MONTHLY TRACKER
// =============================================
function renderMonthlyTracker() {
  const container = document.getElementById('monthlyTracker');
  if(!container) return;
  const now = new Date();
  const y = now.getFullYear(); 
  const m = now.getMonth();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const monthName = now.toLocaleString(currentLang==='tr'?'tr-TR':'en-US', { month: 'long' });
  
  let wHtml = `<div class="tracker-row"><div class="tracker-title">${currentLang==='tr'?'Spor':'Workout'} - ${monthName}</div><div class="tracker-grid">`;
  let pHtml = `<div class="tracker-row"><div class="tracker-title">${currentLang==='tr'?'Postür':'Posture'} - ${monthName}</div><div class="tracker-grid">`;
  
  for(let d=1; d<=daysInMonth; d++) {
    const dStr = y + '-' + String(m+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    const comp = (appData.completedDays && appData.completedDays[dStr]) || {};
    
    // Workout logic: If explicitly completed OR if at least 3 exercises logged
    const workoutLogs = appData.workoutLogs[dStr] || [];
    const isWorkoutDone = comp.workout || workoutLogs.length >= 3;
    
    // Workout cell
    wHtml += `<div class="tracker-day ${isWorkoutDone?'done':''}"><span>${d}</span>${isWorkoutDone?'<span class="tracker-check">✓</span>':''}</div>`;
    // Posture cell
    pHtml += `<div class="tracker-day ${comp.posture?'done':''}"><span>${d}</span>${comp.posture?'<span class="tracker-check">✓</span>':''}</div>`;
  }
  
  wHtml += '</div></div>';
  pHtml += '</div></div>';
  
  container.innerHTML = wHtml + pHtml;
}

function renderLoggedExercises(){
  const container=document.getElementById('loggedExercises');
  const td=todayStr();const logs=appData.workoutLogs[td]||[];
  if(logs.length===0){container.innerHTML=`<div class="logged-empty">${t('noExercisesLogged')}</div>`;return}
  let html=`<div class="logged-row logged-row-header"><span>${t('exercise')}</span><span>${t('weightLabel')}</span><span>Reps</span><span>Sets</span><span></span></div>`;
  logs.forEach((l,i)=>{
    const displayWeight = l.inputWeight && l.unit ? `${l.inputWeight}${l.unit.toUpperCase()}` : `${l.weight}kg`;
    html+=`<div class="logged-row" style="border-bottom: 1px solid var(--border-subtle);"><span class="logged-exercise">${l.exercise}</span><span>${displayWeight}</span><span>${l.reps}</span><span>${l.sets}</span><button class="delete-log" data-index="${i}">×</button></div>`;
  });
  container.innerHTML=html;
  container.querySelectorAll('.delete-log').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=parseInt(btn.dataset.index);
      appData.workoutLogs[td].splice(idx,1);
      if(appData.workoutLogs[td].length===0)delete appData.workoutLogs[td];
      saveData();renderLoggedExercises();updateMuscleMap();updateStats();
    });
  });
}

// =============================================
// =============================================
// MUSCLE MAP — Premium Redesign
// =============================================

let _muscleRange = 'today'; // 'today' | 'week'

window.setMuscleRange = function(range) {
  _muscleRange = range;
  // Update toggle button styles
  const btnToday = document.getElementById('mmBtnToday');
  const btnWeek  = document.getElementById('mmBtnWeek');
  if (btnToday && btnWeek) {
    const on  = 'background:var(--accent-primary);color:#fff;';
    const off = 'background:transparent;color:var(--text-muted);';
    btnToday.style.cssText += range === 'today' ? on : off;
    btnWeek.style.cssText  += range === 'week'  ? on : off;
  }
  updateMuscleMap();
};

function updateMuscleMap() {
  const muscleVolume = {};

  // Collect logs: today only OR full week
  if (_muscleRange === 'today') {
    const td = todayStr();
    (appData.workoutLogs[td] || []).forEach(log => {
      const muscles = EXERCISE_MUSCLES[log.exercise] || [];
      const vol = parseInt(log.sets) || 0;
      muscles.forEach(m => { muscleVolume[m] = (muscleVolume[m] || 0) + vol; });
    });
  } else {
    const monday = getMonday(new Date());
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(d.getDate() + i);
      const ds = dateStr(d);
      (appData.workoutLogs[ds] || []).forEach(log => {
        const muscles = EXERCISE_MUSCLES[log.exercise] || [];
        const vol = parseInt(log.sets) || 0;
        muscles.forEach(m => { muscleVolume[m] = (muscleVolume[m] || 0) + vol; });
      });
    }
  }

  const volumes = Object.values(muscleVolume);
  const maxVol = Math.max(...volumes, 1);

  // Handle front/back view visibility + label styling
  const view = document.querySelector('input[name="muscleView"]:checked')?.value || 'front';
  const frontView = document.getElementById('muscleViewFront');
  const backView  = document.getElementById('muscleViewBack');
  if (frontView) frontView.style.display = view === 'front' ? 'block' : 'none';
  if (backView)  backView.style.display  = view === 'back'  ? 'block' : 'none';

  // Update Ön/Arka pill label styles
  const lFront = document.getElementById('mvLabelFront');
  const lBack  = document.getElementById('mvLabelBack');
  if (lFront) { lFront.style.background = view === 'front' ? 'var(--accent-primary)' : 'transparent'; lFront.style.color = view === 'front' ? '#fff' : 'var(--text-muted)'; }
  if (lBack)  { lBack.style.background  = view === 'back'  ? 'var(--accent-primary)' : 'transparent'; lBack.style.color  = view === 'back'  ? '#fff' : 'var(--text-muted)'; }

  // Apply intensity classes to all muscle-part elements
  document.querySelectorAll('.muscle-part').forEach(el => {
    const m   = el.dataset.muscle;
    const vol = muscleVolume[m] || 0;
    el.classList.remove('intensity-low', 'intensity-mid', 'intensity-high');
    if (vol > 0) {
      const r = vol / maxVol;
      if (r > 0.55)      el.classList.add('intensity-high');
      else if (r > 0.2)  el.classList.add('intensity-mid');
      else               el.classList.add('intensity-low');
    }
  });

  // Update muscle summary stats
  const summary = document.getElementById('muscleSummary');
  if (!summary) return;
  const sorted = Object.entries(muscleVolume).sort((a, b) => b[1] - a[1]);
  const rangeLabel = _muscleRange === 'today'
    ? (currentLang === 'tr' ? 'Bugünkü Set Hacmi' : "Today's Volume")
    : (currentLang === 'tr' ? 'Haftalık Set Hacmi' : 'Weekly Set Volume');

  if (sorted.length > 0) {
    const maxSumVol = sorted[0][1];
    summary.innerHTML =
      `<div style="padding-top:10px;border-top:1px solid rgba(255,255,255,0.06);font-size:.65rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">${rangeLabel}</div>` +
      sorted.slice(0, 7).map(([m, v]) => {
        const pct = Math.round((v / maxSumVol) * 100);
        const barColor = pct > 60 ? '#EF5350' : pct > 30 ? '#FF7043' : '#FFD54F';
        return `<div style="margin-bottom:7px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;">
            <span style="font-size:0.75rem;color:var(--text-secondary);text-transform:capitalize;">${m}</span>
            <span style="font-size:0.72rem;font-weight:700;color:${barColor};">${Math.round(v)} set</span>
          </div>
          <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:${barColor};border-radius:2px;transition:width 0.5s ease;"></div>
          </div>
        </div>`;
      }).join('');
  } else {
    summary.innerHTML = `<div style="padding-top:10px;border-top:1px solid rgba(255,255,255,0.06);"><p style="font-size:.75rem;color:var(--text-muted);margin:8px 0;">${_muscleRange === 'today' ? (currentLang==='tr' ? 'Bugün egzersiz yok.' : 'No exercises today.') : t('noWorkoutsWeek')}</p></div>`;
  }
}


// =============================================
// CHARTS
// =============================================
function drawChartGeneric(canvasId,data,labels,color){
  const canvas=document.getElementById(canvasId);if(!canvas||!canvas.parentElement)return;
  const ctx=canvas.getContext('2d');const dpr=window.devicePixelRatio||1;
  const rect=canvas.parentElement.getBoundingClientRect();if(rect.width===0)return;
  canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;
  canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';
  ctx.scale(dpr,dpr);
  const w=rect.width,h=rect.height;
  const pad={top:24,right:20,bottom:30,left:50};
  const cW=w-pad.left-pad.right,cH=h-pad.top-pad.bottom;
  ctx.clearRect(0,0,w,h);

  if(data.length===0){
    ctx.fillStyle='rgba(255, 255, 255, 0.3)';ctx.font='500 14px "Inter",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(t('noData'),w/2,h/2);return;
  }

  const minV=Math.min(...data),maxV=Math.max(...data),range=maxV-minV||1;
  const mn=minV-range*.1,mx=maxV+range*.1,r=mx-mn;

  // Grid
  for(let i=0;i<=4;i++){
    const y=pad.top+(cH/4)*i;
    ctx.strokeStyle='rgba(255,255,255,0.04)';ctx.lineWidth=1;ctx.beginPath();
    ctx.moveTo(pad.left,y);ctx.lineTo(w-pad.right,y);ctx.stroke();
    ctx.fillStyle='#625f7a';ctx.font='11px "Space Grotesk",sans-serif';ctx.textAlign='right';
    ctx.fillText((mx-(r/4)*i).toFixed(1),pad.left-8,y+4);
  }

  // X labels
  ctx.textAlign='center';ctx.fillStyle='#625f7a';ctx.font='10px "Space Grotesk",sans-serif';
  const step=Math.max(1,Math.floor(labels.length/8));
  labels.forEach((lbl,i)=>{
    if(i%step===0||i===labels.length-1){
      ctx.fillText(lbl,pad.left+(cW/Math.max(data.length-1,1))*i,h-6);
    }
  });

  const points=data.map((v,i)=>({x:pad.left+(cW/Math.max(data.length-1,1))*i,y:pad.top+cH-((v-mn)/r)*cH}));

  // Area
  const grad=ctx.createLinearGradient(0,pad.top,0,pad.top+cH);
  grad.addColorStop(0,color.replace(')',',0.18)').replace('rgb','rgba'));
  grad.addColorStop(1,'rgba(0,0,0,0)');
  ctx.beginPath();ctx.moveTo(points[0].x,pad.top+cH);
  points.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.lineTo(points[points.length-1].x,pad.top+cH);ctx.closePath();
  ctx.fillStyle=grad;ctx.fill();

  // Line
  ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.lineCap='round';
  points.forEach((p,i)=>{if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y)});ctx.stroke();

  // Dots
  points.forEach((p,i)=>{
    ctx.beginPath();ctx.arc(p.x,p.y,4,0,Math.PI*2);ctx.fillStyle='#0d0d12';ctx.fill();
    ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.stroke();
    if(i===points.length-1){ctx.beginPath();ctx.arc(p.x,p.y,8,0,Math.PI*2);ctx.fillStyle=color.replace(')',',0.2)').replace('rgb','rgba');ctx.fill()}
  });
}

function getWeightChartData(){
  const e=Object.entries(appData.weightLog||{}).sort((a,b)=>a[0].localeCompare(b[0]));
  return{data:e.map(x=>x[1]),labels:e.map(x=>{const d=new Date(x[0]+'T00:00:00');return d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{month:'short',day:'numeric'})})};
}
function drawWeightChart(){const{data,labels}=getWeightChartData();drawChartGeneric('weightChart',data,labels,'rgb(139,124,247)')}
function getVolumePerWeek(){
  const wv={};
  Object.entries(appData.workoutLogs||{}).forEach(([date,logs])=>{
    const d=new Date(date+'T00:00:00');const mon=getMonday(d);const wk=dateStr(mon);
    wv[wk]=(wv[wk]||0)+logs.reduce((s,l)=>s+l.weight*l.reps*l.sets,0);
  });
  const s=Object.entries(wv).sort((a,b)=>a[0].localeCompare(b[0]));
  return{data:s.map(x=>x[1]),labels:s.map(x=>{const d=new Date(x[0]+'T00:00:00');return d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{month:'short',day:'numeric'})})};
}
function drawStrengthChart(){} // Deprecated
function drawDashboardChart(){
  const{data,labels}=getWeightChartData();drawChartGeneric('dashboardChart',data,labels,'rgb(139,124,247)')
}
function initDashboardChartTabs(){
  document.querySelectorAll('.chart-card-mini .tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.chart-card-mini .tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');currentChartType=btn.dataset.chart;drawDashboardChart();
    });
  });
}

// =============================================
// PR TABLE
// =============================================
function renderPRTable(){
  const container=document.getElementById('prTable');
  if(!container) return;
  
  const prs={};
  Object.entries(appData.workoutLogs||{}).forEach(([date,logs])=>{
    logs.forEach(l=>{
      if(!prs[l.exercise])prs[l.exercise]={maxWeight:0,bestReps:0,date:''};
      if(l.weight>prs[l.exercise].maxWeight){prs[l.exercise].maxWeight=l.weight;prs[l.exercise].date=date}
      if(l.reps>prs[l.exercise].bestReps)prs[l.exercise].bestReps=l.reps;
    });
  });
  
  const sorted=Object.entries(prs).sort((a,b)=>b[1].maxWeight-a[1].maxWeight);
  let html=`<div class="pr-header" style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 40px; padding: 0 14px 10px; font-size: 0.7rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">
    <span>${t('exercise')}</span>
    <span style="text-align:center;">Maks</span>
    <span style="text-align:center;">Reps</span>
    <span style="text-align:center;">Tarih</span>
    <span></span>
  </div>`;
  
  if(sorted.length===0){
    html+=`<div class="logged-empty">${t('noPRs')}</div>`;
  } else {
    sorted.forEach(([name,pr])=>{
      const d=new Date(pr.date+'T00:00:00');
      html+=`
        <div class="pr-row">
          <span class="pr-name" style="font-weight: 600; color: var(--text-primary);">${name}</span>
          <span style="text-align:center; font-weight: 700; color: var(--accent-primary);">${pr.maxWeight} <small style="font-size:0.6rem; opacity:0.7;">kg</small></span>
          <span style="text-align:center; font-weight: 500;">${pr.bestReps}</span>
          <span style="text-align:center; font-size: 0.75rem; color: var(--text-muted);">${d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{month:'short',day:'numeric'})}</span>
          <button onclick="deletePR('${name}')" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; cursor: pointer; padding: 6px; border-radius: 8px; transition: all 0.2s; display: flex; align-items: center; justify-content: center;" title="Sil">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>`;
    });
  }
  container.innerHTML=html;
}

window.deletePR = function(exerciseName) {
  if (!confirm(currentLang === 'tr' ? `${exerciseName} rekorunu silmek istediğine emin misin?` : `Are you sure you want to delete PR for ${exerciseName}?`)) return;
  let found = false;
  Object.entries(appData.workoutLogs).forEach(([date, logs]) => {
    const originalLength = logs.length;
    appData.workoutLogs[date] = logs.filter(l => l.exercise !== exerciseName);
    if (appData.workoutLogs[date].length !== originalLength) found = true;
    if (appData.workoutLogs[date].length === 0) delete appData.workoutLogs[date];
  });
  if (found) {
    saveData(); renderPRTable(); updateStats(); updateMuscleMap();
    showToast(currentLang === 'tr' ? 'Rekor silindi ✓' : 'PR deleted ✓', 'success');
  }
};

window.togglePRTable = function() {
  const content = document.getElementById('prTableWrap');
  const icon = document.getElementById('prToggleIcon');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    if(icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'none';
    if(icon) icon.style.transform = 'rotate(0deg)';
  }
};

// =============================================
// WEIGHT LOG
// =============================================
function initWeightLog(){
  document.getElementById('weightSaveBtn').addEventListener('click',()=>{
    const v=parseFloat(document.getElementById('weightInput').value);if(isNaN(v)||v<=0)return;
    appData.weightLog[todayStr()]=v;saveData();
    document.getElementById('weightInput').value='';drawWeightChart();updateStats();
  });
}

// =============================================
// NOTES
// =============================================
function initNotes() {
  const saveBtn = document.getElementById('saveNoteBtn');
  const input = document.getElementById('noteInput');
  const tags = document.querySelectorAll('#pageNotes .tag-btn');

  if (!saveBtn || !input) return;

  tags.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  saveBtn.addEventListener('click', async () => {
    const text = input.value.trim();
    if (!text) return;
    
    // 4.1: Only allow valid tags: 'Daha sonra', 'Fikir', 'GYM'
    const VALID_TAGS = ['Daha sonra', 'Fikir', 'GYM'];
    const selectedTags = [];
    document.querySelectorAll('#pageNotes .tag-btn.active').forEach(b => {
      if (VALID_TAGS.includes(b.dataset.tag)) selectedTags.push(b.dataset.tag);
    });

    const noteId = Date.now().toString();
    const note = {
      id: noteId,
      text,
      tags: selectedTags,
      timestamp: Date.now(),
      date: todayStr()
    };

    if (!appData.notes) appData.notes = {};
    appData.notes[noteId] = note;
    saveData();
    
    input.value = '';
    document.querySelectorAll('#pageNotes .tag-btn.active').forEach(b => b.classList.remove('active'));
    
    showToast(currentLang === 'tr' ? 'Not kaydedildi! ✓' : 'Note saved! ✓', 'success');
    renderNotes();
  });
}

function renderNotes() {
  const container = document.getElementById('notesHistory');
  if (!container) return;
  
  const entries = Object.values(appData.notes || {}).sort((a, b) => b.timestamp - a.timestamp);
  if (entries.length === 0) {
    container.innerHTML = `<div class="logged-empty">${currentLang === 'tr' ? 'Henüz not yok.' : 'No notes yet.'}</div>`;
    return;
  }
  
  const TAG_SVG = {
    'Daha sonra': '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    'Fikir': '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7 7 7 0 0 1-4 6.32V17H9v-1.69A7.004 7.004 0 0 1 5 9a7 7 0 0 1 7-7z"/></svg>',
    'GYM': '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>'
  };
  
  container.innerHTML = entries.map(note => {
    const d = new Date(note.timestamp);
    const dateLabel = note.date === todayStr() ? (currentLang === 'tr' ? 'Bugün' : 'Today') : d.toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const tagsHtml = (note.tags || []).map(tg => `<span style="display:inline-flex;align-items:center;gap:3px;font-size:0.65rem;padding:2px 8px;border-radius:12px;background:var(--accent-glow);color:var(--accent-primary);font-weight:600;margin-right:4px;">${TAG_SVG[tg]||''}${tg}</span>`).join('');
    
    return `
      <div class="note-entry" style="padding:16px;background:var(--bg-card-alt);border-radius:12px;margin-bottom:12px;border:1px solid var(--border-subtle);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">${dateLabel}</span>
          <button onclick="deleteNote('${note.id}')" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);color:#ef4444;cursor:pointer;padding:5px 7px;border-radius:7px;transition:all 0.2s;display:flex;align-items:center;gap:4px;font-size:0.7rem;" title="Notu Sil">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            Sil
          </button>
        </div>
        <div style="font-size:0.9rem;line-height:1.5;color:var(--text-primary);margin-bottom:10px;white-space:pre-wrap;">${note.text}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${tagsHtml}</div>
      </div>
    `;
  }).join('');
}

window.deleteNote = function(noteId) {
  if (!appData.notes || !appData.notes[noteId]) return;
  const backup = { ...appData.notes };
  try {
    delete appData.notes[noteId];
    // Persist locally first
    localStorage.setItem('zyro_data', JSON.stringify(appData));
    // Also delete from Firestore directly so onSnapshot doesn't overwrite
    if (isFirebaseConfigured && currentUser && db) {
      db.collection('users').doc(currentUser.uid).update({
        [`data.notes.${noteId}`]: firebase.firestore.FieldValue.delete()
      }).catch(e => console.error('Note Firestore delete failed:', e));
    }
    renderNotes();
    showToast(currentLang === 'tr' ? 'Not silindi' : 'Note deleted', 'success');
  } catch(e) {
    appData.notes = backup;
    console.error('Note delete failed, rolled back:', e);
    showToast(currentLang === 'tr' ? 'Silme basarisiz!' : 'Delete failed!', 'error');
  }
};

// =============================================
// STATS
// =============================================
function updateStats(){
  const monday=getMonday(new Date());let ww=0;
  for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(d.getDate()+i);if(appData.attendance[dateStr(d)])ww++}
  
  // 2.5: Use weeklyGoal from localStorage for progress bar & display
  const weeklyGoal = parseInt(localStorage.getItem('weeklyGoal')) || 6;
  const statVal = document.getElementById('statWorkoutsVal');
  const statBar = document.getElementById('statWorkoutsBar');
  if (statVal) statVal.textContent = `${ww}/${weeklyGoal}`;
  if (statBar) statBar.style.width = `${Math.min(ww/weeklyGoal*100,100)}%`;
  // Weekly goal progress ratio (green display)
  const ratioEl = document.getElementById('weeklyGoalRatio');
  if (ratioEl) {
    const pct = weeklyGoal > 0 ? Math.round((ww/weeklyGoal)*100) : 0;
    ratioEl.textContent = `${pct}% (${ww}/${weeklyGoal})`;
    ratioEl.style.color = pct >= 100 ? 'var(--green-vivid)' : pct >= 50 ? 'var(--orange-vivid)' : 'var(--text-secondary)';
  }

  const weights=Object.entries(appData.weightLog||{}).sort((a,b)=>b[0].localeCompare(a[0]));
  if(weights.length>0){
    document.getElementById('statWeightVal').textContent=`${weights[0][1]} kg`;
    if(weights.length>1){const diff=(weights[0][1]-weights[1][1]).toFixed(1);document.getElementById('statWeightTrend').innerHTML=`<span>${diff>=0?'+':''}${diff} kg</span>`}
  }

  const fourWeeksAgo=new Date();fourWeeksAgo.setDate(fourWeeksAgo.getDate()-28);let ad=0;
  for(let i=0;i<28;i++){const d=new Date(fourWeeksAgo);d.setDate(d.getDate()+i);if(appData.attendance[dateStr(d)])ad++}
  const con=Math.round(ad/24*100);
  document.getElementById('statConsistencyVal').textContent=`${Math.min(con,100)}%`;
  document.getElementById('statConsistencyBar').style.width=`${Math.min(con,100)}%`;


  // Streak calculation based on this week's marked days
  // (reuses `monday` from the top of this function)
  let weeklyStreak = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    if (appData.attendance[dateStr(d)]) weeklyStreak++;
  }

  
  // 1. Update only streakText span — the static 🔥 in HTML is already removed
  const streakEl = document.getElementById('streakText');
  if (streakEl) {
    streakEl.textContent = `Day ${weeklyStreak}`;
  }
  if (typeof checkStreakAchievements === 'function') checkStreakAchievements(weeklyStreak);
}

// =============================================
// REFRESH
// =============================================
function refreshDashboard(){updateStats();updateMuscleMap();setTimeout(drawDashboardChart,50)}
function refreshAllViews(){
  renderAttendance();updateStats();updateMuscleMap();
  if(currentPage==='dashboard')setTimeout(drawDashboardChart,50);
  else if(currentPage==='workouts'){renderWorkout(currentWorkoutTab);renderLoggedExercises()}
  else if(currentPage==='progress')setTimeout(()=>{
    drawWeightChart();drawStrengthChart();
    renderMonthlyTracker();renderProgressTracker();
  },50);
  else if(currentPage==='notes')renderNotes();
  else if(currentPage==='comments')renderComments();
  else if(currentPage==='beforeafter'){renderProgressPhotos();renderPRTable();renderBodyMeasurements();}
  else if(currentPage==='achievements')renderAchievements();
  else if(currentPage==='profile')renderProfilePage();
}

let resizeTimeout;
window.addEventListener('resize',()=>{clearTimeout(resizeTimeout);resizeTimeout=setTimeout(()=>{
  if(currentPage==='dashboard')drawDashboardChart();
  else if(currentPage==='progress'){drawWeightChart();drawStrengthChart()}
},150)});

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded',()=>{
  initLangSwitcher();
  applyTranslations();
  setGreeting();setDate();
  initAuth();initNav();initAttendanceNav();
  initWorkoutTabs();initLogForm();initWeightLog();
  initPostureTabs();initVideoModal();
  initNotes();initDashboardChartTabs();
  initComments(); initNotifications();
  populateExerciseDropdown();renderAttendance();
  initWeeklyGoalSheet();
  initProgressPhotos();
  loadData(()=>{
    refreshAllViews();
    renderAchievements();
    renderProgressPhotos();
    // Update sidebar after data load
    if(currentUser) updateUserUI(currentUser);
  });
});
// ==============================================
// WEEKLY GOAL (2.5) — Bottom Sheet
// =============================================
function initWeeklyGoalSheet() {
  const slider = document.getElementById('weeklyGoalSlider');
  const display = document.getElementById('weeklyGoalDisplay');
  if (!slider || !display) return;

  // Load saved goal
  const saved = parseInt(localStorage.getItem('weeklyGoal')) || 0;
  if (!saved) {
    // First time: show the bottom sheet after 3s
    setTimeout(() => {
      document.getElementById('weeklyGoalSheet')?.classList.add('show');
    }, 3000);
  } else {
    appData.weeklyGoal = saved;
    slider.value = saved;
    display.textContent = saved;
    slider.style.setProperty('--fill', `${((saved - 1) / 6) * 100}%`);
  }

  slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    display.textContent = val;
    slider.style.setProperty('--fill', `${((val - 1) / 6) * 100}%`);
  });
}

window.confirmWeeklyGoal = function() {
  const slider = document.getElementById('weeklyGoalSlider');
  const val = parseInt(slider.value);
  localStorage.setItem('weeklyGoal', val);
  appData.weeklyGoal = val;
  document.getElementById('weeklyGoalSheet')?.classList.remove('show');
  updateStats();
  showToast(`Haftalık hedef ${val} gün olarak kaydedildi! 🎯`, 'success');
};

// Update stat to show weekly goal ratio
function getWeeklyGoalStats() {
  const goal = parseInt(localStorage.getItem('weeklyGoal')) || 6;
  const monday = getMonday(new Date());
  let attended = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    if (appData.attendance[dateStr(d)]) attended++;
  }
  return { attended, goal, ratio: goal > 0 ? attended / goal : 0 };
}

// =============================================
// TOAST NOTIFICATIONS (top-of-screen, 2s, premium)
// =============================================
function showToast(msg, type = 'success') {
  let toast = document.getElementById('zyroToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'zyroToast';
    toast.style.cssText = [
      'position:fixed',
      'top:24px',
      'left:50%',
      'transform:translateX(-50%) translateY(-80px)',
      'padding:12px 22px',
      'border-radius:14px',
      'font-weight:600',
      'font-size:0.88rem',
      'z-index:99999',
      'transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),opacity 0.35s ease',
      'box-shadow:0 8px 32px rgba(0,0,0,0.5)',
      'white-space:nowrap',
      'max-width:90vw',
      'text-align:center',
      'pointer-events:none',
      'display:flex',
      'align-items:center',
      'gap:10px',
      'border:1px solid rgba(255,255,255,0.12)',
      'backdrop-filter:blur(12px)',
      'opacity:0'
    ].join(';');
    document.body.appendChild(toast);
  }
  const isSuccess = type === 'success';
  const iconSvg = isSuccess
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  toast.innerHTML = iconSvg + '<span>' + msg + '</span>';
  toast.style.background = isSuccess
    ? 'linear-gradient(135deg, rgba(34,197,94,0.95), rgba(16,185,129,0.95))'
    : 'linear-gradient(135deg, rgba(239,68,68,0.95), rgba(220,38,38,0.95))';
  toast.style.color = 'white';
  // Show
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(-80px)';
    toast.style.opacity = '0';
  }, 2000);
}

// =============================================
// ACHIEVEMENT SYSTEM (3.2)
// =============================================

const ACH_ICONS = {
  barbell:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h20M5 9v6M19 9v6M2 10v4M22 10v4M8 8v8M16 8v8"/></svg>',
  dumbbell: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h12M6 18h12M12 2v4M12 18v4M4 8v8M20 8v8"/></svg>',
  machine:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M8 12h8M8 16h8M8 8h8"/></svg>',
  streak:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  core:     '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/></svg>',
  star:     '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
};

// GROUPS allow expandable subsets per exercise
const ACHIEVEMENT_GROUPS = [
  {
    id: 'bench_group', label: 'Bench Press', icon: 'barbell',
    badges: [
      { id: 'bench_50',  name: '50 kg Bench',  exercise: 'Barbell Bench Press', target: 50,  desc: 'Bench Press ile 50 kg kaldır.' },
      { id: 'bench_80',  name: '80 kg Bench',  exercise: 'Barbell Bench Press', target: 80,  desc: 'Bench Press ile 80 kg kaldır.' },
      { id: 'bench_100', name: '100 kg Bench', exercise: 'Barbell Bench Press', target: 100, desc: 'Bench Press ile 100 kg kaldır.' },
    ]
  },
  {
    id: 'squat_group', label: 'Squat', icon: 'barbell',
    badges: [
      { id: 'squat_80',  name: '80 kg Squat',  exercise: 'Squat', target: 80,  desc: 'Squat ile 80 kg kaldır.' },
      { id: 'squat_100', name: '100 kg Squat', exercise: 'Squat', target: 100, desc: 'Squat ile 100 kg kaldır.' },
      { id: 'squat_140', name: '140 kg Squat', exercise: 'Squat', target: 140, desc: 'Squat ile 140 kg kaldır.' },
    ]
  },
  {
    id: 'deadlift_group', label: 'Deadlift', icon: 'barbell',
    badges: [
      { id: 'deadlift_80',  name: '80 kg Deadlift',  exercise: 'Romanian Deadlift', target: 80,  desc: 'Deadlift ile 80 kg kaldır.' },
      { id: 'deadlift_100', name: '100 kg Deadlift', exercise: 'Romanian Deadlift', target: 100, desc: 'Deadlift ile 100 kg kaldır.' },
      { id: 'deadlift_150', name: '150 kg Deadlift', exercise: 'Romanian Deadlift', target: 150, desc: 'Deadlift ile 150 kg kaldır.' },
    ]
  },
  {
    id: 'lat_group', label: 'Lat Pulldown', icon: 'machine',
    badges: [
      { id: 'lat_50', name: '50 kg Lat',  exercise: 'Lat Pulldown', target: 50, desc: 'Lat Pulldown ile 50 kg çek.' },
      { id: 'lat_80', name: '80 kg Lat',  exercise: 'Lat Pulldown', target: 80, desc: 'Lat Pulldown ile 80 kg çek.' },
    ]
  },
  {
    id: 'biceps_group', label: 'Biceps Curl', icon: 'dumbbell',
    badges: [
      { id: 'biceps_20', name: '20 kg Biceps', exercise: 'Seated DB Biceps Curl', target: 20, desc: 'Biceps Curl ile 20 kg kaldır.' },
      { id: 'biceps_30', name: '30 kg Biceps', exercise: 'Seated DB Biceps Curl', target: 30, desc: 'Biceps Curl ile 30 kg kaldır.' },
    ]
  },
  {
    id: 'single_group', label: 'Diğer Hareketler', icon: 'dumbbell',
    badges: [
      { id: 'hammer_25',        name: '25 kg Hammer Curl',   exercise: 'Cross-Body Hammer Curl',     target: 25,  desc: 'Hammer Curl ile 25 kg kaldır.' },
      { id: 'triceps_40',       name: '40 kg Pushdown',      exercise: 'V-Bar Triceps Pushdown',     target: 40,  desc: 'Triceps Pushdown ile 40 kg it.' },
      { id: 'triceps_60',       name: '60 kg Pushdown',      exercise: 'V-Bar Triceps Pushdown',     target: 60,  desc: 'Triceps Pushdown ile 60 kg it.' },
      { id: 'shoulder_50',      name: '50 kg Shoulder',      exercise: 'Cable Shoulder',             target: 50,  desc: 'Cable Shoulder ile 50 kg çek.' },
      { id: 'crunch_60',        name: '60 kg Crunch',        exercise: 'Straight Bar Cable Crunch',  target: 60,  desc: 'Cable Crunch ile 60 kg çek.' },
      { id: 'incline_bench_60', name: '60 kg İncline',       exercise: 'İncline Bench Press',        target: 60,  desc: 'İncline ile 60 kg kaldır.' },
    ]
  },
  {
    id: 'streak_group', label: 'Seri / Devam', icon: 'streak',
    badges: [
      { id: 'streak_3', name: '3 Günlük Seri', exercise: null, target: 3, desc: 'Haftada 3 gün antrenman yap.' },
      { id: 'streak_7', name: '7 Günlük Seri', exercise: null, target: 7, desc: '7 gün üst üste antrenman yap.' },
    ]
  },
];

// Flat list for compatibility
const ACHIEVEMENT_DEFS = ACHIEVEMENT_GROUPS.flatMap(g => g.badges.map(b => ({...b, icon: g.icon})));

function checkAchievements(exercise, weight) {
  if (!appData.achievements) appData.achievements = {};
  let anyNew = false;
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) return;
    if (appData.achievements[def.id]) return;
    if (def.exercise === exercise && weight >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      anyNew = true;
      saveData();
      showAchievementPopup(def);
      renderAchievements();
      if(typeof renderProfilePage === 'function') renderProfilePage();
    }
  });
}

function checkStreakAchievements(streak) {
  if (!appData.achievements) appData.achievements = {};
  ACHIEVEMENT_DEFS.forEach(def => {
    if (def.exercise) return;
    if (appData.achievements[def.id]) return;
    if (streak >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      saveData();
      showAchievementPopup(def);
      renderAchievements();
      if(typeof renderProfilePage === 'function') renderProfilePage();
    }
  });
}

function showAchievementPopup(def) {
  const popup = document.getElementById('achievementPopup');
  if (!popup) return;
  document.getElementById('achievementIcon').innerHTML = ACH_ICONS[def.icon] || ACH_ICONS['star'];
  document.getElementById('achievementTitle').textContent = '🏆 ' + def.name;
  document.getElementById('achievementDesc').textContent = def.desc + ' 🎉';
  // Add "Go to Achievements" button
  let goBtn = document.getElementById('achievementGoBtn');
  if (!goBtn) {
    goBtn = document.createElement('button');
    goBtn.id = 'achievementGoBtn';
    goBtn.style.cssText = 'margin-top:12px;background:var(--accent-primary);color:white;border:none;border-radius:10px;padding:8px 20px;font-size:0.85rem;font-weight:700;cursor:pointer;';
    goBtn.textContent = currentLang === 'tr' ? 'Başarımları Gör →' : 'View Achievements →';
    goBtn.onclick = () => { closeAchievementPopup(); navigateTo('achievements'); };
    popup.querySelector('.achievement-popup-card').appendChild(goBtn);
  }
  popup.classList.add('show');
  runConfetti();
  setTimeout(() => closeAchievementPopup(), 6000);
}

window.closeAchievementPopup = function() {
  document.getElementById('achievementPopup')?.classList.remove('show');
};

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  if (!appData.achievements) appData.achievements = {};
  const expanded = appData._achExpanded || {};

  // Update overall progress bar
  const totalAll = ACHIEVEMENT_DEFS.length;
  const unlockedAll = ACHIEVEMENT_DEFS.filter(b => appData.achievements[b.id]).length;
  const overallPct = totalAll > 0 ? Math.round((unlockedAll / totalAll) * 100) : 0;
  const achBar = document.getElementById('achOverallBar');
  const achCount = document.getElementById('achOverallCount');
  if (achBar) achBar.style.width = overallPct + '%';
  if (achCount) achCount.textContent = `${unlockedAll} / ${totalAll} rozet · ${overallPct}%`;

  grid.innerHTML = ACHIEVEMENT_GROUPS.map(group => {
    const totalBadges = group.badges.length;
    const unlockedBadges = group.badges.filter(b => appData.achievements[b.id]).length;
    const allUnlocked = unlockedBadges === totalBadges;
    const anyUnlocked = unlockedBadges > 0;
    const isExpanded = expanded[group.id];
    const groupIcon = ACH_ICONS[group.icon] || ACH_ICONS['star'];
    const progressPct = totalBadges > 0 ? Math.round((unlockedBadges / totalBadges) * 100) : 0;

    const headerBorder = allUnlocked
      ? 'rgba(255,215,0,0.4)'
      : anyUnlocked ? 'rgba(139,124,247,0.35)' : 'rgba(255,255,255,0.07)';
    const headerBg = allUnlocked
      ? 'linear-gradient(135deg,rgba(255,215,0,0.1),rgba(255,165,0,0.06))'
      : anyUnlocked ? 'rgba(139,124,247,0.07)' : 'rgba(255,255,255,0.02)';
    const iconBg = allUnlocked
      ? 'rgba(255,215,0,0.18)'
      : anyUnlocked ? 'rgba(139,124,247,0.15)' : 'rgba(255,255,255,0.05)';
    const iconColor = allUnlocked ? '#FFD700' : anyUnlocked ? 'var(--accent-primary)' : 'var(--text-muted)';
    const labelColor = allUnlocked ? '#FFD700' : anyUnlocked ? 'var(--text-primary)' : 'var(--text-secondary)';
    const progressBarColor = allUnlocked ? '#FFD700' : anyUnlocked ? 'var(--accent-primary)' : 'rgba(255,255,255,0.12)';

    const badgesHtml = !isExpanded ? '' : group.badges.map(b => {
      const unlocked = !!appData.achievements[b.id];
      const unlockedDate = unlocked && appData.achievements[b.id].unlockedAt
        ? new Date(appData.achievements[b.id].unlockedAt).toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{month:'short',day:'numeric'})
        : null;
      return `
        <div style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:${unlocked?'rgba(255,215,0,0.07)':'rgba(255,255,255,0.02)'};border:1px solid ${unlocked?'rgba(255,215,0,0.25)':'rgba(255,255,255,0.05)'};border-radius:12px;margin-bottom:8px;transition:all 0.2s;">
          <div style="width:36px;height:36px;flex-shrink:0;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${unlocked?'rgba(255,215,0,0.15)':'rgba(255,255,255,0.04)'};color:${unlocked?'#FFD700':'var(--text-muted)'};">
            ${ACH_ICONS[group.icon]||ACH_ICONS['star']}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:0.85rem;color:${unlocked?'#FFD700':'var(--text-primary)'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${b.name}</div>
            <div style="font-size:0.72rem;color:var(--text-tertiary);margin-top:2px;line-height:1.4;">${b.desc}</div>
            ${unlockedDate ? `<div style="font-size:0.65rem;color:#FFD700;margin-top:4px;font-weight:600;">✓ ${unlockedDate}</div>` : ''}
          </div>
          <div style="flex-shrink:0;">
            ${unlocked
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
              : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"><rect x="5" y="11" width="14" height="11" rx="3"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>'
            }
          </div>
        </div>`;
    }).join('');

    const toggleFn = `(function(){if(!appData._achExpanded)appData._achExpanded={};appData._achExpanded['${group.id}']=!appData._achExpanded['${group.id}'];renderAchievements();})()`;

    return `
      <div style="background:${headerBg};border:1px solid ${headerBorder};border-radius:16px;margin-bottom:10px;overflow:hidden;transition:all 0.25s;">
        <div onclick="${toggleFn}" style="display:flex;align-items:center;gap:14px;padding:16px 18px;cursor:pointer;user-select:none;">
          <div style="width:44px;height:44px;flex-shrink:0;border-radius:12px;background:${iconBg};display:flex;align-items:center;justify-content:center;color:${iconColor};">
            ${groupIcon}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:0.95rem;color:${labelColor};margin-bottom:4px;">${group.label}</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;">
                <div style="height:100%;width:${progressPct}%;background:${progressBarColor};border-radius:4px;transition:width 0.5s ease;"></div>
              </div>
              <span style="font-size:0.68rem;font-weight:600;color:${labelColor};white-space:nowrap;opacity:0.8;">${unlockedBadges}/${totalBadges}</span>
            </div>
          </div>
          <div style="color:${iconColor};transition:transform 0.3s;transform:rotate(${isExpanded?'180':'0'}deg);flex-shrink:0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </div>
        ${isExpanded ? `<div style="padding:0 14px 14px;">${badgesHtml}</div>` : ''}
      </div>`;
  }).join('');
}


function runConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const particles = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    w: Math.random() * 12 + 4,
    h: Math.random() * 6 + 3,
    color: ['#8b7cf7','#FFD700','#4ecb8d','#d96ea3','#5c8ade'][Math.floor(Math.random()*5)],
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 3 + 2,
    angle: Math.random() * 360,
    spin: (Math.random() - 0.5) * 8,
    life: 1
  }));
  let frame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.angle += p.spin; p.life -= 0.008;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (particles.some(p => p.life > 0 && p.y < canvas.height)) {
      frame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  if (frame) cancelAnimationFrame(frame);
  animate();
}


// =============================================
// PROGRESS PHOTOS (3.1)
// =============================================
let _pendingPhotoBase64 = null;
let _compareMode = false;

function initProgressPhotos() {
  // Set today's date as default for photo date picker
  const ph = document.getElementById('photoDate');
  if (ph) ph.value = todayStr();
}

window.handleProgressPhoto = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    // Compress via canvas
    const img = new Image();
    img.onload = () => {
      const max = 512;
      const canvas = document.createElement('canvas');
      const ratio = Math.min(max / img.width, max / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      _pendingPhotoBase64 = canvas.toDataURL('image/jpeg', 0.7);
      document.getElementById('progressPhotoForm').style.display = 'block';
      document.getElementById('photoDate').value = todayStr();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  event.target.value = '';
};

window.cancelProgressPhoto = function() {
  _pendingPhotoBase64 = null;
  document.getElementById('progressPhotoForm').style.display = 'none';
  document.getElementById('photoDate').value = '';
  document.getElementById('photoWeight').value = '';
  document.getElementById('photoHeight').value = '';
  document.getElementById('photoFat').value = '';
  document.getElementById('photoNote').value = '';
};

window.saveProgressPhoto = function() {
  if (!_pendingPhotoBase64) return;
  const date = document.getElementById('photoDate').value || todayStr();
  const weight = parseFloat(document.getElementById('photoWeight').value) || 0;
  const height = parseFloat(document.getElementById('photoHeight').value) || 0;
  const fat = parseFloat(document.getElementById('photoFat').value) || 0;
  const note = document.getElementById('photoNote').value.trim().slice(0, 280);
  
  if (!appData.progressImages) appData.progressImages = [];
  appData.progressImages.push({ date, weight, height, fat, note, image: _pendingPhotoBase64, id: Date.now() });
  
  _pendingPhotoBase64 = null;
  document.getElementById('progressPhotoForm').style.display = 'none';
  document.getElementById('photoNote').value = '';
  document.getElementById('photoWeight').value = '';
  document.getElementById('photoHeight').value = '';
  document.getElementById('photoFat').value = '';
  
  saveData();
  renderProgressPhotos();
  showToast(currentLang === 'tr' ? 'Fotoğraf kaydedildi! 📸' : 'Photo saved! 📸', 'success');
};

window.toggleCompareMode = function() {
  _compareMode = !_compareMode;
  const btn = document.getElementById('comparePhotosBtnMain');
  const compareView = document.getElementById('compareView');
  const photosGrid = document.getElementById('progressPhotosGrid');
  if (_compareMode) {
    btn.textContent = currentLang === 'tr' ? 'Kapat' : 'Close';
    compareView.style.display = 'grid';
    photosGrid.style.display = 'none';
    renderCompareView();
  } else {
    btn.textContent = currentLang === 'tr' ? 'Karşılaştır' : 'Compare';
    compareView.style.display = 'none';
    photosGrid.style.display = 'grid';
  }
};

function renderCompareView() {
  const container = document.getElementById('compareView');
  if (!container) return;
  const photos = (appData.progressImages || []).sort((a, b) => a.date.localeCompare(b.date));
  if (photos.length < 2) {
    container.innerHTML = `<div class="logged-empty" style="grid-column:1/-1;">${currentLang === 'tr' ? 'Karşılaştırmak için en az 2 fotoğraf gerekli.' : 'Need at least 2 photos to compare.'}</div>`;
    return;
  }
  const first = photos[0];
  const last = photos[photos.length - 1];
  container.innerHTML = [
    {label: currentLang === 'tr' ? 'Başlangıç' : 'Start', photo: first},
    {label: currentLang === 'tr' ? 'Son' : 'End', photo: last}
  ].map(({label, photo}) => `
    <div class="compare-photo-wrap">
      <img src="${photo.image}" alt="${label}">
      <div class="compare-photo-overlay">${label} • ${photo.date} • ${photo.weight ? photo.weight + 'kg' : ''}${photo.fat ? ' • %' + photo.fat + ' Yağ' : ''}</div>
    </div>
  `).join('');
}

function renderProgressPhotos() {
  const grid = document.getElementById('progressPhotosGrid');
  if (!grid) return;
  const photos = (appData.progressImages || []).sort((a, b) => b.date.localeCompare(a.date));
  if (photos.length === 0) {
    grid.innerHTML = `<div class="logged-empty" style="grid-column:1/-1;">${currentLang === 'tr' ? 'Henüz fotoğraf eklenmedi.' : 'No photos added yet.'}</div>`;
    return;
  }
  grid.innerHTML = photos.map(p => `
    <div class="progress-photo-item">
      <img src="${p.image}" alt="Progress ${p.date}" loading="lazy">
      <div class="progress-photo-meta">
        <strong>${p.date}</strong>
        <div style="font-size: 0.75rem; margin-top: 4px; color: var(--text-secondary);">
          ${p.height ? p.height + ' cm • ' : ''}${p.weight ? p.weight + ' kg' : ''}${p.fat ? ' • %' + p.fat + ' Yağ' : ''}
        </div>
        ${p.note ? `<div style="font-size: 0.75rem; margin-top: 2px; color: var(--text-tertiary);">${p.note}</div>` : ''}
        <button onclick="deleteProgressPhoto(${p.id})" style="display:block;margin-top:6px;background:rgba(224,84,84,0.15);border:1px solid rgba(224,84,84,0.3);color:#e05454;border-radius:6px;padding:3px 8px;font-size:0.7rem;cursor:pointer;">${currentLang === 'tr' ? 'Sil' : 'Delete'}</button>
      </div>
    </div>
  `).join('');
}

window.deleteProgressPhoto = function(id) {
  if (!confirm(currentLang === 'tr' ? 'Bu fotoğrafı silmek istediğine emin misin?' : 'Are you sure you want to delete this photo?')) return;
  appData.progressImages = (appData.progressImages || []).filter(p => p.id !== id);
  saveData();
  renderProgressPhotos();
  showToast(currentLang === 'tr' ? 'Fotoğraf silindi.' : 'Photo deleted.', 'success');
};

// =============================================
// BODY MEASUREMENTS TRACKER (task 8)
// =============================================
window.saveBodyMeasurement = function() {
  const date = document.getElementById('measFormDate').value || todayStr();
  const entry = {
    id: Date.now(),
    date,
    weight:   parseFloat(document.getElementById('measFormWeight').value)   || 0,
    fat:      parseFloat(document.getElementById('measFormFat').value)      || 0,
    arm:      parseFloat(document.getElementById('measFormArm').value)      || 0,
    chest:    parseFloat(document.getElementById('measFormChest').value)    || 0,
    waist:    parseFloat(document.getElementById('measFormWaist').value)    || 0,
    hip:      parseFloat(document.getElementById('measFormHip').value)      || 0,
    leg:      parseFloat(document.getElementById('measFormLeg').value)      || 0,
    shoulder: parseFloat(document.getElementById('measFormShoulder').value) || 0,
  };
  if (!appData.bodyMeasurements) appData.bodyMeasurements = [];
  appData.bodyMeasurements.push(entry);
  saveData();
  document.getElementById('bodyMeasForm').style.display = 'none';
  ['measFormDate','measFormWeight','measFormFat','measFormArm','measFormChest','measFormWaist','measFormHip','measFormLeg','measFormShoulder']
    .forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  renderBodyMeasurements();
  showToast(currentLang === 'tr' ? 'Ölçüler kaydedildi! ✓' : 'Measurements saved! ✓', 'success');
};

window.deleteBodyMeasurement = function(id) {
  if (!confirm(currentLang === 'tr' ? 'Bu ölçümü silmek istediğine emin misin?' : 'Delete this entry?')) return;
  appData.bodyMeasurements = (appData.bodyMeasurements || []).filter(e => e.id !== id);
  saveData();
  renderBodyMeasurements();
};

function renderBodyMeasurements() {
  const container = document.getElementById('bodyMeasHistory');
  const compareEl  = document.getElementById('bodyMeasCompare');
  if (!container) return;
  const entries = (appData.bodyMeasurements || []).sort((a,b) => b.date.localeCompare(a.date));

  if (entries.length === 0) {
    container.innerHTML = `<div class="logged-empty">${currentLang==='tr' ? 'Henüz ölçüm eklenmedi.' : 'No measurements yet.'}</div>`;
    if(compareEl) compareEl.style.display = 'none';
    return;
  }

  const FIELDS = [
    {k:'weight',   label: currentLang==='tr'?'Kilo':'Weight',   unit:'kg'},
    {k:'fat',      label: currentLang==='tr'?'Yağ Oranı':'Body Fat', unit:'%'},
    {k:'arm',      label: currentLang==='tr'?'Kol':'Arm',       unit:'cm'},
    {k:'chest',    label: currentLang==='tr'?'Göğüs':'Chest',   unit:'cm'},
    {k:'waist',    label: currentLang==='tr'?'Bel':'Waist',     unit:'cm'},
    {k:'hip',      label: currentLang==='tr'?'Kalça':'Hip',     unit:'cm'},
    {k:'leg',      label: currentLang==='tr'?'Bacak':'Leg',     unit:'cm'},
    {k:'shoulder', label: currentLang==='tr'?'Omuz':'Shoulder', unit:'cm'},
  ];

  // Comparison between oldest and newest
  if (entries.length >= 2 && compareEl) {
    const newest = entries[0];
    const oldest = entries[entries.length - 1];
    compareEl.style.display = 'block';
    compareEl.innerHTML = `
      <div style="background:var(--bg-card-alt);border:1px solid var(--border-subtle);border-radius:14px;padding:16px;margin-bottom:4px;">
        <div style="font-size:0.75rem;color:var(--accent-primary);font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px;">
          ${currentLang==='tr'?'Karşılaştırma':'Comparison'}: ${oldest.date} → ${newest.date}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">
          ${FIELDS.filter(f=>oldest[f.k]||newest[f.k]).map(f=>{
            const diff = (newest[f.k]||0) - (oldest[f.k]||0);
            const color = diff>0?'#4ecb8d':diff<0?'#f43f5e':'var(--text-muted)';
            const sign  = diff>0?'+':'';
            return `<div style="background:var(--bg-main);border-radius:10px;padding:10px;text-align:center;">
              <div style="font-size:0.65rem;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:4px;">${f.label}</div>
              <div style="font-size:1rem;font-weight:700;color:var(--text-primary);">${newest[f.k]||'—'} <span style="font-size:.7rem;opacity:.6;">${f.unit}</span></div>
              ${diff!==0?`<div style="font-size:0.7rem;color:${color};margin-top:2px;">${sign}${diff.toFixed(1)} ${f.unit}</div>`:''}
            </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  container.innerHTML = entries.map(e => `
    <div style="padding:14px;background:var(--bg-card-alt);border:1px solid var(--border-subtle);border-radius:12px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <strong style="color:var(--text-primary);">${e.date}</strong>
        <button onclick="deleteBodyMeasurement(${e.id})" style="background:rgba(224,84,84,0.1);border:1px solid rgba(224,84,84,0.25);color:#e05454;border-radius:6px;padding:4px 8px;font-size:0.7rem;cursor:pointer;">Sil</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;">
        ${FIELDS.filter(f=>e[f.k]).map(f=>`
          <div style="background:var(--bg-main);border-radius:8px;padding:8px;text-align:center;">
            <div style="font-size:.6rem;color:var(--text-tertiary);text-transform:uppercase;">${f.label}</div>
            <div style="font-size:.95rem;font-weight:700;color:var(--accent-primary);">${e[f.k]} <span style="font-size:.65rem;opacity:.7;">${f.unit}</span></div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}


// =============================================
// STRENGTH PROGRESS DATA RESET (2.3)
// =============================================
window.resetStrengthProgress = function() {
  if (!confirm('Tüm Güç İlerlemesi verilerini kalıcı olarak silmek istediğine emin misin?\n\nBu işlem geri alınamaz!')) return;
  const backup = JSON.parse(JSON.stringify(appData.workoutLogs || {}));
  try {
    appData.workoutLogs = {};
    saveData();
    renderLoggedExercises();
    renderPRTable();
    renderProgressTracker();
    updateStats();
    updateMuscleMap();
    showToast('Verileriniz sıfırlandı ✓', 'success');
  } catch(e) {
    appData.workoutLogs = backup;
    console.error('Data reset failed, rolled back:', e);
    showToast('Sıfırlama başarısız!', 'error');
  }
};


// STATS TRACKER (WINDEX STYLE)
// =============================================
let currentTrackerCategory = '';
let currentTrackerExercise = '';

window.setTrackerCategory = function(cat) {
  currentTrackerCategory = cat;
  currentTrackerExercise = '';
  renderProgressTracker();
};

window.setTrackerExercise = function(ex) {
  currentTrackerExercise = ex;
  renderProgressTracker();
};

function computeExerciseStats() {
  const stats = {};
  const dates = Object.keys(appData.workoutLogs || {}).sort();
  
  dates.forEach(date => {
    const logs = appData.workoutLogs[date];
    logs.forEach(log => {
      const ex = log.exercise;
      if (!stats[ex]) {
        stats[ex] = {
          name: ex,
          baselineWeight: log.weight,
          baselineReps: log.reps,
          baselineDate: date,
          currentWeight: log.weight,
          currentReps: log.reps,
          lastUpdated: date
        };
      } else {
        stats[ex].currentWeight = log.weight;
        stats[ex].currentReps = log.reps;
        stats[ex].lastUpdated = date;
      }
    });
  });
  
  Object.values(stats).forEach(s => {
    s.category = 'other';
    for (const [cat, exercises] of Object.entries(EXERCISE_CATEGORIES)) {
      if (exercises.includes(s.name)) {
        s.category = cat;
        break;
      }
    }
  });
  
  return Object.values(stats).sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
}

// =============================================
// COMMENTS
// =============================================
function initComments() {
  const sendBtn = document.getElementById('sendCommentBtn');
  if (!sendBtn) return;
  
  sendBtn.addEventListener('click', async () => {
    const text = document.getElementById('commentInput').value.trim();
    if (!text) return;
    
    const type = document.querySelector('input[name="commentType"]:checked').value;
    const isAnonymous = type === 'anonymous';
    
    const comment = {
      text,
      isAnonymous,
      userId: currentUser ? currentUser.uid : 'local',
      userName: isAnonymous ? 'Anonim' : (currentUser ? currentUser.displayName : 'Local User'),
      userEmail: isAnonymous ? null : (currentUser ? currentUser.email : null),
      userPhoto: isAnonymous ? null : (currentUser ? currentUser.photoURL : null),
      timestamp: Date.now(),
      date: todayStr(),
      upvotes: 0,
      upvotedBy: [],
      rank: (currentUser && currentUser.email === 'wupard@gmail.com') ? 'mod' : (appData.userRank || 'default')
    };
    
    if (isFirebaseConfigured && db) {
      try {
        await db.collection('public_comments').add(comment);
        showToast(currentLang === 'tr' ? 'Yorum gonderildi!' : 'Comment sent!', 'success');
        document.getElementById('commentInput').value = '';
        renderComments();
        
        // "Mail'e gelsin" part: For a real app, this would be a Cloud Function.
        // As a workaround, we can provide a mailto link if the user wants to trigger it manually,
        // but saving to Firestore is the more reliable way for an "admin panel".
      } catch (e) {
        console.error('Comment Error:', e);
        if (e.message && e.message.includes('permissions')) {
          showToast('Hata: Firebase izni yok!', 'error');
        } else {
          showToast('Yorum gonderilemedi!', 'error');
        }
      }
    } else {
      // Local mode
      let localComments = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
      localComments.unshift(comment);
      localStorage.setItem('zyro_local_comments', JSON.stringify(localComments));
      showToast('Yorum yerel olarak kaydedildi.', 'success');
      document.getElementById('commentInput').value = '';
      renderComments();
    }
  });
}

function renderComments() {
  const list = document.getElementById('commentsList');
  if (!list) return;
  
  if (isFirebaseConfigured && db) {
    db.collection('public_comments').orderBy('timestamp', 'desc').limit(20).onSnapshot(snap => {
      const comments = [];
      snap.forEach(doc => comments.push({ id: doc.id, ...doc.data() }));
      displayComments(comments);
    });
  } else {
    const local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
    displayComments(local);
  }
}

function displayComments(comments) {
  const list = document.getElementById('commentsList');
  if (comments.length === 0) {
    list.innerHTML = `<div class="logged-empty">${currentLang === 'tr' ? 'Henüz yorum yok.' : 'No comments yet.'}</div>`;
    return;
  }
  
  list.innerHTML = comments.map((c, i) => {
    const isAdmin = currentUser && currentUser.email === 'wupard@gmail.com';
    const isOwnComment = currentUser && currentUser.uid === c.userId;
    const isWupard = c.userEmail === 'wupard@gmail.com';
    const showPhoto = !c.isAnonymous && c.userPhoto;
    
    const userRank = c.rank || (isWupard ? 'mod' : 'default');
    const rank = RANKS[userRank] || RANKS.default;
    
    // Upvote logic
    const upvotes = c.upvotes || 0;
    const upvotedBy = c.upvotedBy || [];
    const hasUpvoted = currentUser && upvotedBy.includes(currentUser.uid);
    // Kendi yorumuna upvote atamaz
    const canUpvote = !isOwnComment;

    // Replies
    const replies = c.replies || [];
    const repliesHtml = replies.length > 0 ? `
      <div class="comment-replies" style="margin-top: 12px; padding-left: 34px; border-left: 2px solid var(--border-subtle); margin-left: 34px;">
        ${replies.map(r => {
          const rPhoto = !r.isAnonymous && r.userPhoto;
          const rRank = RANKS[r.rank || 'default'] || RANKS.default;
          const rIsWupard = r.userEmail === 'wupard@gmail.com';
          return `
            <div style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; gap: 8px;">
              ${rPhoto 
                ? `<img src="${r.userPhoto}" style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--accent-primary); flex-shrink: 0; margin-top: 1px;" referrerpolicy="no-referrer">` 
                : `<div style="width: 20px; height: 20px; border-radius: 50%; background: var(--bg-primary); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; color: var(--text-tertiary); border: 1px solid var(--border-subtle); flex-shrink: 0;">?</div>`
              }
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
                  <span style="font-weight: 700; font-size: 0.8rem; color: ${rIsWupard ? '#FFD700' : 'var(--accent-primary)'}">${r.userName}</span>
                  <span style="font-size: 0.55rem; padding: 1px 5px; border-radius: 4px; background: ${rRank.bg}; color: ${rRank.color}; font-weight: 800;">${rRank.label}</span>
                  <span style="font-size: 0.68rem; color: var(--text-muted);">${new Date(r.timestamp).toLocaleDateString()}</span>
                </div>
                <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">${r.text}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : '';

    return `
      <div class="comment-item" style="padding: 16px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-card-alt); border-radius: 12px; margin-bottom: 12px; position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            ${showPhoto ? 
              `<img src="${c.userPhoto}" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--accent-primary);" referrerpolicy="no-referrer">` : 
              `<div style="width: 24px; height: 24px; border-radius: 50%; background: var(--bg-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--text-tertiary); border: 1px solid var(--border-subtle);">?</div>`
            }
            <div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-weight: 600; font-size: 0.9rem; color: ${isWupard ? '#FFD700' : 'var(--accent-primary)'};">${c.userName}</span>
                <span style="font-size: 0.6rem; padding: 1px 6px; border-radius: 4px; background: ${rank.bg}; color: ${rank.color}; font-weight: 800;">${rank.label}</span>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">${new Date(c.timestamp).toLocaleDateString()}</span>
            ${isAdmin ? `<button onclick="adminDeleteComment('${c.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 4px; border-radius: 6px; transition: all 0.2s;" title="Yorumu Sil">🗑️</button>` : ''}
          </div>
        </div>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-primary); padding-left: 34px;">${c.text}</p>
        <div style="margin-top: 12px; display: flex; gap: 12px; align-items: center; padding-left: 34px;">
          <button onclick="${canUpvote ? `upvoteComment('${c.id}')` : `showToast('${currentLang === 'tr' ? 'Kendi yorumuna oy veremezsin!' : 'You cannot upvote your own comment!'}', 'error')`}" 
            title="${isOwnComment ? (currentLang === 'tr' ? 'Kendi yorumuna oy veremezsin' : 'Cannot upvote your own comment') : ''}"
            style="background:${hasUpvoted ? 'var(--accent-glow)' : 'transparent'}; border:1px solid ${hasUpvoted ? 'var(--accent-primary)' : 'transparent'}; color:${isOwnComment ? 'var(--text-muted)' : hasUpvoted ? 'var(--accent-primary)' : 'var(--text-muted)'}; font-size:0.8rem; cursor:${isOwnComment ? 'not-allowed' : 'pointer'}; display:flex; align-items:center; gap:4px; padding: 4px 8px; border-radius: 6px; transition: all 0.2s; opacity: ${isOwnComment ? '0.4' : '1'};">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            <span style="font-weight: bold;">${upvotes}</span>
          </button>
          ${currentUser ? `
            <button onclick="toggleReplyForm('${c.id}')" 
              style="background: transparent; border: 1px solid transparent; color: var(--text-muted); font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 6px; transition: all 0.2s;"
              onmouseenter="this.style.color='var(--accent-primary)'; this.style.borderColor='rgba(139,124,247,0.3)'; this.style.background='rgba(139,124,247,0.08)'"
              onmouseleave="this.style.color='var(--text-muted)'; this.style.borderColor='transparent'; this.style.background='transparent'">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              ${currentLang === 'tr' ? 'Yanıtla' : 'Reply'}${replies.length > 0 ? ` <span style="font-size:0.7rem;background:rgba(139,124,247,0.15);color:var(--accent-primary);padding:1px 5px;border-radius:10px;">${replies.length}</span>` : ''}
            </button>
          ` : ''}
        </div>
        <!-- Reply Form (hidden by default) -->
        <div id="replyForm_${c.id}" style="display: none; margin-top: 12px; padding-left: 34px;">
          <div style="display: flex; gap: 8px; align-items: flex-end;">
            <textarea id="replyInput_${c.id}" rows="2" placeholder="${currentLang === 'tr' ? 'Yanıtını yaz...' : 'Write your reply...'}" style="flex: 1; background: var(--bg-input, var(--bg-main)); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 8px 12px; font-size: 0.85rem; color: var(--text-primary); resize: none; font-family: inherit; outline: none; transition: border-color 0.2s;"></textarea>
            <button onclick="sendReply('${c.id}')" style="background: var(--accent-primary); border: none; color: white; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: opacity 0.2s; white-space: nowrap;" onmouseenter="this.style.opacity='0.85'" onmouseleave="this.style.opacity='1'">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align: middle;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
        ${repliesHtml}
      </div>
    `;
  }).join('');
}

window.adminDeleteComment = async function(commentId) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  if (!confirm('Bu yorumu silmek istediğine emin misin?')) return;
  
  try {
    await db.collection('public_comments').doc(commentId).delete();
    showToast('Yorum silindi.', 'success');
    renderComments();
  } catch (e) {
    console.error('Delete Error:', e);
    showToast('Yorum silinemedi!', 'error');
  }
};

window.upvoteComment = async function(commentId) {
  if (!currentUser) {
    showToast(currentLang === 'tr' ? 'Beğenmek için giriş yapmalısın!' : 'Sign in to upvote!', 'error');
    return;
  }

  if (isFirebaseConfigured && db) {
    const docRef = db.collection('public_comments').doc(commentId);
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();

      // Kendi yorumuna upvote atamasın
      if (data.userId === currentUser.uid) {
        showToast(currentLang === 'tr' ? 'Kendi yorumuna oy veremezsin!' : 'You cannot upvote your own comment!', 'error');
        return;
      }

      const upvotedBy = data.upvotedBy || [];
      
      if (upvotedBy.includes(currentUser.uid)) {
        // Remove upvote
        await docRef.update({
          upvotes: firebase.firestore.FieldValue.increment(-1),
          upvotedBy: firebase.firestore.FieldValue.arrayRemove(currentUser.uid)
        });
      } else {
        // Add upvote
        await docRef.update({
          upvotes: firebase.firestore.FieldValue.increment(1),
          upvotedBy: firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
        });
      }
      renderComments();
    }
  }
};

window.toggleReplyForm = function(commentId) {
  const form = document.getElementById('replyForm_' + commentId);
  if (!form) return;
  const isVisible = form.style.display !== 'none';
  form.style.display = isVisible ? 'none' : 'block';
  if (!isVisible) {
    const textarea = document.getElementById('replyInput_' + commentId);
    if (textarea) setTimeout(() => textarea.focus(), 50);
  }
};

window.sendReply = async function(commentId) {
  if (!currentUser) {
    showToast(currentLang === 'tr' ? 'Yanıtlamak için giriş yapmalısın!' : 'Sign in to reply!', 'error');
    return;
  }

  const textarea = document.getElementById('replyInput_' + commentId);
  if (!textarea) return;
  const text = textarea.value.trim();
  if (!text) return;

  const reply = {
    text,
    userId: currentUser.uid,
    userName: currentUser.displayName || 'Kullanıcı',
    userEmail: currentUser.email || null,
    userPhoto: currentUser.photoURL || null,
    isAnonymous: false,
    timestamp: Date.now(),
    rank: (currentUser.email === 'wupard@gmail.com') ? 'mod' : (appData.userRank || 'default')
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = db.collection('public_comments').doc(commentId);
      const doc = await docRef.get();
      if (doc.exists) {
        const existing = doc.data().replies || [];
        existing.push(reply);
        await docRef.update({ replies: existing });
        textarea.value = '';
        document.getElementById('replyForm_' + commentId).style.display = 'none';
        showToast(currentLang === 'tr' ? 'Yanıt gönderildi! 💬' : 'Reply sent! 💬', 'success');
        renderComments();
      }
    } catch(e) {
      console.error('Reply Error:', e);
      showToast(currentLang === 'tr' ? 'Yanıt gönderilemedi!' : 'Failed to send reply!', 'error');
    }
  } else {
    // Local mode
    let localComments = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
    const idx = localComments.findIndex(c => c.id === commentId || c.timestamp === parseInt(commentId));
    if (idx > -1) {
      if (!localComments[idx].replies) localComments[idx].replies = [];
      localComments[idx].replies.push(reply);
      localStorage.setItem('zyro_local_comments', JSON.stringify(localComments));
      textarea.value = '';
      document.getElementById('replyForm_' + commentId).style.display = 'none';
      showToast(currentLang === 'tr' ? 'Yanıt kaydedildi.' : 'Reply saved.', 'success');
      renderComments();
    }
  }
};

// =============================================
// ADMIN PANEL (Special for Wupard)
// =============================================
function renderAdminPanel() {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  
  // Show Admin Section
  const pageComments = document.getElementById('pageComments');
  if (!pageComments) return;
  
  // Add Admin Header
  if (!document.getElementById('adminPanelHeader')) {
    const adminHeader = document.createElement('div');
    adminHeader.id = 'adminPanelHeader';
    adminHeader.className = 'card admin-card-premium';
    adminHeader.innerHTML = `
      <div class="admin-header-main">
        <div class="admin-brand-section">
          <div class="admin-crown-icon">👑</div>
          <div>
            <h2 class="admin-title">Yönetim Merkezi</h2>
            <p class="admin-subtitle">Hoş geldin Wupard. Sisteme tam erişim sağlandı.</p>
          </div>
        </div>
        <div class="admin-status-badge">Süper Yetkili</div>
      </div>
      <div class="admin-nav-tabs">
        <button onclick="adminShowSection('users')" class="admin-tab-btn" id="adminTabUsers">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Kullanıcılar
        </button>
        <button onclick="adminShowSection('comments')" class="admin-tab-btn" id="adminTabComments">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Tüm Yorumlar
        </button>
      </div>
    `;
    pageComments.prepend(adminHeader);
    
    const adminContent = document.createElement('div');
    adminContent.id = 'adminPanelContent';
    adminContent.className = 'card';
    adminContent.style.display = 'none';
    pageComments.insertBefore(adminContent, document.getElementById('publicCommentsCard'));
  }
}

window.adminShowSection = async function(section) {
  const content = document.getElementById('adminPanelContent');
  if (!content) return;
  
  content.style.display = 'block';
  content.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-secondary);"><div class="loading-spinner" style="margin: 0 auto 16px;"></div>Veriler çekiliyor...</div>';
  
  // Update active tab style
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (section === 'users') document.getElementById('adminTabUsers').classList.add('active');
  else if (section === 'comments') document.getElementById('adminTabComments').classList.add('active');

  try {
    if (section === 'users') {
      if (isFirebaseConfigured && db) {
        // Fetch users from both 'users' collection and also scan for potential auth users
        const snap = await db.collection('users').get();
        let html = '<div style="padding: 16px;"><h3 style="margin:0 0 20px 0; font-size: 1.1rem; color: var(--text-primary);">Kayıtlı Kullanıcılar</h3>';
        
        for (const doc of snap.docs) {
          const rawData = doc.data();
          // Merging logic to handle different data structures in Firebase
          const userData = rawData.data || rawData || {};
          const userEmail = rawData.email || userData.email || doc.id;
          const displayName = rawData.displayName || userData.userName || userData.displayName || 'İsimsiz Kullanıcı';
          const userPhoto = rawData.photoURL || userData.userPhoto || userData.photoURL || null;
          
          const userRank = userData.userRank || (userEmail === 'wupard@gmail.com' ? 'mod' : 'default');
          const rank = RANKS[userRank] || RANKS.default;
          
          html += `
            <div class="admin-user-row" style="padding: 16px; border-bottom: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 12px; transition: all 0.2s; border-radius: 12px; margin-bottom: 12px; background: rgba(255,255,255,0.02);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  ${userPhoto ? 
                    `<img src="${userPhoto}" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid ${rank.color}44;" referrerpolicy="no-referrer">` :
                    `<div style="width: 40px; height: 40px; border-radius: 50%; background: ${rank.bg}; color: ${rank.color}; display: flex; align-items: center; justify-content: center; font-weight: 700; border: 1px solid ${rank.color}44;">
                      ${displayName[0].toUpperCase()}
                    </div>`
                  }
                  <div>
                    <div style="font-weight:600; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 0.65rem; padding: 2px 8px; border-radius: 6px; background: ${rank.bg}; color: ${rank.color}; font-weight: 900;">${rank.label}</span>
                      ${displayName}
                    </div>
                    <div style="font-size:0.75rem; color:var(--text-tertiary); font-family: monospace;">${userEmail}</div>
                  </div>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button onclick="adminViewUserNotes('${doc.id}')" class="btn-small" style="background: var(--bg-primary); border: 1px solid var(--border-subtle);">Notlar</button>
                </div>
              </div>
              
              <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="font-size: 0.75rem; color: var(--text-tertiary); width: 100%; margin-bottom: 4px;">Rank Ver:</div>
                ${Object.entries(RANKS).filter(([k])=>k!=='default').map(([key, r]) => `
                  <button onclick="adminSetUserRank('${doc.id}', '${key}')" style="font-size: 0.7rem; padding: 4px 10px; border-radius: 6px; border: 1px solid ${r.color}44; background: ${userRank === key ? r.color : 'transparent'}; color: ${userRank === key ? '#000' : r.color}; cursor: pointer; font-weight: bold;">
                    ${r.label}
                  </button>
                `).join('')}
              </div>

              <div style="display: flex; gap: 8px; margin-top: 4px;">
                <button onclick="adminBanUser('${doc.id}', 'normal')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #ef444444; background: transparent; color: #ef4444; cursor: pointer; font-weight: bold;">🚫 Normal Ban</button>
                <button onclick="adminBanUser('${doc.id}', 'ip')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #ef4444; background: #ef444422; color: #ef4444; cursor: pointer; font-weight: bold;">🔥 IP Ban</button>
                <button onclick="adminUnbanUser('${doc.id}')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #22c55e44; background: transparent; color: #22c55e; cursor: pointer; font-weight: bold;">✅ Banı Kaldır</button>
              </div>
            </div>
          `;
        }
        html += '</div>';
        content.innerHTML = html;
      } else {
        content.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--red-vivid);">Firebase yapılandırılmamış.</div>';
      }
    } else if (section === 'comments') {
      renderComments();
      content.style.display = 'none';
    }
  } catch (e) {
    console.error('Admin Section Error:', e);
    content.innerHTML = `
      <div style="padding: 40px; text-align: center;">
        <div style="color: var(--red-vivid); font-weight: 600; margin-bottom: 8px;">Bir hata oluştu!</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px;">${e.message}</div>
        <button onclick="adminShowSection('${section}')" class="btn-small">Tekrar Dene</button>
      </div>
    `;
  }
};

window.adminViewUserNotes = async function(uid) {
  const content = document.getElementById('adminPanelContent');
  const snap = await db.collection('users').doc(uid).get();
  if (snap.exists) {
    const data = snap.data().data;
    const notes = data.notes || {};
    let html = `<div style="padding: 16px;"><button onclick="adminShowSection('users')" class="btn-small" style="margin-bottom:12px;">← Geri</button><h3>${data.userName || uid} - Notları</h3>`;
    const sortedNotes = Object.entries(notes).sort((a,b) => b[0].localeCompare(a[0]));
    if (sortedNotes.length === 0) {
      html += '<p>Not bulunamadı.</p>';
    } else {
      sortedNotes.forEach(([date, note]) => {
        html += `
          <div style="padding: 12px; background: var(--bg-card-alt); border-radius: 8px; margin-bottom: 12px;">
            <div style="font-weight:bold; font-size:0.8rem; margin-bottom:4px;">${date}</div>
            <div style="font-size:0.9rem;">${note.text}</div>
          </div>
        `;
      });
    }
    html += '</div>';
    content.innerHTML = html;
  }
};

window.adminSetUserRank = async function(uid, rankKey) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  
  try {
    const userDoc = db.collection('users').doc(uid);
    const snap = await userDoc.get();
    if (snap.exists) {
      const currentData = snap.data().data || {};
      currentData.userRank = rankKey;
      await userDoc.update({ 'data.userRank': rankKey });
      alert(`Kullanıcı rankı ${RANKS[rankKey].label} olarak güncellendi.`);
      adminShowSection('users');
    }
  } catch (e) {
    console.error('Rank Update Error:', e);
    alert('Rank güncellenemedi: ' + e.message);
  }
};

window.adminBanUser = async function(uid, type) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  
  const reason = prompt('Ban sebebi nedir?', 'Kural ihlali');
  if (reason === null) return;
  
  const duration = prompt('Ban süresi nedir?', 'Süresiz');
  if (duration === null) return;

  try {
    let ip = null;
    if (type === 'ip') {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      ip = ipData.ip;
    }

    await db.collection('bans').doc(uid).set({
      userId: uid,
      type: type,
      ip: ip,
      reason: reason,
      duration: duration,
      bannedBy: 'Wupard',
      timestamp: Date.now()
    });

    alert(`Kullanıcı ${type.toUpperCase()} olarak banlandı.`);
    adminShowSection('users');
  } catch (e) {
    console.error('Ban Error:', e);
    alert('Ban atılamadı: ' + e.message);
  }
};

window.adminUnbanUser = async function(uid) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  
  try {
    await db.collection('bans').doc(uid).delete();
    alert('Kullanıcının banı kaldırıldı.');
    adminShowSection('users');
  } catch (e) {
    console.error('Unban Error:', e);
    alert('Ban kaldırılamadı: ' + e.message);
  }
};

function renderProgressTracker() {
  const container = document.getElementById('progressTrackerContainer');
  if(!container) return;
  
  const allStats = computeExerciseStats();
  
  if (allStats.length === 0) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 0; text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 16px; background: rgba(52, 211, 153, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <p style="font-size: 1.125rem; font-weight: 600; margin: 0 0 4px 0;">Henüz veri yok</p>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">Egzersiz kaydettikçe burada görebilirsin</p>
      </div>
    `;
    return;
  }
  
  const filtered = currentTrackerCategory 
    ? allStats.filter(e => e.category === currentTrackerCategory)
    : allStats;
    
  const selectedEx = currentTrackerExercise 
    ? allStats.find(e => e.name === currentTrackerExercise)
    : filtered[0];

  let catBtnsHtml = `<button onclick="setTrackerCategory('')" class="tracker-cat-btn ${!currentTrackerCategory?'active':''}">${currentLang==='tr'?'Tümü':'All'}</button>`;
  
  Object.keys(EXERCISE_CATEGORIES).forEach(cat => {
    catBtnsHtml += `<button onclick="setTrackerCategory('${cat}')" class="tracker-cat-btn ${currentTrackerCategory===cat?'active':''}">${CATEGORY_ICONS[cat] || ''} ${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`;
  });
  
  let listHtml = '';
  filtered.forEach(ex => {
    const isSelected = selectedEx && selectedEx.name === ex.name;
    const diff = ex.currentWeight - ex.baselineWeight;
    const diffNode = diff !== 0 
      ? `<span style="font-size: 0.75rem; font-weight: bold; color: ${diff > 0 ? '#34d399' : '#f87171'}">${diff > 0 ? '+' : ''}${diff}kg</span>`
      : '';
      
    listHtml += `
      <button onclick="setTrackerExercise('${ex.name}')" class="tracker-list-item ${isSelected ? 'selected' : ''}">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="tracker-list-icon" style="background: rgba(139,124,247,0.1); color: #8B7CF7;">
            ${CATEGORY_ICONS[ex.category] || '🏋️'}
          </div>
          <div style="text-align: left;">
            <p style="margin: 0; font-weight: 500; font-size: 0.875rem;">${ex.name}</p>
            <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted);">${ex.currentWeight}kg × ${ex.currentReps}</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          ${diffNode}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${isSelected ? 'text-emerald-400' : 'text-muted'}"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </button>
    `;
  });
  
  let detailHtml = '';
  if (selectedEx) {
    const diff = selectedEx.currentWeight - selectedEx.baselineWeight;
    const percentChange = selectedEx.baselineWeight > 0 ? Math.round((diff / selectedEx.baselineWeight) * 100) : 0;
    const isPositive = diff > 0;
    const isNegative = diff < 0;
    
    // Convert to Date localized 
    const formatDate = (ds) => new Date(ds+'T00:00:00').toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US', {day:'numeric',month:'short',year:'numeric'});
    
    detailHtml = `
      <div class="tracker-detail-card" style="margin-top: 16px; padding: 20px; border-radius: 12px; background: rgba(139,124,247,0.05); border: 1px solid rgba(139,124,247,0.1);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.25rem;">${CATEGORY_ICONS[selectedEx.category] || '🏋️'}</span>
            <h4 style="margin: 0; font-weight: bold; color: #fff;">${selectedEx.name}</h4>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div class="tracker-stat-box">
            <p class="tracker-stat-label">${currentLang==='tr'?'Current':'Current'}</p>
            <p class="tracker-stat-val">${selectedEx.currentWeight}<span style="font-size:0.875rem;font-weight:normal;color:var(--text-muted)">kg</span></p>
          </div>
          <div class="tracker-stat-box">
            <p class="tracker-stat-label">${currentLang==='tr'?'Baseline':'Baseline'}</p>
            <p class="tracker-stat-val">${selectedEx.baselineWeight}<span style="font-size:0.875rem;font-weight:normal;color:var(--text-muted)">kg</span></p>
          </div>
          <div class="tracker-stat-box">
            <p class="tracker-stat-label">${currentLang==='tr'?'Progress':'Progress'}</p>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="font-size: 1.25rem; font-weight: 900; color: ${isPositive?'#34d399':isNegative?'#f87171':'inherit'}">${isPositive?'+':''}${diff}</span>
            </div>
          </div>
        </div>
        
        ${percentChange !== 0 ? `
        <div style="margin-top: 12px; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 8px; border-radius: 8px; background: rgba(255,255,255,0.05);">
          <span style="font-size: 1.125rem; font-weight: 900; color: ${isPositive?'#34d399':'#f87171'}">${isPositive?'+':''}${percentChange}%</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${currentLang==='tr'?'gelişim':'improvement'}</span>
        </div>
        ` : ''}
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
           <div style="padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
             <p style="font-size: 0.6rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 8px 0;">${currentLang==='tr'?'Son Güncelleme':'Last Updated'}</p>
             <p style="font-weight: bold; font-size: 0.9rem; margin: 0;">${formatDate(selectedEx.lastUpdated)}</p>
           </div>
           <div style="padding: 16px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
             <p style="font-size: 0.6rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin: 0 0 8px 0;">${currentLang==='tr'?'Başlangıç':'Baseline Set'}</p>
             <p style="font-weight: bold; font-size: 0.9rem; margin: 0;">${formatDate(selectedEx.baselineDate)}</p>
           </div>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = `
    <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px;" class="no-scrollbar">
      ${catBtnsHtml}
    </div>
    
    <div style="margin-top: 16px;">
      <label style="font-size: 0.625rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); display: block; margin-bottom: 8px;">
        ${currentLang==='tr'?'Egzersiz Seç':'Select Exercise'} (${filtered.length})
      </label>
      <div style="display: grid; gap: 8px; max-height: 180px; overflow-y: auto;" class="no-scrollbar">
        ${listHtml}
      </div>
    </div>
    
    ${detailHtml}
  `;
}

// =============================================
// CALCULATORS
// =============================================
function initCalculators() {
  document.querySelectorAll('.calc-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.calc-view').forEach(v => v.classList.remove('active'));
      btn.classList.add('active');
      const calcId = btn.dataset.calc;
      const view = document.getElementById('calc-' + calcId);
      if (view) view.classList.add('active');
    });
  });

  const kgInput = document.getElementById('calcKg');
  const lbsInput = document.getElementById('calcLbs');

  if (kgInput && lbsInput) {
    kgInput.addEventListener('input', () => {
      const kg = parseFloat(kgInput.value);
      if (!isNaN(kg)) {
        lbsInput.value = (kg * 2.20462).toFixed(2);
      } else {
        lbsInput.value = '';
      }
    });

    lbsInput.addEventListener('input', () => {
      const lbs = parseFloat(lbsInput.value);
      if (!isNaN(lbs)) {
        kgInput.value = (lbs / 2.20462).toFixed(2);
      } else {
        kgInput.value = '';
      }
    });
  }
  // Rich Activity Dropdown
  const richTrigger = document.getElementById('richSelectTrigger');
  const richOptions = document.getElementById('richOptions');
  const actHidden = document.getElementById('calcMacAct');
  
  if (richTrigger && richOptions) {
    richTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      richTrigger.classList.toggle('active');
      richOptions.classList.toggle('show');
    });

    document.querySelectorAll('.rich-option-item').forEach(item => {
      item.addEventListener('click', () => {
        const val = item.dataset.value;
        const title = item.querySelector('.rich-option-title').textContent;
        const desc = item.querySelector('.rich-option-desc').textContent;
        
        actHidden.value = val;
        
        // Update Trigger Display
        richTrigger.querySelector('.rich-option-title').textContent = title;
        richTrigger.querySelector('.rich-option-desc').textContent = desc;
        
        // Update Selected State
        document.querySelectorAll('.rich-option-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        
        richOptions.classList.remove('show');
        richTrigger.classList.remove('active');
      });
    });

    document.addEventListener('click', () => {
      richOptions.classList.remove('show');
      richTrigger.classList.remove('active');
    });
  }
}

window.calc1RM = function() {
  const w = parseFloat(document.getElementById('calc1rmW').value);
  const r = parseFloat(document.getElementById('calc1rmR').value);
  if (w > 0 && r > 0) {
    const oneRepMax = Math.round(w * (1 + r / 30));
    document.getElementById('res-1rm-val').textContent = oneRepMax;
    document.getElementById('res-1rm').style.display = 'flex';
  }
};

let bfpGender = 'male';
window.setBfpGender = function(gender) {
  bfpGender = gender;
  document.getElementById('bfp-btn-male').classList.toggle('active', gender === 'male');
  document.getElementById('bfp-btn-male').style.background = gender === 'male' ? 'var(--accent-primary)' : 'transparent';
  document.getElementById('bfp-btn-male').style.color = gender === 'male' ? 'white' : 'var(--text-muted)';
  
  document.getElementById('bfp-btn-female').classList.toggle('active', gender === 'female');
  document.getElementById('bfp-btn-female').style.background = gender === 'female' ? 'var(--accent-primary)' : 'transparent';
  document.getElementById('bfp-btn-female').style.color = gender === 'female' ? 'white' : 'var(--text-muted)';
  
  document.getElementById('calcBfpHipField').style.display = gender === 'female' ? 'block' : 'none';
};

window.calcBFP = function() {
  const h = parseFloat(document.getElementById('calcBfpH').value);
  const w = parseFloat(document.getElementById('calcBfpW').value);
  const n = parseFloat(document.getElementById('calcBfpN').value);
  const hp = parseFloat(document.getElementById('calcBfpHip').value);
  
  if (!h || !w || !n) return;
  
  let result;
  if (bfpGender === 'male') {
    result = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
  } else {
    if (!hp) return;
    result = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
  }
  
  if (!isNaN(result)) {
    document.getElementById('res-bfp-val').textContent = result.toFixed(1) + '%';
    document.getElementById('res-bfp').style.display = 'flex';
  }
};

window.calcGrowth = function() {
  const oldW = parseFloat(document.getElementById('calcGrOldW').value);
  const oldR = parseFloat(document.getElementById('calcGrOldR').value);
  const newW = parseFloat(document.getElementById('calcGrNewW').value);
  const currentR = parseFloat(document.getElementById('calcGrNewR').value);
  
  if (!oldW || !oldR || !newW || !currentR) return;
  
  const old1RM = oldW * (1 + oldR / 30);
  const new1RM = newW * (1 + currentR / 30);
  
  const diff = ((new1RM - old1RM) / old1RM * 100).toFixed(1);
  
  const valText = currentLang === 'tr' ? `Gücün %${diff} ${diff >= 0 ? 'arttı' : 'azaldı'}` : `Strength ${diff >= 0 ? 'increased' : 'decreased'} by ${diff}%`;
  document.getElementById('res-growth-val').textContent = valText;
  
  const bar = document.getElementById('res-growth-bar');
  const width = Math.min(100, Math.max(0, parseFloat(diff)));
  bar.style.width = width + '%';
  document.getElementById('res-growth').style.display = 'flex';
};

let macGender = 'male';
window.setMacGender = function(gender) {
  macGender = gender;
  document.getElementById('mac-btn-male').classList.toggle('active', gender === 'male');
  document.getElementById('mac-btn-male').style.background = gender === 'male' ? 'var(--accent-primary)' : 'transparent';
  document.getElementById('mac-btn-male').style.color = gender === 'male' ? 'white' : 'var(--text-muted)';
  
  document.getElementById('mac-btn-female').classList.toggle('active', gender === 'female');
  document.getElementById('mac-btn-female').style.background = gender === 'female' ? 'var(--accent-primary)' : 'transparent';
  document.getElementById('mac-btn-female').style.color = gender === 'female' ? 'white' : 'var(--text-muted)';
};

window.calcMacros = function() {
  const w = parseFloat(document.getElementById('calcMacW').value);
  const h = parseFloat(document.getElementById('calcMacH').value);
  const a = parseFloat(document.getElementById('calcMacA').value);
  const act = parseFloat(document.getElementById('calcMacAct').value);
  
  if (!w || !h || !a) return;
  
  // Mifflin-St Jeor
  let bmr = macGender === 'male'
    ? (10 * w) + (6.25 * h) - (5 * a) + 5
    : (10 * w) + (6.25 * h) - (5 * a) - 161;

  const tdee = bmr * act;
  const kcal = Math.round(tdee);
  const p = Math.round(w * 2); // 2g/kg
  const f = Math.round(w * 0.8); // 0.8g/kg
  const c = Math.round((tdee - (w * 2 * 4) - (w * 0.8 * 9)) / 4);
  
  document.getElementById('res-mac-kcal').textContent = kcal;
  document.getElementById('res-mac-p').textContent = p + 'g';
  document.getElementById('res-mac-f').textContent = f + 'g';
  document.getElementById('res-mac-c').textContent = c + 'g';
  document.getElementById('res-macros').style.display = 'grid';
};

// Ensure initCalculators is called when the app loads
setTimeout(() => { initCalculators(); }, 500);

// =============================================
// RENDER BEFORE/AFTER PHOTO NAV (renderProgressPhotoNav)
// =============================================
function renderProgressPhotoNav() {
  // No-op for now: photos already rendered via renderProgressPhotos()
  // Could be used to update compare button state
}

// =============================================
// FIX confirmWeeklyGoal (remove emoji from toast)
// =============================================
window.confirmWeeklyGoal = function() {
  const slider = document.getElementById('weeklyGoalSlider');
  const val = parseInt(slider.value);
  localStorage.setItem('weeklyGoal', val);
  appData.weeklyGoal = val;
  document.getElementById('weeklyGoalSheet')?.classList.remove('show');
  updateStats();
  showToast((currentLang === 'tr' ? 'Haftalik hedef ' : 'Weekly goal set to ') + val + (currentLang === 'tr' ? ' gun olarak kaydedildi!' : ' days!'), 'success');
};

// =============================================
// PROFILE PAGE (3.3)
// =============================================
function renderProfilePage() {
  const page = document.getElementById('pageProfile');
  if (!page) return;

  const profile = appData.profile || {};
  const displayName = profile.displayName || (currentUser ? (currentUser.displayName || 'User') : 'User');
  const bio = profile.bio || '';
  const hasPassword = !!profile.password;
  const measurements = profile.measurements || {};
  const userRankKey = appData.userRank || 'default';
  const rank = RANKS[userRankKey] || RANKS.default;

  // Achievements showcase (max 3 selected by user)
  const allUnlocked = ACHIEVEMENT_DEFS.filter(def => !!(appData.achievements || {})[def.id]);
  const unlockedCount = allUnlocked.length;
  const selectedIds = (appData.profile && appData.profile.showcaseBadges) || [];
  const showcaseBadges = selectedIds
    .map(id => ACHIEVEMENT_DEFS.find(d => d.id === id))
    .filter(Boolean)
    .filter(d => allUnlocked.find(u => u.id === d.id));

  // PRs
  const prs = {};
  Object.values(appData.workoutLogs || {}).forEach(logs => {
    logs.forEach(l => {
      if (!prs[l.exercise] || l.weight > prs[l.exercise]) prs[l.exercise] = l.weight;
    });
  });
  const prsHtml = Object.entries(prs).length > 0
    ? Object.entries(prs).sort((a,b) => b[1]-a[1]).slice(0,10).map(([ex, w]) =>
        `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-subtle);">
          <span style="font-size:0.85rem;color:var(--text-primary);">${ex}</span>
          <span style="font-weight:700;color:var(--accent-primary);">${w} kg</span>
        </div>`
      ).join('')
    : '<div style="color:var(--text-muted);font-size:0.85rem;padding:16px 0;">Henüz kayit yok.</div>';

  const avatarHtml = profile.photoURL
    ? `<img src="${profile.photoURL}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid var(--accent-primary);" referrerpolicy="no-referrer">`
    : `<div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--accent-primary),var(--accent-secondary));display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:white;border:3px solid var(--accent-primary);">${(displayName[0]||'U').toUpperCase()}</div>`;

  page.innerHTML = `
    <h2 class="page-title" style="margin-bottom:24px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:8px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Profil
    </h2>

    <!-- Profile Header Card -->
    <section class="card" style="margin-bottom:20px;">
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
        <div style="position:relative;cursor:pointer;" onclick="document.getElementById('profilePhotoInput').click();" title="Fotografi degistir">
          ${avatarHtml}
          <div style="position:absolute;bottom:0;right:0;width:24px;height:24px;background:var(--accent-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid var(--bg-card);">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </div>
        </div>
        <input type="file" id="profilePhotoInput" accept="image/*" style="display:none" onchange="handleProfilePhotoChange(event)">
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <span style="font-size:0.65rem;padding:3px 10px;border-radius:6px;background:${rank.bg};color:${rank.color};font-weight:900;letter-spacing:0.05em;">${rank.label}</span>
            <h3 style="font-size:1.3rem;font-weight:700;margin:0;">${displayName}</h3>
          </div>
          <div style="font-size:0.8rem;color:var(--text-muted);">${currentUser ? currentUser.email || '' : 'Yerel Mod'}</div>
          <div style="font-size:0.75rem;color:var(--accent-primary);margin-top:4px;">${unlockedCount}/${ACHIEVEMENT_DEFS.length} Basarim Kazanildi</div>
        </div>
      </div>
    </section>

    <!-- Name & Bio -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header"><h3 class="card-title">Kisisel Bilgiler</h3></div>
      <div class="log-field" style="margin-bottom:14px;">
        <label>Goruntulenen Ad</label>
        <input type="text" id="profileName" class="log-input" value="${displayName.replace(/"/g,'&quot;')}" placeholder="Adiniz" maxlength="40">
      </div>
      <div class="log-field" style="margin-bottom:14px;">
        <label>Hakkimda <span style="font-size:0.7rem;color:var(--text-muted);">(maks 500 karakter)</span></label>
        <textarea id="profileBio" class="note-input" maxlength="500" rows="3" placeholder="Kendinizi taniytin...">${bio}</textarea>
        <div id="profileBioCount" style="font-size:0.7rem;color:var(--text-muted);text-align:right;margin-top:4px;">${bio.length}/500</div>
      </div>
      <button class="btn-primary" onclick="saveProfileInfo()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Kaydet
      </button>
    </section>

    <!-- Password -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header"><h3 class="card-title">${hasPassword ? 'Sifre Degistir' : 'Sifre Belirle'}</h3></div>
      ${hasPassword ? `<div class="log-field" style="margin-bottom:14px;"><label>Mevcut Sifre</label><input type="password" id="profileOldPwd" class="log-input" placeholder="••••••••"></div>` : ''}
      <div class="log-field" style="margin-bottom:14px;">
        <label>Yeni Sifre</label>
        <input type="password" id="profileNewPwd" class="log-input" placeholder="••••••••" minlength="6">
      </div>
      <div class="log-field" style="margin-bottom:14px;">
        <label>Sifre Tekrar</label>
        <input type="password" id="profileNewPwd2" class="log-input" placeholder="••••••••">
      </div>
      <button class="btn-primary" onclick="saveProfilePassword()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        ${hasPassword ? 'Sifre Degistir' : 'Sifre Olustur'}
      </button>
    </section>

    <!-- Body Measurements -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header"><h3 class="card-title">Vucut Olculeri</h3></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
        <div class="log-field"><label>Yas</label><input type="number" id="measAge" class="log-input" placeholder="25" value="${measurements.age||''}" min="10" max="100"></div>
        <div class="log-field"><label>Cinsiyet</label>
          <select id="measGender" class="log-input">
            <option value="male" ${measurements.gender==='male'?'selected':''}>Erkek</option>
            <option value="female" ${measurements.gender==='female'?'selected':''}>Kadin</option>
          </select>
        </div>
        <div class="log-field"><label>Boy (cm)</label><input type="number" id="measHeight" class="log-input" placeholder="175" value="${measurements.height||''}" min="100" max="250"></div>
        <div class="log-field"><label>Kilo (kg)</label><input type="number" id="measWeight" class="log-input" placeholder="75" value="${measurements.weight||''}" min="20" max="300" step="0.1"></div>
        <div class="log-field"><label>Yag Orani (%)</label><input type="number" id="measBodyFat" class="log-input" placeholder="15" value="${measurements.bodyFat||''}" min="1" max="60" step="0.1"></div>
      </div>
      <button class="btn-primary" onclick="saveMeasurements()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
        Kaydet
      </button>
    </section>

    <!-- Lifted Weights (PRs) -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header">
        <h3 class="card-title">Kaldirilan Agirliklar</h3>
        <span class="card-badge">${Object.keys(prs).length} egzersiz</span>
      </div>
      <div>${prsHtml}</div>
    </section>

    <!-- Achievements in Profile -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header">
    <!-- Achievements Showcase -->
    <section class="card" style="margin-bottom:20px;">
      <div class="card-header">
        <h3 class="card-title">Vitrin Başarımları</h3>
        <span class="card-badge" style="background:rgba(255,215,0,0.15);color:#FFD700;">${unlockedCount}/${ACHIEVEMENT_DEFS.length}</span>
      </div>
      <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:14px;">Profilinde göstermek istediğin 3 rozeti seç.</div>
      <!-- Showcase Display -->
      <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">
        ${[0,1,2].map(i => {
          const badge = showcaseBadges[i];
          if (badge) {
            return `<div style="flex:1;min-width:80px;background:linear-gradient(135deg,rgba(255,215,0,0.15),rgba(255,165,0,0.08));border:1.5px solid rgba(255,215,0,0.4);border-radius:14px;padding:14px;text-align:center;">
              <div style="color:#FFD700;margin-bottom:6px;">${ACH_ICONS[badge.icon]||ACH_ICONS['star']}</div>
              <div style="font-size:0.7rem;font-weight:700;color:#FFD700;">${badge.name}</div>
            </div>`;
          }
          return `<div style="flex:1;min-width:80px;background:var(--bg-card-alt);border:1.5px dashed rgba(255,255,255,0.1);border-radius:14px;padding:14px;text-align:center;color:var(--text-muted);">
            <div style="font-size:1.5rem;margin-bottom:4px;">🔒</div>
            <div style="font-size:0.7rem;">Boş Slot</div>
          </div>`;
        }).join('')}
      </div>
      <!-- Badge Selector -->
      ${allUnlocked.length > 0 ? `
      <div style="font-size:0.72rem;color:var(--text-tertiary);text-transform:uppercase;font-weight:700;letter-spacing:.06em;margin-bottom:10px;">Kazanılan Rozetler</div>
      <div style="display:grid;gap:8px;">
        ${allUnlocked.map(def => {
          const isSelected = selectedIds.includes(def.id);
          return `<div onclick="toggleShowcaseBadge('${def.id}')" style="cursor:pointer;display:flex;align-items:center;gap:10px;padding:10px 12px;background:${isSelected?'linear-gradient(135deg,rgba(255,215,0,0.15),rgba(255,165,0,0.08))':'var(--bg-card-alt)'};border:${isSelected?'1.5px solid rgba(255,215,0,0.5)':'1px solid var(--border-subtle)'};border-radius:10px;transition:all 0.2s;">
            <div style="width:34px;height:34px;border-radius:8px;background:${isSelected?'rgba(255,215,0,0.15)':'rgba(255,255,255,0.05)'};display:flex;align-items:center;justify-content:center;color:${isSelected?'#FFD700':'var(--text-muted)'};flex-shrink:0;">${ACH_ICONS[def.icon]||ACH_ICONS['star']}</div>
            <div style="flex:1;font-size:0.82rem;font-weight:600;color:${isSelected?'#FFD700':'var(--text-primary)'};">${def.name}</div>
            ${isSelected?'<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>':''}
          </div>`;
        }).join('')}
      </div>` : '<div style="font-size:0.8rem;color:var(--text-tertiary);text-align:center;padding:16px 0;">Henüz rozet kazanılmadı. Egzersiz log et!</div>'}
    </section>
  `;

  // Bio character counter
  const bioTextarea = document.getElementById('profileBio');
  const bioCount = document.getElementById('profileBioCount');
  if (bioTextarea && bioCount) {
    bioTextarea.addEventListener('input', () => {
      bioCount.textContent = bioTextarea.value.length + '/500';
    });
  }
}

window.toggleShowcaseBadge = function(id) {
  if (!appData.profile) appData.profile = {};
  const list = appData.profile.showcaseBadges ? [...appData.profile.showcaseBadges] : [];
  const idx = list.indexOf(id);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    if (list.length >= 3) {
      showToast(currentLang === 'tr' ? 'En fazla 3 rozet seçebilirsin!' : 'Max 3 badges allowed!', 'error');
      return;
    }
    list.push(id);
  }
  appData.profile.showcaseBadges = list;
  saveData();
  renderProfilePage();
};

window.handleProfilePhotoChange = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const max = 256;
      const canvas = document.createElement('canvas');
      const ratio = Math.min(max / img.width, max / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      if (!appData.profile) appData.profile = {};
      appData.profile.photoURL = canvas.toDataURL('image/jpeg', 0.8);
      saveData();
      renderProfilePage();
      // Update sidebar avatar
      const avatar = document.getElementById('userAvatar');
      if (avatar) avatar.innerHTML = `<img src="${appData.profile.photoURL}" alt="Avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      showToast('Profil fotografi guncellendi', 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  event.target.value = '';
};

window.saveProfileInfo = function() {
  if (!appData.profile) appData.profile = {};
  const name = document.getElementById('profileName')?.value.trim();
  const bio = document.getElementById('profileBio')?.value.trim().slice(0, 500);
  if (name) appData.profile.displayName = name;
  if (bio !== undefined) appData.profile.bio = bio;
  saveData();
  // Update greeting
  setGreeting();
  const nameEl = document.getElementById('userName');
  if (nameEl && name) nameEl.textContent = name.split(' ')[0];
  showToast('Profil guncellendi', 'success');
};

window.saveProfilePassword = function() {
  const profile = appData.profile || {};
  const hasPassword = !!profile.password;
  const oldPwd = document.getElementById('profileOldPwd')?.value || '';
  const newPwd = document.getElementById('profileNewPwd')?.value || '';
  const newPwd2 = document.getElementById('profileNewPwd2')?.value || '';
  if (hasPassword && oldPwd !== profile.password) {
    showToast('Mevcut sifre yanlis!', 'error'); return;
  }
  if (newPwd.length < 6) { showToast('Sifre en az 6 karakter olmali!', 'error'); return; }
  if (newPwd !== newPwd2) { showToast('Sifreler eslesmyor!', 'error'); return; }
  if (!appData.profile) appData.profile = {};
  appData.profile.password = newPwd;
  saveData();
  renderProfilePage();
  showToast('Sifre guncellendi', 'success');
};

window.saveMeasurements = function() {
  if (!appData.profile) appData.profile = {};
  appData.profile.measurements = {
    age: parseFloat(document.getElementById('measAge')?.value) || 0,
    gender: document.getElementById('measGender')?.value || 'male',
    height: parseFloat(document.getElementById('measHeight')?.value) || 0,
    weight: parseFloat(document.getElementById('measWeight')?.value) || 0,
    bodyFat: parseFloat(document.getElementById('measBodyFat')?.value) || 0,
  };
  saveData();
  showToast('Vucut olculeri kaydedildi', 'success');
};

// =============================================
// UPDATE USER UI — Premium sidebar with rank left of name + "Senkronize" status
// =============================================
function updateUserUI(user){
  const avatar=document.getElementById('userAvatar');
  const name=document.getElementById('userName');
  const status=document.getElementById('userStatus');
  const signOutBtn=document.getElementById('signOutBtn');

  // Use profile photo if available, else Google photo, else initial
  const profilePhoto = appData.profile && appData.profile.photoURL;
  const profileName = appData.profile && appData.profile.displayName;

  if(profilePhoto){
    avatar.innerHTML=`<img src="${profilePhoto}" alt="Avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
  } else if(user && user.photoURL){
    avatar.innerHTML=`<img src="${user.photoURL}" alt="Avatar" referrerpolicy="no-referrer">`;
  } else {
    const n = profileName || (user && user.displayName) || 'U';
    avatar.textContent = n[0].toUpperCase();
  }
  const displayN = profileName || (user && user.displayName ? user.displayName.split(' ')[0] : 'User');
  name.textContent = displayN;
  
  // Status: "Senkronize" when logged in
  status.textContent = user ? 'Senkronize' : 'Yerel Mod';
  status.style.color = user ? 'var(--green-vivid)' : 'var(--text-tertiary)';
  
  if (signOutBtn) signOutBtn.style.display = user ? 'block' : 'none';

  // Rank Display
  const userRankKey = appData.userRank || (user && user.email === 'wupard@gmail.com' ? 'mod' : 'default');
  const rank = RANKS[userRankKey] || RANKS.default;

  const rankBadge = document.getElementById('userRank');
  if (rankBadge) {
    if (user) {
      rankBadge.style.display = 'inline-block';
      rankBadge.textContent = rank.label;
      rankBadge.style.color = rank.color;
      rankBadge.style.background = rank.bg;
    } else {
      rankBadge.style.display = 'none';
    }
  }

  if (user) {
    checkUserBan(user);
  }

  // Admin Check
  const rank2 = RANKS[userRankKey] || RANKS.default;
  if (user && rank2.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += ` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>`;
    }
    renderAdminPanel();
  } else {
    document.body.classList.remove('is-admin');
  }

  // Realtime rank update from Firestore
  if (user && isFirebaseConfigured && db) {
    db.collection('users').doc(user.uid).onSnapshot(snap => {
      if (snap.exists) {
        const userData = snap.data().data || {};
        if (userData.userRank) {
          appData.userRank = userData.userRank;
          const updRank = RANKS[userData.userRank] || RANKS.default;
          const rankEl = document.getElementById('userRankInfo');
          if (rankEl) {
            rankEl.textContent = updRank.label;
            rankEl.style.color = updRank.color;
            rankEl.style.background = updRank.bg;
          }
        }
        // Also update profile data
        if (userData.profile) {
          appData.profile = { ...appData.profile, ...userData.profile };
          const profileN = appData.profile.displayName;
          if (profileN && document.getElementById('userName')) {
            document.getElementById('userName').textContent = profileN.split(' ')[0];
          }
        }
      }
    });
  }
}

// =============================================
// ADMIN: Prevent mods from changing owner rank
// =============================================
window.adminSetUserRank = async function(uid, rankKey) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  
  // Prevent anyone from changing wupard's rank (owner protection)
  const targetDoc = await db.collection('users').doc(uid).get();
  if (targetDoc.exists) {
    const targetData = targetDoc.data();
    const targetEmail = targetData.email || (targetData.data && targetData.data.userEmail) || '';
    if (targetEmail === 'wupard@gmail.com' && currentUser.email !== 'wupard@gmail.com') {
      showToast('Bu kullanicinin ranki degistirilemez!', 'error');
      return;
    }
  }
  
  try {
    await db.collection('users').doc(uid).update({ 'data.userRank': rankKey });
    showToast('Rank guncellendi: ' + RANKS[rankKey].label, 'success');
    adminShowSection('users');
  } catch (e) {
    console.error('Rank Update Error:', e);
    showToast('Rank guncellenemedi: ' + e.message, 'error');
  }
};

// =============================================
// ADMIN: Fix anonymous display — load user info from auth/firestore data
// =============================================
window.adminShowSection = async function(section) {
  const content = document.getElementById('adminPanelContent');
  if (!content) return;
  
  content.style.display = 'block';
  content.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-secondary);"><div class="loading-spinner" style="margin: 0 auto 16px;"></div>Veriler cekiliyor...</div>';
  
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (section === 'users') document.getElementById('adminTabUsers')?.classList.add('active');
  else if (section === 'comments') document.getElementById('adminTabComments')?.classList.add('active');

  try {
    if (section === 'users') {
      if (isFirebaseConfigured && db) {
        const snap = await db.collection('users').get();
        let html = '<div style="padding: 16px;"><h3 style="margin:0 0 20px 0; font-size: 1.1rem; color: var(--text-primary);">Kayitli Kullanicilar</h3>';
        
        for (const doc of snap.docs) {
          const rawData = doc.data();
          const userData = rawData.data || rawData || {};
          // Try all possible name sources
          const displayName = (userData.profile && userData.profile.displayName)
            || rawData.displayName || userData.userName || userData.displayName
            || (userData.userEmail ? userData.userEmail.split('@')[0] : null)
            || 'Kullanici ' + doc.id.slice(0,6);
          const userEmail = rawData.email || userData.userEmail || userData.email || doc.id;
          // Try all possible photo sources
          const userPhoto = (userData.profile && userData.profile.photoURL)
            || rawData.photoURL || userData.userPhoto || userData.photoURL || null;
          
          const userRankKey2 = userData.userRank || (userEmail === 'wupard@gmail.com' ? 'mod' : 'default');
          const rank2 = RANKS[userRankKey2] || RANKS.default;
          const isOwner = userEmail === 'wupard@gmail.com';
          
          html += `
            <div class="admin-user-row" style="padding: 16px; border-bottom: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 12px; border-radius: 12px; margin-bottom: 12px; background: rgba(255,255,255,0.02);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  ${userPhoto 
                    ? `<img src="${userPhoto}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid ${rank2.color}44; object-fit:cover;" referrerpolicy="no-referrer">`
                    : `<div style="width: 40px; height: 40px; border-radius: 50%; background: ${rank2.bg}; color: ${rank2.color}; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size:1.1rem; border: 2px solid ${rank2.color}44;">${displayName[0].toUpperCase()}</div>`
                  }
                  <div>
                    <div style="font-weight:600; font-size: 1rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 0.65rem; padding: 2px 8px; border-radius: 6px; background: ${rank2.bg}; color: ${rank2.color}; font-weight: 900;">${rank2.label}</span>
                      ${displayName}
                      ${isOwner ? '<span style="font-size:0.65rem;color:#FFD700;">★ Sahip</span>' : ''}
                    </div>
                    <div style="font-size:0.75rem; color:var(--text-tertiary); font-family: monospace;">${userEmail}</div>
                  </div>
                </div>
                <div style="display: flex; gap: 8px;">
                  <button onclick="adminViewUserNotes('${doc.id}')" class="btn-small" style="background: var(--bg-primary); border: 1px solid var(--border-subtle);">Notlar</button>
                </div>
              </div>
              
              ${!isOwner ? `
              <div style="display: flex; flex-wrap: wrap; gap: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.05);">
                <div style="font-size: 0.75rem; color: var(--text-tertiary); width: 100%; margin-bottom: 4px;">Rank Ver:</div>
                ${Object.entries(RANKS).filter(([k])=>k!=='default').map(([key, r]) => `
                  <button onclick="adminSetUserRank('${doc.id}', '${key}')" style="font-size: 0.7rem; padding: 4px 10px; border-radius: 6px; border: 1px solid ${r.color}44; background: ${userRankKey2 === key ? r.color : 'transparent'}; color: ${userRankKey2 === key ? '#000' : r.color}; cursor: pointer; font-weight: bold;">
                    ${r.label}
                  </button>
                `).join('')}
              </div>
              <div style="display: flex; gap: 8px; margin-top: 4px;">
                <button onclick="adminBanUser('${doc.id}', 'normal')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #ef444444; background: transparent; color: #ef4444; cursor: pointer; font-weight: bold; display:flex; align-items:center; gap:5px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> Banla
                </button>
                <button onclick="adminBanUser('${doc.id}', 'ip')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #ef4444; background: #ef444422; color: #ef4444; cursor: pointer; font-weight: bold; display:flex; align-items:center; gap:5px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> IP Banla
                </button>
                <button onclick="adminUnbanUser('${doc.id}')" style="font-size: 0.7rem; padding: 6px 12px; border-radius: 6px; border: 1px solid #22c55e44; background: transparent; color: #22c55e; cursor: pointer; font-weight: bold; display:flex; align-items:center; gap:5px;">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Bani Kaldir
                </button>
              </div>` : '<div style="font-size:0.75rem;color:var(--accent-primary);padding-top:8px;border-top:1px solid rgba(255,255,255,0.05);">Sistem sahibi — rank degistirilemez</div>'}
            </div>
          `;
        }
        html += '</div>';
        content.innerHTML = html;
      } else {
        content.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--red-vivid);">Firebase yapilandirilmamis.</div>';
      }
    } else if (section === 'comments') {
      renderComments();
      content.style.display = 'none';
    }
  } catch (e) {
    console.error('Admin Section Error:', e);
    content.innerHTML = `
      <div style="padding: 40px; text-align: center;">
        <div style="color: var(--red-vivid); font-weight: 600; margin-bottom: 8px;">Bir hata olustu!</div>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px;">${e.message}</div>
        <button onclick="adminShowSection('${section}')" class="btn-small">Tekrar Dene</button>
      </div>
    `;
  }
};

// =============================================
// NOTIFICATION SYSTEM
// =============================================

const NOTIF_ICONS = {
  announcement: '📢',
  update:       '🆕',
  maintenance:  '🔧',
  info:         '💡',
};

const NOTIF_COLORS = {
  announcement: '#8b7cf7',
  update:       '#4ecb8d',
  maintenance:  '#e0943a',
  info:         '#5c8ade',
};

function initNotifications() {
  const bellBtn  = document.getElementById('notifBellBtn');
  const drawer   = document.getElementById('notifDrawer');
  const backdrop = document.getElementById('notifBackdrop');
  const markAllBtn = document.getElementById('markAllReadBtn');

  if (!bellBtn) return;

  bellBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      backdrop.classList.remove('visible');
    } else {
      drawer.classList.add('open');
      backdrop.classList.add('visible');
      renderNotifDrawer();
    }
  });

  if (markAllBtn) markAllBtn.addEventListener('click', markAllNotificationsRead);

  // Type selector toggle
  document.querySelectorAll('.notif-type-label').forEach(label => {
    label.addEventListener('click', () => {
      document.querySelectorAll('.notif-type-label').forEach(l => l.classList.remove('active'));
      label.classList.add('active');
    });
  });

  // Send notification button
  const sendNotifBtn = document.getElementById('sendNotifBtn');
  if (sendNotifBtn) sendNotifBtn.addEventListener('click', sendAdminNotification);

  loadAndCheckNotifications();
  requestPushPermission();
}

async function loadAndCheckNotifications() {
  if (!isFirebaseConfigured || !db) return;
  const readIds = getReadNotifIds();
  try {
    db.collection('notifications').orderBy('timestamp', 'desc').limit(30).onSnapshot(snap => {
      const notifs = [];
      snap.forEach(doc => notifs.push({ id: doc.id, ...doc.data() }));
      const unread = notifs.filter(n => !readIds.has(n.id));
      updateNotifBadge(unread.length);
      if (unread.length > 0) showNotifBanner(unread[0], unread.length);
    });
  } catch(e) { console.error('Notification load error:', e); }
}

async function renderNotifDrawer() {
  const list = document.getElementById('notifList');
  if (!list) return;
  list.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);"><div class="loading-spinner" style="margin:0 auto 10px;"></div>Yükleniyor...</div>`;

  if (!isFirebaseConfigured || !db) {
    list.innerHTML = `<div class="notif-empty"><p>Firebase bağlı değil</p></div>`;
    return;
  }
  try {
    const snap = await db.collection('notifications').orderBy('timestamp', 'desc').limit(20).get();
    const readIds = getReadNotifIds();
    if (snap.empty) {
      list.innerHTML = `<div class="notif-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.3;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><p>Henüz bildirim yok</p></div>`;
      return;
    }
    list.innerHTML = '';
    snap.forEach(doc => {
      const n = { id: doc.id, ...doc.data() };
      const isRead = readIds.has(n.id);
      const icon   = NOTIF_ICONS[n.type] || '🔔';
      const color  = NOTIF_COLORS[n.type] || 'var(--accent-primary)';
      const item   = document.createElement('div');
      item.className = `notif-item ${isRead ? 'read' : 'unread'}`;
      item.dataset.id = n.id;
      item.innerHTML = `
        <div class="notif-item-icon" style="background:${color}22;color:${color};">${icon}</div>
        <div class="notif-item-body">
          <div class="notif-item-title">${n.title || 'Bildirim'}</div>
          <div class="notif-item-msg">${n.message || ''}</div>
          <div class="notif-item-time">${formatTimeAgo(n.timestamp)}</div>
        </div>
        ${!isRead ? `<div class="notif-unread-dot"></div>` : ''}
      `;
      item.addEventListener('click', () => {
        markNotificationRead(n.id);
        item.classList.replace('unread','read');
        item.querySelector('.notif-unread-dot')?.remove();
      });
      list.appendChild(item);
    });
  } catch(e) {
    console.error('Notif render error:', e);
    list.innerHTML = `<div class="notif-empty"><p style="color:var(--red-vivid);">Yükleme hatası</p></div>`;
  }
}

async function sendAdminNotification() {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') {
    showToast('Yalnızca adminler bildirim gönderebilir!', 'error');
    return;
  }
  const title   = document.getElementById('notifTitleInput')?.value.trim();
  const message = document.getElementById('notifMessageInput')?.value.trim();
  const type    = document.querySelector('input[name="notifType"]:checked')?.value || 'announcement';
  if (!title || !message) { showToast('Başlık ve mesaj zorunludur!', 'error'); return; }
  if (!isFirebaseConfigured || !db) { showToast('Firebase bağlı değil!', 'error'); return; }

  const sendBtn = document.getElementById('sendNotifBtn');
  if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Gönderiliyor...'; }

  try {
    await db.collection('notifications').add({
      title, message, type,
      sentBy: currentUser.displayName || 'Admin',
      timestamp: Date.now(),
    });
    showToast('✅ Bildirim tüm kullanıcılara gönderildi!', 'success');
    if (document.getElementById('notifTitleInput'))   document.getElementById('notifTitleInput').value = '';
    if (document.getElementById('notifMessageInput')) document.getElementById('notifMessageInput').value = '';
  } catch(e) {
    showToast('Bildirim gönderilemedi: ' + e.message, 'error');
  } finally {
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> Tüm Kullanıcılara Gönder`;
    }
  }
}

function updateNotifBadge(count) {
  const badge = document.getElementById('notifBadge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = 'flex';
    document.getElementById('notifBellBtn')?.classList.add('has-notif');
  } else {
    badge.style.display = 'none';
    document.getElementById('notifBellBtn')?.classList.remove('has-notif');
  }
}

let _bannerTimeout = null;
function showNotifBanner(notif, totalUnread) {
  const banner = document.getElementById('notifBanner');
  const titleEl= document.getElementById('notifBannerTitle');
  const bodyEl = document.getElementById('notifBannerBody');
  if (!banner || !titleEl || !bodyEl) return;
  if (document.getElementById('notifDrawer')?.classList.contains('open')) return;

  const icon = NOTIF_ICONS[notif.type] || '🔔';
  titleEl.textContent = `${icon} ${notif.title || 'Yeni bildirim'}`;
  bodyEl.textContent  = totalUnread > 1
    ? `${totalUnread} okunmamış bildiriminiz var`
    : (notif.message || 'Tıklayarak görüntüleyin.');

  banner.style.display = 'flex';
  banner.classList.remove('notif-banner-out');
  setTimeout(() => banner.classList.add('notif-banner-in'), 10);

  banner.onclick = (e) => {
    if (e.target.closest('.notif-banner-close')) return;
    closeNotifBanner();
    document.getElementById('notifDrawer')?.classList.add('open');
    document.getElementById('notifBackdrop')?.classList.add('visible');
    renderNotifDrawer();
  };

  // Also send browser push notification
  sendBrowserPushNotif(
    (NOTIF_ICONS[notif.type] || '🔔') + ' ' + (notif.title || 'Zyro Bildirimi'),
    notif.message || '',
    '/favicon.svg'
  );

  if (_bannerTimeout) clearTimeout(_bannerTimeout);
  _bannerTimeout = setTimeout(() => closeNotifBanner(), 6000);
}

window.closeNotifBanner = function() {
  const banner = document.getElementById('notifBanner');
  if (!banner) return;
  banner.classList.remove('notif-banner-in');
  banner.classList.add('notif-banner-out');
  setTimeout(() => { banner.style.display = 'none'; banner.classList.remove('notif-banner-out'); }, 380);
};

function getReadNotifIds() {
  const key = `zyro_read_notifs_${currentUser?.uid || 'local'}`;
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch { return new Set(); }
}

function markNotificationRead(id) {
  const key = `zyro_read_notifs_${currentUser?.uid || 'local'}`;
  const ids = getReadNotifIds();
  ids.add(id);
  localStorage.setItem(key, JSON.stringify([...ids]));
  refreshNotifBadge();
}

async function markAllNotificationsRead() {
  if (!isFirebaseConfigured || !db) return;
  try {
    const snap = await db.collection('notifications').orderBy('timestamp', 'desc').limit(30).get();
    const ids = getReadNotifIds();
    snap.forEach(doc => ids.add(doc.id));
    localStorage.setItem(`zyro_read_notifs_${currentUser?.uid || 'local'}`, JSON.stringify([...ids]));
    updateNotifBadge(0);
    renderNotifDrawer();
    showToast('Tüm bildirimler okundu işaretlendi ✓', 'success');
  } catch(e) { console.error('Mark all read error:', e); }
}

async function refreshNotifBadge() {
  if (!isFirebaseConfigured || !db) return;
  const readIds = getReadNotifIds();
  try {
    const snap = await db.collection('notifications').orderBy('timestamp', 'desc').limit(30).get();
    let unread = 0;
    snap.forEach(doc => { if (!readIds.has(doc.id)) unread++; });
    updateNotifBadge(unread);
  } catch(e) {}
}

function formatTimeAgo(ts) {
  const diff  = Date.now() - ts;
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 1)   return 'Az önce';
  if (mins < 60)  return `${mins} dakika önce`;
  if (hours < 24) return `${hours} saat önce`;
  return `${days} gün önce`;
}

async function requestPushPermission() {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) return;
  if (Notification.permission === 'default') {
    setTimeout(async () => {
      try { await Notification.requestPermission(); } catch(e) {}
    }, 5000);
  }
}

function sendBrowserPushNotif(title, body, icon) {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    try {
      new Notification(title, { body, icon: icon || '/favicon.svg', badge: '/favicon.svg', tag: 'zyro-notif' });
    } catch(e) { console.warn('Push notif failed:', e); }
  }
}

function showAdminNotifPanel() {
  const panel = document.getElementById('adminNotifPanel');
  if (panel && currentUser && currentUser.email === 'wupard@gmail.com') {
    panel.style.display = 'block';
  }
}
