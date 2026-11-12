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
    navUpdates: 'Updates',
    navLeaderboard: 'Leaderboard',
    navAI: 'AI Assistant',
    navProfile: 'Profile',
    navDiet: 'Diet & Nutrition',
    updatesTitle: 'Updates',
    updatesSubtitle: 'Get info about new features and improvements',
    shareUpdate: 'Share Update',
    syntax: 'Syntax:',
    loadingUpdates: 'Loading updates...',
    profileSubtitle: 'Manage and personalize your account info',
    changePhoto: 'Change Photo',
    fullName: 'Full Name',
    save: 'Save',
    profileBio: 'Biography',
    security: 'Security',
    aiSettings: 'AI Settings',
    geminiSettings: 'Gemini AI Settings',
    geminiInfo: 'A free <strong>Google Gemini API key</strong> is required to use Zyro AI features. Your key is completely private and only used on your device.',
    getFreeKey: 'Get Free Key from Google AI Studio',
    apiKey: 'API Key',
    showHide: 'Show/Hide',
    apiKeyStatusEmpty: 'API key not set',
    saveKey: 'Save Key',
    deleteKey: 'Delete Key',
    howToGet: 'How to get?',
    step1: 'Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--accent-primary);">aistudio.google.com</a> and sign in with your Google account',
    step2: 'Click on "Create API key" button',
    step3: 'Copy the key and paste it above. That\'s it! (Free, 1500 req/month)',
    about: 'About',
    heightCm: 'Height (cm)',
    age: 'Age',
    gender: 'Gender',
    genderMale: 'Male',
    genderFemale: 'Female',
    selectedAchievementsTitle: 'Selected Achievements (3 Max)',
    selectedAchievementsDesc: 'Select 3 achievements to display on your profile',
    saveAchievements: 'Save Achievements',
    passwordManagement: 'Password Management',
    notificationSettings: 'Notification Settings (Push)',
    notificationDesc: 'Do not miss reply notifications and important announcements with push notifications.',
    enableNotifications: 'Allow Notifications',
    viewStrengthProgress: 'View Strength Progress',
    weeklyReport: 'Weekly Report',
    weeklyGoal: 'Weekly Goal',
    mostTrained: 'Most Trained',
    bestPR: 'Best PR',
    tuesday: 'Tuesday',
    thursday: 'Thursday',
    saturday: 'Saturday',
    monday: 'Monday',
    wednesday: 'Wednesday',
    friday: 'Friday',
    sunday: 'Sunday',
    video: 'Video',
    monShort: 'Mon',
    tueShort: 'Tue',
    wedShort: 'Wed',
    thuShort: 'Thu',
    friShort: 'Fri',
    satShort: 'Sat',
    sunShort: 'Sun',
    progressSubtitle: 'Track your progress and reach your goals',
    monthlyTrackerTitle: 'Monthly Consistency Tracker',
    achievementsTitle: 'Achievements & Badges',
    achievementsSubtitle: 'Rewards and goals you unlocked',
    beforeAfterTitle: 'Progress Photos',
    beforeAfterSubtitle: 'Observe and document changes in your body',
    beforeAfterTitleMain: 'Progress',
    beforeAfterTitleBold: 'photos',
    photosTitle: 'Photos',
    btnCompare: 'Compare',
    btnNewPhoto: 'New Photo',
    bodyMeasurementsTitle: 'Body Measurements',
    btnAddMeasurement: 'Add Measurement',
    newPhotoDialogTitle: 'New photo',
    dropPhotoText: 'Select photo or drag here',
    lblDate: 'Date',
    lblPose: 'Pose',
    poseFront: 'Front',
    poseSide: 'Side',
    poseBack: 'Back',
    lblWeightOptional: 'Weight (kg, optional)',
    lblNoteOptional: 'Note (optional)',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    btnDelete: 'Delete',
    btnClose: 'Close',
    addMeasurementDialogTitle: 'Add measurement',
    leaveComment: 'Leave feedback / comment',
    commentTypeLabel: 'Submission type',
    commentTypeNormal: 'Normal',
    commentTypeAnon: 'Anonymous',
    commentPlaceholder: 'Share your thoughts with us…',
    btnSend: 'Send',
    recentComments: 'Recent comments',
    sortNewest: 'Newest',
    sortPopular: 'Popular',
    reportCommentTitle: 'Report comment',
    reportReason: 'Reason',
    reportReasonSpam: 'Spam',
    reportReasonInappropriate: 'Insult / inappropriate content',
    reportReasonFalseInfo: 'False information',
    reportReasonOther: 'Other',
    reportNoteOptional: 'Note (optional)',
    lbSubtitle: 'Compete with the best in the community',
    lbFilterLevel: 'Level (XP)',
    lbFilterPR: 'Highest PR',
    loading: 'Loading...',
    aiAsk: 'Ask AI Assistant',
    aiAskSubtitle: 'Nutrition, workouts, recovery — everything',
    aiFullChat: 'Full chat ›',
    chipWeeklyProgramText: '📅 Weekly Program',
    chipMacrosText: '🥩 Macro Needs',
    chipBenchPRText: '💪 Bench Press PR',
    chipWeeklyProgram: 'Can you create a weekly workout program?',
    chipMacros: 'What is my macro requirement today?',
    chipBenchPR: 'How can I increase my bench press PR?',
    chipNutritionText: '🥗 Suggest Nutrition',
    chipPostWorkoutText: '🥩 Post-workout Meal',
    chipWorkoutAnalysisText: '💪 Workout Analysis',
    chipRecoveryText: '😴 Recovery',
    chipNutrition: 'What should I eat today?',
    chipPostWorkout: 'What should I eat after my workout?',
    chipWorkoutAnalysis: 'Can you evaluate my workout today?',
    chipRecovery: 'How long should I rest?',
    aiWidgetPlaceholder: 'Ask anything... (e.g. I had eggs for breakfast, how many calories?)',
    profileNamePlaceholder: 'Enter your name',
    aiPagePlaceholder: 'Consult your AI coach...',
    adminUpdatePlaceholder: '*Workout Program\n-Weights updated\n-New exercises added',
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
    catBiceps: 'Biceps / Front Arm',
    catTriceps: 'Triceps / Back Arm',
    catWrists: 'Wrists / Forearm',
    catCore: 'Core & Abs',
    catForearms: 'Forearms',
    catTraps: 'Traps',
    catQuads: 'Quads',
    catHamstrings: 'Hamstrings & Glutes',
    catCalves: 'Calves',
    lblCategory: 'Category',
    repetitions: 'Reps',
    sets: 'Sets',
    achievements: 'Achievements',
    beforeAfter: 'Before/After',
    'Chin Tuck': 'Chin Tuck',
    'Deadbug': 'Deadbug',
    'Thoracic Extension (Rulo veya sandalye ile)': 'Thoracic Extension (with roller or chair)',
    "Child’s Pose (Çocuk Pozu)": "Child's Pose",
    '2 set x 30 saniye': '2 sets x 30 sec',
    'Her harf için 15 tekrar (Toplam 45 tekrar)': '15 reps per letter (45 total)',
    '20 tekrar': '20 reps',
    '15 tekrar (Her birinde 3 sn bekleme)': '15 reps (3s hold each)',
    'Her bacak için 30 saniye': '30 sec each leg',
    '2 set x 20 tekrar': '2 sets x 20 reps',
    '20 tekrar (10 sağ, 10 sol)': '20 reps (10 right, 10 left)',
    '1 dakika (Pozisyonda kal ve derin nefes al)': '1 min (hold and breathe deeply)',
    '1 set x 30 saniye': '1 set x 30 sec',
    'Pelvic Floor (Kegel)': 'Pelvic Floor (Kegel)',
    '3 set x 10 tekrar (10 sn kasılı tut)': '3 sets x 10 reps (hold 10 sec each)',
    apiKeyStatusActive: 'API key active',
    pleaseEnterValidKey: 'Please enter a valid key',
    apiKeySaved: 'API Key saved successfully!',
    apiKeyDeleted: 'API Key deleted',
    confirmClearChat: 'Are you sure you want to clear chat history?',
    chatHistoryCleared: 'Chat history cleared',
    currentPassword: 'Current Password',
    currentPasswordPlaceholder: 'Your current password',
    newPassword: 'New Password',
    newPasswordPlaceholder: 'New password (min 6 characters)',
    confirmPassword: 'Confirm New Password',
    confirmPasswordPlaceholder: 'Enter password again',
    changePasswordBtn: 'Change Password',
    info: 'Info',
    googleNoPasswordInfo: 'Since you signed in with Google, you currently do not have a password. You can set a password below.',
    setNewPasswordPlaceholder: 'Set password (min 6 characters)',
    setPasswordBtn: 'Set Password',
    fillAllFields: 'Please fill in all fields.',
    passwordsDoNotMatch: 'New passwords do not match.',
    passwordMinLength: 'Password must be at least 6 characters.',
    passwordChangedSuccess: 'Password changed successfully!',
    passwordSetSuccess: 'Password set successfully!',
    highest: 'Highest',
    average: 'Average',
    weeklyProjection: 'Weekly Projection',
    monthlyProjection: 'Monthly Projection',
    recentLogs: 'Recent Workouts',
    same: 'Same',
    noDataFoundLogFirst: 'No data found. Please log workouts first.',
    noExercisesToday: 'No exercises today.',
    noExercisesThisWeek: 'No exercises this week.',
    noExercisesInCategory: 'No exercises in this category',
    selectExerciseTitle: 'Select Exercise',
    weeklyGrowth: 'Weekly Growth',
    asYouLogExercises: 'As you log exercises, you will see them here',
    workoutProgramSubtitle: 'Track and log today\'s exercises',
    postureProgramSubtitle: 'Improve your posture, work for a healthy body',
    notificationsEnabledSuccess: 'Notifications successfully enabled!',
    notificationPermissionDenied: 'Notification permission denied.',
    zw: {
      navLabel: 'Main menu',
      nav: {
        dashboard: 'Dashboard', workouts: 'Workouts', progress: 'Progress', diet: 'Nutrition',
        posture: 'Posture', calculators: 'Calculators', leaderboard: 'Leaderboard', notes: 'Notes'
      },
      title1: 'Workout', title2: 'program',
      subtitle: '5-day split · Push / Pull / Legs / Upper / Lower',
      weeklyProgram: 'Weekly program',
      todayPill: function (day, split) { return 'Today: ' + day + ' · ' + split; },
      restDayPill: 'Rest day today',
      restWord: 'Rest',
      priority: 'Priority',
      todayFocus: "Today's focus",
      rirNote: 'Reps in reserve. RIR 2 means you could still do 2 more reps.',
      compoundWord: 'Compound lifts',
      compoundNote: 'rest 2–3 min between sets.',
      isoWord: 'Isolation lifts',
      isoNote: 'rest 60–90 sec between sets.',
      freeLog: 'Free log',
      freeLogSub: 'An exercise outside the program',
      category: 'Category',
      exercise: 'Exercise',
      selectExercise: 'Select exercise…',
      weight: 'Weight',
      reps: 'Reps',
      sets: 'Sets',
      addRecord: 'Add record',
      viewStrength: 'View strength progress',
      todaysRecords: "Today's log",
      records: 'records',
      emptyLog: 'No records yet today. Tap an exercise and enter your first set.',
      totalVolume: 'Total volume',
      target: 'Target',
      watch: 'Watch',
      set: 'Set',
      repsShort: 'reps',
      completeWord: 'complete',
      completedWord: 'completed',
      savedWord: 'saved',
      volumeWord: 'volume',
      workoutDone: 'Workout complete',
      workoutDoneTail: 'Great work, you finished today.',
      exercises: 'exercises',
      setsWord: 'sets',
      kgVolume: 'kg volume',
      close: 'Close',
      fillRequired: 'Fill in exercise, reps and sets.',
      level: 'Level',
      decrease: 'Decrease',
      increase: 'Increase',
      cats: {
        all: 'All', chest: 'Chest', back: 'Back', shoulders: 'Shoulders',
        biceps: 'Biceps / forearms', triceps: 'Triceps', legs: 'Legs & glutes', core: 'Core'
      }
    },
    zp: {
      navLabel: 'Main menu',
      nav: {
        dashboard: 'Dashboard', workouts: 'Workouts', progress: 'Progress', diet: 'Nutrition',
        posture: 'Posture', calculators: 'Calculators', leaderboard: 'Leaderboard', notes: 'Notes'
      },
      title1: 'Posture', title2: 'program',
      subtitle: 'Daily mobility · 5–10 minutes',
      weeklyProgram: 'Weekly program',
      todayPill: function (day, name) { return 'Today: ' + day + ' · ' + name; },
      todayFocus: "Today's focus",
      priority: 'Focus',
      timedWord: 'Timed exercises.',
      timedNote: 'Press start and the round completes itself when the timer ends.',
      repWord: 'Rep exercises.',
      repNote: 'Finish the reps, then tap the confirm button.',
      slowWord: 'Slow and controlled',
      slowNote: 'progress. Stop if you feel pain.',
      timedSmall: 'Timed',
      repSmall: 'Reps',
      startWord: 'Start',
      stopWord: 'Pause',
      resumeWord: 'Resume',
      completeRound: 'complete',
      doneWord: 'complete, undo',
      repUnit: 'reps',
      roundWord: 'rounds',
      roundDoneWord: 'completed',
      sessionDone: 'Posture session complete',
      sessionDoneTail: 'Nice work, you finished today’s posture session.',
      exercises: 'exercises',
      close: 'Close',
      streakWord: 'day streak',
      xpWord: 'XP',
      level: 'Level',
      watch: 'Watch'
    }
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
    navUpdates: 'Güncellemeler',
    navLeaderboard: 'Liderlik Tablosu',
    navAI: 'AI Asistan',
    navProfile: 'Profil',
    navDiet: 'Diyet & Beslenme',
    updatesTitle: 'Güncellemeler',
    updatesSubtitle: 'Yeni özellikler ve iyileştirmeler hakkında bilgi al',
    shareUpdate: 'Güncelleme Paylaş',
    syntax: 'Söz dizimi:',
    loadingUpdates: 'Güncellemeler yükleniyor...',
    profileSubtitle: 'Hesap bilgilerini yönet ve kişiselleştir',
    changePhoto: 'Fotoğrafı Değiştir',
    fullName: 'Ad Soyad',
    save: 'Kaydet',
    profileBio: 'Biyografi',
    security: 'Güvenlik',
    aiSettings: 'AI Ayarları',
    geminiSettings: 'Gemini AI Ayarları',
    geminiInfo: 'Zyro AI özelliklerini kullanmak için ücretsiz bir <strong style="color:var(--accent-primary);">Google Gemini API key</strong> gereklidir. Key\'in tamamen sana özeldir, başkası kullanamaz.',
    getFreeKey: 'Google AI Studio\'dan Ücretsiz Key Al',
    apiKey: 'API Key',
    showHide: 'Göster/Gizle',
    apiKeyStatusEmpty: 'API key girilmemiş',
    saveKey: 'Kayıt Et',
    deleteKey: 'Key\'i Sil',
    howToGet: 'Nasıl Alınır?',
    step1: '<a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--accent-primary);">aistudio.google.com</a>\'a git ve Google hesabınla giriş yap',
    step2: '"Create API key" butonuna tıkla',
    step3: 'Key\'i kopyalayıp yukarıya yapıştır. Hepsi bu! (Ücretsiz, ayda 1500 istek)',
    about: 'Hakkında',
    heightCm: 'Boy (cm)',
    age: 'Yaş',
    gender: 'Cinsiyet',
    genderMale: 'Erkek',
    genderFemale: 'Kadın',
    selectedAchievementsTitle: 'Seçili Başarımlar (3 Tane)',
    selectedAchievementsDesc: 'Profilde gösterilecek 3 başarımı seçin',
    saveAchievements: 'Başarımları Kaydet',
    passwordManagement: 'Şifre Yönetimi',
    notificationSettings: 'Bildirim Ayarları (Push)',
    notificationDesc: 'Anlık uygulama bildirimleri ile yorum yanıtlarını ve önemli duyuruları kaçırmayın.',
    enableNotifications: 'Bildirimlere İzin Ver',
    viewStrengthProgress: 'Güç İlerlemesini Gör',
    weeklyReport: 'Haftalık Rapor',
    weeklyGoal: 'Haftalık Hedef',
    mostTrained: 'En Çok Çalışılan',
    bestPR: 'En Yüksek PR',
    tuesday: 'Salı',
    thursday: 'Perşembe',
    saturday: 'Cumartesi',
    monday: 'Pazartesi',
    wednesday: 'Çarşamba',
    friday: 'Cuma',
    sunday: 'Pazar',
    video: 'Video',
    monShort: 'Pzt',
    tueShort: 'Sal',
    wedShort: 'Çar',
    thuShort: 'Per',
    friShort: 'Cum',
    satShort: 'Cmt',
    sunShort: 'Paz',
    progressSubtitle: 'Gelişimini gör, hedeflerine ulaş',
    monthlyTrackerTitle: 'Aylık İlerleme Tablosu',
    achievementsTitle: 'Başarımlar & Rozetler',
    achievementsSubtitle: 'Kilidini açtığınız ödüller ve hedefler',
    beforeAfterTitle: 'Gelişim Fotoğrafları',
    beforeAfterSubtitle: 'Bedenindeki değişimi gözlemle ve belgele',
    beforeAfterTitleMain: 'Gelişim',
    beforeAfterTitleBold: 'fotoğrafları',
    photosTitle: 'Fotoğraflar',
    btnCompare: 'Karşılaştır',
    btnNewPhoto: 'Yeni Fotoğraf',
    bodyMeasurementsTitle: 'Vücut Ölçüleri',
    btnAddMeasurement: 'Ölçü Ekle',
    newPhotoDialogTitle: 'Yeni fotoğraf',
    dropPhotoText: 'Fotoğraf seç veya buraya bırak',
    lblDate: 'Tarih',
    lblPose: 'Poz',
    poseFront: 'Ön',
    poseSide: 'Yan',
    poseBack: 'Arka',
    lblWeightOptional: 'Kilo (kg, isteğe bağlı)',
    lblNoteOptional: 'Not (isteğe bağlı)',
    btnCancel: 'Vazgeç',
    btnSave: 'Kaydet',
    btnDelete: 'Sil',
    btnClose: 'Kapat',
    addMeasurementDialogTitle: 'Ölçü ekle',
    leaveComment: 'Geri bildirim / yorum bırak',
    commentTypeLabel: 'Gönderme türü',
    commentTypeNormal: 'Normal',
    commentTypeAnon: 'Anonim',
    commentPlaceholder: 'Fikirlerini bizimle paylaş…',
    btnSend: 'Gönder',
    recentComments: 'Son yorumlar',
    sortNewest: 'En yeni',
    sortPopular: 'Popüler',
    reportCommentTitle: 'Yorumu raporla',
    reportReason: 'Sebep',
    reportReasonSpam: 'Spam',
    reportReasonInappropriate: 'Hakaret / uygunsuz içerik',
    reportReasonFalseInfo: 'Yanlış bilgi',
    reportReasonOther: 'Diğer',
    reportNoteOptional: 'Not (isteğe bağlı)',
    lbSubtitle: 'Topluluğun en iyileriyle yarışın',
    lbFilterLevel: 'Seviye (XP)',
    lbFilterPR: 'En Yüksek PR',
    loading: 'Yükleniyor...',
    aiAsk: 'AI Asistanına Sor',
    aiAskSubtitle: 'Beslenme, antrenman, toparlanma — her şey',
    aiFullChat: 'Tam chat ›',
    chipWeeklyProgramText: '📅 Haftalık Program',
    chipMacrosText: '🥩 Makro İhtiyacı',
    chipBenchPRText: '💪 Bench Press PR',
    chipWeeklyProgram: 'Haftalık antrenman programı oluşturur musun?',
    chipMacros: 'Bugünkü makro ihtiyacım nedir?',
    chipBenchPR: 'Bench press PR\'ımı nasıl artırabilirim?',
    chipNutritionText: '🥗 Beslenme öner',
    chipPostWorkoutText: '🥩 Sonrası beslenme',
    chipWorkoutAnalysisText: '💪 Antrenman analizi',
    chipRecoveryText: '😴 Toparlanma',
    chipNutrition: 'Bugün ne yemem gerekiyor?',
    chipPostWorkout: 'Antrenman sonrası ne yemeliyim?',
    chipWorkoutAnalysis: 'Bugünkü antrenmanımı değerlendirir misin?',
    chipRecovery: 'Ne kadar dinlenmeliyim?',
    aiWidgetPlaceholder: 'Bir şey sor... (ör: bugün kahvaltıda yumurta yedim, kaç kalori?)',
    profileNamePlaceholder: 'Adınızı girin',
    aiPagePlaceholder: 'Yapay zeka koçuna danış...',
    adminUpdatePlaceholder: '*Spor Programı\n-Ağırlıklar güncellendi\n-Yeni hareketler eklendi',
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
    goodAfternoon: 'İyi öğleden sonlar',
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
    catBiceps: 'Ön Kol',
    catTriceps: 'Arka Kol',
    catWrists: 'Bilek',
    catCore: 'Karın & Merkez',
    catForearms: 'Önkol',
    catTraps: 'Trapez',
    catQuads: 'Quadriceps',
    catHamstrings: 'Hamstring & Kalça',
    catCalves: 'Baldır',
    lblCategory: 'Kategori',
    repetitions: 'Tekrar',
    sets: 'Set',
    achievements: 'Başarımlar',
    beforeAfter: 'Gelişim',
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
    'Chin Tuck': 'Chin Tuck',
    'Deadbug': 'Deadbug',
    'Thoracic Extension (Rulo veya sandalye ile)': 'Thoracic Extension (Rulo veya sandalye ile)',
    'Child’s Pose (Çocuk Pozu)': 'Child’s Pose (Çocuk Pozu)',
    '2 set x 30 saniye': '2 set x 30 saniye',
    'Her harf için 15 tekrar (Toplam 45 tekrar)': 'Her harf için 15 tekrar (Toplam 45 tekrar)',
    '20 tekrar': '20 tekrar',
    '15 tekrar (Her birinde 3 sn bekleme)': '15 tekrar (Her birinde 3 sn bekleme)',
    'Her bacak için 30 saniye': 'Her bacak için 30 saniye',
    '2 set x 20 tekrar': '2 set x 20 tekrar',
    '20 tekrar (10 sağ, 10 sol)': '20 tekrar (10 sağ, 10 sol)',
    '1 dakika (Pozisyonda kal ve derin nefes al)': '1 dakika (Pozisyonda kal ve derin nefes al)',
    '1 set x 30 saniye': '1 set x 30 saniye',
    'Pelvic Floor (Kegel)': 'Pelvik Taban (Kegel)',
    '3 set x 10 tekrar (10 sn kasılı tut)': '3 set x 10 tekrar (10 sn kasılı tut)',
    apiKeyStatusActive: 'API key aktif',
    pleaseEnterValidKey: 'Lütfen geçerli bir key girin',
    apiKeySaved: 'API Key başarıyla kaydedildi!',
    apiKeyDeleted: 'API Key silindi',
    confirmClearChat: 'Sohbet geçmişini tamamen silmek istediğine emin misin?',
    chatHistoryCleared: 'Sohbet geçmişi temizlendi',
    currentPassword: 'Mevcut şifre',
    currentPasswordPlaceholder: 'Mevcut şifreniz',
    newPassword: 'Yeni Şifre',
    newPasswordPlaceholder: 'Yeni şifre (min 6 karakter)',
    confirmPassword: 'Yeni Şifre (Tekrar)',
    confirmPasswordPlaceholder: 'Şifreyi tekrar girin',
    changePasswordBtn: 'Şifreyi Değiştir',
    info: 'Bilgi',
    googleNoPasswordInfo: 'Google ile giriş yaptığınız için şu anda şifreniz yok. Aşağıdan bir şifre belirleyebilirsiniz.',
    setNewPasswordPlaceholder: 'Şifre belirleyin (min 6 karakter)',
    setPasswordBtn: 'Şifre Belirle',
    fillAllFields: 'Lütfen tüm alanları doldurun.',
    passwordsDoNotMatch: 'Yeni şifreler eşleşmiyor.',
    passwordMinLength: 'Şifre en az 6 karakter olmalıdır.',
    passwordChangedSuccess: 'Şifre başarıyla değiştirildi!',
    passwordSetSuccess: 'Şifre başarıyla belirlendi!',
    highest: 'En Yüksek',
    average: 'Ortalama',
    weeklyProjection: 'Haftalık Tahmin',
    monthlyProjection: 'Aylık Tahmin',
    recentLogs: 'Son Hareketler',
    same: 'Aynı',
    noDataFoundLogFirst: 'Veri bulunamadı. Lütfen antrenman logu girin.',
    noExercisesToday: 'Bugün egzersiz yok.',
    noExercisesThisWeek: 'Bu hafta egzersiz yok.',
    noExercisesInCategory: 'Bu kategoride egzersiz yok',
    selectExerciseTitle: 'Egzersiz Seç',
    weeklyGrowth: 'Haftalık Gelişim',
    asYouLogExercises: 'Egzersiz kaydettikçe burada görebilirsin',
    workoutProgramSubtitle: 'Bugünün egzersizlerini takip et ve kaydet',
    postureProgramSubtitle: 'Postürünü düzelt, sağlıklı bir beden için çalış',
    notificationsEnabledSuccess: 'Bildirimler başarıyla aktifleştirildi!',
    notificationPermissionDenied: 'Bildirim izni reddedildi.',
    zw: {
      navLabel: 'Ana menü',
      nav: {
        dashboard: 'Panel', workouts: 'Antrenmanlar', progress: 'İlerleme', diet: 'Beslenme',
        posture: 'Duruş', calculators: 'Hesaplayıcılar', leaderboard: 'Liderlik', notes: 'Notlar'
      },
      title1: 'Antrenman', title2: 'programı',
      subtitle: '5 günlük split · Push / Pull / Legs / Upper / Lower',
      weeklyProgram: 'Haftalık program',
      todayPill: function (day, split) { return 'Bugün: ' + day + ' · ' + split; },
      restDayPill: 'Bugün dinlenme günü',
      restWord: 'Dinlenme',
      priority: 'Öncelik',
      todayFocus: 'Bugünün odağı',
      rirNote: 'Başarısızlığa kalan tekrar sayısı. RIR 2 demek, 2 tekrar daha yapabilecek durumda bırakmak.',
      compoundWord: 'Büyük hareketler',
      compoundNote: 'arasında 2–3 dk dinlen.',
      isoWord: 'İzolasyon hareketleri',
      isoNote: 'arasında 60–90 sn dinlen.',
      freeLog: 'Serbest kayıt',
      freeLogSub: 'Programda olmayan bir egzersiz',
      category: 'Kategori',
      exercise: 'Egzersiz',
      selectExercise: 'Egzersiz seç…',
      weight: 'Ağırlık',
      reps: 'Tekrar',
      sets: 'Set',
      addRecord: 'Kaydı ekle',
      viewStrength: 'Güç ilerlemesini gör',
      todaysRecords: 'Bugünkü kayıtlar',
      records: 'kayıt',
      emptyLog: 'Bugün henüz kayıt yok. Bir hareketin üstüne dokunup ilk setini gir.',
      totalVolume: 'Toplam hacim',
      target: 'Hedef',
      watch: 'İzle',
      set: 'Set',
      repsShort: 'tekrar',
      completeWord: 'tamam',
      completedWord: 'tamamlandı',
      savedWord: 'kaydedildi',
      volumeWord: 'hacim',
      workoutDone: 'Antrenman tamamlandı',
      workoutDoneTail: 'Güzel iş, bugünü bitirdin.',
      exercises: 'hareket',
      setsWord: 'set',
      kgVolume: 'kg hacim',
      close: 'Kapat',
      fillRequired: 'Egzersiz, tekrar ve set sayısını doldur.',
      level: 'Seviye',
      decrease: 'Azalt',
      increase: 'Artır',
      cats: {
        all: 'Tümü', chest: 'Göğüs', back: 'Sırt', shoulders: 'Omuz',
        biceps: 'Biceps / ön kol', triceps: 'Triceps / arka kol', legs: 'Bacak ve kalça', core: 'Karın'
      }
    },
    zp: {
      navLabel: 'Ana menü',
      nav: {
        dashboard: 'Panel', workouts: 'Antrenmanlar', progress: 'İlerleme', diet: 'Beslenme',
        posture: 'Duruş', calculators: 'Hesaplayıcılar', leaderboard: 'Liderlik', notes: 'Notlar'
      },
      title1: 'Postür', title2: 'programı',
      subtitle: 'Günlük hareketlilik · 5–10 dakika',
      weeklyProgram: 'Haftalık program',
      todayPill: function (day, name) { return 'Bugün: ' + day + ' · ' + name; },
      todayFocus: 'Bugünün odağı',
      priority: 'Odak',
      timedWord: 'Süreli hareketler.',
      timedNote: 'Başlat’a bas, süre bitince tur otomatik tamamlanır.',
      repWord: 'Tekrarlı hareketler.',
      repNote: 'Turu bitirince onay butonuna dokun.',
      slowWord: 'Yavaş ve kontrollü',
      slowNote: 'ilerle. Ağrı hissedersen hareketi bırak.',
      timedSmall: 'Süreli',
      repSmall: 'Tekrarlı',
      startWord: 'Başlat',
      stopWord: 'Durdur',
      resumeWord: 'Devam',
      completeRound: 'tamam',
      doneWord: 'tamam, geri al',
      repUnit: 'tekrar',
      roundWord: 'tur',
      roundDoneWord: 'tamamlandı',
      sessionDone: 'Postür seansı tamamlandı',
      sessionDoneTail: 'Güzel iş, bugünkü duruş çalışmanı bitirdin.',
      exercises: 'hareket',
      close: 'Kapat',
      streakWord: 'gün seri',
      xpWord: 'XP',
      level: 'Seviye',
      watch: 'İzle'
    }
  }
};

let currentLang = localStorage.getItem('zyro_lang') || 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.dataset.i18nDefault === undefined) el.dataset.i18nDefault = el.textContent.trim();
    const val = t(key);
    // Never print the raw key; fall back to the label baked into the markup.
    const text = (val && val !== key) ? val : (el.dataset.i18nDefault || '');
    if (!text) return;
    if (key === 'geminiInfo' || key === 'step1' || key === 'step2' || key === 'step3') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    const val = t(key);
    if (val) el.title = val;
  });
  // Placeholders
  const noteInput = document.getElementById('noteInput');
  if (noteInput) noteInput.placeholder = t('notePlaceholder');
  const logEx = document.getElementById('logExercise');
  if (logEx && logEx.options[0]) logEx.options[0].text = t('selectExercise');
  const profileName = document.getElementById('profileDisplayName');
  if (profileName) profileName.placeholder = t('profileNamePlaceholder');
  const widgetInput = document.getElementById('aiWidgetInput');
  if (widgetInput) widgetInput.placeholder = t('aiWidgetPlaceholder');
  const aiPageInput = document.getElementById('aiPageInput');
  if (aiPageInput) aiPageInput.placeholder = t('aiPagePlaceholder');
  const adminUpdateContent = document.getElementById('adminUpdateContent');
  if (adminUpdateContent) adminUpdateContent.placeholder = t('adminUpdatePlaceholder');
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
      if (typeof updateStats === 'function') updateStats();
      if (typeof renderWeeklyReport === 'function') renderWeeklyReport();
      if (currentPage === 'posture') {
        if (window.ZyroPosture) window.ZyroPosture.sync();
        else renderPosture(currentPostureTab);
      }
      if (currentPage === 'workouts') {
        if (window.ZyroWorkouts) window.ZyroWorkouts.sync();
        else renderWorkout(currentWorkoutTab);
      }
      if (currentPage === 'dashboard' && window.ZyroDashboard) window.ZyroDashboard.sync();
      if (currentPage === 'progress') { renderProgressTracker(); }
      if (currentPage === 'profile') {
        renderPasswordSection();
        if (typeof checkPushNotificationStatus === 'function') checkPushNotificationStatus();
        renderProfileAchievementsSelector();
      }
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
  // Chest
  'Barbell Bench Press':               ['chest', 'triceps'],
  'Incline Dumbbell Press':            ['chest', 'triceps'],
  'Low-to-High Cable Crossover':       ['chest'],
  'Dip':                               ['chest', 'triceps'],
  'Dumbbell Bench Press':              ['chest', 'triceps'],
  'Cable Crossover':                   ['chest'],
  'Incline Dumbbell Fly':              ['chest'],
  'Flat Barbell Bench Press':          ['chest', 'triceps'],

  // Back
  'Barbell Row':                       ['back', 'traps'],
  'Lat Pulldown':                      ['back', 'biceps'],
  'Seated Cable Row':                  ['back', 'traps'],
  'Single-Arm Dumbbell Row':           ['back', 'traps'],
  'Pull-Up':                           ['back', 'biceps'],
  'Barbell Shrug':                     ['traps'],
  'Dumbbell Shrug':                    ['traps'],
  'Cable Reverse Fly':                 ['shoulders', 'back'],
  'Close-Grip Lat Pulldown':           ['back', 'biceps'],
  'Chest-Supported Row':               ['back', 'traps'],
  'Medium-Grip Lat Pulldown':          ['back', 'biceps'],

  // Shoulders
  'Seated Dumbbell Shoulder Press':    ['shoulders', 'triceps'],
  'Barbell Overhead Press':            ['shoulders', 'triceps'],
  'Lateral Raise':                     ['shoulders'],
  'Dumbbell Lateral Raise':            ['shoulders'],
  'Face Pull':                         ['shoulders', 'traps'],
  'Neck Flexion/Extension':            ['traps'],
  'Arnold Press':                      ['shoulders', 'triceps'],
  'Cable Rope Face Pull':              ['shoulders', 'traps'],
  'Cable Lateral Raise':               ['shoulders'],

  // Biceps & Forearms
  'Incline Dumbbell Curl':             ['biceps'],
  'Hammer Curl':                       ['biceps', 'forearms'],
  'EZ Bar Curl':                       ['biceps'],
  'Wrist Curl':                        ['forearms'],
  'Reverse Wrist Curl':                ['forearms'],
  'Single-Arm Incline Dumbbell Curl':  ['biceps'],
  'EZ Bar Reverse Curl':               ['biceps', 'forearms'],
  'Seated Incline Dumbbell Curl':      ['biceps'],
  'Cross-Body Hammer Curl':            ['biceps', 'forearms'],

  // Triceps
  'Triceps Pushdown':                  ['triceps'],
  'Skull Crusher':                     ['triceps'],
  'Overhead Triceps Extension':        ['triceps'],

  // Legs (Quads, Hamstrings, Glutes, Calves)
  'Squat':                             ['quads', 'glutes'],
  'Barbell Squat':                     ['quads', 'glutes'],
  'Romanian Deadlift':                 ['hamstrings', 'glutes'],
  'Leg Press':                         ['quads', 'glutes'],
  'Calf Raise on Leg Press':           ['calves'],
  'Lying Leg Curl':                    ['hamstrings'],
  'Bulgarian Split Squat':             ['quads', 'glutes'],
  'Hip Thrust':                        ['glutes', 'hamstrings'],
  'Deadlift':                          ['hamstrings', 'glutes', 'back'],
  'Seated Calf Raise':                 ['calves'],
  'Standing Calf Raise':               ['calves'],
  'Leg Extension':                     ['quads'],
  'Hack Squat':                        ['quads', 'glutes'],
  'Walking Lunge':                     ['quads', 'glutes'],
  'Seated Leg Curl':                   ['hamstrings'],

  // Core
  'Hanging Leg Raise':                 ['core'],
  'Plank':                             ['core'],
  'Cable Woodchop':                    ['core'],
  'Cable Crunch':                      ['core'],
  'Side Bend':                         ['core'],
  'Russian Twist':                     ['core'],
};
const ALL_EXERCISES = Object.keys(EXERCISE_MUSCLES).sort();

// =============================================
// GLOBAL EXERCISE CATEGORIES (7 Sade Kategori)
// =============================================
const EXERCISE_CATEGORIES = {
  'chest':      ['Barbell Bench Press', 'Incline Dumbbell Press', 'Low-to-High Cable Crossover', 'Dip'],
  'back':       ['Barbell Row', 'Lat Pulldown', 'Seated Cable Row', 'Single-Arm Dumbbell Row', 'Pull-Up', 'Barbell Shrug'],
  'shoulders':  ['Seated Dumbbell Shoulder Press', 'Barbell Overhead Press', 'Lateral Raise', 'Face Pull', 'Neck Flexion/Extension'],
  'biceps':     ['Incline Dumbbell Curl', 'Hammer Curl', 'EZ Bar Curl', 'Wrist Curl', 'Reverse Wrist Curl'],
  'triceps':    ['Triceps Pushdown', 'Skull Crusher'],
  'legs':       ['Squat', 'Romanian Deadlift', 'Leg Press', 'Calf Raise on Leg Press', 'Lying Leg Curl', 'Bulgarian Split Squat', 'Hip Thrust', 'Deadlift', 'Seated Calf Raise'],
  'core':       ['Hanging Leg Raise', 'Plank', 'Cable Woodchop', 'Cable Crunch']
};

const RANKS = {
  'kurucu': { label: 'KURUCU', color: '#F87171', bg: 'rgba(248, 113, 113, 0.15)', canAdmin: true },
  'mod': { label: 'MOD', color: '#FFD700', bg: 'rgba(255, 215, 0, 0.15)', canAdmin: true },
  'premium': { label: 'PREMIUM', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)', canAdmin: false },
  'mal': { label: 'MAL', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)', canAdmin: false },
  'default': { label: 'ÜYE', color: '#94A3B8', bg: 'rgba(148, 163, 184, 0.1)', canAdmin: false }
};

const CATEGORY_ICONS = {
  'chest':     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', // Shield (Torso/Pecs)
  'shoulders': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4h3v16h-3zM3 4h3v16H3zM6 12h12M1 8h2v8H1zM21 8h2v8h-2z"/></svg>', // Barbell (Overhead Press)
  'back':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>', // Stacked Layers (Lats)
  'legs':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>', // Squat/Flexed angle chevrons
  'biceps':    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7.5h12M6 16.5h12M12 3v18M3 5v14M21 5v14"/></svg>', // Dumbbell (Curl)
  'triceps':   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>', // Pushdown arrow
  'wrists':    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h6M15 12h6"/></svg>', // Wrist Axis
  'core':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', // Target (Core center)
  'other':     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
};

const DEFAULT_PROGRAMS = {
  day1: [ // SALI - Push
    {name:'Barbell Bench Press',            sets:'3x5-8',   weight:'-'},
    {name:'Incline Dumbbell Press',         sets:'3x8-10',  weight:'-'},
    {name:'Seated Dumbbell Shoulder Press', sets:'2x8-10',  weight:'-'},
    {name:'Low-to-High Cable Crossover',    sets:'2x12-15', weight:'-'},
    {name:'Lateral Raise',                  sets:'2x12-15', weight:'-'},
    {name:'Triceps Pushdown',              sets:'2x10-12', weight:'-'},
    {name:'Face Pull',                     sets:'2x15',    weight:'-'},
  ],
  day2: [ // CARSAMBA - Pull
    {name:'Barbell Row',                   sets:'3x6-8',   weight:'-'},
    {name:'Lat Pulldown',                  sets:'3x8-10',  weight:'-'},
    {name:'Seated Cable Row',              sets:'2x10-12', weight:'-'},
    {name:'Barbell Shrug',                 sets:'3x10-12', weight:'-'},
    {name:'Incline Dumbbell Curl',         sets:'3x8-10',  weight:'-'},
    {name:'Hammer Curl',                   sets:'2x10',    weight:'-'},
    {name:'Wrist Curl',                    sets:'2x15',    weight:'-'},
  ],
  day3: [ // CUMA - Bacak + Core
    {name:'Squat',                         sets:'3x5-8',        weight:'-'},
    {name:'Romanian Deadlift',             sets:'3x8-10',       weight:'-'},
    {name:'Leg Press',                     sets:'2x10-12',      weight:'-'},
    {name:'Calf Raise on Leg Press',       sets:'3x12-15',      weight:'-'},
    {name:'Lying Leg Curl',                sets:'2x10-12',      weight:'-'},
    {name:'Hanging Leg Raise',             sets:'2x10-15',      weight:'-'},
    {name:'Plank',                         sets:'2x Max Süre',  weight:'-'},
  ],
  day4: [ // CUMARTESI - Üst Vücut
    {name:'Barbell Overhead Press',        sets:'3x5-8',        weight:'-'},
    {name:'Pull-Up',                       sets:'3x6-10',       weight:'-'},
    {name:'Dip',                           sets:'2x8-10',       weight:'-'},
    {name:'Single-Arm Dumbbell Row',       sets:'2x10-12 (her kol)', weight:'-'},
    {name:'Lateral Raise',                 sets:'2x15',         weight:'-'},
    {name:'EZ Bar Curl',                   sets:'2x8-10',       weight:'-'},
    {name:'Skull Crusher',                 sets:'2x10',         weight:'-'},
    {name:'Neck Flexion/Extension',        sets:'2x15',         weight:'-'},
    {name:'Reverse Wrist Curl',            sets:'2x15',         weight:'-'},
  ],
  day5: [ // PAZAR - Alt Vücut + Core
    {name:'Deadlift',                      sets:'3x5',          weight:'-'},
    {name:'Bulgarian Split Squat',         sets:'2x8-10 (her bacak)', weight:'-'},
    {name:'Hip Thrust',                    sets:'2x10-12',      weight:'-'},
    {name:'Lying Leg Curl',                sets:'2x12',         weight:'-'},
    {name:'Seated Calf Raise',             sets:'3x15',         weight:'-'},
    {name:'Cable Woodchop',                sets:'2x12',         weight:'-'},
    {name:'Cable Crunch',                  sets:'2x12-15',      weight:'-'},
  ],
};

// =============================================
// POSTURE VIDEO URLS
// =============================================
const POSTURE_VIDEO_URLS = {
  'Doorway Stretch': 'https://www.youtube.com/watch?v=kXgmUP81c6U',
  'Y-T-W Raises': 'https://www.youtube.com/watch?v=0pq5oFywQDc',
  'Wall Angels': 'https://www.youtube.com/watch?v=XdCsMsaY90k',
  'Chin Tuck': 'https://www.youtube.com/watch?v=kaplx1ocaw8',
  'Cat-Cow': 'https://www.youtube.com/watch?v=lgFQUsbpF6I',
  'Kneeling Hip Flexor Stretch': 'https://www.youtube.com/watch?v=8kfH_OhZNAg',
  'Glute Bridge': 'https://www.youtube.com/watch?v=R1OXPHRqehw',
  'Deadbug': 'https://www.youtube.com/watch?v=zd160L4tPPs',
  'Thoracic Extension (Rulo veya sandalye ile)': 'https://www.youtube.com/watch?v=1uFnObPDZz0',
  'Child’s Pose (Çocuk Pozu)': 'https://www.youtube.com/watch?v=2vJK_d3I_oU',
  'Pelvic Floor (Kegel)': 'https://www.instagram.com/reel/DZc6YJpMnBJ/?igsh=NmMzcXl0azg5dmhs'
};

// =============================================
// WORKOUT VIDEO URLS (Search query format)
// =============================================
const WORKOUT_VIDEO_URLS = {
  // Tuesday - Push
  'Barbell Bench Press':            'https://www.youtube.com/results?search_query=Barbell+Bench+Press+proper+form+tutorial',
  'Incline Dumbbell Press':         'https://www.youtube.com/results?search_query=Incline+Dumbbell+Press+proper+form+tutorial',
  'Seated Dumbbell Shoulder Press': 'https://www.youtube.com/results?search_query=Seated+Dumbbell+Shoulder+Press+proper+form+tutorial',
  'Low-to-High Cable Crossover':    'https://www.youtube.com/results?search_query=Low+to+High+Cable+Crossover+proper+form+tutorial',
  'Lateral Raise':                  'https://www.youtube.com/results?search_query=Lateral+Raise+proper+form+tutorial',
  'Triceps Pushdown':               'https://www.youtube.com/results?search_query=Triceps+Pushdown+proper+form+tutorial',
  'Face Pull':                      'https://www.youtube.com/results?search_query=Face+Pull+proper+form+tutorial',

  // Wednesday - Pull
  'Barbell Row':                    'https://www.youtube.com/results?search_query=Barbell+Row+proper+form+tutorial',
  'Lat Pulldown':                   'https://www.youtube.com/results?search_query=Lat+Pulldown+proper+form+tutorial',
  'Seated Cable Row':               'https://www.youtube.com/results?search_query=Seated+Cable+Row+proper+form+tutorial',
  'Barbell Shrug':                  'https://www.youtube.com/results?search_query=Barbell+Shrug+proper+form+tutorial',
  'Incline Dumbbell Curl':          'https://www.youtube.com/results?search_query=Incline+Dumbbell+Curl+proper+form+tutorial',
  'Hammer Curl':                    'https://www.youtube.com/results?search_query=Hammer+Curl+proper+form+tutorial',
  'Wrist Curl':                     'https://www.youtube.com/results?search_query=Wrist+Curl+proper+form+tutorial',

  // Friday - Legs + Core
  'Squat':                          'https://www.youtube.com/results?search_query=Squat+proper+form+tutorial',
  'Romanian Deadlift':              'https://www.youtube.com/results?search_query=Romanian+Deadlift+proper+form+tutorial',
  'Leg Press':                      'https://www.youtube.com/results?search_query=Leg+Press+proper+form+tutorial',
  'Calf Raise on Leg Press':        'https://www.youtube.com/results?search_query=Calf+Raise+on+Leg+Press+proper+form+tutorial',
  'Lying Leg Curl':                 'https://www.youtube.com/results?search_query=Lying+Leg+Curl+proper+form+tutorial',
  'Hanging Leg Raise':              'https://www.youtube.com/results?search_query=Hanging+Leg+Raise+proper+form+tutorial',
  'Plank':                          'https://www.youtube.com/results?search_query=Plank+proper+form+tutorial',

  // Saturday - Upper Body
  'Barbell Overhead Press':         'https://www.youtube.com/results?search_query=Barbell+Overhead+Press+proper+form+tutorial',
  'Pull-Up':                        'https://www.youtube.com/results?search_query=Pull-Up+proper+form+tutorial',
  'Dip':                            'https://www.youtube.com/results?search_query=Chest+Dip+proper+form+tutorial',
  'Single-Arm Dumbbell Row':        'https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Row+proper+form+tutorial',
  'EZ Bar Curl':                    'https://www.youtube.com/results?search_query=EZ+Bar+Curl+proper+form+tutorial',
  'Skull Crusher':                  'https://www.youtube.com/results?search_query=Skull+Crusher+proper+form+tutorial',
  'Neck Flexion/Extension':         'https://www.youtube.com/results?search_query=Neck+Flexion+and+Extension+proper+form+tutorial',
  'Reverse Wrist Curl':             'https://www.youtube.com/results?search_query=Reverse+Wrist+Curl+proper+form+tutorial',

  // Sunday - Lower Body + Core
  'Deadlift':                       'https://www.youtube.com/results?search_query=Deadlift+proper+form+tutorial',
  'Bulgarian Split Squat':          'https://www.youtube.com/results?search_query=Bulgarian+Split+Squat+proper+form+tutorial',
  'Hip Thrust':                     'https://www.youtube.com/results?search_query=Hip+Thrust+proper+form+tutorial',
  'Seated Calf Raise':              'https://www.youtube.com/results?search_query=Seated+Calf+Raise+proper+form+tutorial',
  'Cable Woodchop':                 'https://www.youtube.com/results?search_query=Cable+Woodchop+proper+form+tutorial',
  'Cable Crunch':                   'https://www.youtube.com/results?search_query=Cable+Crunch+proper+form+tutorial',
};
const DEFAULT_POSTURE_PROGRAMS = {
  mon: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  tue: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  wed: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  thu: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  fri: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  sat: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ],
  sun: [
    {name:'Thoracic Extension (Rulo veya sandalye ile)',sets:'2 set x 30 saniye',done:false},
    {name:'Child’s Pose (Çocuk Pozu)',sets:'1 dakika (Pozisyonda kal ve derin nefes al)',done:false},
    {name:'Doorway Stretch',sets:'1 set x 30 saniye',done:false},
    {name:'Pelvic Floor (Kegel)',sets:'3 set x 10 tekrar (10 sn kasılı tut)',done:false},
  ]
};

// =============================================
// STATE
// =============================================
let currentUser = null;
let currentPage = 'dashboard';
function getDefaultWorkoutTab() {
  const day = new Date().getDay(); // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  if (day === 2) return 'day1'; // Salı (Push)
  if (day === 3) return 'day2'; // Çarşamba (Pull)
  if (day === 4) return 'day3'; // Perşembe (dinlenme) -> Sıradaki Cuma (day3)
  if (day === 5) return 'day3'; // Cuma (Bacak + Core)
  if (day === 6) return 'day4'; // Cumartesi (Üst Vücut)
  if (day === 0) return 'day5'; // Pazar (Alt Vücut + Core)
  if (day === 1) return 'day1'; // Pazartesi (dinlenme) -> Sıradaki Salı (day1)
  return 'day1';
}
let currentWorkoutTab = getDefaultWorkoutTab();
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
  firestoreAdmin: false,
  dietTargets: { kcal: 2000, protein: 150, carbs: 200, fat: 70 },
  dietLogs: {}
};

/** Unsubscribe previous Firestore listener before attaching a new one (nav repeats). */
let commentsListenerUnsub = null;
let cachedComments = null;
let userProfileListenerUnsub = null;

function commentAuthorRankKey() {
  if (!currentUser) return 'default';
  if (currentUser.email === 'wupard@gmail.com') return 'kurucu';
  if (appData.firestoreAdmin) return 'mod';
  if (appData.userRank === 'admin') return 'mod';
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
function getMonday(d) {
  const date = new Date(d);
  const day = date.getDay() || 7; // Sunday=7, Monday=1
  date.setDate(date.getDate() - (day - 1));
  date.setHours(0,0,0,0);
  return date;
}
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
    },{merge:true}).catch(e=>{
      console.error('Save:',e);
      if (typeof showToast === 'function') {
        showToast(currentLang === 'tr' ? 'Veri buluta kaydedilemedi: ' + e.message : 'Cloud sync failed: ' + e.message, 'error');
      }
    });
    
    // Feature 10 & 12: Public Stats Sync for Leaderboard
    syncPublicStats();
  }
  localStorage.setItem('zyro_data',JSON.stringify(appData));
}

function syncPublicStats() {
  if (!isFirebaseConfigured || !currentUser || !db) return;
  try {
    const p = appData.profile || {};
    const dName = p.displayName || currentUser.displayName || currentUser.email.split('@')[0];
    const photo = p.photoURL || currentUser.photoURL || '';
    
    let xp = 0;
    if (typeof calculateXP === 'function') xp = calculateXP();
    let level = 1;
    if (typeof calculateLevel === 'function') level = calculateLevel(xp);
    
    let allTimePRMax = 0;
    let allTimePRExercise = '';
    let allTimePRSets = 0;
    let allTimePRReps = 0;
    Object.values(appData.workoutLogs || {}).forEach(logs => {
      logs.forEach(l => {
        if ((l.weight || 0) > allTimePRMax) {
          allTimePRMax = l.weight;
          allTimePRExercise = l.exercise || '';
          allTimePRSets = l.sets || 1;
          allTimePRReps = l.reps || 0;
        }
      });
    });

    db.collection('public_stats').doc(currentUser.uid).set({
      uid: currentUser.uid,
      displayName: dName,
      photoURL: photo,
      xp: xp,
      level: level,
      bestPR: allTimePRMax,
      bestPRExercise: allTimePRExercise,
      bestPRSets: allTimePRSets,
      bestPRReps: allTimePRReps,
      selectedAchievements: p.selectedAchievements || [],
      lastActive: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch(e => console.error('Public stats sync failed:', e));
  } catch(e) {
    console.error('syncPublicStats error:', e);
  }
}

const CURRENT_PROGRAM_VERSION = 16; // 5-Day Split: Salı, Çarşamba, Cuma, Cumartesi, Pazar

function enforceVersion() {
  if(appData.programVersion !== CURRENT_PROGRAM_VERSION) {
    // 1. Güvenlik Yedeği (Kayıtların korunması)
    try {
      const rawLocal = localStorage.getItem('zyro_data');
      if (rawLocal) {
        localStorage.setItem('zyro_data_backup_before_v16', rawLocal);
      }
    } catch(e) {
      console.warn('Backup creation error:', e);
    }

    // 2. Akıllı program migrasyonu:
    // - workoutLogs (tüm kayıtlı ağırlıklar) KESİNLİKLE DOKUNULMAZ
    // - notes (notlar) DOKUNULMAZ
    // - attendance, achievements, weightLog vs. DOKUNULMAZ
    const smartMergePrograms = (existing, defaults) => {
      if (!existing) return JSON.parse(JSON.stringify(defaults));
      const merged = {};
      Object.keys(defaults).forEach(tab => {
        const existingTab = existing[tab] || [];
        merged[tab] = defaults[tab].map(defaultEx => {
          const found = existingTab.find(e => e.name === defaultEx.name);
          return { ...defaultEx, done: found ? (found.done || false) : false };
        });
      });
      return merged;
    };

    appData.programs = smartMergePrograms(appData.programs, DEFAULT_PROGRAMS);

    if (!appData.posturePrograms) {
      appData.posturePrograms = JSON.parse(JSON.stringify(DEFAULT_POSTURE_PROGRAMS));
    }

    // NOT: appData.notes ve appData.workoutLogs KESİNLİKLE SİLİNMEZ
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
         
         // CRITICAL FIX: hasPendingWrites true ise bu snapshot bizim yerel
         // yazmanın yansımasıdır — sunucunun onayını beklemeden appData'yı
         // ezmemeye devam ediyoruz. Bu race condition'ı önler.
         if (snap.metadata && snap.metadata.hasPendingWrites) {
           // Yerel write'ın echo'su, sunucu henüz onaylamadı — atla
           if(cb) { cb(); cb = null; }
           return;
         }
         
         const serverData = snap.data().data;
         // DIET PROTECTION: Diyet verilerini korumak için yerel kopyaları sakla
         const localDietTargets = appData.dietTargets || { kcal: 2000, protein: 150, carbs: 200, fat: 70 };
         const localDietLogs = JSON.parse(JSON.stringify(appData.dietLogs || {}));
         
         appData = serverData;
          let needSave = false;
          if (!appData.dietTargets) {
            appData.dietTargets = localDietTargets;
            needSave = true;
          }
          if (!appData.dietLogs) {
            appData.dietLogs = localDietLogs;
            needSave = true;
          } else {
            // MERGE: Sunucuda olmayan ama yerel olan bugünün öğünlerini koru
            const td = todayStr();
            if (localDietLogs[td] && localDietLogs[td].length > 0) {
              const serverTodayIds = new Set((appData.dietLogs[td] || []).map(m => m.id));
              const missingMeals = localDietLogs[td].filter(m => !serverTodayIds.has(m.id));
              if (missingMeals.length > 0) {
                if (!appData.dietLogs[td]) appData.dietLogs[td] = [];
                appData.dietLogs[td] = appData.dietLogs[td].concat(missingMeals);
                needSave = true;
              }
            }
          }
          
          if (typeof window.syncPastAchievements === 'function') {
            if (window.syncPastAchievements()) {
              needSave = true;
            }
          }
          
          enforceVersion();
         localStorage.setItem('zyro_data', JSON.stringify(appData));
         if (needSave) {
           saveData();
         }
         if(cb) cb();
         refreshAllViews();
         if (typeof syncPublicStats === 'function') syncPublicStats();
         
         // Trigger level up toasts initialization now that server sync is complete
         if (typeof window.enableLevelUpToasts === 'function') {
           window.enableLevelUpToasts();
         }
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
         if (typeof syncPublicStats === 'function') syncPublicStats();
         
         // Trigger level up toasts initialization now that server sync is complete
         if (typeof window.enableLevelUpToasts === 'function') {
           window.enableLevelUpToasts();
         }
      }
    }, err => {
      console.error("Firebase Sync Error:", err);
      if(cb) cb();
      
      // Fallback: enable toasts if sync fails
      if (typeof window.enableLevelUpToasts === 'function') {
        window.enableLevelUpToasts();
      }
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
      const aiBtn = document.getElementById('aiFloatBtn');
      if(user){
        console.log('User signed in:', user.email);
        currentUser=user;
        overlay.classList.add('hidden');
        if (aiBtn) aiBtn.style.display = 'flex';
        updateUserUI(user);
        
        // Reset app readiness to prevent guest-to-user level comparison
        window.zyroAppReady = false;
        
        loadData(()=>{
          refreshAllViews();
          initNotifications(); // 2.5: Initialize notifications system
          setTimeout(() => {
            if (typeof window.checkAndPromptPushNotifications === 'function') {
              window.checkAndPromptPushNotifications();
            }
          }, 2500);
        });
      } else {
        console.log('No user signed in');
        overlay.classList.remove('hidden');
        if (aiBtn) aiBtn.style.display = 'none';
        
        // No user is signed in: we are in guest/local mode
        if (typeof window.enableLevelUpToasts === 'function') {
          window.enableLevelUpToasts();
        }
      }
      if (typeof window.applyMaintenanceState === 'function') {
        window.applyMaintenanceState();
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
      
      if (typeof firebase === 'undefined' || !firebase.auth) {
        alert('Firebase bağlantısı kurulamadı. Lütfen internetinizi kontrol edin.');
        return;
      }

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      
      // Try Popup first
      window.auth.signInWithPopup(provider).catch(e=>{
        console.warn('Popup blocked or failed, trying redirect...', e);
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/cancelled-popup-request') {
          window.auth.signInWithRedirect(provider).catch(err => {
            alert('Yönlendirme ile giriş yapılamadı: ' + err.message);
          });
        } else {
          console.error('Auth Error:', e);
          let msg = e.message;
          if (window.location.protocol === 'file:') {
            msg = 'Google ile giriş yapmak için dosyayı doğrudan açmak (file://) yerine yerel bir sunucu (Live Server) kullanmalısınız.\n\nDetay: ' + e.message;
          }
          alert('Giriş başarısız: ' + msg);
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
    const aiBtn = document.getElementById('aiFloatBtn');
    if (aiBtn) aiBtn.style.display = 'flex';
    if (typeof window.applyMaintenanceState === 'function') {
      window.applyMaintenanceState();
    }
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
  if(status) {
    if (user) {
      status.style.display = 'none';
    } else {
      status.textContent = t('localMode');
      status.style.color = 'var(--text-tertiary)';
      status.style.display = 'inline-block';
    }
  }
  signOutBtn.style.display=user?'flex':'none';

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
    // Get rank from data
    let userRank = appData.userRank || (isAdmin ? 'mod' : 'default');
    if (userRank === 'admin') userRank = 'mod';
    // kurucu kontrolü — e-posta öncelikli
    if (user && user.email === 'wupard@gmail.com') userRank = 'kurucu';
    const rank = RANKS[userRank] || RANKS.default;

    // Update existing #userRank element in sidebar footer
    const rankEl = document.getElementById('userRank');
    if (rankEl) {
      rankEl.textContent = rank.label;
      rankEl.style.color = rank.color;
      rankEl.style.background = rank.bg;
      rankEl.style.border = `1px solid ${rank.color}40`;
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
            let rk = userData.userRank;
            if (rk === 'admin') rk = 'mod';
            const updatedRank = RANKS[rk] || RANKS.default;
            const el = document.getElementById('userRank');
            if (el) {
              el.textContent = updatedRank.label;
              el.style.color = updatedRank.color;
              el.style.background = updatedRank.bg;
              el.style.border = `1px solid ${updatedRank.color}40`;
            }
          }
          // Sync admin-forced level/XP override
          if (typeof userData.forcedXP === 'number') {
            appData.forcedXP = userData.forcedXP;
            appData.forcedLevel = userData.forcedLevel;
            if (typeof updateLevelUI === 'function') updateLevelUI();
          } else if (appData.forcedXP !== undefined) {
            delete appData.forcedXP;
            delete appData.forcedLevel;
            if (typeof updateLevelUI === 'function') updateLevelUI();
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
  backdrop.classList.toggle('visible', isOpen);
  
  // Bildirim izni: drawer açılınca ve izin henüz verilmemişse sor
  if (isOpen && 'Notification' in window && Notification.permission === 'default') {
    _showNotifPermissionCard();
  } else if (isOpen && Notification.permission === 'granted') {
    _removeNotifPermissionCard();
  }
};

function _showNotifPermissionCard() {
  if (document.getElementById('notifPermCard')) return;
  const list = document.getElementById('notifList');
  if (!list) return;
  
  const title = currentLang === 'tr' ? 'Bildirimleri Aç' : 'Enable Notifications';
  const desc = currentLang === 'tr' 
    ? 'Yeni özellikler, hatırlatıcılar ve güncellemelerden anında haberdar olmak için bildirimleri açın.' 
    : 'Turn on notifications to get instant updates on new features, reminders, and updates.';
  const allowBtnText = currentLang === 'tr' ? 'İzin Ver' : 'Allow';
  const laterBtnText = currentLang === 'tr' ? 'Daha Sonra' : 'Later';

  const card = document.createElement('div');
  card.id = 'notifPermCard';
  card.style.cssText = `
    position: relative;
    background: linear-gradient(135deg, rgba(139, 124, 247, 0.16) 0%, rgba(20, 18, 38, 0.5) 100%);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(139, 124, 247, 0.25);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    animation: slideDownFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
  `;
  
  card.innerHTML = `
    <style>
      @keyframes slideDownFadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes bell-swing {
        0%, 100% { transform: rotate(0); }
        10% { transform: rotate(-12deg); }
        20% { transform: rotate(10deg); }
        30% { transform: rotate(-8deg); }
        40% { transform: rotate(6deg); }
        50% { transform: rotate(-4deg); }
        60% { transform: rotate(2deg); }
        70% { transform: rotate(0); }
      }
      .bell-glow-container {
        position: relative;
        flex-shrink: 0;
        width: 38px;
        height: 38px;
        background: rgba(139, 124, 247, 0.15);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(139, 124, 247, 0.25);
      }
      .swing-animation {
        animation: bell-swing 3s ease infinite;
        transform-origin: top center;
      }
      .btn-notif-allow {
        background: linear-gradient(135deg, #8b7cf7 0%, #6d5df2 100%);
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 7px 16px;
        font-size: 0.78rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(139, 124, 247, 0.3);
      }
      .btn-notif-allow:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(139, 124, 247, 0.45);
        filter: brightness(1.08);
      }
      .btn-notif-allow:active {
        transform: translateY(1px);
      }
      .btn-notif-later {
        background: rgba(255, 255, 255, 0.04);
        color: var(--text-secondary);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 7px 12px;
        font-size: 0.78rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .btn-notif-later:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--text-primary);
        border-color: rgba(255, 255, 255, 0.15);
      }
    </style>
    <div class="bell-glow-container">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b7cf7" stroke-width="2.5" class="swing-animation">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </div>
    <div style="flex:1;">
      <div style="font-weight:700;font-size:0.9rem;color:var(--text-primary);margin-bottom:4px;letter-spacing:-0.01em;">${title}</div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:12px;line-height:1.45;">${desc}</div>
      <div style="display:flex;gap:8px;">
        <button onclick="_grantNotifPermission()" class="btn-notif-allow">${allowBtnText}</button>
        <button onclick="_removeNotifPermissionCard()" class="btn-notif-later">${laterBtnText}</button>
      </div>
    </div>
  `;
  list.insertAdjacentElement('beforebegin', card);
}

window._grantNotifPermission = async function() {
  _removeNotifPermissionCard();
  await requestNotificationPermission(false);
  if (Notification.permission === 'granted') {
    try {
      new Notification('Zyro 🎉', { body: 'Bildirimler başarıyla aktifleştirildi!', icon: '/favicon.svg' });
    } catch(e) {}
  }
};

window._removeNotifPermissionCard = function() {
  const card = document.getElementById('notifPermCard');
  if (card) card.remove();
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
        const bd = banDoc.data();
        if (bd.expiry && Date.now() > bd.expiry) {
          await db.collection('bans').doc(user.uid).delete();
        } else {
          isBanned = true;
          banData = bd;
        }
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
          const doc = ipBanDoc.docs[0];
          const bd = doc.data();
          if (bd.expiry && Date.now() > bd.expiry) {
            await doc.ref.delete();
          } else {
            isBanned = true;
            banData = bd;
          }
        }
      } catch (ipErr) {
        console.warn('IP Ban check failed or restricted');
      }
    }

    if (isBanned) {
      document.body.innerHTML = `
        <div style="height: 100vh; background: #0d0d12; color: white; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; padding: 20px;">
          <div style="max-width: 500px; padding: 40px; background: #181822; border-radius: 24px; border: 1px solid #ef4444; box-shadow: 0 0 40px rgba(239, 68, 68, 0.2);">
            <div style="font-size: 4rem; margin-bottom: 20px;">g���</div>
            <h1 style="color: #ef4444; margin-bottom: 16px;">BANLANDINIZ</h1>
            <p style="color: #94a3b8; margin-bottom: 24px;">Sistem kurallarını ihlal ettiğiniz için erişiminiz engellendi.</p>
            <div style="text-align: left; background: rgba(0,0,0,0.2); padding: 20px; border-radius: 12px; font-size: 0.9rem;">
              <div style="margin-bottom: 8px;"><span style="color: #625f7a;">Yetkili:</span> <span style="color: #FFD700; font-weight: bold;">Wupard</span></div>
              <div style="margin-bottom: 8px;"><span style="color: #625f7a;">Sebep:</span> ${banData.reason || 'Kural ihlali'}</div>
              <div><span style="color: #625f7a;">Süre:</span> ${banData.expiry ? new Date(banData.expiry).toLocaleString('tr-TR') + ' tarihine kadar' : (banData.duration || 'Süresiz')}</div>
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
function __routerBasePath() {
  const p = window.location.pathname || '/';
  if (p === '/zyro' || p.startsWith('/zyro/')) return '/zyro';
  return '';
}

const __ROUTER_BASE = __routerBasePath();
const __ROUTER_PAGES = new Set(['dashboard','workouts','posture','progress','updates','notes','comments','calculators','beforeafter','achievements','profile','admin','diet']);

function __pageToPath(page) {
  const p = page || 'dashboard';
  const base = __ROUTER_BASE;
  if (p === 'dashboard') return base ? `${base}/` : '/';
  return base ? `${base}/${p}` : `/${p}`;
}

function __pathToPage(pathname) {
  let p = pathname || '/';
  if (__ROUTER_BASE && p.startsWith(__ROUTER_BASE)) p = p.slice(__ROUTER_BASE.length) || '/';
  p = p.split('?')[0].split('#')[0];
  p = p.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!p || p === 'index.html') return 'dashboard';
  const first = p.split('/')[0];
  return __ROUTER_PAGES.has(first) ? first : 'dashboard';
}

function initRouter() {
  try {
    const url = new URL(window.location.href);
    const p = url.searchParams.get('p');
    if (p !== null) {
      const clean = String(p || '').replace(/^\/+/, '').replace(/\/+$/, '');
      const targetPath = clean ? (__ROUTER_BASE ? `${__ROUTER_BASE}/${clean}` : `/${clean}`) : (__ROUTER_BASE ? `${__ROUTER_BASE}/` : '/');
      url.searchParams.delete('p');
      const rest = url.searchParams.toString();
      const finalUrl = targetPath + (rest ? `?${rest}` : '') + (url.hash || '');
      window.history.replaceState({ page: __pathToPage(targetPath) }, '', finalUrl);
    }
  } catch (e) {}
  const page = __pathToPage(window.location.pathname);
  navigateTo(page, { updateUrl: false });
  window.addEventListener('popstate', (e) => {
    const statePage = e && e.state && e.state.page;
    navigateTo(statePage || __pathToPage(window.location.pathname), { updateUrl: false });
  });
}

// =============================================
// LAZY PAGE MODULES (code splitting without a bundler)
// =============================================
const ZYRO_PAGE_SCRIPTS = {
  workouts: ['workouts/workouts.js?v=2'],
  posture: ['posture/posture.js?v=1']
};
const zyroPageState = {};

function zyroLoadPage(page, done) {
  const list = ZYRO_PAGE_SCRIPTS[page];
  if (!list || !list.length) { if (done) done(); return; }
  if (zyroPageState[page] === 'ready') { if (done) done(); return; }
  if (zyroPageState[page] === 'loading') return;
  zyroPageState[page] = 'loading';

  const loadNext = (index) => {
    if (index >= list.length) {
      zyroPageState[page] = 'ready';
      if (done) done();
      return;
    }
    const el = document.createElement('script');
    el.src = list[index];
    el.async = false;
    el.onload = () => loadNext(index + 1);
    el.onerror = () => { zyroPageState[page] = 'error'; };
    document.body.appendChild(el);
  };
  loadNext(0);
}

// Pause animations/counters while the tab is in the background.
document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('zyro-hidden', document.hidden);
});

function navigateTo(page, opts){
  opts = opts || {};
  const updateUrl = opts.updateUrl !== false;
  const replace = opts.replace === true;
  if (updateUrl && window.history && window.history.pushState) {
    const target = __pageToPath(page);
    const current = window.location.pathname;
    if (target !== current) {
      const st = { page };
      if (replace) window.history.replaceState(st, '', target);
      else window.history.pushState(st, '', target);
    }
  }
  const isSamePage = (currentPage === page);
  currentPage=page;
  document.body.classList.toggle('zyro-dash-active', page === 'dashboard');
  document.body.classList.toggle('zyro-workouts-active', page === 'workouts');
  document.body.classList.toggle('zyro-posture-active', page === 'posture');
  
  if (!isSamePage || opts.force) {
    document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
    const nav=document.querySelector(`.nav-item[data-page="${page}"]`);
    if(nav)nav.classList.add('active');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const pg=document.querySelector(`.page[data-page="${page}"]`);
    if(pg) {
      pg.classList.add('active');
      if (opts.swipeDir) {
        pg.classList.add(opts.swipeDir === 'left' ? 'page-swipe-in-left' : 'page-swipe-in-right');
        setTimeout(() => pg.classList.remove('page-swipe-in-left', 'page-swipe-in-right'), 350);
      }
    }
  }

  if(page==='dashboard')refreshDashboard();
  else if(page==='workouts'){
    if (window.ZyroWorkouts) window.ZyroWorkouts.sync();
    else { zyroLoadPage('workouts'); renderWorkout(currentWorkoutTab); renderLoggedExercises(); }
  }
  else if(page==='posture'){
    if (window.ZyroPosture) window.ZyroPosture.sync();
    else { zyroLoadPage('posture'); renderPosture(currentPostureTab); }
  }
  else if(page==='progress')setTimeout(()=>{drawWeightChart();renderProgressTracker();renderPRTable();renderMonthlyTracker();if(typeof renderWeightLogList==='function')renderWeightLogList();},50);
  else if(page==='updates')renderUpdatesPage();
  else if(page==='notes')renderNotes();
  else if(page==='comments')renderComments();
  else if(page==='calculators'){setTimeout(initCalculators,50);}
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
  else if(page==='leaderboard') { if (typeof renderLeaderboard === 'function') renderLeaderboard(true); }
  else if(page==='diet')renderDiet();

  if (window.innerWidth <= 1000 || (document.getElementById('sidebar') && document.getElementById('sidebar').classList.contains('open'))) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
    const bd = document.getElementById('sidebarBackdrop');
    if (bd) { bd.classList.remove('show'); bd.setAttribute('aria-hidden', 'true'); }
    const tg = document.getElementById('menuToggle');
    if (tg) tg.setAttribute('aria-expanded', 'false');
    const wpO = document.getElementById('wpOverlay');
    if (wpO) wpO.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Scroll to top on page change (important for mobile)
  if (!isSamePage || opts.force) {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
window.navigateTo = navigateTo;

function renderUpdatesPage(){
  const container = document.getElementById('updatesContainer');
  if (!container) return;

  // If Firebase is not available, show fallback
  if (!isFirebaseConfigured || !db) {
    container.innerHTML = '<div class="updates-loading" style="text-align:center; padding:40px; color:var(--text-tertiary);">Güncellemeler yüklenemedi (Firebase bağlantısı yok).</div>';
    return;
  }

  // Unsubscribe any existing listener to prevent duplicate listeners (mobile flicker fix)
  if (window._updatesUnsubscribe) {
    // Already listening. The snapshot callback will keep the container updated automatically.
    return;
  }

  // Only show loader if we don't have a listener yet
  container.innerHTML = '<div class="updates-loading" style="text-align:center; padding:40px; color:var(--text-tertiary);"><div class="loader-mini" style="margin:0 auto 12px;"></div>Güncellemeler yükleniyor...</div>';

  // Listen for updates from Firestore — use orderBy only (no compound index needed)
  // Filter type === 'update' on the client side to avoid requiring a composite index
  window._updatesUnsubscribe = db.collection('systemAnnouncements')
    .orderBy('createdAt', 'desc')
    .limit(40)
    .onSnapshot(snap => {
      // Filter to only update-type docs client-side
      const docs = [];
      snap.forEach(doc => {
        const d = doc.data();
        if (d.type === 'update') docs.push({ id: doc.id, data: d });
      });

      if (docs.length === 0) {
        container.innerHTML = '<div class="updates-loading" style="text-align:center; padding:40px; color:var(--text-tertiary);">Henüz güncelleme paylaşılmadı.</div>';
        return;
      }

      window.currentUpdatesData = window.currentUpdatesData || {};
      const isAdmin = currentUser && (currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true || appData.userRank === 'admin' || appData.userRank === 'mod');

      let html = '';


      docs.forEach(({ id, data }) => {
        window.currentUpdatesData[id] = data.items || [];
        const items = data.items || [];
        const createdAt = data.createdAt ? data.createdAt.toDate() : new Date();
        const dateStr = createdAt.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const timeStr = createdAt.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

        const deleteBtn = isAdmin ? `<button class="updates-delete-btn" onclick="adminDeleteUpdate('${id}')" title="Sil">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>` : '';

        const editBtn = isAdmin ? `<button class="updates-edit-btn" onclick="adminEditUpdate('${id}')" title="Düzenle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>` : '';

        html += `
        <section class="card updates-card" style="margin-bottom:16px;">
          <div class="updates-head">
            <div class="updates-head-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4"/><path d="M12 18v4"/>
                <path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/>
                <path d="M2 12h4"/><path d="M18 12h4"/>
                <path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;min-width:0;flex:1;">
              <div class="updates-title">Geliştirme Özeti</div>
              <div class="updates-subtitle">Yapımcı: Wupard</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              ${editBtn}
              ${deleteBtn}
            </div>
          </div>
          <div class="updates-timeline">
            <div class="updates-entry">
              <div class="updates-entry-marker">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                  stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div class="updates-entry-body">
                <div class="updates-entry-date">${dateStr.toUpperCase()} — ${timeStr}</div>
                <div id="update-content-${id}">
                  <div class="updates-content-parsed">
                    ${parseUpdateContent(items)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
      });

      container.innerHTML = html;
    }, err => {
      console.error('Updates load error code:', err.code, err.message);
      // Fallback: try without orderBy if index error
      if (err.code === 'failed-precondition') {
        db.collection('systemAnnouncements').get().then(snap => {
          const docs = [];
          snap.forEach(doc => { const d = doc.data(); if (d.type === 'update') docs.push({ id: doc.id, data: d }); });
          docs.sort((a, b) => { const ta = a.data.createdAt ? a.data.createdAt.seconds : 0; const tb = b.data.createdAt ? b.data.createdAt.seconds : 0; return tb - ta; });
          if (docs.length === 0) { container.innerHTML = '<div class="updates-loading" style="text-align:center;padding:40px;color:var(--text-tertiary);">Henüz güncelleme paylaşılmadı.</div>'; return; }
          const isAdmin = currentUser && (currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true);
          window.currentUpdatesData = window.currentUpdatesData || {};
          let html = '';
          docs.forEach(({ id, data }) => {
            window.currentUpdatesData[id] = data.items || [];
            const items = data.items || [];
            const createdAt = data.createdAt ? data.createdAt.toDate() : new Date();
            const dateStr = createdAt.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const timeStr = createdAt.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
            const deleteBtn = isAdmin ? `<button class="updates-delete-btn" onclick="adminDeleteUpdate('${id}')" title="Sil"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>` : '';
            const editBtn = isAdmin ? `<button class="updates-edit-btn" onclick="adminEditUpdate('${id}')" title="Düzenle"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>` : '';
            html += `<section class="card updates-card" style="margin-bottom:16px;"><div class="updates-head"><div class="updates-head-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg></div><div style="display:flex;flex-direction:column;gap:4px;min-width:0;flex:1;"><div class="updates-title">Geliştirme Özeti</div><div class="updates-subtitle">Yapımcı: Wupard</div></div><div style="display:flex;align-items:center;gap:8px;">${editBtn}${deleteBtn}</div></div><div class="updates-timeline"><div class="updates-entry"><div class="updates-entry-marker"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div><div class="updates-entry-body"><div class="updates-entry-date">${dateStr.toUpperCase()} — ${timeStr}</div><div id="update-content-${id}"><div class="updates-content-parsed">${parseUpdateContent(items)}</div></div></div></div></div></section>`;
          });
          container.innerHTML = html;
        }).catch(() => { container.innerHTML = '<div class="updates-loading" style="text-align:center;padding:40px;color:var(--text-tertiary);">Güncellemeler yüklenemedi.</div>'; });
      } else {
        container.innerHTML = '<div class="updates-loading" style="text-align:center; padding:40px; color:var(--text-tertiary);">Güncellemeler yüklenirken hata oluştu: ' + (err.code || '') + '</div>';
      }
    });
}

// Admin: Toggle the collapsible update form
window.toggleAdminUpdateForm = function() {
  const wrap = document.getElementById('adminUpdateFormWrap');
  const btn = document.getElementById('adminUpdateToggleBtn');
  if (!wrap) return;
  const isOpen = wrap.style.maxHeight && wrap.style.maxHeight !== '0px';
  if (isOpen) {
    wrap.style.maxHeight = '0px';
    wrap.style.opacity = '0';
    wrap.style.marginBottom = '0';
    if (btn) btn.style.opacity = '1';
  } else {
    wrap.style.maxHeight = '700px';
    wrap.style.opacity = '1';
    wrap.style.marginBottom = '20px';
    if (btn) btn.style.opacity = '0.7';
    setTimeout(() => { const ta = document.getElementById('adminUpdateContent'); if (ta) ta.focus(); }, 350);
  }
};

// =============================================
// UPDATE CONTENT PARSER — new syntax:
//   *Title  → heading
//   -item   → bullet item
//   **bold** → bold inline
//   empty lines → ignored
// =============================================
function parseUpdateContent(items) {
  // Apply **bold** inline formatting
  function applyBold(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  let html = '';
  items.forEach(line => {
    const raw = line.trim();
    if (!raw) return; // skip empty lines

    // Heading: starts with * or • (mobile bullet) — optionally followed by space, but not **
    if (/^([*\u2022])(?!\*)\s*/.test(raw)) {
      const title = raw.replace(/^([*\u2022])(?!\*)\s*/, '').trim();
      html += `<div class="update-section-heading">${applyBold(title)}</div>`;
    // Bullet: starts with - or – or — (mobile dash variants) — optionally followed by space
    } else if (/^([-\u2013\u2014])\s*/.test(raw)) {
      const text = raw.replace(/^([-\u2013\u2014])\s*/, '').trim();
      html += `<div class="update-bullet-item"><span class="update-bullet-dot">›</span><span>${applyBold(text)}</span></div>`;
    } else {
      // Plain line — show as paragraph
      html += `<div class="update-plain-line">${applyBold(raw)}</div>`;
    }
  });
  return html || '<em style="color:var(--text-tertiary)">İçerik yok</em>';
}

// Admin: Post a new update to Firestore
window.adminPostUpdate = async function() {
  if (!currentUser || !isFirebaseConfigured || !db) {
    showToast('Firebase bağlantısı gerekli.', 'error');
    return;
  }

  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true || appData.userRank === 'admin' || appData.userRank === 'mod';
  if (!isAdmin) {
    showToast('Bu işlem için yetkiniz yok.', 'error');
    return;
  }

  const contentEl = document.getElementById('adminUpdateContent');
  const raw = (contentEl ? contentEl.value : '').trim();
  if (!raw) {
    showToast('Güncelleme içeriği boş olamaz.', 'error');
    return;
  }


  // Save each line (including empty ones as-is so the parser can handle them)
  const items = raw.split('\n').map(l => l.trimEnd());
  if (items.every(l => !l.trim())) {
    showToast('En az bir madde girin.', 'error');
    return;
  }

  const sendIcon = document.getElementById('adminUpdateSendIcon');
  const sendText = document.getElementById('adminUpdateSendText');
  const loader = document.getElementById('adminUpdateLoader');
  if (sendIcon) sendIcon.style.display = 'none';
  if (sendText) sendText.style.display = 'none';
  if (loader) loader.style.display = 'inline-block';

  try {
    await db.collection('systemAnnouncements').add({
      type: 'update',
      items: items,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      postedBy: currentUser.email || 'admin'
    });

    if (contentEl) contentEl.value = '';
    // Close the form after posting
    toggleAdminUpdateForm();
    showToast('Güncelleme başarıyla yayınlandı!', 'success');
  } catch (e) {
    console.error('Update post error:', e);
    showToast('Güncelleme paylaşılamadı: ' + e.message, 'error');
  } finally {
    if (sendIcon) sendIcon.style.display = '';
    if (sendText) sendText.style.display = '';
    if (loader) loader.style.display = 'none';
  }
};

window.adminDeleteUpdate = async function(docId) {
  if (!confirm('Bu güncellemeyi silmek istediğinize emin misiniz?')) return;

  try {
    await db.collection('systemAnnouncements').doc(docId).delete();
    showToast('Güncelleme silindi.', 'success');
  } catch (e) {
    console.error('Update delete error:', e);
    showToast('Silinemedi: ' + e.message, 'error');
  }
};

window.adminEditUpdate = function(docId) {
  const container = document.getElementById(`update-content-${docId}`);
  if (!container) return;
  const items = window.currentUpdatesData[docId] || [];
  const rawText = items.join('\n');
  
  // Disable the edit button temporarily so user doesn't double click
  const card = container.closest('.updates-card');
  const editBtns = card.querySelectorAll('.updates-edit-btn');
  editBtns.forEach(b => b.style.display = 'none');
  
  container.innerHTML = `
    <div style="margin-top: 10px;">
      <textarea id="edit-textarea-${docId}" class="log-input admin-update-textarea" rows="12" style="width:100%; min-height:200px; resize:vertical; font-family:'Inter',monospace; font-size:0.88rem; line-height:1.7; padding:12px; border-radius:10px;">${rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</textarea>
      <div style="display:flex; gap:8px; margin-top:12px;">
        <button class="btn-primary" style="padding:6px 16px; font-size:0.85rem;" onclick="adminSaveUpdate('${docId}')">Kaydet</button>
        <button class="btn-small" style="padding:6px 16px; font-size:0.85rem;" onclick="adminCancelEditUpdate('${docId}')">İptal</button>
      </div>
    </div>
  `;
};

window.adminCancelEditUpdate = function(docId) {
  const container = document.getElementById(`update-content-${docId}`);
  if (!container) return;
  const items = window.currentUpdatesData[docId] || [];
  
  // Re-enable edit buttons
  const card = container.closest('.updates-card');
  const editBtns = card.querySelectorAll('.updates-edit-btn');
  editBtns.forEach(b => b.style.display = 'inline-block');
  
  container.innerHTML = `
    <div class="updates-content-parsed">
      ${parseUpdateContent(items)}
    </div>
  `;
};

window.adminSaveUpdate = async function(docId) {
  const textarea = document.getElementById(`edit-textarea-${docId}`);
  if (!textarea) return;
  
  const raw = textarea.value;
  const items = raw.split('\n').map(l => l.trimEnd());
  if (items.every(l => !l.trim())) {
    showToast('En az bir madde girin.', 'error');
    return;
  }
  
  try {
    await db.collection('systemAnnouncements').doc(docId).update({
      items: items
    });
    
    // Update local data and exit edit mode manually so it doesn't wait for snapshot (or if snapshot failed)
    window.currentUpdatesData[docId] = items;
    adminCancelEditUpdate(docId);
    
    showToast('Güncelleme düzenlendi.', 'success');
  } catch (e) {
    console.error('Update save error:', e);
    showToast('Düzenlenemedi: ' + e.message, 'error');
  }
};

function initNav(){
  // Only restore collapsed state on desktop (>1024px)
  if(window.innerWidth > 1024 && localStorage.getItem('zyro_sidebar_collapsed')==='true'){
    document.body.classList.add('sidebar-collapsed');
  } else if(window.innerWidth <= 1024) {
    // On smaller screens, always start expanded (overlay mode)
    localStorage.removeItem('zyro_sidebar_collapsed');
    document.body.classList.remove('sidebar-collapsed');
  }
  const collapseBtn=document.getElementById('sidebarCollapseBtn');
  if(collapseBtn){
    collapseBtn.addEventListener('click',()=>{
      document.body.classList.toggle('sidebar-collapsed');
      localStorage.setItem('zyro_sidebar_collapsed',document.body.classList.contains('sidebar-collapsed'));
      setTimeout(()=>{if(currentPage==='dashboard')drawDashboardChart();else if(currentPage==='progress'){drawWeightChart();drawStrengthChart()}},350);
    });
  }
  // On resize: if viewport shrinks below 1024px, remove collapsed mode
  let resizeThrottle;
  window.addEventListener('resize', () => {
    if (resizeThrottle) return;
    resizeThrottle = setTimeout(() => {
      if(window.innerWidth <= 1024) {
        document.body.classList.remove('sidebar-collapsed');
      }
      resizeThrottle = null;
    }, 150);
  });
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
      if (window.innerWidth <= 1000) document.body.style.overflow = 'hidden';

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

    window.closeSidebar = closeSidebar;
    window.openSidebar = openSidebar;

    const collapseBtn = document.getElementById('sidebarCollapseBtn');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1000) {
          e.stopPropagation();
          closeSidebar();
        }
      });
    }

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
    if (window.innerWidth <= 1000) {
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
    if (window.innerWidth <= 1000) {
      if (sidebar.classList.contains('open')) {
        if (dx < -minDistance) {
          sidebar.classList.remove('open');
        }
      } else {
        if (dx > minDistance && touchStartX < 40) {
          sidebar.classList.add('open');
        } else if (Math.abs(dx) > minDistance) {
          // Page swipe logic
          const swipePages = ['dashboard', 'workouts', 'posture', 'diet', 'progress', 'updates', 'notes', 'comments', 'calculators', 'beforeafter', 'achievements', 'leaderboard', 'ai', 'profile'];
          let cPage = null;
          document.querySelectorAll('.page').forEach(p => {
             if (p.classList.contains('active') || p.style.display === 'block') cPage = p.dataset.page;
          });
          if (cPage) {
            const idx = swipePages.indexOf(cPage);
            if (idx !== -1) {
              if (dx < -minDistance && idx < swipePages.length - 1) {
                // Swipe Left -> Next Page
                if (typeof navigateTo === 'function') navigateTo(swipePages[idx + 1]);
              } else if (dx > minDistance && touchStartX >= 40 && idx > 0) {
                // Swipe Right -> Prev Page
                if (typeof navigateTo === 'function') navigateTo(swipePages[idx - 1]);
              }
            }
          }
        }
      }
    }
  };

  document.addEventListener('touchstart', e => {
    // Check if the target is inside a scrollable list or horizontal menu or calculator
    if (e.target.closest('.workout-list') || 
        e.target.closest('.card-tabs') || 
        e.target.closest('.monthly-tracker') ||
        e.target.closest('#pageCalculators') ||
        e.target.closest('#dietWeekDayTabs') ||
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
  if(!container || !label) return;
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
  const prev=document.getElementById('attPrev'),next=document.getElementById('attNext');
  if(!prev || !next) return;
  prev.addEventListener('click',()=>{attendanceWeekOffset--;renderAttendance()});
  next.addEventListener('click',()=>{attendanceWeekOffset++;renderAttendance()});
}

// =============================================
// WORKOUT DAILY AUTO-RESET
// Each tab stores the date its exercises were last touched.
// If today != that date, reset all done states so old checkmarks vanish.
// =============================================
function autoResetWorkoutTab(tab) {
  if (!appData.programs || !appData.programs[tab]) return;

  // Track per-tab last-touched date in appData.workoutDoneDate
  if (!appData.workoutDoneDate) appData.workoutDoneDate = {};

  const today = todayStr();
  const lastDate = appData.workoutDoneDate[tab];

  // If the stored date is missing or before today, wipe done flags
  if (!lastDate || lastDate !== today) {
    // Only reset if any exercise is actually marked done
    const hasAnyDone = appData.programs[tab].some(ex => ex.done);
    if (hasAnyDone) {
      appData.programs[tab].forEach(ex => ex.done = false);
      // Keep the date blank until user actually marks something today
      delete appData.workoutDoneDate[tab];
      saveData();
    }
  }
}

function migratePrograms() {
  if (!appData.programs) return;
  const day1 = appData.programs.day1 || [];
  const isV16 = day1.length === 7 && day1[0].name === 'Barbell Bench Press' && day1[3].name === 'Low-to-High Cable Crossover';
  if (!isV16) {
    appData.programs = JSON.parse(JSON.stringify(DEFAULT_PROGRAMS));
    if (appData.workoutDoneDate) {
      delete appData.workoutDoneDate.day1;
      delete appData.workoutDoneDate.day2;
      delete appData.workoutDoneDate.day3;
      delete appData.workoutDoneDate.day4;
      delete appData.workoutDoneDate.day5;
    }
    saveData();
  }
}

// =============================================
// WORKOUTS
// =============================================
function renderWorkout(tab){
  currentWorkoutTab=tab;

  // Sync active class on workout tab buttons
  document.querySelectorAll('[data-wktab]').forEach(b => {
    if (b.dataset.wktab === tab) b.classList.add('active');
    else b.classList.remove('active');
  });

  // Ensure programs exist before reset check
  migratePrograms();
  if (!appData.programs) appData.programs = JSON.parse(JSON.stringify(DEFAULT_PROGRAMS));

  // Auto-reset if we're in a new day
  autoResetWorkoutTab(tab);

  const list=document.getElementById('workoutList');
  const programs=appData.programs||DEFAULT_PROGRAMS;
  const exercises=programs[tab]||[];
  const allDone = exercises.length > 0 && exercises.every(ex => ex.done);
  let btnHtml = '';
  if(allDone) {
    btnHtml = `
    <button class="btn-primary complete-btn" style="width:100%; margin-top:16px; justify-content:center; padding:12px; font-weight: bold; font-size: 1.1rem;" onclick="completeDay('workout','${tab}')">
      ${currentLang==='tr'?'🏋 Spor Programını Tamamla (Bugün)':'🏋 Complete Workout (Today)'}
    </button>`;
  }

  list.innerHTML=exercises.map((ex,i)=>{
    const videoUrl = WORKOUT_VIDEO_URLS[ex.name] || ('https://www.youtube.com/results?search_query=' + encodeURIComponent(ex.name + ' proper form tutorial'));
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

      // Record the date of this interaction so we can reset tomorrow
      if (!appData.workoutDoneDate) appData.workoutDoneDate = {};
      appData.workoutDoneDate[tab] = todayStr();
      
      // Auto-toggle day progress if at least 1 exercise is checked
      const anyDone = appData.programs[tab].some(ex => ex.done);
      const td = todayStr();
      if (!appData.completedDays) appData.completedDays = {};
      if (!appData.completedDays[td]) appData.completedDays[td] = {};
      
      if (anyDone) {
        appData.completedDays[td].workout = true;
        appData.attendance[td] = true;
      } else {
        const logs = appData.workoutLogs[td] || [];
        if (logs.length === 0) {
          appData.completedDays[td].workout = false;
        }
      }
      
      // Auto-complete if all exercises done
      const allDone = appData.programs[tab].every(ex => ex.done);
      if (allDone) {
        completeDay('workout', tab);
      } else {
        saveData();
        renderWorkout(tab);
        renderAttendance();
        renderMonthlyTracker();
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
    const reps=parseInt(document.getElementById('logReps').value);
    const sets=parseInt(document.getElementById('logSets').value);
    // 1.5: Read from custom radio buttons instead of select
    const checkedUnit = document.querySelector('input[name="logUnitRadio"]:checked');
    const unit = checkedUnit ? checkedUnit.value : 'kg';
    
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
    // Check achievements: both instant and full history scan
    checkAchievements(exercise, finalWeight, reps);
    // Scan ALL logs for missed achievements (e.g. previously logged weights)
    setTimeout(() => checkAllAchievementsFromLogs(), 500);
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
      ${currentLang==='tr'?'🏋️ Postür Programını Tamamla (Bugün) 🏋️':'🏋️ Complete Posture (Today) 🏋️'}
    </button>`;
  }
  
  list.innerHTML=exercises.map((ex,i)=>{
    const videoUrl = POSTURE_VIDEO_URLS[ex.name];
    const isInstagram = videoUrl && videoUrl.includes('instagram.com');
    const videoBtn = videoUrl
      ? (isInstagram
        ? `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="posture-video-btn" style="background:rgba(225,48,108,0.12);border-color:rgba(225,48,108,0.3);color:#e1306c;" title="${currentLang==='tr'?'Instagram\'da İzle':'Watch on Instagram'}" onclick="event.stopPropagation()">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            ${currentLang==='tr'?'İzle':'Watch'}
          </a>`
        : `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="posture-video-btn" title="${currentLang==='tr'?'Youtube\'da İzle':'Watch on YouTube'}" onclick="event.stopPropagation()">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            ${currentLang==='tr'?'İzle':'Watch'}
          </a>`)
      : '';
    return `<div class="exercise-row posture-exercise-row">
      <span class="exercise-name">${t(ex.name)}</span>
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

      // Auto-toggle day progress if at least 1 exercise is checked
      const anyDone = appData.posturePrograms[tab].some(ex => ex.done);
      const td = todayStr();
      if (!appData.completedDays) appData.completedDays = {};
      if (!appData.completedDays[td]) appData.completedDays[td] = {};
      
      if (anyDone) {
        appData.completedDays[td].posture = true;
      } else {
        appData.completedDays[td].posture = false;
      }

      // Auto-complete if all exercises done
      const allDone = appData.posturePrograms[tab].every(ex => ex.done);
      if (allDone) {
        completeDay('posture', tab);
      } else {
        saveData();
        renderPosture(tab);
        renderMonthlyTracker();
      }
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
// canvas-confetti is ~10 KB and only needed on a completion, so keep it
// out of the initial bundle and fetch it the first time it's used.
let zyroConfettiPromise = null;
function zyroRunConfetti() {
  if (typeof confetti === 'function') {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#8B7CF7', '#ffffff', '#FFD700'] });
    return;
  }
  if (!zyroConfettiPromise) {
    zyroConfettiPromise = new Promise((resolve) => {
      const el = document.createElement('script');
      el.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
      el.async = true;
      el.onload = () => {
        if (typeof confetti === 'function') {
          confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#8B7CF7', '#ffffff', '#FFD700'] });
        }
        resolve();
      };
      el.onerror = resolve;
      document.head.appendChild(el);
    });
  }
}

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
  renderMonthlyTracker();
  if(type === 'workout') renderWorkout(tab);
  if(type === 'posture') renderPosture(tab);
  
  // Confetti effect (lazy-loaded on first use)
  zyroRunConfetti();
  
  // Toast instead of alert
  const msg = currentLang==='tr' ? (type==='workout'?'Spor Programı Kaydedildi!':'Postür Programı Kaydedildi!') : 'Program Completed!';
  setTimeout(() => showToast(msg, 'success'), 400);
};

let currentTrackerDate = new Date();

window.changeTrackerMonth = function(delta) {
  const nextMonth = new Date(currentTrackerDate);
  nextMonth.setMonth(nextMonth.getMonth() + delta);
  const now = new Date();
  // Don't allow navigating past the current month
  if (nextMonth > new Date(now.getFullYear(), now.getMonth(), 28)) {
    showToast(currentLang === 'tr' ? 'Gelecek aylara geçilemez!' : 'Cannot view future months!', 'warning');
    return;
  }
  currentTrackerDate = nextMonth;
  renderMonthlyTracker();
};

function renderMonthlyTracker() {
  const container = document.getElementById('monthlyTracker');
  if(!container) return;
  const now = currentTrackerDate;
  const y = now.getFullYear(), m = now.getMonth();
  const daysInMonth = new Date(y,m+1,0).getDate();
  const MONL=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const labelEl=document.getElementById('trackerMonthLabel');
  if(labelEl) labelEl.textContent=MONL[m]+' '+y;
  const todayDate=new Date(); todayDate.setHours(0,0,0,0);
  const isCurrentMonth=(y===todayDate.getFullYear()&&m===todayDate.getMonth());
  const currentDay=todayDate.getDate();
  const endDay=isCurrentMonth?currentDay:daysInMonth;
  let workoutDone=0,postureDone=0;
  for(let d=1;d<=endDay;d++){
    const dStr=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const comp=(appData.completedDays&&appData.completedDays[dStr])||{};
    if(comp.workout||(appData.workoutLogs[dStr]||[]).length>0)workoutDone++;
    if(comp.posture)postureDone++;
  }
  function mkRow(name,isPosture,icon){
    let cells='';
    for(let d=1;d<=daysInMonth;d++){
      const dStr=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const isFuture=isCurrentMonth&&d>currentDay;
      const isToday=isCurrentMonth&&d===currentDay;
      const comp=(appData.completedDays&&appData.completedDays[dStr])||{};
      const on=isPosture?!!comp.posture:(comp.workout||(appData.workoutLogs[dStr]||[]).length>0);
      let cls='pv-cell'+(on?' on'+(isPosture?' po':'')+'':'')+' '+(isFuture?'f':'')+(isToday?' td':'');
      cells+='<div class="'+cls.trim()+'" onclick="toggleTrackerDay(\"'+dStr+'\",\"'+(isPosture?'posture':'workout')+'\")"'+' title="'+dStr+'">'+d+'</div>';
    }
    const doneCount=isPosture?postureDone:workoutDone;
    return '<div class="pv-trk"><div class="pv-nm2"><div class="pv-ic2">'+icon+'</div><div><b>'+name+'</b><span>'+doneCount+'/'+endDay+' gün</span></div></div>'+
           '<div class="pv-cells" style="--n:'+daysInMonth+'">'+cells+'</div></div>';
  }
  const dumbIcon='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/></svg>';
  const postureIcon='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 8v6M7 10h10M9 21l3-7 3 7"/></svg>';
  container.innerHTML=mkRow(currentLang==='tr'?'Spor':'Workout',false,dumbIcon)+mkRow(currentLang==='tr'?'Postür':'Posture',true,postureIcon);
}

window.toggleTrackerDay = function(dateStr, type) {
  if(!appData.completedDays) appData.completedDays = {};
  if(!appData.completedDays[dateStr]) appData.completedDays[dateStr] = {};
  
  const parts = dateStr.split('-');
  const cellDate = new Date(parts[0], parts[1]-1, parts[2]);
  const todayDate = new Date();
  todayDate.setHours(0,0,0,0);
  if(cellDate > todayDate) {
    showToast(currentLang === 'tr' ? 'Gelecek günler işaretlenemez!' : 'Cannot toggle future days!', 'error');
    return;
  }
  
  appData.completedDays[dateStr][type] = !appData.completedDays[dateStr][type];
  saveData();
  renderMonthlyTracker();
};

function renderLoggedExercises(){
  const container=document.getElementById('loggedExercises');
  const td=todayStr();const logs=appData.workoutLogs[td]||[];
  const countEl = document.getElementById('todayLogCount');
  if (countEl) {
    countEl.textContent = currentLang === 'tr' 
      ? `${logs.length} Antrenman Kaydedildi` 
      : `${logs.length} Workouts Logged`;
  }
  if(logs.length===0){container.innerHTML=`<div class="logged-empty">${t('noExercisesLogged')}</div>`;return}
  let html=`<div class="logged-row logged-row-header"><span>${t('exercise')}</span><span>${t('weightLabel')}</span><span>Reps</span><span>Sets</span><span></span></div>`;
  // Display newest first (reverse order), but keep original index for deletion
  const reversedIndexes = logs.map((l,i)=>i).reverse();
  reversedIndexes.forEach(i=>{
    const l=logs[i];
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
        appData.workoutLogs[td] = [];
        appData.attendance[td] = false;
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
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
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
function pvFw(n){return String(+n.toFixed(1)).replace('.',',');}
function pvFd(s){const d=new Date(s+'T00:00:00');return d.getDate()+' '+['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'][d.getMonth()];}
function pvFdl(s){const d=new Date(s+'T00:00:00');const days=['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];return pvFd(s)+' '+days[d.getDay()];}
function pvFy(s){return pvFd(s)+' '+new Date(s+'T00:00:00').getFullYear();}

function lineChart(el,pts,h,anim){
  if(!el||pts.length<2)return;
  const W=Math.max(el.clientWidth||el.offsetWidth,260),pl=42,pr=14,pt=14,pb=28;
  const t0=pts[0].t,t1=pts[pts.length-1].t;
  const ys=pts.map(p=>p.y);
  let mn=Math.min(...ys),mx=Math.max(...ys);const pad=(mx-mn||1)*.25;mn-=pad;mx+=pad;
  const X=t=>pl+(t-t0)/(t1-t0||1)*(W-pl-pr),Y=v=>pt+(1-(v-mn)/(mx-mn))*(h-pt-pb);
  const P=pts.map(p=>[X(p.t),Y(p.y)]);
  let d=`M${P[0][0]},${P[0][1]}`;
  for(let i=1;i<P.length;i++){const m=(P[i-1][0]+P[i][0])/2;d+=` C${m},${P[i-1][1]} ${m},${P[i][1]} ${P[i][0]},${P[i][1]}`}
  let g='';
  for(let i=0;i<4;i++){const v=mn+(mx-mn)*i/3,y=Y(v);g+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.06)"/><text class="pv-ax" x="${pl-8}" y="${y+4}" text-anchor="end">${pvFw(v)}</text>`}
  const L=P[P.length-1];
  const dots=(P.length<=14?P:[L]).map(p=>`<circle class="pv-dot" cx="${p[0]}" cy="${p[1]}" r="3.5"/>`).join('');
  el.innerHTML=`<svg class="pv-ch${anim?' pv-wipe':''}" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}" role="img" aria-label="Zaman grafiği"><defs><linearGradient id="pvga${h}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fb3cc" stop-opacity=".32"/><stop offset="1" stop-color="#8fb3cc" stop-opacity="0"/></linearGradient></defs>${g}
  <path d="${d} L${L[0]},${h-pb} L${P[0][0]},${h-pb}Z" fill="url(#pvga${h})"/><path class="pv-line" d="${d}"/>${dots}
  <text class="pv-ax" x="${pl}" y="${h-6}">${pts[0].label}</text><text class="pv-ax" x="${W-pr}" y="${h-6}" text-anchor="end">${pts[pts.length-1].label}</text></svg>`;
}

function drawWeightChart(){
  const entries=Object.entries(appData.weightLog||{}).sort((a,b)=>a[0].localeCompare(b[0]));
  const el=document.getElementById('wchart');
  if(!el)return;
  const kpi=document.getElementById('wk1');
  const cntEl=document.getElementById('wcnt');
  const listEl=document.getElementById('wlist');
  if(entries.length===0){
    if(kpi)kpi.innerHTML='';
    if(cntEl)cntEl.textContent='0';
    el.innerHTML='<div class="pv-empty">Henüz yeterli veri yok. Birkaç kilo kaydı ekleyince grafik burada görünür.</div>';
    if(listEl)listEl.innerHTML='<div class="pv-empty">Henüz kayıt yok.</div>';
    return;
  }
  const L=entries[entries.length-1],F=entries[0];
  const df=entries.length>1?L[1]-F[1]:null;
  if(kpi)kpi.innerHTML=`<div><b>${pvFw(L[1])}<small>kg</small></b><span>güncel</span></div>
  <div><b>${df===null?'—':(df>0?'+':df<0?'−':'')+pvFw(Math.abs(df))}<small>kg</small></b><span>ilk kayda göre</span></div>
  <div><b>${entries.length}</b><span>kayıt</span></div>`;
  if(cntEl)cntEl.textContent=entries.length;
  const pts=entries.map(([d,v])=>({t:new Date(d+'T00:00:00').getTime(),y:v,label:pvFd(d)}));
  if(pts.length>1)lineChart(el,pts,240,true);
  else el.innerHTML='<div class="pv-empty">Birkaç kilo kaydı ekleyince grafik burada görünür.</div>';
  renderWeightLogList();
}
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
  const {data, labels} = (typeof currentChartType !== 'undefined' && currentChartType === 'volume') ? getVolumePerWeek() : getWeightChartData();
  drawChartGeneric('dashboardChart', data, labels, 'rgb(139,124,247)');
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
  const prc=document.getElementById('prc');
  const prl=document.getElementById('prl');
  if(!prl) return;
  const prs={};
  Object.entries(appData.workoutLogs||{}).forEach(([date,logs])=>{
    logs.forEach(l=>{
      if(!prs[l.exercise])prs[l.exercise]={maxWeight:0,bestReps:0,date:'',id:null};
      if(l.weight>prs[l.exercise].maxWeight||(l.weight===prs[l.exercise].maxWeight&&l.reps>prs[l.exercise].bestReps)){
        prs[l.exercise].maxWeight=l.weight;prs[l.exercise].bestReps=l.reps;
        prs[l.exercise].date=date;prs[l.exercise].id=l.id;
      }
    });
  });
  const sorted=Object.entries(prs).sort((a,b)=>b[1].maxWeight-a[1].maxWeight);
  if(prc) prc.textContent=sorted.length;
  if(sorted.length===0){prl.innerHTML='<div class="pv-empty">Henüz rekor yok.</div>';return;}
  prl.innerHTML=sorted.map(([name,pr])=>{
    return '<div class="pv-pr-r"><div><b>'+name+'</b><span>'+pr.bestReps+' tekrar · '+pvFy(pr.date)+'</span></div>'+
           '<div class="pv-mx">'+pvFw(pr.maxWeight)+' <small>kg</small></div>'+
           '<button class="pv-en-del" onclick="deletePR(\''+name+'\')" aria-label="Rekoru sil">✕</button></div>';
  }).join('');
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
    document.getElementById('weightInput').value='';drawWeightChart();updateStats();renderWeightLogList();
  });
  renderWeightLogList();
}

function renderWeightLogList(){
  const container = document.getElementById('wlist');
  if(!container) return;
  const entries = Object.entries(appData.weightLog||{}).sort((a,b)=>b[0].localeCompare(a[0]));
  if(entries.length===0){
    container.innerHTML='<div class="pv-empty">Henuz kayit yok.</div>';
    return;
  }
  container.innerHTML=entries.map(([date,val])=>{
    const label=date===todayStr()?(currentLang==='tr'?'Bugun':'Today'):pvFdl(date);
    return `<div class="pv-en"><span>${label}</span><b>${val} kg</b><button class="pv-en-del" onclick="deleteWeightEntry('${date}')" aria-label="Kaydı sil">×</button></div>`;
  }).join('');
}

window.deleteWeightEntry = function(date){
  if(!appData.weightLog||!appData.weightLog[date]) return;
  delete appData.weightLog[date];
  saveData();
  drawWeightChart();
  updateStats();
  renderWeightLogList();
  showToast(currentLang==='tr'?'Kayıt silindi':'Entry deleted','success');
};


let editingNoteId = null;

// =============================================
// NOTES
// =============================================
// ============================================================
// ZYRO NOTLAR (NOTES) — Zyro Panel v3 Redesign
// Connected directly to appData.notes, preserved, multi-tag, colors
// ============================================================
currentNoteColor = '#8fb3cc';
let currentNoteTag = null;
let isAddingTag = false;
let selectedNoteIds = new Set();

const NOTE_COLORS = ['#8fb3cc', '#c99a9a', '#7d9be0', '#7fb08f', '#b99a7a'];

function getAvailableTags() {
  const defaultTags = [
    { id: 'later', label: currentLang === 'tr' ? 'Daha Sonra' : 'Later', icon: 'zr-i-upd' },
    { id: 'idea', label: currentLang === 'tr' ? 'Fikir' : 'Idea', icon: 'zr-i-post' },
    { id: 'gym', label: 'GYM', icon: 'zr-i-dumb' }
  ];
  let custom = [];
  try {
    const stored = JSON.parse(localStorage.getItem('zyro-custom-tags'));
    if (Array.isArray(stored)) custom = stored;
  } catch (e) {}
  return [...defaultTags, ...custom];
}

function initNotes() {
  const form = document.getElementById('fn');
  if (!form) return;

  const dotsEl = document.getElementById('dots');
  const tagsEl = document.getElementById('tg');
  const cancelBtn = document.getElementById('cx');
  const bulkDeleteBtn = document.getElementById('ds');

  // Render color dots
  if (dotsEl) {
    dotsEl.innerHTML = NOTE_COLORS.map((c, i) =>
      `<button type="button" class="dot2" style="--c:${c}" data-c="${c}" aria-pressed="${c === currentNoteColor}" aria-label="Renk ${i + 1}"></button>`
    ).join('');

    dotsEl.onclick = e => {
      const b = e.target.closest('[data-c]');
      if (b) {
        currentNoteColor = b.dataset.c;
        renderNotesForm();
      }
    };
  }

  // Tags click handling
  if (tagsEl) {
    tagsEl.onclick = async e => {
      const t = e.target.closest('[data-t]');
      const td = e.target.closest('[data-td]');
      const ta = e.target.closest('[data-ta]');

      if (t) {
        currentNoteTag = currentNoteTag === t.dataset.t ? null : t.dataset.t;
        renderNotesForm();
        return;
      }

      if (ta) {
        const k = ta.dataset.ta;
        if (k === 'new') {
          isAddingTag = true;
          renderNotesForm();
          return;
        }
        if (k === 'no') {
          isAddingTag = false;
          renderNotesForm();
          return;
        }
        if (k === 'ok') {
          const input = document.getElementById('tn');
          const val = input ? input.value.trim() : '';
          if (!val) {
            showToast(currentLang === 'tr' ? 'Etiket adı boş olamaz' : 'Tag name cannot be empty', 'error');
            return;
          }
          let custom = [];
          try {
            custom = JSON.parse(localStorage.getItem('zyro-custom-tags')) || [];
          } catch (e) {}
          if (custom.some(x => x.label.toLowerCase() === val.toLowerCase())) {
            showToast(currentLang === 'tr' ? 'Bu etiket zaten var' : 'This tag already exists', 'error');
            return;
          }
          const newTag = { id: 't_' + Date.now(), label: val, icon: 'zr-i-tag-custom', custom: 1 };
          custom.push(newTag);
          localStorage.setItem('zyro-custom-tags', JSON.stringify(custom));
          currentNoteTag = newTag.id;
          isAddingTag = false;
          renderNotesForm();
          return;
        }
      }

      if (td) {
        if (confirm(currentLang === 'tr' ? 'Bu etiket silinsin mi?' : 'Delete this tag?')) {
          let custom = [];
          try {
            custom = JSON.parse(localStorage.getItem('zyro-custom-tags')) || [];
          } catch (e) {}
          custom = custom.filter(x => x.id !== td.dataset.td);
          localStorage.setItem('zyro-custom-tags', JSON.stringify(custom));
          if (currentNoteTag === td.dataset.td) currentNoteTag = null;
          renderNotesForm();
          renderNotes();
        }
      }
    };

    tagsEl.onkeydown = e => {
      if (e.target.id === 'tn') {
        if (e.key === 'Enter') {
          e.preventDefault();
          const okBtn = tagsEl.querySelector('[data-ta=ok]');
          if (okBtn) okBtn.click();
        }
        if (e.key === 'Escape') {
          isAddingTag = false;
          renderNotesForm();
        }
      }
    };
  }

  // Cancel button
  if (cancelBtn) {
    cancelBtn.onclick = () => {
      editingNoteId = null;
      currentNoteTag = null;
      currentNoteColor = NOTE_COLORS[0];
      form.reset();
      const errEl = document.getElementById('er');
      if (errEl) errEl.textContent = '';
      renderNotesForm();
    };
  }

  // Form submit
  form.onsubmit = e => {
    e.preventDefault();
    const title = (document.getElementById('nt').value || '').trim();
    const text = (document.getElementById('nx').value || '').trim();
    const errEl = document.getElementById('er');

    if (!title && !text) {
      if (errEl) errEl.textContent = currentLang === 'tr' ? 'Bir başlık veya not yaz.' : 'Write a title or note.';
      return;
    }
    if (errEl) errEl.textContent = '';

    if (!appData.notes) appData.notes = {};

    const noteId = editingNoteId || ('n_' + Date.now());
    const existing = appData.notes[noteId] || {};

    appData.notes[noteId] = {
      id: noteId,
      title: title,
      text: text,
      color: currentNoteColor,
      tag: currentNoteTag,
      timestamp: existing.timestamp || Date.now(),
      date: existing.date || todayStr()
    };

    saveData();
    showToast(editingNoteId ? (currentLang === 'tr' ? 'Not güncellendi' : 'Note updated') : (currentLang === 'tr' ? 'Not kaydedildi' : 'Note saved'), 'success');

    editingNoteId = null;
    currentNoteTag = null;
    currentNoteColor = NOTE_COLORS[0];
    form.reset();
    renderNotesForm();
    renderNotes();
  };

  // Bulk delete
  if (bulkDeleteBtn) {
    bulkDeleteBtn.onclick = () => {
      if (!selectedNoteIds.size) return;
      const count = selectedNoteIds.size;
      const msg = currentLang === 'tr' ? `${count} not silinsin mi? Bu işlem geri alınamaz.` : `Delete ${count} notes? This cannot be undone.`;
      if (!confirm(msg)) return;

      selectedNoteIds.forEach(id => {
        delete appData.notes[id];
      });
      selectedNoteIds.clear();
      saveData();
      renderNotes();
      showToast(currentLang === 'tr' ? 'Notlar silindi' : 'Notes deleted', 'success');
    };
  }

  renderNotesForm();
  renderNotes();
}

function renderNotesForm() {
  const dotsEl = document.getElementById('dots');
  const tagsEl = document.getElementById('tg');
  const ft = document.getElementById('ft');
  const bg = document.getElementById('bg');
  const svt = document.getElementById('svt');
  const cx = document.getElementById('cx');

  if (dotsEl) {
    dotsEl.innerHTML = NOTE_COLORS.map((c, i) =>
      `<button type="button" class="dot2" style="--c:${c}" data-c="${c}" aria-pressed="${c === currentNoteColor}" aria-label="Renk ${i + 1}"></button>`
    ).join('');
  }

  if (tagsEl) {
    const tags = getAvailableTags();
    const tagItems = tags.map(t =>
      `<span class="tc${t.custom ? ' cu' : ''}">` +
        `<button type="button" data-t="${t.id}" aria-pressed="${t.id === currentNoteTag}">` +
          `<svg class="i" width="14" height="14"><use href="#${t.icon}"/></svg>${t.label}` +
        `</button>` +
        (t.custom ? `<button type="button" class="tr2" data-td="${t.id}" aria-label="Sil">✕</button>` : '') +
      `</span>`
    ).join('');

    const addPart = isAddingTag
      ? `<span class="ta"><input class="in" id="tn" maxlength="20" placeholder="${currentLang === 'tr' ? 'Etiket adı' : 'Tag name'}"><button type="button" class="btn" data-ta="ok">${currentLang === 'tr' ? 'Ekle' : 'Add'}</button><button type="button" class="ghost" data-ta="no">${currentLang === 'tr' ? 'İptal' : 'Cancel'}</button></span>`
      : `<button type="button" class="add" data-ta="new"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>${currentLang === 'tr' ? 'Etiket ekle' : 'Add tag'}</button>`;

    tagsEl.innerHTML = tagItems + addPart;
    if (isAddingTag) {
      const inp = document.getElementById('tn');
      if (inp) inp.focus();
    }
  }

  if (ft) ft.textContent = editingNoteId ? (currentLang === 'tr' ? 'Notu düzenle' : 'Edit note') : (currentLang === 'tr' ? 'Bugünkü giriş' : 'Today\'s entry');
  if (bg) bg.hidden = !!editingNoteId;
  if (svt) svt.textContent = editingNoteId ? (currentLang === 'tr' ? 'Güncelle' : 'Update') : (currentLang === 'tr' ? 'Notu kaydet' : 'Save note');
  if (cx) cx.hidden = !editingNoteId;
}

function renderNotes() {
  const container = document.getElementById('ls');
  const countEl = document.getElementById('cn');
  const deleteSelectedBtn = document.getElementById('ds');
  const dst = document.getElementById('dst');
  if (!container) return;

  const entries = Object.values(appData.notes || {}).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  // Prune deleted selected ids
  selectedNoteIds = new Set([...selectedNoteIds].filter(id => appData.notes && appData.notes[id]));

  if (countEl) countEl.textContent = entries.length;
  if (deleteSelectedBtn) deleteSelectedBtn.disabled = !selectedNoteIds.size;
  if (dst) {
    dst.textContent = selectedNoteIds.size
      ? (currentLang === 'tr' ? `Seçilenleri sil (${selectedNoteIds.size})` : `Delete selected (${selectedNoteIds.size})`)
      : (currentLang === 'tr' ? 'Seçilenleri sil' : 'Delete selected');
  }

  if (entries.length === 0) {
    container.innerHTML = `<div class="empty">${currentLang === 'tr' ? 'Henüz not yok. İlk girişini yukarıdan ekle.' : 'No notes yet. Add your first entry above.'}</div>`;
    return;
  }

  const tags = getAvailableTags();

  container.innerHTML = entries.map(n => {
    const d = new Date(n.timestamp || Date.now());
    const dateStr = d.toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      weekday: 'short'
    });
    const foundTag = tags.find(x => x.id === n.tag);
    const color = n.color || NOTE_COLORS[0];
    const isChecked = selectedNoteIds.has(n.id);

    return `
      <article class="nt" style="--c:${color}" data-id="${n.id}">
        <input type="checkbox" data-s ${isChecked ? 'checked' : ''} aria-label="Seç">
        <div>
          <time>${dateStr}</time>
          ${n.title ? `<h3>${escapeHtml(n.title)}</h3>` : ''}
          <div class="tx">${escapeHtml(n.text || '')}</div>
          ${foundTag ? `<span class="tag"><svg class="i" width="12" height="12"><use href="#${foundTag.icon}"/></svg>${escapeHtml(foundTag.label)}</span>` : ''}
        </div>
        <div class="na">
          <button class="ghost" data-a="e">
            <svg class="i" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            ${currentLang === 'tr' ? 'Düzenle' : 'Edit'}
          </button>
          <button class="ghost danger" data-a="d">
            <svg class="i" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            ${currentLang === 'tr' ? 'Sil' : 'Delete'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Event delegation on list
  container.onclick = e => {
    const card = e.target.closest('[data-id]');
    if (!card) return;
    const id = card.dataset.id;
    const note = appData.notes && appData.notes[id];

    if (e.target.matches('[data-s]')) {
      if (e.target.checked) selectedNoteIds.add(id);
      else selectedNoteIds.delete(id);
      renderNotes();
      return;
    }

    const actionBtn = e.target.closest('[data-a]');
    if (!actionBtn) return;

    if (actionBtn.dataset.a === 'e' && note) {
      editingNoteId = id;
      currentNoteTag = note.tag || null;
      currentNoteColor = note.color || NOTE_COLORS[0];
      renderNotesForm();
      const titleInput = document.getElementById('nt');
      const textInput = document.getElementById('nx');
      if (titleInput) titleInput.value = note.title || '';
      if (textInput) textInput.value = note.text || '';
      const formEl = document.getElementById('fn');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (textInput) textInput.focus();
    } else if (actionBtn.dataset.a === 'd') {
      const msg = currentLang === 'tr' ? 'Not silinsin mi? Bu işlem geri alınamaz.' : 'Delete this note? This cannot be undone.';
      if (confirm(msg)) {
        delete appData.notes[id];
        selectedNoteIds.delete(id);
        saveData();
        renderNotes();
        showToast(currentLang === 'tr' ? 'Not silindi' : 'Note deleted', 'success');
      }
    }
  };
}


// =============================================
// STATS
// =============================================
function updateStats(){
  // The approved dashboard is rendered by React; keep every legacy caller
  // working by refreshing that view instead of the old DOM nodes.
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
  if (typeof updateLevelUI === 'function') updateLevelUI();
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
        weight: l.unit === 'lbs' ? (l.inputWeight || l.weight) : (l.weight || 0),
        unit: l.unit || 'kg',
        weightKg: l.weight || 0,
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
      const weightGainRaw = last.weightKg - first.weightKg;
      const weightGain = last.unit === 'lbs' ? Math.round(weightGainRaw / 0.453592 * 10) / 10 : Math.round(weightGainRaw * 10) / 10;
      const scoreGain = calculateStrengthScore(last.weightKg, last.reps) - calculateStrengthScore(first.weightKg, first.reps);
      
      if (weightGain > 0 || scoreGain > 0) {
        gains.push({ name: ex, weightGain, scoreGain, lastWeight: last.weight, lastDate: last.date, lastUnit: last.unit });
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
              <div style="font-size:0.7rem; color:var(--text-muted);">Son: ${g.lastWeight}${g.lastUnit} · ${new Date(g.lastDate).toLocaleDateString('tr-TR', {day:'numeric', month:'short'})}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.85rem; font-weight:800; color:#4ecb8d;">+${parseFloat(g.weightGain.toFixed(1))}${g.lastUnit}</div>
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
  const historyAsc = [...history].reverse(); // Chronological asc for chart
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
  const isLbs = latest.unit === 'lbs';
  const unitLabel = latest.unit || 'kg';
  const nextWeekWeight = latest.weight + (isLbs ? (latest.weight > 110 ? 5 : 2.5) : (latest.weight > 50 ? 2.5 : 1));
  const nextMonthWeight = latest.weight + (isLbs ? (latest.weight > 110 ? 15 : 10) : (latest.weight > 50 ? 7.5 : 5));

  let predictionHtml = `
    <div style="background:linear-gradient(135deg, rgba(139,124,247,0.1), rgba(78,203,141,0.05)); border:1px solid rgba(139,124,247,0.2); border-radius:16px; padding:18px; margin-bottom:24px; position:relative; overflow:hidden;">
      <div style="position:absolute; top:-10px; right:-10px; font-size:4rem; opacity:0.05; transform:rotate(15deg);">g</div>
      <h4 style="font-size:0.75rem; color:var(--accent-primary); text-transform:uppercase; letter-spacing:1px; margin-bottom:14px; font-weight:800;">Gelecek Tahminleri</h4>
      
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Gelecek Hafta</div>
          <div style="font-size:1.1rem; font-weight:900; color:var(--text-primary);">${nextWeekWeight}<small style="font-size:0.6rem; opacity:0.7;">${unitLabel}</small></div>
          <div style="font-size:0.65rem; color:#4ecb8d; font-weight:600;">${latest.reps} Tekrar</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:0.6rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Gelecek Ay</div>
          <div style="font-size:1.1rem; font-weight:900; color:var(--text-primary);">${nextMonthWeight}<small style="font-size:0.6rem; opacity:0.7;">${unitLabel}</small></div>
          <div style="font-size:0.65rem; color:#4ecb8d; font-weight:600;">${latest.reps} Tekrar</div>
        </div>
      </div>
      <p style="font-size:0.65rem; color:var(--text-muted); margin-top:12px; font-style:italic;">* Bu tahminler lineer gelişim ve düzenli antrenman baz alınarak hesaplanmıştır.</p>
    </div>
  `;

  // Mini Chart HTML
  let chartHtml = `
    <div style="background:var(--bg-card-alt); border:1px solid var(--border-subtle); border-radius:16px; padding:16px; margin-bottom:24px;">
      <h4 style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Gelişim Grafiği</h4>
      <div style="position:relative; height:180px; width:100%;">
        <canvas id="strengthMiniChart"></canvas>
      </div>
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
            const score = calculateStrengthScore(curr.weightKg, curr.reps);
            const prevScore = next ? calculateStrengthScore(next.weightKg, next.reps) : 0;
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
                  <span style="font-size:1.2rem; font-weight:900;">${curr.weight}${curr.unit}</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">${curr.reps} Tekrar</span>
                  ${weightDiff > 0 ? `<span style="font-size:0.7rem; font-weight:800; color:#4ecb8d; margin-left:auto;">+${parseFloat(weightDiff.toFixed(1))}${curr.unit} ↑</span>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });
  historyHtml += '</div>';

  content.innerHTML = selectorHtml + predictionHtml + chartHtml + historyHtml;
  modal.style.display = 'flex';

  // Render Chart.js
  setTimeout(() => {
    const ctx = document.getElementById('strengthMiniChart');
    if (ctx && window.Chart) {
      const labels = historyAsc.map(h => new Date(h.timestamp).toLocaleDateString('tr-TR', {day:'numeric', month:'short'}));
      const dataPoints = historyAsc.map(h => h.weight);
      
      if (window.strengthMiniChartInstance) { window.strengthMiniChartInstance.destroy(); }
      window.strengthMiniChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ağırlık (' + unitLabel + ')',
            data: dataPoints,
            borderColor: '#8b7cf7',
            backgroundColor: 'rgba(139, 124, 247, 0.15)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#8b7cf7',
            pointBorderColor: '#181822',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(24, 24, 34, 0.95)',
              titleColor: '#eae8f5',
              bodyColor: '#eae8f5',
              borderColor: 'rgba(139,124,247,0.3)',
              borderWidth: 1,
              padding: 10,
              displayColors: false,
              callbacks: {
                label: function(context) { return context.parsed.y + ' ' + unitLabel; }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: { color: '#625f7a', font: { family: "'Inter', sans-serif", size: 10 }, maxTicksLimit: 5 }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
              ticks: { color: '#625f7a', font: { family: "'Space Grotesk', sans-serif", size: 10 }, padding: 8 }
            }
          }
        }
      });
    }
  }, 100);
};

window.closeStrengthDetails = function() {
  document.getElementById('strengthDetailsModal').style.display = 'none';
  // Also close any open custom dropdowns inside the modal
  document.querySelectorAll('[data-sdrop]').forEach(el => el.style.display = 'none');
};

// ESC key closes strength modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('strengthDetailsModal');
    if (modal && modal.style.display !== 'none') closeStrengthDetails();
  }
});

// =============================================
// REFRESH
// =============================================
function refreshDashboard(){
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
  if (typeof updateLevelUI === 'function') updateLevelUI();
}

function renderDashboardWarnings() {
  // Find or create warnings container
  let warnContainer = document.getElementById('dashboardWarnings');
  if (!warnContainer) {
    // Find dashboard header or stats area to inject before
    const dashStatsEl = document.getElementById('dashboardStats') || document.querySelector('.dashboard-stats') || document.querySelector('#page-dashboard .card');
    if (!dashStatsEl) return;
    warnContainer = document.createElement('div');
    warnContainer.id = 'dashboardWarnings';
    warnContainer.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin-bottom:16px;';
    dashStatsEl.parentNode.insertBefore(warnContainer, dashStatsEl);
  }
  warnContainer.innerHTML = '';

  const warnings = [];

  // 1) Antrenman günü uyarısı (Sal=2, Per=4, Cmt=6)
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Paz, 1=Pzt, 2=Sal, 3=Çar, 4=Per, 5=Cum, 6=Cmt
  const isWorkoutDay = dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0;
  if (isWorkoutDay) {
    const todayKey = todayStr();
    const attendance = appData.attendance || {};
    const alreadyLogged = attendance[todayKey] === true;
    if (!alreadyLogged) {
      const dayLabels = { 2: 'Salı', 3: 'Çarşamba', 5: 'Cuma', 6: 'Cumartesi', 0: 'Pazar' };
      warnings.push({
        icon: '💪',
        title: `Bugün ${dayLabels[dayOfWeek]} — Antrenman Günü!`,
        text: 'Bugünkü antrenmanını kaydettikten sonra bu uyarı kaybolacak.',
        color: '#F59E0B',
        bg: 'rgba(245,158,11,0.08)',
        border: 'rgba(245,158,11,0.25)',
        action: `onclick="switchPage('workouts')"`,
        actionLabel: 'Antrenmana Git →'
      });
    }
  }

  // 2) Ağırlık kayıt uyarısı (son 7 günde kayıt yoksa)
  const weightLog = appData.weightLog || {};
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const hasRecentWeight = Object.keys(weightLog).some(dateKey => {
    return new Date(dateKey + 'T00:00:00') >= sevenDaysAgo;
  });
  if (!hasRecentWeight) {
    warnings.push({
      icon: '📊',
      title: '7 Gündür Ağırlık Ölçümü Yok',
      text: 'Düzenli takip için ağırlığını kaydetmeyi unutma.',
      color: '#60A5FA',
      bg: 'rgba(96,165,250,0.07)',
      border: 'rgba(96,165,250,0.22)',
      action: `onclick="switchPage('progress')"`,
      actionLabel: 'İlerleme Sayfası →'
    });
  }

  if (warnings.length === 0) return;

  warnContainer.innerHTML = warnings.map(w => `
    <div style="background:${w.bg};border:1px solid ${w.border};border-radius:14px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;cursor:pointer;" ${w.action}>
      <div style="font-size:1.4rem;flex-shrink:0;line-height:1;">${w.icon}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:800;font-size:0.9rem;color:${w.color};margin-bottom:3px;">${w.title}</div>
        <div style="font-size:0.78rem;color:var(--text-muted);">${w.text}</div>
      </div>
      <div style="font-size:0.75rem;font-weight:700;color:${w.color};flex-shrink:0;padding:4px 10px;border-radius:8px;border:1px solid ${w.border};white-space:nowrap;" ${w.action}>${w.actionLabel}</div>
    </div>
  `).join('');
}
function refreshAllViews(){
  renderAttendance();updateStats();updateMuscleMap();
  if(currentPage==='dashboard'){refreshDashboard();}
  else if(currentPage==='workouts'){
    if (window.ZyroWorkouts) window.ZyroWorkouts.sync();
    else { zyroLoadPage('workouts'); renderWorkout(currentWorkoutTab); renderLoggedExercises(); }
  }
  else if(currentPage==='posture'){
    if (window.ZyroPosture) window.ZyroPosture.sync();
    else { zyroLoadPage('posture'); renderPosture(currentPostureTab); }
  }
  else if(currentPage==='progress')setTimeout(()=>{
    drawWeightChart();drawStrengthChart();
    renderMonthlyTracker();renderProgressTracker();
    if(typeof renderWeightLogList==='function')renderWeightLogList();
  },50);
  else if(currentPage==='updates')renderUpdatesPage();
  else if(currentPage==='notes')renderNotes();
  else if(currentPage==='comments')renderComments();
  else if(currentPage==='beforeafter'){renderProgressPhotos();renderPRTable();renderBodyMeasurements();}
  else if(currentPage==='achievements')renderAchievements();
  else if(currentPage==='leaderboard') { if (typeof renderLeaderboard === 'function') renderLeaderboard(); }
  else if(currentPage==='profile')renderProfilePage();
  else if(currentPage==='diet') { if (typeof window.renderDiet === 'function') window.renderDiet(); }
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
  initRouter();
  initWorkoutTabs();initLogForm();initWeightLog();
  initPostureTabs();initVideoModal();
  initNotes();initDashboardChartTabs();
  initComments();
  populateExerciseDropdown();renderAttendance();
  initWeeklyGoalSheet();
  initProgressPhotos();
  
  const notifDrawer = document.getElementById('notifDrawer');
  const notifBackdrop = document.getElementById('notifBackdrop');
  
  if (notifBackdrop && notifDrawer) {
    notifBackdrop.addEventListener('click', () => {
      notifDrawer.classList.remove('open');
      notifBackdrop.classList.remove('show');
      notifBackdrop.classList.remove('visible');
    });
  }

  // Close notifications drawer when clicking outside of it
  document.addEventListener('click', (event) => {
    if (notifDrawer && notifDrawer.classList.contains('open')) {
      const trigger = document.getElementById('notifTrigger');
      // If the click is outside the drawer AND not inside the trigger button
      if (!notifDrawer.contains(event.target) && (!trigger || !trigger.contains(event.target))) {
        notifDrawer.classList.remove('open');
        if (notifBackdrop) {
          notifBackdrop.classList.remove('show');
          notifBackdrop.classList.remove('visible');
        }
      }
    }
  });

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
    
    // Enable level-up toasts on startup if Firebase is not configured
    if (!window.isFirebaseConfigured) {
      if (typeof window.enableLevelUpToasts === 'function') {
        window.enableLevelUpToasts();
      }
    }
  });
});

/**
 * Sessiz başarım tarama: Tüm log geçmişinden başarımları açar.
 * Uygulama başlarken çalışır, popup göstermez — zaten kazanılmış ama
 * veri tabanında kaydedilmemiş başarımları kurtarır.
 */
function _silentAchievementScan() {
  if (!appData.achievements) appData.achievements = {};
  const maxWeights = {};
  Object.values(appData.workoutLogs || {}).forEach(dayLogs => {
    (dayLogs || []).forEach(log => {
      const ex = log.exercise;
      const w = parseFloat(log.weight) || 0;
      if (!maxWeights[ex] || w > maxWeights[ex]) maxWeights[ex] = w;
    });
  });
  let anyNew = false;
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) return;
    if (appData.achievements[def.id]) return;
    const maxW = maxWeights[def.exercise] || 0;
    if (maxW >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      anyNew = true;
    }
  });
  if (anyNew) {
    saveData();
    if (typeof renderAchievements === 'function') renderAchievements();
    if (typeof updateLevelUI === 'function') updateLevelUI();
  }
}

// =============================================
// NOTIFICATIONS (2.5) — Banner & Admin
// =============================================
let activeNotifications = [];
let notifUnsubscribe = null;
let adminNotifHistoryUnsubscribe = null;
let adminNotificationHistory = [];
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

  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true || appData.userRank === 'admin' || appData.userRank === 'mod';

  // Cleanup old listener
  if (notifUnsubscribe) notifUnsubscribe();
  if (adminNotifHistoryUnsubscribe) {
    adminNotifHistoryUnsubscribe();
    adminNotifHistoryUnsubscribe = null;
  }

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
      bSnap.forEach(doc => {
        const d = doc.data();
        const ts = d.timestamp || (d.createdAt ? (typeof d.createdAt.toMillis === 'function' ? d.createdAt.toMillis() : new Date(d.createdAt.seconds * 1000).getTime()) : Date.now());
        all.push({ id: doc.id, ...d, timestamp: ts, scope: 'broadcast' });
      });
      pSnap.forEach(doc => {
        const d = doc.data();
        const ts = d.timestamp || (d.createdAt ? (typeof d.createdAt.toMillis === 'function' ? d.createdAt.toMillis() : new Date(d.createdAt.seconds * 1000).getTime()) : Date.now());
        all.push({ id: doc.id, ...d, timestamp: ts, scope: 'personal' });
      });
      
      // Sort by timestamp
      all.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      
      // Filter out expired notifications, but keep comment replies only if they are unread
      let filtered = all.filter(n => {
        if (n.type === 'reply') {
          return !__isNotifRead(n);
        }
        if (n.expiry && Date.now() >= n.expiry) return false;
        return true;
      });

      // De-duplicate: if title and body are identical, only keep the first (most recent) one
      const seen = new Set();
      filtered = filtered.filter(n => {
        const bodyContent = n.body || n.message || '';
        const uniqueKey = `${n.title || ''}|${bodyContent}`;
        if (seen.has(uniqueKey)) {
          return false;
        }
        seen.add(uniqueKey);
        return true;
      });

      activeNotifications = filtered;
      renderNotificationList();
      updateNotifBadge();
      renderAdminNotificationHistory();

      const activeBroadcasts = all.filter(n => n.scope === 'broadcast' && (!n.expiry || Date.now() < n.expiry));
      if (activeBroadcasts.length > 0) {
        const latest = activeBroadcasts[0];
        const dismissed = localStorage.getItem('dismissed_banner_' + latest.id);
        if (!dismissed) {
          showPersistentBanner(latest);
        }
      } else {
        const banner = document.getElementById('notifBanner');
        if (banner && !banner.dataset.temp) banner.style.display = 'none';
      }
    });
  };

  // Set up listeners for real-time updates
  let prevUnreadCount = 0;
  
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

  const unsub2 = personalRef.onSnapshot(snap => {
    let hasNewUnread = false;
    snap.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data();
        const isNew = (Date.now() - data.timestamp) < 10000; // Last 10 seconds
        if (isNew && !data.read) {
          hasNewUnread = true;
        }
      }
    });
    
    syncNotifs();
    
    if (hasNewUnread) {
      const popup = document.getElementById('newNotifPopup');
      const textEl = document.getElementById('newNotifPopupText');
      if (popup && textEl) {
        const unreadCount = activeNotifications.filter(n => !__isNotifRead(n)).length;
        textEl.textContent = unreadCount > 1 ? `${unreadCount} yeni bildiriminiz var` : `1 yeni bildiriminiz var`;
        popup.style.display = 'block';
        setTimeout(() => { popup.style.display = 'none'; }, 6000);
      }
    }
  });

  let unsub3 = null;
  if (isAdmin) {
    unsub3 = db.collection('admin_notifications').orderBy('timestamp', 'desc').limit(25).onSnapshot(snap => {
      adminNotificationHistory = snap.docs.map(doc => ({ id: doc.id, ...(doc.data() || {}) }));
      renderAdminNotificationHistory();
    }, err => {
      console.error('Admin notification history listener failed:', err);
      adminNotificationHistory = [];
      renderAdminNotificationHistory();
    });
    adminNotifHistoryUnsubscribe = unsub3;
  }
  notifUnsubscribe = () => {
    unsub1();
    unsub2();
    if (unsub3) unsub3();
  };
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

function __formatAdminHistoryTarget(item) {
  if (!item) return 'Bilinmiyor';
  if (item.recipientType === 'all' || item.targetScope === 'broadcast') return 'Tüm Kullanıcılar';
  if (item.targetUid) return `UID: ${item.targetUid}`;
  return 'Belirli Kullanıcı';
}

window.markAllNotificationsAsRead = function() {
  if (!currentUser) return;

  // Dismiss broadcasts
  const broadcasts = activeNotifications.filter(n => n.scope === 'broadcast');
  const broadcastMaxTs = Math.max(0, ...broadcasts.map(n => n.timestamp || 0));
  if (broadcastMaxTs > 0) __setBroadcastLastRead(broadcastMaxTs);

  // Fetch and delete all personal notifications
  db.collection(`users/${currentUser.uid}/notifications`).get().then(snap => {
    if (snap.empty) {
      showToast('Tüm bildirimler silindi.', 'success');
      return;
    }

    const batch = db.batch();
    snap.forEach(doc => {
      batch.delete(doc.ref);
    });

    return batch.commit().then(() => {
      showToast('Tüm bildirimler silindi.', 'success');
    });
  }).catch(e => {
    console.error('Delete all notifications failed:', e);
    showToast('Bildirimler silinirken hata oluştu.', 'error');
  });
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
    const icon = n.icon || (n.type === 'broadcast' ? '📢' : '🔔');
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
  
  const target = activeNotifications.find(n => n.id === id && n.scope === scope);
  if (!target) return;

  if (scope === 'broadcast') {
    db.doc(`notifications/${id}`).delete().then(() => {
      showToast('Bildirim silindi.', 'success');
    }).catch(e => console.error('Delete notif failed:', e));
  } else {
    const targetBody = target.body || target.message || '';
    
    // Query and delete all matching duplicates from Firestore
    db.collection(`users/${currentUser.uid}/notifications`)
      .where('title', '==', target.title)
      .get()
      .then(snap => {
        const batch = db.batch();
        let deletedCount = 0;
        snap.forEach(doc => {
          const d = doc.data();
          const bodyContent = d.body || d.message || '';
          if (bodyContent === targetBody) {
            batch.delete(doc.ref);
            deletedCount++;
          }
        });
        if (deletedCount > 0) {
          return batch.commit().then(() => {
            showToast('Bildirim silindi.', 'success');
          });
        } else {
          // Fallback if not found
          return db.doc(`users/${currentUser.uid}/notifications/${id}`).delete().then(() => {
            showToast('Bildirim silindi.', 'success');
          });
        }
      })
      .catch(e => {
        console.error('Delete notification failed:', e);
        // Fallback delete
        db.doc(`users/${currentUser.uid}/notifications/${id}`).delete().then(() => {
          showToast('Bildirim silindi.', 'success');
        }).catch(err => console.error('Fallback delete failed:', err));
      });
  }
};

function updateNotifBadge() {
  const badge = document.getElementById('notifBadge');
  if (!badge) return;
  const unreadCount = activeNotifications.filter(n => !__isNotifRead(n)).length;
  if (unreadCount > 0) {
    badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function showPersistentBanner(data) {
  const banner = document.getElementById('notifBanner');
  const title = document.getElementById('notifBannerTitle');
  const body = document.getElementById('notifBannerBody');
  if (!banner || !title || !body) return;

  title.textContent = data.title;
  body.textContent = data.body || data.message || '';
  banner.style.display = 'flex';
  banner.getBoundingClientRect(); // trigger reflow
  banner.classList.add('notif-banner-in');
  banner.classList.remove('notif-banner-out');
  banner.dataset.notifId = data.id || '';
  banner.dataset.temp = '';

  // Auto-hide persistent banner after 4s as well so it doesn't block the UI forever
  clearTimeout(window.notifBannerTimer);
  window.notifBannerTimer = setTimeout(() => {
    if (banner.dataset.notifId === data.id && !banner.dataset.temp) {
      banner.classList.remove('notif-banner-in');
      banner.classList.add('notif-banner-out');
      setTimeout(() => {
        if (banner.dataset.notifId === data.id && !banner.dataset.temp) {
          banner.style.display = 'none';
        }
      }, 400);
    }
  }, 4000);
}

function showSystemNotification(data) {
  const banner = document.getElementById('notifBanner');
  const title = document.getElementById('notifBannerTitle');
  const body = document.getElementById('notifBannerBody');
  if (!banner || !title || !body) return;

  title.textContent = data.title;
  body.textContent = data.body;
  banner.style.display = 'flex';
  banner.getBoundingClientRect(); // trigger reflow
  banner.classList.add('notif-banner-in');
  banner.classList.remove('notif-banner-out');
  banner.dataset.temp = 'true';
  
  // Auto-hide after 4s
  clearTimeout(window.notifBannerTimer);
  window.notifBannerTimer = setTimeout(() => {
    if (banner.dataset.temp === 'true') {
      banner.classList.remove('notif-banner-in');
      banner.classList.add('notif-banner-out');
      setTimeout(() => {
        if (banner.dataset.temp === 'true') {
          banner.style.display = 'none';
          banner.dataset.temp = '';
        }
      }, 400);
    }
  }, 4000);
}

let __pendingNotifDetail = null;

window.openNotifFromList = function(id, scope) {
  if (!currentUser) return;
  const n = activeNotifications.find(x => x.id === id && x.scope === scope);
  if (!n) return;
  
  // Mark as read
  if (scope === 'broadcast') {
    if ((n.timestamp || 0) > __getBroadcastLastRead()) __setBroadcastLastRead(n.timestamp);
    n.read = true;
  } else {
    const path = `users/${currentUser.uid}/notifications/${id}`;
    if (typeof isFirebaseConfigured !== 'undefined' && isFirebaseConfigured && db) {
      db.doc(path).update({ read: true }).catch(e => console.error('Mark read failed', e));
    }
    n.read = true;
  }
  renderNotificationList();
  updateNotifBadge();

  // Direct navigation for comment replies
  if (n.type === 'reply' || n.link === 'comments') {
    const targetId = n.targetCommentId || n.relatedCommentId || null;
    if (targetId) {
      window.pendingCommentHighlightId = targetId;
    }
    navigateTo('comments');
    return;
  }

  // Fallback to modal for other notifications
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
  }
};

/** @deprecated — liste öğesi openNotifFromList kullanır */
window.markAsRead = function(id, scope) {
  openNotifFromList(id, scope);
};

window.closeNotifBanner = function() {
  const banner = document.getElementById('notifBanner');
  if (banner) {
    clearTimeout(window.notifBannerTimer);
    banner.classList.remove('notif-banner-in');
    banner.classList.add('notif-banner-out');
    setTimeout(() => {
      banner.style.display = 'none';
    }, 400);
    if (banner.dataset.notifId) {
      localStorage.setItem('dismissed_banner_' + banner.dataset.notifId, 'true');
    }
  }
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
    createdAt: new Date(),
    expiry: Date.now() + expiryMs,
    read: false,
    type: recipient === 'all' ? 'broadcast' : 'personal',
    sender: currentUser ? currentUser.displayName || 'Admin' : 'Admin'
  };

  const collection = recipient === 'all' ? 'notifications' : `users/${uid}/notifications`;
  
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
      { id: 'bench_50',  name: '50 kg Bench',      exercise: 'Barbell Bench Press', target: 50,  desc: 'Bench Press ile 50 kg kaldır.' },
      { id: 'bench_60',  name: 'Isınma Bitti',     exercise: 'Barbell Bench Press', target: 60,  desc: 'Bench Press ile 60 kg kaldır.' },
      { id: 'bench_70',  name: 'Demirle Dans',     exercise: 'Barbell Bench Press', target: 70,  desc: 'Bench Press ile 70 kg kaldır.' },
      { id: 'bench_80',  name: '80 kg Bench',      exercise: 'Barbell Bench Press', target: 80,  desc: 'Bench Press ile 80 kg kaldır.' },
      { id: 'bench_90',  name: 'Ciddi Seviye',     exercise: 'Barbell Bench Press', target: 90,  desc: 'Bench Press ile 90 kg kaldır.' },
      { id: 'bench_100', name: '100 kg Bench',     exercise: 'Barbell Bench Press', target: 100, desc: 'Bench Press ile 100 kg kaldır.' },
      { id: 'bench_110', name: 'Kaldıraç Ustası',  exercise: 'Barbell Bench Press', target: 110, desc: 'Bench Press ile 110 kg kaldır.' },
      { id: 'bench_120', name: 'Göğüs Kafesi Kralı', exercise: 'Barbell Bench Press', target: 120, desc: 'Bench Press ile 120 kg kaldır.' },
      { id: 'bench_130', name: 'Yerçekimi İnkarcısı', exercise: 'Barbell Bench Press', target: 130, desc: 'Bench Press ile 130 kg kaldır.' },
      { id: 'bench_150', name: 'Titanik Güç',      exercise: 'Barbell Bench Press', target: 150, desc: 'Bench Press ile 150 kg kaldır.' },
    ]
  },
  {
    id: 'squat_group', label: 'Squat', icon: 'barbell',
    badges: [
      { id: 'squat_60',  name: 'Temel Atma',       exercise: 'Squat', target: 60,  desc: 'Squat ile 60 kg kaldır.' },
      { id: 'squat_80',  name: '80 kg Squat',      exercise: 'Squat', target: 80,  desc: 'Squat ile 80 kg kaldır.' },
      { id: 'squat_90',  name: 'Bacak Günü Savaşçısı', exercise: 'Squat', target: 90,  desc: 'Squat ile 90 kg kaldır.' },
      { id: 'squat_100', name: '100 kg Squat',     exercise: 'Squat', target: 100, desc: 'Squat ile 100 kg kaldır.' },
      { id: 'squat_110', name: 'Çelik Bacaklar',   exercise: 'Squat', target: 110, desc: 'Squat ile 110 kg kaldır.' },
      { id: 'squat_120', name: 'Sarsılmaz Duruş',  exercise: 'Squat', target: 120, desc: 'Squat ile 120 kg kaldır.' },
      { id: 'squat_130', name: 'Atlas\'ın Yükü',   exercise: 'Squat', target: 130, desc: 'Squat ile 130 kg kaldır.' },
      { id: 'squat_140', name: '140 kg Squat',     exercise: 'Squat', target: 140, desc: 'Squat ile 140 kg kaldır.' },
      { id: 'squat_150', name: 'Dağ Deviren',      exercise: 'Squat', target: 150, desc: 'Squat ile 150 kg kaldır.' },
      { id: 'squat_160', name: 'Goril Gücü',       exercise: 'Squat', target: 160, desc: 'Squat ile 160 kg kaldır.' },
      { id: 'squat_180', name: 'Beton Kırıcı',     exercise: 'Squat', target: 180, desc: 'Squat ile 180 kg kaldır.' },
      { id: 'squat_200', name: 'Yarı Tanrı',       exercise: 'Squat', target: 200, desc: 'Squat ile 200 kg kaldır.' },
    ]
  },
  {
    id: 'deadlift_group', label: 'Deadlift', icon: 'barbell',
    badges: [
      { id: 'deadlift_60',  name: 'Yerden Kesme',     exercise: 'Romanian Deadlift', target: 60,  desc: 'Deadlift ile 60 kg kaldır.' },
      { id: 'deadlift_80',  name: '80 kg Deadlift',   exercise: 'Romanian Deadlift', target: 80,  desc: 'Deadlift ile 80 kg kaldır.' },
      { id: 'deadlift_90',  name: 'Tutuş Gücü',       exercise: 'Romanian Deadlift', target: 90,  desc: 'Deadlift ile 90 kg kaldır.' },
      { id: 'deadlift_100', name: '100 kg Deadlift',  exercise: 'Romanian Deadlift', target: 100, desc: 'Deadlift ile 100 kg kaldır.' },
      { id: 'deadlift_120', name: 'Sırtın İntikamı',  exercise: 'Romanian Deadlift', target: 120, desc: 'Deadlift ile 120 kg kaldır.' },
      { id: 'deadlift_140', name: 'Demir Koparan',    exercise: 'Romanian Deadlift', target: 140, desc: 'Deadlift ile 140 kg kaldır.' },
      { id: 'deadlift_150', name: '150 kg Deadlift',  exercise: 'Romanian Deadlift', target: 150, desc: 'Deadlift ile 150 kg kaldır.' },
      { id: 'deadlift_160', name: 'Ayı Boğan',        exercise: 'Romanian Deadlift', target: 160, desc: 'Deadlift ile 160 kg kaldır.' },
      { id: 'deadlift_180', name: 'Belkemiği',        exercise: 'Romanian Deadlift', target: 180, desc: 'Deadlift ile 180 kg kaldır.' },
      { id: 'deadlift_200', name: 'Yer Sarsıntısı',   exercise: 'Romanian Deadlift', target: 200, desc: 'Deadlift ile 200 kg kaldır.' },
      { id: 'deadlift_220', name: 'Herkül\'ün Mirası',exercise: 'Romanian Deadlift', target: 220, desc: 'Deadlift ile 220 kg kaldır.' },
    ]
  },
  {
    id: 'lat_group', label: 'Lat Pulldown', icon: 'machine',
    badges: [
      { id: 'lat_50',  name: '50 kg Lat',        exercise: 'Lat Pulldown', target: 50,  desc: 'Lat Pulldown ile 50 kg çek.' },
      { id: 'lat_60',  name: 'Kanat Çırpınışı',  exercise: 'Lat Pulldown', target: 60,  desc: 'Lat Pulldown ile 60 kg çek.' },
      { id: 'lat_70',  name: 'Sırtlan',          exercise: 'Lat Pulldown', target: 70,  desc: 'Lat Pulldown ile 70 kg çek.' },
      { id: 'lat_80',  name: '80 kg Lat',        exercise: 'Lat Pulldown', target: 80,  desc: 'Lat Pulldown ile 80 kg çek.' },
      { id: 'lat_90',  name: 'Geniş Omuzlar',    exercise: 'Lat Pulldown', target: 90,  desc: 'Lat Pulldown ile 90 kg çek.' },
      { id: 'lat_100', name: 'V-Taper Hayali',   exercise: 'Lat Pulldown', target: 100, desc: 'Lat Pulldown ile 100 kg çek.' },
      { id: 'lat_110', name: 'Kartal Kanatları', exercise: 'Lat Pulldown', target: 110, desc: 'Lat Pulldown ile 110 kg çek.' },
      { id: 'lat_120', name: 'Makine Kırıcı',    exercise: 'Lat Pulldown', target: 120, desc: 'Lat Pulldown ile 120 kg çek.' },
    ]
  },
  {
    id: 'biceps_group', label: 'Biceps Curl', icon: 'dumbbell',
    badges: [
      { id: 'biceps_10', name: 'İlk Şişkinlik',  exercise: 'Seated DB Biceps Curl', target: 10, desc: 'Biceps Curl ile 10 kg kaldır.' },
      { id: 'biceps_15', name: 'Damar Yolculuğu',exercise: 'Seated DB Biceps Curl', target: 15, desc: 'Biceps Curl ile 15 kg kaldır.' },
      { id: 'biceps_20', name: '20 kg Biceps',   exercise: 'Seated DB Biceps Curl', target: 20, desc: 'Biceps Curl ile 20 kg kaldır.' },
      { id: 'biceps_25', name: 'Tişört Yırtan',  exercise: 'Seated DB Biceps Curl', target: 25, desc: 'Biceps Curl ile 25 kg kaldır.' },
      { id: 'biceps_30', name: '30 kg Biceps',   exercise: 'Seated DB Biceps Curl', target: 30, desc: 'Biceps Curl ile 30 kg kaldır.' },
      { id: 'biceps_35', name: 'Demir Kollu',    exercise: 'Seated DB Biceps Curl', target: 35, desc: 'Biceps Curl ile 35 kg kaldır.' },
      { id: 'biceps_40', name: 'Gülle Biceps',   exercise: 'Seated DB Biceps Curl', target: 40, desc: 'Biceps Curl ile 40 kg kaldır.' },
      { id: 'biceps_45', name: 'Dağ Tepesi',     exercise: 'Seated DB Biceps Curl', target: 45, desc: 'Biceps Curl ile 45 kg kaldır.' },
    ]
  },
  {
    id: 'legpress_group', label: 'Leg Press', icon: 'machine',
    badges: [
      { id: 'legpress_100', name: 'İlk İtiş',           exercise: 'Leg Press', target: 100, desc: 'Leg Press ile 100 kg it.' },
      { id: 'legpress_150', name: 'Bacak Günü Aşığı',   exercise: 'Leg Press', target: 150, desc: 'Leg Press ile 150 kg it.' },
      { id: 'legpress_200', name: 'Dört Tekerlek',      exercise: 'Leg Press', target: 200, desc: 'Leg Press ile 200 kg it.' },
      { id: 'legpress_300', name: 'Tank İten',          exercise: 'Leg Press', target: 300, desc: 'Leg Press ile 300 kg it.' },
      { id: 'legpress_400', name: 'Gezegen İtici',      exercise: 'Leg Press', target: 400, desc: 'Leg Press ile 400 kg it.' },
    ]
  },
  {
    id: 'shoulder_group', label: 'Overhead Press', icon: 'barbell',
    badges: [
      { id: 'ohp_40',  name: 'Gökyüzüne Doğru',  exercise: 'Overhead Press', target: 40,  desc: 'Overhead Press ile 40 kg it.' },
      { id: 'ohp_60',  name: 'Omuz Başları',     exercise: 'Overhead Press', target: 60,  desc: 'Overhead Press ile 60 kg it.' },
      { id: 'ohp_80',  name: 'Zirveye Ulaşan',   exercise: 'Overhead Press', target: 80,  desc: 'Overhead Press ile 80 kg it.' },
      { id: 'ohp_100', name: 'Atlas Duruşu',     exercise: 'Overhead Press', target: 100, desc: 'Overhead Press ile 100 kg it.' },
    ]
  },
  {
    id: 'single_group', label: 'Diğer Hareketler', icon: 'dumbbell',
    badges: [
      { id: 'hammer_25',        name: '25 kg Hammer Curl',   exercise: 'Cross-Body Hammer Curl',     target: 25,  desc: 'Hammer Curl ile 25 kg kaldır.' },
      { id: 'triceps_40',       name: '40 kg Pushdown',      exercise: 'Straight-Bar Pushdown',      target: 40,  desc: 'Straight-Bar Pushdown ile 40 kg it.' },
      { id: 'triceps_60',       name: '60 kg Pushdown',      exercise: 'Straight-Bar Pushdown',      target: 60,  desc: 'Straight-Bar Pushdown ile 60 kg it.' },
      { id: 'shoulder_50',      name: '50 kg Shoulder',      exercise: 'Cable Shoulder',             target: 50,  desc: 'Cable Shoulder ile 50 kg çek.' },
      { id: 'crunch_60',        name: '60 kg Crunch',        exercise: 'Straight Bar Cable Crunch',  target: 60,  desc: 'Cable Crunch ile 60 kg çek.' },
      { id: 'incline_bench_60', name: '60 kg İncline',       exercise: 'İncline Bench Press',        target: 60,  desc: 'İncline ile 60 kg kaldır.' },
      { id: 'pecdeck_80',       name: '80 kg Pec Deck',      exercise: 'Pec Deck Fly',               target: 80,  desc: 'Pec Deck Fly ile 80 kg sıkıştır.' },
      { id: 'cablecross_40',    name: '40 kg Crossover',     exercise: 'Cable Crossover',            target: 40,  desc: 'Cable Crossover ile 40 kg çek.' },
    ]
  },
  {
    id: 'streak_group', label: 'Seri / Devam', icon: 'streak',
    badges: [
      { id: 'streak_3',   name: '3 Günlük Seri',    exercise: null, target: 3,   desc: '3 gün antrenman yap.' },
      { id: 'streak_7',   name: '7 Günlük Seri',    exercise: null, target: 7,   desc: '7 gün üst üste antrenman yap.' },
      { id: 'streak_14',  name: 'İstikrar Timsali', exercise: null, target: 14,  desc: '14 gün üst üste antrenman yap.' },
      { id: 'streak_21',  name: 'Alışkanlık Canavarı', exercise: null, target: 21, desc: '21 gün üst üste antrenman yap.' },
      { id: 'streak_30',  name: 'Aylık Şövalye',    exercise: null, target: 30,  desc: '30 gün üst üste antrenman yap.' },
      { id: 'streak_50',  name: 'Disiplin Elçisi',  exercise: null, target: 50,  desc: '50 gün üst üste antrenman yap.' },
      { id: 'streak_100', name: 'Terminatör',       exercise: null, target: 100, desc: '100 gün üst üste antrenman yap.' },
      { id: 'streak_365', name: 'Efsanevi Yıl',     exercise: null, target: 365, desc: '365 gün üst üste antrenman yap.' },
    ]
  },
];

// Flat list for compatibility
const ACHIEVEMENT_DEFS = ACHIEVEMENT_GROUPS.flatMap(g => g.badges.map(b => ({...b, icon: g.icon})));

function checkAchievements(exercise, weight, reps = 1) {
  if (!appData.achievements) appData.achievements = {};
  
  let score = parseFloat(weight) || 0;
  if (typeof calculateStrengthScore === 'function') {
    score = calculateStrengthScore(score, reps);
  } else {
    score = score * (1 + reps / 30);
  }

  const newlyUnlocked = [];
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) return;
    if (appData.achievements[def.id]) return;
    if (def.exercise === exercise && score >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      newlyUnlocked.push(def);
    }
  });
  if (newlyUnlocked.length > 0) {
    saveData();
    // Show popups sequentially with delay
    newlyUnlocked.forEach((def, i) => {
      setTimeout(() => {
        showAchievementPopup(def);
        renderAchievements();
        if (typeof renderProfilePage === 'function') renderProfilePage();
      }, i * 3500);
    });
  }
}

/**
 * Tüm workout loglarını tarayarak tüm başarımları kontrol eder.
 * Her ağırlık kaydedilince ve sayfa yüklenince çağrılır.
 * Yeni açılan başarımları popup ile gösterir.
 */
function checkAllAchievementsFromLogs() {
  if (!appData.achievements) appData.achievements = {};

  // Build max weight per exercise from all logs
  const maxWeights = {};
  Object.values(appData.workoutLogs || {}).forEach(dayLogs => {
    (dayLogs || []).forEach(log => {
      const ex = log.exercise;
      const w = parseFloat(log.weight) || 0;
      const r = parseInt(log.reps) || 0;
      
      let score = w;
      if (typeof calculateStrengthScore === 'function') {
        score = calculateStrengthScore(w, r);
      } else {
        score = w * (1 + r / 30);
      }
      
      if (!maxWeights[ex] || score > maxWeights[ex]) maxWeights[ex] = score;
    });
  });

  const newlyUnlocked = [];
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!def.exercise) return; // Streak achievements handled separately
    if (appData.achievements[def.id]) return; // Already unlocked
    const maxW = maxWeights[def.exercise] || 0;
    if (maxW >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      newlyUnlocked.push(def);
    }
  });

  if (newlyUnlocked.length > 0) {
    saveData();
    // Show each popup sequentially (300ms delay between each)
    newlyUnlocked.forEach((def, i) => {
      setTimeout(() => {
        showAchievementPopup(def);
      }, i * 3500);
    });
    // Re-render achievements page
    if (typeof renderAchievements === 'function') {
      setTimeout(() => renderAchievements(), 100);
    }
    if (typeof renderProfilePage === 'function') {
      setTimeout(() => renderProfilePage(), 200);
    }
  }
}

function checkStreakAchievements(streak) {
  if (!appData.achievements) appData.achievements = {};
  const newlyUnlocked = [];
  ACHIEVEMENT_DEFS.forEach(def => {
    if (def.exercise) return;
    if (appData.achievements[def.id]) return;
    if (streak >= def.target) {
      appData.achievements[def.id] = { unlockedAt: Date.now() };
      newlyUnlocked.push(def);
    }
  });
  if (newlyUnlocked.length > 0) {
    saveData();
    newlyUnlocked.forEach((def, i) => {
      setTimeout(() => {
        showAchievementPopup(def);
        renderAchievements();
        if (typeof renderProfilePage === 'function') renderProfilePage();
      }, i * 3500);
    });
  }
}

function showAchievementPopup(def) {
  const popup = document.getElementById('achievementPopup');
  if (!popup) return;
  document.getElementById('achievementIcon').innerHTML = ACH_ICONS[def.icon] || ACH_ICONS['star'];
  document.getElementById('achievementTitle').textContent = '🏆 ' + def.name;
  document.getElementById('achievementDesc').textContent = def.desc + ' 🚀';
  
  // Sitedeki bildirimler kısmına başarım bildirimi ekle (15 dakika geçerli)
  if (typeof currentUser !== 'undefined' && currentUser && typeof db !== 'undefined') {
    db.collection(`users/${currentUser.uid}/notifications`).add({
      title: 'Başarım Tamamlandı!',
      body: `Tebrikler! "${def.name}" başarısını kazandınız.`,
      timestamp: Date.now(),
      createdAt: new Date(),
      expiry: Date.now() + 15 * 60 * 1000, // 15 minutes
      read: false,
      type: 'achievement',
      icon: '🏆'
    }).catch(err => console.error('Achievement notification error:', err));
  }

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
  
  // Sync with all-time progress stats
  let anyNewAchievement = false;
  const allStats = typeof computeExerciseStats === 'function' ? computeExerciseStats() : [];
  ACHIEVEMENT_DEFS.forEach(def => {
    if (def.exercise && !appData.achievements[def.id]) {
      const exStat = allStats.find(s => s.name === def.exercise);
      if (exStat && exStat.prWeight >= def.target) {
        appData.achievements[def.id] = { unlockedAt: Date.now() };
        anyNewAchievement = true;
      }
    }
  });
  if (anyNewAchievement) saveData();

  if (!window._achExpanded) window._achExpanded = {};
  const expanded = window._achExpanded;

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

    const toggleFn = `(function(){if(!window._achExpanded)window._achExpanded={};window._achExpanded['${group.id}']=!window._achExpanded['${group.id}'];renderAchievements();})()`;

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

// ============================================================
// ZYRO GELİŞİM (BEFORE/AFTER & MEASUREMENTS) — Zyro Panel v3
// Connected directly to appData.progressImages & appData.bodyMeasurements
// ============================================================
const POSE_NAMES = {
  tr: { front: 'Ön', side: 'Yan', back: 'Arka' },
  en: { front: 'Front', side: 'Side', back: 'Back' }
};

const MEASUREMENT_FIELDS = [
  ['chest', 'Göğüs', 'Chest'],
  ['shoulder', 'Omuz', 'Shoulder'],
  ['waist', 'Bel', 'Waist'],
  ['hip', 'Kalça', 'Hip'],
  ['armR', 'Sağ kol', 'Right arm'],
  ['armL', 'Sol kol', 'Left arm'],
  ['thighR', 'Sağ bacak', 'Right leg'],
  ['thighL', 'Sol bacak', 'Left leg'],
  ['neck', 'Boyun', 'Neck']
];

let _baPoseFilter = 'all';
let _baCompareMode = false;
let _baSelectedPhotos = [];
let _baActiveMeasureField = 'chest';
let _baDraftImage = null;
let _baEventsInitialized = false;

function _formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const d = new Date(+parts[0], +parts[1] - 1, +parts[2]);
  const monthsTr = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const m = currentLang === 'tr' ? monthsTr : monthsEn;
  return d.getDate() + ' ' + (m[d.getMonth()] || '') + ' ' + d.getFullYear();
}

function _formatWeightNum(n) {
  if (n == null || isNaN(n)) return '';
  return String(+n.toFixed(1)).replace('.', currentLang === 'tr' ? ',' : '.');
}

function _shrinkPhotoFile(file, max = 1100) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const ratio = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('IMG_ERROR'));
    };
    img.src = url;
  });
}

function _drawSvgLineChart(el, pts, h, anim) {
  if (!el) return;
  const W = Math.max(el.clientWidth, 260), pl = 42, pr = 14, pt = 14, pb = 28;
  const t0 = pts[0].t, t1 = pts[pts.length - 1].t, ys = pts.map(p => p.y);
  let mn = Math.min(...ys), mx = Math.max(...ys);
  const pad = (mx - mn || 1) * 0.25;
  mn -= pad; mx += pad;
  const X = t => pl + (t - t0) / (t1 - t0 || 1) * (W - pl - pr);
  const Y = v => pt + (1 - (v - mn) / (mx - mn)) * (h - pt - pb);
  const P = pts.map(p => [X(p.t), Y(p.y)]);
  let d = `M${P[0][0]},${P[0][1]}`;
  for (let i = 1; i < P.length; i++) {
    const m = (P[i - 1][0] + P[i][0]) / 2;
    d += ` C${m},${P[i - 1][1]} ${m},${P[i][1]} ${P[i][0]},${P[i][1]}`;
  }
  let g = '';
  for (let i = 0; i < 4; i++) {
    const v = mn + (mx - mn) * i / 3, y = Y(v);
    g += `<line x1="${pl}" x2="${W - pr}" y1="${y}" y2="${y}" stroke="rgba(255,255,255,.06)"/><text class="ax" x="${pl - 8}" y="${y + 4}" text-anchor="end">${_formatWeightNum(v)}</text>`;
  }
  const L = P[P.length - 1];
  const dots = (P.length <= 14 ? P : [L]).map(p => `<circle class="dot" cx="${p[0]}" cy="${p[1]}" r="3.5"/>`).join('');
  el.innerHTML = `<svg class="ch${anim ? ' wipe' : ''}" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}" role="img" aria-label="Zaman grafiği"><defs><linearGradient id="ga${h}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fb3cc" stop-opacity=".32"/><stop offset="1" stop-color="#8fb3cc" stop-opacity="0"/></linearGradient></defs>${g}
  <path d="${d} L${L[0]},${h - pb} L${P[0][0]},${h - pb}Z" fill="url(#ga${h})"/><path class="line" d="${d}"/>${dots}
  <text class="ax" x="${pl}" y="${h - 6}">${pts[0].label}</text><text class="ax" x="${W - pr}" y="${h - 6}" text-anchor="end">${pts[pts.length - 1].label}</text></svg>`;
}

// Confirmation helper for modals
window.askConfirm = function(t, s) {
  return new Promise(r => {
    const d = document.getElementById('dlgC');
    if (!d || typeof d.showModal !== 'function') {
      r(confirm(t + (s ? '\n\n' + s : '')));
      return;
    }
    const cT = document.getElementById('cT');
    const cS = document.getElementById('cS');
    if (cT) cT.textContent = t;
    if (cS) cS.textContent = s || '';
    d.returnValue = '';
    d.onclose = () => r(d.returnValue === 'ok');
    d.showModal();
  });
};

document.addEventListener('click', e => {
  const c = e.target.closest('[data-close]');
  if (c) {
    const dlg = c.closest('dialog');
    if (dlg) dlg.close();
  }
  if (e.target.tagName === 'DIALOG') {
    e.target.close();
  }
});

function initBeforeAfter() {
  if (_baEventsInitialized) return;
  _baEventsInitialized = true;

  const bcmp = document.getElementById('bcmp');
  const bai = document.getElementById('bai');
  const badd = document.getElementById('badd');
  const pf = document.getElementById('pf');
  const dr = document.getElementById('drop');
  const fP = document.getElementById('fP');
  const madd = document.getElementById('madd');
  const fM = document.getElementById('fM');

  if (bcmp) {
    bcmp.addEventListener('click', () => {
      _baCompareMode = !_baCompareMode;
      if (!_baCompareMode) _baSelectedPhotos = [];
      renderProgressPhotos();
    });
  }

  if (bai) {
    bai.addEventListener('click', async () => {
      const photos = (appData.progressImages || []).slice().sort((a, b) => (a.date || a.d || '').localeCompare(b.date || b.d || ''));
      if (!photos.length) {
        showToast(currentLang === 'tr' ? 'Önce fotoğraf ekle' : 'Add photo first', 'error');
        return;
      }
      const box = document.getElementById('ai');
      if (!box) return;

      let list = [];
      if (_baSelectedPhotos.length === 2) {
        list = _baSelectedPhotos.map(id => photos.find(p => String(p.id) === id)).filter(Boolean);
      } else if (photos.length > 1) {
        list = [photos[0], photos[photos.length - 1]];
      } else {
        list = [photos[0]];
      }

      box.hidden = false;
      box.className = 'panel2';
      box.innerHTML = `<span class="spin"></span>${currentLang === 'tr' ? 'Fotoğrafların analiz ediliyor…' : 'Analyzing photos…'}`;
      bai.disabled = true;

      try {
        const imagesBase64 = list.map(p => p.image || p.src).filter(Boolean);
        if (typeof window.geminiAnalyzeImages === 'function' && imagesBase64.length) {
          const res = await window.geminiAnalyzeImages(imagesBase64);
          let summary = '';
          let points = [];
          if (typeof res === 'object' && res !== null) {
            summary = res.comparison_and_suggestions || res.summary || '';
            if (res.photo1_analysis) points.push((currentLang === 'tr' ? '1. Fotoğraf: ' : 'Photo 1: ') + res.photo1_analysis);
            if (res.photo2_analysis) points.push((currentLang === 'tr' ? '2. Fotoğraf: ' : 'Photo 2: ') + res.photo2_analysis);
          } else {
            summary = String(res || '');
          }
          box.innerHTML = `<b style="font:500 18px var(--d)">${currentLang === 'tr' ? 'AI analizi' : 'AI analysis'}</b>
            <p style="color:var(--text);margin-top:8px">${escapeHtml(summary)}</p>
            ${points.length ? `<ul>${points.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` : ''}
            <small>${currentLang === 'tr' ? 'AI analizi bilgilendirme amaçlıdır, tıbbi tavsiye değildir.' : 'AI analysis is for informational purposes, not medical advice.'}</small>`;
        } else {
          box.innerHTML = currentLang === 'tr' ? 'AI analiz servisi bu önizlemede bağlı değil.' : 'AI analysis service is not connected in this preview.';
        }
      } catch (e) {
        console.warn('AI analysis error:', e);
        box.innerHTML = currentLang === 'tr' ? 'Analiz şu an yapılamadı, biraz sonra tekrar dene.' : 'Analysis could not be performed right now, please try again.';
      } finally {
        bai.disabled = false;
      }
    });
  }

  if (badd) {
    badd.addEventListener('click', () => {
      _baDraftImage = null;
      if (fP) fP.reset();
      const pdt = document.getElementById('pdt');
      const perr = document.getElementById('perr');
      const prev = document.getElementById('prev');
      if (pdt) { pdt.value = todayStr(); pdt.max = todayStr(); }
      if (perr) perr.textContent = '';
      if (prev) prev.innerHTML = `<svg class="i" style="width:28px;height:28px"><use href="#zr-i-upl"/></svg><br>${currentLang === 'tr' ? 'Fotoğraf seç veya buraya bırak' : 'Select photo or drag here'}`;
      const dlgP = document.getElementById('dlgP');
      if (dlgP && typeof dlgP.showModal === 'function') dlgP.showModal();
    });
  }

  async function handleFilePick(f) {
    const perr = document.getElementById('perr');
    const prev = document.getElementById('prev');
    if (!f || !f.type.startsWith('image/')) {
      if (perr) perr.textContent = currentLang === 'tr' ? 'Lütfen bir görsel dosyası seç.' : 'Please select an image file.';
      return;
    }
    try {
      _baDraftImage = await _shrinkPhotoFile(f);
      if (prev) prev.innerHTML = `<img src="${_baDraftImage}" alt="Önizleme">`;
      if (perr) perr.textContent = '';
    } catch (e) {
      if (perr) perr.textContent = currentLang === 'tr' ? 'Görsel okunamadı, başka bir dosya dene.' : 'Could not read image, try another file.';
    }
  }

  if (pf) pf.addEventListener('change', e => handleFilePick(e.target.files[0]));
  if (dr) {
    dr.addEventListener('dragover', e => { e.preventDefault(); dr.classList.add('on'); });
    dr.addEventListener('dragleave', () => dr.classList.remove('on'));
    dr.addEventListener('drop', e => { e.preventDefault(); dr.classList.remove('on'); handleFilePick(e.dataTransfer.files[0]); });
  }

  if (fP) {
    fP.addEventListener('submit', async e => {
      e.preventDefault();
      const pdt = document.getElementById('pdt');
      const ppose = document.getElementById('ppose');
      const pkg = document.getElementById('pkg');
      const pnote = document.getElementById('pnote');
      const perr = document.getElementById('perr');
      const psave = document.getElementById('psave');

      const kgVal = pkg && pkg.value.trim() ? parseFloat(pkg.value.replace(',', '.')) : null;
      if (!_baDraftImage) {
        if (perr) perr.textContent = currentLang === 'tr' ? 'Önce bir fotoğraf seç.' : 'Select a photo first.';
        return;
      }
      if (!pdt || !pdt.value || pdt.value > todayStr()) {
        if (perr) perr.textContent = currentLang === 'tr' ? 'Geçerli bir tarih seç.' : 'Select a valid date.';
        return;
      }
      if (kgVal !== null && !(kgVal > 20 && kgVal < 400)) {
        if (perr) perr.textContent = currentLang === 'tr' ? 'Kiloyu 20–400 kg arasında gir.' : 'Enter weight between 20-400 kg.';
        return;
      }

      if (psave) psave.disabled = true;
      try {
        if (!appData.progressImages) appData.progressImages = [];
        const newPhoto = {
          id: Date.now(),
          src: _baDraftImage,
          image: _baDraftImage,
          d: pdt.value,
          date: pdt.value,
          pose: ppose ? ppose.value : 'front',
          kg: kgVal,
          weight: kgVal,
          note: pnote ? pnote.value.trim() : ''
        };
        appData.progressImages.push(newPhoto);
        saveData();
        const dlgP = document.getElementById('dlgP');
        if (dlgP) dlgP.close();
        renderProgressPhotos();
        showToast(currentLang === 'tr' ? 'Fotoğraf eklendi' : 'Photo added', 'success');
      } catch (x) {
        if (perr) perr.textContent = currentLang === 'tr' ? 'Kaydedilemedi, tekrar dene.' : 'Could not save, try again.';
      } finally {
        if (psave) psave.disabled = false;
      }
    });
  }

  // Measurements fields setup
  const mfs = document.getElementById('mfs');
  if (mfs && !mfs.children.length) {
    mfs.innerHTML = MEASUREMENT_FIELDS.map(([k, trLabel, enLabel]) => {
      const label = currentLang === 'tr' ? trLabel : enLabel;
      return `<div class="fld"><label for="m-${k}">${label} (cm)</label><input class="in" id="m-${k}" data-f="${k}" inputmode="decimal" placeholder="—"></div>`;
    }).join('');
  }

  if (madd) {
    madd.addEventListener('click', () => {
      if (fM) fM.reset();
      const mdt = document.getElementById('mdt');
      const merr = document.getElementById('merr');
      if (mdt) { mdt.value = todayStr(); mdt.max = todayStr(); }
      if (merr) merr.textContent = '';
      const dlgM = document.getElementById('dlgM');
      if (dlgM && typeof dlgM.showModal === 'function') dlgM.showModal();
    });
  }

  if (fM) {
    fM.addEventListener('submit', async e => {
      e.preventDefault();
      const mdt = document.getElementById('mdt');
      const merr = document.getElementById('merr');
      const msave = document.getElementById('msave');
      const v = {};
      let bad = false;

      document.querySelectorAll('#mfs [data-f]').forEach(i => {
        if (!i.value.trim()) return;
        const n = parseFloat(i.value.replace(',', '.'));
        if (n > 5 && n < 300) v[i.dataset.f] = n;
        else bad = true;
      });

      if (bad) {
        if (merr) merr.textContent = currentLang === 'tr' ? 'Ölçüleri 5–300 cm arasında gir.' : 'Enter measurements between 5-300 cm.';
        return;
      }
      if (!Object.keys(v).length) {
        if (merr) merr.textContent = currentLang === 'tr' ? 'En az bir ölçü gir.' : 'Enter at least one measurement.';
        return;
      }
      if (!mdt || !mdt.value || mdt.value > todayStr()) {
        if (merr) merr.textContent = currentLang === 'tr' ? 'Geçerli bir tarih seç.' : 'Select a valid date.';
        return;
      }

      if (msave) msave.disabled = true;
      try {
        if (!appData.bodyMeasurements) appData.bodyMeasurements = [];
        const entry = {
          id: Date.now(),
          date: mdt.value,
          d: mdt.value,
          v,
          chest: v.chest || 0,
          shoulder: v.shoulder || 0,
          waist: v.waist || 0,
          hip: v.hip || 0,
          arm: v.armR || v.armL || 0,
          leg: v.thighR || v.thighL || 0,
          neck: v.neck || 0
        };
        appData.bodyMeasurements.push(entry);
        saveData();
        const dlgM = document.getElementById('dlgM');
        if (dlgM) dlgM.close();
        renderBodyMeasurements();
        showToast(currentLang === 'tr' ? 'Ölçü eklendi' : 'Measurement added', 'success');
      } catch (x) {
        if (merr) merr.textContent = currentLang === 'tr' ? 'Kaydedilemedi, tekrar dene.' : 'Could not save, try again.';
      } finally {
        if (msave) msave.disabled = false;
      }
    });
  }

  // Delegated clicks for photo grid & measurements body
  const pgrid = document.getElementById('pgrid');
  if (pgrid) {
    pgrid.addEventListener('click', async e => {
      const delBtn = e.target.closest('[data-del]');
      if (delBtn) {
        e.stopPropagation();
        const id = delBtn.dataset.del;
        const ok = await window.askConfirm(
          currentLang === 'tr' ? 'Fotoğraf silinsin mi?' : 'Delete photo?',
          currentLang === 'tr' ? 'Bu işlem geri alınamaz.' : 'This cannot be undone.'
        );
        if (ok) {
          appData.progressImages = (appData.progressImages || []).filter(p => String(p.id) !== id);
          _baSelectedPhotos = _baSelectedPhotos.filter(x => x !== id);
          saveData();
          renderProgressPhotos();
          showToast(currentLang === 'tr' ? 'Fotoğraf silindi' : 'Photo deleted', 'success');
        }
        return;
      }

      const card = e.target.closest('.ph');
      if (!card) return;
      const id = card.dataset.id;
      const photo = (appData.progressImages || []).find(p => String(p.id) === id);
      if (!photo) return;

      if (_baCompareMode) {
        const idx = _baSelectedPhotos.indexOf(id);
        if (idx > -1) {
          _baSelectedPhotos.splice(idx, 1);
        } else {
          if (_baSelectedPhotos.length >= 2) _baSelectedPhotos.shift();
          _baSelectedPhotos.push(id);
        }
        renderProgressPhotos();
      } else {
        // Lightbox
        const dlgV = document.getElementById('dlgV');
        const vimg = document.getElementById('vimg');
        const vcap = document.getElementById('vcap');
        if (dlgV && vimg) {
          vimg.src = photo.image || photo.src || '';
          const poseLabels = POSE_NAMES[currentLang] || POSE_NAMES.tr;
          const poseStr = poseLabels[photo.pose] ? poseLabels[photo.pose] + ' · ' : '';
          const weightNum = photo.kg || photo.weight;
          const weightStr = weightNum ? _formatWeightNum(weightNum) + ' kg' : '';
          const noteStr = photo.note ? ' · ' + photo.note : '';
          if (vcap) vcap.textContent = poseStr + _formatDateDisplay(photo.date || photo.d) + (weightStr ? ' · ' + weightStr : '') + noteStr;
          if (typeof dlgV.showModal === 'function') dlgV.showModal();
        }
      }
    });
  }

  const pchips = document.getElementById('pchips');
  if (pchips) {
    pchips.addEventListener('click', e => {
      const btn = e.target.closest('[data-p]');
      if (btn) {
        _baPoseFilter = btn.dataset.p;
        renderProgressPhotos();
      }
    });
  }

  const mbody = document.getElementById('mbody');
  if (mbody) {
    mbody.addEventListener('click', async e => {
      const chip = e.target.closest('[data-m]');
      if (chip) {
        _baActiveMeasureField = chip.dataset.m;
        renderBodyMeasurements();
        return;
      }
      const delBtn = e.target.closest('[data-md]');
      if (delBtn) {
        const id = delBtn.dataset.md;
        const ok = await window.askConfirm(
          currentLang === 'tr' ? 'Ölçüm silinsin mi?' : 'Delete measurement?',
          currentLang === 'tr' ? 'Bu işlem geri alınamaz.' : 'This cannot be undone.'
        );
        if (ok) {
          appData.bodyMeasurements = (appData.bodyMeasurements || []).filter(m => String(m.id) !== id);
          saveData();
          renderBodyMeasurements();
          showToast(currentLang === 'tr' ? 'Ölçüm silindi' : 'Measurement deleted', 'success');
        }
      }
    });
  }

  let rz;
  window.addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      if (currentPage === 'beforeafter') renderBodyMeasurements();
    }, 160);
  });
}

function renderProgressPhotos() {
  initBeforeAfter();
  const photosCard = document.getElementById('photos');
  const bcmp = document.getElementById('bcmp');
  const pchips = document.getElementById('pchips');
  const cmpBox = document.getElementById('cmp');
  const pgrid = document.getElementById('pgrid');

  if (!photosCard || !pgrid) return;

  const photos = (appData.progressImages || []).slice();
  const poseLabels = POSE_NAMES[currentLang] || POSE_NAMES.tr;
  const chipList = [
    ['all', currentLang === 'tr' ? 'Tümü' : 'All'],
    ['front', poseLabels.front],
    ['side', poseLabels.side],
    ['back', poseLabels.back]
  ];

  if (pchips) {
    pchips.innerHTML = chipList.map(([k, v]) =>
      `<button type="button" data-p="${k}" aria-pressed="${k === _baPoseFilter}">${v}</button>`
    ).join('');
  }

  photosCard.classList.toggle('cmpm', _baCompareMode);
  if (bcmp) bcmp.setAttribute('aria-pressed', _baCompareMode);

  const filtered = photos.filter(p => _baPoseFilter === 'all' || p.pose === _baPoseFilter)
                         .sort((a, b) => (b.date || b.d || '').localeCompare(a.date || a.d || ''));

  if (!photos.length) {
    pgrid.innerHTML = `<div class="empty" style="grid-column:1/-1">${currentLang === 'tr' ? 'Henüz fotoğraf eklenmedi.' : 'No photos added yet.'}</div>`;
  } else if (!filtered.length) {
    pgrid.innerHTML = `<div class="empty" style="grid-column:1/-1">${currentLang === 'tr' ? 'Bu pozda fotoğraf yok.' : 'No photos in this pose.'}</div>`;
  } else {
    pgrid.innerHTML = filtered.map(p => {
      const pid = String(p.id);
      const isSel = _baSelectedPhotos.indexOf(pid);
      const poseName = poseLabels[p.pose] || '';
      const dateText = _formatDateDisplay(p.date || p.d);
      const weightNum = p.kg || p.weight;
      const weightText = weightNum ? _formatWeightNum(weightNum) + ' kg' : '';
      const noteText = p.note ? (weightText ? ' · ' : '') + escapeHtml(p.note) : '';
      const imgSrc = p.image || p.src || '';

      return `<div class="ph${isSel > -1 ? ' sel' : ''}" data-id="${pid}" tabindex="0" role="button" aria-label="${escapeHtml(dateText)}">
        <img src="${imgSrc}" alt="${escapeHtml(poseName)} ${escapeHtml(dateText)}" loading="lazy">
        ${poseName ? `<span class="tag tg">${escapeHtml(poseName)}</span>` : ''}
        ${_baCompareMode ?
          `<i class="pk">${isSel > -1 ? (isSel + 1) : ''}</i>` :
          `<button type="button" class="x" data-del="${pid}" aria-label="Fotoğrafı sil"><svg class="i" style="width:15px;height:15px"><use href="#zr-i-trash"/></svg></button>`
        }
        <div class="pv">
          <b>${escapeHtml(dateText)}</b>
          <span>${weightText}${noteText}</span>
        </div>
      </div>`;
    }).join('');
  }

  // Compare mode rendering
  if (cmpBox) {
    cmpBox.hidden = !_baCompareMode;
    if (_baCompareMode) {
      _baSelectedPhotos = _baSelectedPhotos.filter(id => photos.some(p => String(p.id) === id));
      if (_baSelectedPhotos.length < 2) {
        const needed = 2 - _baSelectedPhotos.length;
        cmpBox.innerHTML = `<div class="empty" style="margin-top:16px">${currentLang === 'tr' ? `Karşılaştırmak için ${needed} fotoğraf daha seç.` : `Select ${needed} more photo(s) to compare.`}</div>`;
      } else {
        const [a, c] = _baSelectedPhotos.map(id => photos.find(p => String(p.id) === id))
                                        .sort((x, y) => (x.date || x.d || '').localeCompare(y.date || y.d || ''));
        const dateA = new Date(a.date || a.d);
        const dateC = new Date(c.date || c.d);
        const days = Math.round(Math.abs(dateC - dateA) / 864e5);
        const kgA = a.kg || a.weight;
        const kgC = c.kg || c.weight;
        const dKg = (kgA && kgC) ? (kgC - kgA) : null;
        const dKgSign = dKg > 0 ? '+' : dKg < 0 ? '−' : '';
        const dKgText = dKg !== null ? dKgSign + _formatWeightNum(Math.abs(dKg)) + ' kg' : (currentLang === 'tr' ? 'aradaki süre' : 'elapsed time');

        cmpBox.innerHTML = `<div style="margin-top:16px">
          <div class="cw" id="cw" style="--p:50%">
            <img src="${a.image || a.src}" alt="Önce">
            <img class="top" src="${c.image || c.src}" alt="Sonra">
            <span class="hnd"></span>
            <span class="lt l">${currentLang === 'tr' ? 'Önce' : 'Before'}</span>
            <span class="lt r">${currentLang === 'tr' ? 'Sonra' : 'After'}</span>
          </div>
          <input class="rng" id="rng" type="range" min="0" max="100" value="50" aria-label="Karşılaştırma kaydırıcısı">
          <div class="cmeta">
            <div>
              <b>${_formatDateDisplay(a.date || a.d)}</b>
              <span>${currentLang === 'tr' ? 'Önce' : 'Before'}${kgA ? ' · ' + _formatWeightNum(kgA) + ' kg' : ''}</span>
            </div>
            <div>
              <b>${days} ${currentLang === 'tr' ? 'gün' : 'days'}</b>
              <span>${dKgText}</span>
            </div>
            <div>
              <b>${_formatDateDisplay(c.date || c.d)}</b>
              <span>${currentLang === 'tr' ? 'Sonra' : 'After'}${kgC ? ' · ' + _formatWeightNum(kgC) + ' kg' : ''}</span>
            </div>
          </div>
        </div>`;

        const cw = document.getElementById('cw');
        const rng = document.getElementById('rng');
        if (cw && rng) {
          const setPos = v => {
            v = Math.max(0, Math.min(100, v));
            cw.style.setProperty('--p', v + '%');
            rng.value = v;
          };
          rng.oninput = () => setPos(+rng.value);
          const handleMove = e => {
            const rect = cw.getBoundingClientRect();
            setPos((e.clientX - rect.left) / rect.width * 100);
          };
          cw.onpointerdown = e => {
            cw.setPointerCapture(e.pointerId);
            handleMove(e);
            cw.onpointermove = handleMove;
          };
          cw.onpointerup = e => {
            try { cw.releasePointerCapture(e.pointerId); } catch(err) {}
            cw.onpointermove = null;
          };
        }
      }
    }
  }
}

function renderBodyMeasurements() {
  initBeforeAfter();
  const box = document.getElementById('mbody');
  const mcnt = document.getElementById('mcnt');
  if (!box) return;

  const rawEntries = (appData.bodyMeasurements || []).slice();
  const entries = rawEntries.map(m => {
    const d = m.date || m.d;
    const v = m.v || {
      chest: m.chest || null,
      shoulder: m.shoulder || null,
      waist: m.waist || null,
      hip: m.hip || null,
      armR: m.armR || m.arm || null,
      armL: m.armL || m.arm || null,
      thighR: m.thighR || m.leg || null,
      thighL: m.thighL || m.leg || null,
      neck: m.neck || null
    };
    return { id: m.id, d, v };
  }).sort((a, b) => (a.d || '').localeCompare(b.d || ''));

  if (mcnt) mcnt.textContent = entries.length;

  if (!entries.length) {
    box.innerHTML = `<div class="empty" style="margin-top:16px">${currentLang === 'tr' ? 'Henüz ölçüm eklenmedi.' : 'No measurements added yet.'}</div>`;
    return;
  }

  const mf = _baActiveMeasureField;
  const pts = entries.filter(m => m.v && m.v[mf] != null && !isNaN(m.v[mf])).map(m => {
    const parts = (m.d || '').split('-');
    const t = parts.length === 3 ? new Date(+parts[0], +parts[1] - 1, +parts[2]).getTime() : Date.now();
    return {
      t,
      y: +m.v[mf],
      label: _formatDateDisplay(m.d).replace(/\s\d{4}$/, '')
    };
  });

  const L = pts[pts.length - 1];
  const diff = pts.length > 1 ? L.y - pts[0].y : null;
  const diffSign = diff > 0 ? '+' : diff < 0 ? '−' : '';
  const diffFormatted = diff === null ? '—' : diffSign + _formatWeightNum(Math.abs(diff));

  const chipsHtml = `<div class="chips" id="mchips" role="group" aria-label="Ölçü seç">
    ${MEASUREMENT_FIELDS.map(([k, trLabel, enLabel]) => {
      const label = currentLang === 'tr' ? trLabel : enLabel;
      return `<button type="button" data-m="${k}" aria-pressed="${k === mf}">${label}</button>`;
    }).join('')}
  </div>`;

  const kpisHtml = `<div class="kpis" style="margin-top:6px">
    <div>
      <b>${L ? _formatWeightNum(L.y) : '—'}<small>cm</small></b>
      <span>${currentLang === 'tr' ? 'güncel' : 'latest'}</span>
    </div>
    <div>
      <b>${diffFormatted}<small>cm</small></b>
      <span>${currentLang === 'tr' ? 'ilk kayda göre' : 'vs initial'}</span>
    </div>
    <div>
      <b>${pts.length}</b>
      <span>${currentLang === 'tr' ? 'kayıt' : 'entries'}</span>
    </div>
  </div>`;

  const chartHtml = `<div id="mchart">${pts.length > 1 ? '' : `<div class="empty">${currentLang === 'tr' ? 'Grafik için bu ölçüden en az iki kayıt gerekli.' : 'Need at least two records of this measurement for chart.'}</div>`}</div>`;

  const entsHtml = `<div class="ents">
    ${entries.slice().reverse().map(m => {
      const fieldList = MEASUREMENT_FIELDS.filter(([k]) => m.v && m.v[k] != null && !isNaN(m.v[k]))
                                         .map(([k, trLabel, enLabel]) => `${currentLang === 'tr' ? trLabel : enLabel} ${_formatWeightNum(m.v[k])}`)
                                         .join(' · ');
      return `<div class="en">
        <div>
          <b>${_formatDateDisplay(m.d)}</b>
          <span>${fieldList}</span>
        </div>
        <button type="button" class="x" data-md="${m.id}" aria-label="Ölçümü sil">✕</button>
      </div>`;
    }).join('')}
  </div>`;

  box.innerHTML = `${chipsHtml}
  <div class="mg">
    <div>
      ${kpisHtml}
      ${chartHtml}
    </div>
    ${entsHtml}
  </div>`;

  if (pts.length > 1) {
    _drawSvgLineChart(document.getElementById('mchart'), pts, 220, false);
  }
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
  
  // This week boundaries (Monday → Sunday)
  const now = new Date();
  const monday = getMonday(now);
  const mondayStr = dateStr(monday);
  const prevMonday = new Date(monday); prevMonday.setDate(monday.getDate() - 7);
  const prevMondayStr = dateStr(prevMonday);
  const prevSundayStr = dateStr(new Date(monday.getTime() - 1));

  dates.forEach(date => {
    const logs = appData.workoutLogs[date];
    logs.forEach(log => {
      const ex = log.exercise;
      const w = parseFloat(log.weight) || 0;
      const r = parseInt(log.reps) || 0;
      const s = parseInt(log.sets) || 1;
      const unit = log.unit || 'kg';
      const inputWeight = log.unit === 'lbs' ? (log.inputWeight || log.weight) : w;

      if (!stats[ex]) {
        stats[ex] = {
          name: ex,
          // Baseline (ilk kayıt)
          baselineWeight: inputWeight,
          baselineUnit: unit,
          baselineWeightKg: w,
          baselineReps: r, baselineSets: s, baselineDate: date,
          // All-time PR
          prWeight: inputWeight,
          prUnit: unit,
          prWeightKg: w,
          prReps: r, prSets: s, prDate: date,
          // Current (en son)
          currentWeight: inputWeight,
          currentUnit: unit,
          currentWeightKg: w,
          currentReps: r, currentSets: s, lastUpdated: date,
          // Bu hafta
          weekWeight: null,
          weekUnit: 'kg',
          weekWeightKg: null,
          weekReps: null, weekSets: null, weekDate: null,
          // Geçen hafta
          prevWeekWeight: null,
          prevWeekWeightKg: null,
        };
      } else {
        // Update current
        stats[ex].currentWeight = inputWeight;
        stats[ex].currentUnit = unit;
        stats[ex].currentWeightKg = w;
        stats[ex].currentReps = r;
        stats[ex].currentSets = s;
        stats[ex].lastUpdated = date;
        // PR check - compare in KG
        if (w > stats[ex].prWeightKg) {
          stats[ex].prWeight = inputWeight;
          stats[ex].prUnit = unit;
          stats[ex].prWeightKg = w;
          stats[ex].prReps = r;
          stats[ex].prSets = s;
          stats[ex].prDate = date;
        }
      }
      // Bu hafta (Pazartesi'den bugüne)
      if (date >= mondayStr) {
        if (stats[ex].weekWeightKg === null || w >= stats[ex].weekWeightKg) {
          stats[ex].weekWeight = inputWeight;
          stats[ex].weekUnit = unit;
          stats[ex].weekWeightKg = w;
          stats[ex].weekReps = r;
          stats[ex].weekSets = s;
          stats[ex].weekDate = date;
        }
      }
      // Geçen hafta
      if (date >= prevMondayStr && date <= prevSundayStr) {
        if (stats[ex].prevWeekWeightKg === null || w >= stats[ex].prevWeekWeightKg) {
          stats[ex].prevWeekWeight = inputWeight;
          stats[ex].prevWeekWeightKg = w;
        }
      }
    });
  });
  
  Object.values(stats).forEach(s => {
    s.category = 'other';
    for (const [cat, exercises] of Object.entries(EXERCISE_CATEGORIES)) {
      if (exercises.includes(s.name)) { s.category = cat; break; }
    }
    // Weekly delta
    if (s.weekWeightKg !== null && s.prevWeekWeightKg !== null) {
      const deltaKg = s.weekWeightKg - s.prevWeekWeightKg;
      const delta = s.weekUnit === 'lbs' ? deltaKg / 0.453592 : deltaKg;
      s.weekDelta = parseFloat(delta.toFixed(1));
    } else if (s.weekWeightKg !== null && s.prevWeekWeightKg === null) {
      s.weekDelta = null; // ilk hafta, referans yok
    } else {
      s.weekDelta = null;
    }
  });
  
  return Object.values(stats).sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
}

// =============================================
// COMMENTS
// =============================================
async function checkUserMute(uid) {
  if (!isFirebaseConfigured || !db || !uid) return false;
  try {
    const muteDoc = await db.collection('mutes').doc(uid).get().catch(()=>null);
    if (muteDoc && muteDoc.exists) {
      const md = muteDoc.data();
      if (md.expiry && Date.now() > md.expiry) {
        await db.collection('mutes').doc(uid).delete().catch(()=>{});
        return false;
      }
      return true;
    }
  } catch(e) {}
  return false;
}

// ============================================================
// ZYRO YORUMLAR (COMMENTS) — Zyro Panel v3 Redesign
// Direct Firestore listener & local fallback, real user authentication
// ============================================================
let _commentsData = [];
let _commentsSort = 'new';
let _commentsReplyState = null;
let _commentsEditState = null;
let _commentsInputText = '';
let _commentsReportTargetId = null;
let _commentsInitialized = false;

const ROLE_BADGES = {
  founder: ['KURUCU', 'k'],
  mod: ['MOD', 'm'],
  admin: ['ADMIN', 'k'],
  kurucu: ['KURUCU', 'k']
};

function _commentScore(c) {
  const up = Array.isArray(c.up) ? c.up.length : (c.upvotes || 0);
  const dn = Array.isArray(c.down) ? c.down.length : (c.downvotes || 0);
  return up - dn;
}

function _formatCommentDate(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US');
}

function initComments() {
  if (_commentsInitialized) return;
  _commentsInitialized = true;

  const fc = document.getElementById('fc');
  const ct = document.getElementById('ct');
  const cc = document.getElementById('cc');
  const so = document.getElementById('so');
  const list = document.getElementById('list');
  const fr = document.getElementById('fr');

  if (ct && cc) {
    ct.addEventListener('input', e => {
      cc.textContent = e.target.value.length + '/1000';
    });
  }

  if (fc) {
    fc.addEventListener('submit', async e => {
      e.preventDefault();
      const text = ct ? ct.value.trim() : '';
      const ce = document.getElementById('ce');
      const cs = document.getElementById('cs');

      if (text.length < 2) {
        if (ce) ce.textContent = currentLang === 'tr' ? 'Yorum en az 2 karakter olmalı.' : 'Comment must be at least 2 characters.';
        return;
      }
      if (ce) ce.textContent = '';

      if (currentUser) {
        const isMuted = await checkUserMute(currentUser.uid);
        if (isMuted) {
          showToast(currentLang === 'tr' ? 'Yorum yapma yetkiniz kısıtlanmıştır!' : 'Your commenting privilege is restricted!', 'error');
          return;
        }
      }

      if (cs) cs.disabled = true;
      const isAnon = document.getElementById('k2') && document.getElementById('k2').checked;
      const myId = currentUser ? currentUser.uid : 'u_' + (appData.profile && appData.profile.displayName || 'guest');
      const myName = isAnon ? (currentLang === 'tr' ? 'Anonim' : 'Anonymous') : (currentUser ? currentUser.displayName : (appData.profile && appData.profile.displayName || 'Kullanıcı'));
      const myRole = isAnon ? null : (currentUser && currentUser.email === 'wupard@gmail.com' ? 'founder' : (appData.profile && appData.profile.role || null));
      const myAvatar = isAnon ? null : (currentUser && currentUser.photoURL || null);

      const newComment = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        parentId: null,
        uid: myId,
        userId: myId,
        name: myName,
        userName: myName,
        role: myRole,
        avatar: myAvatar,
        userPhoto: myAvatar,
        anon: isAnon,
        isAnonymous: isAnon,
        text,
        ts: Date.now(),
        timestamp: Date.now(),
        up: [],
        down: [],
        upvotedBy: [],
        downvotedBy: [],
        upvotes: 0,
        downvotes: 0
      };

      try {
        if (isFirebaseConfigured && db) {
          await db.collection('public_comments').add(newComment);
        } else {
          let local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
          local.unshift(newComment);
          localStorage.setItem('zyro_local_comments', JSON.stringify(local));
          _commentsData.unshift(newComment);
          drawComments();
        }
        if (ct) ct.value = '';
        if (cc) cc.textContent = '0/1000';
        showToast(currentLang === 'tr' ? 'Yorumun gönderildi' : 'Comment sent', 'success');
        sendCommentEmailNotification(text, myName);
      } catch (err) {
        console.error('Comment send error:', err);
        showToast(currentLang === 'tr' ? 'Bir sorun oluştu' : 'An error occurred', 'error');
      } finally {
        if (cs) cs.disabled = false;
      }
    });
  }

  if (so) {
    so.addEventListener('click', e => {
      const btn = e.target.closest('[data-s]');
      if (btn) {
        _commentsSort = btn.dataset.s;
        drawComments();
      }
    });
  }

  if (list) {
    list.addEventListener('input', e => {
      if (e.target.matches('[data-ta]')) {
        _commentsInputText = e.target.value;
      }
    });

    list.addEventListener('click', async e => {
      const btn = e.target.closest('[data-a]');
      if (!btn) return;
      const wrap = btn.closest('[data-id]');
      if (!wrap) return;
      const id = wrap.dataset.id;
      const c = _commentsData.find(x => x.id === id);
      if (!c) return;
      const action = btn.dataset.a;
      const myId = currentUser ? currentUser.uid : 'u_' + (appData.profile && appData.profile.displayName || 'guest');

      // Upvote / Downvote
      if (action === 'up' || action === 'dn') {
        if (!currentUser) {
          showToast(currentLang === 'tr' ? 'Oy vermek için giriş yapmalısın!' : 'Must be logged in to vote!', 'error');
          return;
        }
        if (c.uid === myId || c.userId === myId) {
          showToast(currentLang === 'tr' ? 'Kendi yorumunu oylayamazsın!' : 'Cannot vote on your own comment!', 'error');
          return;
        }
        const dir = action === 'up' ? 1 : -1;
        await _voteCommentItem(c, dir);
        return;
      }

      // Reply
      if (action === 'reply') {
        _commentsReplyState = { id, top: c.parentId || id, mention: (c.anon || c.isAnonymous) ? null : (c.name || c.userName) };
        _commentsEditState = null;
        _commentsInputText = '';
        drawComments();
        return;
      }

      // Cancel reply or edit
      if (action === 'rcancel' || action === 'ecancel') {
        _commentsReplyState = null;
        _commentsEditState = null;
        _commentsInputText = '';
        drawComments();
        return;
      }

      // Send reply
      if (action === 'rsend') {
        const text = _commentsInputText.trim();
        if (!text) {
          showToast(currentLang === 'tr' ? 'Cevap boş olamaz' : 'Reply cannot be empty', 'error');
          return;
        }
        const rState = _commentsReplyState;
        _commentsReplyState = null;
        _commentsInputText = '';

        const replyComment = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          parentId: rState.top,
          mention: rState.mention,
          replyTo: rState.mention,
          uid: myId,
          userId: myId,
          name: currentUser ? currentUser.displayName : (appData.profile && appData.profile.displayName || 'Kullanıcı'),
          userName: currentUser ? currentUser.displayName : (appData.profile && appData.profile.displayName || 'Kullanıcı'),
          role: currentUser && currentUser.email === 'wupard@gmail.com' ? 'founder' : null,
          avatar: currentUser && currentUser.photoURL || null,
          userPhoto: currentUser && currentUser.photoURL || null,
          anon: false,
          isAnonymous: false,
          text,
          ts: Date.now(),
          timestamp: Date.now(),
          up: [],
          down: [],
          upvotedBy: [],
          downvotedBy: [],
          upvotes: 0,
          downvotes: 0
        };

        try {
          if (isFirebaseConfigured && db) {
            await db.collection('public_comments').add(replyComment);
          } else {
            let local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
            local.push(replyComment);
            localStorage.setItem('zyro_local_comments', JSON.stringify(local));
            _commentsData.push(replyComment);
            drawComments();
          }
          showToast(currentLang === 'tr' ? 'Cevabın gönderildi' : 'Reply sent', 'success');
          sendCommentEmailNotification(text, replyComment.userName, true);
        } catch (err) {
          console.error('Reply send error:', err);
        }
        return;
      }

      // Edit
      if (action === 'edit') {
        _commentsEditState = id;
        _commentsReplyState = null;
        _commentsInputText = c.text;
        drawComments();
        return;
      }

      // Save edit
      if (action === 'esave') {
        const text = _commentsInputText.trim();
        if (!text) {
          showToast(currentLang === 'tr' ? 'Yorum boş olamaz' : 'Comment cannot be empty', 'error');
          return;
        }
        _commentsEditState = null;
        _commentsInputText = '';

        try {
          if (isFirebaseConfigured && db) {
            await db.collection('public_comments').doc(id).update({
              text,
              edited: true,
              editedAt: Date.now()
            });
          } else {
            let local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
            const idx = local.findIndex(x => x.id === id);
            if (idx !== -1) {
              local[idx].text = text;
              local[idx].edited = true;
              localStorage.setItem('zyro_local_comments', JSON.stringify(local));
            }
          }
          c.text = text;
          c.edited = true;
          drawComments();
          showToast(currentLang === 'tr' ? 'Yorum güncellendi' : 'Comment updated', 'success');
        } catch (err) {
          console.error('Edit error:', err);
        }
        return;
      }

      // Delete
      if (action === 'del') {
        const ok = await window.askConfirm(
          currentLang === 'tr' ? 'Yorum silinsin mi?' : 'Delete comment?',
          c.parentId ?
            (currentLang === 'tr' ? 'Bu işlem geri alınamaz.' : 'This cannot be undone.') :
            (currentLang === 'tr' ? 'Yorum ve altındaki tüm cevaplar silinir. Bu işlem geri alınamaz.' : 'Comment and all replies under it will be deleted. This cannot be undone.')
        );
        if (ok) {
          try {
            if (isFirebaseConfigured && db) {
              await db.collection('public_comments').doc(id).delete();
              // also delete replies
              const replies = _commentsData.filter(r => r.parentId === id);
              for (const r of replies) {
                await db.collection('public_comments').doc(r.id).delete().catch(() => {});
              }
            } else {
              let local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
              local = local.filter(x => x.id !== id && x.parentId !== id);
              localStorage.setItem('zyro_local_comments', JSON.stringify(local));
              _commentsData = _commentsData.filter(x => x.id !== id && x.parentId !== id);
              drawComments();
            }
            showToast(currentLang === 'tr' ? 'Yorum silindi' : 'Comment deleted', 'success');
          } catch (err) {
            console.error('Delete error:', err);
          }
        }
        return;
      }

      // Report
      if (action === 'rep') {
        _commentsReportTargetId = id;
        const dlgR = document.getElementById('dlgR');
        if (fr) fr.reset();
        if (dlgR && typeof dlgR.showModal === 'function') dlgR.showModal();
      }
    });
  }

  if (fr) {
    fr.addEventListener('submit', async e => {
      e.preventDefault();
      const dlgR = document.getElementById('dlgR');
      if (dlgR) dlgR.close();
      const rr = document.getElementById('rr');
      const rn = document.getElementById('rn');
      const reason = rr ? rr.value : 'Spam';
      const note = rn ? rn.value.trim() : '';

      if (isFirebaseConfigured && db && _commentsReportTargetId) {
        try {
          await db.collection('reports').add({
            commentId: _commentsReportTargetId,
            reason,
            note,
            reporterId: currentUser ? currentUser.uid : 'guest',
            reporterName: currentUser ? currentUser.displayName : 'Guest',
            timestamp: Date.now(),
            status: 'pending'
          });
        } catch (err) {
          console.warn('Report write error:', err);
        }
      }
      showToast(currentLang === 'tr' ? 'Bildirimin alındı' : 'Report received', 'success');
    });
  }
}

async function _voteCommentItem(c, dir) {
  const myId = currentUser ? currentUser.uid : 'guest';
  const upList = Array.isArray(c.up) ? c.up : (Array.isArray(c.upvotedBy) ? c.upvotedBy : []);
  const dnList = Array.isArray(c.down) ? c.down : (Array.isArray(c.downvotedBy) ? c.downvotedBy : []);

  const hasUp = upList.includes(myId);
  const hasDn = dnList.includes(myId);

  let newUp = upList.filter(x => x !== myId);
  let newDn = dnList.filter(x => x !== myId);

  if (dir === 1 && !hasUp) newUp.push(myId);
  if (dir === -1 && !hasDn) newDn.push(myId);

  c.up = newUp;
  c.upvotedBy = newUp;
  c.upvotes = newUp.length;
  c.down = newDn;
  c.downvotedBy = newDn;
  c.downvotes = newDn.length;

  drawComments();

  if (isFirebaseConfigured && db) {
    try {
      const docRef = db.collection('public_comments').doc(c.id);
      await docRef.update({
        up: newUp,
        upvotedBy: newUp,
        upvotes: newUp.length,
        down: newDn,
        downvotedBy: newDn,
        downvotes: newDn.length
      });
    } catch (e) {
      console.error('Vote update failed:', e);
    }
  } else {
    let local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
    const idx = local.findIndex(x => x.id === c.id);
    if (idx !== -1) {
      local[idx].up = newUp;
      local[idx].down = newDn;
      localStorage.setItem('zyro_local_comments', JSON.stringify(local));
    }
  }
}

function _renderCommentItemHtml(c, isReply) {
  const myId = currentUser ? currentUser.uid : 'u_' + (appData.profile && appData.profile.displayName || 'guest');
  const isMine = (c.uid === myId || c.userId === myId);
  const isModerator = (currentUser && currentUser.email === 'wupard@gmail.com') || (appData.profile && ['founder', 'mod', 'admin'].includes(appData.profile.role));
  const canDelete = isMine || isModerator;

  const roleKey = c.role || (c.userId && c.userId.includes('wupard') ? 'founder' : null);
  const badge = roleKey ? ROLE_BADGES[roleKey] : null;

  const avLetter = escapeHtml(((c.name || c.userName || '?')[0] || '?').toUpperCase());
  const avatarHtml = (c.avatar || c.userPhoto) ?
    `<img src="${escapeHtml(c.avatar || c.userPhoto)}" alt="">` :
    avLetter;

  const upList = Array.isArray(c.up) ? c.up : (Array.isArray(c.upvotedBy) ? c.upvotedBy : []);
  const dnList = Array.isArray(c.down) ? c.down : (Array.isArray(c.downvotedBy) ? c.downvotedBy : []);
  const isUpvoted = upList.includes(myId);
  const isDownvoted = dnList.includes(myId);

  const isEditing = _commentsEditState === c.id;
  const isReplying = _commentsReplyState && _commentsReplyState.id === c.id;
  const isAnon = c.anon || c.isAnonymous;
  const authorName = isAnon ? (currentLang === 'tr' ? 'Anonim' : 'Anonymous') : (c.name || c.userName || 'Kullanıcı');

  const ico = name => `<svg class="i"><use href="#zr-i-${name}"/></svg>`;

  return `<${isReply ? 'div class="rp"' : 'article class="cm"'} data-id="${escapeHtml(c.id)}">
    <div class="hd2">
      <div class="av">${avatarHtml}</div>
      <span class="nmx${isAnon ? ' an' : ''}">${escapeHtml(authorName)}</span>
      ${badge ? `<span class="bd ${badge[1]}">${badge[0]}</span>` : ''}
      <div class="dt">
        ${c.edited ? `<span class="ed">${currentLang === 'tr' ? 'düzenlendi · ' : 'edited · '}</span>` : ''}
        ${_formatCommentDate(c.ts || c.timestamp)}
        ${isMine ? `<button type="button" class="ib" data-a="edit" aria-label="Düzenle">${ico('edit')}</button>` : ''}
        ${canDelete ? `<button type="button" class="ib dg" data-a="del" aria-label="Sil">${ico('trash')}</button>` : ''}
      </div>
    </div>
    ${isEditing ? `
      <div class="rc">
        <textarea class="in" maxlength="1000" data-ta aria-label="Yorumu düzenle">${escapeHtml(_commentsInputText)}</textarea>
        <div class="da">
          <button type="button" class="ghost" data-a="ecancel">${currentLang === 'tr' ? 'İptal' : 'Cancel'}</button>
          <button type="button" class="btn" data-a="esave">${currentLang === 'tr' ? 'Kaydet' : 'Save'}</button>
        </div>
      </div>
    ` : `
      <div class="tx">${c.mention ? `<span class="mn">@${escapeHtml(c.mention)}</span>` : ''}${escapeHtml(c.text)}</div>
      <div class="ac">
        <button type="button" class="vt" data-a="up" aria-pressed="${isUpvoted}" ${isMine ? 'disabled' : ''} aria-label="Beğen">
          ${ico('up')}${upList.length}
        </button>
        <button type="button" class="vt dn" data-a="dn" aria-pressed="${isDownvoted}" ${isMine ? 'disabled' : ''} aria-label="Beğenme">
          ${ico('down')}${dnList.length}
        </button>
        <button type="button" class="lk" data-a="reply">
          ${ico('reply')}${currentLang === 'tr' ? 'Cevapla' : 'Reply'}
        </button>
        ${isMine ? '' : `<button type="button" class="lk" data-a="rep">${ico('flag')}${currentLang === 'tr' ? 'Raporla' : 'Report'}</button>`}
      </div>
    `}
    ${isReplying ? `
      <div class="rc">
        <textarea class="in" maxlength="1000" data-ta placeholder="${currentLang === 'tr' ? 'Cevabını yaz…' : 'Write your reply…'}" aria-label="Cevap">${escapeHtml(_commentsInputText)}</textarea>
        <div class="da">
          <button type="button" class="ghost" data-a="rcancel">${currentLang === 'tr' ? 'İptal' : 'Cancel'}</button>
          <button type="button" class="btn" data-a="rsend">${ico('send')}${currentLang === 'tr' ? 'Cevapla' : 'Reply'}</button>
        </div>
      </div>
    ` : ''}
  </${isReply ? 'div' : 'article'}>`;
}

function drawComments() {
  initComments();
  const cn = document.getElementById('cn');
  const so = document.getElementById('so');
  const list = document.getElementById('list');
  if (!list) return;

  const cs = _commentsData;
  if (cn) cn.textContent = cs.length;

  if (so) {
    so.innerHTML = [
      ['new', currentLang === 'tr' ? 'En yeni' : 'Newest'],
      ['top', currentLang === 'tr' ? 'Popüler' : 'Popular']
    ].map(([k, v]) => `<button type="button" data-s="${k}" aria-pressed="${k === _commentsSort}">${v}</button>`).join('');
  }

  const topLevel = cs.filter(c => !c.parentId);
  topLevel.sort((a, b) => {
    if (_commentsSort === 'top') {
      return _commentScore(b) - _commentScore(a) || (b.ts || b.timestamp || 0) - (a.ts || a.timestamp || 0);
    }
    return (b.ts || b.timestamp || 0) - (a.ts || a.timestamp || 0);
  });

  if (!topLevel.length) {
    list.innerHTML = `<div class="empty">${currentLang === 'tr' ? 'Henüz yorum yok. İlk yorumu sen yaz.' : 'No comments yet. Be the first to comment.'}</div>`;
    return;
  }

  list.innerHTML = topLevel.map(c => {
    const replies = cs.filter(r => r.parentId === c.id).sort((a, b) => (a.ts || a.timestamp || 0) - (b.ts || b.timestamp || 0));
    const mainHtml = _renderCommentItemHtml(c, false);
    if (!replies.length) return mainHtml;
    const closeIdx = mainHtml.lastIndexOf('</article>');
    const repliesHtml = `<div class="rps">${replies.map(r => _renderCommentItemHtml(r, true)).join('')}</div>`;
    return mainHtml.slice(0, closeIdx) + repliesHtml + '</article>';
  }).join('');

  const activeTa = list.querySelector('[data-ta]');
  if (activeTa && document.activeElement === document.body) {
    activeTa.focus();
  }
}

function renderComments() {
  initComments();
  if (isFirebaseConfigured && db) {
    if (!commentsListenerUnsub) {
      const q = db.collection('public_comments').orderBy('timestamp', 'desc').limit(60);
      commentsListenerUnsub = q.onSnapshot(snap => {
        const comments = [];
        snap.forEach(doc => {
          const d = doc.data();
          comments.push({
            id: doc.id,
            parentId: d.parentId || null,
            uid: d.userId || d.uid,
            userId: d.userId || d.uid,
            name: d.userName || d.name,
            userName: d.userName || d.name,
            role: d.userRole || d.role,
            avatar: d.userPhoto || d.avatar,
            userPhoto: d.userPhoto || d.avatar,
            anon: !!(d.isAnonymous || d.anon),
            isAnonymous: !!(d.isAnonymous || d.anon),
            mention: d.replyTo || d.mention,
            text: d.text || '',
            ts: d.timestamp || d.ts || Date.now(),
            timestamp: d.timestamp || d.ts || Date.now(),
            edited: !!d.edited,
            up: Array.isArray(d.up) ? d.up : (Array.isArray(d.upvotedBy) ? d.upvotedBy : []),
            upvotedBy: Array.isArray(d.up) ? d.up : (Array.isArray(d.upvotedBy) ? d.upvotedBy : []),
            upvotes: d.upvotes || 0,
            down: Array.isArray(d.down) ? d.down : (Array.isArray(d.downvotedBy) ? d.downvotedBy : []),
            downvotedBy: Array.isArray(d.down) ? d.down : (Array.isArray(d.downvotedBy) ? d.downvotedBy : []),
            downvotes: d.downvotes || 0
          });
        });
        _commentsData = comments;
        drawComments();
      }, err => {
        console.warn('Comments listener error:', err);
        const local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
        _commentsData = local;
        drawComments();
      });
    } else {
      drawComments();
    }
  } else {
    const local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
    _commentsData = local;
    drawComments();
  }
}

window.adminDeleteComment = async function(commentId) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  if (!confirm('Bu yorumu silmek istediğine emin misin?')) return;
  
  try {
    await db.collection('public_comments').doc(commentId).delete();
    showToast('Yorum silindi.', 'success');
    renderComments();
    
    // Refresh admin views if visible/active
    if (typeof adminLoadAllComments === 'function') {
      adminLoadAllComments().catch(e => console.error(e));
    }
    if (typeof adminLoadReports === 'function') {
      adminLoadReports().catch(e => console.error(e));
    }
  } catch (e) {
    console.error('Delete Error:', e);
    showToast('Yorum silinemedi!', 'error');
  }
};

// =============================================
// REPORT SYSTEM
// =============================================
let _currentReportReason = 'spam';

window.openReportModal = function(commentId, targetUserId, targetUserName, commentText) {
  if (!currentUser) { showToast('Giriş yapman gerekiyor.', 'error'); return; }
  document.getElementById('reportTargetCommentId').value = commentId;
  document.getElementById('reportTargetUserId').value = targetUserId;
  document.getElementById('reportTargetUserName').value = targetUserName;
  document.getElementById('reportCommentPreview').textContent = `"${commentText}"`;
  document.getElementById('reportDescription').value = '';
  _currentReportReason = 'spam';
  // Reset reason buttons
  document.querySelectorAll('.report-reason-btn').forEach(b => {
    const isSpam = b.dataset.reason === 'spam';
    b.style.border = isSpam ? '1px solid rgba(239,68,68,0.3)' : '1px solid var(--border-subtle)';
    b.style.background = isSpam ? 'rgba(239,68,68,0.08)' : 'transparent';
  });
  const modal = document.getElementById('reportModal');
  modal.style.display = 'flex';
};

window.closeReportModal = function() {
  document.getElementById('reportModal').style.display = 'none';
};

window.selectReportReason = function(btn) {
  _currentReportReason = btn.dataset.reason;
  document.querySelectorAll('.report-reason-btn').forEach(b => {
    const isActive = b === btn;
    b.style.border = isActive ? '1px solid rgba(239,68,68,0.35)' : '1px solid var(--border-subtle)';
    b.style.background = isActive ? 'rgba(239,68,68,0.1)' : 'transparent';
  });
};

window.submitReport = async function() {
  if (!currentUser || !db) return;
  const commentId = document.getElementById('reportTargetCommentId').value;
  const targetUserId = document.getElementById('reportTargetUserId').value;
  const targetUserName = document.getElementById('reportTargetUserName').value;
  const commentText = document.getElementById('reportCommentPreview').textContent;
  const description = document.getElementById('reportDescription').value.trim();

  if (!commentId) { showToast('Yorum bulunamadı!', 'error'); return; }

  try {
    const reportData = {
      commentId,
      commentText,
      targetUserId,
      targetUserName,
      reporterId: currentUser.uid,
      reporterName: currentUser.displayName || 'Kullanıcı',
      reason: _currentReportReason,
      description: description || '',
      status: 'pending',
      timestamp: Date.now(),
      date: todayStr()
    };

    await db.collection('reports').add(reportData);

    // Admin bildirimi gönder (notifications koleksiyonu)
    await db.collection('notifications').add({
      title: '🚩 Yeni Rapor',
      text: `${reportData.reporterName}, "${targetUserName}" kullanıcısının yorumunu raporladı. Sebep: ${_currentReportReason}`,
      type: 'admin_report',
      timestamp: Date.now(),
      createdAt: new Date(),
      date: todayStr()
    });

    showToast('Raporun alındı, incelenecek. Teşekkürler!', 'success');
    closeReportModal();
  } catch (e) {
    console.error('Report Error:', e);
    showToast('Rapor gönderilemedi: ' + e.message, 'error');
  }
};

// Admin: raporları yükle
window.adminLoadReports = async function() {
  const container = document.getElementById('adminReportsList');
  if (!container || !db) return;
  container.innerHTML = '<div class="logged-empty">Yükleniyor...</div>';
  try {
    const snap = await db.collection('reports').orderBy('timestamp', 'desc').limit(50).get();
    if (snap.empty) { container.innerHTML = '<div class="logged-empty">Henüz rapor yok.</div>'; return; }
    let html = '';
    snap.forEach(doc => {
      const r = { id: doc.id, ...doc.data() };
      const statusColor = r.status === 'pending' ? '#F59E0B' : r.status === 'resolved' ? '#34d399' : '#94A3B8';
      const statusLabel = r.status === 'pending' ? 'Bekliyor' : r.status === 'resolved' ? 'Çözüldü' : r.status;
      const reasonLabels = {spam:'Spam',hakaret:'Hakaret',uygunsuz:'Uygunsuz İçerik',diger:'Diğer'};
      html += `
        <div style="padding:14px;background:var(--bg-card-alt);border:1px solid var(--border-subtle);border-radius:12px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;gap:12px;">
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                <span style="font-size:0.8rem;font-weight:700;">🚩 ${r.reporterName}</span>
                <span style="font-size:0.7rem;padding:2px 8px;border-radius:999px;background:rgba(239,68,68,0.1);color:#ef4444;font-weight:700;">${reasonLabels[r.reason]||r.reason}</span>
                <span style="font-size:0.7rem;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,0.15);color:${statusColor};font-weight:700;">${statusLabel}</span>
              </div>
              <div style="font-size:0.75rem;color:var(--text-tertiary);">Raporlanan: <b>${r.targetUserName}</b> · ${r.date}</div>
              <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:6px;padding:8px;background:rgba(0,0,0,0.12);border-radius:8px;">"${(r.commentText||'').substring(0,120)}"</div>
              ${r.description ? `<div style="font-size:0.78rem;color:var(--text-muted);margin-top:6px;">Açıklama: ${r.description}</div>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button onclick="openReportReplyModal('${doc.id}','${(r.reporterId||'').replace(/'/g,"\\'")}')" 
              style="padding:6px 14px;border-radius:8px;border:1px solid rgba(139,124,247,0.3);background:rgba(139,124,247,0.08);color:var(--accent-primary);font-size:0.78rem;font-weight:700;cursor:pointer;">
              📨 Cevap Ver
            </button>
            <button onclick="adminMarkReportResolved('${doc.id}')" 
              style="padding:6px 14px;border-radius:8px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.08);color:#34d399;font-size:0.78rem;font-weight:700;cursor:pointer;">
              ✅ Çözüldü İşaretle
            </button>
            <button onclick="adminDeleteComment('${r.commentId}')" 
              style="padding:6px 14px;border-radius:8px;border:1px solid rgba(239,68,68,0.25);background:rgba(239,68,68,0.06);color:#ef4444;font-size:0.78rem;font-weight:700;cursor:pointer;">
              🗑️ Yorumu Sil
            </button>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  } catch (e) { container.innerHTML = 'Hata: ' + e.message; }
};

window.adminMarkReportResolved = async function(reportId) {
  if (!db) return;
  try {
    await db.collection('reports').doc(reportId).update({ status: 'resolved' });
    showToast('Rapor çözüldü olarak işaretlendi.', 'success');
    adminLoadReports();
  } catch (e) { showToast('Hata: ' + e.message, 'error'); }
};

window.openReportReplyModal = function(reportId, reporterId) {
  document.getElementById('reportReplyTargetId').value = reportId;
  document.getElementById('reportReplyReporterId').value = reporterId;
  document.getElementById('reportReplyText').value = '';
  document.getElementById('reportReplyPreview').innerHTML = `Rapor ID: <b>${reportId}</b><br>Raporlayan kullanıcıya kişisel bildirim gönderilecek.`;
  const modal = document.getElementById('reportReplyModal');
  modal.style.display = 'flex';
};

window.closeReportReplyModal = function() {
  document.getElementById('reportReplyModal').style.display = 'none';
};

window.sendReportReply = async function() {
  const reportId = document.getElementById('reportReplyTargetId').value;
  const reporterId = document.getElementById('reportReplyReporterId').value;
  const replyText = document.getElementById('reportReplyText').value.trim();
  if (!replyText) { showToast('Cevap metni boş olamaz!', 'error'); return; }
  if (!db || !currentUser) return;
  try {
    // Kişisel bildirim olarak gönder
    await db.collection('users').doc(reporterId).collection('notifications').add({
      title: '📨 Rapor Cevabı',
      text: replyText,
      type: 'report_reply',
      fromAdmin: true,
      timestamp: Date.now(),
      createdAt: new Date(),
      date: todayStr(),
      read: false
    });
    // Raporu resolved yap
    await db.collection('reports').doc(reportId).update({ status: 'resolved', adminReply: replyText });
    showToast('Cevap gönderildi ve rapor çözüldü olarak işaretlendi.', 'success');
    closeReportReplyModal();
    adminLoadReports();
  } catch (e) { showToast('Gönderilemedi: ' + e.message, 'error'); }
};


window.deletePublicComment = async function(commentId) {
  if (!currentUser) return;
  if (!confirm('Bu yorumu silmek istediğine emin misin?')) return;
  
  try {
    if (isFirebaseConfigured && db) {
      await db.collection('public_comments').doc(commentId).delete();
    } else {
      // Local fallback
      let localComments = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
      localComments = localComments.filter(c => c.id !== commentId);
      localStorage.setItem('zyro_local_comments', JSON.stringify(localComments));
    }
    // Also clean from local cache in case it was there
    let localComments = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
    localComments = localComments.filter(c => c.id !== commentId);
    localStorage.setItem('zyro_local_comments', JSON.stringify(localComments));
    showToast('Yorum silindi.', 'success');
    renderComments();
  } catch (e) {
    console.error('Delete Error:', e);
    showToast('Yorum silinemedi!', 'error');
  }
};

window.toggleEditComment = function(commentId, currentText) {
  const textEl = document.getElementById(`commentText_${commentId}`);
  const editForm = document.getElementById(`editForm_${commentId}`);
  const input = document.getElementById(`editInput_${commentId}`);
  
  if (!textEl || !editForm || !input) return;
  
  const isHidden = editForm.style.display === 'none' || editForm.style.display === '';
  if (isHidden) {
    textEl.style.display = 'none';
    editForm.style.display = 'block';
    if (currentText !== undefined) {
      input.value = currentText;
    }
    input.focus();
    input.selectionStart = input.selectionEnd = input.value.length;
  } else {
    textEl.style.display = 'block';
    editForm.style.display = 'none';
  }
};

window.submitEditComment = async function(commentId) {
  const input = document.getElementById(`editInput_${commentId}`);
  if (!input) return;
  const newText = input.value.trim();
  if (!newText) {
    showToast(currentLang === 'tr' ? 'Yorum metni boş olamaz!' : 'Comment content cannot be empty!', 'error');
    return;
  }
  
  if (!currentUser) {
    showToast(currentLang === 'tr' ? 'Düzenlemek için giriş yapmalısınız.' : 'Must be logged in to edit.', 'error');
    return;
  }

  const isMuted = await checkUserMute(currentUser.uid);
  if (isMuted) {
    showToast('Yorum yapma yetkiniz geçici veya kalıcı olarak kısıtlanmıştır!', 'error');
    return;
  }
  
  try {
    if (isFirebaseConfigured && db) {
      await db.collection('public_comments').doc(commentId).update({
        text: newText,
        edited: true,
        editedAt: Date.now()
      });
    } else {
      let localComments = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
      const idx = localComments.findIndex(c => c.id === commentId);
      if (idx !== -1) {
        localComments[idx].text = newText;
        localComments[idx].edited = true;
        localComments[idx].editedAt = Date.now();
        localStorage.setItem('zyro_local_comments', JSON.stringify(localComments));
      }
    }
    showToast(currentLang === 'tr' ? 'Yorum güncellendi.' : 'Comment updated.', 'success');
    renderComments();
  } catch (e) {
    console.error('Edit Error:', e);
    showToast(currentLang === 'tr' ? 'Yorum güncellenemedi!' : 'Could not update comment!', 'error');
  }
};

// Per-comment vote lock: prevents rapid double-click race conditions
const _voteLocks = new Set();

window.upvoteComment = async function(commentId) {
  if (!currentUser) {
    showToast(currentLang === 'tr' ? 'Beğenmek için giriş yapmalısın!' : 'You must be logged in to vote!', 'error');
    return;
  }
  // Lock: ignore if already processing this comment's vote
  if (_voteLocks.has(commentId)) return;
  _voteLocks.add(commentId);

  try {
    if (!isFirebaseConfigured || !db) return;

    const docRef = db.collection('public_comments').doc(commentId);
    const doc = await docRef.get();
    if (!doc.exists) return;

    const data = doc.data();
    if (data.userId === currentUser.uid) {
      showToast(currentLang === 'tr' ? 'Kendi yorumunu beğenemezsin!' : 'You cannot vote on your own comment!', 'error');
      return;
    }

    const upvotedBy = Array.isArray(data.upvotedBy) ? data.upvotedBy : [];
    const downvotedBy = Array.isArray(data.downvotedBy) ? data.downvotedBy : [];
    const alreadyUpvoted = upvotedBy.includes(currentUser.uid);
    const alreadyDownvoted = downvotedBy.includes(currentUser.uid);

    const updateData = {};
    if (alreadyUpvoted) {
      // Toggle off: remove upvote
      updateData.upvotes = firebase.firestore.FieldValue.increment(-1);
      updateData.upvotedBy = firebase.firestore.FieldValue.arrayRemove(currentUser.uid);
    } else {
      // Add upvote; also remove downvote if present (mutual exclusion)
      updateData.upvotes = firebase.firestore.FieldValue.increment(1);
      updateData.upvotedBy = firebase.firestore.FieldValue.arrayUnion(currentUser.uid);
      if (alreadyDownvoted) {
        updateData.downvotes = firebase.firestore.FieldValue.increment(-1);
        updateData.downvotedBy = firebase.firestore.FieldValue.arrayRemove(currentUser.uid);
      }
    }

    // Optimistic UI update (instant feedback, no re-render lag)
    window._isVoting = true;
    _applyVoteOptimistic(commentId, alreadyUpvoted ? 'remove-up' : 'add-up', alreadyDownvoted);

    await docRef.update(updateData);
    setTimeout(() => { window._isVoting = false; }, 800);
  } catch(e) {
    console.error('Upvote error:', e);
  } finally {
    _voteLocks.delete(commentId);
  }
};

window.downvoteComment = async function(commentId) {
  if (!currentUser) {
    showToast(currentLang === 'tr' ? 'Beğenmemek için giriş yapmalısın!' : 'You must be logged in to vote!', 'error');
    return;
  }
  if (_voteLocks.has(commentId)) return;
  _voteLocks.add(commentId);

  try {
    if (!isFirebaseConfigured || !db) return;

    const docRef = db.collection('public_comments').doc(commentId);
    const doc = await docRef.get();
    if (!doc.exists) return;

    const data = doc.data();
    if (data.userId === currentUser.uid) {
      showToast(currentLang === 'tr' ? 'Kendi yorumuna oy veremezsin!' : 'You cannot vote on your own comment!', 'error');
      return;
    }

    const upvotedBy = Array.isArray(data.upvotedBy) ? data.upvotedBy : [];
    const downvotedBy = Array.isArray(data.downvotedBy) ? data.downvotedBy : [];
    const alreadyUpvoted = upvotedBy.includes(currentUser.uid);
    const alreadyDownvoted = downvotedBy.includes(currentUser.uid);

    const updateData = {};
    if (alreadyDownvoted) {
      // Toggle off: remove downvote
      updateData.downvotes = firebase.firestore.FieldValue.increment(-1);
      updateData.downvotedBy = firebase.firestore.FieldValue.arrayRemove(currentUser.uid);
    } else {
      // Add downvote; also remove upvote if present (mutual exclusion)
      updateData.downvotes = firebase.firestore.FieldValue.increment(1);
      updateData.downvotedBy = firebase.firestore.FieldValue.arrayUnion(currentUser.uid);
      if (alreadyUpvoted) {
        updateData.upvotes = firebase.firestore.FieldValue.increment(-1);
        updateData.upvotedBy = firebase.firestore.FieldValue.arrayRemove(currentUser.uid);
      }
    }

    // Optimistic UI update
    window._isVoting = true;
    _applyVoteOptimistic(commentId, alreadyDownvoted ? 'remove-down' : 'add-down', alreadyUpvoted);

    await docRef.update(updateData);
    setTimeout(() => { window._isVoting = false; }, 800);
  } catch(e) {
    console.error('Downvote error:', e);
  } finally {
    _voteLocks.delete(commentId);
  }
};

// Updates vote button counts & styles instantly without re-rendering the whole list
function _applyVoteOptimistic(commentId, action, hadOpposite) {
  const card = document.getElementById('comment_' + commentId);
  if (!card) return;

  const upBtn = card.querySelector('.upvote-btn');
  const downBtn = card.querySelector('.downvote-btn');
  if (!upBtn || !downBtn) return;

  const upCount = upBtn.querySelector('span');
  const downCount = downBtn.querySelector('span');
  if (!upCount || !downCount) return;

  let up = parseInt(upCount.textContent) || 0;
  let down = parseInt(downCount.textContent) || 0;

  if (action === 'add-up') {
    up++;
    if (hadOpposite) down = Math.max(0, down - 1);
    upBtn.classList.add('active');
    downBtn.classList.remove('active');
  } else if (action === 'remove-up') {
    up = Math.max(0, up - 1);
    upBtn.classList.remove('active');
  } else if (action === 'add-down') {
    down++;
    if (hadOpposite) up = Math.max(0, up - 1);
    downBtn.classList.add('active');
    upBtn.classList.remove('active');
  } else if (action === 'remove-down') {
    down = Math.max(0, down - 1);
    downBtn.classList.remove('active');
  }

  upCount.textContent = up;
  downCount.textContent = down;
}

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
  // Gönder butonunu bul (parent button)
  const sendBtn = btnText ? btnText.closest('button') : null;

  if (!title || !msg) {
    showToast('Lütfen başlık ve mesaj girin.', 'error');
    return;
  }

  if (recipientType === 'specific' && !targetUid) {
    showToast('Lütfen hedef kullanıcı UID girin.', 'error');
    return;
  }

  // ✅ Çift gönderimi önle — zaten gönderiliyorsa çık
  if (sendBtn && sendBtn.disabled) return;

  // Loading state
  if (sendBtn) sendBtn.disabled = true;
  if (btnText) btnText.style.opacity = '0.5';
  if (loader) loader.style.display = 'block';

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    createdAt: new Date(),
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

    // ✅ Vercel API üzerinden FCM push gönder (arka planda olan cihazlar için)
    try {
      const secret = window._adminNotifySecret || '';
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(secret ? { 'Authorization': `Bearer ${secret}` } : {})
        },
        body: JSON.stringify({
          title,
          body: msg,
          link: '/dashboard',
          recipientType,
          targetUid
        })
      });
    } catch (fcmErr) {
      // Vercel API erişilemiyorsa sessizce geç — Firestore bildirimi zaten gönderildi
      console.warn('Vercel FCM push isteği başarısız (önemli değil):', fcmErr.message);
    }
    
    showToast('Bildirim başarıyla gönderildi! 🎉', 'success');
    document.getElementById('adminNotifTitle').value = '';
    document.getElementById('adminNotifMessage').value = '';
    document.getElementById('adminNotifUid').value = '';
  } catch (err) {
    console.error('Notification error:', err);
    showToast('Bildirim gönderilemedi: ' + err.message, 'error');
  } finally {
    if (sendBtn) sendBtn.disabled = false;
    if (btnText) btnText.style.opacity = '1';
    if (loader) loader.style.display = 'none';
  }
};

async function adminLoadDashboardStats() {
  // Update system date
  const dateEl = document.getElementById('adminTodayDate');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
  }

  if (!db) return;
  try {
    const usersSnap = await db.collection('users').get();
    const uCount = document.getElementById('adminTotalUsers');
    if (uCount) uCount.textContent = usersSnap.size;

    // Count "active" users: those who have any workout log data
    let activeCount = 0;
    const recentActivity = [];
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    
    usersSnap.forEach(doc => {
      const top = doc.data() || {};
      const data = top.data || {};
      const profile = data.profile || top.profile || {};
      const displayName = profile.displayName || data.userName || top.userName || top.displayName || 'Anonim';
      const photoURL = profile.photoURL || top.photoURL || '';

      const logs = data.workoutLogs || {};
      const diets = data.dietLogs || {};
      const hasRecentLog = Object.keys(logs).some(dateKey => new Date(dateKey).getTime() >= sevenDaysAgo);
      if (hasRecentLog) activeCount++;
      
      const tStr = todayStr();
      let allLogs = [];
      Object.values(logs).forEach(dayArr => allLogs.push(...(dayArr||[])));
      Object.values(diets).forEach(dayArr => allLogs.push(...(dayArr||[])));
      
      if (allLogs.length > 0) {
        allLogs.sort((a,b) => b.timestamp - a.timestamp);
        const lastAction = allLogs[0];
        const lastActionTime = lastAction.timestamp;
        
        const todayWorkouts = (logs[tStr] || []).length;
        const todayDiets = (diets[tStr] || []).length;
        
        recentActivity.push({
          name: displayName,
          photoURL: photoURL,
          lastTime: lastActionTime,
          lastActionDesc: lastAction.exercise ? `${lastAction.exercise}` : (lastAction.name ? `${lastAction.name}` : 'Bilinmiyor'),
          todayStr: `Bugün: ${todayWorkouts} set, ${todayDiets} öğün`,
          uid: doc.id
        });
      }
    });
    
    const aCount = document.getElementById('adminActiveUsers');
    if (aCount) aCount.textContent = activeCount;

    // Render recent activity
    const actEl = document.getElementById('adminRecentActivity');
    if (actEl) {
      const topUsers = recentActivity.sort((a, b) => b.lastTime - a.lastTime).slice(0, 10);
      if (topUsers.length === 0) {
        actEl.textContent = 'Henüz aktivite yok.';
      } else {
        actEl.innerHTML = topUsers.map((u, i) => {
          const avatarHtml = u.photoURL 
            ? `<img src="${u.photoURL}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(255,255,255,0.1);flex-shrink:0;" referrerpolicy="no-referrer">` 
            : `<div style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:0.9rem;flex-shrink:0;">👤</div>`;
          
          const timeStr = new Date(u.lastTime).toLocaleString('tr-TR', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'});
          
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;align-items:center;gap:12px;min-width:0;text-align:left;">
                ${avatarHtml}
                <div style="display:flex;flex-direction:column;gap:3px;overflow:hidden;">
                  <span style="font-size:0.9rem;font-weight:700;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${u.name}">${u.name}</span>
                  <span style="font-size:0.75rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Son: ${u.lastActionDesc}</span>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0;">
                <span style="font-size:0.75rem;color:var(--text-muted);">${timeStr}</span>
                <span style="font-size:0.75rem;font-weight:600;color:var(--accent-primary);">${u.todayStr}</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Today's comments
    const commentsSnap = await db.collection('public_comments')
      .where('date', '==', todayStr())
      .get();
    const cCount = document.getElementById('adminTodayComments');
    if (cCount) cCount.textContent = commentsSnap.size;

    // Update user count badge
    const ucBadge = document.getElementById('adminUserCount');
    if (ucBadge) ucBadge.textContent = `${usersSnap.size} kullanıcı`;
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
        createdAt: new Date(),
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


window.adminResetAllXP = async function() {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;
  if (!confirm('TÜM kullanıcıların XP’si SIFIRLANACAK. Kullanıcılar yeniden antrenman yaparak XP kazanmaya başlayacak. Emin misiniz?')) return;

  const btn = document.getElementById('adminResetXPBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Sıfırlanıyor...'; }

  // Her kullanıcının organik XP'sini verilerinden hesapla
  function calcOrganicXP(data) {
    let xp = 0;
    // 1. Achievements
    xp += Object.keys(data.achievements || {}).length * 240;
    // 2. Attended days (attendance + workoutLogs birleşim)
    const days = new Set(
      Object.keys(data.attendance || {}).filter(d => (data.attendance || {})[d] === true)
    );
    Object.keys(data.workoutLogs || {}).forEach(d => {
      if ((data.workoutLogs[d] || []).length > 0) days.add(d);
    });
    xp += days.size * 60;
    // 3. Sets + PR bonus
    const maxW = {};
    Object.keys(data.workoutLogs || {}).sort().forEach(date => {
      (data.workoutLogs[date] || []).forEach(l => {
        xp += (l.sets || 1) * 12;
        const ex = l.exercise; const w = parseFloat(l.weight) || 0;
        if (ex && w > 0 && (!maxW[ex] || w > maxW[ex])) { maxW[ex] = w; xp += 60; }
      });
    });
    // 4. Weight log
    xp += Object.keys(data.weightLog || {}).length * 30;
    return xp;
  }

  try {
    const snap = await db.collection('users').get();
    let count = 0;
    let ops = [];

    snap.forEach(doc => {
      const userData = doc.data().data || {};
      const organicXP = calcOrganicXP(userData);
      // xpOffset = -organicXP → toplam XP = organicXP + (-organicXP) = 0
      ops.push({ docId: doc.id, offset: -organicXP });
      count++;
    });

    // Firestore batch max 500 op — bölüşmeli gönder
    const CHUNK = 200;
    for (let i = 0; i < ops.length; i += CHUNK) {
      const batch = db.batch();
      ops.slice(i, i + CHUNK).forEach(({ docId, offset }) => {
        const ref = db.collection('users').doc(docId);
        batch.update(ref, {
          'data.xpOffset': offset,
          'data.forcedXP': firebase.firestore.FieldValue.delete(),
          'data.forcedLevel': firebase.firestore.FieldValue.delete()
        });
        const pubRef = db.collection('public_stats').doc(docId);
        batch.set(pubRef, { xp: 0, level: 1, xpOffset: offset }, { merge: true });
      });
      await batch.commit();
    }

    showToast(`✅ ${count} kullanıcının XP'si gerçek anlamda sıfırlandı!`, 'success');
  } catch (e) {
    console.error('XP Reset Error:', e);
    showToast('Hata: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '🔄 Tüm XP\'leri Sıfırla'; }
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
      const photoURL = profile.photoURL || top.photoURL || '';
      let rankKey = email === 'wupard@gmail.com' ? 'kurucu' : (data.userRank || top.userRank || 'default');
      if (rankKey === 'admin') rankKey = 'mod';
      const rankLabel = (typeof RANKS !== 'undefined' && RANKS[rankKey] ? RANKS[rankKey].label : (rankKey || 'Üye'));
      const avatarHtml = photoURL 
        ? `<img src="${photoURL}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(255,255,255,0.1);flex-shrink:0;" referrerpolicy="no-referrer">` 
        : `<div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:0.95rem;flex-shrink:0;">👤</div>`;
      html += `
        <div style="padding:12px; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:12px; min-width:0;">
            ${avatarHtml}
            <div style="min-width:0;">
              <div style="font-weight:800; font-size:0.9rem; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${displayName || 'İsimsiz Kullanıcı'}">${displayName || 'İsimsiz Kullanıcı'}</div>
              <div style="font-size:0.72rem; color:var(--text-tertiary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${email || doc.id}</div>
              <div style="font-size:0.7rem; color:var(--text-tertiary);">Rank: ${rankLabel}</div>
            </div>
          </div>
          <button class="btn-small" onclick="adminViewUserDetails('${doc.id}')" style="flex-shrink:0; margin-left:12px;">Detay</button>
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
    let rankKey = email === 'wupard@gmail.com' ? 'kurucu' : (data.userRank || top.userRank || 'default');
    if (rankKey === 'admin') rankKey = 'mod';
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

    const banSnap = await db.collection('bans').doc(uid).get().catch(()=>null);
    const banData = banSnap && banSnap.exists ? banSnap.data() : null;
    const currentBanValue = banData && banData.type ? banData.type : 'none';

    const muteSnap = await db.collection('mutes').doc(uid).get().catch(()=>null);
    const muteData = muteSnap && muteSnap.exists ? muteSnap.data() : null;
    const currentMuteValue = muteData && muteData.type ? muteData.type : 'none';

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

        <!-- Yönetim Paneli -->
        <div class="card" style="padding:16px;">
          <div style="display:flex; align-items:center; gap:8px; font-size:0.95rem; font-weight:900; color:var(--text-primary); margin-bottom:16px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent-primary);"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Kullanıcı Yönetimi
          </div>
          ${email === 'wupard@gmail.com' ? '<div style="margin-bottom:16px; padding:10px 14px; border-radius:10px; background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.2); color:#ef4444; font-size:0.75rem; font-weight:700; display:flex; align-items:center; gap:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Sistem Kurucusu üzerinde işlem yapılamaz.</div>' : ''}
          <div style="display:flex; flex-direction:column; gap:16px; ${email === 'wupard@gmail.com' ? 'opacity:0.4; pointer-events:none;' : ''}">
            
            <div style="display:flex; flex-direction:column; gap:6px;">
              <label style="font-size:0.75rem; font-weight:700; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">🎖️ Kullanıcı Rütbesi (Rank)</label>
              <select class="log-input" style="width:100%; padding:10px; font-size:0.85rem; background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:10px; color:var(--text-primary);" onchange="adminUpdateRank('${uid}', this.value)">
                ${Object.keys(RANKS).map(r => `<option value="${r}" ${rankKey === r ? 'selected' : ''}>${RANKS[r].label}</option>`).join('')}
              </select>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:6px;">
              <label style="font-size:0.75rem; font-weight:700; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">🚫 Sisteme Giriş Engeli</label>
              <select class="log-input" style="width:100%; padding:10px; font-size:0.85rem; background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:10px; color:var(--text-primary);" onchange="adminUpdateBan('${uid}', this.value)">
                <option value="none" ${currentBanValue==='none'?'selected':''}>Yok (Aktif)</option>
                <option value="temp_1d" ${currentBanValue==='temp_1d'?'selected':''}>1 Gün Uzaklaştırma</option>
                <option value="temp_3d" ${currentBanValue==='temp_3d'?'selected':''}>3 Gün Uzaklaştırma</option>
                <option value="temp_1w" ${currentBanValue==='temp_1w'?'selected':''}>1 Hafta Uzaklaştırma</option>
                <option value="perm" ${currentBanValue==='perm'?'selected':''}>Kalıcı Olarak Banla</option>
              </select>
            </div>

            <div style="display:flex; flex-direction:column; gap:6px;">
              <label style="font-size:0.75rem; font-weight:700; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px;">🔇 Yorum Engeli (Mute)</label>
              <select class="log-input" style="width:100%; padding:10px; font-size:0.85rem; background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:10px; color:var(--text-primary);" onchange="adminUpdateMute('${uid}', this.value)">
                <option value="none" ${currentMuteValue==='none'?'selected':''}>Yok (Konuşabilir)</option>
                <option value="temp_1d" ${currentMuteValue==='temp_1d'?'selected':''}>1 Gün Sustur</option>
                <option value="temp_3d" ${currentMuteValue==='temp_3d'?'selected':''}>3 Gün Sustur</option>
                <option value="temp_1w" ${currentMuteValue==='temp_1w'?'selected':''}>1 Hafta Sustur</option>
                <option value="perm" ${currentMuteValue==='perm'?'selected':''}>Kalıcı Olarak Sustur</option>
              </select>
            </div>

            <!-- Seviye Atama -->
            <div style="display:flex; flex-direction:column; gap:8px; padding:14px; background:rgba(139,124,247,0.06); border:1px solid rgba(139,124,247,0.18); border-radius:12px;">
              <label style="font-size:0.75rem; font-weight:700; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.5px;">⚡ Manuel Seviye Ata</label>
              <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:2px;">Kullanıcının profilinde görünen seviyeyi manuel olarak ayarla. (1–100)</div>
              <div style="display:flex; gap:8px; align-items:center;">
                <input type="number" id="adminLevelInput_${uid}" data-uid="${uid}" min="1" max="100" placeholder="1–100"
                  class="log-input" style="width:100px; padding:10px; font-size:0.95rem; font-weight:800; text-align:center; background:rgba(255,255,255,0.03); border:1px solid rgba(139,124,247,0.25); border-radius:10px; color:var(--text-primary);">
                <button onclick="adminSetUserLevel('${uid}')"
                  style="flex:1; padding:10px 16px; background:linear-gradient(135deg,var(--accent-deep),var(--accent-primary)); color:#fff; border:none; border-radius:10px; font-size:0.85rem; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; transition:opacity 0.2s;"
                  onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Seviye Kaydet
                </button>
              </div>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <span style="font-size:0.68rem; color:var(--text-muted);">Hızlı:</span>
                ${[1,5,10,25,50,75,100].map(l => '<button onclick="document.getElementById(\'adminLevelInput_' + uid + '\').value=' + l + '" style="padding:3px 10px; border-radius:20px; border:1px solid rgba(139,124,247,0.25); background:rgba(139,124,247,0.08); color:var(--accent-primary); font-size:0.68rem; font-weight:700; cursor:pointer;">' + l + '</button>').join('')}
              </div>
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

window.adminUpdateRank = async function(uid, newRank) {
  if (!db) return;
  try {
    const snap = await db.collection('users').doc(uid).get();
    const email = snap.exists ? (snap.data().email || snap.data().data?.profile?.email) : null;
    if (email === 'wupard@gmail.com') {
      showToast('Kurucu hesabı üzerinde işlem yapılamaz!', 'error');
      return;
    }

    await db.collection('users').doc(uid).update({
      userRank: newRank,
      'data.userRank': newRank
    });
    showToast('Rank başarıyla güncellendi.', 'success');
  } catch(e) {
    showToast('Hata: ' + e.message, 'error');
  }
};

window.adminUpdateBan = async function(uid, type) {
  if (!db) return;
  try {
    const snap = await db.collection('users').doc(uid).get();
    const email = snap.exists ? (snap.data().email || snap.data().data?.profile?.email) : null;
    if (email === 'wupard@gmail.com') {
      showToast('Kurucu hesabı banlanamaz!', 'error');
      return;
    }

    if (type === 'none') {
      await db.collection('bans').doc(uid).delete();
    } else {
      let expiry = null;
      if (type === 'temp_1d') expiry = Date.now() + 24*60*60*1000;
      if (type === 'temp_3d') expiry = Date.now() + 3*24*60*60*1000;
      if (type === 'temp_1w') expiry = Date.now() + 7*24*60*60*1000;
      await db.collection('bans').doc(uid).set({
        type: type,
        expiry: expiry,
        reason: 'Admin kararı',
        timestamp: Date.now()
      });
    }
    showToast('Ban durumu güncellendi.', 'success');
  } catch(e) { showToast('Hata: ' + e.message, 'error'); }
};

window.adminUpdateMute = async function(uid, type) {
  if (!db) return;
  try {
    const snap = await db.collection('users').doc(uid).get();
    const email = snap.exists ? (snap.data().email || snap.data().data?.profile?.email) : null;
    if (email === 'wupard@gmail.com') {
      showToast('Kurucu hesabı susturulamaz!', 'error');
      return;
    }

    if (type === 'none') {
      await db.collection('mutes').doc(uid).delete();
    } else {
      let expiry = null;
      if (type === 'temp_1d') expiry = Date.now() + 24*60*60*1000;
      if (type === 'temp_3d') expiry = Date.now() + 3*24*60*60*1000;
      if (type === 'temp_1w') expiry = Date.now() + 7*24*60*60*1000;
      await db.collection('mutes').doc(uid).set({
        type: type,
        expiry: expiry,
        reason: 'Admin kararı',
        timestamp: Date.now()
      });
    }
    showToast('Yorum engeli durumu güncellendi.', 'success');
  } catch(e) { showToast('Hata: ' + e.message, 'error'); }
};

// Unified adminShowSection: toggle pre-existing admin sections
window.adminShowSection = function(section) {
  const sections = ['dashboard', 'notifications', 'users', 'comments', 'reports'];
  sections.forEach(s => {
    const el = document.getElementById(`admin${s.charAt(0).toUpperCase() + s.slice(1)}Section`);
    if (el) el.style.display = s === section ? 'block' : 'none';

    const btn = document.getElementById(`adminTab${s.charAt(0).toUpperCase() + s.slice(1)}`);
    if (btn) btn.classList.toggle('active', s === section);
  });

  if (section === 'users') adminLoadUsers();
  if (section === 'comments') adminLoadAllComments();
  if (section === 'dashboard') adminLoadDashboardStats();
  if (section === 'reports') adminLoadReports();
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

window.adminSetUserLevel = async function(uid) {
  if (!currentUser || currentUser.email !== 'wupard@gmail.com') return;

  // uid-specific input kutu
  const inputEl = document.getElementById(`adminLevelInput_${uid}`);
  if (!inputEl) { showToast('Giriş kutusu bulunamadı', 'error'); return; }

  const targetLevel = parseInt(inputEl.value, 10);
  if (isNaN(targetLevel) || targetLevel < 1 || targetLevel > 100) {
    showToast('Geçerli bir seviye girin (1–100)', 'error');
    return;
  }

  const btn = inputEl.parentElement ? inputEl.parentElement.querySelector('button') : null;
  if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }

  try {
    const forcedXP = Math.pow(targetLevel - 1, 2) * 50;

    await db.collection('users').doc(uid).update({
      'data.forcedLevel': targetLevel,
      'data.forcedXP': forcedXP
    });

    // public_stats'ı set(merge) ile güncelle — döküman yoksa da çalışır
    await db.collection('public_stats').doc(uid).set({
      level: targetLevel,
      xp: forcedXP
    }, { merge: true });

    showToast(`✅ Seviye ${targetLevel} atandı!`, 'success');
    inputEl.value = '';
  } catch (e) {
    console.error('Level Set Error:', e);
    showToast('Seviye atanamadı: ' + e.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
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


const PV_CAT={all:'Tümü',chest:'Göğüs',back:'Sırt',shoulders:'Omuz',biceps:'Biceps',triceps:'Triceps',legs:'Bacak',core:'Core'};
let pvCat='all', pvSelX=null;

function pvByEx(){
  const m={};
  Object.entries(appData.workoutLogs||{}).forEach(([date,logs])=>{
    logs.forEach(l=>{
      (m[l.exercise]=m[l.exercise]||{ex:l.exercise,cat:l.muscleGroup||l.category||'all',l:[]}).l.push({d:date,w:l.weight,r:l.reps,s:l.sets,id:l.id});
    });
  });
  return Object.values(m);
}
function pvBest(a){return a.reduce((b,x)=>!b||x.w>b.w||(x.w===b.w&&x.r>b.r)?x:b,null);}
function pvSess(e){
  const m={};
  e.l.forEach(l=>{if(!m[l.d]||l.w>m[l.d].w)m[l.d]=l;});
  return Object.values(m).sort((a,b)=>a.d.localeCompare(b.d));
}
function pvWkey(s){const d=new Date(s+'T00:00:00');d.setDate(d.getDate()-((d.getDay()+6)%7));return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}

function pvRenderStrength(anim){
  const chipsEl=document.getElementById('chips');
  const box=document.getElementById('strength');
  if(!chipsEl||!box) return;
  chipsEl.innerHTML=Object.entries(PV_CAT).map(([k,v])=>'<button data-c="'+k+'" aria-pressed="'+( k===pvCat)+'">'+v+'</button>').join('');
  const all=pvByEx();
  const f=all.filter(e=>pvCat==='all'||e.cat===pvCat);
  if(!all.length){box.innerHTML='<div class="pv-empty">Henüz kayıt yok. Antrenmanlarında girdiğin setler burada güç ilerlemene dönüşür.</div>';return;}
  if(!f.length){box.innerHTML='<div class="pv-empty">Bu kategoride henüz kayıt yok.</div>';return;}
  f.sort((a,b)=>pvSess(b).at(-1).d.localeCompare(pvSess(a).at(-1).d));
  if(!f.find(e=>e.ex===pvSelX))pvSelX=f[0].ex;
  const sc=(document.querySelector('.pv-xl')||{}).scrollTop||0;
  const cur=f.find(e=>e.ex===pvSelX),ss=pvSess(cur),PR=pvBest(cur.l),L=ss.at(-1);
  const items=f.map(e=>{
    const s=pvSess(e),l=s.at(-1),dl=s.length>1?l.w-s[0].w:0;
    return '<button class="pv-xi" data-x="'+e.ex+'" aria-pressed="'+( e.ex===pvSelX)+'"><div><b>'+e.ex+'</b><span>'+pvFw(l.w)+' kg × '+l.r+' tekrar × '+l.s+' set</span></div>'+(dl?'<span class="pv-dl'+(dl<0?' neg':'')+'">'+( dl>0?'+':'−')+pvFw(Math.abs(dl))+' kg</span>':'')+'</button>';
  }).join('');
  const pk=pvWkey(new Date(Date.now()-7*864e5).toISOString().slice(0,10));
  const wc=pvBest(cur.l.filter(l=>pvWkey(l.d)===pvWkey(new Date().toISOString().slice(0,10))));
  const wp=pvBest(cur.l.filter(l=>pvWkey(l.d)===pk));
  let weekly='<p>Karşılaştırmak için geçen haftadan da veri gerekli.</p>';
  if(wc&&wp){const x=wc.w-wp.w;weekly='<div class="pv-v">'+(x>0?'+':x<0?'−':'')+pvFw(Math.abs(x))+'<i>kg, geçen haftaya göre</i></div>'}
  const DAY=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
  box.innerHTML='<div class="pv-sg"><div class="pv-xl">'+items+'</div><div>'+
    '<h3 class="pv-dh">'+cur.ex+'</h3>'+
    '<div class="pv-cd pr"><small>En yüksek kaldırış (PR)</small><div class="pv-v">'+pvFw(PR.w)+'<i>kg · '+PR.r+' tekrar × '+PR.s+' set</i></div><p>'+pvFy(PR.d)+'</p></div>'+
    '<div class="pv-cd ls"><small>Son antrenman</small><div class="pv-v">'+pvFw(L.w)+'<i>kg · '+L.r+' tekrar × '+L.s+' set</i></div><p>Geçen antrenman '+DAY[new Date(L.d+'T00:00:00').getDay()]+' günü yapıldı. '+pvFy(L.d)+'.</p></div>'+
    '<div class="pv-cd"><small>Haftalık gelişim</small>'+weekly+'</div>'+
    (ss.length>1?'<div class="pv-cd"><small>Zamana göre en yüksek ağırlık</small><div id="xchart"></div></div>':'')+
    '</div></div>';
  const xl=document.querySelector('.pv-xl');if(xl)xl.scrollTop=sc;
  if(ss.length>1){
    const xc=document.getElementById('xchart');
    if(xc)lineChart(xc,ss.map(s=>({t:new Date(s.d+'T00:00:00').getTime(),y:s.w,label:pvFd(s.d)})),190,anim);
  }
}
function renderProgressTracker() {
  const container = document.getElementById('progressTrackerContainer');
  if(!container) return;
  
  const allStats = computeExerciseStats();
  
  if (allStats.length === 0) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 48px 0; text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 16px; background: rgba(52, 211, 153, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <p style="font-size: 1.125rem; font-weight: 600; margin: 0 0 4px 0;">${t('noData')}</p>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">${t('asYouLogExercises')}</p>
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

  // ── Kategori butonları: wrap grid (kaydırmasız)
  const CAT_LABELS = {
    'chest': currentLang === 'tr' ? 'Göğüs' : 'Chest',
    'shoulders': currentLang === 'tr' ? 'Omuz' : 'Shoulders',
    'back': currentLang === 'tr' ? 'Sırt' : 'Back',
    'biceps': 'Biceps',
    'forearms': currentLang === 'tr' ? 'Önkol' : 'Forearms',
    'traps': currentLang === 'tr' ? 'Trapez' : 'Traps',
    'triceps': 'Triceps',
    'quads': 'Quads',
    'hamstrings': currentLang === 'tr' ? 'Hamstring & Kalça' : 'Hamstrings & Glutes',
    'calves': currentLang === 'tr' ? 'Baldır' : 'Calves',
    'core': 'Core',
    'legs': currentLang === 'tr' ? 'Bacak' : 'Legs',
    'wrists': currentLang === 'tr' ? 'Bilek' : 'Wrists',
    'other': currentLang === 'tr' ? 'Diğer' : 'Other'
  };










  let catBtnsHtml = `<button onclick="setTrackerCategory('')" class="tracker-cat-btn ${!currentTrackerCategory?'active':''}"><span style="display:inline-flex;align-items:center;gap:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> ${currentLang === 'tr' ? 'Tümü' : 'All'}</span></button>`;
  Object.keys(EXERCISE_CATEGORIES).forEach(cat => {
    const label = CAT_LABELS[cat] || (cat.charAt(0).toUpperCase() + cat.slice(1));
    catBtnsHtml += `<button onclick="setTrackerCategory('${cat}')" class="tracker-cat-btn ${currentTrackerCategory===cat?'active':''}"><span style="display:inline-flex;align-items:center;gap:4px;">${CATEGORY_ICONS[cat] || ''} ${label}</span></button>`;
  });
  
  let listHtml = '';
  filtered.forEach(ex => {
    const isSelected = selectedEx && selectedEx.name === ex.name;
    const currentUnit = ex.currentUnit || 'kg';
    const baselineUnit = ex.baselineUnit || 'kg';
    let baselineInCurrentUnit = ex.baselineWeight;
    if (currentUnit !== baselineUnit) {
      if (currentUnit === 'lbs') {
        baselineInCurrentUnit = ex.baselineWeightKg / 0.453592;
      } else {
        baselineInCurrentUnit = ex.baselineWeightKg;
      }
    }
    const diff = parseFloat((ex.currentWeight - baselineInCurrentUnit).toFixed(1));
    const diffNode = diff !== 0 
      ? `<span style="font-size: 0.75rem; font-weight: bold; color: ${diff > 0 ? '#34d399' : '#f87171'}">${diff > 0 ? '+' : ''}${diff}${currentUnit}</span>`
      : '';
    listHtml += `
      <button onclick="setTrackerExercise('${ex.name.replace(/'/g, "\\'")}')"
        class="tracker-list-item ${isSelected ? 'selected' : ''}">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="tracker-list-icon" style="background: rgba(139,124,247,0.1); color: #8B7CF7; flex-shrink:0;">
            ${CATEGORY_ICONS[ex.category] || '🏋️'}
          </div>
          <div style="text-align: left; min-width:0;">
            <p style="margin: 0; font-weight: 500; font-size: 0.875rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:140px;">${ex.name}</p>
            <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted);">${ex.currentWeight}${currentUnit} × ${ex.currentReps} ${currentLang === 'en' ? 'rep' : 'tekrar'} × ${ex.currentSets||1} set</p>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; flex-shrink:0;">
          ${diffNode}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </button>
    `;
  });
  
  // ── Detay kartı: All-time PR + Bu Hafta + Progress
  let detailHtml = '';
  if (selectedEx) {
    const formatDate = (ds) => ds ? new Date(ds+'T00:00:00').toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US', {day:'numeric',month:'short',year:'numeric'}) : '—';
    const prUnit = selectedEx.prUnit || 'kg';
    const currentUnit = selectedEx.currentUnit || 'kg';
    const weekUnit = selectedEx.weekUnit || 'kg';
    
    // PR section
    const prHtml = `
      <div style="background:linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.02)); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 16px; padding: 18px 20px; margin-bottom: 12px; box-shadow: 0 8px 32px rgba(255, 215, 0, 0.05); backdrop-filter: blur(8px);">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <div style="background: rgba(255, 215, 0, 0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">🏆</div>
          <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#FFD700;text-shadow: 0 0 8px rgba(255,215,0,0.4);">${currentLang === 'tr' ? 'En Yüksek Kaldırış (All-Time PR)' : 'Highest Lift (All-Time PR)'}</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;">
          <span style="font-size:1.8rem;font-weight:900;color:#FFD700;letter-spacing:-0.02em;">${selectedEx.prWeight} ${prUnit}</span>
          <span style="font-size:0.9rem;color:rgba(255,255,255,0.7);font-weight:500;">${selectedEx.prReps} ${currentLang === 'en' ? 'reps' : 'tekrar'} × ${selectedEx.prSets||1} set</span>
        </div>
        <div style="margin-top:8px;font-size:0.75rem;color:rgba(255,255,255,0.5);display:flex;align-items:center;gap:6px;font-weight:500;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${formatDate(selectedEx.prDate)}
        </div>
      </div>`;

    // Son Antrenman section
    const hasWorkout = selectedEx.currentWeight !== undefined && selectedEx.lastUpdated !== null;
    let dayName = '';
    if(hasWorkout && selectedEx.lastUpdated) {
      const d = new Date(selectedEx.lastUpdated+'T00:00:00');
      dayName = d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US', {weekday:'long'});
    }
    const lastWorkoutHtml = `
      <div style="background:linear-gradient(135deg, rgba(52, 211, 153, 0.08), rgba(52, 211, 153, 0.02)); border: 1px solid rgba(52, 211, 153, 0.25); border-radius: 16px; padding: 18px 20px; margin-bottom: 12px; box-shadow: 0 8px 32px rgba(52, 211, 153, 0.05); backdrop-filter: blur(8px);">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <div style="background: rgba(52, 211, 153, 0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 10px rgba(52, 211, 153, 0.3);">⚡</div>
          <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#34d399;text-shadow: 0 0 8px rgba(52,211,153,0.3);">${currentLang === 'tr' ? 'Son Antrenman' : 'Last Workout'}</span>
        </div>
        ${hasWorkout ? `
          <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;">
            <span style="font-size:1.6rem;font-weight:900;color:#34d399;letter-spacing:-0.02em;">${selectedEx.currentWeight} ${currentUnit}</span>
            <span style="font-size:0.9rem;color:rgba(255,255,255,0.7);font-weight:500;">${selectedEx.currentReps} ${currentLang === 'en' ? 'reps' : 'tekrar'} × ${selectedEx.currentSets||1} set</span>
          </div>
          <div style="margin-top:8px;font-size:0.8rem;color:rgba(255,255,255,0.6);font-weight:500;line-height:1.4;">
            ${currentLang === 'tr' 
              ? `Geçen antrenman <strong style="color:#34d399;">${dayName}</strong> günü yapıldı. <br>
                 ${dayName} günü <strong>${selectedEx.currentWeight} ${currentUnit}</strong> ile <strong>${selectedEx.currentReps}</strong> tekrar <strong>${selectedEx.currentSets||1}</strong> set atıldı.`
              : `Last workout was done on <strong style="color:#34d399;">${dayName}</strong>. <br>
                 Performed <strong>${selectedEx.currentWeight} ${currentUnit}</strong> with <strong>${selectedEx.currentReps}</strong> reps for <strong>${selectedEx.currentSets||1}</strong> sets.`}
          </div>
          <div style="margin-top:8px;font-size:0.75rem;color:rgba(255,255,255,0.4);display:flex;align-items:center;gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${formatDate(selectedEx.lastUpdated)}
          </div>
        ` : `<div style="font-size:0.85rem;color:var(--text-muted);">${currentLang === 'tr' ? 'Henüz kayıt yok' : 'No records yet'}</div>`}
      </div>`;

    // Haftalık progress section
    let progressHtml = '';
    const hasWeek = selectedEx.weekWeight !== null;
    if (selectedEx.weekDelta !== null && hasWeek) {
      const isUp = selectedEx.weekDelta > 0;
      const isDown = selectedEx.weekDelta < 0;
      const pct = selectedEx.prevWeekWeightKg ? Math.abs(Math.round((selectedEx.weekDelta / (selectedEx.prevWeekWeightKg * (selectedEx.weekUnit === 'lbs' ? 2.20462 : 1))) * 100)) : 0;
      const barW = Math.min(100, pct * 2);
      let prevWeekWeightInWeekUnit = '—';
      if (selectedEx.prevWeekWeightKg !== null) {
        const converted = selectedEx.weekUnit === 'lbs' ? selectedEx.prevWeekWeightKg / 0.453592 : selectedEx.prevWeekWeightKg;
        prevWeekWeightInWeekUnit = parseFloat(converted.toFixed(1));
      }
      progressHtml = `
        <div style="background:linear-gradient(135deg, rgba(139, 124, 247, 0.08), rgba(139, 124, 247, 0.02)); border: 1px solid rgba(139, 124, 247, 0.25); border-radius: 16px; padding: 18px 20px; box-shadow: 0 8px 32px rgba(139, 124, 247, 0.05); backdrop-filter: blur(8px);">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div style="background: rgba(139, 124, 247, 0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 10px rgba(139, 124, 247, 0.3);">📈</div>
            <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-primary);text-shadow: 0 0 8px rgba(139,124,247,0.3);">${t('weeklyGrowth')}</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:1.6rem;font-weight:900;color:${isUp?'#34d399':isDown?'#f87171':'var(--text-muted)'};letter-spacing:-0.02em;">${isUp?'+':''}${selectedEx.weekDelta} ${weekUnit}</span>
            ${pct > 0 ? `<span style="font-size:0.85rem;color:${isUp?'#34d399':isDown?'#f87171':'var(--text-muted)'};font-weight:700;padding:2px 8px;background:${isUp?'rgba(52,211,153,0.15)':isDown?'rgba(248,113,113,0.15)':'rgba(255,255,255,0.1)'};border-radius:12px;">${isUp?'+':''}${isDown?'-':''}${pct}%</span>` : ''}
          </div>
          <div style="margin-top:14px;background:rgba(255,255,255,0.05);border-radius:99px;height:8px;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2);">
            <div style="height:100%;width:${barW}%;background:linear-gradient(90deg, ${isUp?'#10b981, #34d399':isDown?'#ef4444, #f87171':'var(--accent-primary)'});border-radius:99px;transition:width 0.8s cubic-bezier(0.4, 0, 0.2, 1);box-shadow: 0 0 10px ${isUp?'rgba(52,211,153,0.5)':isDown?'rgba(248,113,113,0.5)':'rgba(139,124,247,0.5)'};"></div>
          </div>
          <div style="margin-top:10px;font-size:0.75rem;color:rgba(255,255,255,0.5);font-weight:500;">${currentLang === 'tr' ? 'Bu hafta vs geçen hafta' : 'This week vs last week'} (${prevWeekWeightInWeekUnit} ${weekUnit})</div>
        </div>`;
    } else if (hasWeek) {
      progressHtml = `
        <div style="background:linear-gradient(135deg, rgba(139, 124, 247, 0.05), rgba(139, 124, 247, 0.01)); border: 1px solid rgba(139, 124, 247, 0.15); border-radius: 16px; padding: 16px 20px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="font-size:1.1rem;opacity:0.8;">📈</span>
            <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-primary);">${t('weeklyGrowth')}</span>
          </div>
          <div style="font-size:0.85rem;color:rgba(255,255,255,0.5);font-weight:500;">${currentLang === 'tr' ? 'Karşılaştırmak için geçen haftadan da veri gerekli.' : 'Data from last week is also required to compare.'}</div>
        </div>`;
    }

    detailHtml = `
      <div style="margin-top:16px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span style="font-size:1.1rem;">${CATEGORY_ICONS[selectedEx.category] || '🏋️'}</span>
          <h4 style="margin:0;font-weight:800;color:var(--text-primary);font-size:1rem;">${selectedEx.name}</h4>
        </div>
        ${prHtml}
        ${lastWorkoutHtml}
        ${progressHtml}
      </div>
    `;
  }
  
  container.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:6px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);margin-bottom:4px;">
      ${catBtnsHtml}
    </div>
    
    <div style="margin-top:14px;">
      <label style="font-size:0.625rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);display:block;margin-bottom:8px;">
        Egzersiz Seç (${filtered.length})
      </label>
      <div style="display:grid;gap:6px;max-height:200px;overflow-y:auto;" class="no-scrollbar">
        ${listHtml || '<div style="color:var(--text-muted);font-size:0.85rem;padding:12px;">Bu kategoride egzersiz yok</div>'}
      </div>
    </div>
    
    ${detailHtml}
  `;
}


// =============================================
// CALCULATORS
// =============================================
// ============================================================
// ZYRO HESAPLAYICILAR (CALCULATORS) — Zyro Panel v3 Redesign
// 5 Calculators: 1RM, Unit Converter, Body Fat, Growth, Macros
// 1RM exercises populate automatically from user's workoutLogs & default workout program
// ============================================================
let currentCalcTab = 'rm';

const CALC_TABS = [
  ['rm', { tr: '1RM Hesapla', en: '1RM Calculator' }],
  ['un', { tr: 'Birim Dönüştürücü', en: 'Unit Converter' }],
  ['bf', { tr: 'Yağ Oranı', en: 'Body Fat' }],
  ['pr', { tr: 'Gelişim', en: 'Growth / Progress' }],
  ['mc', { tr: 'Makro/Kalori', en: 'Macros / Calories' }]
];

const CALC_CATS = {
  all: { tr: 'Tümü (Tüm Vücut)', en: 'All (Full Body)' },
  chest: { tr: 'Göğüs', en: 'Chest' },
  back: { tr: 'Sırt', en: 'Back' },
  shoulders: { tr: 'Omuz', en: 'Shoulders' },
  biceps: { tr: 'Biceps', en: 'Biceps' },
  triceps: { tr: 'Triceps', en: 'Triceps' },
  legs: { tr: 'Bacak', en: 'Legs' },
  core: { tr: 'Core', en: 'Core' }
};

const CALC_ACT = [
  [1.2, { tr: 'Hareketsiz', en: 'Sedentary' }, { tr: 'Masa başı, az egzersiz', en: 'Desk job, little exercise' }],
  [1.375, { tr: 'Hafif aktif', en: 'Lightly active' }, { tr: 'Haftada 1–3 gün egzersiz', en: '1–3 days/week exercise' }],
  [1.55, { tr: 'Orta aktif', en: 'Moderately active' }, { tr: 'Haftada 3–5 gün egzersiz', en: '3–5 days/week exercise' }],
  [1.725, { tr: 'Çok aktif', en: 'Very active' }, { tr: 'Haftada 6–7 gün egzersiz', en: '6–7 days/week exercise' }],
  [1.9, { tr: 'Ekstra aktif', en: 'Extra active' }, { tr: 'Günde iki antrenman / ağır iş', en: 'Twice a day / heavy work' }]
];

function getUserWorkoutExercises() {
  const map = new Map();

  // 1) From shared program if available
  if (window.ZyroProgram && window.ZyroProgram.DAYS) {
    Object.values(window.ZyroProgram.DAYS).forEach(day => {
      (day.exercises || []).forEach(ex => {
        if (!map.has(ex.name)) {
          map.set(ex.name, { cat: ex.cat || 'chest', ex: ex.name, w: 0, r: 0 });
        }
      });
    });
  }

  // Fallback defaults if map empty
  if (map.size === 0) {
    const defaults = [
      { cat: 'chest', ex: 'Bench Press', w: 80, r: 8 },
      { cat: 'chest', ex: 'Incline Dumbbell Press', w: 28, r: 10 },
      { cat: 'back', ex: 'Barbell Row', w: 70, r: 8 },
      { cat: 'back', ex: 'Lat Pulldown', w: 65, r: 10 },
      { cat: 'legs', ex: 'Squat', w: 100, r: 6 },
      { cat: 'legs', ex: 'Romanian Deadlift', w: 90, r: 8 },
      { cat: 'shoulders', ex: 'Overhead Press', w: 45, r: 8 },
      { cat: 'biceps', ex: 'Barbell Curl', w: 30, r: 10 },
      { cat: 'triceps', ex: 'Triceps Pushdown', w: 35, r: 12 }
    ];
    defaults.forEach(d => map.set(d.ex, d));
  }

  // 2) Overlay user's real workoutLogs to get latest weight & reps
  if (appData && appData.workoutLogs) {
    Object.keys(appData.workoutLogs).forEach(dateKey => {
      const logs = appData.workoutLogs[dateKey] || [];
      logs.forEach(l => {
        if (l.exercise) {
          const existing = map.get(l.exercise) || { cat: 'chest', ex: l.exercise, w: 0, r: 0 };
          const w = parseFloat(l.weight) || 0;
          const r = parseInt(l.reps) || 0;
          if (w > 0) {
            existing.w = w;
            existing.r = r;
          }
          map.set(l.exercise, existing);
        }
      });
    });
  }

  return Array.from(map.values());
}

// Custom dropdown registry
const DD = {};
function ddClose(d) {
  const l = d.querySelector('.dd-l');
  const b = d.querySelector('.dd-b');
  if (l) l.hidden = true;
  if (b) b.setAttribute('aria-expanded', 'false');
}

function ddHTML(id, l) {
  return `<div class="fld"><label id="${id}-l">${l}</label><div class="dd" id="${id}" data-v=""><button type="button" class="in dd-b" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="${id}-l"><span></span><svg class="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button><div class="dd-l" role="listbox" hidden></div></div></div>`;
}

function ddDraw(id) {
  const d = document.getElementById(id);
  if (!d || !DD[id]) return;
  const { opts, ph } = DD[id];
  const cur = opts.find(o => String(o[0]) === d.dataset.v);
  const sp = d.querySelector('.dd-b span');
  if (sp) {
    sp.textContent = cur ? cur[1] : ph;
    sp.classList.toggle('ph', !cur);
  }
  const listEl = d.querySelector('.dd-l');
  if (listEl) {
    listEl.innerHTML = opts.length
      ? (opts.length > 8 ? `<input class="in dd-s" placeholder="${currentLang === 'tr' ? 'Ara…' : 'Search…'}" aria-label="Ara">` : '') +
        opts.map(o => `<button type="button" role="option" data-o="${escapeHtml(String(o[0]))}" aria-selected="${String(o[0]) === d.dataset.v}"><span>${escapeHtml(o[1])}</span>${o[2] ? `<small>${escapeHtml(o[2])}</small>` : ''}</button>`).join('')
      : `<div class="dd-e">${currentLang === 'tr' ? 'Bu kategoride egzersiz yok' : 'No exercise in this category'}</div>`;
  }
}

function ddSet(id, opts, v, ph, cb) {
  DD[id] = { opts, ph, cb };
  const d = document.getElementById(id);
  if (d) {
    d.dataset.v = v == null ? '' : v;
    ddDraw(id);
  }
}

function initCalculators() {
  const tl = document.getElementById('tl');
  const pane = document.getElementById('pane');
  if (!tl || !pane) return;

  // Dropdown global document click & keydown listeners (setup once)
  if (!window.__zyroCalcDDInited) {
    window.__zyroCalcDDInited = true;
    document.addEventListener('click', e => {
      const b = e.target.closest('.dd-b');
      const o = e.target.closest('[data-o]');
      document.querySelectorAll('.dd').forEach(d => {
        if (!d.contains(e.target) || (b && b.parentNode === d && b.getAttribute('aria-expanded') === 'true')) {
          ddClose(d);
        }
      });
      if (b) {
        const d = b.parentNode;
        const l = d.querySelector('.dd-l');
        if (b.getAttribute('aria-expanded') !== 'true') {
          l.hidden = false;
          b.setAttribute('aria-expanded', 'true');
          const f = l.querySelector('[aria-selected=true]') || l.querySelector('[data-o]');
          if (f) f.focus({ preventScroll: false });
        }
      } else if (o) {
        const d = o.closest('.dd');
        d.dataset.v = o.dataset.o;
        ddDraw(d.id);
        ddClose(d);
        const btn = d.querySelector('.dd-b');
        if (btn) btn.focus();
        if (DD[d.id] && DD[d.id].cb) DD[d.id].cb(d.dataset.v);
      }
    });

    document.addEventListener('input', e => {
      if (e.target.classList.contains('dd-s')) {
        const q = e.target.value.toLowerCase();
        e.target.parentNode.querySelectorAll('[data-o]').forEach(b => {
          b.hidden = !b.textContent.toLowerCase().includes(q);
        });
      }
    });

    document.addEventListener('keydown', e => {
      const d = e.target.closest && e.target.closest('.dd');
      if (!d) return;
      if (e.key === 'Escape') {
        ddClose(d);
        const btn = d.querySelector('.dd-b');
        if (btn) btn.focus();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const l = d.querySelector('.dd-l');
        if (l.hidden) {
          const btn = d.querySelector('.dd-b');
          if (btn) btn.click();
          return;
        }
        const a = [...l.querySelectorAll('[data-o]')].filter(x => !x.hidden);
        const i = a.indexOf(document.activeElement);
        const n = e.key === 'ArrowDown' ? Math.min(a.length - 1, i + 1) : Math.max(0, i - 1);
        if (a[n]) a[n].focus();
      }
    });
  }

  tl.onclick = e => {
    const b = e.target.closest('[data-t]');
    if (b) {
      currentCalcTab = b.dataset.t;
      renderCalculators();
    }
  };

  pane.onclick = e => {
    if (e.target.closest('[data-go]')) executeCalc(currentCalcTab);
  };

  pane.onkeydown = e => {
    if (e.key === 'Enter' && e.target.matches('input.in')) executeCalc(currentCalcTab);
  };

  renderCalculators();
}

function renderCalculators() {
  const tl = document.getElementById('tl');
  const pane = document.getElementById('pane');
  if (!tl || !pane) return;

  // Render tab list
  tl.innerHTML = CALC_TABS.map(([k, nameObj]) =>
    `<button role="tab" data-t="${k}" aria-selected="${k === currentCalcTab}">${nameObj[currentLang] || nameObj.tr}</button>`
  ).join('');

  // Render active view
  pane.innerHTML = getCalcViewHTML(currentCalcTab);
  setupCalcView(currentCalcTab);
}

function getCalcViewHTML(tab) {
  const numInp = (id, label, unit, ph) =>
    `<div class="fld"><label for="${id}">${label}</label><div class="u"><input class="in" id="${id}" inputmode="decimal" placeholder="${ph || ''}" autocomplete="off"><span>${unit || ''}</span></div></div>`;

  const genderSeg = () =>
    `<div class="seg2" role="radiogroup" aria-label="Cinsiyet" style="margin-bottom:16px"><input type="radio" name="calcG" id="calcG1" value="m" checked><label for="calcG1">${currentLang === 'tr' ? 'Erkek' : 'Male'}</label><input type="radio" name="calcG" id="calcG2" value="f"><label for="calcG2">${currentLang === 'tr' ? 'Kadın' : 'Female'}</label></div>`;

  const tailBtn = label =>
    `<button class="btn w" data-go>${label}</button><div class="err" id="calcErr" role="alert"></div><div id="calcRes" aria-live="polite"></div>`;

  const headBlock = (iconHref, title, subtitle) =>
    `<div class="ph2"><div class="ibox" style="width:44px;height:44px;border-radius:14px"><svg class="i"><use href="#${iconHref}"/></svg></div><div><b>${title}</b><span>${subtitle}</span></div></div>`;

  if (tab === 'rm') {
    return headBlock('zr-i-trend', currentLang === 'tr' ? '1RM Hesaplayıcı' : '1RM Calculator', currentLang === 'tr' ? 'Epley formülü • Loglardan otomatik' : 'Epley formula • Auto from logs') +
      `<div class="fl">${ddHTML('calcCat', currentLang === 'tr' ? 'Kategori seç' : 'Select category')}${ddHTML('calcEx', currentLang === 'tr' ? 'Egzersiz' : 'Exercise')}</div>` +
      `<div class="fl" style="margin-top:14px">${numInp('calcW', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '0')}${numInp('calcR', currentLang === 'tr' ? 'Tekrar sayısı' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '0')}</div>` +
      tailBtn(currentLang === 'tr' ? '1RM hesapla' : 'Calculate 1RM');
  }

  if (tab === 'un') {
    return `<div class="fl">${numInp('calcKg', currentLang === 'tr' ? 'Kilogram (kg)' : 'Kilogram (kg)', 'KG', '0')}${numInp('calcLb', currentLang === 'tr' ? 'Pounds (lbs)' : 'Pounds (lbs)', 'LB', '0')}</div>`;
  }

  if (tab === 'bf') {
    return genderSeg() +
      `<div class="fl">${numInp('calcH', currentLang === 'tr' ? 'Boy' : 'Height', 'CM', 'cm')}${numInp('calcWa', currentLang === 'tr' ? 'Bel' : 'Waist', 'CM', 'cm')}${numInp('calcNe', currentLang === 'tr' ? 'Boyun' : 'Neck', 'CM', 'cm')}<div id="calcHipWrap" hidden>${numInp('calcHi', currentLang === 'tr' ? 'Kalça' : 'Hip', 'CM', 'cm')}</div></div>` +
      tailBtn(currentLang === 'tr' ? 'Yağ oranını hesapla' : 'Calculate Body Fat');
  }

  if (tab === 'pr') {
    return headBlock('zr-i-ba', currentLang === 'tr' ? 'Gelişim kıyaslaması' : 'Growth Comparison', currentLang === 'tr' ? 'Önceki ve şu anki kaldırışını karşılaştır' : 'Compare past and current lifts') +
      `<p style="margin:0 0 10px;color:var(--steel);font-size:12px;letter-spacing:.06em">${currentLang === 'tr' ? 'ÖNCEKİ KALDIRIŞ' : 'PREVIOUS LIFT'}</p>` +
      `<div class="fl">${numInp('calcW1', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '80')}${numInp('calcR1', currentLang === 'tr' ? 'Tekrar' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '8')}</div>` +
      `<p style="margin:22px 0 10px;color:var(--steel);font-size:12px;letter-spacing:.06em">${currentLang === 'tr' ? 'ŞU ANKİ KALDIRIŞ' : 'CURRENT LIFT'}</p>` +
      `<div class="fl">${numInp('calcW2', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '85')}${numInp('calcR2', currentLang === 'tr' ? 'Tekrar' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '10')}</div>` +
      tailBtn(currentLang === 'tr' ? 'Kıyasla' : 'Compare');
  }

  if (tab === 'mc') {
    return `<div class="fl">${numInp('calcMcW', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', 'kg')}${numInp('calcMcH', currentLang === 'tr' ? 'Boy' : 'Height', 'CM', 'cm')}${numInp('calcMcA', currentLang === 'tr' ? 'Yaş' : 'Age', currentLang === 'tr' ? 'YIL' : 'YRS', 'yıl')}</div>` +
      `<div style="margin:14px 0 16px">${ddHTML('calcAct', currentLang === 'tr' ? 'Aktivite seviyesi' : 'Activity level')}</div>` +
      genderSeg() +
      tailBtn(currentLang === 'tr' ? 'Makro / kalori hesapla' : 'Calculate Macros / Calories');
  }

  return '';
}

function setupCalcView(tab) {
  if (tab === 'rm') {
    const exercises = getUserWorkoutExercises();
    const catOpts = Object.entries(CALC_CATS).map(([k, obj]) => [k, obj[currentLang] || obj.tr]);

    function updateExOpts() {
      const selectedCat = document.getElementById('calcCat')?.dataset.v || 'all';
      const filtered = exercises.filter(e => selectedCat === 'all' || e.cat === selectedCat);
      ddSet(
        'calcEx',
        filtered.map(e => [e.ex, e.ex, e.w ? `${e.w} kg × ${e.r}` : '']),
        '',
        currentLang === 'tr' ? 'Egzersiz seçin…' : 'Select exercise…',
        v => {
          const match = exercises.find(q => q.ex === v);
          if (match && match.w) {
            const wInput = document.getElementById('calcW');
            const rInput = document.getElementById('calcR');
            if (wInput) wInput.value = match.w;
            if (rInput) rInput.value = match.r;
          }
        }
      );
    }

    ddSet('calcCat', catOpts, 'all', currentLang === 'tr' ? 'Kategori seç' : 'Select category', updateExOpts);
    updateExOpts();
  }

  if (tab === 'un') {
    const kg = document.getElementById('calcKg');
    const lb = document.getElementById('calcLb');
    if (kg && lb) {
      kg.oninput = e => {
        const v = parseFloat(e.target.value.replace(',', '.'));
        lb.value = (!isNaN(v) && v >= 0) ? (v * 2.20462).toFixed(2).replace('.', ',') : '';
      };
      lb.oninput = e => {
        const v = parseFloat(e.target.value.replace(',', '.'));
        kg.value = (!isNaN(v) && v >= 0) ? (v / 2.20462).toFixed(2).replace('.', ',') : '';
      };
    }
  }

  if (tab === 'bf') {
    document.querySelectorAll('[name=calcG]').forEach(r => {
      r.onchange = () => {
        const isMale = document.getElementById('calcG1').checked;
        const hipWrap = document.getElementById('calcHipWrap');
        if (hipWrap) hipWrap.hidden = isMale;
      };
    });
  }

  if (tab === 'mc') {
    const actOpts = CALC_ACT.map(([mult, titleObj, descObj]) => [
      mult,
      titleObj[currentLang] || titleObj.tr,
      descObj[currentLang] || descObj.tr
    ]);
    ddSet('calcAct', actOpts, '1.55', currentLang === 'tr' ? 'Seç' : 'Select');
  }
}

function executeCalc(tab) {
  const getNum = id => {
    const el = document.getElementById(id);
    return el ? parseFloat((el.value || '').replace(',', '.')) : NaN;
  };
  const setErr = msg => {
    const res = document.getElementById('calcRes');
    const err = document.getElementById('calcErr');
    if (res) res.innerHTML = '';
    if (err) err.textContent = msg;
  };
  const setOk = html => {
    const res = document.getElementById('calcRes');
    const err = document.getElementById('calcErr');
    if (err) err.textContent = '';
    if (res) res.innerHTML = `<div class="rs">${html}</div>`;
  };

  const epley = (w, r) => (r === 1 ? w : w * (1 + r / 30));

  if (tab === 'rm') {
    const w = getNum('calcW');
    const r = getNum('calcR');
    if (!(w > 0 && w < 1000)) return setErr(currentLang === 'tr' ? 'Geçerli bir ağırlık gir.' : 'Enter a valid weight.');
    if (!(Number.isInteger(r) && r >= 1 && r <= 30)) return setErr(currentLang === 'tr' ? 'Tekrar sayısı 1–30 arasında tam sayı olmalı.' : 'Reps must be integer between 1–30.');

    const m = epley(w, r);
    const percentages = [95, 90, 85, 80, 75, 70, 60, 50];
    const rows = percentages.map(p =>
      `<tr><td>%${p}</td><td>${(Math.round(m * p / 100 * 2) / 2).toFixed(1).replace('.', ',')} kg</td></tr>`
    ).join('');

    setOk(`
      <div class="v">${m.toFixed(1).replace('.', ',')}<small>kg · ${currentLang === 'tr' ? 'tahmini 1RM' : 'est. 1RM'}</small></div>
      <table class="pt">${rows}</table>
    `);
  }

  if (tab === 'bf') {
    const isMale = document.getElementById('calcG1').checked;
    const h = getNum('calcH');
    const wa = getNum('calcWa');
    const ne = getNum('calcNe');
    const hi = getNum('calcHi');

    if (![h, wa, ne].every(x => x > 0)) return setErr(currentLang === 'tr' ? 'Boy, bel ve boyun ölçülerini gir.' : 'Enter height, waist and neck.');
    if (!isMale && !(hi > 0)) return setErr(currentLang === 'tr' ? 'Kalça ölçüsünü gir.' : 'Enter hip measurement.');

    const d = isMale ? (wa - ne) : (wa + hi - ne);
    if (!(d > 0)) return setErr(currentLang === 'tr' ? 'Ölçüler tutarsız: bel boyundan büyük olmalı.' : 'Inconsistent measurements.');

    const bf = isMale
      ? 495 / (1.0324 - 0.19077 * Math.log10(d) + 0.15456 * Math.log10(h)) - 450
      : 495 / (1.29579 - 0.35004 * Math.log10(d) + 0.221 * Math.log10(h)) - 450;

    if (!(bf > 0 && bf < 70)) return setErr(currentLang === 'tr' ? 'Sonuç mantıksız çıktı, ölçüleri kontrol et.' : 'Invalid result, check measurements.');

    const maleCats = [
      [6, currentLang === 'tr' ? 'Temel yağ' : 'Essential fat'],
      [14, currentLang === 'tr' ? 'Atletik' : 'Athletic'],
      [18, currentLang === 'tr' ? 'Fit' : 'Fitness'],
      [25, currentLang === 'tr' ? 'Ortalama' : 'Average'],
      [99, currentLang === 'tr' ? 'Yüksek' : 'High']
    ];
    const femaleCats = [
      [14, currentLang === 'tr' ? 'Temel yağ' : 'Essential fat'],
      [21, currentLang === 'tr' ? 'Atletik' : 'Athletic'],
      [25, currentLang === 'tr' ? 'Fit' : 'Fitness'],
      [32, currentLang === 'tr' ? 'Ortalama' : 'Average'],
      [99, currentLang === 'tr' ? 'Yüksek' : 'High']
    ];
    const catList = isMale ? maleCats : femaleCats;
    const matched = catList.find(x => bf < x[0]) || catList[catList.length - 1];

    setOk(`
      <div class="v">%${bf.toFixed(1).replace('.', ',')}<small>${matched[1]}</small></div>
      <p>${currentLang === 'tr' ? 'ABD Donanması yöntemiyle tahmini değerdir.' : 'Estimated using US Navy method.'}</p>
    `);
  }

  if (tab === 'pr') {
    const w1 = getNum('calcW1');
    const r1 = getNum('calcR1');
    const w2 = getNum('calcW2');
    const r2 = getNum('calcR2');

    if (!(w1 > 0 && w2 > 0)) return setErr(currentLang === 'tr' ? 'İki kaldırış için de ağırlık gir.' : 'Enter weight for both lifts.');
    if (![r1, r2].every(r => Number.isInteger(r) && r >= 1 && r <= 30)) return setErr(currentLang === 'tr' ? 'Tekrar sayıları 1–30 arasında tam sayı olmalı.' : 'Reps must be integer between 1–30.');

    const old1 = epley(w1, r1);
    const new1 = epley(w2, r2);
    const diff = new1 - old1;
    const pct = (diff / old1) * 100;
    const sign = diff > 0 ? '+' : (diff < 0 ? '−' : '');

    const label = diff > 0
      ? (currentLang === 'tr' ? 'artış' : 'increase')
      : (diff < 0 ? (currentLang === 'tr' ? 'düşüş' : 'decrease') : (currentLang === 'tr' ? 'değişim yok' : 'no change'));

    setOk(`
      <div class="v">${sign}${Math.abs(diff).toFixed(1).replace('.', ',')}<small>kg · %${Math.abs(pct).toFixed(1).replace('.', ',')} ${label}</small></div>
      <p>${currentLang === 'tr' ? 'Tahmini 1RM:' : 'Estimated 1RM:'} ${old1.toFixed(1).replace('.', ',')} kg → ${new1.toFixed(1).replace('.', ',')} kg</p>
    `);
  }

  if (tab === 'mc') {
    const w = getNum('calcMcW');
    const h = getNum('calcMcH');
    const a = getNum('calcMcA');

    if (!(w > 20 && w < 400)) return setErr(currentLang === 'tr' ? 'Ağırlığı gir (kg).' : 'Enter weight (kg).');
    if (!(h > 90 && h < 250)) return setErr(currentLang === 'tr' ? 'Boyu gir (cm).' : 'Enter height (cm).');
    if (!(a >= 10 && a <= 100)) return setErr(currentLang === 'tr' ? 'Yaşı gir.' : 'Enter age.');

    const isMale = document.getElementById('calcG1').checked;
    const bmr = (10 * w) + (6.25 * h) - (5 * a) + (isMale ? 5 : -161);
    const actMult = parseFloat(document.getElementById('calcAct')?.dataset.v || '1.55');
    const tdee = bmr * actMult;

    const goals = [
      [currentLang === 'tr' ? 'Kilo ver' : 'Lose weight', 0.8],
      [currentLang === 'tr' ? 'Koru' : 'Maintain', 1.0],
      [currentLang === 'tr' ? 'Kilo al' : 'Gain weight', 1.1]
    ];

    const cards = goals.map(([n, mult]) => {
      const c = tdee * mult;
      const p = 2 * w;
      const f = (c * 0.25) / 9;
      const carbs = Math.max(0, (c - (p * 4) - (f * 9)) / 4);
      return `
        <div>
          <small>${n}</small>
          <b>${Math.round(c)} kcal</b>
          <span>P ${Math.round(p)} g · K ${Math.round(carbs)} g · Y ${Math.round(f)} g</span>
        </div>
      `;
    }).join('');

    setOk(`
      <div class="v">${Math.round(tdee)}<small>kcal · ${currentLang === 'tr' ? 'günlük harcama' : 'daily expenditure'} (BMR ${Math.round(bmr)})</small></div>
      <div class="g3">${cards}</div>
      <p>${currentLang === 'tr' ? 'Mifflin-St Jeor; protein 2 g/kg, yağ %25. Tahmini değerlerdir.' : 'Mifflin-St Jeor; protein 2 g/kg, fat 25%. Estimated values.'}</p>
    `);
  }
}


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
  if (status) {
    if (user) {
      status.style.display = 'none';
    } else {
      status.textContent = 'Yerel Mod';
      status.style.color = 'var(--text-tertiary)';
      status.style.display = 'inline-block';
    }
  }
  
  if (signOutBtn) signOutBtn.style.display = user ? 'flex' : 'none';

  // Rank Display
  let userRankKey = appData.userRank || 'default';
  if (userRankKey === 'admin') userRankKey = 'mod';
  if (user && user.email === 'wupard@gmail.com') userRankKey = 'kurucu';
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
      // Admin badge on comments removed
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
      let rk = appData.userRank || 'default';
      if (rk === 'admin') rk = 'mod';
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
        if (key === 'admin') key = 'mod';
        if (currentUser.email === 'wupard@gmail.com') key = 'kurucu';
        if (appData.firestoreAdmin && key === 'default') key = 'mod';
        const r2 = RANKS[key] || RANKS.default;
        rb.textContent = r2.label;
        rb.style.color = r2.color;
        rb.style.background = r2.bg;
      }
      if (userData.profile) {
        // Merge carefully — never overwrite photoURL with empty/undefined
        const incoming = userData.profile;
        const existingPhoto = appData.profile && appData.profile.photoURL;
        appData.profile = { ...appData.profile, ...incoming };
        if (!appData.profile.photoURL && existingPhoto) {
          appData.profile.photoURL = existingPhoto;
        }
        renderSidebarProfile(user);
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

  flameContent.style.animation = '';
  flameContent.style.textShadow = '';

  if (dayNum === 0) {
    // Day 0: No flame — hide the flame wrapper and center the text
    if (flameWrap) flameWrap.style.display = 'none';
    if (badgeEl) {
      badgeEl.style.justifyContent = 'center';
      badgeEl.style.display = 'flex'; // Fix: Show badge even on Day 0
    }
    flameContent.style.display = 'none';
  } else {
    // Day > 0: Restore flame wrapper and original flex layout
    if (flameWrap) flameWrap.style.display = 'flex';
    if (badgeEl) {
      badgeEl.style.justifyContent = '';
      badgeEl.style.display = 'flex';
    }
    flameContent.style.display = '';
  }

  if (dayNum === 1) {
    // Day 1: Small flame
    flameContent.textContent = '🔥';
    flameContent.style.fontSize = '1rem';
    flameContent.style.opacity = '0.8';
    flameContent.style.animation = 'flameFlicker 0.6s ease-in-out infinite';
  } else if (dayNum <= 3) {
    // Day 2-3: Medium flame
    flameContent.textContent = '🔥';
    flameContent.style.fontSize = '1.2rem';
    flameContent.style.opacity = '1';
    flameContent.style.animation = 'flameFlicker 0.5s ease-in-out infinite';
  } else if (dayNum <= 7) {
    // Day 4-7: Large flame with glow
    flameContent.textContent = '🔥';
    flameContent.style.fontSize = '1.4rem';
    flameContent.style.opacity = '1';
    flameContent.style.animation = 'flameFlickerIntense 0.4s ease-in-out infinite';
    flameContent.style.textShadow = '0 0 8px rgba(255, 69, 0, 0.6), 0 0 16px rgba(255, 140, 0, 0.3)';
  } else {
    // Day 8+: Legendary flame
    flameContent.textContent = '🔥';
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
  const sendBtn3 = btnText ? btnText.closest('button') : null;

  if (!title || !msg) {
    showToast('Lütfen başlık ve mesaj girin.', 'error');
    return;
  }

  if (recipientType === 'specific' && !targetUid) {
    showToast('Lütfen hedef kullanıcı UID girin.', 'error');
    return;
  }

  // ✅ Çift gönderimi önle
  if (sendBtn3 && sendBtn3.disabled) return;

  // Loading state
  if (sendBtn3) sendBtn3.disabled = true;
  if (btnText) btnText.style.opacity = '0.5';
  if (loader) loader.style.display = 'block';

  const categoryIcons = {
    system: 'g���',
    announcement: 'g���',
    feature: '✨',
    maintenance: 'g���',
    urgent: '⚠️'
  };

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    createdAt: new Date(),
    expiry: Date.now() + expiryMs3,
    read: false,
    type: recipientType === 'all' ? 'broadcast' : 'personal',
    sender: 'Admin',
    category: category,
    icon: categoryIcons[category] || 'g���'
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
    if (sendBtn3) sendBtn3.disabled = false;
    if (btnText) btnText.style.opacity = '1';
    if (loader) loader.style.display = 'none';
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
      system: 'g���',
      announcement: 'g���',
      feature: '✨',
      maintenance: 'g���',
      urgent: '⚠️'
    };
    const icon = categoryIcons[h.category] || h.icon || 'g���';
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
    content.innerHTML = `<div class="logged-empty">${t('noDataFoundLogFirst')}</div>`;
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

  // 5. Render selector — custom dropdown (native select causes white screen in dark mode)
  const allExercises = Object.keys(exerciseData).sort();
  let selectorHtml = '';
  if (allExercises.length > 1) {
    const dropId = 'strengthExDropdown_' + Date.now();
    selectorHtml = `
      <div style="position:relative; margin-bottom:16px;" id="${dropId}_wrap">
        <button 
          id="${dropId}_btn"
          onclick="(function(btn){
            var list = document.getElementById('${dropId}_list');
            var isOpen = list.style.display !== 'none';
            // close all other dropdowns
            document.querySelectorAll('[id$=\\'_list\\'][data-sdrop]').forEach(function(el){ el.style.display='none'; });
            list.style.display = isOpen ? 'none' : 'block';
            if(!isOpen){
              setTimeout(function(){
                function outsideClick(e){
                  if(!document.getElementById('${dropId}_wrap').contains(e.target)){
                    list.style.display='none';
                    document.removeEventListener('click',outsideClick);
                  }
                }
                document.addEventListener('click', outsideClick);
              },10);
            }
          })(this)"
          style="width:100%; padding:10px 14px; border-radius:10px; background:var(--bg-card-alt); color:var(--text-primary); border:1px solid var(--border-subtle); font-size:0.85rem; cursor:pointer; display:flex; justify-content:space-between; align-items:center; text-align:left;">
          <span>${selectedEx}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div 
          id="${dropId}_list"
          data-sdrop="1"
          style="display:none; position:absolute; top:calc(100% + 4px); left:0; right:0; background:var(--bg-card,#1a1a2e); border:1px solid var(--border-subtle); border-radius:10px; z-index:9999; max-height:220px; overflow-y:auto; box-shadow:0 8px 24px rgba(0,0,0,0.6);">
          ${allExercises.map(ex => `
            <div 
              onclick="document.getElementById('${dropId}_list').style.display='none'; document.getElementById('${dropId}_btn').querySelector('span').textContent='${ex.replace(/'/g,"\\'")}'; showStrengthDetailsEnhanced('${ex.replace(/'/g,"\\'")}');"
              style="padding:10px 14px; font-size:0.85rem; cursor:pointer; color:${ex === selectedEx ? 'var(--accent-primary)' : 'var(--text-primary)'}; background:${ex === selectedEx ? 'rgba(139,124,247,0.1)' : 'transparent'}; transition:background 0.15s;"
              onmouseenter="this.style.background='rgba(139,124,247,0.12)'"
              onmouseleave="this.style.background='${ex === selectedEx ? 'rgba(139,124,247,0.1)' : 'transparent'}'">
              ${ex}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }


  // 6. Render stats cards
  const statsHtml = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
      <div style="padding:12px; background:rgba(139,124,247,0.1); border:1px solid rgba(139,124,247,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">${t('highest')}</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--orange-vivid);">${maxWeight} kg</div>
      </div>
      <div style="padding:12px; background:rgba(76,203,141,0.1); border:1px solid rgba(76,203,141,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">${t('average')}</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--green-vivid);">${avgWeight} kg</div>
      </div>
      <div style="padding:12px; background:rgba(92,138,222,0.1); border:1px solid rgba(92,138,222,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">${t('weeklyProjection')}</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--blue-vivid);">+${weeklyProjection} kg</div>
      </div>
      <div style="padding:12px; background:rgba(217,110,163,0.1); border:1px solid rgba(217,110,163,0.2); border-radius:10px;">
        <div style="font-size:0.7rem; color:var(--text-muted); margin-bottom:4px;">${t('monthlyProjection')}</div>
        <div style="font-size:1.5rem; font-weight:700; color:var(--pink-vivid);">+${monthlyProjection} kg</div>
      </div>
    </div>
  `;

  // 7. Render timeline
  let timelineHtml = `<div style="margin-top:20px;"><h4 style="font-size:0.85rem; font-weight:700; margin-bottom:12px;">${t('recentLogs')}</h4>`;
  timelineHtml += recentLogs.map((log, idx) => {
    const date = new Date(log.date).toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US');
    const progressRaw = idx > 0 ? log.weight - recentLogs[idx - 1].weight : 0;
    const progress = Math.round(progressRaw * 10) / 10;
    const progressText = progress > 0 ? `+${progress} kg ↑` : progress < 0 ? `${progress} kg ↓` : t('same');
    const progressColor = progress > 0 ? 'var(--green-vivid)' : progress < 0 ? 'var(--red-vivid)' : 'var(--text-muted)';
    
    return `
      <div style="padding:10px; background:rgba(255,255,255,0.02); border-left:3px solid var(--accent-primary); border-radius:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.8rem; font-weight:600;">${log.weight} kg × ${log.reps} ${currentLang === 'en' ? 'rep' : 'tekrar'} × ${log.sets} set</div>
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
        <div class="maintenance-icon">g���</div>
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
// OVERRIDE: Admin Notification Send (with admin_notifications log)
// =============================================
window.adminSendNotificationV2Enhanced = async function() {
  const recipientType = document.getElementById('adminNotifRecipient').value;
  const targetUid = document.getElementById('adminNotifUid').value.trim();
  const category = document.getElementById('adminNotifCategory').value;
  const title = document.getElementById('adminNotifTitle').value.trim();
  const msg = document.getElementById('adminNotifMessage').value.trim();
  const dEl = document.getElementById('adminNotifExpiryDays');
  const hEl = document.getElementById('adminNotifExpiryHours');
  const mEl = document.getElementById('adminNotifExpiryMinutes');
  let expiryMs = 7 * 24 * 60 * 60 * 1000;
  if (dEl || hEl || mEl) {
    const days = parseInt(dEl?.value) || 0;
    const hours = parseInt(hEl?.value) || 0;
    const mins = parseInt(mEl?.value) || 0;
    expiryMs = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
    if (expiryMs <= 0) expiryMs = 7 * 24 * 60 * 60 * 1000;
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

  if (btnText) btnText.style.opacity = '0.5';
  if (loader) loader.style.display = 'block';

  const categoryIcons = {
    system: '\uD83D\uDD27',
    announcement: '\uD83D\uDCE2',
    feature: '\u2728',
    maintenance: '\uD83D\uDD28',
    urgent: '\u26A0\uFE0F'
  };

  const notifData = {
    title,
    body: msg,
    timestamp: Date.now(),
    createdAt: new Date(),
    expiry: Date.now() + expiryMs,
    read: false,
    type: recipientType === 'all' ? 'broadcast' : 'personal',
    sender: 'Admin',
    category,
    icon: categoryIcons[category] || '\uD83D\uDCE2'
  };

  try {
    let targetRef = null;
    if (recipientType === 'all') {
      targetRef = await db.collection('notifications').add(notifData);
    } else {
      targetRef = await db.collection(`users/${targetUid}/notifications`).add(notifData);
    }

    await db.collection('admin_notifications').add({
      title,
      body: msg,
      category,
      icon: notifData.icon,
      timestamp: notifData.timestamp,
      expiry: notifData.expiry,
      recipientType,
      targetScope: recipientType === 'all' ? 'broadcast' : 'personal',
      targetUid: recipientType === 'all' ? '' : targetUid,
      targetId: targetRef ? targetRef.id : '',
      senderUid: currentUser?.uid || '',
      senderEmail: currentUser?.email || '',
      senderName: currentUser?.displayName || 'Admin'
    });

    // Immediately add to local arrays so it renders instantly
    const newNotif = { id: targetRef?.id || '', ...notifData, scope: recipientType === 'all' ? 'broadcast' : 'personal' };
    activeNotifications.unshift(newNotif);
    adminNotificationHistory.unshift({ id: targetRef?.id || '', title, body: msg, category, icon: notifData.icon, timestamp: notifData.timestamp, recipientType, targetScope: recipientType === 'all' ? 'broadcast' : 'personal', targetUid: recipientType === 'all' ? '' : targetUid });

    showToast('Bildirim başarıyla gönderildi!', 'success');
    document.getElementById('adminNotifTitle').value = '';
    document.getElementById('adminNotifMessage').value = '';
    document.getElementById('adminNotifUid').value = '';
    renderNotificationList();
    updateNotifBadge();
    renderAdminNotificationHistory();
  } catch (err) {
    console.error('Notification error:', err);
    showToast('Bildirim g�nderilemedi: ' + err.message, 'error');
  } finally {
    if (btnText) btnText.style.opacity = '1';
    if (loader) loader.style.display = 'none';
  }
};

window.adminSendNotificationV2 = window.adminSendNotificationV2Enhanced;

// =============================================
// OVERRIDE: Admin Notification History Render
// =============================================
window.renderAdminNotificationHistory = function() {
  const historyEl = document.getElementById('adminNotifHistory');
  if (!historyEl) return;

  const history = adminNotificationHistory;
  if (history.length === 0) {
    historyEl.innerHTML = '<div style="font-size:0.7rem; color:var(--text-muted); text-align:center; padding:12px;">Geçmiş bulunamadı</div>';
    return;
  }

  historyEl.innerHTML = history.map(h => {
    const icon = h.icon || '\uD83D\uDCE2';
    const date = new Date(h.timestamp).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const targetLabel = __formatAdminHistoryTarget(h);

    return `
      <div class="admin-history-item" style="display:flex; align-items:center; justify-content:space-between; padding:8px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:8px; margin-bottom:6px;">
        <div style="display:flex; align-items:flex-start; gap:8px; flex:1; min-width:0;">
          <span class="admin-history-icon" style="font-size:1.1rem; flex-shrink:0;">${icon}</span>
          <div style="min-width:0;">
            <div style="font-size:0.75rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${h.title}</div>
            <div style="font-size:0.65rem; color:var(--text-secondary); margin-top:2px;">Alıcı: ${targetLabel}</div>
            <div style="font-size:0.6rem; color:var(--text-muted);">${date}</div>
          </div>
        </div>
        <button onclick="deleteAdminNotification('${h.id}', '${h.targetScope || h.scope || ''}', '${h.targetUid || ''}', '${h.targetId || ''}')" style="background:none; border:none; color:#f87171; cursor:pointer; padding:6px; flex-shrink:0; display:flex; align-items:center; justify-content:center; transition:opacity 0.2s;" onmouseenter="this.style.opacity='0.7'" onmouseleave="this.style.opacity='1'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `;
  }).join('');
};

window.deleteAdminNotification = async function(adminNotifDocId, targetScope, targetUid, targetId) {
  if (!confirm('Bu bildirimi geçmişten ve alıcılardan silmek istediğinize emin misiniz?')) return;
  try {
    // 1. Delete from admin_notifications log
    await db.doc(`admin_notifications/${adminNotifDocId}`).delete();
    
    // 2. Delete the actual notification from recipients
    if (targetScope === 'broadcast' && targetId) {
      await db.doc(`notifications/${targetId}`).delete();
    } else if (targetScope === 'personal' && targetUid && targetId) {
      await db.doc(`users/${targetUid}/notifications/${targetId}`).delete();
    }
    
    showToast('Bildirim silindi.', 'success');
  } catch (err) {
    console.error('deleteAdminNotification error:', err);
    showToast('Bildirim silinemedi: ' + err.message, 'error');
  }
};

window.clearAdminNotificationHistory = async function() {
  if (!confirm('Tüm gönderilen bildirim geçmişini ve bu bildirimleri alıcılardan kalıcı olarak temizlemek istediğinize emin misiniz?')) return;
  
  try {
    const snap = await db.collection('admin_notifications').get();
    const batch = db.batch();
    
    // For each admin_notification entry
    for (const doc of snap.docs) {
      const data = doc.data();
      const targetScope = data.targetScope;
      const targetUid = data.targetUid;
      const targetId = data.targetId;
      
      // Delete admin log
      batch.delete(doc.ref);
      
      // Delete actual notification
      if (targetScope === 'broadcast' && targetId) {
        batch.delete(db.doc(`notifications/${targetId}`));
      } else if (targetScope === 'personal' && targetUid && targetId) {
        batch.delete(db.doc(`users/${targetUid}/notifications/${targetId}`));
      }
    }
    
    await batch.commit();
    showToast('Tüm bildirim geçmişi temizlendi.', 'success');
  } catch (err) {
    console.error('clearAdminNotificationHistory error:', err);
    showToast('Geçmiş temizlenirken hata oluştu: ' + err.message, 'error');
  }
};

// =============================================
// OVERRIDE: Maintenance Mode (Firestore synced)
// =============================================
window.saveMaintenanceSettings = async function() {
  if (!currentUser) {
    showToast('Yalnizca adminler bakim modunu degistirebilir.', 'error');
    return;
  }
  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true;
  if (!isAdmin) {
    showToast('Izin yok: sadece adminler erisebilir.', 'error');
    return;
  }

  const msg = (document.getElementById('adminMaintenanceMessage')?.value || '').trim();
  const days = parseInt(document.getElementById('adminMaintenanceExpiryDays')?.value) || 0;
  const hours = parseInt(document.getElementById('adminMaintenanceExpiryHours')?.value) || 0;
  const mins = parseInt(document.getElementById('adminMaintenanceExpiryMinutes')?.value) || 0;
  let durationMs = ((days * 24 + hours) * 60 + mins) * 60 * 1000;
  if (durationMs <= 0) durationMs = 60 * 60 * 1000;

  const obj = {
    enabled: true,
    message: msg,
    expiresAt: Date.now() + durationMs,
    setBy: currentUser.email || currentUser.uid || 'admin'
  };

  try {
    if (isFirebaseConfigured && db) {
      await db.collection('app_state').doc('maintenance').set(obj, { merge: true });
    }
    localStorage.setItem('zyro_maintenance', JSON.stringify(obj));
    applyMaintenanceState(obj);
    updateMaintenanceStatusText(obj);
    showToast('Bakim modu etkinlestirildi.', 'success');
  } catch (e) {
    console.error('Maintenance save failed:', e);
    showToast('Bakim modu kaydedilemedi.', 'error');
  }
};

window.clearMaintenanceSettings = async function() {
  if (!currentUser) return showToast('Yetki gerekli.', 'error');
  const isAdmin = currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true;
  if (!isAdmin) return showToast('Izin yok.', 'error');

  try {
    if (isFirebaseConfigured && db) {
      await db.collection('app_state').doc('maintenance').set({
        enabled: false, message: '', expiresAt: 0,
        setBy: currentUser.email || currentUser.uid || 'admin'
      }, { merge: true });
    }
    localStorage.removeItem('zyro_maintenance');
    applyMaintenanceState({ enabled: false });
    updateMaintenanceStatusText({ enabled: false });
    showToast('Bakim modu kapatildi.', 'success');
  } catch (e) {
    console.error('Maintenance clear failed:', e);
    showToast('Bakim modu kapatilamadi.', 'error');
  }
};

window.applyMaintenanceState = function(forcedState) {
  const state = forcedState || getMaintenanceState();
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
        <div id="maintenanceOverlayLoginContainer" style="margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 18px;">
          <button id="maintenanceLoginBtn" class="btn-primary" style="padding: 10px 20px; font-size: 0.9rem; font-weight: 600; border-radius: 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; margin: 0 auto;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 12 5.92 1 12s4.92 11 11.24 11c6.6 0 11-4.65 11-11.2 0-.756-.08-1.333-.177-1.8H12.24z"/></svg>
            Yönetici Girişi (Google)
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const loginBtn = overlay.querySelector('#maintenanceLoginBtn');
    if (loginBtn) {
      loginBtn.addEventListener('click', async () => {
        if (typeof firebase === 'undefined' || !firebase.auth) {
          showToast('Firebase bağlantısı kurulamadı.', 'error');
          return;
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
          const result = await window.auth.signInWithPopup(provider);
          const user = result.user;
          if (user && user.email === 'wupard@gmail.com') {
            showToast('Yönetici girişi başarılı.', 'success');
          } else {
            showToast('Yetkisiz hesap! Bakım modunda sadece yönetici giriş yapabilir.', 'error');
            await window.auth.signOut();
          }
        } catch (e) {
          console.warn('Popup blocked/failed, trying redirect...', e);
          if (e.code === 'auth/popup-blocked' || e.code === 'auth/cancelled-popup-request') {
            window.auth.signInWithRedirect(provider).catch(err => {
              showToast('Giriş başarısız: ' + err.message, 'error');
            });
          } else {
            showToast('Giriş başarısız: ' + e.message, 'error');
          }
        }
      });
    }
  }

  if (state.enabled) {
    const isAdm = currentUser && currentUser.email === 'wupard@gmail.com';
    if (!isAdm) {
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
};

window.updateMaintenanceStatusText = function(forcedState) {
  const st = forcedState || getMaintenanceState();
  const el = document.getElementById('adminMaintenanceStatus');
  if (!el) return;
  if (st.enabled) {
    const until = st.expiresAt ? new Date(st.expiresAt).toLocaleString() : '\u2014';
    el.textContent = 'Etkin \u2014 Tahmini bitiş: ' + until + ' (Sağlayan: ' + (st.setBy || 'admin') + ')';
  } else {
    el.textContent = 'Kapali';
  }
};

window.initMaintenanceSync = function() {
  if (!(isFirebaseConfigured && db)) {
    window.applyMaintenanceState();
    window.updateMaintenanceStatusText();
    return;
  }
  if (window.maintenanceUnsubscribe) window.maintenanceUnsubscribe();
  window.maintenanceUnsubscribe = db.collection('app_state').doc('maintenance').onSnapshot(function(snap) {
    const remote = snap.exists ? (snap.data() || { enabled: false }) : { enabled: false };
    const normalized = remote.expiresAt && Date.now() > remote.expiresAt ? { enabled: false } : remote;
    if (normalized.enabled) localStorage.setItem('zyro_maintenance', JSON.stringify(normalized));
    else localStorage.removeItem('zyro_maintenance');
    window.applyMaintenanceState(normalized);
    window.updateMaintenanceStatusText(normalized);
  }, function(err) {
    console.error('Maintenance sync failed:', err);
    window.applyMaintenanceState();
    window.updateMaintenanceStatusText();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMaintenanceSync);
} else {
  initMaintenanceSync();
}



// =============================================
// FEATURE 5: PROFILE SYSTEM
// =============================================

let selectedProfileAchievements = [];

window.switchProfileTab = function(tab, ev) {
  // Hide all tabs
  document.getElementById('profileTabBio').style.display = 'none';
  document.getElementById('profileTabAchievements').style.display = 'none';
  document.getElementById('profileTabSecurity').style.display = 'none';
  if (document.getElementById('profileTabAi')) {
    document.getElementById('profileTabAi').style.display = 'none';
  }
  if (document.getElementById('profileTabTheme')) {
    document.getElementById('profileTabTheme').style.display = 'none';
  }
  
  // Update buttons
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.style.color = 'var(--text-muted)';
    btn.style.borderBottomColor = 'transparent';
  });
  
  // Show selected tab
  document.getElementById('profileTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  const btn = ev && (ev.currentTarget || ev.target);
  if (btn) {
    btn.style.color = 'var(--text-primary)';
    btn.style.borderBottomColor = 'var(--accent-primary)';
  }
  
  // Load security tab content if needed
  if (tab === 'security') {
    renderPasswordSection();
    if (typeof checkPushNotificationStatus === 'function') checkPushNotificationStatus();
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
        appData.profile = { ...appData.profile, ...profile };
        
        // Fill form
        document.getElementById('profileDisplayName').value = profile.displayName || currentUser.displayName || '';
        document.getElementById('profileEmail').value = currentUser.email || '';
        document.getElementById('profileBio').value = profile.bio || '';
        document.getElementById('profileHeight').value = profile.height || '';
        document.getElementById('profileWeight').value = profile.weight || '';
        document.getElementById('profileAge').value = profile.age || '';
        document.getElementById('profileGender').value = profile.gender || '';
        
        // Load avatar
        const photo = profile.photoURL || (currentUser && currentUser.photoURL);
        if (photo) {
          const avatarLarge = document.getElementById('profilePageAvatar');
          if (avatarLarge) {
            avatarLarge.style.backgroundImage = `url('${photo}')`;
            avatarLarge.style.backgroundSize = 'cover';
            avatarLarge.style.backgroundPosition = 'center';
            avatarLarge.style.backgroundRepeat = 'no-repeat';
            avatarLarge.innerHTML = ''; // Remove default SVG
          }
        }
        
        // Load selected achievements
        selectedProfileAchievements = profile.selectedAchievements || [];
        
        // Load rank (nested data.userRank veya kök alan rank — Android uyumu)
        const rootSnap = doc.data();
        let rankKey = rootSnap.rank || userData.userRank || 'default';
        if (rankKey === 'admin') rankKey = 'mod';
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
        if (pctEl) pctEl.textContent = '';
        if (barEl) barEl.style.width = pct + '%';
        
        if (typeof updateLevelUI === 'function') updateLevelUI();
      }
    });
  } else {
    if (typeof updateLevelUI === 'function') updateLevelUI();
  }
};

function renderSidebarProfile(user){
  const avatar=document.getElementById('userAvatar');
  const name=document.getElementById('userName');
  const rankEl=document.getElementById('userRank');
  if(!avatar||!name) return;
  const profilePhoto = appData.profile && appData.profile.photoURL;
  const profileName = appData.profile && appData.profile.displayName;
  if(profilePhoto){
    avatar.innerHTML=`<img src="${profilePhoto}" alt="Avatar" style="width:100%;height:100%;border-radius:10px;object-fit:cover;" referrerpolicy="no-referrer">`;
  } else if(user && user.photoURL){
    avatar.innerHTML=`<img src="${user.photoURL}" alt="Avatar" style="width:100%;height:100%;border-radius:10px;object-fit:cover;" referrerpolicy="no-referrer">`;
  } else {
    const n = profileName || (user && user.displayName) || 'U';
    avatar.textContent = n[0].toUpperCase();
  }
  const displayN = profileName || (user && user.displayName ? user.displayName.split(' ')[0] : 'User');
  name.textContent = displayN;
  
  if (rankEl) {
    const isAdmin = user && (user.email === 'wupard@gmail.com' || appData.userRank === 'admin' || appData.userRank === 'mod');
    let uRank = appData.userRank || (isAdmin ? 'mod' : 'default');
    if (uRank === 'admin') uRank = 'mod';
    // kurucu kontrolü — email öncelikli
    if (user && user.email === 'wupard@gmail.com') uRank = 'kurucu';
    const rankObj = RANKS[uRank] || RANKS.default;
    rankEl.textContent = rankObj.label || rankObj.name || '';
    rankEl.style.background = rankObj.bg;
    rankEl.style.color = rankObj.color;
  }
}

window.saveProfile = async function() {
  const nameInput = document.getElementById('profileDisplayName');
  if (!nameInput || !currentUser) return;
  
  if (!appData.profile) appData.profile = {};
  
  if (nameInput.value.trim() !== '') {
    appData.profile.displayName = nameInput.value.trim();
  }
  
  saveData();
  renderSidebarProfile(currentUser);
  showToast(currentLang === 'tr' ? 'Profil güncellendi!' : 'Profile updated!', 'success');
};

window.handleProfilePhotoUpload = async function(event) {
  const file = event.target.files[0];
  if (!file || !currentUser) return;
  
  const toAvatarDataUrl = (f) => new Promise((resolve, reject) => {
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      try {
        const size = Math.min(img.width, img.height);
        const sx = Math.floor((img.width - size) / 2);
        const sy = Math.floor((img.height - size) / 2);
        const canvas = document.createElement('canvas');
        const out = 256;
        canvas.width = out;
        canvas.height = out;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, size, size, 0, 0, out, out);
        let q = 0.88;
        let dataUrl = canvas.toDataURL('image/jpeg', q);
        while (dataUrl.length > 300_000 && q > 0.6) {
          q = Math.round((q - 0.08) * 100) / 100;
          dataUrl = canvas.toDataURL('image/jpeg', q);
        }
        URL.revokeObjectURL(url);
        resolve(dataUrl);
      } catch (e) {
        URL.revokeObjectURL(url);
        reject(e);
      }
    };
    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };
    img.src = url;
  });

  try {
    const photoURL = await toAvatarDataUrl(file);
    appData.profile = { ...appData.profile, photoURL };
    const avatarLarge = document.getElementById('profilePageAvatar');
    if (avatarLarge) {
      avatarLarge.style.backgroundImage = `url('${photoURL}')`;
      avatarLarge.style.backgroundSize = 'cover';
      avatarLarge.style.backgroundPosition = 'center';
      avatarLarge.style.backgroundRepeat = 'no-repeat';
      avatarLarge.innerHTML = '';
    }
    renderSidebarProfile(currentUser);

    if (isFirebaseConfigured && db) {
      await db.collection('users').doc(currentUser.uid).set({
        data: {
          profile: {
            photoURL: photoURL
          }
        }
      }, { merge: true });
      if (currentUser.updateProfile) {
        try {
          await currentUser.updateProfile({ photoURL: photoURL });
        } catch (e) { console.warn('Auth profile update failed:', e); }
      }
      showToast('Profil fotoğrafı güncellendi!', 'success');
    }
  } catch (err) {
    console.error('Photo upload error:', err);
    showToast('Fotoğraf yüklenemedi: ' + (err && err.message ? err.message : ''), 'error');
  } finally {
    event.target.value = '';
  }
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
      // Preserve existing photoURL when updating bio fields
      const existingPhotoURL = (appData.profile && appData.profile.photoURL) || null;
      
      await db.collection('users').doc(currentUser.uid).set({
        data: {
          profile: {
            displayName: displayName,
            bio: bio,
            height: height ? parseInt(height) : null,
            weight: weight ? parseFloat(weight) : null,
            age: age ? parseInt(age) : null,
            gender: gender,
            selectedAchievements: selectedProfileAchievements
          }
        }
      }, { merge: true });
      
      appData.profile = { 
        ...appData.profile, 
        displayName, bio, 
        height: height ? parseInt(height) : null, 
        weight: weight ? parseFloat(weight) : null, 
        age: age ? parseInt(age) : null, 
        gender, 
        selectedAchievements: selectedProfileAchievements,
        // Preserve photoURL - never wipe it on bio save
        photoURL: existingPhotoURL
      };

      // Update root user profile for consistency
      try {
        await currentUser.updateProfile({ displayName: displayName });
        await db.collection('users').doc(currentUser.uid).update({ displayName: displayName });
      } catch (e) { console.warn('Root profile update failed:', e); }

      // Update past comments to reflect the new name and photo
      try {
        const commentsQuery = await db.collection('public_comments').where('userId', '==', currentUser.uid).get();
        if (!commentsQuery.empty) {
          const batch = db.batch();
          commentsQuery.forEach(doc => {
            batch.update(doc.ref, { 
              userName: displayName,
              userPhoto: existingPhotoURL 
            });
          });
          await batch.commit();
        }
      } catch (e) { console.warn('Comments update failed:', e); }

      renderSidebarProfile(currentUser);
      
      // Feature 10 & 12: Sync public stats when profile is saved
      if (typeof syncPublicStats === 'function') syncPublicStats();

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
        ${isSelected ? `<div style="font-size:0.65rem; color:var(--accent-primary); font-weight:700;">${currentLang === 'tr' ? '✓ SEÇİLİ' : '✓ SELECTED'}</div>` : ''}
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
      showToast(currentLang === 'tr' ? 'Maksimum 3 başarım seçebilirsiniz.' : 'You can select a maximum of 3 achievements.', 'info');
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
      // Feature 10 & 12: Sync public stats when achievements are saved
      if (typeof syncPublicStats === 'function') syncPublicStats();
      showToast(currentLang === 'tr' ? 'Başarımlar kaydedildi!' : 'Achievements saved!', 'success');
    } catch (err) {
      console.error('Achievement save error:', err);
      showToast((currentLang === 'tr' ? 'Başarımlar kaydedilemedi: ' : 'Failed to save achievements: ') + err.message, 'error');
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
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">${t('currentPassword')}</label>
        <input type="password" id="currentPassword" class="log-input" placeholder="${t('currentPasswordPlaceholder')}">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">${t('newPassword')}</label>
        <input type="password" id="newPassword" class="log-input" placeholder="${t('newPasswordPlaceholder')}">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">${t('confirmPassword')}</label>
        <input type="password" id="confirmPassword" class="log-input" placeholder="${t('confirmPasswordPlaceholder')}">
      </div>
      <button class="btn-primary" onclick="changePassword()" style="width:100%; margin-top:12px;">${t('changePasswordBtn')}</button>
    `;
  } else {
    section.innerHTML = `
      <div style="padding:16px; background:rgba(76,203,141,0.1); border:1px solid rgba(76,203,141,0.2); border-radius:10px; margin-bottom:16px;">
        <div style="font-size:0.85rem; color:var(--green-vivid); font-weight:600; margin-bottom:8px;">ℹ️ ${t('info')}</div>
        <div style="font-size:0.8rem; color:var(--text-secondary);">${t('googleNoPasswordInfo')}</div>
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">${t('newPassword')}</label>
        <input type="password" id="newPassword" class="log-input" placeholder="${t('setNewPasswordPlaceholder')}">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">${t('confirmPassword')}</label>
        <input type="password" id="confirmPassword" class="log-input" placeholder="${t('confirmPasswordPlaceholder')}">
      </div>
      <button class="btn-primary" onclick="setNewPassword()" style="width:100%; margin-top:12px;">${t('setPasswordBtn')}</button>
    `;
  }
};

window.changePassword = async function() {
  const currentPass = document.getElementById('currentPassword').value;
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  
  if (!currentPass || !newPass || !confirmPass) {
    showToast(t('fillAllFields'), 'error');
    return;
  }
  
  if (newPass !== confirmPass) {
    showToast(t('passwordsDoNotMatch'), 'error');
    return;
  }
  
  if (newPass.length < 6) {
    showToast(t('passwordMinLength'), 'error');
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
    
    showToast(t('passwordChangedSuccess'), 'success');
  } catch (err) {
    console.error('Password change error:', err);
    showToast((currentLang === 'tr' ? 'Şifre değiştirilemedi: ' : 'Failed to change password: ') + err.message, 'error');
  }
};

window.setNewPassword = async function() {
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  
  if (!newPass || !confirmPass) {
    showToast(t('fillAllFields'), 'error');
    return;
  }
  
  if (newPass !== confirmPass) {
    showToast(t('passwordsDoNotMatch'), 'error');
    return;
  }
  
  if (newPass.length < 6) {
    showToast(t('passwordMinLength'), 'error');
    return;
  }
  
  try {
    await currentUser.updatePassword(newPass);
    
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    showToast(t('passwordSetSuccess'), 'success');
  } catch (err) {
    console.error('Password set error:', err);
    showToast((currentLang === 'tr' ? 'Şifre belirlenemedi: ' : 'Failed to set password: ') + err.message, 'error');
  }
};window.checkPushNotificationStatus = async function() {
  const statusEl = document.getElementById('pushNotificationStatus');
  const btnEl = document.getElementById('btnEnablePush');
  
  if (!statusEl || !btnEl) return;
  
  if (!('Notification' in window)) {
    statusEl.textContent = currentLang === 'tr' ? 'Durum: Tarayıcınız bildirimleri desteklemiyor.' : 'Status: Your browser does not support notifications.';
    statusEl.style.color = 'var(--text-muted)';
    return;
  }
  
  if (Notification.permission === 'granted') {
    statusEl.textContent = currentLang === 'tr' ? 'Durum: Aktif (Bildirimlere izin verdiniz)' : 'Status: Active (Notifications allowed)';
    statusEl.style.color = 'var(--green-vivid)';
    btnEl.style.display = 'none';
  } else if (Notification.permission === 'denied') {
    statusEl.textContent = currentLang === 'tr' ? 'Durum: Reddedildi (Tarayıcı ayarlarından izni açmanız gerekir)' : 'Status: Denied (Please enable in browser settings)';
    statusEl.style.color = 'var(--red-vivid)';
    btnEl.style.display = 'none';
  } else {
    statusEl.textContent = currentLang === 'tr' ? 'Durum: İzin Bekleniyor' : 'Status: Waiting for permission';
    statusEl.style.color = 'var(--text-secondary)';
    btnEl.style.display = 'block';
  }
};

window.requestNotificationPermission = async function(silent = false) {
  if (!('Notification' in window)) return;
  
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      // Show success toast to the user immediately since permission is granted
      if (!silent) showToast(t('notificationsEnabledSuccess'), 'success');
      
      // Attempt to retrieve FCM Token, but handle any blocks (VPN, AdBlock) silently
      if (typeof messaging !== 'undefined' && messaging) {
        try {
          // FCM SW (firebase-messaging-sw.js) registration'ını kullan — PWA sw.js değil
          let registration = window.fcmSwRegistration || window.swRegistration;
          if (!registration) {
            // SW henüz kayıt edilmediyse bekle
            registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
            window.fcmSwRegistration = registration;
          }
          const token = await messaging.getToken({
            vapidKey: 'BNtGLNs1qYMrypxB0_QvrrOVjMsI3PsRrZ3mO5WOrVyzrkAhpjiTs_I6wXvUdMzSykLW4NgK-lqltCQOT4m-A-M',
            serviceWorkerRegistration: registration
          });
          
          if (token && currentUser) {
            await db.collection('users').doc(currentUser.uid).set({
              data: {
                profile: {
                  fcmToken: token
                }
              }
            }, { merge: true });
            if (appData && appData.profile) appData.profile.fcmToken = token;
            console.log('FCM Token saved:', token.substring(0, 20) + '...');
          }
        } catch (fcmErr) {
          console.warn('FCM Token registration failed (VPN or AdBlocker likely blocking Google services):', fcmErr);
          // Fall back silently since Firestore-based in-app notifications will still work perfectly.
        }
      }
    } else if (permission === 'denied') {
      if (!silent) showToast(t('notificationPermissionDenied'), 'error');
    }
  } catch (err) {
    console.error('Notification permission request error:', err);
    if (!silent) {
      showToast((currentLang === 'tr' ? 'Bildirimler ayarlanamadı: ' : 'Failed to set up notifications: ') + err.message, 'error');
    }
  }
  checkPushNotificationStatus();
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
  if (typeof originalHandleAuthStateChange === 'function') {
    originalHandleAuthStateChange(user);
  }
  if (user) {
    if (document.getElementById('pageProfile')) {
      loadProfileData();
    }
    // Setup foreground message listener if not already done
    if (typeof messaging !== 'undefined' && messaging && !window._fcmForegroundListenerAdded) {
      window._fcmForegroundListenerAdded = true;
      messaging.onMessage((payload) => {
        console.log('Message received in foreground: ', payload);
        const title = payload.notification ? payload.notification.title : 'Yeni Bildirim';
        const body = payload.notification ? payload.notification.body : '';
        showToast(`${title}: ${body}`, 'info');
      });
    }
  }
};

window.checkAndPromptPushNotifications = function() {
  if (!currentUser) return; // Only prompt if logged in
  if (!('Notification' in window)) return;
  
  if (Notification.permission !== 'granted') {
    // Check if dismissed in the current session
    if (sessionStorage.getItem('zyro_notif_prompt_dismissed') === 'true') {
      return;
    }
    
    // Show the custom modal!
    const modal = document.getElementById('notificationPromptModal');
    if (modal) {
      // Set localized texts
      const titleEl = document.getElementById('notifPromptTitle');
      const descEl = document.getElementById('notifPromptDesc');
      const btnAllowEl = document.getElementById('notifPromptBtnAllow');
      const btnLaterEl = document.getElementById('notifPromptBtnLater');
      
      if (Notification.permission === 'denied') {
        // If denied, they need to manually enable in browser settings
        if (currentLang === 'tr') {
          titleEl.textContent = 'Bildirim İzni Gerekli';
          descEl.textContent = 'Tarayıcı ayarlarınızda bildirimler engellenmiş. Güncellemeler ve hatırlatıcıları alabilmek için lütfen adres çubuğundaki kilit simgesine tıklayarak bildirimlere manuel olarak izin verin.';
          btnAllowEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></svg> <span>Nasıl Etkinleştirilir?</span>`;
          window._notifDeniedAction = () => {
            showToast(currentLang === 'tr' ? 'Lütfen adres çubuğundaki kilit simgesinden izinleri açın.' : 'Please enable notifications via the lock icon in the address bar.', 'info');
          };
          btnLaterEl.textContent = 'Kapat';
        } else {
          titleEl.textContent = 'Notification Permission Required';
          descEl.textContent = 'Notifications are blocked in your browser settings. To receive updates and reminders, please click the lock icon in the address bar and manually allow notifications.';
          btnAllowEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></svg> <span>How to Enable?</span>`;
          window._notifDeniedAction = () => {
            showToast('Please enable notifications via the lock icon in the address bar.', 'info');
          };
          btnLaterEl.textContent = 'Close';
        }
      } else {
        // Default (not yet asked)
        if (currentLang === 'tr') {
          titleEl.textContent = 'Bildirimleri Etkinleştirin';
          descEl.textContent = 'Yeni antrenman programları, güncellemeler ve önemli hatırlatıcıları anında almak için bildirim izinlerini açın.';
          btnAllowEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>İzin Ver</span>`;
          window._notifDeniedAction = null;
          btnLaterEl.textContent = 'Daha Sonra';
        } else {
          titleEl.textContent = 'Enable Notifications';
          descEl.textContent = 'Turn on notification permissions to receive instant updates, personalized training plans, and important reminders.';
          btnAllowEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>Allow</span>`;
          window._notifDeniedAction = null;
          btnLaterEl.textContent = 'Later';
        }
      }
      
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.style.opacity = '1';
        const card = modal.querySelector('.card');
        if (card) card.style.transform = 'scale(1)';
      }, 50);
    }
  }
};

window.closeNotificationPromptModal = function() {
  sessionStorage.setItem('zyro_notif_prompt_dismissed', 'true');
  const modal = document.getElementById('notificationPromptModal');
  if (modal) {
    modal.style.opacity = '0';
    const card = modal.querySelector('.card');
    if (card) card.style.transform = 'scale(0.9)';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
};

window.approveNotificationPermission = async function() {
  if (window._notifDeniedAction) {
    window._notifDeniedAction();
    return;
  }
  window.closeNotificationPromptModal();
  if (typeof window.requestNotificationPermission === 'function') {
    await window.requestNotificationPermission(false);
  }
};


// Render profile page
window.renderProfilePage = function() {
  loadProfileData();
};

// PWA Service Worker Registration
if ('serviceWorker' in navigator && !navigator.userAgent.includes('Chrome-Lighthouse') && !navigator.userAgent.includes('Lighthouse')) {
  window.addEventListener('load', async () => {
    try {
      // 1) PWA/Cache Service Worker (sw.js)
      const swReg = await navigator.serviceWorker.register('/sw.js');
      console.log('PWA Service Worker registered:', swReg.scope);
      window.swRegistration = swReg;
    } catch (err) {
      console.warn('PWA Service Worker registration failed:', err);
    }

    try {
      // 2) FCM Service Worker (firebase-messaging-sw.js) — Firebase bunu otomatik arar
      // Manuel kayıt ile doğru scope'ta çalışmasını garantileyiyoruz
      const fcmReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      console.log('FCM Service Worker registered:', fcmReg.scope);
      window.fcmSwRegistration = fcmReg;
    } catch (err) {
      console.warn('FCM Service Worker registration failed:', err);
    }

    // Global push notification prompt after a short delay
    setTimeout(() => {
      if (typeof window.checkAndPromptPushNotifications === 'function') {
        window.checkAndPromptPushNotifications();
      }
      // Global foreground listener for visitors who are not logged in but granted notifications
      if (typeof messaging !== 'undefined' && messaging && !window._fcmForegroundListenerAdded) {
        window._fcmForegroundListenerAdded = true;
        messaging.onMessage((payload) => {
          console.log('Message received in foreground: ', payload);
          const title = payload.notification ? payload.notification.title : 'Yeni Bildirim';
          const body = payload.notification ? payload.notification.body : '';
          // Ön planda bildirim banner'ı göster (SW notification yerine)
          if (typeof showSystemNotification === 'function') {
            showSystemNotification({ title, body });
          } else {
            showToast(`${title}: ${body}`, 'info');
          }
        });
      }
    }, 1500);
  });
}

// =============================================
// WEEKLY REPORT
// =============================================
function renderWeeklyReport() {
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
}

// =============================================
// LEVEL / XP SYSTEM
// =============================================
function calculateXP() {
  let xp = 0;

  // 1. Achievements (240 XP each — %20 artis)
  xp += Object.keys(appData.achievements || {}).length * 240;

  // 2. Workouts (60 XP per attended day — %20 artis)
  // Attendance + workoutLogs gunlerini birlestir (attendance isaretlenmemis olsa bile XP ver)
  const attendedDays = new Set(
    Object.keys(appData.attendance || {}).filter(d => appData.attendance[d] === true)
  );
  Object.keys(appData.workoutLogs || {}).forEach(d => {
    if ((appData.workoutLogs[d] || []).length > 0) attendedDays.add(d);
  });
  xp += attendedDays.size * 60;

  // 3. Sets and PRs
  const maxWeights = {};
  Object.keys(appData.workoutLogs || {}).sort().forEach(date => {
    const logs = appData.workoutLogs[date] || [];
    logs.forEach(l => {
      // 12 XP per set (%20 artis)
      xp += (l.sets || 1) * 12;

      // 60 XP PR Bonus (%20 artis)
      const ex = l.exercise;
      const w = parseFloat(l.weight) || 0;
      if (ex && w > 0) {
        if (!maxWeights[ex] || w > maxWeights[ex]) {
          maxWeights[ex] = w;
          xp += 60;
        }
      }
    });
  });

  // 4. Posture rounds (10 XP per completed round — real persisted records)
  Object.keys(appData.postureLogs || {}).forEach(date => {
    const rounds = appData.postureLogs[date];
    if (Array.isArray(rounds)) xp += rounds.length * 10;
  });

  // 5. Body weight log entries (30 XP each — %20 artis)
  xp += Object.keys(appData.weightLog || {}).length * 30;

  // 6. Apply forcedXP conversion to xpOffset if needed
  if (appData && typeof appData.forcedXP === 'number') {
    appData.xpOffset = appData.forcedXP - xp;
    delete appData.forcedXP;
  }

  // 7. xpOffset uygula — ASLA negatife dusurme (bug fix: organik XP artinca ceza verme)
  if (appData && typeof appData.xpOffset === 'number') {
    xp = Math.max(0, xp + appData.xpOffset);
  }

  return Math.max(0, xp);
}

function calculateLevel(xp) {
  return Math.min(100, Math.max(1, Math.floor(Math.sqrt(xp / 50)) + 1));
}

function getXPForLevel(level) {
  return Math.pow(Math.max(0, level - 1), 2) * 50;
}

function updateLevelUI() {
  const xp = calculateXP();
  const level = calculateLevel(xp);
  
  const nextLevelXP = getXPForLevel(level + 1);
  const currentLevelXP = getXPForLevel(level);
  const range = nextLevelXP - currentLevelXP;
  const xpProgress = range > 0 ? Math.round(((xp - currentLevelXP) / range) * 100) : 100;

  const el = id => document.getElementById(id);
  if (el('sidebarLevelBadge')) el('sidebarLevelBadge').textContent = `Lv.${level}`;
  if (el('sidebarLevelBar')) el('sidebarLevelBar').style.width = xpProgress + '%';
  if (el('profileLevelBadge')) el('profileLevelBadge').textContent = `Level ${level}`;
  if (el('profileXPBar')) el('profileXPBar').style.width = xpProgress + '%';
  if (el('profileXPText')) el('profileXPText').textContent = `${xp.toLocaleString('tr-TR')} XP • ${xpProgress}% → Lv.${Math.min(100, level + 1)}`;

  const remainingXP = nextLevelXP - xp;
  if (el('profileXPRemainingText')) {
    if (level >= 100) {
      el('profileXPRemainingText').textContent = 'Maksimum seviyeye ulaştınız!';
    } else {
      el('profileXPRemainingText').textContent = `Sonraki seviye için ${remainingXP.toLocaleString('tr-TR')} XP kaldı`;
    }
  }

  // Dynamic Badge Image Selection
  if (el('profileLevelBadgeContainer')) {
    let badgeImage, badgeGlow;
    if (level <= 5)       { badgeImage = 'assets/0-5.webp'; badgeGlow = 'rgba(205,127,50,0.5)'; }
    else if (level <= 15) { badgeImage = 'assets/5-15.webp'; badgeGlow = 'rgba(192,192,192,0.5)'; }
    else if (level <= 30) { badgeImage = 'assets/15-30.webp'; badgeGlow = 'rgba(255,215,0,0.55)'; }
    else if (level <= 60) { badgeImage = 'assets/30-60.webp'; badgeGlow = 'rgba(79,195,247,0.55)'; }
    else                  { badgeImage = 'assets/60-100.webp'; badgeGlow = 'rgba(180,100,255,0.6)'; }

    const container = el('profileLevelBadgeContainer');
    container.style.background = 'transparent';
    container.style.boxShadow = 'none';
    container.style.border = 'none';
    container.innerHTML = `<img src="${badgeImage}" alt="Level Badge" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 4px 12px ${badgeGlow}); transition: transform 0.3s ease; animation: lbCrownFloat 3s ease-in-out infinite;">`;
  }

  // Only show toast when actually leveling up (not on page load/reload)
  // zyroAppReady flag ensures we only check after initial data is fully loaded
  if (window.zyroAppReady && window.zyroSessionLevel !== undefined && window.zyroSessionLevel > 0) {
    if (level > window.zyroSessionLevel) {
      showToast(`🎉 Seviye ${level} oldunuz! Tebrikler!`, 'success');
      if (typeof runConfetti === 'function') runConfetti();
      
      // Sitedeki bildirimler kısmına seviye atlama bildirimi ekle
      if (typeof currentUser !== 'undefined' && currentUser && typeof db !== 'undefined') {
        db.collection(`users/${currentUser.uid}/notifications`).add({
          title: 'Seviye Atladınız!',
          body: `Harika gidiyorsunuz! Seviye ${level} oldunuz.`,
          timestamp: Date.now(),
          createdAt: new Date(),
          expiry: Date.now() + 10 * 60 * 1000, // 10 minutes
          read: false,
          type: 'personal',
          icon: '🎉'
        }).catch(err => console.error('Level up notification error:', err));
      }
    }
  }
  
  window.zyroSessionLevel = level;
  localStorage.setItem('zyro_level', level);
}

window.enableLevelUpToasts = function() {
  if (window.zyroAppReady) return;
  if (typeof _silentAchievementScan === 'function') {
    _silentAchievementScan();
  }
  if (typeof calculateXP === 'function' && typeof calculateLevel === 'function') {
    const xp = calculateXP();
    const lvl = calculateLevel(xp);
    window.zyroSessionLevel = lvl;
  }
  window.zyroAppReady = true;
  console.log("Level up toasts enabled. Session level baseline:", window.zyroSessionLevel);
};

// =============================================
// 1RM CALCULATOR
// =============================================
function init1RMCalculator() {
  const sel = document.getElementById('oneRMExerciseSelect');
  const catSel = document.getElementById('oneRMCategorySelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">Egzersiz seçin...</option>';
  const exercises = new Set();
  const selectedCat = catSel ? catSel.value : 'all';

  if (selectedCat === 'all') {
    ALL_EXERCISES.forEach(ex => exercises.add(ex));
  } else if (EXERCISE_CATEGORIES[selectedCat]) {
    EXERCISE_CATEGORIES[selectedCat].forEach(ex => exercises.add(ex));
  }

  [...exercises].sort().forEach(ex => {
    const opt = document.createElement('option');
    opt.value = ex; opt.textContent = ex;
    sel.appendChild(opt);
  });
}
window.calc1RMFromLogs = function() {
  const exercise = document.getElementById('oneRMExerciseSelect')?.value;
  if (!exercise) {
    if (document.getElementById('oneRMWeight')) document.getElementById('oneRMWeight').value = '';
    if (document.getElementById('oneRMReps')) document.getElementById('oneRMReps').value = '';
    if (document.getElementById('oneRMResult')) document.getElementById('oneRMResult').style.display = 'none';
    return;
  }
  let bestWeight = 0, bestReps = 0;
  Object.values(appData.workoutLogs || {}).forEach(logs => {
    logs.forEach(l => {
      if (l.exercise === exercise) {
        const score = (l.weight||0) * (1 + (l.reps||0)/30);
        const best = bestWeight * (1 + bestReps/30);
        if (score > best) { bestWeight = l.weight||0; bestReps = l.reps||0; }
      }
    });
  });
  if (bestWeight > 0) {
    document.getElementById('oneRMWeight').value = bestWeight;
    document.getElementById('oneRMReps').value = bestReps;
    showOneRMResult(bestWeight, bestReps);
  }
};
window.calc1RMManual = function() {
  const w = parseFloat(document.getElementById('oneRMWeight')?.value);
  const r = parseInt(document.getElementById('oneRMReps')?.value);
  if (!isNaN(w) && w > 0 && !isNaN(r) && r > 0) showOneRMResult(w, r);
};
function showOneRMResult(weight, reps) {
  const oneRM = Math.round(weight * (1 + reps / 30));
  const result = document.getElementById('oneRMResult');
  const value = document.getElementById('oneRMValue');
  const breakdown = document.getElementById('oneRMBreakdown');
  if (!result || !value) return;
  value.textContent = `${oneRM} kg`;
  result.style.display = 'block';
  const percents = [100, 90, 80, 70, 60, 50];
  breakdown.innerHTML = percents.map(p => `
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:8px 4px;text-align:center;">
      <div style="font-family:'Space Grotesk',sans-serif;font-size:0.9rem;font-weight:800;color:var(--text-primary);">${Math.round(oneRM*p/100)}<small style="font-size:0.5rem;opacity:0.6;">kg</small></div>
      <div style="font-size:0.6rem;color:var(--text-muted);margin-top:2px;">${p}%</div>
    </div>
  `).join('');
}

// =============================================
// LEADERBOARD & PUBLIC PROFILE (reference: zyro-leaderboard.html)
// =============================================
(function initLeaderboardModule() {
  const MONL = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const MON = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const iso = d => d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  const pd = s => { const [y,m,d] = String(s).split('-'); return new Date(+y, m-1, +d); };
  const ago = n => { const d = new Date(); d.setDate(d.getDate() - n); return iso(d); };
  const $ = s => document.querySelector('#pageLeaderboard ' + s);
  const esc = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fn = n => Math.round(n || 0).toLocaleString('tr-TR');
  const fw = n => String(+(Number(n || 0).toFixed(1))).replace('.', ',');
  const fy = s => { const d = pd(s); return d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear(); };

  const CATS = { all: 'Tümü', chest: 'Göğüs', back: 'Sırt', shoulders: 'Omuz', arms: 'Kol', legs: 'Bacak', core: 'Core' };
  const AC = ['#8fb3cc','#dcc7a8','#c99a9a','#a9c7da','#b8c4a9','#c4b5a0'];
  let users = [], tab = 'xp', cat = 'all', exf = 'all', demo = false, lastF = null;

  const hue = s => AC[[...String(s || 'User')].reduce((a, c) => a + c.charCodeAt(0), 0) % AC.length];
  const av = (u, c) => '<div class="avw ' + (c || '') + '" style="--ac:' + hue(u.name) + '">' +
    (u.img ? '<img src="' + esc(u.img) + '" alt="" loading="lazy">' : esc((u.name.trim()[0] || '?').toUpperCase())) + '</div>';
  const better = (a, b) => !b || a.w > b.w || (a.w === b.w && (a.r > b.r || (a.r === b.r && a.d < b.d)));
  const bestOf = a => (a || []).reduce((b, x) => better(x, b) ? x : b, null);

  function prEntries() {
    const sc = p => (cat === 'all' || p.cat === cat) && (exf === 'all' || p.ex === exf);
    const out = [], none = [];
    users.forEach(u => {
      const b = bestOf((u.prs || []).filter(sc));
      if (b) out.push({ u, raw: b.w, val: fw(b.w), unit: 'kg', sub: exf === 'all' ? b.ex : b.r + ' tekrar × ' + b.s + ' set', pr: b });
      else none.push(u);
    });
    out.sort((x, y) => y.raw - x.raw || (y.pr && x.pr ? y.pr.r - x.pr.r : 0));
    if (cat === 'all' && exf === 'all') none.forEach(u => out.push({ u, raw: -1, val: '—', unit: '', sub: 'Henüz kayıt yok' }));
    return out;
  }

  function entries() {
    return tab === 'xp'
      ? [...users].sort((a, b) => (b.xp || 0) - (a.xp || 0)).map(u => ({ u, raw: u.xp || 0, val: fn(u.xp || 0), unit: 'XP', sub: 'Lv.' + (u.lvl || 1) }))
      : prEntries();
  }

  function meStrip(en) {
    const i = en.findIndex(e => e.u.me);
    if (i < 0) return tab === 'pr' ? '<div class="ms"><div><small>Senin sıran</small><b>—</b></div><span>Bu seçimde henüz kaydın yok.</span></div>' : '';
    const e = en[i];
    let msg;
    if (e.raw < 0) msg = 'Henüz kaydın yok.';
    else if (i === 0) msg = 'Zirvedesin. Tebrikler!';
    else {
      const d = en[i - 1].raw - e.raw;
      msg = d > 0 ? 'Bir üst sıraya ' + (tab === 'xp' ? fn(d) + ' XP' : fw(d) + ' kg') + ' kaldı.' : 'Bir üst sırayla aynı değerdesin.';
    }
    return '<div class="ms"><div><small>Senin sıran</small><b>' + (e.raw < 0 ? '—' : '#' + (i + 1)) + '</b></div><span>' + msg + '</span></div>';
  }

  const tagMe = u => u.me ? '<i class="mtg" style="font-style:normal">SEN</i>' : '';

  function podium(en) {
    const top = en.slice(0, 3).filter(e => e.raw >= 0);
    const order = [1, 0, 2].filter(i => i < top.length);
    if (!top.length) return '';
    return '<div class="pod">' + order.map(i => {
      const e = top[i], c = tab === 'pr' && e.pr;
      const inner = (i === 0 ? '<div class="bd"><svg class="i" style="width:26px;height:26px"><use href="#i-crown"/></svg></div>' : '<div class="bd">' + (i + 1) + '</div>') +
        av(e.u) + '<b>' + esc(e.u.name) + '</b><div class="v">' + e.val + '<small>' + e.unit + '</small></div><span>' + esc(e.sub) + '</span>';
      return '<' + (c ? 'button' : 'div') + ' class="pc r' + (i + 1) + (e.u.me ? ' me' : '') + '" style="--n:' + i + '"' + (c ? ' data-u="' + e.u.id + '"' : '') + '>' + inner + '</' + (c ? 'button' : 'div') + '>';
    }).join('') + '</div>';
  }

  function rows(en) {
    const rest = en.slice(top3(en));
    return rest.map((e, k) => {
      const n = top3(en) + k + 1, c = tab === 'pr' && e.pr, t = c ? 'button' : 'div';
      return '<' + t + ' class="rw' + (e.u.me ? ' me' : '') + (e.raw < 0 ? ' nr' : '') + '" style="--n:' + k + '"' + (c ? ' data-u="' + e.u.id + '"' : '') + '>' +
        '<div class="rn">' + (e.raw < 0 ? '–' : '#' + n) + '</div>' + av(e.u, 'sm') +
        '<div class="nm"><b><span>' + esc(e.u.name) + '</span>' + tagMe(e.u) + '</b><small>' + esc(e.sub) + '</small></div>' +
        '<div class="val">' + e.val + '<small>' + e.unit + '</small></div>' +
        (c ? '<svg class="i go" style="width:16px;height:16px"><use href="#i-right"/></svg>' : '') + '</' + t + '>';
    }).join('');
  }

  const top3 = en => Math.min(3, en.filter(e => e.raw >= 0).length);

  function filters() {
    const elCats = $('#cats'), elExs = $('#exs');
    if (elCats) elCats.innerHTML = Object.entries(CATS).map(([k, v]) => '<button data-c="' + k + '" aria-pressed="' + (k === cat) + '">' + v + '</button>').join('');
    if (!elExs) return;
    if (cat === 'all') { elExs.hidden = true; return; }
    const m = {};
    users.forEach(u => (u.prs || []).forEach(p => { if (p.cat === cat) m[p.ex] = (m[p.ex] || 0) + 1; }));
    const names = Object.keys(m).sort((a, b) => m[b] - m[a]);
    elExs.hidden = false;
    elExs.innerHTML = names.length
      ? '<button data-e="all" aria-pressed="' + (exf === 'all') + '">Tüm hareketler</button>' + names.map(n => '<button data-e="' + esc(n) + '" aria-pressed="' + (exf === n) + '">' + esc(n) + '</button>').join('')
      : '<span style="color:var(--mute);font-size:13.5px">Bu kategoride henüz kayıt yok.</span>';
  }

  function lb() {
    document.querySelectorAll('#pageLeaderboard #tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.t === tab));
    const flt = $('#flt');
    if (flt) flt.hidden = (tab !== 'pr');
    if (tab === 'pr') filters();
    const en = entries();
    const elMe = $('#me'), elPod = $('#pod'), elRows = $('#rows');
    if (elMe) elMe.innerHTML = en.length ? meStrip(en) : '';
    if (elPod) elPod.innerHTML = podium(en);
    if (elRows) elRows.innerHTML = en.length ? rows(en) : '<div class="empty">Henüz sıralama yok.</div>';
  }

  function openD(id) {
    const en = prEntries().find(e => String(e.u.id) === String(id));
    if (!en || !en.pr) return;
    const u = en.u, p = en.pr;
    lastF = document.activeElement;
    const pool = users.map(x => ({ x, b: bestOf((x.prs || []).filter(q => q.ex === p.ex)) }))
      .filter(o => o.b).sort((a, b) => b.b.w - a.b.w || b.b.r - a.b.r);
    const rk = pool.findIndex(o => String(o.x.id) === String(id)) + 1;
    const ov = $('#ov');
    if (!ov) return;
    ov.innerHTML = '<div class="dlg" role="dialog" aria-modal="true" aria-labelledby="dn"><button class="dx" id="dc" aria-label="Kapat"><svg class="i" style="width:16px;height:16px"><use href="#i-x"/></svg></button>' +
      '<div class="dh">' + av(u, 'big') + '<div><small>Kişisel rekor</small><b id="dn">' + esc(u.name) + '</b><span>En yüksek PR detayları</span></div></div>' +
      '<div class="cap">Hareket</div><div class="mv">' + esc(p.ex) + '</div>' +
      '<div class="st3"><div><b>' + fw(p.w) + '<small>kg</small></b><span>Ağırlık</span></div><div><b>' + (p.s || 1) + '</b><span>Set</span></div><div><b>' + (p.r || 1) + '</b><span>Tekrar</span></div></div>' +
      '<div class="vl"><span>Toplam hacim</span><b>' + fn((p.w || 0) * (p.r || 1) * (p.s || 1)) + ' <small>kg</small></b></div>' +
      '<div class="vl"><span>Bu harekette sıralama</span><b>#' + rk + ' <small>/ ' + pool.length + '</small></b></div>' +
      '<div class="vl"><span>Tarih</span><b style="font-size:15px">' + fy(p.d || new Date().toISOString()) + '</b></div></div>';
    ov.classList.add('show');
    ov.setAttribute('aria-hidden', 'false');
    const dc = $('#dc');
    if (dc) dc.focus();
  }

  function closeD() {
    const ov = $('#ov');
    if (!ov) return;
    ov.classList.remove('show');
    ov.setAttribute('aria-hidden', 'true');
    if (lastF) lastF.focus();
  }

  function loadDemo() {
    let sd = 11;
    const rnd = () => (sd = (sd * 9301 + 49297) % 233280) / 233280;
    const EX = [
      ['Barbell Bench Press', 'chest', 80],
      ['Incline Dumbbell Press', 'chest', 30],
      ['Lat Pulldown', 'back', 70],
      ['Barbell Row', 'back', 65],
      ['Seated Shoulder Press', 'shoulders', 28],
      ['EZ Bar Curl', 'arms', 35],
      ['Triceps Pushdown', 'arms', 40],
      ['Squat', 'legs', 100],
      ['Leg Press', 'legs', 180],
      ['Cable Crunch', 'core', 45]
    ];
    users = ['Sen', 'Deniz K.', 'Mert A.', 'Elif S.', 'Burak T.', 'Selin Y.', 'Can D.', 'Ayşe B.', 'Kerem Ö.'].map((name, i) => {
      const f = .55 + rnd() * .7, prs = [];
      EX.forEach(([ex, c, b]) => {
        if (i === 0 || rnd() < .75) {
          prs.push({
            ex,
            cat: c,
            w: Math.round(b * f * (.9 + rnd() * .2) / 2.5) * 2.5,
            r: 3 + Math.floor(rnd() * 8),
            s: 1 + Math.floor(rnd() * 4),
            d: ago(Math.floor(rnd() * 40))
          });
        }
      });
      const xp = Math.round(rnd() * 6000);
      return { id: 'u' + i, name, me: i === 0, xp, lvl: 1 + Math.floor(Math.sqrt(xp / 60)), prs };
    });
  }

  async function loadData() {
    if (demo) return;
    let fetched = false;
    if (typeof isFirebaseConfigured !== 'undefined' && isFirebaseConfigured && typeof db !== 'undefined' && db) {
      try {
        const snap = await db.collection('public_stats').get();
        const list = [];
        snap.forEach(doc => {
          const d = doc.data();
          const isMe = (typeof currentUser !== 'undefined' && currentUser && (d.uid === currentUser.uid));
          const prs = [];
          if (d.bestPR) {
            prs.push({
              ex: d.bestPRExercise || 'Bench Press',
              cat: d.bestPRCategory || 'chest',
              w: Number(d.bestPR) || 0,
              r: Number(d.bestPRReps) || 1,
              s: Number(d.bestPRSets) || 1,
              d: d.bestPRDate || new Date().toISOString()
            });
          }
          if (Array.isArray(d.prs)) {
            d.prs.forEach(p => prs.push(p));
          }
          list.push({
            id: d.uid || doc.id,
            name: d.displayName || 'İsimsiz',
            img: d.photoURL || '',
            me: isMe,
            xp: Number(d.xp) || 0,
            lvl: Number(d.level) || (1 + Math.floor(Math.sqrt((d.xp || 0) / 60))),
            prs
          });
        });
        if (list.length > 0) {
          users = list;
          fetched = true;
        }
      } catch (err) {
        console.warn('Leaderboard fetch error:', err);
      }
    }

    if (!fetched && users.length === 0) {
      loadDemo();
    }
    lb();
  }

  function bindEvents() {
    const tabs = $('#tabs');
    if (tabs) tabs.onclick = e => { const b = e.target.closest('[data-t]'); if (b) { tab = b.dataset.t; lb(); } };

    const cats = $('#cats');
    if (cats) cats.onclick = e => { const b = e.target.closest('[data-c]'); if (b) { cat = b.dataset.c; exf = 'all'; lb(); } };

    const exs = $('#exs');
    if (exs) exs.onclick = e => { const b = e.target.closest('[data-e]'); if (b) { exf = b.dataset.e; lb(); } };

    const lbw = document.querySelector('#pageLeaderboard .lbw');
    if (lbw) lbw.addEventListener('click', e => { const b = e.target.closest('[data-u]'); if (b) openD(b.dataset.u); });

    const ov = $('#ov');
    if (ov) ov.onclick = e => { if (e.target.id === 'ov' || e.target.closest('#dc')) closeD(); };

    window.addEventListener('keydown', e => {
      const elOv = $('#ov');
      if (e.key === 'Escape' && elOv && elOv.classList.contains('show')) closeD();
    });
  }

  window.renderLeaderboard = function(forceRefresh) {
    if (forceRefresh) users = [];
    loadData();
  };

  function setup() {
    bindEvents();
    loadData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

// =============================================
// WEEKLY PR DETAIL POPUP
// =============================================
window.showWeeklyPRPopup = function(exercise, weight, sets, reps, unit) {
  const existing = document.getElementById('weeklyDetailPopup');
  if (existing) existing.remove();

  const exName = exercise || (currentLang === 'tr' ? 'Bilinmeyen Hareket' : 'Unknown Exercise');
  const wt = weight || 0;
  const s = sets || 1;
  const r = reps || 0;
  const prUnit = unit || 'kg';

  const overlay = document.createElement('div');
  overlay.id = 'weeklyDetailPopup';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 0 24px;
    animation: prOverlayIn 0.25s ease both;
  `;
  overlay.innerHTML = `
    <style>
      @keyframes prOverlayIn { from { opacity:0; } to { opacity:1; } }
      @keyframes prCardIn { from { opacity:0; transform: translateY(40px) scale(0.95); } to { opacity:1; transform: translateY(0) scale(1); } }
      @keyframes prStatPop { from { opacity:0; transform: scale(0.7); } to { opacity:1; transform: scale(1); } }
      .pr-popup-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.65); backdrop-filter:blur(8px); }
      .pr-popup-card {
        position: relative;
        z-index: 1;
        width: min(420px, calc(100vw - 32px));
        background: linear-gradient(145deg, rgba(26,22,46,0.98), rgba(13,13,18,0.99));
        border: 1px solid rgba(139,124,247,0.3);
        border-radius: 28px;
        padding: 28px 24px 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,124,247,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
        animation: prCardIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275) both;
        animation-delay: 0.05s;
      }
      .pr-popup-close {
        position: absolute;
        top: 16px; right: 16px;
        width: 32px; height: 32px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
        font-size: 1rem;
        color: var(--text-muted);
        transition: all 0.2s ease;
      }
      .pr-popup-close:hover { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.3); color: #ef4444; }
      .pr-stat-box {
        background: rgba(139,124,247,0.07);
        border: 1px solid rgba(139,124,247,0.18);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        animation: prStatPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
      }
      .pr-stat-box:nth-child(1) { animation-delay: 0.18s; }
      .pr-stat-box:nth-child(2) { animation-delay: 0.26s; }
      .pr-stat-box:nth-child(3) { animation-delay: 0.34s; }
      .pr-stat-val {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.6rem;
        font-weight: 900;
        background: linear-gradient(135deg, #fff 0%, var(--accent-primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
        position: relative;
        display: inline-block;
      }
      .pr-stat-label {
        font-size: 0.65rem;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .pr-exercise-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(139,124,247,0.12);
        border: 1px solid rgba(139,124,247,0.25);
        border-radius: 12px;
        padding: 8px 14px;
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--accent-primary);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    </style>
    <div class="pr-popup-backdrop" onclick="document.getElementById('weeklyDetailPopup').remove()"></div>
    <div class="pr-popup-card">
      <div class="pr-popup-close" onclick="document.getElementById('weeklyDetailPopup').remove()">✕</div>
      
      <!-- Header -->
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:20px;">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,var(--accent-deep),var(--accent-primary));display:flex;align-items:center;justify-content:center;font-size:1.8rem;border:2px solid rgba(139,124,247,0.4);">👑</div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.65rem; font-weight:700; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px;">${currentLang === 'tr' ? '🏆 Haftalık En Yüksek PR' : '🏆 Weekly Best PR'}</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:1.15rem; font-weight:900; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${currentLang === 'tr' ? 'Kişisel Rekorun' : 'Your Personal Record'}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${currentLang === 'tr' ? 'Bu hafta kırdığın en yüksek rekor' : 'The highest record you broke this week'}</div>
        </div>
      </div>

      <!-- Exercise chip -->
      <div style="margin-bottom:18px;">
        <div style="font-size:0.65rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px;">${currentLang === 'tr' ? 'Hareket' : 'Exercise'}</div>
        <div class="pr-exercise-chip">💪 ${exName}</div>
      </div>

      <!-- Stats grid -->
      <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
        <div class="pr-stat-box">
          <div class="pr-stat-val">${wt}<small style="position: absolute; font-size: 0.55em; opacity: 0.7; bottom: 0.1em; left: 100%; margin-left: 2px;">${prUnit}</small></div>
          <div class="pr-stat-label">${currentLang === 'tr' ? 'Ağırlık' : 'Weight'}</div>
        </div>
        <div class="pr-stat-box">
          <div class="pr-stat-val">${s}</div>
          <div class="pr-stat-label">${currentLang === 'tr' ? 'Set' : 'Sets'}</div>
        </div>
        <div class="pr-stat-box">
          <div class="pr-stat-val">${r}</div>
          <div class="pr-stat-label">${currentLang === 'tr' ? 'Tekrar' : 'Reps'}</div>
        </div>
      </div>

      <!-- Volume indicator -->
      ${s > 0 && r > 0 ? `
      <div style="margin-top:16px; padding:12px 16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:14px; display:flex; align-items:center; justify-content:space-between;">
        <div style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${currentLang === 'tr' ? 'Toplam Hacim' : 'Total Volume'}</div>
        <div style="font-family:'Space Grotesk',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary);">${(wt * s * r).toLocaleString(currentLang === 'tr' ? 'tr-TR' : 'en-US')} <span style="font-size:0.7rem;opacity:0.6;">${prUnit}</span></div>
      </div>` : ''}
    </div>
  `;

  document.body.appendChild(overlay);
};

// =============================================
// WEEKLY MUSCLE DETAIL POPUP
// =============================================
window.showWeeklyMusclePopup = function(muscleGroup, exCount, sets) {
  const existing = document.getElementById('weeklyDetailPopup');
  if (existing) existing.remove();

  const mGroup = muscleGroup || (currentLang === 'tr' ? 'Bilinmeyen Kas Grubu' : 'Unknown Muscle Group');
  const ec = exCount || 0;
  const s = sets || 0;

  const overlay = document.createElement('div');
  overlay.id = 'weeklyDetailPopup';
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 0 24px;
    animation: prOverlayIn 0.25s ease both;
  `;
  overlay.innerHTML = `
    <style>
      @keyframes prOverlayIn { from { opacity:0; } to { opacity:1; } }
      @keyframes prCardIn { from { opacity:0; transform: translateY(40px) scale(0.95); } to { opacity:1; transform: translateY(0) scale(1); } }
      @keyframes prStatPop { from { opacity:0; transform: scale(0.7); } to { opacity:1; transform: scale(1); } }
      .pr-popup-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.65); backdrop-filter:blur(8px); }
      .pr-popup-card {
        position: relative;
        z-index: 1;
        width: min(420px, calc(100vw - 32px));
        background: linear-gradient(145deg, rgba(26,22,46,0.98), rgba(13,13,18,0.99));
        border: 1px solid rgba(139,124,247,0.3);
        border-radius: 28px;
        padding: 28px 24px 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,124,247,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
        animation: prCardIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275) both;
        animation-delay: 0.05s;
      }
      .pr-popup-close {
        position: absolute;
        top: 16px; right: 16px;
        width: 32px; height: 32px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
        font-size: 1rem;
        color: var(--text-muted);
        transition: all 0.2s ease;
      }
      .pr-popup-close:hover { background: rgba(239,68,68,0.15); border-color: rgba(239,68,68,0.3); color: #ef4444; }
      .pr-stat-box {
        background: rgba(139,124,247,0.07);
        border: 1px solid rgba(139,124,247,0.18);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        animation: prStatPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
      }
      .pr-stat-box:nth-child(1) { animation-delay: 0.18s; }
      .pr-stat-box:nth-child(2) { animation-delay: 0.26s; }
      .pr-stat-val {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.6rem;
        font-weight: 900;
        background: linear-gradient(135deg, #fff 0%, var(--accent-primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
      }
      .pr-stat-label {
        font-size: 0.65rem;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .pr-exercise-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(139,124,247,0.12);
        border: 1px solid rgba(139,124,247,0.25);
        border-radius: 12px;
        padding: 8px 14px;
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--accent-primary);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    </style>
    <div class="pr-popup-backdrop" onclick="document.getElementById('weeklyDetailPopup').remove()"></div>
    <div class="pr-popup-card">
      <div class="pr-popup-close" onclick="document.getElementById('weeklyDetailPopup').remove()">✕</div>
      
      <!-- Header -->
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:20px;">
        <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,var(--accent-deep),var(--accent-primary));display:flex;align-items:center;justify-content:center;font-size:1.8rem;border:2px solid rgba(139,124,247,0.4);">🔥</div>
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.65rem; font-weight:700; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px;">${currentLang === 'tr' ? '💪 Haftalık En Çok Çalışılan' : '💪 Weekly Most Trained'}</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:1.15rem; font-weight:900; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${currentLang === 'tr' ? 'Kas Grubu Analizi' : 'Muscle Group Analysis'}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${currentLang === 'tr' ? 'Bu hafta en çok odaklandığın bölge' : 'Your most focused area this week'}</div>
        </div>
      </div>

      <!-- Muscle Group chip -->
      <div style="margin-bottom:18px;">
        <div style="font-size:0.65rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px;">${currentLang === 'tr' ? 'Hedef Bölge' : 'Target Muscle'}</div>
        <div class="pr-exercise-chip">🎯 ${mGroup}</div>
      </div>

      <!-- Stats grid -->
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
        <div class="pr-stat-box">
          <div class="pr-stat-val">${s}</div>
          <div class="pr-stat-label">${currentLang === 'tr' ? 'Toplam Set' : 'Total Sets'}</div>
        </div>
        <div class="pr-stat-box">
          <div class="pr-stat-val">${ec}</div>
          <div class="pr-stat-label">${currentLang === 'tr' ? 'Farklı Egzersiz' : 'Different Exercises'}</div>
        </div>
      </div>

      <!-- Info note -->
      <div style="margin-top:16px; padding:12px 16px; background:rgba(139,124,247,0.05); border:1px solid rgba(139,124,247,0.15); border-radius:14px; text-align:center;">
        <div style="font-size:0.8rem; color:var(--text-secondary); font-weight:500;">
          Bu hafta <span style="color:var(--accent-primary); font-weight:700;">${mGroup}</span> bölgesi için mükemmel bir hacim yakaladın!
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
};

// =============================================
// DIET SECTION (reference: zyro-diet.html)
// =============================================
(function initDietModule() {
  const MONL = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const MON = ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'];
  const DAY = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
  const DS = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
  const iso = d => d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  const pd = s => { const [y,m,d] = s.split('-'); return new Date(+y, m-1, +d); };
  const ago = n => { const d = new Date(); d.setDate(d.getDate() - n); return iso(d); };
  const num = el => parseFloat(String(el?.value || 0).replace(',','.')) || 0;
  const $ = s => document.querySelector('#pageDiet ' + s) || document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  let tt;
  function toast(t, s) {
    const el = $('#toast') || document.getElementById('toast');
    if (!el) return;
    el.innerHTML = '<div class="ic"><svg class="i" style="width:22px;height:22px"><use href="#i-check"/></svg></div><div><b>' + t + '</b><span>' + s + '</span></div>';
    el.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => el.classList.remove('show'), 3600);
  }

  const TAGS = ['Kahvaltı','Öğle','Akşam','Ara öğün','Diğer'];
  const MC = { p: '#8fb3cc', c: '#dcc7a8', f: '#c99a9a' };
  let goals = { k: 2000, p: 170, c: 110, f: 70 };
  let meals = {}, sel = ago(0), tag = 'Diğer', photo = null;
  const TODAY = ago(0);

  function syncGoalsFromAppData() {
    if (typeof appData !== 'undefined' && appData && appData.dietTargets) {
      goals = {
        k: Number(appData.dietTargets.kcal) || 2000,
        p: Number(appData.dietTargets.protein) || 170,
        c: Number(appData.dietTargets.carbs) || 110,
        f: Number(appData.dietTargets.fat) || 70
      };
    }
  }

  const dm = d => {
    if (typeof appData !== 'undefined' && appData && appData.dietLogs && appData.dietLogs[d]) {
      return appData.dietLogs[d].map(m => ({
        id: m.id,
        name: m.name || '',
        tag: m.tag || 'Diğer',
        k: Number(m.k ?? m.calories ?? 0),
        p: Number(m.p ?? m.protein ?? 0),
        c: Number(m.c ?? m.carbs ?? 0),
        f: Number(m.f ?? m.fat ?? 0)
      }));
    }
    return meals[d] || [];
  };

  const sum = d => dm(d).reduce((a, m) => ({ k: a.k + m.k, p: a.p + m.p, c: a.c + m.c, f: a.f + m.f }), { k: 0, p: 0, c: 0, f: 0 });
  const fm = n => String(Math.round(n * 10) / 10).replace('.', ',');

  function week() {
    const elRange = $('#range'), elWk7 = $('#wk7');
    if (!elRange || !elWk7) return;
    const r = [];
    for (let i = 6; i >= 0; i--) r.push(ago(i));
    elRange.textContent = pd(r[0]).getDate() + ' ' + MON[pd(r[0]).getMonth()] + ' – ' + pd(r[6]).getDate() + ' ' + MON[pd(r[6]).getMonth()];
    elWk7.innerHTML = r.map(d => {
      const D = pd(d), w = Math.min(100, Math.round(sum(d).k / (goals.k || 1) * 100));
      return '<button class="dy' + (d === TODAY ? ' td' : '') + '" role="tab" aria-selected="' + (d === sel) + '" data-d="' + d + '"><small>' + (d === TODAY ? 'Bugün' : DS[D.getDay()]) + '</small><b>' + D.getDate() + '</b><i><u style="--w:' + w + '%"></u></i></button>';
    }).join('');
  }

  function macros() {
    const s = sum(sel), D = pd(sel);
    const elMt = $('#mt'), elKc = $('#kc'), elKg = $('#kg'), elRv = $('#rv'), elBars = $('#bars');
    if (!elMt || !elKc || !elKg || !elRv || !elBars) return;
    elMt.textContent = sel === TODAY ? 'Bugünkü makro durumu' : D.getDate() + ' ' + MONL[D.getMonth()] + ' makro durumu';
    elKc.textContent = Math.round(s.k).toLocaleString('tr-TR');
    const left = goals.k - s.k;
    elKg.textContent = '/ ' + goals.k + ' kcal · ' + (left >= 0 ? Math.round(left) + ' kalan' : Math.round(-left) + ' fazla');
    elRv.classList.toggle('over', left < 0);
    requestAnimationFrame(() => {
      elRv.style.strokeDashoffset = 1 - Math.min(s.k / (goals.k || 1), 1);
    });
    elBars.innerHTML = [['p','Protein'],['c','Karbonhidrat'],['f','Yağ']].map(([k, n]) =>
      '<div class="br"><div class="h"><span>' + n + '</span><b>' + fm(s[k]) + ' / ' + goals[k] + ' g</b></div><div class="tr"><i style="--c:' + MC[k] + '" data-w="' + Math.min(100, s[k] / (goals[k] || 1) * 100) + '"></i></div></div>'
    ).join('');
    requestAnimationFrame(() => {
      document.querySelectorAll('#bars .tr i').forEach(i => i.style.width = i.dataset.w + '%');
    });
  }

  function list() {
    const a = dm(sel);
    const elLt = $('#lt'), elLc = $('#lc'), elMl = $('#ml');
    if (!elLt || !elLc || !elMl) return;
    elLt.textContent = sel === TODAY ? 'Bugün yenilenler' : 'Bu gün yenilenler';
    elLc.textContent = a.length + ' öğün';
    elMl.innerHTML = a.length ? a.map(m =>
      '<div class="ml"><div><b>' + esc(m.name) + '</b><span><i class="mt" style="font-style:normal">' + m.tag + '</i>P ' + fm(m.p) + ' · K ' + fm(m.c) + ' · Y ' + fm(m.f) + '</span></div><div class="k">' + Math.round(m.k) + ' <small style="font:400 12px var(--b);color:var(--mute)">kcal</small></div><button class="x" data-id="' + m.id + '" aria-label="Sil">✕</button></div>'
    ).join('') : '<div class="empty">Henüz yemek eklenmedi.</div>';
  }

  function all() {
    syncGoalsFromAppData();
    week();
    macros();
    list();
  }

  function tags() {
    const elTags = $('#tags');
    if (!elTags) return;
    elTags.innerHTML = TAGS.map(t => '<button data-g="' + t + '" aria-pressed="' + (t === tag) + '">' + t + '</button>').join('');
  }

  function tab(t) {
    document.querySelectorAll('#tabs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t === t));
    const elPm = $('#pm'), elPp = $('#pp');
    if (elPm) elPm.hidden = (t !== 'm');
    if (elPp) elPp.hidden = (t !== 'p');
  }

  function clear() {
    ['mn','mk','mp','mc','mf'].forEach(i => { const el = $('#' + i); if (el) el.value = ''; });
    photo = null;
    const file = $('#file'); if (file) file.value = '';
    const dropc = $('#dropc'); if (dropc) dropc.innerHTML = '<svg class="i" style="width:28px;height:28px"><use href="#i-img"/></svg><div>Yemeğin fotoğrafını seç veya çek</div>';
    const err = $('#err'); if (err) err.textContent = '';
  }

  function bindEvents() {
    const elWk7 = $('#wk7');
    if (elWk7) elWk7.onclick = e => { const b = e.target.closest('[data-d]'); if (b) { sel = b.dataset.d; all(); } };

    const elTags = $('#tags');
    if (elTags) elTags.onclick = e => { const b = e.target.closest('[data-g]'); if (b) { tag = b.dataset.g; tags(); } };

    const elTabs = $('#tabs');
    if (elTabs) elTabs.onclick = e => { const b = e.target.closest('[data-t]'); if (b) tab(b.dataset.t); };

    const elClear = $('#clear');
    if (elClear) elClear.onclick = clear;

    const elMsave = $('#msave');
    if (elMsave) elMsave.onclick = () => {
      const name = ($('#mn')?.value || '').trim(), k = num($('#mk'));
      if (!name || k <= 0) { const err = $('#err'); if (err) err.textContent = 'Yemek adı ve kalori değerini gir.'; return; }
      const newMeal = {
        id: Date.now(),
        name,
        tag,
        k,
        p: num($('#mp')),
        c: num($('#mc')),
        f: num($('#mf')),
        calories: k,
        protein: num($('#mp')),
        carbs: num($('#mc')),
        fat: num($('#mf')),
        timestamp: Date.now()
      };
      if (typeof appData !== 'undefined' && appData) {
        if (!appData.dietLogs) appData.dietLogs = {};
        if (!appData.dietLogs[sel]) appData.dietLogs[sel] = [];
        appData.dietLogs[sel].push(newMeal);
        if (typeof saveData === 'function') saveData();
      } else {
        (meals[sel] = meals[sel] || []).push(newMeal);
      }
      clear();
      all();
      toast('Öğün kaydedildi', esc(name) + ' · ' + Math.round(k) + ' kcal');
    };

    const elMl = $('#ml');
    if (elMl) elMl.onclick = e => {
      const b = e.target.closest('[data-id]');
      if (b) {
        const id = b.dataset.id;
        if (typeof appData !== 'undefined' && appData && appData.dietLogs && appData.dietLogs[sel]) {
          appData.dietLogs[sel] = appData.dietLogs[sel].filter(m => String(m.id) !== String(id));
          if (typeof saveData === 'function') saveData();
        } else {
          meals[sel] = dm(sel).filter(m => String(m.id) !== String(id));
        }
        all();
      }
    };

    const elGedit = $('#gedit');
    if (elGedit) elGedit.onclick = () => {
      const g = $('#ged');
      if (!g) return;
      g.hidden = !g.hidden;
      if (!g.hidden) {
        if ($('#gk')) $('#gk').value = goals.k;
        if ($('#gp')) $('#gp').value = goals.p;
        if ($('#gc')) $('#gc').value = goals.c;
        if ($('#gf')) $('#gf').value = goals.f;
      }
    };

    const elGcancel = $('#gcancel');
    if (elGcancel) elGcancel.onclick = () => { const g = $('#ged'); if (g) g.hidden = true; };

    const elGsave = $('#gsave');
    if (elGsave) elGsave.onclick = () => {
      const g = { k: num($('#gk')), p: num($('#gp')), c: num($('#gc')), f: num($('#gf')) };
      if (Object.values(g).some(v => !(v > 0))) {
        toast('Hedefler kaydedilmedi', "Tüm değerler 0'dan büyük olmalı");
        return;
      }
      goals = g;
      if (typeof appData !== 'undefined' && appData) {
        appData.dietTargets = { kcal: g.k, protein: g.p, carbs: g.c, fat: g.f };
        if (typeof saveData === 'function') saveData();
      }
      const ged = $('#ged'); if (ged) ged.hidden = true;
      all();
      toast('Hedefler güncellendi', 'Yeni makro hedeflerin kaydedildi');
    };

    const elFile = $('#file');
    if (elFile) elFile.onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      photo = f;
      const dropc = $('#dropc');
      if (dropc) dropc.innerHTML = '<img alt="Seçilen yemek fotoğrafı" src="' + URL.createObjectURL(f) + '">';
    };

    const elAnalyze = $('#analyze');
    if (elAnalyze) elAnalyze.onclick = async () => {
      if (!photo) { const err = $('#err'); if (err) err.textContent = 'Önce bir fotoğraf seç.'; return; }
      if (typeof window.analyzeMeal !== 'function') {
        toast('AI analizi bağlı değil', 'Bu önizlemede analiz çalışmaz');
        return;
      }
      try {
        toast('Analiz ediliyor...', 'Lütfen bekleyin');
        const r = await window.analyzeMeal(photo);
        if ($('#mn')) $('#mn').value = r.name || '';
        if ($('#mk')) $('#mk').value = r.k || '';
        if ($('#mp')) $('#mp').value = r.p || '';
        if ($('#mc')) $('#mc').value = r.c || '';
        if ($('#mf')) $('#mf').value = r.f || '';
        tab('m');
        toast('Analiz tamamlandı', 'Değerleri kontrol edip kaydet');
      } catch (err) {
        toast('Analiz başarısız', 'Lütfen tekrar dene');
      }
    };
  }

  window.analyzeMeal = async function(file) {
    if (typeof window.geminiAnalyzeFoodImage === 'function') {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const res = await window.geminiAnalyzeFoodImage(reader.result);
            resolve({
              name: res.meal_name || '',
              k: res.calories || 0,
              p: res.protein || 0,
              c: res.carbs || 0,
              f: res.fat || 0
            });
          } catch (e) {
            reject(e);
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    throw new Error('AI analizi bağlı değil');
  };

  window.renderDiet = function() {
    all();
  };

  function setup() {
    bindEvents();
    tags();
    tab('m');
    all();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

// =============================================
// AUTO SYNC ACHIEVEMENTS FOR CURRENT USER
// =============================================
window.syncPastAchievements = function() {
  if (!appData || !appData.workoutLogs) return false;
  if (!appData.achievements) appData.achievements = {};
  
  const maxWeights = {};
  Object.values(appData.workoutLogs).forEach(dayLogs => {
    (dayLogs || []).forEach(log => {
      const ex = log.exercise;
      const w = parseFloat(log.weight) || 0;
      const r = parseInt(log.reps) || 0;
      
      let score = w;
      if (typeof calculateStrengthScore === 'function') {
        score = calculateStrengthScore(w, r);
      } else {
        score = w * (1 + r / 30);
      }
      
      if (!maxWeights[ex] || score > maxWeights[ex]) maxWeights[ex] = score;
    });
  });
  
  let modified = false;
  if (typeof ACHIEVEMENT_DEFS !== 'undefined') {
    ACHIEVEMENT_DEFS.forEach(def => {
      if (!def.exercise) return;
      if (appData.achievements[def.id]) return; // already unlocked
      const maxW = maxWeights[def.exercise] || 0;
      if (maxW >= def.target) {
        appData.achievements[def.id] = { unlockedAt: Date.now() };
        modified = true;
      }
    });
  }
  
  return modified;
};
