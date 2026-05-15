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
  'admin': { label: 'ADMIN', color: '#F472B6', bg: 'rgba(244, 114, 182, 0.15)', canAdmin: true },
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
  weeklyGoal: 0,
  firestoreAdmin: false
};

/** Unsubscribe previous Firestore listener before attaching a new one (nav repeats). */
let commentsListenerUnsub = null;
let userProfileListenerUnsub = null;

function commentAuthorRankKey() {
  if (!currentUser) return 'default';
  if (currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin) return 'mod';
  if (appData.userRank === 'admin') return 'admin';
  if (appData.userRank === 'mod') return 'mod';
  return appData.userRank || 'default';
}

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
    db.collection('users').doc(currentUser.uid).set({data:appData},{merge:true}).catch(e=>console.error('Save:',e));
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
         docRef.set({ data: appData }, { merge: true });
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
  const adminItems = document.querySelectorAll('.admin-only');

  if(user&&user.photoURL){
    avatar.innerHTML=`<img src="${user.photoURL}" alt="Avatar" referrerpolicy="no-referrer">`;
  } else {
    avatar.textContent=(user&&user.displayName)?user.displayName[0].toUpperCase():'Z';
  }
  name.textContent=(user&&user.displayName)?user.displayName.split(' ')[0]:'User';
  status.textContent=user?t('synced'):t('localMode');
  status.style.color=user?'var(--green-vivid)':'var(--text-tertiary)';
  signOutBtn.style.display=user?'block':'none';

  // Admin Check
  const isAdmin = user && (user.email === 'wupard@gmail.com' || appData.userRank === 'admin' || appData.userRank === 'mod');
  if (isAdmin) {
    adminItems.forEach(el => el.style.display = 'flex');
    document.body.classList.add('is-admin');
  } else {
    adminItems.forEach(el => el.style.display = 'none');
    document.body.classList.remove('is-admin');
  }
  
  // Rank & Profile Display
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
    const userRank = appData.userRank || (isAdmin ? 'mod' : 'default');
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
      const ri = document.getElementById('userRankInfo');
      ri.textContent = rank.label;
      ri.style.color = rank.color;
      ri.style.background = rank.bg;
    }

    // Ban Check
    checkUserBan(user);

    // Real-time Rank Sync
    if (isFirebaseConfigured && db) {
      db.collection('users').doc(user.uid).onSnapshot(snap => {
        if (snap.exists) {
          const userData = snap.data().data || {};
          if (userData.userRank) {
            appData.userRank = userData.userRank;
            const updatedRank = RANKS[userData.userRank] || RANKS.default;
            const rankEl = document.getElementById('userRankInfo');
            if (rankEl) {
              rankEl.textContent = updatedRank.label;
              rankEl.style.color = updatedRank.color;
              rankEl.style.background = updatedRank.bg;
            }
          }
        }
      }, err => console.error("Rank sync error:", err));
    }
  }
}

window.toggleNotifDrawer = function() {
  const drawer = document.getElementById('notifDrawer');
  const backdrop = document.getElementById('notifBackdrop');
  if (!drawer || !backdrop) return;
  
  const isOpen = drawer.classList.toggle('open');
  backdrop.classList.toggle('show', isOpen);
};

async function checkUserBan(user) {
  if (!isFirebaseConfigured || !db || !user) return;
  
  try {
    // We use a safer approach for ban check to avoid permission errors for non-admin users
    // if the 'bans' collection is restricted.
    let isBanned = false;
    let banData = null;

    try {
      const banDoc = await db.collection('bans').doc(user.uid).get();
      if (banDoc.exists) {
        isBanned = true;
        banData = banDoc.data();
      }
    } catch (permErr) {
      console.warn('Ban check permission restricted, skipping individual check');
    }

    if (!isBanned) {
      // Check IP Ban
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        const ipBanDoc = await db.collection('bans').where('ip', '==', ipData.ip).get();
        if (!ipBanDoc.empty) {
          isBanned = true;
          banData = ipBanDoc.docs[0].data();
        }
      } catch (ipErr) {
        console.warn('IP Ban check failed or restricted');
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
  // Improved mobile sidebar toggle with backdrop, aria, and ESC support
  const menuToggleEl = document.getElementById('menuToggle');
  const sidebarEl = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  if (menuToggleEl && sidebarEl) {
    // Accessible sidebar open/close with focus management and focus-trap
    menuToggleEl.setAttribute('aria-expanded', 'false');
    let _prevFocus = null;
    let _trapHandler = null;
    const _focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const openSidebar = () => {
      const opening = true;
      sidebarEl.classList.add('open');
      menuToggleEl.setAttribute('aria-expanded', String(opening));
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.add('show');
        sidebarBackdrop.setAttribute('aria-hidden', 'false');
      }
      if (window.innerWidth <= 900) document.body.style.overflow = 'hidden';

      // Save previous focus and move focus into the sidebar
      try { _prevFocus = document.activeElement; } catch (e) { _prevFocus = null; }
      const first = sidebarEl.querySelector(_focusableSelector);
      if (first && typeof first.focus === 'function') first.focus();
      else sidebarEl.setAttribute('tabindex', '-1'); sidebarEl.focus();

      // Trap Tab focus inside sidebar
      _trapHandler = (e) => {
        if (e.key !== 'Tab') return;
        const focusables = Array.from(sidebarEl.querySelectorAll(_focusableSelector)).filter(el => el.offsetParent !== null);
        if (focusables.length === 0) { e.preventDefault(); return; }
        const idx = focusables.indexOf(document.activeElement);
        if (e.shiftKey) {
          if (idx === 0 || document.activeElement === sidebarEl) { e.preventDefault(); focusables[focusables.length - 1].focus(); }
        } else {
          if (idx === focusables.length - 1) { e.preventDefault(); focusables[0].focus(); }
        }
      };
      document.addEventListener('keydown', _trapHandler);
    };

    const closeSidebar = () => {
      sidebarEl.classList.remove('open');
      menuToggleEl.setAttribute('aria-expanded', 'false');
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.remove('show');
        sidebarBackdrop.setAttribute('aria-hidden', 'true');
      }
      document.body.style.overflow = '';
      if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
      if (_prevFocus && typeof _prevFocus.focus === 'function') {
        try { _prevFocus.focus(); } catch (e) {}
      }
      _prevFocus = null;
    };

    menuToggleEl.addEventListener('click', () => {
      if (sidebarEl.classList.contains('open')) closeSidebar(); else openSidebar();
    });

    // expose closeSidebar to other handlers below via closure
    // attach to elements handled further down (backdrop, outside click, ESC)
    // we'll reference closeSidebar inside those listeners
    // (no global exposure needed)
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      // closeSidebar is in scope only if menuToggleEl & sidebarEl existed
      if (typeof closeSidebar === 'function') {
        closeSidebar();
        return;
      }
      if (sidebarEl) sidebarEl.classList.remove('open');
      sidebarBackdrop.classList.remove('show');
      sidebarBackdrop.setAttribute('aria-hidden', 'true');
      if (menuToggleEl) menuToggleEl.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  // Click outside to close on mobile (keeps existing behaviour but more robust)
  document.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      const tg = document.getElementById('menuToggle');
      if (sidebarEl && !sidebarEl.contains(e.target) && tg && !tg.contains(e.target) && sidebarEl.classList.contains('open')) {
        if (typeof closeSidebar === 'function') { closeSidebar(); return; }
        sidebarEl.classList.remove('open');
        if (sidebarBackdrop) {
          sidebarBackdrop.classList.remove('show');
          sidebarBackdrop.setAttribute('aria-hidden', 'true');
        }
        if (menuToggleEl) menuToggleEl.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebarEl && sidebarEl.classList.contains('open')) {
      if (typeof closeSidebar === 'function') { closeSidebar(); return; }
      sidebarEl.classList.remove('open');
      if (sidebarBackdrop) {
        sidebarBackdrop.classList.remove('show');
        sidebarBackdrop.setAttribute('aria-hidden', 'true');
      }
      if (menuToggleEl) menuToggleEl.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
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
  
  // Clear form on initialization (fix "log stays after refresh" issue)
  const clearFields = () => {
    const weightInp = document.getElementById('logWeight');
    const repsInp = document.getElementById('logReps');
    const setsInp = document.getElementById('logSets');
    const exInp = document.getElementById('logExercise');
    if(weightInp) weightInp.value = '';
    if(repsInp) repsInp.value = '';
    if(setsInp) setsInp.value = '';
    if(exInp) exInp.value = '';
  };
  clearFields();

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
    
    if(!exercise||isNaN(weight)||isNaN(reps)||isNaN(sets)) {
      showToast(currentLang === 'tr' ? 'Lütfen tüm alanları eksiksiz doldurun!' : 'Please fill in all fields!', 'error');
      return;
    }
    
    // Internal storage is always in KG
    const finalWeight = unit === 'lbs' ? Math.round(weight * 0.453592 * 10) / 10 : weight;
    
    const td=todayStr();
    if(!appData.workoutLogs[td])appData.workoutLogs[td]=[];
    appData.workoutLogs[td].push({exercise,weight:finalWeight,inputWeight:weight,unit:unit,reps,sets,timestamp:Date.now()});
    appData.attendance[td]=true;
    saveData();renderLoggedExercises();renderAttendance();updateMuscleMap();updateStats();
    // Check achievements on each log
    checkAchievements(exercise, finalWeight);
    clearFields();
    showToast(currentLang === 'tr' ? 'Egzersiz başarıyla kaydedildi!' : 'Exercise logged successfully!', 'success');
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
        const logToDelete = { ...appData.workoutLogs[td][idx] }; // Get a copy BEFORE splicing
        appData.workoutLogs[td].splice(idx,1);
        if(appData.workoutLogs[td].length===0) {
        delete appData.workoutLogs[td];
        // If no more logs for this day, also remove attendance
        delete appData.attendance[td];
      }
      saveData();
      renderLoggedExercises();
      updateMuscleMap();
      updateStats();
      syncAchievementsWithLogs(logToDelete); // Atomic cascade sync with audit log
    });
  });
}

/**
 * Re-verifies all achievements based on current workout logs and attendance.
 * If a log or streak that unlocked an achievement is gone, the achievement is removed.
 */
async function syncAchievementsWithLogs(deletedLog = null) {
  if (!appData.achievements) return;
  
  const oldAchievements = { ...appData.achievements };
  const newAchievements = {};
  const removedAchievements = [];
  
  // 1. Check exercise achievements
  const allLogs = [];
  Object.values(appData.workoutLogs || {}).forEach(dayLogs => {
    allLogs.push(...dayLogs);
  });

  ACHIEVEMENT_DEFS.forEach(def => {
    if (def.exercise) {
      // Find if any log satisfies this achievement
      const satisfied = allLogs.some(l => l.exercise === def.exercise && (l.weight || 0) >= def.target);
      if (satisfied) {
        newAchievements[def.id] = oldAchievements[def.id] || { unlockedAt: Date.now() };
      } else if (oldAchievements[def.id]) {
        removedAchievements.push(def.id);
      }
    }
  });

  // 2. Check streak achievements
  let maxStreak = 0;
  const sortedDates = Object.keys(appData.attendance || {}).sort();
  if (sortedDates.length > 0) {
    let currentStreak = 0;
    let lastDate = null;
    sortedDates.forEach(dateStr => {
      const d = new Date(dateStr);
      if (lastDate) {
        const diff = (d - lastDate) / 86400000;
        if (diff === 1) {
          currentStreak++;
        } else if (diff > 1) {
          currentStreak = 1;
        }
      } else {
        currentStreak = 1;
      }
      lastDate = d;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    });
  }

  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) {
      if (maxStreak >= def.target) {
        newAchievements[def.id] = oldAchievements[def.id] || { unlockedAt: Date.now() };
      } else if (oldAchievements[def.id]) {
        removedAchievements.push(def.id);
      }
    }
  });

  // 3. Audit Logging (If something removed)
  if (removedAchievements.length > 0 && db && currentUser) {
    const batch = db.batch();
    const auditRef = db.collection('audit_logs');
    
    removedAchievements.forEach(aid => {
      const logRef = auditRef.doc();
      batch.set(logRef, {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        action: 'ACHIEVEMENT_CASCADE_DELETE',
        achievementId: aid,
        timestamp: Date.now(),
        reason: deletedLog ? `Workout log deleted: ${deletedLog.exercise} (${deletedLog.weight}kg)` : 'Streak/Attendance change',
        deletedBy: 'System (Cascade)',
        executionTime: '< 500ms'
      });
    });

    try {
      await batch.commit();
      console.log('Cascade audit logs committed successfully.');
    } catch (e) {
      console.error('Audit batch commit failed:', e);
    }
  }

  appData.achievements = newAchievements;
  saveData();
  renderAchievements();
}



// =============================================
// =============================================
// MUSCLE MAP — Premium Redesign
// =============================================

let _muscleRange = 'today'; // 'today' | 'week'
let _muscleView  = 'front'; // 'front' | 'back'
let _activeMuscleTip = null;

// ── Muscle map display helpers ──────────────────
const MUSCLE_LABELS = {
  chest:'Göğüs', shoulders:'Omuz', biceps:'Biceps', triceps:'Triceps',
  forearms:'Unterkollar', abs:'Karın', obliques:'Yanlar',
  quads:'Quadriceps', calves:'Baldır', traps:'Sırt / Traps',
  glutes:'Glutlar', core:'Core'
};

function getMuscleColor(sets) {
  if (sets >= 16) return '#B388FF';
  if (sets >= 11) return '#EF5350';
  if (sets >= 6)  return '#FF7043';
  if (sets >= 1)  return '#FFD54F';
  return null;
}

// Build per-range volume map { muscle → { sets, exercises:[{name,sets}] } }
function buildMuscleVolume() {
  const vol = {};
  const addLog = (log) => {
    const muscles = EXERCISE_MUSCLES[log.exercise] || [];
    const s = parseInt(log.sets) || 0;
    muscles.forEach(m => {
      if (!vol[m]) vol[m] = { sets: 0, exercises: [] };
      vol[m].sets += s;
      const ex = vol[m].exercises.find(e => e.name === log.exercise);
      if (ex) ex.sets += s; else vol[m].exercises.push({ name: log.exercise, sets: s });
    });
  };
  if (_muscleRange === 'today') {
    (appData.workoutLogs[todayStr()] || []).forEach(addLog);
  } else {
    const monday = getMonday(new Date());
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(d.getDate() + i);
      (appData.workoutLogs[dateStr(d)] || []).forEach(addLog);
    }
  }
  return vol;
}

window.setMuscleRange = function(range) {
  _muscleRange = range;
  document.querySelectorAll('.mm-range-btn').forEach(b => b.classList.remove('active'));
  const btn = range === 'today' ? document.getElementById('mmBtnToday') : document.getElementById('mmBtnWeek');
  if (btn) btn.classList.add('active');
  closeMuscleTooltip();
  updateMuscleMap();
};

window.switchMuscleView = function(view) {}; // Deprecated but kept to prevent errors if called

function updateMuscleMap() {
  const vol = buildMuscleVolume();

  const totalSetsEl = document.getElementById('mmTotalSets');
  const totalBarEl = document.getElementById('mmTotalBar2');
  const exCountEl = document.getElementById('mmExCount');
  const summary = document.getElementById('muscleSummary');

  if (!totalSetsEl || !summary) return;

  let totalSets = 0;
  let allExercises = [];
  
  Object.values(vol).forEach(data => {
    totalSets += data.sets;
    data.exercises.forEach(ex => {
      const existing = allExercises.find(e => e.name === ex.name);
      if (existing) {
        existing.sets += ex.sets;
      } else {
        allExercises.push({ name: ex.name, sets: ex.sets });
      }
    });
  });

  totalSetsEl.innerText = totalSets;
  exCountEl.innerText = allExercises.length;

  if (totalBarEl) {
    const maxTarget = _muscleRange === 'today' ? 30 : 150;
    const pct = Math.min(100, Math.round((totalSets / maxTarget) * 100));
    totalBarEl.style.width = pct + '%';
  }

  if (allExercises.length === 0) {
    summary.innerHTML = `<div class="mm-no-data" style="text-align:center;color:var(--text-muted);padding:20px 0;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.3;margin-bottom:8px;"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg><br><span>${_muscleRange==='today'?'Bugün egzersiz yok.':'Bu hafta egzersiz yok.'}</span></div>`;
    return;
  }

  // Sort exercises by sets descending
  allExercises.sort((a,b) => b.sets - a.sets);

  summary.innerHTML = allExercises.map(ex => {
    return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);border-radius:10px;">
      <span style="font-size:0.85rem;color:var(--text-secondary);font-weight:500;">${ex.name}</span>
      <span style="font-size:0.85rem;color:var(--accent-primary);font-weight:700;font-family:'Space Grotesk',sans-serif;">${ex.sets} set</span>
    </div>`;
  }).join('');
}

// Removed tooltip rendering and stats rendering functions completely



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
    showToast(currentLang === 'tr' ? 'Rekor silindi' : 'PR deleted', 'success');
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
    
    showToast(currentLang === 'tr' ? 'Not kaydedildi!' : 'Note saved!', 'success');
    renderNotes();
  });
}

function renderNotes() {
  const container = document.getElementById('notesHistory');
  const bulkBtn = document.getElementById('bulkDeleteNotesBtn');
  if (!container) return;
  
  const entries = Object.values(appData.notes || {}).sort((a, b) => b.timestamp - a.timestamp);
  if (entries.length === 0) {
    container.innerHTML = `<div class="logged-empty">${currentLang === 'tr' ? 'Henüz not yok.' : 'No notes yet.'}</div>`;
    if (bulkBtn) bulkBtn.style.display = 'none';
    return;
  }
  
  if (bulkBtn) bulkBtn.style.display = 'flex';

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
      <div class="note-entry" style="padding:16px;background:var(--bg-card-alt);border-radius:12px;margin-bottom:12px;border:1px solid var(--border-subtle); display:flex; gap:12px;">
        <div style="padding-top:2px;">
          <input type="checkbox" class="note-checkbox" value="${note.id}" style="width:18px; height:18px; accent-color:var(--accent-primary); cursor:pointer;">
        </div>
        <div style="flex:1;">
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
      </div>
    `;
  }).join('');
}

window.bulkDeleteNotes = function() {
  const checkboxes = document.querySelectorAll('.note-checkbox:checked');
  if (checkboxes.length === 0) {
    showToast('Lütfen silmek istediğiniz notları seçin.', 'error');
    return;
  }
  
  if (!confirm(`${checkboxes.length} adet notu silmek istediğinize emin misiniz?`)) return;
  
  const idsToDelete = Array.from(checkboxes).map(cb => cb.value);
  idsToDelete.forEach(id => {
    delete appData.notes[id];
  });
  
  saveData();
  renderNotes();
  showToast(`${idsToDelete.length} not silindi.`, 'success');
};

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
  
  // Update flame animation
  if (typeof updateStreakFlame === 'function') updateStreakFlame();

  // ── Strength Progress (4th stat card) — Top PR ──
  const volEl = document.getElementById('statVolumeVal');
  const volBar = document.getElementById('statVolumeBar');
  const volDetail = document.getElementById('statVolumeDetail');
  let topPR = { exercise: '', weight: 0, date: '' };
  let allTimePRMax = 0;
  
  const hasLogs = Object.keys(appData.workoutLogs || {}).length > 0;
  if (!hasLogs) {
    localStorage.removeItem('zyro_prMax');
  }

  Object.entries(appData.workoutLogs || {}).forEach(([date, logs]) => {
    logs.forEach(l => {
      if ((l.weight || 0) > topPR.weight) {
        topPR = { exercise: l.exercise, weight: l.weight, date };
      }
      if ((l.weight || 0) > allTimePRMax) allTimePRMax = l.weight;
    });
  });
  if (volEl) {
    volEl.textContent = topPR.weight > 0 ? `${topPR.weight} kg` : '— kg';
  }
  if (volBar) {
    let storedMax = parseFloat(localStorage.getItem('zyro_prMax') || '0');
    if (allTimePRMax > storedMax) {
      storedMax = allTimePRMax;
      localStorage.setItem('zyro_prMax', allTimePRMax);
    }
    // If we have no logs, bar should be 0. If we have logs, compare to a target (e.g. 20% more than max)
    const barMax = Math.max(allTimePRMax * 1.2, storedMax, 1);
    volBar.style.width = topPR.weight > 0 ? `${Math.min((topPR.weight / barMax) * 100, 100)}%` : '0%';
  }
  if (volDetail) {
    if (topPR.weight > 0) {
      const prDate = new Date(topPR.date + 'T00:00:00');
      const daysDiff = Math.round((new Date() - prDate) / 86400000);
      const ago = daysDiff === 0 ? 'bugün' : daysDiff === 1 ? 'dün' : `${daysDiff} gün önce`;
      const exShort = topPR.exercise.length > 18 ? topPR.exercise.substring(0, 17) + '…' : topPR.exercise;
      volDetail.innerHTML = `<span style='cursor:pointer;' onmouseenter="this.style.color='var(--accent-primary)'" onmouseleave="this.style.color='var(--orange-vivid)'">${exShort} · ${ago}</span>`;
      volDetail.style.color = 'var(--orange-vivid)';
    } else {
      volDetail.textContent = 'Henüz egzersiz kaydı yok';
      volDetail.style.color = 'var(--text-tertiary)';
    }
  }
}

// =============================================
// STRENGTH DETAILS & PROGRESS (UPGRADED)
// =============================================
function calculateStrengthScore(weight, reps) {
  // Simple 1RM estimation using Epley Formula: 1RM = Weight * (1 + 0.0333 * Reps)
  if (!weight || !reps) return 0;
  return Math.round(weight * (1 + reps / 30)); 
}

window.showStrengthDetails = function(targetExercise = null) {
  const modal = document.getElementById('strengthDetailsModal');
  const content = document.getElementById('strengthDetailContent');
  const title = document.getElementById('strengthDetailTitle');
  if (!modal || !content) return;

  // 1. Gather all exercise data
  const exerciseData = {};
  Object.entries(appData.workoutLogs || {}).forEach(([date, logs]) => {
    logs.forEach(l => {
      if (!exerciseData[l.exercise]) exerciseData[l.exercise] = [];
      exerciseData[l.exercise].push({ 
        date, 
        weight: l.weight || 0, 
        reps: l.reps || 0, 
        sets: l.sets || 1,
        timestamp: l.timestamp || new Date(date).getTime() 
      });
    });
  });

  // 2. Determine which exercise to show
  let selectedEx = targetExercise;
  const allExercises = Object.keys(exerciseData).sort();

  if (allExercises.length === 0) {
    content.innerHTML = `<div class="logged-empty" style="padding:40px 20px;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.2;margin-bottom:16px;"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>
      <p>Henüz veri bulunamadı. Antrenman yaparak gelişiminizi takip etmeye başlayın!</p>
    </div>`;
    modal.style.display = 'flex';
    return;
  }

  if (!selectedEx) {
    // If no specific exercise, show a summary page first
    let summaryHtml = `
      <div style="margin-bottom:24px;">
        <h4 style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:16px;">Güç Kazandığın Hareketler</h4>
        <div style="display:flex; flex-direction:column; gap:12px;">
    `;

    const gains = [];
    allExercises.forEach(ex => {
      const history = exerciseData[ex].sort((a,b) => a.timestamp - b.timestamp);
      const first = history[0];
      const last = history[history.length-1];
      const weightGain = last.weight - first.weight;
      const scoreGain = calculateStrengthScore(last.weight, last.reps) - calculateStrengthScore(first.weight, first.reps);
      
      if (weightGain > 0 || scoreGain > 0) {
        gains.push({ name: ex, weightGain, scoreGain, lastWeight: last.weight, lastDate: last.date });
      }
    });

    if (gains.length === 0) {
      summaryHtml += `<div style="padding:20px; text-align:center; background:rgba(255,255,255,0.02); border-radius:12px; border:1px solid var(--border-subtle); color:var(--text-muted); font-size:0.85rem;">Henüz net bir güç artışı tespit edilemedi. Devam et!</div>`;
    } else {
      gains.sort((a,b) => b.scoreGain - a.scoreGain).forEach(g => {
        summaryHtml += `
          <div onclick="showStrengthDetails('${g.name}')" style="cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:14px; background:var(--bg-card-alt); border:1px solid var(--border-subtle); border-radius:12px; transition:all 0.2s;" onmouseenter="this.style.borderColor='var(--accent-primary)';this.style.transform='translateX(4px)'" onmouseleave="this.style.borderColor='var(--border-subtle)';this.style.transform='translateX(0)'">
            <div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--text-primary);">${g.name}</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">Son: ${g.lastWeight}kg · ${new Date(g.lastDate).toLocaleDateString('tr-TR', {day:'numeric', month:'short'})}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.85rem; font-weight:800; color:#4ecb8d;">+${g.weightGain}kg</div>
              <div style="font-size:0.6rem; color:var(--text-muted);">Gelişim</div>
            </div>
          </div>
        `;
      });
    }

    summaryHtml += `</div></div>
      <div style="margin-top:24px; padding-top:24px; border-top:1px solid var(--border-subtle);">
        <h4 style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Tüm Egzersizler</h4>
        <select onchange="showStrengthDetails(this.value)" style="width:100%; padding:12px; border-radius:12px; background:var(--bg-card-alt); color:var(--text-primary); border:1px solid var(--border-subtle); font-size:0.9rem;">
          <option value="" selected disabled>Bir egzersiz seçin...</option>
          ${allExercises.map(ex => `<option value="${ex}">${ex}</option>`).join('')}
        </select>
      </div>
    `;

    title.textContent = "Güç Gelişimi";
    content.innerHTML = summaryHtml;
    modal.style.display = 'flex';
    return;
  }

  // If specific exercise is selected
  title.textContent = selectedEx;
  const history = exerciseData[selectedEx].sort((a, b) => b.timestamp - a.timestamp); // Chronological desc
  const latest = history[0];
  const earliest = history[history.length-1];
  
  // 3. Render Header with Selector
  let selectorHtml = `
    <div style="margin-bottom:20px; display:flex; gap:10px;">
      <button onclick="showStrengthDetails()" style="background:var(--bg-card-alt); border:1px solid var(--border-subtle); color:var(--text-muted); padding:8px 12px; border-radius:10px; cursor:pointer;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg></button>
      <select onchange="showStrengthDetails(this.value)" style="flex:1; padding:10px; border-radius:10px; background:var(--bg-card-alt); color:var(--text-primary); border:1px solid var(--border-subtle); font-size:0.85rem;">
        ${allExercises.map(ex => `<option value="${ex}" ${ex === selectedEx ? 'selected' : ''}>${ex}</option>`).join('')}
      </select>
    </div>
  `;

  // 4. Predictions Section (Motivational)
  const current1RM = calculateStrengthScore(latest.weight, latest.reps);
  const nextWeekWeight = latest.weight + (latest.weight > 50 ? 2.5 : 1);
  const nextMonthWeight = latest.weight + (latest.weight > 50 ? 7.5 : 5);

  let predictionHtml = `
    <div style="background:linear-gradient(135deg, rgba(139,124,247,0.1), rgba(78,203,141,0.05)); border:1px solid rgba(139,124,247,0.2); border-radius:16px; padding:18px; margin-bottom:24px; position:relative; overflow:hidden;">
      <div style="position:absolute; top:-10px; right:-10px; font-size:4rem; opacity:0.05; transform:rotate(15deg);">🚀</div>
      <h4 style="font-size:0.75rem; color:var(--accent-primary); text-transform:uppercase; letter-spacing:1px; margin-bottom:14px; font-weight:800;">Gelecek Tahminleri</h4>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Gelecek Hafta</div>
          <div style="font-size:1.1rem; font-weight:900; color:var(--text-primary);">${nextWeekWeight}<small style="font-size:0.6rem; opacity:0.7;">kg</small></div>
          <div style="font-size:0.65rem; color:#4ecb8d; font-weight:600;">${latest.reps} Tekrar</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Gelecek Ay</div>
          <div style="font-size:1.1rem; font-weight:900; color:var(--text-primary);">${nextMonthWeight}<small style="font-size:0.6rem; opacity:0.7;">kg</small></div>
          <div style="font-size:0.65rem; color:#4ecb8d; font-weight:600;">${latest.reps} Tekrar</div>
        </div>
      </div>
      <p style="font-size:0.65rem; color:var(--text-muted); margin-top:12px; font-style:italic;">* Bu tahminler lineer gelişim ve düzenli antrenman baz alınarak hesaplanmıştır.</p>
    </div>
  `;

  // 5. Group by Month for History
  const groupedHistory = {};
  history.forEach(item => {
    const date = new Date(item.timestamp);
    const monthYear = date.toLocaleString('tr-TR', { month: 'long', year: 'numeric' });
    if (!groupedHistory[monthYear]) groupedHistory[monthYear] = [];
    groupedHistory[monthYear].push(item);
  });

  // 6. Render History Timeline
  let historyHtml = '<div class="strength-timeline" style="display:flex; flex-direction:column; gap:20px;">';
  Object.entries(groupedHistory).forEach(([monthYear, items]) => {
    historyHtml += `
      <div class="timeline-month-group">
        <div style="font-size:0.7rem; font-weight:800; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:12px; padding-left:4px;">${monthYear}</div>
        <div style="display:flex; flex-direction:column; gap:12px; border-left:1px dashed rgba(255,255,255,0.1); margin-left:8px; padding-left:16px;">
          ${items.map((curr, idx) => {
            const originalIdx = history.indexOf(curr);
            const next = history[originalIdx + 1]; 
            const weightDiff = next ? (curr.weight - next.weight) : 0;
            const score = calculateStrengthScore(curr.weight, curr.reps);
            const prevScore = next ? calculateStrengthScore(next.weight, next.reps) : 0;
            const scoreDiffPct = prevScore > 0 ? Math.round(((score - prevScore) / prevScore) * 100) : 0;

            const dateObj = new Date(curr.timestamp);
            const dateStrFormatted = dateObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });

            return `
              <div style="background:var(--bg-card-alt); border:1px solid var(--border-subtle); border-radius:14px; padding:12px; position:relative;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">${dateStrFormatted}</span>
                  <span style="font-size:0.65rem; font-weight:800; padding:2px 6px; border-radius:4px; background:rgba(139,124,247,0.1); color:var(--accent-primary);">${score} Puan</span>
                </div>
                <div style="display:flex; align-items:baseline; gap:8px;">
                  <span style="font-size:1.2rem; font-weight:900;">${curr.weight}kg</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">${curr.reps} Tekrar</span>
                  ${weightDiff > 0 ? `<span style="font-size:0.7rem; font-weight:800; color:#4ecb8d; margin-left:auto;">+${weightDiff}kg ↑</span>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });
  historyHtml += '</div>';

  content.innerHTML = selectorHtml + predictionHtml + historyHtml;
  modal.style.display = 'flex';
};

window.closeStrengthDetails = function() {
  document.getElementById('strengthDetailsModal').style.display = 'none';
};

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
  initComments();
  populateExerciseDropdown();renderAttendance();
  initWeeklyGoalSheet();
  initProgressPhotos();
  
  const notifBellBtn = document.getElementById('notifBellBtn');
  const notifDrawer = document.getElementById('notifDrawer');
  const notifBackdrop = document.getElementById('notifBackdrop');
  if (notifBellBtn && notifDrawer) {
    notifBellBtn.addEventListener('click', () => {
      notifDrawer.classList.add('open');
      if (notifBackdrop) notifBackdrop.classList.add('visible');
    });
  }

  if (notifBackdrop && notifDrawer) {
    notifBackdrop.addEventListener('click', () => {
      notifDrawer.classList.remove('open');
      notifBackdrop.classList.remove('visible');
    });
  }

  const markAllReadBtn = document.getElementById('markAllReadBtn');
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', markAllNotificationsAsRead);
  }

  loadData(()=>{
    refreshAllViews();
    renderAchievements();
    renderProgressPhotos();
    initNotifications(); // 2.5: Initialize notifications system
    // Update sidebar after data load
    if(currentUser) updateUserUI(currentUser);
  });
});

// =============================================
// NOTIFICATIONS (2.5) — Banner & Admin
// =============================================
let activeNotifications = [];
let notifUnsubscribe = null;
const __broadcastLastReadKey = 'zyro_broadcast_lastRead';

function __getBroadcastLastRead() {
  return parseInt(localStorage.getItem(__broadcastLastReadKey) || '0', 10) || 0;
}

function __setBroadcastLastRead(ts) {
  localStorage.setItem(__broadcastLastReadKey, String(ts || Date.now()));
}

function __isNotifRead(n) {
  if (!n) return true;
  if (n.scope === 'broadcast') return !!n.read || (n.timestamp || 0) <= __getBroadcastLastRead();
  return !!n.read;
}

function initNotifications() {
  if (!currentUser) return;

  const isAdmin = currentUser.email === 'wupard@gmail.com'; 

  // Cleanup old listener
  if (notifUnsubscribe) notifUnsubscribe();

  const notifList = document.getElementById('notifList');
  const badge = document.getElementById('notifBadge');
  const banner = document.getElementById('notifBanner');

  // 1. System/Broadcast Notifications (Real-time)
  const broadcastsRef = db.collection('notifications').orderBy('timestamp', 'desc').limit(20);
  
  // 2. Personal Notifications (Real-time)
  const personalRef = db.collection(`users/${currentUser.uid}/notifications`).orderBy('timestamp', 'desc').limit(20);

  // Combine and listen
  const syncNotifs = () => {
    Promise.all([broadcastsRef.get(), personalRef.get()]).then(([bSnap, pSnap]) => {
      const all = [];
      bSnap.forEach(doc => all.push({ id: doc.id, ...doc.data(), scope: 'broadcast' }));
      pSnap.forEach(doc => all.push({ id: doc.id, ...doc.data(), scope: 'personal' }));
      
      // Sort by timestamp
      all.sort((a, b) => b.timestamp - a.timestamp);
      activeNotifications = all;
      renderNotificationList();
      updateNotifBadge();
    });
  };

  // Set up listeners for real-time updates
  const unsub1 = broadcastsRef.onSnapshot(snap => {
    // Check for NEW system broadcast to auto-open
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data();
        const isNew = (Date.now() - data.timestamp) < 5000; // Last 5 seconds
        if (isNew) {
          showSystemNotification(data);
        }
      }
    });
    syncNotifs();
  });

  const unsub2 = personalRef.onSnapshot(() => syncNotifs());
  notifUnsubscribe = () => { unsub1(); unsub2(); };
}

function renderAdminHistory() {
  const historyContainer = document.getElementById('adminNotifHistory');
  if (!historyContainer) return;

  // Show only last 5 sent by current user or broadcasts
  const history = activeNotifications.slice(0, 5);
  
  if (history.length === 0) {
    historyContainer.innerHTML = '<div style="font-size:0.7rem; color:var(--text-tertiary);">Geçmiş bulunamadı.</div>';
    return;
  }

  historyContainer.innerHTML = history.map(h => `
    <div style="padding: 6px 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; display: flex; align-items: center; justify-content: space-between;">
      <div style="overflow: hidden;">
        <div style="font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${h.title}</div>
        <div style="font-size: 0.62rem; color: var(--text-tertiary);">${new Date(h.timestamp).toLocaleDateString()}</div>
      </div>
      <button onclick="deleteNotification('${h.id}', '${h.scope}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `).join('');
}

window.markAllNotificationsAsRead = function() {
  if (!currentUser || activeNotifications.length === 0) return;
  
  const unread = activeNotifications.filter(n => !__isNotifRead(n));
  if (unread.length === 0) {
    showToast('Tüm bildirimler zaten okundu.', 'info');
    return;
  }

  const broadcastMaxTs = Math.max(0, ...activeNotifications.filter(n => n.scope === 'broadcast').map(n => n.timestamp || 0));
  if (broadcastMaxTs > 0) __setBroadcastLastRead(broadcastMaxTs);

  const batch = db.batch();
  unread.filter(n => n.scope !== 'broadcast').forEach(n => {
    const path = `users/${currentUser.uid}/notifications/${n.id}`;
    batch.update(db.doc(path), { read: true });
  });

  batch.commit().then(() => {
    showToast('Tüm bildirimler okundu olarak işaretlendi.', 'success');
    activeNotifications.forEach(n => {
      if (n.scope === 'personal') n.read = true;
      if (n.scope === 'broadcast' && (n.timestamp || 0) <= broadcastMaxTs) n.read = true;
    });
    renderNotificationList();
    updateNotifBadge();
  }).catch(e => console.error('Batch read mark failed:', e));
};

function renderNotificationList() {
  const container = document.getElementById('notifList');
  if (!container) return;

  if (activeNotifications.length === 0) {
    container.innerHTML = `<div class="notif-empty">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.3;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <p>Henüz bildirim yok</p>
    </div>`;
    return;
  }

  container.innerHTML = activeNotifications.map(n => {
    const isUnread = !__isNotifRead(n);
    const date = new Date(n.timestamp).toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    const icon = n.type === 'broadcast' ? '📢' : '🔔';
    const canDelete = n.scope !== 'broadcast' || (currentUser && currentUser.email === 'wupard@gmail.com');
    
    return `
      <div class="notif-item ${isUnread ? 'unread' : ''}" style="position:relative;">
        <div style="display:flex; gap:12px; flex:1; cursor:pointer;" onclick="openNotifFromList('${n.id}', '${n.scope}')">
          <div class="notif-item-icon">${icon}</div>
          <div class="notif-item-body">
            <div class="notif-item-title">${n.title}</div>
            <div class="notif-item-msg">${n.body || n.message}</div>
            <div class="notif-item-time">${date}</div>
          </div>
        </div>
        ${canDelete ? `
          <button onclick="deleteNotification('${n.id}', '${n.scope}')" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:4px; position:absolute; top:8px; right:8px; opacity:0.5; transition:opacity 0.2s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='0.5'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        ` : ''}
        ${isUnread ? '<div class="notif-unread-dot"></div>' : ''}
      </div>
    `;
  }).join('');
}

window.deleteNotification = function(id, scope) {
  if (!currentUser) return;
  if (scope === 'broadcast' && currentUser.email !== 'wupard@gmail.com') {
    showToast('Bu işlem için yetkin yok.', 'error');
    return;
  }
  const path = scope === 'broadcast' ? `notifications/${id}` : `users/${currentUser.uid}/notifications/${id}`;
  
  if (confirm('Bu bildirimi silmek istediğine emin misin?')) {
    db.doc(path).delete().then(() => {
      showToast('Bildirim silindi.', 'success');
    }).catch(e => console.error('Delete notif failed:', e));
  }
};

function updateNotifBadge() {
  const badge = document.getElementById('notifBadge');
  if (!badge) return;
  const unreadCount = activeNotifications.filter(n => !__isNotifRead(n)).length;
  if (unreadCount > 0) {
    badge.textContent = unreadCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function showSystemNotification(data) {
  const banner = document.getElementById('notifBanner');
  const title = document.getElementById('notifBannerTitle');
  const body = document.getElementById('notifBannerBody');
  if (!banner || !title || !body) return;

  title.textContent = data.title;
  body.textContent = data.body;
  banner.style.display = 'flex';
  
  // Auto-hide after 10s
  setTimeout(() => {
    banner.style.display = 'none';
  }, 10000);
}

let __pendingNotifDetail = null;

window.openNotifFromList = function(id, scope) {
  if (!currentUser) return;
  const n = activeNotifications.find(x => x.id === id && x.scope === scope);
  if (!n) return;
  __pendingNotifDetail = n;
  const titleEl = document.getElementById('notifDetailTitle');
  const bodyEl = document.getElementById('notifDetailBody');
  const goBtn = document.getElementById('notifDetailGoBtn');
  const modal = document.getElementById('notifDetailModal');
  if (titleEl) titleEl.textContent = n.title || '';
  if (bodyEl) bodyEl.textContent = n.body || n.message || '';
  const canGoComments = !!(n.link && (n.type === 'reply' || n.link === 'comments'));
  if (goBtn) goBtn.style.display = canGoComments ? 'inline-flex' : 'none';
  if (modal) {
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
  }

  if (scope === 'broadcast') {
    if ((n.timestamp || 0) > __getBroadcastLastRead()) __setBroadcastLastRead(n.timestamp);
    n.read = true;
    renderNotificationList();
    updateNotifBadge();
    return;
  }

  const path = `users/${currentUser.uid}/notifications/${id}`;
  if (!n.read) {
    db.doc(path).update({ read: true }).catch(e => console.error('Mark read failed:', e));
    n.read = true;
    renderNotificationList();
    updateNotifBadge();
  }
};

window.closeNotifDetailModal = function() {
  const modal = document.getElementById('notifDetailModal');
  if (modal) modal.style.display = 'none';
  __pendingNotifDetail = null;
};

window.goNotifDetailToComments = function() {
  const n = __pendingNotifDetail;
  closeNotifDetailModal();
  if (n && n.link) {
    navigateTo(n.link);
    if (typeof toggleNotifDrawer === 'function') toggleNotifDrawer();
  }
};

/** @deprecated — liste öğesi openNotifFromList kullanır */
window.markAsRead = function(id, scope) {
  openNotifFromList(id, scope);
};

window.closeNotifBanner = function() {
  const banner = document.getElementById('notifBanner');
  if (banner) banner.style.display = 'none';
};

window.sendAdminBroadcast = function() {
  const btn = document.getElementById('adminSendNotifBtn');
  const btnText = btn.querySelector('.btn-text');
  const loader = btn.querySelector('.btn-loader');
  
  const title = document.getElementById('adminNotifTitle').value;
  const msg = document.getElementById('adminNotifMessage').value;
  const recipient = document.getElementById('adminNotifRecipient').value;
  const uid = document.getElementById('adminNotifUid').value;
  // Read expiry fields (days/hours/minutes) with backward compatibility
  const dEl = document.getElementById('adminNotifExpiryDays');
  const hEl = document.getElementById('adminNotifExpiryHours');
  const mEl = document.getElementById('adminNotifExpiryMinutes');
  let expiryMs = 7 * 24 * 60 * 60 * 1000; // default 7 days
  if (dEl || hEl || mEl) {
    const days = parseInt(dEl?.value) || 0;
    const hours = parseInt(hEl?.value) || 0;
    const mins = parseInt(mEl?.value) || 0;
    expiryMs = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
    if (expiryMs <= 0) expiryMs = 7 * 24 * 60 * 60 * 1000;
  } else if (document.getElementById('adminNotifExpiry')) {
    const expiryDays = parseInt(document.getElementById('adminNotifExpiry').value) || 7;
    expiryMs = expiryDays * 24 * 60 * 60 * 1000;
  }

  if (!title || !msg) {
    showToast('Lütfen başlık ve mesaj girin.', 'error');
    return;
  }

  // Loading state
  btn.disabled = true;
  btnText.style.opacity = '0.5';
  loader.style.display = 'block';

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    expiry: Date.now() + expiryMs,
    read: false,
    type: recipient === 'all' ? 'broadcast' : 'personal',
    sender: currentUser ? currentUser.displayName || 'Admin' : 'Admin'
  };

  const collection = recipient === 'all' ? 'broadcasts' : `users/${uid}/notifications`;
  
  db.collection(collection).add(notifData).then(() => {
    showToast('Bildirim başarıyla gönderildi!', 'success');
    document.getElementById('adminNotifTitle').value = '';
    document.getElementById('adminNotifMessage').value = '';
    document.getElementById('adminNotifUid').value = '';
  }).catch(err => {
    console.error('Broadcast error:', err);
    showToast('Bildirim gönderilemedi.', 'error');
  }).finally(() => {
    btn.disabled = false;
    btnText.style.opacity = '1';
    loader.style.display = 'none';
  });
};

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
      'padding:14px 24px',
      'border-radius:100px',
      'font-weight:600',
      'font-size:0.9rem',
      'z-index:99999',
      'transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      'box-shadow:0 12px 36px rgba(0,0,0,0.6)',
      'white-space:nowrap',
      'max-width:90vw',
      'text-align:center',
      'pointer-events:none',
      'display:flex',
      'align-items:center',
      'gap:12px',
      'backdrop-filter:blur(16px)',
      '-webkit-backdrop-filter:blur(16px)',
      'opacity:0'
    ].join(';');
    document.body.appendChild(toast);
  }
  const isSuccess = type === 'success';
  const iconContainerStyle = 'display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;';
  const successIconBg = 'background:rgba(34,197,94,0.2);color:#4ade80;';
  const errorIconBg = 'background:rgba(239,68,68,0.2);color:#f87171;';
  
  const iconSvg = isSuccess
    ? `<div style="${iconContainerStyle}${successIconBg}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`
    : `<div style="${iconContainerStyle}${errorIconBg}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>`;
  
  toast.innerHTML = iconSvg + `<span style="letter-spacing:0.3px;">${msg}</span>`;
  toast.style.background = isSuccess
    ? 'rgba(20, 25, 20, 0.85)'
    : 'rgba(25, 20, 20, 0.85)';
  toast.style.border = isSuccess ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)';
  toast.style.color = isSuccess ? '#4ade80' : '#f87171';
  
  // Show
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0) scale(1)';
    toast.style.opacity = '1';
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(-80px) scale(0.9)';
    toast.style.opacity = '0';
  }, 2500);
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
  showToast(currentLang === 'tr' ? 'Ölçüler kaydedildi!' : 'Measurements saved!', 'success');
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
    localStorage.removeItem('zyro_prMax'); // Also clear the global PR max for the progress bar
    saveData();
    renderLoggedExercises();
    renderPRTable();
    renderProgressTracker();
    updateStats();
    updateMuscleMap();
    showToast('Verileriniz sıfırlandı', 'success');
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
      rank: commentAuthorRankKey()
    };
    
    if (isFirebaseConfigured && db) {
      try {
        await db.collection('public_comments').add(comment);
        showToast(currentLang === 'tr' ? 'Yorum gonderildi!' : 'Comment sent!', 'success');
        document.getElementById('commentInput').value = '';
        renderComments();
        
        // Notification
        sendCommentEmailNotification(text, comment.userName);
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
    if (commentsListenerUnsub) {
      commentsListenerUnsub();
      commentsListenerUnsub = null;
    }
    const q = db.collection('public_comments').orderBy('timestamp', 'desc').limit(40);
    commentsListenerUnsub = q.onSnapshot(snap => {
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
  
  // Separate top-level comments and replies
  const topLevel = comments.filter(c => !c.parentId);
  const replies = comments.filter(c => c.parentId);

  list.innerHTML = topLevel.map((c, i) => {
    const showPhoto = !c.isAnonymous && c.userPhoto;
    
    // Upvote logic
    const upvotes = c.upvotes || 0;
    const upvotedBy = c.upvotedBy || [];
    const hasUpvoted = currentUser && upvotedBy.includes(currentUser.uid);

    // Get replies for this comment
    const commentReplies = replies.filter(r => r.parentId === c.id).sort((a,b) => a.timestamp - b.timestamp);
    
    const isOwnComment = currentUser && c.userId === currentUser.uid;
    const isAdminUser = currentUser && (
      currentUser.email === 'wupard@gmail.com' ||
      appData.firestoreAdmin === true ||
      appData.userRank === 'admin' ||
      appData.userRank === 'mod'
    );
    const canDelete = isOwnComment || isAdminUser;
    
    const isAdminComment = c.rank === 'admin' || c.rank === 'mod' || c.userEmail === 'wupard@gmail.com';

    return `
      <div class="comment-item" id="comment_${c.id}" style="padding: 16px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-card-alt); border-radius: 12px; margin-bottom: 12px; position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            ${showPhoto ? 
              `<img src="${c.userPhoto}" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--accent-primary);" referrerpolicy="no-referrer">` : 
              `<div style="width: 24px; height: 24px; border-radius: 50%; background: var(--bg-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--text-tertiary); border: 1px solid var(--border-subtle);">?</div>`
            }
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-weight: 600; font-size: 0.9rem; color: var(--accent-primary);">${c.userName}</span>
              ${isAdminComment ? `<span style="background:var(--accent-primary); color:white; font-size:0.65rem; padding:2px 6px; border-radius:4px; font-weight:bold; text-transform:uppercase;">Admin</span>` : ''}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">${new Date(c.timestamp).toLocaleDateString()}</span>
            ${canDelete ? `<button onclick="deletePublicComment('${c.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:4px;" title="Sil"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>` : ''}
          </div>
        </div>
        <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-primary); padding-left: 34px;">${c.text}</p>
        
        <div style="margin-top: 12px; display: flex; gap: 16px; padding-left: 34px;">
          <button onclick="upvoteComment('${c.id}')" style="background:${hasUpvoted ? 'var(--accent-glow)' : 'transparent'}; border:1px solid ${hasUpvoted ? 'var(--accent-primary)' : 'transparent'}; color:${hasUpvoted ? 'var(--accent-primary)' : 'var(--text-muted)'}; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; padding: 4px 8px; border-radius: 6px; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            <span style="font-weight: bold;">${upvotes}</span>
          </button>
          <button onclick="showReplyForm('${c.id}')" style="background:transparent; border:none; color:var(--text-muted); font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Cevapla</span>
          </button>
        </div>

        <div id="replyForm_${c.id}" style="display:none; margin-top:12px; padding-left:34px;">
          <textarea id="replyInput_${c.id}" class="note-input" rows="2" placeholder="Cevabını yaz..." style="margin-bottom:8px; font-size:0.85rem;"></textarea>
          <div style="display:flex; gap:8px;">
            <button class="btn-primary" style="padding:6px 16px; font-size:0.8rem;" onclick="submitReply('${c.id}')">Gönder</button>
            <button class="btn-small" onclick="showReplyForm('${c.id}')">İptal</button>
          </div>
        </div>

        ${commentReplies.length > 0 ? `
          <div class="comment-replies" style="margin-top:12px; padding-left:34px; border-left: 2px solid var(--border-subtle);">
            ${commentReplies.map(r => {
              const isOwnReply = currentUser && r.userId === currentUser.uid;
              const canDeleteReply = isOwnReply || isAdminUser;
              const isAdminReply = r.rank === 'admin' || r.rank === 'mod' || r.userEmail === 'wupard@gmail.com';
              return `
              <div style="margin-top:12px; padding:10px; background:rgba(255,255,255,0.02); border-radius:8px; position:relative;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    ${r.userPhoto ? `<img src="${r.userPhoto}" style="width:18px; height:18px; border-radius:50%;" referrerpolicy="no-referrer">` : `<div style="width:18px; height:18px; border-radius:50%; background:var(--bg-primary); display:flex; align-items:center; justify-content:center; font-size:0.6rem;">?</div>`}
                    <span style="font-weight:600; font-size:0.8rem; color:var(--accent-primary);">${r.userName}</span>
                    ${isAdminReply ? `<span style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; font-weight:bold; text-transform:uppercase;">Admin</span>` : ''}
                  </div>
                  <div style="display:flex; align-items:center; gap:6px;">
                    <span style="font-size:0.65rem; color:var(--text-muted);">${new Date(r.timestamp).toLocaleDateString()}</span>
                    ${canDeleteReply ? `<button onclick="deletePublicComment('${r.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:2px;" title="Sil"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>` : ''}
                  </div>
                </div>
                <p style="margin:0; font-size:0.85rem; color:var(--text-primary);">${r.text}</p>
              </div>
            `}).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

window.showReplyForm = function(commentId) {
  const form = document.getElementById(`replyForm_${commentId}`);
  if (form) form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

window.submitReply = async function(parentId) {
  const input = document.getElementById(`replyInput_${parentId}`);
  const text = input.value.trim();
  if (!text) return;

  if (!currentUser) {
    showToast('Cevap yazmak için giriş yapmalısın!', 'error');
    return;
  }

  const reply = {
    text,
    parentId,
    userId: currentUser.uid,
    userName: currentUser.displayName || 'User',
    userEmail: currentUser.email,
    userPhoto: currentUser.photoURL,
    timestamp: Date.now(),
    date: todayStr(),
    upvotes: 0,
    upvotedBy: [],
    rank: commentAuthorRankKey()
  };

  if (isFirebaseConfigured && db) {
    try {
      await db.collection('public_comments').add(reply);
      
      // Fetch parent comment to notify the author
      const parentDoc = await db.collection('public_comments').doc(parentId).get();
      if (parentDoc.exists) {
        const parentData = parentDoc.data();
        if (parentData.userId && parentData.userId !== currentUser.uid && parentData.userId !== 'local') {
          await db.collection(`users/${parentData.userId}/notifications`).add({
            title: 'Yorumuna Cevap Geldi!',
            message: `${currentUser.displayName || 'Birisi'} yorumunu yanıtladı: "${text.length > 30 ? text.substring(0,30) + '...' : text}"`,
            body: `${currentUser.displayName || 'Birisi'} yorumunu yanıtladı: "${text.length > 120 ? text.substring(0,120) + '...' : text}"`,
            type: 'reply',
            link: 'comments',
            timestamp: Date.now(),
            read: false
          });
        }
      }

      showToast('Cevabın gönderildi!', 'success');
      input.value = '';
      document.getElementById(`replyForm_${parentId}`).style.display = 'none';
      renderComments();
      
      // Notification
      sendCommentEmailNotification(text, currentUser.displayName || currentUser.email, true);
    } catch (e) {
      showToast('Hata: ' + e.message, 'error');
    }
  }
};

function sendCommentEmailNotification(text, userName, isReply = false) {
  if (db) {
    db.collection('admin_notifications').add({
      type: isReply ? 'reply' : 'comment',
      text: text,
      from: userName,
      timestamp: Date.now(),
      target: 'wupard@gmail.com'
    }).catch(e => console.error('Admin notification failed:', e));
  }

  // Send email via FormSubmit API to wupard@gmail.com
  fetch('https://formsubmit.co/ajax/wupard@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      _subject: isReply ? 'Zyro - Yeni Yorum Yanıtı' : 'Zyro - Yeni Yorum',
      Gonderen: userName,
      Mesaj: text,
      Tip: isReply ? 'Yanıt' : 'Ana Yorum'
    })
  }).catch(e => console.error('Email send failed:', e));
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

window.deletePublicComment = async function(commentId) {
  if (!currentUser) return;
  if (!confirm('Bu yorumu silmek istediğine emin misin?')) return;
  
  try {
    // Note: Firestore security rules must allow this. Assuming user can delete their own comment.
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
    showToast('Begenmek icin giris yapmalisin!', 'error');
    return;
  }

  if (isFirebaseConfigured && db) {
    const docRef = db.collection('public_comments').doc(commentId);
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
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

// =============================================
// ADMIN PANEL (Special for Wupard)
// =============================================
// =============================================
// ADMIN PANEL (Special for Wupard)
// =============================================
// NOTE: adminShowSection is defined later in the file (unified version). This earlier
// occurrence was removed to avoid duplicate definitions. The unified implementation
// further below (near line ~3780) is the authoritative function.

window.toggleAdminUidInput = function(val) {
  document.getElementById('adminNotifUidWrap').style.display = val === 'specific' ? 'block' : 'none';
};

window.adminSendNotificationV2 = async function() {
  const recipientType = document.getElementById('adminNotifRecipient').value;
  const targetUid = document.getElementById('adminNotifUid').value.trim();
  const title = document.getElementById('adminNotifTitle').value.trim();
  const msg = document.getElementById('adminNotifMessage').value.trim();
  // Keep compatibility: compute expiryMs from days/hours/minutes inputs
  const dEl2 = document.getElementById('adminNotifExpiryDays');
  const hEl2 = document.getElementById('adminNotifExpiryHours');
  const mEl2 = document.getElementById('adminNotifExpiryMinutes');
  let expiryMs2 = 7 * 24 * 60 * 60 * 1000;
  if (dEl2 || hEl2 || mEl2) {
    const days = parseInt(dEl2?.value) || 0;
    const hours = parseInt(hEl2?.value) || 0;
    const mins = parseInt(mEl2?.value) || 0;
    expiryMs2 = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
    if (expiryMs2 <= 0) expiryMs2 = 7 * 24 * 60 * 60 * 1000;
  } else if (document.getElementById('adminNotifExpiry')) {
    const expiryDays = parseInt(document.getElementById('adminNotifExpiry').value) || 7;
    expiryMs2 = expiryDays * 24 * 60 * 60 * 1000;
  }

  const btnText = document.getElementById('adminNotifBtnText');
  const loader = document.getElementById('adminNotifLoader');

  if (!title || !msg) {
    showToast('Lütfen başlık ve mesaj girin.', 'error');
    return;
  }

  if (recipientType === 'specific' && !targetUid) {
    showToast('Lütfen hedef kullanıcı UID girin.', 'error');
    return;
  }

  // Loading state
  btnText.style.opacity = '0.5';
  loader.style.display = 'block';

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    expiry: Date.now() + expiryMs2,
    read: false,
    type: recipientType === 'all' ? 'broadcast' : 'personal',
    sender: 'Admin'
  };

  try {
    if (recipientType === 'all') {
      await db.collection('notifications').add(notifData);
    } else {
      await db.collection(`users/${targetUid}/notifications`).add(notifData);
    }
    
    showToast('Bildirim başarıyla gönderildi!', 'success');
    document.getElementById('adminNotifTitle').value = '';
    document.getElementById('adminNotifMessage').value = '';
    document.getElementById('adminNotifUid').value = '';
  } catch (err) {
    console.error('Notification error:', err);
    showToast('Bildirim gönderilemedi: ' + err.message, 'error');
  } finally {
    btnText.style.opacity = '1';
    loader.style.display = 'none';
  }
};

async function adminLoadDashboardStats() {
  if (!db) return;
  try {
    const usersSnap = await db.collection('users').get();
    const uCount = document.getElementById('adminTotalUsers');
    if (uCount) uCount.textContent = usersSnap.size;
    
    const commentsSnap = await db.collection('public_comments')
      .where('date', '==', todayStr())
      .get();
    const cCount = document.getElementById('adminTodayComments');
    if (cCount) cCount.textContent = commentsSnap.size;
  } catch(e) { console.error('Admin stats failed:', e); }
}

window.adminSendNotification = async function() {
  const title = document.getElementById('adminNotifTitle').value.trim();
  const text = document.getElementById('adminNotifText').value.trim();
  if (!title || !text) return;
  
  if (db) {
    try {
      await db.collection('notifications').add({
        title,
        text,
        timestamp: Date.now(),
        date: todayStr(),
        type: 'admin'
      });
      showToast('Bildirim yayınlandı!', 'success');
      document.getElementById('adminNotifTitle').value = '';
      document.getElementById('adminNotifText').value = '';
    } catch (e) {
      showToast('Hata: ' + e.message, 'error');
    }
  }
};

async function adminLoadUsers() {
  const list = document.getElementById('adminUsersList');
  if (!list || !db) return;
  list.innerHTML = '<div class="logged-empty">Yükleniyor...</div>';
  
  try {
    const snap = await db.collection('users').get();
    let html = '';
    snap.forEach(doc => {
      const top = doc.data() || {};
      const data = top.data || {};
      const profile = data.profile || top.profile || {};
      const displayName = profile.displayName || data.userName || top.userName || top.displayName || '';
      const email = profile.email || data.email || top.email || '';
      const rankKey = data.userRank || top.userRank || 'default';
      const rankLabel = (typeof RANKS !== 'undefined' && RANKS[rankKey] ? RANKS[rankKey].label : (rankKey || 'Üye'));
      html += `
        <div style="padding:12px; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-weight:800; font-size:0.9rem; color:var(--text-primary);">${displayName || 'İsimsiz Kullanıcı'}</div>
            <div style="font-size:0.72rem; color:var(--text-tertiary);">${email || doc.id}</div>
            <div style="font-size:0.7rem; color:var(--text-tertiary);">Rank: ${rankLabel}</div>
          </div>
          <button class="btn-small" onclick="adminViewUserDetails('${doc.id}')">Detay</button>
        </div>
      `;
    });
    list.innerHTML = html || '<div class="logged-empty">Kullanıcı bulunamadı.</div>';
  } catch(e) { list.innerHTML = 'Hata: ' + e.message; }
}

async function adminLoadAllComments() {
  const list = document.getElementById('adminAllCommentsList');
  if (!list || !db) return;
  list.innerHTML = '<div class="logged-empty">Yükleniyor...</div>';
  
  try {
    const snap = await db.collection('public_comments').orderBy('timestamp', 'desc').limit(50).get();
    let html = '';
    snap.forEach(doc => {
      const c = doc.data();
      html += `
        <div style="padding:12px; border-bottom:1px solid var(--border-subtle); margin-bottom:8px; background:var(--bg-card-alt); border-radius:8px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-weight:700; font-size:0.8rem;">${c.userName}</span>
            <span style="font-size:0.7rem; color:var(--text-tertiary);">${c.date}</span>
          </div>
          <div style="font-size:0.85rem; margin-bottom:8px;">${c.text}</div>
          <button class="btn-small" style="color:#ef4444;" onclick="adminDeleteComment('${doc.id}')">Sil</button>
        </div>
      `;
    });
    list.innerHTML = html || '<div class="logged-empty">Yorum bulunamadı.</div>';
  } catch(e) { list.innerHTML = 'Hata: ' + e.message; }
}

function __escapeHtml(v) {
  return String(v ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

window.closeAdminUserDetail = function() {
  const modal = document.getElementById('adminUserDetailModal');
  if (modal) modal.style.display = 'none';
};

window.adminViewUserDetails = async function(uid) {
  const modal = document.getElementById('adminUserDetailModal');
  const titleEl = document.getElementById('adminUserDetailTitle');
  const content = document.getElementById('adminUserDetailContent');
  if (!modal || !content || !db) return;

  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';

  if (titleEl) titleEl.textContent = 'Kullanıcı Detayı';
  content.innerHTML = '<div class="logged-empty">Yükleniyor...</div>';

  try {
    const snap = await db.collection('users').doc(uid).get();
    const top = snap.exists ? (snap.data() || {}) : {};
    const data = top.data || {};
    const profile = data.profile || top.profile || {};
    const displayName = profile.displayName || data.userName || top.userName || top.displayName || '';
    const email = profile.email || data.email || top.email || '';
    const rankKey = data.userRank || top.userRank || 'default';
    const rank = (typeof RANKS !== 'undefined' && RANKS[rankKey]) ? RANKS[rankKey] : null;

    if (titleEl) titleEl.textContent = displayName ? `${displayName} — Detay` : 'Kullanıcı Detayı';

    const notesObj = data.notes || {};
    const notes = Object.values(notesObj).filter(n => n && typeof n === 'object');
    notes.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    let comments = [];
    try {
      const cSnap = await db.collection('public_comments').where('userId', '==', uid).get();
      cSnap.forEach(d => comments.push({ id: d.id, ...(d.data() || {}) }));
      comments.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    } catch (e) {
      comments = [];
    }

    const notesHtml = notes.length === 0
      ? `<div style="font-size:0.8rem; color:var(--text-tertiary); padding:14px; text-align:center;">Not bulunamadı.</div>`
      : notes.slice(0, 50).map(n => {
        const date = n.date || (n.timestamp ? new Date(n.timestamp).toLocaleDateString('tr-TR') : '—');
        const tags = Array.isArray(n.tags) ? n.tags : [];
        const tagsHtml = tags.length
          ? `<div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">${tags.map(t => `<span style="font-size:0.65rem; padding:2px 8px; border-radius:999px; background:rgba(139,124,247,0.12); border:1px solid rgba(139,124,247,0.2); color:var(--text-secondary); font-weight:600;">${__escapeHtml(t)}</span>`).join('')}</div>`
          : '';
        return `
          <div style="padding:14px; background:var(--bg-card-alt); border:1px solid var(--border-subtle); border-radius:12px;">
            <div style="display:flex; justify-content:space-between; gap:12px; align-items:center; margin-bottom:10px;">
              <div style="font-size:0.75rem; color:var(--text-tertiary); font-weight:700;">${__escapeHtml(date)}</div>
              <div style="font-size:0.7rem; color:var(--text-tertiary);">${n.timestamp ? new Date(n.timestamp).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : ''}</div>
            </div>
            <div style="font-size:0.9rem; color:var(--text-primary); white-space:pre-wrap; line-height:1.45;">${__escapeHtml(n.text || '')}</div>
            ${tagsHtml}
          </div>
        `;
      }).join('');

    const commentsHtml = comments.length === 0
      ? `<div style="font-size:0.8rem; color:var(--text-tertiary); padding:14px; text-align:center;">Yorum bulunamadı.</div>`
      : comments.slice(0, 50).map(c => {
        const date = c.date || (c.timestamp ? new Date(c.timestamp).toLocaleDateString('tr-TR') : '—');
        const isReply = !!c.parentId;
        const typeBadge = isReply
          ? `<span style="font-size:0.62rem; padding:2px 8px; border-radius:999px; background:rgba(92,138,222,0.12); border:1px solid rgba(92,138,222,0.2); color:var(--text-secondary); font-weight:700;">Yanıt</span>`
          : `<span style="font-size:0.62rem; padding:2px 8px; border-radius:999px; background:rgba(76,203,141,0.12); border:1px solid rgba(76,203,141,0.2); color:var(--text-secondary); font-weight:700;">Yorum</span>`;
        return `
          <div style="padding:14px; background:var(--bg-card-alt); border:1px solid var(--border-subtle); border-radius:12px;">
            <div style="display:flex; justify-content:space-between; gap:12px; align-items:center; margin-bottom:10px;">
              <div style="display:flex; align-items:center; gap:8px; min-width:0;">
                ${typeBadge}
                <div style="font-size:0.75rem; color:var(--text-tertiary); font-weight:700;">${__escapeHtml(date)}</div>
              </div>
              <div style="font-size:0.7rem; color:var(--text-tertiary);">${c.timestamp ? new Date(c.timestamp).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) : ''}</div>
            </div>
            <div style="font-size:0.9rem; color:var(--text-primary); white-space:pre-wrap; line-height:1.45;">${__escapeHtml(c.text || '')}</div>
          </div>
        `;
      }).join('');

    const rankBadge = rank
      ? `<span style="display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; background:${rank.bg}; color:${rank.color}; font-weight:800; font-size:0.78rem;">${rank.icon || ''} ${__escapeHtml(rank.label)}</span>`
      : `<span style="display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; background:rgba(255,255,255,0.04); border:1px solid var(--border-subtle); color:var(--text-secondary); font-weight:800; font-size:0.78rem;">${__escapeHtml(rankKey)}</span>`;

    content.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div style="padding:16px; background:linear-gradient(145deg,rgba(139,124,247,0.12),rgba(0,0,0,0)); border:1px solid rgba(139,124,247,0.18); border-radius:16px;">
          <div style="display:flex; justify-content:space-between; gap:16px; align-items:flex-start; flex-wrap:wrap;">
            <div style="min-width:220px;">
              <div style="font-size:1.05rem; font-weight:900; color:var(--text-primary); margin-bottom:6px;">${__escapeHtml(displayName || 'İsimsiz Kullanıcı')}</div>
              <div style="font-size:0.78rem; color:var(--text-tertiary); margin-bottom:4px;">${__escapeHtml(uid)}</div>
              <div style="font-size:0.78rem; color:var(--text-secondary);">${__escapeHtml(email)}</div>
            </div>
            <div style="display:flex; gap:10px; align-items:center;">
              ${rankBadge}
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px;">
          <div class="card" style="padding:16px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px;">
              <div style="font-size:0.9rem; font-weight:900; color:var(--text-primary);">Notlar</div>
              <div style="font-size:0.75rem; color:var(--text-tertiary);">${notes.length} adet</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">${notesHtml}</div>
          </div>
          <div class="card" style="padding:16px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px;">
              <div style="font-size:0.9rem; font-weight:900; color:var(--text-primary);">Yorumlar</div>
              <div style="font-size:0.75rem; color:var(--text-tertiary);">${comments.length} adet</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">${commentsHtml}</div>
          </div>
        </div>
      </div>
    `;
  } catch (e) {
    content.innerHTML = `<div class="logged-empty">Hata: ${__escapeHtml(e.message)}</div>`;
  }
};

// Unified adminShowSection: toggle pre-existing admin sections
window.adminShowSection = function(section) {
  const sections = ['dashboard', 'notifications', 'users', 'comments'];
  sections.forEach(s => {
    const el = document.getElementById(`admin${s.charAt(0).toUpperCase() + s.slice(1)}Section`);
    if (el) el.style.display = s === section ? 'block' : 'none';

    const btn = document.getElementById(`adminTab${s.charAt(0).toUpperCase() + s.slice(1)}`);
    if (btn) btn.classList.toggle('active', s === section);
  });

  if (section === 'users') adminLoadUsers();
  if (section === 'comments') adminLoadAllComments();
  if (section === 'dashboard') adminLoadDashboardStats();
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
  let userRankKey = appData.userRank || 'default';
  if (user && user.email === 'wupard@gmail.com') userRankKey = 'mod';
  if (appData.firestoreAdmin && userRankKey === 'default') userRankKey = 'mod';
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

  function applyAdminVisibility() {
    const rankObj = RANKS[appData.userRank] || RANKS.default;
    const isAdminCapable = !!(user && (
      (user.email === 'wupard@gmail.com') ||
      appData.firestoreAdmin === true ||
      rankObj.canAdmin
    ));
    const adminOnlyEls = document.querySelectorAll('.admin-only');
    adminOnlyEls.forEach(el => { el.style.display = isAdminCapable ? 'flex' : 'none'; });
    if (isAdminCapable) {
      document.body.classList.add('is-admin');
      const navComments = document.getElementById('nav-comments');
      if (navComments && !navComments.querySelector('.admin-badge')) {
        navComments.insertAdjacentHTML('beforeend', ` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>`);
      }
      if (typeof renderAdminPanel === 'function') {
        renderAdminPanel();
      } else if (typeof adminShowSection === 'function') {
        adminShowSection('dashboard');
      }
    } else {
      document.body.classList.remove('is-admin');
    }
  }

  applyAdminVisibility();

  // Realtime rank + isAdmin from Firestore (tek dinleyici)
  if (user && isFirebaseConfigured && db) {
    if (userProfileListenerUnsub) {
      userProfileListenerUnsub();
      userProfileListenerUnsub = null;
    }
    userProfileListenerUnsub = db.collection('users').doc(user.uid).onSnapshot(snap => {
      if (!snap.exists) return;
      const root = snap.data();
      appData.firestoreAdmin = root.isAdmin === true;
      const userData = root.data || {};
      if (userData.userRank) {
        appData.userRank = userData.userRank;
      }
      const rk = appData.userRank || 'default';
      const updRank = RANKS[rk] || RANKS.default;
      const rankEl = document.getElementById('userRankInfo');
      if (rankEl) {
        rankEl.textContent = updRank.label;
        rankEl.style.color = updRank.color;
        rankEl.style.background = updRank.bg;
      }
      const rb = document.getElementById('userRank');
      if (rb && currentUser) {
        let key = appData.userRank || 'default';
        if (currentUser.email === 'wupard@gmail.com') key = 'mod';
        if (appData.firestoreAdmin && key === 'default') key = 'mod';
        const r2 = RANKS[key] || RANKS.default;
        rb.textContent = r2.label;
        rb.style.color = r2.color;
        rb.style.background = r2.bg;
      }
      if (userData.profile) {
        appData.profile = { ...appData.profile, ...userData.profile };
        const profileN = appData.profile.displayName;
        if (profileN && document.getElementById('userName')) {
          document.getElementById('userName').textContent = profileN.split(' ')[0];
        }
      }
      applyAdminVisibility();
    });
  } else if (userProfileListenerUnsub) {
    userProfileListenerUnsub();
    userProfileListenerUnsub = null;
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

// =============================================
// FEATURE 1: ADVANCED FIRE ANIMATION (Day 0-7)
// =============================================
function updateStreakFlame() {
  const streakEl = document.getElementById('streakText');
  const flameContent = document.getElementById('streakFlameContent');
  if (!streakEl || !flameContent) return;

  const dayText = streakEl.textContent;
  const dayMatch = dayText.match(/Day (\d+)/);
  const dayNum = dayMatch ? parseInt(dayMatch[1]) : 0;

  const badgeEl = document.getElementById('streakBadge');
  const flameWrap = document.getElementById('streakFlame');

  if (dayNum === 0) {
    // Day 0: No flame — hide the flame wrapper and center the text
    if (flameWrap) flameWrap.style.display = 'none';
    if (badgeEl) badgeEl.style.justifyContent = 'center';
    flameContent.style.display = 'none';
  } else {
    // Day > 0: Restore flame wrapper and original flex layout
    if (flameWrap) flameWrap.style.display = 'flex';
    if (badgeEl) badgeEl.style.justifyContent = '';
    flameContent.style.display = '';
  }

  if (dayNum === 1) {
    // Day 1: Small flame
    flameContent.innerHTML = '🔥';
    flameContent.style.fontSize = '1rem';
    flameContent.style.opacity = '0.8';
    flameContent.style.animation = 'flameFlicker 0.6s ease-in-out infinite';
  } else if (dayNum <= 3) {
    // Day 2-3: Medium flame
    flameContent.innerHTML = '🔥';
    flameContent.style.fontSize = '1.2rem';
    flameContent.style.opacity = '1';
    flameContent.style.animation = 'flameFlicker 0.5s ease-in-out infinite';
  } else if (dayNum <= 7) {
    // Day 4-7: Large flame with glow
    flameContent.innerHTML = '🔥';
    flameContent.style.fontSize = '1.4rem';
    flameContent.style.opacity = '1';
    flameContent.style.animation = 'flameFlickerIntense 0.4s ease-in-out infinite';
    flameContent.style.textShadow = '0 0 8px rgba(255, 69, 0, 0.6), 0 0 16px rgba(255, 140, 0, 0.3)';
  } else {
    // Day 8+: Legendary flame
    flameContent.innerHTML = '🔥';
    flameContent.style.fontSize = '1.5rem';
    flameContent.style.opacity = '1';
    flameContent.style.animation = 'flameLegendary 0.3s ease-in-out infinite';
    flameContent.style.textShadow = '0 0 12px rgba(255, 69, 0, 0.8), 0 0 24px rgba(255, 215, 0, 0.5)';
  }
}

// Add CSS animations for flame
const flameStyleSheet = document.createElement('style');
flameStyleSheet.textContent = `
  @keyframes flameFlicker {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.05) rotate(-2deg); }
    50% { transform: scale(0.95) rotate(2deg); }
    75% { transform: scale(1.05) rotate(-1deg); }
  }
  
  @keyframes flameFlickerIntense {
    0%, 100% { transform: scale(1) rotate(0deg); }
    20% { transform: scale(1.1) rotate(-3deg); }
    40% { transform: scale(0.9) rotate(3deg); }
    60% { transform: scale(1.1) rotate(-2deg); }
    80% { transform: scale(0.95) rotate(2deg); }
  }
  
  @keyframes flameLegendary {
    0%, 100% { transform: scale(1) rotate(0deg); }
    15% { transform: scale(1.15) rotate(-4deg); }
    30% { transform: scale(0.85) rotate(4deg); }
    45% { transform: scale(1.15) rotate(-3deg); }
    60% { transform: scale(0.9) rotate(3deg); }
    75% { transform: scale(1.1) rotate(-2deg); }
  }
`;
document.head.appendChild(flameStyleSheet);

// =============================================
// FEATURE 2: ENHANCED ADMIN NOTIFICATION SYSTEM
// =============================================
window.adminSendNotificationV2Enhanced = async function() {
  const recipientType = document.getElementById('adminNotifRecipient').value;
  const targetUid = document.getElementById('adminNotifUid').value.trim();
  const category = document.getElementById('adminNotifCategory').value;
  const title = document.getElementById('adminNotifTitle').value.trim();
  const msg = document.getElementById('adminNotifMessage').value.trim();
  // compute expiry in ms from days/hours/minutes inputs for more granularity
  const dEl3 = document.getElementById('adminNotifExpiryDays');
  const hEl3 = document.getElementById('adminNotifExpiryHours');
  const mEl3 = document.getElementById('adminNotifExpiryMinutes');
  let expiryMs3 = 7 * 24 * 60 * 60 * 1000;
  if (dEl3 || hEl3 || mEl3) {
    const days = parseInt(dEl3?.value) || 0;
    const hours = parseInt(hEl3?.value) || 0;
    const mins = parseInt(mEl3?.value) || 0;
    expiryMs3 = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
    if (expiryMs3 <= 0) expiryMs3 = 7 * 24 * 60 * 60 * 1000;
  } else if (document.getElementById('adminNotifExpiry')) {
    const expiryDays = parseInt(document.getElementById('adminNotifExpiry').value) || 7;
    expiryMs3 = expiryDays * 24 * 60 * 60 * 1000;
  }

  const btnText = document.getElementById('adminNotifBtnText');
  const loader = document.getElementById('adminNotifLoader');

  if (!title || !msg) {
    showToast('Lütfen başlık ve mesaj girin.', 'error');
    return;
  }

  if (recipientType === 'specific' && !targetUid) {
    showToast('Lütfen hedef kullanıcı UID girin.', 'error');
    return;
  }

  // Loading state
  btnText.style.opacity = '0.5';
  loader.style.display = 'block';

  const categoryIcons = {
    system: '🔧',
    announcement: '📢',
    feature: '✨',
    maintenance: '🔨',
    urgent: '⚠️'
  };

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    expiry: Date.now() + expiryMs3,
    read: false,
    type: recipientType === 'all' ? 'broadcast' : 'personal',
    sender: 'Admin',
    category: category,
    icon: categoryIcons[category] || '📢'
  };

  try {
    if (recipientType === 'all') {
      await db.collection('notifications').add(notifData);
    } else {
      await db.collection(`users/${targetUid}/notifications`).add(notifData);
    }
    
    showToast('Bildirim başarıyla gönderildi!', 'success');
    document.getElementById('adminNotifTitle').value = '';
    document.getElementById('adminNotifMessage').value = '';
    document.getElementById('adminNotifUid').value = '';
    
    // Update history
    renderAdminNotificationHistory();
  } catch (err) {
    console.error('Notification error:', err);
    showToast('Bildirim gönderilemedi: ' + err.message, 'error');
  } finally {
    btnText.style.opacity = '1';
    loader.style.display = 'none';
  }
};

function renderAdminNotificationHistory() {
  const historyEl = document.getElementById('adminNotifHistory');
  if (!historyEl) return;

  const history = activeNotifications.slice(0, 5);
  
  if (history.length === 0) {
    historyEl.innerHTML = '<div style="font-size:0.7rem; color:var(--text-tertiary); text-align:center; padding:12px;">Geçmiş bulunamadı</div>';
    return;
  }

  historyEl.innerHTML = history.map(h => {
    const categoryIcons = {
      system: '🔧',
      announcement: '📢',
      feature: '✨',
      maintenance: '🔨',
      urgent: '⚠️'
    };
    const icon = categoryIcons[h.category] || h.icon || '📢';
    const date = new Date(h.timestamp).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    return `
      <div style="padding:8px 12px; background:rgba(139,124,247,0.08); border:1px solid rgba(139,124,247,0.15); border-radius:8px; display:flex; align-items:center; justify-content:space-between; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:0;">
          <span style="font-size:1rem;">${icon}</span>
          <div style="min-width:0;">
            <div style="font-size:0.7rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${h.title}</div>
            <div style="font-size:0.65rem; color:var(--text-tertiary);">${date}</div>
          </div>
        </div>
        <button onclick="deleteNotification('${h.id}', '${h.scope}')" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:4px; flex-shrink:0;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `;
  }).join('');
}

// Override the original function
window.adminSendNotificationV2 = window.adminSendNotificationV2Enhanced;

// =============================================
// FEATURE 3: ENHANCED STRENGTH DETAILS MODAL
// =============================================
window.showStrengthDetailsEnhanced = function(targetExercise = null) {
  const modal = document.getElementById('strengthDetailsModal');
  const content = document.getElementById('strengthDetailContent');
  const title = document.getElementById('strengthDetailTitle');
  if (!modal || !content) return;

  // 1. Gather all exercise data
  const exerciseData = {};
  Object.entries(appData.workoutLogs || {}).forEach(([date, logs]) => {
    logs.forEach(l => {
      if (!exerciseData[l.exercise]) exerciseData[l.exercise] = [];
      exerciseData[l.exercise].push({ 
        date, 
        weight: l.weight || 0, 
        reps: l.reps || 0, 
        sets: l.sets || 1,
        timestamp: l.timestamp || new Date(date).getTime() 
      });
    });
  });

  // 2. Determine which exercise to show
  let selectedEx = targetExercise;
  if (!selectedEx) {
    let maxW = -1;
    Object.entries(exerciseData).forEach(([ex, history]) => {
      const best = Math.max(...history.map(h => h.weight));
      if (best > maxW) {
        maxW = best;
        selectedEx = ex;
      }
    });
  }

  if (!selectedEx || !exerciseData[selectedEx]) {
    content.innerHTML = `<div class="logged-empty">Veri bulunamadı. Lütfen antrenman logu girin.</div>`;
    modal.style.display = 'flex';
    return;
  }

  title.textContent = selectedEx;
  const history = exerciseData[selectedEx].sort((a, b) => b.timestamp - a.timestamp);

  // 3. Calculate statistics
  const weights = history.map(h => h.weight);
  const maxWeight = Math.max(...weights);
  const minWeight = Math.min(...weights);
  const avgWeight = (weights.reduce((a, b) => a + b, 0) / weights.length).toFixed(1);
  const totalVolume = history.reduce((sum, h) => sum + (h.weight * h.reps * h.sets), 0);
  
  // 4. Calculate mathematically robust progress & predictions
  const recentLogs = history.slice(0, 5);
  
  // Find earliest and latest dates to avoid same-day noise
  const latestDateObj = new Date(history[0].date);
  const earliestDateObj = new Date(history[history.length - 1].date);
  const progressDays = Math.max(0, (latestDateObj - earliestDateObj) / 86400000);
  
  let weeklyNum = 0;
  let monthlyNum = 0;

  // Realistic maximum physical caps (preventing +300kg/month, but allowing high newbie gains)
  // Max weekly gain ~ 5% of current max, Max monthly ~ 15% of current max
  const maxWeeklyCap = Math.max(5.0, maxWeight * 0.05);
  const maxMonthlyCap = Math.max(20.0, maxWeight * 0.15);

  if (progressDays >= 3) {
    // True historical progress (compare latest day max to earliest day max)
    const earliestDayLogs = history.filter(h => h.date === history[history.length-1].date);
    const latestDayLogs = history.filter(h => h.date === history[0].date);
    const earliestMax = Math.max(...earliestDayLogs.map(h => h.weight));
    const latestMax = Math.max(...latestDayLogs.map(h => h.weight));
    
    const trueGain = latestMax - earliestMax;
    
    if (trueGain > 0) {
      const dailyRate = trueGain / progressDays;
      let rawWeekly = dailyRate * 7;
      let rawMonthly = dailyRate * 30;
      
      weeklyNum = Math.min(rawWeekly, maxWeeklyCap);
      monthlyNum = Math.min(rawMonthly, maxMonthlyCap);
    } else {
      // Stagnant history. Motivate with standard generic goal.
      weeklyNum = Math.max(2.0, maxWeight * 0.02);
      monthlyNum = Math.max(8.0, maxWeight * 0.06);
    }
  } else {
    // Insufficient history (< 3 days). Standard linear progression baseline.
    weeklyNum = Math.max(2.5, maxWeight * 0.025);
    monthlyNum = Math.max(10.0, maxWeight * 0.08);
  }

  // Round to nearest 0.5 for clean gym weights (e.g. 2.5, 5.0)
  const weeklyProjection = (Math.round(weeklyNum * 2) / 2).toFixed(1);
  const monthlyProjection = (Math.round(monthlyNum * 2) / 2).toFixed(1);

  // 5. Render selector
  const allExercises = Object.keys(exerciseData).sort();
  let selectorHtml = '';
  if (allExercises.length > 1) {
    selectorHtml = `
      <div style="margin-bottom:16px;">
        <select onchange="showStrengthDetailsEnhanced(this.value)" style="width:100%; padding:10px; border-radius:10px; background:var(--bg-card-alt); color:var(--text-primary); border:1px solid var(--border-subtle); font-size:0.85rem;">
          ${allExercises.map(ex => `<option value="${ex}" ${ex === selectedEx ? 'selected' : ''}>${ex}</option>`).join('')}
        </select>
      </div>
    `;
  }

  // 6. Render stats cards
  const statsHtml = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
      <div style="padding:12px; background:rgba(139,124,247,0.1); border:1px solid rgba(139,124,247,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">En Yüksek</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--orange-vivid);">${maxWeight} kg</div>
      </div>
      <div style="padding:12px; background:rgba(76,203,141,0.1); border:1px solid rgba(76,203,141,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">Ortalama</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--green-vivid);">${avgWeight} kg</div>
      </div>
      <div style="padding:12px; background:rgba(92,138,222,0.1); border:1px solid rgba(92,138,222,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">Haftalık Tahmin</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--blue-vivid);">+${weeklyProjection} kg</div>
      </div>
      <div style="padding:12px; background:rgba(217,110,163,0.1); border:1px solid rgba(217,110,163,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">Aylık Tahmin</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--pink-vivid);">+${monthlyProjection} kg</div>
      </div>
    </div>
  `;

  // 7. Render timeline
  let timelineHtml = '<div style="margin-top:20px;"><h4 style="font-size:0.85rem; font-weight:700; margin-bottom:12px;">Son Hareketler</h4>';
  timelineHtml += recentLogs.map((log, idx) => {
    const date = new Date(log.date).toLocaleDateString('tr-TR');
    const progress = idx > 0 ? log.weight - recentLogs[idx - 1].weight : 0;
    const progressText = progress > 0 ? `+${progress} kg ↑` : progress < 0 ? `${progress} kg ↓` : 'Aynı';
    const progressColor = progress > 0 ? 'var(--green-vivid)' : progress < 0 ? 'var(--red-vivid)' : 'var(--text-muted)';
    
    return `
      <div style="padding:10px; background:rgba(255,255,255,0.02); border-left:3px solid var(--accent-primary); border-radius:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.8rem; font-weight:600;">${log.weight} kg × ${log.reps} rep × ${log.sets} set</div>
          <div style="font-size:0.7rem; color:var(--text-tertiary);">${date}</div>
        </div>
        <div style="font-size:0.75rem; font-weight:700; color:${progressColor};">${progressText}</div>
      </div>
    `;
  }).join('');
  timelineHtml += '</div>';

  content.innerHTML = selectorHtml + statsHtml + timelineHtml;
  modal.style.display = 'flex';
};

// Override the original function
window.showStrengthDetails = window.showStrengthDetailsEnhanced;

// =============================================
// FEATURE 4: INITIALIZE ENHANCEMENTS
// =============================================
function initializeEnhancements() {
  // Update flame animation on dashboard load
  updateStreakFlame();
  
  // Render admin notification history
  setTimeout(() => {
    if (document.getElementById('adminNotifHistory')) {
      renderAdminNotificationHistory();
    }
  }, 500);

  // Initialize maintenance mode UI and state
  try {
    if (document.getElementById('adminSaveMaintenanceBtn')) {
      document.getElementById('adminSaveMaintenanceBtn').addEventListener('click', saveMaintenanceSettings);
    }
    if (document.getElementById('adminClearMaintenanceBtn')) {
      document.getElementById('adminClearMaintenanceBtn').addEventListener('click', clearMaintenanceSettings);
    }

    // Apply existing maintenance state on load
    applyMaintenanceState();
    // Update admin status text
    updateMaintenanceStatusText();
  } catch (e) { console.error('Maintenance init error:', e); }
}

// Maintenance mode helpers (client-side only - persisted in localStorage)
function saveMaintenanceSettings() {
  if (!currentUser) {
    showToast('Yalnızca adminler bakım modunu değiştirebilir.', 'error');
    return;
  }
  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true;
  if (!isAdmin) {
    showToast('İzin yok: sadece adminler erişebilir.', 'error');
    return;
  }

  const msg = (document.getElementById('adminMaintenanceMessage')?.value || '').trim();
  const days = parseInt(document.getElementById('adminMaintenanceExpiryDays')?.value) || 0;
  const hours = parseInt(document.getElementById('adminMaintenanceExpiryHours')?.value) || 0;
  const mins = parseInt(document.getElementById('adminMaintenanceExpiryMinutes')?.value) || 0;

  let durationMs = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
  if (durationMs <= 0) durationMs = 60 * 60 * 1000; // default 1 hour if zero

  const obj = {
    enabled: true,
    message: msg,
    expiresAt: Date.now() + durationMs,
    setBy: currentUser.email || currentUser.uid || 'admin'
  };

  localStorage.setItem('zyro_maintenance', JSON.stringify(obj));
  applyMaintenanceState();
  updateMaintenanceStatusText();
  showToast('Bakım modu etkinleştirildi.', 'success');
}

function clearMaintenanceSettings() {
  if (!currentUser) return showToast('Yetki gerekli.', 'error');
  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true;
  if (!isAdmin) return showToast('İzin yok.', 'error');
  localStorage.removeItem('zyro_maintenance');
  applyMaintenanceState();
  updateMaintenanceStatusText();
  showToast('Bakım modu kapatıldı.', 'success');
}

function getMaintenanceState() {
  try {
    const raw = localStorage.getItem('zyro_maintenance');
    if (!raw) return { enabled: false };
    const obj = JSON.parse(raw);
    if (obj.expiresAt && Date.now() > obj.expiresAt) return { enabled: false };
    return obj;
  } catch (e) { console.error('getMaintenanceState failed', e); return { enabled: false }; }
}

function applyMaintenanceState() {
  const state = getMaintenanceState();
  let overlay = document.getElementById('maintenanceOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'maintenanceOverlay';
    overlay.className = 'maintenance-overlay';
    overlay.innerHTML = `
      <div class="maintenance-card">
        <div class="maintenance-icon">🔧</div>
        <h2 class="maintenance-title">Bakım Modu</h2>
        <div id="maintenanceOverlayMsg" class="maintenance-msg"></div>
        <div id="maintenanceOverlayUntil" class="maintenance-until"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  if (state.enabled) {
    // Show overlay for non-admin users
    const isAdmin = currentUser && (currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true);
    if (!isAdmin) {
      document.getElementById('maintenanceOverlayMsg').textContent = state.message || 'Kısa süreli bakım yapılıyor.';
      const until = state.expiresAt ? new Date(state.expiresAt).toLocaleString() : '—';
      document.getElementById('maintenanceOverlayUntil').textContent = 'Tahmini bitiş: ' + until;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  } else {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function updateMaintenanceStatusText() {
  const st = getMaintenanceState();
  const el = document.getElementById('adminMaintenanceStatus');
  if (!el) return;
  if (st.enabled) {
    const until = st.expiresAt ? new Date(st.expiresAt).toLocaleString() : '—';
    el.textContent = `Etkin — Tahmini bitiş: ${until} (Açan: ${st.setBy || 'admin'})`;
  } else {
    el.textContent = 'Kapalı';
  }
}

// Call on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEnhancements);
} else {
  initializeEnhancements();
}


// =============================================
// FEATURE 5: PROFILE SYSTEM
// =============================================

let selectedProfileAchievements = [];

window.switchProfileTab = function(tab) {
  // Hide all tabs
  document.getElementById('profileTabBio').style.display = 'none';
  document.getElementById('profileTabAchievements').style.display = 'none';
  document.getElementById('profileTabSecurity').style.display = 'none';
  
  // Update buttons
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.style.color = 'var(--text-muted)';
    btn.style.borderBottomColor = 'transparent';
  });
  
  // Show selected tab
  document.getElementById('profileTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  event.target.style.color = 'var(--text-primary)';
  event.target.style.borderBottomColor = 'var(--accent-primary)';
  
  // Load security tab content if needed
  if (tab === 'security') {
    renderPasswordSection();
  }
  
  // Load achievements if needed
  if (tab === 'achievements') {
    renderProfileAchievementsSelector();
  }
};

window.loadProfileData = function() {
  if (!currentUser) return;
  
  // Load from Firestore
  if (isFirebaseConfigured && db) {
    db.collection('users').doc(currentUser.uid).get().then(doc => {
      if (doc.exists) {
        const userData = doc.data().data || {};
        const profile = userData.profile || {};
        
        // Fill form
        document.getElementById('profileDisplayName').value = profile.displayName || currentUser.displayName || '';
        document.getElementById('profileEmail').value = currentUser.email || '';
        document.getElementById('profileBio').value = profile.bio || '';
        document.getElementById('profileHeight').value = profile.height || '';
        document.getElementById('profileWeight').value = profile.weight || '';
        document.getElementById('profileAge').value = profile.age || '';
        document.getElementById('profileGender').value = profile.gender || '';
        
        // Load avatar
        if (profile.photoURL) {
          document.getElementById('profileAvatarLarge').style.backgroundImage = `url('${profile.photoURL}')`;
          document.getElementById('profileAvatarLarge').style.backgroundSize = 'cover';
          document.getElementById('profileAvatarLarge').style.backgroundPosition = 'center';
          document.getElementById('profileAvatarLarge').textContent = '';
        }
        
        // Load selected achievements
        selectedProfileAchievements = profile.selectedAchievements || [];
        
        // Load rank (nested data.userRank veya kök alan rank — Android uyumu)
        const rootSnap = doc.data();
        const rankKey = rootSnap.rank || userData.userRank || 'default';
        const rank = RANKS[rankKey] || RANKS.default;
        const labelEl = document.getElementById('profileRank');
        const pctEl = document.getElementById('profileRankPct');
        const barEl = document.getElementById('profileRankBar');
        const tierLabel = rootSnap.rank && !RANKS[rankKey] ? rootSnap.rank : rank.label;
        if (labelEl) {
          labelEl.textContent = tierLabel;
          labelEl.style.color = rank.color;
        }
        const pct = Math.max(0, Math.min(100, parseInt(rootSnap.rankProgress, 10) || 0));
        if (pctEl) pctEl.textContent = pct + '%';
        if (barEl) barEl.style.width = pct + '%';
      }
    });
  }
};

window.handleProfilePhotoUpload = async function(event) {
  const file = event.target.files[0];
  if (!file || !currentUser) return;
  
  const reader = new FileReader();
  reader.onload = async (e) => {
    const photoURL = e.target.result;
    
    // Update UI immediately
    document.getElementById('profileAvatarLarge').style.backgroundImage = `url('${photoURL}')`;
    document.getElementById('profileAvatarLarge').style.backgroundSize = 'cover';
    document.getElementById('profileAvatarLarge').style.backgroundPosition = 'center';
    document.getElementById('profileAvatarLarge').textContent = '';
    
    // Save to Firestore
    if (isFirebaseConfigured && db) {
      try {
        await db.collection('users').doc(currentUser.uid).update({
          'data.profile.photoURL': photoURL
        });
        showToast('Profil fotoğrafı güncellendi!', 'success');
      } catch (err) {
        console.error('Photo upload error:', err);
        showToast('Fotoğraf yüklenemedi: ' + err.message, 'error');
      }
    }
  };
  reader.readAsDataURL(file);
};

window.saveProfileBio = async function() {
  if (!currentUser) return;
  
  const displayName = document.getElementById('profileDisplayName').value.trim();
  const bio = document.getElementById('profileBio').value.trim();
  const height = document.getElementById('profileHeight').value;
  const weight = document.getElementById('profileWeight').value;
  const age = document.getElementById('profileAge').value;
  const gender = document.getElementById('profileGender').value;
  
  if (!displayName) {
    showToast('Lütfen ad soyad girin.', 'error');
    return;
  }
  
  if (isFirebaseConfigured && db) {
    try {
      await db.collection('users').doc(currentUser.uid).update({
        'data.profile': {
          displayName,
          bio,
          height: height ? parseInt(height) : null,
          weight: weight ? parseFloat(weight) : null,
          age: age ? parseInt(age) : null,
          gender,
          selectedAchievements: selectedProfileAchievements
        }
      });
      
      // Update sidebar
      document.getElementById('userName').textContent = displayName.split(' ')[0];
      
      showToast('Profil bilgileri kaydedildi!', 'success');
    } catch (err) {
      console.error('Profile save error:', err);
      showToast('Profil kaydedilemedi: ' + err.message, 'error');
    }
  }
};

window.renderProfileAchievementsSelector = function() {
  const grid = document.getElementById('profileAchievementsGrid');
  if (!grid) return;
  
  grid.innerHTML = ACHIEVEMENT_DEFS.map(badge => {
    const isSelected = selectedProfileAchievements.includes(badge.id);
    const unlocked = appData.achievements && appData.achievements[badge.id];
    
    if (!unlocked) return '';
    
    return `
      <div style="padding:12px; background:${isSelected ? 'rgba(139,124,247,0.2)' : 'rgba(255,255,255,0.03)'}; border:2px solid ${isSelected ? 'var(--accent-primary)' : 'rgba(139,124,247,0.1)'}; border-radius:12px; cursor:pointer; transition:all 0.2s; display:flex; flex-direction:column; align-items:center; gap:8px;" onclick="toggleProfileAchievement('${badge.id}')">
        <div style="font-size:2rem;">⭐</div>
        <div style="font-size:0.7rem; font-weight:600; text-align:center; color:${isSelected ? 'var(--accent-primary)' : 'var(--text-primary)'};">${badge.name}</div>
        ${isSelected ? '<div style="font-size:0.65rem; color:var(--accent-primary); font-weight:700;">✓ SEÇİLİ</div>' : ''}
      </div>
    `;
  }).join('');
};

window.toggleProfileAchievement = function(achievementId) {
  const idx = selectedProfileAchievements.indexOf(achievementId);
  if (idx > -1) {
    selectedProfileAchievements.splice(idx, 1);
  } else {
    if (selectedProfileAchievements.length < 3) {
      selectedProfileAchievements.push(achievementId);
    } else {
      showToast('Maksimum 3 başarım seçebilirsiniz.', 'info');
      return;
    }
  }
  renderProfileAchievementsSelector();
};

window.saveProfileAchievements = async function() {
  if (!currentUser) return;
  
  if (isFirebaseConfigured && db) {
    try {
      const profile = (await db.collection('users').doc(currentUser.uid).get()).data().data.profile || {};
      await db.collection('users').doc(currentUser.uid).update({
        'data.profile.selectedAchievements': selectedProfileAchievements
      });
      showToast('Başarımlar kaydedildi!', 'success');
    } catch (err) {
      console.error('Achievement save error:', err);
      showToast('Başarımlar kaydedilemedi: ' + err.message, 'error');
    }
  }
};

window.renderPasswordSection = function() {
  const section = document.getElementById('passwordSection');
  if (!section || !currentUser) return;
  
  const hasPassword = currentUser.providerData && currentUser.providerData.some(p => p.providerId === 'password');
  
  if (hasPassword) {
    section.innerHTML = `
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Mevcut Şifre</label>
        <input type="password" id="currentPassword" class="log-input" placeholder="Mevcut şifreniz">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Şifre</label>
        <input type="password" id="newPassword" class="log-input" placeholder="Yeni şifre (min 6 karakter)">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Şifre (Tekrar)</label>
        <input type="password" id="confirmPassword" class="log-input" placeholder="Şifreyi tekrar girin">
      </div>
      <button class="btn-primary" onclick="changePassword()" style="width:100%; margin-top:12px;">Şifreyi Değiştir</button>
    `;
  } else {
    section.innerHTML = `
      <div style="padding:16px; background:rgba(76,203,141,0.1); border:1px solid rgba(76,203,141,0.2); border-radius:10px; margin-bottom:16px;">
        <div style="font-size:0.85rem; color:var(--green-vivid); font-weight:600; margin-bottom:8px;">ℹ️ Bilgi</div>
        <div style="font-size:0.8rem; color:var(--text-secondary);">Google ile giriş yaptığınız için şu anda şifreniz yok. Aşağıdan bir şifre belirleyebilirsiniz.</div>
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Şifre</label>
        <input type="password" id="newPassword" class="log-input" placeholder="Şifre belirleyin (min 6 karakter)">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Şifre (Tekrar)</label>
        <input type="password" id="confirmPassword" class="log-input" placeholder="Şifreyi tekrar girin">
      </div>
      <button class="btn-primary" onclick="setNewPassword()" style="width:100%; margin-top:12px;\">Şifre Belirle</button>
    `;
  }
};

window.changePassword = async function() {
  const currentPass = document.getElementById('currentPassword').value;
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  
  if (!currentPass || !newPass || !confirmPass) {
    showToast('Lütfen tüm alanları doldurun.', 'error');
    return;
  }
  
  if (newPass !== confirmPass) {
    showToast('Yeni şifreler eşleşmiyor.', 'error');
    return;
  }
  
  if (newPass.length < 6) {
    showToast('Şifre en az 6 karakter olmalıdır.', 'error');
    return;
  }
  
  try {
    // Re-authenticate first
    const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPass);
    await currentUser.reauthenticateWithCredential(credential);
    
    // Update password
    await currentUser.updatePassword(newPass);
    
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    showToast('Şifre başarıyla değiştirildi!', 'success');
  } catch (err) {
    console.error('Password change error:', err);
    showToast('Şifre değiştirilemedi: ' + err.message, 'error');
  }
};

window.setNewPassword = async function() {
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  
  if (!newPass || !confirmPass) {
    showToast('Lütfen tüm alanları doldurun.', 'error');
    return;
  }
  
  if (newPass !== confirmPass) {
    showToast('Şifreler eşleşmiyor.', 'error');
    return;
  }
  
  if (newPass.length < 6) {
    showToast('Şifre en az 6 karakter olmalıdır.', 'error');
    return;
  }
  
  try {
    await currentUser.updatePassword(newPass);
    
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    showToast('Şifre başarıyla belirlendi!', 'success');
  } catch (err) {
    console.error('Password set error:', err);
    showToast('Şifre belirlenemedi: ' + err.message, 'error');
  }
};

// Load profile data when switching to profile page
window.switchPage = function(page) {
  navigateTo(page);
  if (page === 'profile') {
    setTimeout(() => loadProfileData(), 100);
  }
};

// Initialize profile on auth change
const originalHandleAuthStateChange = window.handleAuthStateChange;
window.handleAuthStateChange = function(user) {
  originalHandleAuthStateChange(user);
  if (user && document.getElementById('pageProfile')) {
    loadProfileData();
  }
};


// Render profile page
window.renderProfilePage = function() {
  loadProfileData();
};
