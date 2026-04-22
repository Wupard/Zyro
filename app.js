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
  
  // Sırt
  'Lat Pulldown': ['traps', 'biceps'],
  'Close-Grip V-Bar Pulldown': ['traps', 'biceps'],
  'Seated Row Machine': ['traps', 'biceps'],
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
    db.collection('users').doc(currentUser.uid).set({data:appData},{merge:true}).catch(e=>console.error('Save:',e));
  }
  localStorage.setItem('zyro_data',JSON.stringify(appData));
}

<<<<<<< HEAD
const CURRENT_PROGRAM_VERSION = 9; // Force full cache reset
=======
const CURRENT_PROGRAM_VERSION = 10; // Force full cache reset and clear notes
>>>>>>> origin/master

function enforceVersion() {
  if(appData.programVersion !== CURRENT_PROGRAM_VERSION) {
    appData.programs = null;
    appData.posturePrograms = null;
<<<<<<< HEAD
=======
    appData.notes = {};
>>>>>>> origin/master
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
  else if(page==='beforeafter'){renderProgressPhotos();renderProgressPhotoNav();}
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
<<<<<<< HEAD
    // Check if the target is inside a scrollable list or horizontal menu
    if (e.target.closest('.workout-list') || 
        e.target.closest('.card-tabs') || 
        e.target.closest('.monthly-tracker') ||
=======
    // Check if the target is inside a scrollable list or horizontal menu or calculator
    if (e.target.closest('.workout-list') || 
        e.target.closest('.card-tabs') || 
        e.target.closest('.monthly-tracker') ||
        e.target.closest('#pageCalculators') ||
>>>>>>> origin/master
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
<<<<<<< HEAD
    appData.workoutLogs[td].push({exercise,weight:finalWeight,reps,sets,timestamp:Date.now()});
=======
    appData.workoutLogs[td].push({exercise,weight:finalWeight,inputWeight:weight,unit:unit,reps,sets,timestamp:Date.now()});
>>>>>>> origin/master
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
<<<<<<< HEAD
    html+=`<div class="logged-row" style="border-bottom: 1px solid var(--border-subtle);"><span class="logged-exercise">${l.exercise}</span><span>${l.weight} kg</span><span>${l.reps}</span><span>${l.sets}</span><button class="delete-log" data-index="${i}">×</button></div>`;
=======
    const displayWeight = l.inputWeight && l.unit ? `${l.inputWeight}${l.unit.toUpperCase()}` : `${l.weight}kg`;
    html+=`<div class="logged-row" style="border-bottom: 1px solid var(--border-subtle);"><span class="logged-exercise">${l.exercise}</span><span>${displayWeight}</span><span>${l.reps}</span><span>${l.sets}</span><button class="delete-log" data-index="${i}">×</button></div>`;
>>>>>>> origin/master
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
// MUSCLE MAP (Pure SVG Vector System)
// =============================================

// Intensity color mapping
const MUSCLE_INTENSITY_COLORS = {
  low:    '#FFD54F',
  medium: '#FFA726',
  high:   '#EF5350'
};

/**
 * Highlight a specific muscle by its data-muscle attribute or element ID.
 * @param {string} muscleId - The muscle group name (e.g., 'chest', 'traps') or element ID
 * @param {'low'|'medium'|'high'|'none'} intensityLevel - Intensity level
 */
function highlightMuscle(muscleId, intensityLevel) {
  // Try by data-muscle attribute first, then by element ID
  let elements = document.querySelectorAll(`[data-muscle="${muscleId}"]`);
  if (elements.length === 0) {
    const el = document.getElementById(muscleId);
    if (el) elements = [el];
  }

  elements.forEach(el => {
    el.classList.remove('intensity-low', 'intensity-mid', 'intensity-high');
    if (intensityLevel === 'low') el.classList.add('intensity-low');
    else if (intensityLevel === 'medium') el.classList.add('intensity-mid');
    else if (intensityLevel === 'high') el.classList.add('intensity-high');
    // 'none' = remove all classes (back to default #2c2c2e)
  });
}

function updateMuscleMap() {
  const muscleVolume = {};
  const monday = getMonday(new Date());
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    const ds = dateStr(d);
    (appData.workoutLogs[ds] || []).forEach(log => {
      const muscles = EXERCISE_MUSCLES[log.exercise] || [];
      const vol = parseInt(log.sets) || 0;
      muscles.forEach(m => { muscleVolume[m] = (muscleVolume[m] || 0) + vol });
    });
  }

  const volumes = Object.values(muscleVolume);
  const maxVol = Math.max(...volumes, 1);
  const view = document.querySelector('input[name="muscleView"]:checked')?.value || 'front';

  // Toggle front/back view containers
  const frontView = document.getElementById('muscleViewFront');
  const backView = document.getElementById('muscleViewBack');
  if (frontView) frontView.style.display = view === 'front' ? 'block' : 'none';
  if (backView) backView.style.display = view === 'back' ? 'block' : 'none';

  // Apply intensity to ALL muscle-part elements in BOTH views (so switching preserves state)
  document.querySelectorAll('.muscle-part').forEach(el => {
    const m = el.dataset.muscle;
    const vol = muscleVolume[m] || 0;
    el.classList.remove('intensity-low', 'intensity-mid', 'intensity-high');
    if (vol > 0) {
      const r = vol / maxVol;
      if (r > 0.5) el.classList.add('intensity-high');
      else if (r > 0.2) el.classList.add('intensity-mid');
      else el.classList.add('intensity-low');
    }
  });

  const summary = document.getElementById('muscleSummary');
  if (summary) {
    const sorted = Object.entries(muscleVolume).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
      summary.innerHTML = `<div style="margin-top:4px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.05);font-size:.7rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">${currentLang === 'tr' ? 'Haftalık Set Hacmi' : 'Weekly Set Volume'}</div>` +
        sorted.slice(0, 6).map(([m, v]) => `<div class="muscle-summary-item"><span class="muscle-name">${m.replace('_back','')}</span><span class="muscle-vol">${Math.round(v)} set</span></div>`).join('');
    } else {
      summary.innerHTML = `<p style="font-size:.75rem;color:var(--text-tertiary);margin-top:12px">${t('noWorkoutsWeek')}</p>`;
    }
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
    drawWeightChart();drawStrengthChart();renderPRTable();
    renderMonthlyTracker();renderProgressTracker();
  },50);
  else if(currentPage==='notes')renderNotes();
  else if(currentPage==='comments')renderComments();
  else if(currentPage==='beforeafter'){renderProgressPhotos();renderProgressPhotoNav();}
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
  bench_50:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>',
  deadlift_100:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M4 12h16M4 6l8 6-8 6M20 6l-8 6 8 6"/></svg>',
  squat_50:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4v16M18 4v16M6 12h12"/></svg>',
  streak_7:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>'
};
const ACHIEVEMENT_DEFS = [
  { id: 'bench_50',    name: '50 kg Bench Press',  exercise: 'DB Bench Press',          target: 50,  desc: '50 kg Bench Press yapınca kazanılır.' },
  { id: 'deadlift_100',name: '100 kg Deadlift',    exercise: 'Romanian Deadlift (RDL)', target: 100, desc: '100 kg RDL yapınca kazanılır.' },
  { id: 'squat_50',    name: '50 kg Squat',         exercise: 'Leg Press',               target: 50,  desc: '50 kg Leg Press yapınca kazanılır.' },
  { id: 'streak_7',    name: '7 Günlük Seri',       exercise: null,                      target: 7,   desc: '7 gün üst üste antrenman yap.' },
];

function checkAchievements(exercise, weight) {
  if (!appData.achievements) appData.achievements = {};
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) return; // streak handled separately
    if (appData.achievements[def.id]) return; // already unlocked
    if (def.exercise === exercise && weight >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      saveData();
      showAchievementPopup(def);
      renderAchievements();
    }
  });
}

function showAchievementPopup(def) {
  const popup = document.getElementById('achievementPopup');
  if (!popup) return;
  const iconEl = document.getElementById('achievementIcon');
  iconEl.innerHTML = ACH_ICONS[def.id] || def.id;
  document.getElementById('achievementTitle').textContent = 'Tebrikler! ' + def.name;
  document.getElementById('achievementDesc').textContent = def.desc + ' 🎉';
  popup.classList.add('show');
  runConfetti();
  setTimeout(() => closeAchievementPopup(), 5000);
}

window.closeAchievementPopup = function() {
  document.getElementById('achievementPopup')?.classList.remove('show');
};

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

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  if (!grid) return;
  if (!appData.achievements) appData.achievements = {};
  const CHAIN_SVG = '<svg class="chain-lock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2"><rect x="5" y="11" width="14" height="11" rx="3" ry="3"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>';
  grid.innerHTML = ACHIEVEMENT_DEFS.map(def => {
    const unlocked = !!appData.achievements[def.id];
    const iconSvg = ACH_ICONS[def.id] || '';
    return `<div class="achievement-badge ${unlocked ? 'unlocked' : 'locked'}" title="${def.desc}">
      <div class="achievement-badge-icon">${iconSvg}${!unlocked ? CHAIN_SVG : ''}</div>
      <div class="achievement-badge-name">${def.name}</div>
      ${unlocked
        ? '<div style="font-size:0.65rem;color:#FFD700;margin-top:4px;display:flex;align-items:center;gap:3px;"><svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700"><path d="M20 6L9 17l-5-5"/></svg> Kazanıldı</div>'
        : '<div style="font-size:0.65rem;color:var(--text-tertiary);margin-top:4px;">Kilitli</div>'}
    </div>`;
  }).join('');
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

window.saveProgressPhoto = function() {
  if (!_pendingPhotoBase64) return;
  const date = document.getElementById('photoDate').value || todayStr();
  const weight = parseFloat(document.getElementById('photoWeight').value) || 0;
  const note = document.getElementById('photoNote').value.trim().slice(0, 280);
  if (!date || !weight) {
    showToast('Tarih ve kilo zorunlu!', 'error');
    return;
  }
  if (!appData.progressImages) appData.progressImages = [];
  appData.progressImages.push({ date, weight, note, image: _pendingPhotoBase64, id: Date.now() });
  _pendingPhotoBase64 = null;
  document.getElementById('progressPhotoForm').style.display = 'none';
  document.getElementById('photoNote').value = '';
  saveData();
  renderProgressPhotos();
  showToast('Fotoğraf kaydedildi! 📸', 'success');
};

window.toggleCompareMode = function() {
  _compareMode = !_compareMode;
  const btn = document.getElementById('comparePhotosBtn');
  const compareView = document.getElementById('compareView');
  const photosGrid = document.getElementById('progressPhotosGrid');
  if (_compareMode) {
    btn.textContent = 'Kapat';
    compareView.style.display = 'grid';
    photosGrid.style.display = 'none';
    renderCompareView();
  } else {
    btn.textContent = 'Karşılaştır';
    compareView.style.display = 'none';
    photosGrid.style.display = 'grid';
  }
};

function renderCompareView() {
  const container = document.getElementById('compareView');
  if (!container) return;
  const photos = (appData.progressImages || []).sort((a, b) => a.date.localeCompare(b.date));
  if (photos.length < 2) {
    container.innerHTML = '<div class="logged-empty" style="grid-column:1/-1;">Karşılaştırmak için en az 2 fotoğraf gerekli.</div>';
    return;
  }
  const first = photos[0];
  const last = photos[photos.length - 1];
  container.innerHTML = [
    {label: 'Başlangıç', photo: first},
    {label: 'Son', photo: last}
  ].map(({label, photo}) => `
    <div class="compare-photo-wrap">
      <img src="${photo.image}" alt="${label}">
      <div class="compare-photo-overlay">${label} • ${photo.date} • ${photo.weight} kg</div>
    </div>
  `).join('');
}

function renderProgressPhotos() {
  const grid = document.getElementById('progressPhotosGrid');
  if (!grid) return;
  const photos = (appData.progressImages || []).sort((a, b) => b.date.localeCompare(a.date));
  if (photos.length === 0) {
    grid.innerHTML = '<div class="logged-empty" style="grid-column:1/-1;">Henüz fotoğraf eklenmedi.</div>';
    return;
  }
  grid.innerHTML = photos.map(p => `
    <div class="progress-photo-item">
      <img src="${p.image}" alt="Progress ${p.date}" loading="lazy">
      <div class="progress-photo-meta">
        <strong>${p.date}</strong>
        ${p.weight} kg${p.note ? ' • ' + p.note.slice(0, 40) + (p.note.length > 40 ? '…' : '') : ''}
        <button onclick="deleteProgressPhoto(${p.id})" style="display:block;margin-top:6px;background:rgba(224,84,84,0.15);border:1px solid rgba(224,84,84,0.3);color:#e05454;border-radius:6px;padding:3px 8px;font-size:0.7rem;cursor:pointer;">Sil</button>
      </div>
    </div>
  `).join('');
}

window.deleteProgressPhoto = function(id) {
  if (!confirm('Bu fotoğrafı silmek istediğine emin misin?')) return;
  appData.progressImages = (appData.progressImages || []).filter(p => p.id !== id);
  saveData();
  renderProgressPhotos();
  showToast('Fotoğraf silindi.', 'success');
};

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
        <div style="margin-top: 12px; display: flex; gap: 16px; padding-left: 34px;">
          <button onclick="upvoteComment('${c.id}')" style="background:${hasUpvoted ? 'var(--accent-glow)' : 'transparent'}; border:1px solid ${hasUpvoted ? 'var(--accent-primary)' : 'transparent'}; color:${hasUpvoted ? 'var(--accent-primary)' : 'var(--text-muted)'}; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px; padding: 4px 8px; border-radius: 6px; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
            <span style="font-weight: bold;">${upvotes}</span>
          </button>
        </div>
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

  // Achievements
  const unlockedCount = Object.keys(appData.achievements || {}).length;
  const achievementsHtml = ACHIEVEMENT_DEFS.map(def => {
    const unlocked = !!(appData.achievements || {})[def.id];
    return `<div style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;background:${unlocked ? 'rgba(139,124,247,0.1)' : 'rgba(255,255,255,0.02)'};border:1px solid ${unlocked ? 'rgba(139,124,247,0.3)' : 'var(--border-subtle)'};">
      <div style="width:36px;height:36px;border-radius:10px;background:${unlocked ? 'var(--accent-glow)' : 'rgba(255,255,255,0.03)'};display:flex;align-items:center;justify-content:center;color:${unlocked ? 'var(--accent-primary)' : 'var(--text-tertiary)'};">${ACH_ICONS[def.id] || ''}</div>
      <div>
        <div style="font-weight:600;font-size:0.85rem;color:${unlocked ? 'var(--text-primary)' : 'var(--text-muted)'};">${def.name}</div>
        <div style="font-size:0.7rem;color:var(--text-tertiary);">${unlocked ? 'Kazanildi' : 'Kilitli - ' + def.desc}</div>
      </div>
    </div>`;
  }).join('');

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
        <h3 class="card-title">Basarimlar</h3>
        <span class="card-badge" style="background:rgba(139,124,247,0.15);color:var(--accent-primary);">${unlockedCount}/${ACHIEVEMENT_DEFS.length}</span>
      </div>
      <div style="display:grid;gap:10px;">${achievementsHtml}</div>
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

  // Rank Display — place badge BEFORE the name in sidebar
  const userRankKey = appData.userRank || (user && user.email === 'wupard@gmail.com' ? 'mod' : 'default');
  const rank = RANKS[userRankKey] || RANKS.default;

  // Remove old rank badge if exists
  const oldRank = document.getElementById('userRankInfo');
  if (oldRank) oldRank.remove();

  if (user) {
    const rankBadge = document.createElement('span');
    rankBadge.id = 'userRankInfo';
    rankBadge.textContent = rank.label;
    rankBadge.style.cssText = `font-size:0.6rem;font-weight:900;letter-spacing:0.06em;padding:2px 7px;border-radius:5px;color:${rank.color};background:${rank.bg};display:inline-block;`;
    // Insert before name in parent
    const userInfo = name.closest('.user-info');
    if (userInfo) {
      // Make user-info flex column, insert rank above name
      userInfo.style.display = 'flex';
      userInfo.style.flexDirection = 'column';
      userInfo.style.gap = '2px';
      userInfo.insertBefore(rankBadge, name);
    }

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
