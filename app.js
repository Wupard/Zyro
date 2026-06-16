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
    notificationPermissionDenied: 'Notification permission denied.'
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
    notificationPermissionDenied: 'Bildirim izni reddedildi.'
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
    if (val) {
      if (key === 'geminiInfo' || key === 'step1' || key === 'step2' || key === 'step3') {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
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
      if (currentPage === 'posture') { renderPosture(currentPostureTab); }
      if (currentPage === 'workouts') { renderWorkout(currentWorkoutTab); }
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
  // Sırt / Back
  'Medium-Grip Lat Pulldown': ['traps'],
  'Dumbbell Row': ['traps'],
  'Reverse Grip Lat Pulldown': ['traps'],
  'Dumbbell Shrug': ['traps'],

  // Arka Kol / Triceps
  'Cable Lying Triceps Extension': ['triceps'],
  'Seated Dumbbell Overhead Tricep': ['triceps'],
  'Single-Arm Cable Tricep Kickback': ['triceps'],

  // Omuz / Shoulder
  'Seated Barbell Overhead Press': ['shoulders'],
  'Cable Lateral Raise': ['shoulders'],
  'Cable Rope Face Pull': ['shoulders', 'traps'],
  'Seated Rear Delt Fly': ['shoulders', 'traps'],

  // Ön Kol / Biceps - Forearm
  'Reverse Cable Curl': ['biceps', 'forearms'],

  // Göğüs / Chest
  'Flat Barbell Bench Press': ['chest', 'triceps'],
  'Incline Dumbbell Press': ['chest', 'triceps'],

  // Ön Kol / Biceps
  'Seated Incline Dumbbell Curl': ['biceps'],
  'Hammer Curl': ['biceps', 'forearms'],
  'Single-Arm Cable Curl': ['biceps'],

  // Bacak / Leg
  'Romanian Deadlift': ['glutes', 'traps'],
  'Leg Extension': ['quads'],
  'Reverse Leg Extension': ['glutes'],
  'Adductor Machine': ['glutes'],
  'Smith Machine Calf Raise': ['calves'],
};
const ALL_EXERCISES = Object.keys(EXERCISE_MUSCLES).sort();

// =============================================
// GLOBAL EXERCISE CATEGORIES
// =============================================
const EXERCISE_CATEGORIES = {
  'chest': ['Flat Barbell Bench Press', 'Incline Dumbbell Press', 'Dumbbell Fly'],
  'shoulders': ['Seated Barbell Overhead Press', 'Cable Lateral Raise', 'Cable Rope Face Pull', 'Seated Rear Delt Fly', 'Dumbbell Shrug'],
  'back': ['Medium-Grip Lat Pulldown', 'Dumbbell Row', 'Reverse Grip Lat Pulldown'],
  'legs': ['Romanian Deadlift', 'Leg Extension', 'Reverse Leg Extension', 'Adductor Machine', 'Smith Machine Calf Raise'],
  'biceps': [
    'Hammer Curl', 'Seated Incline Dumbbell Curl', 'Single-Arm Cable Curl', 'Reverse Cable Curl'
  ],
  'triceps': [
    'Cable Lying Triceps Extension', 'Seated Dumbbell Overhead Tricep', 'Single-Arm Cable Tricep Kickback'
  ],
  'wrists': [],
  'core': []
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
  'core':      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' // Target (Core center)
};


const DEFAULT_PROGRAMS = {
  day1: [ // SALI
    {name:'Medium-Grip Lat Pulldown',sets:'3x6-8',weight:'-'},
    {name:'Dumbbell Row',sets:'3x6-8',weight:'-'},
    {name:'Reverse Grip Lat Pulldown',sets:'3x6-8',weight:'-'},
    {name:'Cable Lying Triceps Extension',sets:'3x6-8',weight:'-'},
    {name:'Seated Dumbbell Overhead Tricep',sets:'3x6-8',weight:'-'},
    {name:'Single-Arm Cable Tricep Kickback',sets:'3x6-8',weight:'-'},
    {name:'Seated Barbell Overhead Press',sets:'3x6-8',weight:'-'},
    {name:'Cable Lateral Raise',sets:'3x6-8',weight:'-'},
    {name:'Reverse Cable Curl',sets:'3x6-8',weight:'-'},
  ],
  day2: [ // PERŞEMBE
    {name:'Flat Barbell Bench Press',sets:'3x6-8',weight:'-'},
    {name:'Incline Dumbbell Press',sets:'3x6-8',weight:'-'},
    {name:'Dumbbell Fly',sets:'3x6-8',weight:'-'},
    {name:'Cable Rope Face Pull',sets:'3x6-8',weight:'-'},
    {name:'Seated Rear Delt Fly',sets:'3x6-8',weight:'-'},
    {name:'Seated Incline Dumbbell Curl',sets:'3x6-8',weight:'-'},
    {name:'Hammer Curl',sets:'3x6-8',weight:'-'},
    {name:'Single-Arm Cable Curl',sets:'3x6-8',weight:'-'},
  ],
  day3: [ // CUMARTESİ
    {name:'Romanian Deadlift',sets:'3x6-8',weight:'-'},
    {name:'Leg Extension',sets:'3x6-8',weight:'-'},
    {name:'Reverse Leg Extension',sets:'3x6-8',weight:'-'},
    {name:'Adductor Machine',sets:'3x6-8',weight:'-'},
    {name:'Smith Machine Calf Raise',sets:'3x6-8',weight:'-'},
    {name:'Cable Rope Face Pull',sets:'3x6-8',weight:'-'},
    {name:'Cable Lateral Raise',sets:'3x6-8',weight:'-'},
    {name:'Dumbbell Shrug',sets:'3x6-8',weight:'-'},
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
  'Child’s Pose (Çocuk Pozu)': 'https://www.youtube.com/watch?v=2vJK_d3I_oU'
};

// =============================================
// WORKOUT VIDEO URLS
// =============================================
const WORKOUT_VIDEO_URLS = {
  // SALI
  'Medium-Grip Lat Pulldown': 'https://www.youtube.com/shorts/bNmvKpJSWKM',
  'Reverse-Grip Lat Pulldown': 'https://www.youtube.com/shorts/rguA3pm73rs',
  'Dumbbell Row': 'https://www.youtube.com/shorts/WkFX6_GxAs8',
  'Reverse Grip Lat Pulldown': 'https://www.youtube.com/watch?v=_o8r-w2GYKY',
  'Cable Lying Triceps Extension': 'https://www.youtube.com/watch?v=SzQ9_1fwVZ0',
  'Seated Dumbbell Overhead Tricep': 'https://www.youtube.com/shorts/b_r_LW4HEcM',
  'Single-Arm Cable Tricep Kickback': 'https://www.youtube.com/shorts/7_C9_SWHZbo',
  'Seated Barbell Overhead Press': 'https://www.youtube.com/shorts/tKPtgQI-VFM',
  'Cable Lateral Raise': 'https://www.youtube.com/shorts/xrBcuPNTxLg',
  'Reverse Cable Curl': 'https://www.youtube.com/watch?v=HwB-DevuJjU',

  // PERŞEMBE
  'Flat Barbell Bench Press': 'https://www.youtube.com/shorts/hWbUlkb5Ms4',
  'Incline Dumbbell Press': 'https://www.youtube.com/shorts/8fXfwG4ftaQ',
  'Dumbbell Fly': 'https://www.youtube.com/shorts/8nG8y4LNQRM',
  'Cable Rope Face Pull': 'https://www.youtube.com/shorts/IeOqdw9WI90',
  'Seated Rear Delt Fly': 'https://www.youtube.com/shorts/PkGcUy-XDMY',
  'Seated Incline Dumbbell Curl': 'https://www.youtube.com/shorts/uCUaRFlA9vE',
  'Hammer Curl': 'https://www.youtube.com/shorts/lmIo_gVE8T4',
  'Single-Arm Cable Curl': 'https://www.youtube.com/shorts/EhC6ejgDGF0',

  // CUMARTESİ
  'Romanian Deadlift': 'https://www.youtube.com/shorts/5rIqP63yWFg',
  'Leg Extension': 'https://www.youtube.com/shorts/iQ92TuvBqRo',
  'Reverse Leg Extension': 'https://www.youtube.com/shorts/lGNeJsdqJwg',
  'Adductor Machine': 'https://www.youtube.com/shorts/BXs0PIkdXGs',
  'Smith Machine Calf Raise': 'https://www.youtube.com/shorts/wlqTemUXPXY',
  'Dumbbell Shrug': 'https://www.youtube.com/shorts/rFsSeClGnNA',
};

const DEFAULT_POSTURE_PROGRAMS = {
  mon: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
  ],
  tue: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
  ],
  wed: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
  ],
  thu: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
  ],
  fri: [
    {name:'Doorway Stretch',sets:'2 set x 30 saniye',done:false},
    {name:'Y-T-W Raises',sets:'Her harf için 15 tekrar (Toplam 45 tekrar)',done:false},
    {name:'Wall Angels',sets:'20 tekrar',done:false},
    {name:'Chin Tuck',sets:'15 tekrar (Her birinde 3 sn bekleme)',done:false},
  ],
  sat: [
    {name:'Cat-Cow',sets:'20 tekrar',done:false},
    {name:'Kneeling Hip Flexor Stretch',sets:'Her bacak için 30 saniye',done:false},
    {name:'Glute Bridge',sets:'2 set x 20 tekrar',done:false},
    {name:'Deadbug',sets:'20 tekrar (10 sağ, 10 sol)',done:false},
  ],
  sun: [
    {name:'Thoracic Extension (Rulo veya sandalye ile)',sets:'2 set x 30 saniye',done:false},
    {name:'Child’s Pose (Çocuk Pozu)',sets:'1 dakika (Pozisyonda kal ve derin nefes al)',done:false},
    {name:'Doorway Stretch',sets:'1 set x 30 saniye',done:false},
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
    },{merge:true}).catch(e=>console.error('Save:',e));
    
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

const CURRENT_PROGRAM_VERSION = 15; // Smart migration — logs/notes korunur

function enforceVersion() {
  if(appData.programVersion !== CURRENT_PROGRAM_VERSION) {
    // Akıllı program migrasyonu:
    // - workoutLogs (tüm kayıtlı ağırlıklar) DOKUNULMAZ
    // - notes (notlar) DOKUNULMAZ
    // - attendance, achievements, weightLog vs. DOKUNULMAZ
    // Sadece program yapısı güncellenir (programda kalan hareketler korunur, yeniler eklenir, kaldırılanlar çıkarılır)

    const smartMergePrograms = (existing, defaults) => {
      if (!existing) return JSON.parse(JSON.stringify(defaults));
      const merged = {};
      Object.keys(defaults).forEach(tab => {
        const existingTab = existing[tab] || [];
        merged[tab] = defaults[tab].map(defaultEx => {
          const found = existingTab.find(e => e.name === defaultEx.name);
          // Mevcut hareket varsa done durumunu koru, yoksa sıfırla
          return { ...defaultEx, done: found ? (found.done || false) : false };
        });
      });
      return merged;
    };

    appData.programs = smartMergePrograms(appData.programs, DEFAULT_PROGRAMS);

    if (!appData.posturePrograms) {
      appData.posturePrograms = JSON.parse(JSON.stringify(DEFAULT_POSTURE_PROGRAMS));
    }

    // NOT: appData.notes ve appData.workoutLogs SILINMEZ
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
         const serverData = snap.data().data;
         // NOTES PROTECTION: Eğer lokal notlar sunucudakinden fazlaysa, lokali koru
         const localNotes = appData.notes || {};
         const serverNotes = serverData.notes || {};
         const localNoteCount = Object.keys(localNotes).length;
         const serverNoteCount = Object.keys(serverNotes).length;
         
         // DIET PROTECTION: Eğer sunucuda diyet verileri yoksa, lokali koru veya varsayılanları ata
         const localDietTargets = appData.dietTargets || { kcal: 2000, protein: 150, carbs: 200, fat: 70 };
         const localDietLogs = appData.dietLogs || {};
         
         appData = serverData;
         
         if (localNoteCount > serverNoteCount) {
           // Sunucuda eksik olan notları koru (merge)
           appData.notes = { ...serverNotes, ...localNotes };
         }
          let needSave = false;
          if (!appData.dietTargets) {
            appData.dietTargets = localDietTargets;
            needSave = true;
          }
          if (!appData.dietLogs) {
            appData.dietLogs = localDietLogs;
            needSave = true;
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
  currentPage=page;
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

  if(page==='dashboard')refreshDashboard();
  else if(page==='workouts'){renderWorkout(currentWorkoutTab);renderLoggedExercises()}
  else if(page==='posture'){renderPosture(currentPostureTab)}
  else if(page==='progress')setTimeout(()=>{drawWeightChart();renderProgressTracker();renderPRTable();renderMonthlyTracker();if(typeof renderWeightLogList==='function')renderWeightLogList();},50);
  else if(page==='updates')renderUpdatesPage();
  else if(page==='notes')renderNotes();
  else if(page==='comments')renderComments();
  else if(page==='calculators'){setTimeout(init1RMCalculator,50);}
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

  if(window.innerWidth<=768){
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
}

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
  window.addEventListener('resize', () => {
    if(window.innerWidth <= 1024) {
      document.body.classList.remove('sidebar-collapsed');
    }
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
      } else if (!sidebar.classList.contains('open')) {
        const SWIPE_PAGES = ['dashboard','workouts','posture','progress','updates','notes','comments','calculators','beforeafter','achievements','profile'];
        const curIdx = SWIPE_PAGES.indexOf(currentPage);
        if (dx < -minDistance && curIdx >= 0 && curIdx < SWIPE_PAGES.length - 1) {
          navigateTo(SWIPE_PAGES[curIdx + 1], { swipeDir: 'left' });
        } else if (dx > minDistance && curIdx > 0) {
          navigateTo(SWIPE_PAGES[curIdx - 1], { swipeDir: 'right' });
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

// =============================================
// WORKOUTS
// =============================================
function renderWorkout(tab){
  currentWorkoutTab=tab;

  // Ensure programs exist before reset check
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

      // Record the date of this interaction so we can reset tomorrow
      if (!appData.workoutDoneDate) appData.workoutDoneDate = {};
      appData.workoutDoneDate[tab] = todayStr();
      
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
    const videoBtn = videoUrl
      ? `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="posture-video-btn" title="${currentLang==='tr'?'Youtube\'da İzle':'Watch on YouTube'}" onclick="event.stopPropagation()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          ${currentLang==='tr'?'İzle':'Watch'}
        </a>`
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
  const msg = currentLang==='tr' ? (type==='workout'?'Spor Programı Kaydedildi! g���':'Postür Programı Kaydedildi! g���') : 'Program Completed!';
  setTimeout(() => showToast(msg, 'success'), 400);
};

// =============================================
// LOGGED EXERCISES & MONTHLY TRACKER
// =============================================
let currentTrackerDate = new Date();

window.changeTrackerMonth = function(delta) {
  currentTrackerDate.setMonth(currentTrackerDate.getMonth() + delta);
  renderMonthlyTracker();
};

function renderMonthlyTracker() {
  const container = document.getElementById('monthlyTracker');
  if(!container) return;
  const now = currentTrackerDate;
  const y = now.getFullYear(); 
  const m = now.getMonth();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const monthName = now.toLocaleString(currentLang==='tr'?'tr-TR':'en-US', { month: 'long', year: 'numeric' });
  
  const labelEl = document.getElementById('trackerMonthLabel');
  if(labelEl) labelEl.textContent = monthName;
  
  let wHtml = `<div class="tracker-row"><div class="tracker-label">${currentLang==='tr'?'SPOR':'WORKOUT'}</div><div class="tracker-grid">`;
  let pHtml = `<div class="tracker-divider"></div><div class="tracker-row"><div class="tracker-label">${currentLang==='tr'?'POSTÜR':'POSTURE'}</div><div class="tracker-grid">`;
  
  const todayDate = new Date();
  todayDate.setHours(0,0,0,0);

  const isCurrentMonth = (y === todayDate.getFullYear() && m === todayDate.getMonth());
  const currentDay = todayDate.getDate();

  for(let d=1; d<=daysInMonth; d++) {
    const dStr = y + '-' + String(m+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    
    // Check if future
    const cellDate = new Date(y, m, d);
    const isFuture = cellDate > todayDate;
    const isToday = isCurrentMonth && d === currentDay;
    
    const comp = (appData.completedDays && appData.completedDays[dStr]) || {};
    
    // Workout logic: If explicitly completed OR if at least 1 exercise logged
    const workoutLogs = appData.workoutLogs[dStr] || [];
    const isWorkoutDone = comp.workout || workoutLogs.length > 0;
    
    let wClass = '';
    if (isWorkoutDone) wClass = 'done';
    else if (isToday) wClass = 'today';
    else if (isFuture) wClass = 'future';
    else wClass = 'missed';

    let pClass = '';
    if (comp.posture) pClass = 'done';
    else if (isToday) pClass = 'today';
    else if (isFuture) pClass = 'future';
    else pClass = 'missed';
    
    // Workout cell
    wHtml += `<div class="tracker-day ${wClass}" onclick="toggleTrackerDay('${dStr}', 'workout')" title="${dStr}"><span>${d}</span>${isWorkoutDone?'<span class="tracker-check">✓</span>':''}</div>`;
    // Posture cell
    pHtml += `<div class="tracker-day ${pClass}" onclick="toggleTrackerDay('${dStr}', 'posture')" title="${dStr}"><span>${d}</span>${comp.posture?'<span class="tracker-check">✓</span>':''}</div>`;
  }
  
  wHtml += '</div></div>';
  pHtml += '</div></div>';
  
  container.innerHTML = wHtml + pHtml;
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
  const vol = buildMuscleVolume();

  const totalSetsEl = document.getElementById('mmTotalSets');
  const totalBarEl = document.getElementById('mmTotalBar2');
  const exCountEl = document.getElementById('mmExCount');
  const summary = document.getElementById('muscleSummary');

  if (!totalSetsEl || !summary) return;

  let totalSets = 0;
  let allExercises = [];
  
  const addRealLog = (log) => {
    const s = parseInt(log.sets) || 0;
    totalSets += s;
    const existing = allExercises.find(e => e.name === log.exercise);
    if (existing) {
      existing.sets += s;
    } else {
      allExercises.push({ name: log.exercise, sets: s });
    }
  };

  if (_muscleRange === 'today') {
    (appData.workoutLogs[todayStr()] || []).forEach(addRealLog);
  } else {
    const monday = getMonday(new Date());
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(d.getDate() + i);
      (appData.workoutLogs[dateStr(d)] || []).forEach(addRealLog);
    }
  }

  totalSetsEl.innerText = totalSets;
  exCountEl.innerText = allExercises.length;

  // Add SVG Coloring logic
  document.querySelectorAll('.mm-muscle').forEach(p => p.style.fill = 'rgba(255,255,255,0.02)');
  Object.entries(vol).forEach(([m, data]) => {
    const color = getMuscleColor(data.sets);
    if (color) {
      document.querySelectorAll(`.mm-muscle[data-muscle="${m}"]`).forEach(p => {
        p.style.fill = color;
      });
    }
  });

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
  const container=document.getElementById('prTable');
  if(!container) return;
  
  const prs={};
  Object.entries(appData.workoutLogs||{}).forEach(([date,logs])=>{
    logs.forEach(l=>{
      if(!prs[l.exercise])prs[l.exercise]={maxWeight:0,bestReps:0,date:''};
      if(l.weight>prs[l.exercise].maxWeight){
        prs[l.exercise].maxWeight=l.weight;
        prs[l.exercise].bestReps=l.reps;
        prs[l.exercise].date=date;
      } else if(l.weight===prs[l.exercise].maxWeight && l.reps>prs[l.exercise].bestReps){
        prs[l.exercise].bestReps=l.reps;
        prs[l.exercise].date=date;
      }
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
    document.getElementById('weightInput').value='';drawWeightChart();updateStats();renderWeightLogList();
  });
  renderWeightLogList();
}

function renderWeightLogList(){
  let container = document.getElementById('weightLogList');
  if(!container){
    // Create list container below the chart section
    const card = document.getElementById('weightChart')?.closest('.card');
    if(!card) return;
    container = document.createElement('div');
    container.id = 'weightLogList';
    container.style.cssText = 'margin-top: 12px;';
    card.appendChild(container);
  }
  const entries = Object.entries(appData.weightLog||{}).sort((a,b)=>b[0].localeCompare(a[0]));
  if(entries.length===0){
    container.innerHTML = `<div class="logged-empty" style="padding: 12px 0;">Henüz kayıt yok.</div>`;
    return;
  }
  let html = '';
  entries.forEach(([date,val])=>{
    const d = new Date(date+'T00:00:00');
    const label = date===todayStr()?(currentLang==='tr'?'Bugün':'Today'):d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{weekday:'short',month:'short',day:'numeric'});
    html += `<div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--border-subtle);">
      <span style="font-size:0.85rem; color:var(--text-muted);">${label}</span>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-weight:700; color:var(--accent-primary);">${val} kg</span>
        <button onclick="deleteWeightEntry('${date}')" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);color:#ef4444;cursor:pointer;padding:4px 8px;border-radius:7px;font-size:0.75rem;font-weight:600;" title="Sil">×</button>
      </div>
    </div>`;
  });
  container.innerHTML = html;
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
function initNotes() {
  const saveBtn = document.getElementById('saveNoteBtn');
  const input = document.getElementById('noteInput');
  const titleInput = document.getElementById('noteTitleInput');
  const tags = document.querySelectorAll('#pageNotes .tag-btn');
  const colorBtns = document.querySelectorAll('.note-color-btn');

  if (!saveBtn || !input) return;

  // Auto-convert "-" to bullet point
  input.addEventListener('input', function() {
    if (this.value.startsWith('-')) {
      this.value = '• ' + this.value.substring(1);
    }
    this.value = this.value.replace(/\n-/g, '\n• ');
  });

  tags.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'transparent';
      });
      btn.classList.add('active');
      btn.style.borderColor = 'var(--accent-primary)';
    });
  });

  saveBtn.addEventListener('click', async () => {
    const text = input.value.trim();
    if (!text) return;
    
    const title = titleInput ? titleInput.value.trim() : '';
    const activeColorBtn = document.querySelector('.note-color-btn.active');
    const color = activeColorBtn ? activeColorBtn.dataset.color : 'default';
    
    // 4.1: Only allow valid tags: 'Daha sonra', 'Fikir', 'GYM'
    const VALID_TAGS = ['Daha sonra', 'Fikir', 'GYM'];
    const selectedTags = [];
    document.querySelectorAll('#pageNotes .tag-btn.active').forEach(b => {
      if (VALID_TAGS.includes(b.dataset.tag)) selectedTags.push(b.dataset.tag);
    });

    const noteId = editingNoteId ? editingNoteId : Date.now().toString();
    const note = {
      id: noteId,
      title,
      text,
      color,
      tags: selectedTags,
      timestamp: editingNoteId && appData.notes[noteId] ? appData.notes[noteId].timestamp : Date.now(),
      date: editingNoteId && appData.notes[noteId] ? appData.notes[noteId].date : todayStr()
    };

    if (!appData.notes) appData.notes = {};
    appData.notes[noteId] = note;
    saveData();
    
    input.value = '';
    if (titleInput) titleInput.value = '';
    document.querySelectorAll('#pageNotes .tag-btn.active').forEach(b => b.classList.remove('active'));
    colorBtns.forEach(b => {
      b.classList.remove('active');
      b.style.borderColor = 'transparent';
    });
    if(colorBtns[0]) {
      colorBtns[0].classList.add('active');
      colorBtns[0].style.borderColor = 'var(--accent-primary)';
    }
    
    editingNoteId = null;
    saveBtn.innerHTML = currentLang === 'tr' ? 'Notu Kaydet' : 'Save Note';
    
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
  
  const COLOR_STYLES = {
    'default': 'background:var(--bg-card-alt); border:1px solid var(--border-subtle);',
    'red': 'background:rgba(224,84,84,0.05); border:1px solid rgba(224,84,84,0.2);',
    'blue': 'background:rgba(92,138,222,0.05); border:1px solid rgba(92,138,222,0.2);',
    'green': 'background:rgba(78,203,141,0.05); border:1px solid rgba(78,203,141,0.2);',
    'orange': 'background:rgba(224,148,58,0.05); border:1px solid rgba(224,148,58,0.2);'
  };

  container.innerHTML = entries.map(note => {
    const d = new Date(note.timestamp);
    const dateLabel = note.date === todayStr() ? (currentLang === 'tr' ? 'Bugün' : 'Today') : d.toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const tagsHtml = (note.tags || []).map(tg => `<span style="display:inline-flex;align-items:center;gap:3px;font-size:0.65rem;padding:2px 8px;border-radius:12px;background:var(--accent-glow);color:var(--accent-primary);font-weight:600;margin-right:4px;">${TAG_SVG[tg]||''}${tg}</span>`).join('');
    
    const noteStyle = COLOR_STYLES[note.color] || COLOR_STYLES['default'];
    const titleHtml = note.title ? `<div style="font-size:1.05rem;font-weight:800;color:var(--text-primary);margin-bottom:6px;">${note.title}</div>` : '';

    return `
      <div class="note-entry" style="padding:16px;border-radius:12px;margin-bottom:12px;display:flex;gap:12px;${noteStyle}">
        <div style="padding-top:2px;">
          <input type="checkbox" class="note-checkbox" value="${note.id}" style="width:18px; height:18px; accent-color:var(--accent-primary); cursor:pointer;">
        </div>
        <div style="flex:1;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">${dateLabel}</span>
            <div style="display:flex; gap:8px;">
              <button onclick="editNote('${note.id}')" style="background:rgba(92,138,222,0.08);border:1px solid rgba(92,138,222,0.2);color:#5c8ade;cursor:pointer;padding:5px 7px;border-radius:7px;transition:all 0.2s;display:flex;align-items:center;gap:4px;font-size:0.7rem;" title="Notu Düzenle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                Düzenle
              </button>
              <button onclick="deleteNote('${note.id}')" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);color:#ef4444;cursor:pointer;padding:5px 7px;border-radius:7px;transition:all 0.2s;display:flex;align-items:center;gap:4px;font-size:0.7rem;" title="Notu Sil">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                Sil
              </button>
            </div>
          </div>
          ${titleHtml}
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

window.editNote = function(noteId) {
  const note = appData.notes[noteId];
  if (!note) return;
  
  const input = document.getElementById('noteInput');
  const titleInput = document.getElementById('noteTitleInput');
  const saveBtn = document.getElementById('saveNoteBtn');
  
  if (input) input.value = note.text || '';
  if (titleInput) titleInput.value = note.title || '';
  
  // Tags
  document.querySelectorAll('#pageNotes .tag-btn').forEach(btn => {
    if (note.tags && note.tags.includes(btn.dataset.tag)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Colors
  const colorBtns = document.querySelectorAll('.note-color-btn');
  colorBtns.forEach(btn => {
    if (btn.dataset.color === note.color) {
      btn.classList.add('active');
      btn.style.borderColor = 'var(--accent-primary)';
    } else {
      btn.classList.remove('active');
      btn.style.borderColor = 'transparent';
    }
  });
  
  editingNoteId = noteId;
  if (saveBtn) saveBtn.innerHTML = currentLang === 'tr' ? 'Notu Güncelle' : 'Update Note';
  
  // Scroll to top of notes page
  const pageNotes = document.getElementById('pageNotes');
  if (pageNotes) pageNotes.scrollTo({top: 0, behavior: 'smooth'});
  window.scrollTo({top: 0, behavior: 'smooth'});
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

  // ── Strength Progress (4th stat card) — Top Progress ──
  const volEl = document.getElementById('statVolumeVal');
  const volBar = document.getElementById('statVolumeBar');
  const volDetail = document.getElementById('statVolumeDetail');
  
  const allStats = typeof computeExerciseStats === 'function' ? computeExerciseStats() : [];
  let bestProgEx = null;
  let maxProg = 0;
  
  allStats.forEach(s => {
    const diff = s.currentWeight - s.baselineWeight;
    if (diff > maxProg) { maxProg = diff; bestProgEx = s; }
  });

  if (volEl) {
    volEl.textContent = bestProgEx ? `+${parseFloat(maxProg.toFixed(4))} kg` : '0 kg';
  }
  if (volBar) {
    volBar.style.width = bestProgEx ? '100%' : '0%';
  }
  if (volDetail) {
    if (bestProgEx) {
      // Store bestProgEx name on the card for correct click routing
      const statCard = document.querySelector('.stat-card--volume');
      if (statCard) {
        statCard.onclick = () => showStrengthDetails(bestProgEx.name);
      }
      const prDate = new Date(bestProgEx.lastUpdated + 'T00:00:00');
      const daysDiff = Math.round((new Date() - prDate) / 86400000);
      const ago = daysDiff === 0 
        ? t('today') 
        : daysDiff === 1 
          ? t('yesterday') 
          : (currentLang === 'tr' ? `${daysDiff} gün önce` : `${daysDiff} days ago`);
      const exShort = bestProgEx.name.length > 18 ? bestProgEx.name.substring(0, 17) + '…' : bestProgEx.name;
      volDetail.innerHTML = `<span style='cursor:pointer;' onmouseenter="this.style.color='var(--accent-primary)'" onmouseleave="this.style.color='var(--orange-vivid)'">${exShort} · ${ago}</span>`;
      volDetail.style.color = 'var(--orange-vivid)';
    } else {
      volDetail.textContent = t('noProgressYet');
      volDetail.style.color = 'var(--text-tertiary)';
    }
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
      const weightGainRaw = last.weight - first.weight;
      const weightGain = Math.round(weightGainRaw * 10) / 10;
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
              <div style="font-size:0.85rem; font-weight:800; color:#4ecb8d;">+${parseFloat(g.weightGain.toFixed(4))}kg</div>
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
  const current1RM = calculateStrengthScore(latest.weight, latest.reps);
  const nextWeekWeight = latest.weight + (latest.weight > 50 ? 2.5 : 1);
  const nextMonthWeight = latest.weight + (latest.weight > 50 ? 7.5 : 5);

  let predictionHtml = `
    <div style="background:linear-gradient(135deg, rgba(139,124,247,0.1), rgba(78,203,141,0.05)); border:1px solid rgba(139,124,247,0.2); border-radius:16px; padding:18px; margin-bottom:24px; position:relative; overflow:hidden;">
      <div style="position:absolute; top:-10px; right:-10px; font-size:4rem; opacity:0.05; transform:rotate(15deg);">g���</div>
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
                  ${weightDiff > 0 ? `<span style="font-size:0.7rem; font-weight:800; color:#4ecb8d; margin-left:auto;">+${parseFloat(weightDiff.toFixed(4))}kg ↑</span>` : ''}
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
      
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ağırlık (kg)',
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
                label: function(context) { return context.parsed.y + ' kg'; }
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
  updateStats();
  updateMuscleMap();
  if(typeof renderWeeklyReport==='function') renderWeeklyReport();
  setTimeout(drawDashboardChart, 50);
  renderDashboardWarnings();
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
  const isWorkoutDay = dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6;
  if (isWorkoutDay) {
    const todayKey = todayStr();
    const attendance = appData.attendance || {};
    const alreadyLogged = attendance[todayKey] === true;
    if (!alreadyLogged) {
      const dayLabels = {2:'Salı',4:'Perşembe',6:'Cumartesi'};
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
  if(currentPage==='dashboard'){if(typeof renderWeeklyReport==='function')renderWeeklyReport();setTimeout(drawDashboardChart,50);}
  else if(currentPage==='workouts'){renderWorkout(currentWorkoutTab);renderLoggedExercises()}
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
  showToast(currentLang === 'tr' ? 'Fotoğraf kaydedildi! g���' : 'Photo saved! g���', 'success');
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

      if (!stats[ex]) {
        stats[ex] = {
          name: ex,
          // Baseline (ilk kayıt)
          baselineWeight: w, baselineReps: r, baselineSets: s, baselineDate: date,
          // All-time PR
          prWeight: w, prReps: r, prSets: s, prDate: date,
          // Current (en son)
          currentWeight: w, currentReps: r, currentSets: s, lastUpdated: date,
          // Bu hafta
          weekWeight: null, weekReps: null, weekSets: null, weekDate: null,
          // Geçen hafta
          prevWeekWeight: null,
        };
      } else {
        // Update current
        stats[ex].currentWeight = w;
        stats[ex].currentReps = r;
        stats[ex].currentSets = s;
        stats[ex].lastUpdated = date;
        // PR check
        if (w > stats[ex].prWeight) {
          stats[ex].prWeight = w;
          stats[ex].prReps = r;
          stats[ex].prSets = s;
          stats[ex].prDate = date;
        }
      }
      // Bu hafta (Pazartesi'den bugüne)
      if (date >= mondayStr) {
        if (!stats[ex].weekWeight || w >= stats[ex].weekWeight) {
          stats[ex].weekWeight = w;
          stats[ex].weekReps = r;
          stats[ex].weekSets = s;
          stats[ex].weekDate = date;
        }
      }
      // Geçen hafta
      if (date >= prevMondayStr && date <= prevSundayStr) {
        if (!stats[ex].prevWeekWeight || w >= stats[ex].prevWeekWeight) {
          stats[ex].prevWeekWeight = w;
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
    if (s.weekWeight !== null && s.prevWeekWeight !== null) {
      s.weekDelta = parseFloat((s.weekWeight - s.prevWeekWeight).toFixed(1));
    } else if (s.weekWeight !== null && s.prevWeekWeight === null) {
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

function initComments() {
  const sendBtn = document.getElementById('sendCommentBtn');
  if (!sendBtn) return;
  
  sendBtn.addEventListener('click', async () => {
    const text = document.getElementById('commentInput').value.trim();
    if (!text) return;
    
    if (currentUser) {
      const isMuted = await checkUserMute(currentUser.uid);
      if (isMuted) {
        showToast('Yorum yapma yetkiniz geçici veya kalıcı olarak kısıtlanmıştır!', 'error');
        return;
      }
    }

    
    const typeRadio = document.querySelector('input[name="commentType"]:checked');
    const type = typeRadio ? typeRadio.value : 'normal';
    const isAnonymous = type === 'anonymous';
    
    const comment = {
      text,
      isAnonymous,
      userId: currentUser ? currentUser.uid : 'local',
      userName: isAnonymous ? 'Anonim' : (currentUser ? currentUser.displayName : 'Local User'),
      userEmail: isAnonymous ? null : (currentUser ? currentUser.email : null),
      userPhoto: isAnonymous ? null : (appData.profile && appData.profile.photoURL ? appData.profile.photoURL : (currentUser ? currentUser.photoURL : null)),
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

  // @mention support for main comment input
  const commentInput = document.getElementById('commentInput');
  if (commentInput) {
    // Create a mention dropdown for the main input
    let mainMentionDropdown = document.getElementById('mainMentionDropdown');
    if (!mainMentionDropdown) {
      mainMentionDropdown = document.createElement('div');
      mainMentionDropdown.id = 'mainMentionDropdown';
      mainMentionDropdown.style.cssText = 'display:none;position:absolute;left:0;right:0;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:10px;z-index:100;max-height:140px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.3);';
      commentInput.parentElement.style.position = 'relative';
      commentInput.insertAdjacentElement('afterend', mainMentionDropdown);
    }
    commentInput.addEventListener('input', function() {
      const val = commentInput.value;
      const cursor = commentInput.selectionStart;
      const before = val.substring(0, cursor);
      const match = before.match(/@([\w\u00C0-\u017E]*)$/);
      if (match) {
        const query = match[1].toLowerCase();
        const allNames = [];
        document.querySelectorAll('#commentsList .comment-item [data-commenter]').forEach(el => allNames.push(el.dataset.commenter));
        const unique = [...new Set(allNames)];
        const filtered = query ? unique.filter(n => n.toLowerCase().startsWith(query)) : unique;
        if (filtered.length > 0) {
          mainMentionDropdown.style.display = 'block';
          mainMentionDropdown.innerHTML = filtered.map(name => `
            <div onclick="_insertMainMention('${name.replace(/'/g, "\\'")}')"
              style="padding:8px 14px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:8px;"
              onmouseenter="this.style.background='rgba(139,124,247,0.12)'"
              onmouseleave="this.style.background='transparent'">
              <span style="color:var(--accent-primary);font-weight:600;">@${name}</span>
            </div>
          `).join('');
        } else {
          mainMentionDropdown.style.display = 'none';
        }
      } else {
        mainMentionDropdown.style.display = 'none';
      }
    });
    document.addEventListener('click', function(e) {
      if (!commentInput.contains(e.target) && !mainMentionDropdown.contains(e.target)) {
        mainMentionDropdown.style.display = 'none';
      }
    });
  }
}

window._insertMainMention = function(name) {
  const ta = document.getElementById('commentInput');
  const dd = document.getElementById('mainMentionDropdown');
  if (!ta) return;
  const cursor = ta.selectionStart;
  const before = ta.value.substring(0, cursor);
  const after = ta.value.substring(cursor);
  const newBefore = before.replace(/@[\w\u00C0-\u017E]*$/, `@${name} `);
  ta.value = newBefore + after;
  ta.focus();
  ta.selectionStart = ta.selectionEnd = newBefore.length;
  if (dd) dd.style.display = 'none';
};

function renderComments() {
  const list = document.getElementById('commentsList');
  if (!list) return;
  
  if (isFirebaseConfigured && db) {
    if (commentsListenerUnsub) {
      if (cachedComments) {
        displayComments(cachedComments);
      }
      return;
    }
    const q = db.collection('public_comments').orderBy('timestamp', 'desc').limit(40);
    commentsListenerUnsub = q.onSnapshot(snap => {
      const comments = [];
      snap.forEach(doc => comments.push({ id: doc.id, ...doc.data() }));
      cachedComments = comments;
      displayComments(comments);
    }, error => {
      console.error('Comments Listener Error:', error);
      const local = JSON.parse(localStorage.getItem('zyro_local_comments') || '[]');
      if (local.length > 0) {
        displayComments(local);
      } else {
        document.getElementById('commentsList').innerHTML = `<div class="logged-empty" style="color:#ef4444;">Yorumlar yüklenirken bir hata oluştu veya bağlantı kurulamıyor.</div>`;
      }
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

  // Preserve open reply forms, input text, and focus/selection
  const openForms = {};
  list.querySelectorAll('[id^="replyForm_"]').forEach(form => {
    if (form.style.display === 'block') {
      const id = form.id.replace('replyForm_', '');
      const input = document.getElementById(`replyInput_${id}`);
      openForms[id] = input ? input.value : '';
    }
  });

  const activeId = document.activeElement && document.activeElement.id && document.activeElement.id.startsWith('replyInput_')
    ? document.activeElement.id
    : null;
  const cursorStart = activeId ? document.getElementById(activeId).selectionStart : null;
  const cursorEnd = activeId ? document.getElementById(activeId).selectionEnd : null;
  
  try {
    // Separate top-level comments and replies
    const topLevel = comments.filter(c => !c.parentId);
    const replies = comments.filter(c => c.parentId);

    // Extract unique commenter names
    const knownNames = comments.map(c => c.userName).filter(Boolean);
    if (currentUser && currentUser.displayName) knownNames.push(currentUser.displayName);
    const uniqueKnownNames = [...new Set(knownNames)];

    list.innerHTML = topLevel.map((c, i) => {
      const showPhoto = !c.isAnonymous && c.userPhoto;
      
      // Upvote/Downvote logic
      const upvotes = c.upvotes || 0;
      const upvotedBy = c.upvotedBy || [];
      const hasUpvoted = currentUser && upvotedBy.includes(currentUser.uid);

      const downvotes = c.downvotes || 0;
      const downvotedBy = c.downvotedBy || [];
      const hasDownvoted = currentUser && downvotedBy.includes(currentUser.uid);

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
      
      // Rank badge for comment author
      const commentRankKey = c.rank && RANKS[c.rank] ? c.rank : ((c.userEmail === 'wupard@gmail.com') ? 'kurucu' : null);
      const commentRankInfo = commentRankKey ? RANKS[commentRankKey] : null;
      const commentRankBadge = commentRankInfo
        ? `<span style="background:${commentRankInfo.bg}; color:${commentRankInfo.color}; font-size:0.6rem; padding:2px 6px; border-radius:4px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border: 1px solid ${commentRankInfo.color}40;">${commentRankInfo.label}</span>`
        : '';
      
      const upvoteAttr = isOwnComment ? '' : `onclick="upvoteComment('${c.id}')"`;
      const upvoteClass = 'vote-btn upvote-btn' + (hasUpvoted ? ' active' : '') + (isOwnComment ? ' disabled' : '');
      
      const downvoteAttr = isOwnComment ? '' : `onclick="downvoteComment('${c.id}')"`;
      const downvoteClass = 'vote-btn downvote-btn' + (hasDownvoted ? ' active' : '') + (isOwnComment ? ' disabled' : '');

      return `
        <div class="comment-item" id="comment_${c.id}" style="padding: 16px; border-bottom: 1px solid var(--border-subtle); background: var(--bg-card-alt); border-radius: 12px; margin-bottom: 12px; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${showPhoto ? 
                `<img src="${c.userPhoto}" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--accent-primary);" referrerpolicy="no-referrer">` : 
                `<div style="width: 24px; height: 24px; border-radius: 50%; background: var(--bg-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--text-tertiary); border: 1px solid var(--border-subtle);">?</div>`
              }
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-weight: 600; font-size: 0.9rem; color: var(--accent-primary);" data-commenter="${c.userName}">${c.userName}</span>
                ${commentRankBadge}
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">${new Date(c.timestamp).toLocaleDateString()}</span>
              ${isOwnComment ? `
                <button onclick="toggleEditComment('${c.id}', \`${(c.text || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:4px;" title="Düzenle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
              ` : ''}
              ${canDelete ? `<button onclick="deletePublicComment('${c.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:4px;" title="Sil"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>` : ''}
            </div>
          </div>
          <p id="commentText_${c.id}" style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-primary); padding-left: 34px;">
            ${_highlightMentions(c.text, uniqueKnownNames)}
            ${c.edited ? `<span style="font-size:0.75rem; color:var(--text-muted); font-style:italic; margin-left:6px;">(düzenlendi)</span>` : ''}
          </p>
          <div id="editForm_${c.id}" style="display:none; margin-top:12px; padding-left:34px;">
            <textarea id="editInput_${c.id}" class="note-input" rows="2" style="margin-bottom:8px; font-size:0.85rem; width:100%;"></textarea>
            <div style="display:flex; gap:8px;">
              <button class="btn-primary" style="padding:6px 16px; font-size:0.8rem;" onclick="submitEditComment('${c.id}')">Kaydet</button>
              <button class="btn-small" onclick="toggleEditComment('${c.id}')">İptal</button>
            </div>
          </div>
          
          <div style="margin-top: 12px; display: flex; gap: 16px; padding-left: 34px;">
            <div style="display: flex; gap: 8px;">
              <button class="${upvoteClass}" ${upvoteAttr} title="Beğen">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
                <span>${upvotes}</span>
              </button>
              <button class="${downvoteClass}" ${downvoteAttr} title="Beğenme">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                <span>${downvotes}</span>
              </button>
            </div>
            <button onclick="showReplyForm('${c.id}', '${(c.userName||'').replace(/'/g,"\\'")}')"
              style="background:transparent; border:none; color:var(--text-muted); font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span>Cevapla</span>
            </button>
            ${!isOwnComment ? `
            <button onclick="openReportModal('${c.id}','${(c.userId||'').replace(/'/g,"\\'")}','${(c.userName||'').replace(/'/g,"\\'")}','${(c.text||'').substring(0,120).replace(/'/g,"\\'").replace(/\n/g,' ')}')"
              style="background:transparent; border:none; color:var(--text-muted); font-size:0.8rem; cursor:pointer; display:flex; align-items:center; gap:4px;" title="Raporla">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              <span>Raporla</span>
            </button>
            ` : ''}
          </div>

          <div id="replyForm_${c.id}" style="display:none; margin-top:12px; padding-left:34px; position:relative;">
            <textarea id="replyInput_${c.id}" class="note-input" rows="2" placeholder="@KullanıcıAdı ile başlayabilirsin..." style="margin-bottom:8px; font-size:0.85rem;" oninput="_handleMentionInput(event,'${c.id}')"></textarea>
            <div id="mentionDropdown_${c.id}" style="display:none; position:absolute; top:auto; left:0; right:0; background:#151421; border:1px solid rgba(139,124,247,0.4); border-radius:10px; z-index:1000; max-height:140px; overflow-y:auto; box-shadow:0 10px 30px rgba(0,0,0,0.7); margin-top:-8px;"></div>
            <div style="display:flex; gap:8px;">
              <button class="btn-primary" style="padding:6px 16px; font-size:0.8rem;" onclick="submitReply('${c.id}')">Gönder</button>
              <button class="btn-small" onclick="showReplyForm('${c.id}')">İptal</button>
            </div>
          </div>

          ${commentReplies.length > 0 ? `
            <div class="comment-replies" style="margin-top:12px; margin-left:11px; padding-left:23px; border-left: 2.5px solid rgba(139,124,247,0.4);">
              ${commentReplies.map(r => {
                const isOwnReply = currentUser && r.userId === currentUser.uid;
                const canDeleteReply = isOwnReply || isAdminUser;
                const replyRankKey = r.rank && RANKS[r.rank] ? r.rank : ((r.userEmail === 'wupard@gmail.com') ? 'kurucu' : null);
                const replyRankInfo = replyRankKey ? RANKS[replyRankKey] : null;
                const replyRankBadge = replyRankInfo
                  ? `<span style="background:${replyRankInfo.bg}; color:${replyRankInfo.color}; font-size:0.55rem; padding:2px 5px; border-radius:4px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border: 1px solid ${replyRankInfo.color}40;">${replyRankInfo.label}</span>`
                  : '';
                return `
                <div id="comment_${r.id}" style="margin-top:12px; padding:10px; background:rgba(255,255,255,0.02); border-radius:8px; position:relative;">
                  <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                      ${r.userPhoto ? `<img src="${r.userPhoto}" style="width:18px; height:18px; border-radius:50%;" referrerpolicy="no-referrer">` : `<div style="width:18px; height:18px; border-radius:50%; background:var(--bg-primary); display:flex; align-items:center; justify-content:center; font-size:0.6rem;">?</div>`}
                      <span style="font-weight:600; font-size:0.8rem; color:var(--accent-primary);">${r.userName}</span>
                      ${replyRankBadge}
                    </div>
                    <div style="display:flex; align-items:center; gap:6px;">
                      <span style="font-size:0.65rem; color:var(--text-muted);">${new Date(r.timestamp).toLocaleDateString()}</span>
                      ${isOwnReply ? `
                        <button onclick="toggleEditComment('${r.id}', \`${(r.text || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:2px;" title="Düzenle">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                      ` : ''}
                      ${canDeleteReply ? `<button onclick="deletePublicComment('${r.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; padding:2px;" title="Sil"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>` : ''}
                    </div>
                  </div>
                  <p id="commentText_${r.id}" style="margin:0; font-size:0.85rem; color:var(--text-primary);">
                    ${_highlightMentions(r.text, uniqueKnownNames)}
                    ${r.edited ? `<span style="font-size:0.7rem; color:var(--text-muted); font-style:italic; margin-left:6px;">(düzenlendi)</span>` : ''}
                  </p>
                  <div id="editForm_${r.id}" style="display:none; margin-top:8px;">
                    <textarea id="editInput_${r.id}" class="note-input" rows="2" style="margin-bottom:6px; font-size:0.8rem; width:100%;"></textarea>
                    <div style="display:flex; gap:6px;">
                      <button class="btn-primary" style="padding:4px 12px; font-size:0.75rem;" onclick="submitEditComment('${r.id}')">Kaydet</button>
                      <button class="btn-small" style="padding:4px 10px; font-size:0.75rem;" onclick="toggleEditComment('${r.id}')">İptal</button>
                    </div>
                  </div>
                </div>
              `}).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Restore open reply forms, input text, and focus/selection
    Object.keys(openForms).forEach(id => {
      const form = document.getElementById(`replyForm_${id}`);
      const input = document.getElementById(`replyInput_${id}`);
      if (form) form.style.display = 'block';
      if (input) input.value = openForms[id];
    });

    if (activeId) {
      const activeEl = document.getElementById(activeId);
      if (activeEl) {
        activeEl.focus();
        if (cursorStart !== null && cursorEnd !== null) {
          activeEl.setSelectionRange(cursorStart, cursorEnd);
        }
      }
    }

    // Highlight and scroll to target comment from notification click
    if (window.pendingCommentHighlightId) {
      const targetId = window.pendingCommentHighlightId;
      setTimeout(() => {
        const el = document.getElementById(`comment_${targetId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('comment-highlight');
          setTimeout(() => el.classList.remove('comment-highlight'), 3000);
          
          // Also highlight the parent comment if it exists
          const parentComment = el.closest('.comment-item');
          if (parentComment && parentComment !== el) {
            parentComment.classList.add('parent-comment-highlight');
            setTimeout(() => parentComment.classList.remove('parent-comment-highlight'), 3000);
          }
          
          window.pendingCommentHighlightId = null; // clear after scroll
        }
      }, 600); // 600ms ensures page transition is fully completed
    }

  } catch (e) {
    console.error('Error rendering comments:', e);
    list.innerHTML = `<div class="logged-empty" style="color:#ef4444;">Yorumları oluştururken bir hata oluştu: ${e.message}</div>`;
  }
}

// Highlight @mentions in text (supports space-containing names and matches fallback name patterns)
function _highlightMentions(text, knownNames = []) {
  if (!text) return '';
  // Escape HTML first
  const safe = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  
  const sortedNames = [...knownNames].filter(Boolean).sort((a, b) => b.length - a.length);
  const namePattern = sortedNames.map(name => name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  
  const regexPattern = namePattern 
    ? '@(' + namePattern + '|[\\w\\u00C0-\\u017E]+)'
    : '@([\\w\\u00C0-\\u017E]+)';
  
  const regex = new RegExp(regexPattern, 'gi');
  return safe.replace(regex, '<span style="color:#a855f7; background:rgba(168,85,247,0.08); border:1px solid rgba(168,85,247,0.18); padding:1px 6px; border-radius:6px; font-weight:700; display:inline-block; font-size:0.92em; margin:0 2px; vertical-align:middle; transition: all 0.2s;">$&</span>');
}

// Collect recent commenters for mention suggestions
function _getRecentCommenters() {
  const list = document.getElementById('commentsList');
  if (!list) return [];
  const names = new Set();
  list.querySelectorAll('[data-commenter]').forEach(el => names.add(el.dataset.commenter));
  return Array.from(names).slice(0, 8);
}

// Handle @ input in reply textarea
window._handleMentionInput = function(evt, commentId) {
  const ta = evt.target;
  const val = ta.value;
  const dropdown = document.getElementById(`mentionDropdown_${commentId}`);
  if (!dropdown) return;
  
  // Find @ trigger
  const cursor = ta.selectionStart;
  const before = val.substring(0, cursor);
  const match = before.match(/@([\w\u00C0-\u017E]*)$/);
  
  if (match) {
    const query = match[1].toLowerCase();
    // Get all commenter names from DOM
    const allNames = [];
    document.querySelectorAll('#commentsList .comment-item').forEach(item => {
      const nameEl = item.querySelector('[data-commenter]');
      if (nameEl) allNames.push(nameEl.dataset.commenter);
    });
    const unique = [...new Set(allNames)];
    const filtered = query ? unique.filter(n => n.toLowerCase().startsWith(query)) : unique;
    
    if (filtered.length > 0) {
      dropdown.style.display = 'block';
      dropdown.innerHTML = filtered.map(name => `
        <div onclick="_insertMention('${commentId}','${name.replace(/'/g, "\\'")}')"
          style="padding:8px 14px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:8px;"
          onmouseenter="this.style.background='rgba(139,124,247,0.12)'"
          onmouseleave="this.style.background='transparent'">
          <span style="color:var(--accent-primary);font-weight:600;">@${name}</span>
        </div>
      `).join('');
    } else {
      dropdown.style.display = 'none';
    }
  } else {
    dropdown.style.display = 'none';
  }
};

window._insertMention = function(commentId, name) {
  const ta = document.getElementById(`replyInput_${commentId}`);
  const dropdown = document.getElementById(`mentionDropdown_${commentId}`);
  if (!ta) return;
  const cursor = ta.selectionStart;
  const val = ta.value;
  const before = val.substring(0, cursor);
  const after = val.substring(cursor);
  // Replace the @partial with @fullname
  const newBefore = before.replace(/@[\w\u00C0-\u017E]*$/, `@${name} `);
  ta.value = newBefore + after;
  ta.focus();
  ta.selectionStart = ta.selectionEnd = newBefore.length;
  if (dropdown) dropdown.style.display = 'none';
};

window.showReplyForm = function(commentId, authorName) {
  const form = document.getElementById(`replyForm_${commentId}`);
  if (!form) return;
  const isHidden = form.style.display === 'none' || form.style.display === '';
  form.style.display = isHidden ? 'block' : 'none';
  if (isHidden && authorName) {
    const ta = document.getElementById(`replyInput_${commentId}`);
    if (ta && !ta.value) {
      ta.value = `@${authorName} `;
      ta.focus();
      ta.selectionStart = ta.selectionEnd = ta.value.length;
    } else if (ta) {
      ta.focus();
    }
  }
};

window.submitReply = async function(parentId) {
  const input = document.getElementById(`replyInput_${parentId}`);
  const text = input.value.trim();
  if (!text) return;

  if (!currentUser) {
    showToast('Cevap yazmak için giriş yapmalısın!', 'error');
    return;
  }

  const isMuted = await checkUserMute(currentUser.uid);
  if (isMuted) {
    showToast('Yorum yapma yetkiniz geçici veya kalıcı olarak kısıtlanmıştır!', 'error');
    return;
  }

  const reply = {
    text,
    parentId,
    userId: currentUser.uid,
    userName: currentUser.displayName || 'User',
    userEmail: currentUser.email,
    userPhoto: (appData.profile && appData.profile.photoURL) ? appData.profile.photoURL : (currentUser.photoURL || null),
    timestamp: Date.now(),
    date: todayStr(),
    upvotes: 0,
    upvotedBy: [],
    rank: commentAuthorRankKey()
  };

  if (isFirebaseConfigured && db) {
    try {
      const replyRef = await db.collection('public_comments').add(reply);
      
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
            targetCommentId: replyRef.id,
            timestamp: Date.now(),
            createdAt: new Date(),
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
    _applyVoteOptimistic(commentId, alreadyUpvoted ? 'remove-up' : 'add-up', alreadyDownvoted);

    await docRef.update(updateData);
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
    _applyVoteOptimistic(commentId, alreadyDownvoted ? 'remove-down' : 'add-down', alreadyUpvoted);

    await docRef.update(updateData);
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
      const displayName = profile.displayName || data.userName || top.userName || top.displayName || '';
      const photoURL = profile.photoURL || top.photoURL || '';

      const logs = data.workoutLogs || {};
      const hasRecentLog = Object.keys(logs).some(dateKey => {
        const d = new Date(dateKey);
        return d.getTime() >= sevenDaysAgo;
      });
      if (hasRecentLog) activeCount++;
      recentActivity.push({
        name: displayName || doc.id.slice(0, 8) + '...',
        photoURL: photoURL,
        logs: Object.keys(logs).length,
        uid: doc.id
      });
    });
    const aCount = document.getElementById('adminActiveUsers');
    if (aCount) aCount.textContent = activeCount;

    // Render recent activity
    const actEl = document.getElementById('adminRecentActivity');
    if (actEl) {
      const topUsers = recentActivity.sort((a, b) => b.logs - a.logs).slice(0, 5);
      if (topUsers.length === 0) {
        actEl.textContent = 'Henüz aktivite yok.';
      } else {
        actEl.innerHTML = topUsers.map((u, i) => {
          const avatarHtml = u.photoURL 
            ? `<img src="${u.photoURL}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(255,255,255,0.1);flex-shrink:0;" referrerpolicy="no-referrer">` 
            : `<div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.05);border:1.5px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:0.75rem;flex-shrink:0;">👤</div>`;
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;align-items:center;gap:10px;min-width:0;">
                <div style="width:28px;height:28px;border-radius:8px;background:rgba(139,124,247,0.15);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:800;color:#8b7cf7;flex-shrink:0;">${i+1}</div>
                ${avatarHtml}
                <span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${u.name}">${u.name}</span>
              </div>
              <span style="font-size:0.75rem;color:var(--text-muted);flex-shrink:0;margin-left:10px;">${u.logs} gün kayıt</span>
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
    'legs': currentLang === 'tr' ? 'Bacak' : 'Legs',
    'biceps': 'Biceps',
    'triceps': 'Triceps',
    'wrists': currentLang === 'tr' ? 'Bilek' : 'Wrists',
    'core': 'Core',
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
    const diff = parseFloat((ex.currentWeight - ex.baselineWeight).toFixed(1));
    const diffNode = diff !== 0 
      ? `<span style="font-size: 0.75rem; font-weight: bold; color: ${diff > 0 ? '#34d399' : '#f87171'}">${diff > 0 ? '+' : ''}${diff}kg</span>`
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
            <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted);">${ex.currentWeight}kg × ${ex.currentReps} ${currentLang === 'en' ? 'rep' : 'tekrar'} × ${ex.currentSets||1} set</p>
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
    
    // PR section
    const prHtml = `
      <div style="background:linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.02)); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 16px; padding: 18px 20px; margin-bottom: 12px; box-shadow: 0 8px 32px rgba(255, 215, 0, 0.05); backdrop-filter: blur(8px);">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <div style="background: rgba(255, 215, 0, 0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);">🏆</div>
          <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#FFD700;text-shadow: 0 0 8px rgba(255,215,0,0.4);">${currentLang === 'tr' ? 'En Yüksek Kaldırış (All-Time PR)' : 'Highest Lift (All-Time PR)'}</span>
        </div>
        <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;">
          <span style="font-size:1.8rem;font-weight:900;color:#FFD700;letter-spacing:-0.02em;">${selectedEx.prWeight} kg</span>
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
            <span style="font-size:1.6rem;font-weight:900;color:#34d399;letter-spacing:-0.02em;">${selectedEx.currentWeight} kg</span>
            <span style="font-size:0.9rem;color:rgba(255,255,255,0.7);font-weight:500;">${selectedEx.currentReps} ${currentLang === 'en' ? 'reps' : 'tekrar'} × ${selectedEx.currentSets||1} set</span>
          </div>
          <div style="margin-top:8px;font-size:0.8rem;color:rgba(255,255,255,0.6);font-weight:500;line-height:1.4;">
            ${currentLang === 'tr' 
              ? `Geçen antrenman <strong style="color:#34d399;">${dayName}</strong> günü yapıldı. <br>
                 ${dayName} günü <strong>${selectedEx.currentWeight} kg</strong> ile <strong>${selectedEx.currentReps}</strong> tekrar <strong>${selectedEx.currentSets||1}</strong> set atıldı.`
              : `Last workout was done on <strong style="color:#34d399;">${dayName}</strong>. <br>
                 Performed <strong>${selectedEx.currentWeight} kg</strong> with <strong>${selectedEx.currentReps}</strong> reps for <strong>${selectedEx.currentSets||1}</strong> sets.`}
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
      const pct = selectedEx.prevWeekWeight ? Math.abs(Math.round((selectedEx.weekDelta / selectedEx.prevWeekWeight) * 100)) : 0;
      const barW = Math.min(100, pct * 2);
      progressHtml = `
        <div style="background:linear-gradient(135deg, rgba(139, 124, 247, 0.08), rgba(139, 124, 247, 0.02)); border: 1px solid rgba(139, 124, 247, 0.25); border-radius: 16px; padding: 18px 20px; box-shadow: 0 8px 32px rgba(139, 124, 247, 0.05); backdrop-filter: blur(8px);">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
            <div style="background: rgba(139, 124, 247, 0.2); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 10px rgba(139, 124, 247, 0.3);">📈</div>
            <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent-primary);text-shadow: 0 0 8px rgba(139,124,247,0.3);">${t('weeklyGrowth')}</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:1.6rem;font-weight:900;color:${isUp?'#34d399':isDown?'#f87171':'var(--text-muted)'};letter-spacing:-0.02em;">${isUp?'+':''}${selectedEx.weekDelta} kg</span>
            ${pct > 0 ? `<span style="font-size:0.85rem;color:${isUp?'#34d399':isDown?'#f87171':'var(--text-muted)'};font-weight:700;padding:2px 8px;background:${isUp?'rgba(52,211,153,0.15)':isDown?'rgba(248,113,113,0.15)':'rgba(255,255,255,0.1)'};border-radius:12px;">${isUp?'+':''}${isDown?'-':''}${pct}%</span>` : ''}
          </div>
          <div style="margin-top:14px;background:rgba(255,255,255,0.05);border-radius:99px;height:8px;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2);">
            <div style="height:100%;width:${barW}%;background:linear-gradient(90deg, ${isUp?'#10b981, #34d399':isDown?'#ef4444, #f87171':'var(--accent-primary)'});border-radius:99px;transition:width 0.8s cubic-bezier(0.4, 0, 0.2, 1);box-shadow: 0 0 10px ${isUp?'rgba(52,211,153,0.5)':isDown?'rgba(248,113,113,0.5)':'rgba(139,124,247,0.5)'};"></div>
          </div>
          <div style="margin-top:10px;font-size:0.75rem;color:rgba(255,255,255,0.5);font-weight:500;">${currentLang === 'tr' ? 'Bu hafta vs geçen hafta' : 'This week vs last week'} (${selectedEx.prevWeekWeight || '—'} kg)</div>
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

  const history = adminNotificationHistory.length > 0 ? adminNotificationHistory.slice(0, 8) : activeNotifications.slice(0, 5);
  if (history.length === 0) {
    historyEl.innerHTML = '<div style="font-size:0.7rem; color:var(--text-tertiary); text-align:center; padding:12px;">Geçmiş bulunamadı</div>';
    return;
  }

  historyEl.innerHTML = history.map(h => {
    const icon = h.icon || '\uD83D\uDCE2';
    const date = new Date(h.timestamp).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const targetLabel = __formatAdminHistoryTarget(h);
    const canDelete = h.targetScope === 'broadcast' || h.scope === 'broadcast';

    return `
      <div class="admin-history-item">
        <div style="display:flex; align-items:flex-start; gap:8px; flex:1; min-width:0;">
          <span class="admin-history-icon">${icon}</span>
          <div style="min-width:0;">
            <div style="font-size:0.7rem; font-weight:600; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${h.title}</div>
            <div style="font-size:0.65rem; color:var(--text-secondary); margin-top:2px;">${targetLabel}</div>
            <div style="font-size:0.65rem; color:var(--text-tertiary);">${date}</div>
          </div>
        </div>
        ${canDelete ? `
          <button onclick="deleteNotification('${h.targetId || h.id}', 'broadcast')" style="background:none; border:none; color:var(--text-muted); cursor:pointer; padding:4px; flex-shrink:0;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        ` : ''}
      </div>
    `;
  }).join('');
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
    overlay.innerHTML = '<div class="maintenance-card"><div class="maintenance-icon">\uD83D\uDD27</div><h2 class="maintenance-title">Bakim Modu</h2><div id="maintenanceOverlayMsg" class="maintenance-msg"></div><div id="maintenanceOverlayUntil" class="maintenance-until"></div></div>';
    document.body.appendChild(overlay);
  }
  if (state.enabled) {
    const isAdm = currentUser && (currentUser.email === 'wupard@gmail.com' || appData.firestoreAdmin === true);
    if (!isAdm) {
      document.getElementById('maintenanceOverlayMsg').textContent = state.message || 'Kısa süreli bakım yapılıyor.';
      const until = state.expiresAt ? new Date(state.expiresAt).toLocaleString() : '\u2014';
      document.getElementById('maintenanceOverlayUntil').textContent = 'Tahmini bitis: ' + until;
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
    applyMaintenanceState();
    updateMaintenanceStatusText();
    return;
  }
  db.collection('app_state').doc('maintenance').onSnapshot(function(snap) {
    const remote = snap.exists ? (snap.data() || { enabled: false }) : { enabled: false };
    const normalized = remote.expiresAt && Date.now() > remote.expiresAt ? { enabled: false } : remote;
    if (normalized.enabled) localStorage.setItem('zyro_maintenance', JSON.stringify(normalized));
    else localStorage.removeItem('zyro_maintenance');
    applyMaintenanceState(normalized);
    updateMaintenanceStatusText(normalized);
  }, function(err) {
    console.error('Maintenance sync failed:', err);
    applyMaintenanceState();
    updateMaintenanceStatusText();
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
if ('serviceWorker' in navigator) {
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
  const monday = getMonday(new Date());
  const prevMonday = new Date(monday);
  prevMonday.setDate(prevMonday.getDate() - 7);

  let thisWorkouts = 0, thisVolume = 0, prevWorkouts = 0, prevVolume = 0;
  const muscleSets = {};
  let bestPR = 0;

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    const ds = dateStr(d);
    if (appData.attendance[ds]) thisWorkouts++;
    (appData.workoutLogs[ds] || []).forEach(l => {
      thisVolume += (l.weight||0)*(l.reps||0)*(l.sets||1);
      if ((l.weight||0) > bestPR) bestPR = l.weight;
      const ex = (l.exercise||'').toLowerCase();
      let m = currentLang === 'tr' ? 'Diğer' : 'Other';
      if (ex.includes('bench')||ex.includes('chest')||ex.includes('fly')||ex.includes('pec')) m=currentLang==='tr'?'Göğüs':'Chest';
      else if (ex.includes('pull')||ex.includes('row')||ex.includes('lat')||ex.includes('back')) m=currentLang==='tr'?'Sırt':'Back';
      else if (ex.includes('press')||ex.includes('lateral')||ex.includes('shoulder')||ex.includes('overhead')) m=currentLang==='tr'?'Omuz':'Shoulders';
      else if (ex.includes('squat')||ex.includes('leg')||ex.includes('lunge')||ex.includes('deadlift')) m=currentLang==='tr'?'Bacak':'Legs';
      else if (ex.includes('curl')||ex.includes('bicep')) m='Biceps';
      else if (ex.includes('tricep')||ex.includes('pushdown')||ex.includes('kickback')) m='Triceps';
      muscleSets[m] = (muscleSets[m]||0) + (l.sets||1);
    });
  }
  for (let i = 0; i < 7; i++) {
    const d = new Date(prevMonday); d.setDate(d.getDate() + i);
    const ds = dateStr(d);
    if (appData.attendance[ds]) prevWorkouts++;
    (appData.workoutLogs[ds] || []).forEach(l => { prevVolume += (l.weight||0)*(l.reps||0)*(l.sets||1); });
  }

  const topMuscle = Object.entries(muscleSets).sort((a,b)=>b[1]-a[1])[0];
  const allStats = typeof computeExerciseStats === 'function' ? computeExerciseStats() : [];
  const bestCurrentWeight = allStats.length > 0 ? Math.max(...allStats.map(s => s.currentWeight)) : 0;
  
  const el = id => document.getElementById(id);
  
  // Weekly Best PR / Top Muscle Logic
  let bestPREx = null;
  let bestPRWeight = 0;
  let bestPRReps = 0;
  let bestPRSets = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    (appData.workoutLogs[dateStr(d)] || []).forEach(l => {
      if ((l.weight||0) > bestPRWeight) {
        bestPRWeight = l.weight;
        bestPREx = l.exercise;
        bestPRReps = l.reps;
        bestPRSets = l.sets;
      }
    });
  }

  if (el('wrWorkouts')) el('wrWorkouts').innerHTML = `${thisWorkouts} <span style="font-size:0.8rem;color:var(--text-tertiary);font-weight:600;">/ 3</span>`;
  if (el('wrVolume')) el('wrVolume').textContent = Math.round(thisVolume).toLocaleString(currentLang === 'tr' ? 'tr-TR' : 'en-US');
  
  if (el('wrTopMuscle')) {
    el('wrTopMuscle').textContent = topMuscle ? topMuscle[0] : '—';
    const topMuscleBox = el('wrTopMuscle').parentElement;
    if(topMuscleBox) {
      if(topMuscle) {
        topMuscleBox.style.cursor = 'pointer';
        topMuscleBox.onclick = () => {
          let sets = topMuscle[1];
          let exCount = 0;
          for (let i = 0; i < 7; i++) {
            const d = new Date(monday); d.setDate(d.getDate() + i);
            const logs = appData.workoutLogs[dateStr(d)] || [];
            const uniqueEx = new Set();
            logs.forEach(l => {
              const ex = (l.exercise||'').toLowerCase();
              let m = currentLang === 'tr' ? 'Diğer' : 'Other';
              if (ex.includes('bench')||ex.includes('chest')||ex.includes('fly')||ex.includes('pec')) m=currentLang==='tr'?'Göğüs':'Chest';
              else if (ex.includes('pull')||ex.includes('row')||ex.includes('lat')||ex.includes('back')) m=currentLang==='tr'?'Sırt':'Back';
              else if (ex.includes('press')||ex.includes('lateral')||ex.includes('shoulder')||ex.includes('overhead')) m=currentLang==='tr'?'Omuz':'Shoulders';
              else if (ex.includes('squat')||ex.includes('leg')||ex.includes('lunge')||ex.includes('deadlift')) m=currentLang==='tr'?'Bacak':'Legs';
              else if (ex.includes('curl')||ex.includes('bicep')) m='Biceps';
              else if (ex.includes('tricep')||ex.includes('pushdown')||ex.includes('kickback')) m='Triceps';
              if(m === topMuscle[0]) uniqueEx.add(l.exercise);
            });
            exCount += uniqueEx.size;
          }
          showWeeklyMusclePopup(topMuscle[0], exCount, sets);
        };
      } else {
        topMuscleBox.onclick = null;
        topMuscleBox.style.cursor = 'default';
      }
    }
  }

  if (el('wrBestPR')) {
    const bestPRBox = el('wrBestPR').parentElement;
    if (bestPRWeight > 0) {
      el('wrBestPR').textContent = `${bestPRWeight} kg`;
      if (bestPRBox) {
        bestPRBox.style.cursor = 'pointer';
        bestPRBox.onclick = () => {
          showWeeklyPRPopup(bestPREx, bestPRWeight, bestPRSets||1, bestPRReps);
        };
      }
    } else {
      el('wrBestPR').textContent = '— kg';
      if (bestPRBox) {
        bestPRBox.onclick = null;
        bestPRBox.style.cursor = 'default';
      }
    }
  }
  const wdiff = thisWorkouts - prevWorkouts;
  const vdiff = Math.round(thisVolume - prevVolume);
  if (el('wrWorkoutsChange')) {
    if (thisWorkouts === 0) {
      el('wrWorkoutsChange').textContent = currentLang === 'tr' ? 'Henüz antrenman yok' : 'No workouts yet';
      el('wrWorkoutsChange').className = 'wr-stat-change wr-change-same';
    } else if (thisWorkouts >= 3) {
      el('wrWorkoutsChange').textContent = currentLang === 'tr' ? '✨ Hedef Tamamlandı' : '✨ Goal Achieved';
      el('wrWorkoutsChange').className = 'wr-stat-change wr-change-up';
    } else {
      el('wrWorkoutsChange').textContent = wdiff===0 
        ? (currentLang === 'tr' ? '= Geçen hafta gibi' : '= Same as last week') 
        : (wdiff>0
            ? (currentLang === 'tr' ? `↑ ${wdiff} gün fazla` : `↑ ${wdiff} days more`)
            : (currentLang === 'tr' ? `↓ ${Math.abs(wdiff)} gün az` : `↓ ${Math.abs(wdiff)} days less`));
      el('wrWorkoutsChange').className = 'wr-stat-change '+(wdiff>0?'wr-change-up':wdiff<0?'wr-change-down':'wr-change-same');
    }
  }
  if (el('wrVolumeChange')) {
    if (thisWorkouts === 0) {
      el('wrVolumeChange').textContent = '';
      el('wrVolumeChange').className = 'wr-stat-change';
    } else {
      el('wrVolumeChange').textContent = vdiff===0
        ? (currentLang === 'tr' ? '= Geçen hafta gibi' : '= Same as last week')
        : (vdiff>0
            ? (currentLang === 'tr' ? `↑ ${vdiff.toLocaleString('tr-TR')} kg fazla` : `↑ ${vdiff.toLocaleString('en-US')} kg more`)
            : (currentLang === 'tr' ? `↓ ${Math.abs(vdiff).toLocaleString('tr-TR')} kg az` : `↓ ${Math.abs(vdiff).toLocaleString('en-US')} kg less`));
      el('wrVolumeChange').className = 'wr-stat-change '+(vdiff>0?'wr-change-up':vdiff<0?'wr-change-down':'wr-change-same');
    }
  }
}

// =============================================
// LEVEL / XP SYSTEM
// =============================================
function calculateXP() {
  // Admin override: if a forced XP has been set for this user, use it directly
  if (appData && typeof appData.forcedXP === 'number') {
    return appData.forcedXP;
  }

  let xp = 0;
  // 1. Achievements (200 XP each)
  xp += Object.keys(appData.achievements || {}).length * 200;
  
  // 2. Workouts (50 XP per day)
  xp += Object.keys(appData.attendance || {}).length * 50;

  // 3. Sets and PRs
  const maxWeights = {};
  Object.keys(appData.workoutLogs || {}).sort().forEach(date => {
    const logs = appData.workoutLogs[date] || [];
    logs.forEach(l => {
      // 10 XP per set
      xp += (l.sets || 1) * 10;
      
      // 50 XP PR Bonus
      const ex = l.exercise;
      const w = parseFloat(l.weight) || 0;
      if (ex && w > 0) {
        if (!maxWeights[ex] || w > maxWeights[ex]) {
          maxWeights[ex] = w;
          xp += 50;
        }
      }
    });
  });
  // 4. Body weight log entries (25 XP each)
  xp += Object.keys(appData.weightLog || {}).length * 25;
  return xp;
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

  // Dynamic Badge Emoji Selection
  if (el('profileLevelBadgeContainer')) {
    let badgeEmoji, badgeGlow;
    if (level <= 5)       { badgeEmoji = '🥉'; badgeGlow = 'rgba(205,127,50,0.4)'; }
    else if (level <= 10) { badgeEmoji = '🥈'; badgeGlow = 'rgba(192,192,192,0.4)'; }
    else if (level <= 25) { badgeEmoji = '🥇'; badgeGlow = 'rgba(255,215,0,0.45)'; }
    else if (level <= 50) { badgeEmoji = '💎'; badgeGlow = 'rgba(79,195,247,0.45)'; }
    else                  { badgeEmoji = '👑'; badgeGlow = 'rgba(180,100,255,0.5)'; }

    const container = el('profileLevelBadgeContainer');
    container.style.background = `radial-gradient(circle at 50% 40%, ${badgeGlow} 0%, transparent 70%)`;
    container.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px ${badgeGlow}`;
    container.innerHTML = `<span style="font-size: 2.2rem; line-height: 1; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; filter: drop-shadow(0 2px 8px ${badgeGlow});">${badgeEmoji}</span>`;
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
// LEADERBOARD & PUBLIC PROFILE
// =============================================
let currentLeaderboardFilter = 'level';
window.setLeaderboardFilter = function(filter) {
  currentLeaderboardFilter = filter;
  document.getElementById('lbFilterLevel').classList.toggle('active', filter === 'level');
  document.getElementById('lbFilterPR').classList.toggle('active', filter === 'pr');
  renderLeaderboard();
};

let leaderboardDataCache = null;
let leaderboardLastFetch = 0;

window.renderLeaderboard = async function(forceRefresh = false) {
  const list = document.getElementById('leaderboardList');
  if (!list) return;
  
  if (!isFirebaseConfigured || !db) {
    list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);">Liderlik tablosu internet bağlantısı gerektirir.</div>';
    return;
  }
  
  if (!leaderboardDataCache || forceRefresh || Date.now() - leaderboardLastFetch > 60000) {
    list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);"><div class="loader-mini" style="margin:0 auto 12px;"></div>Yükleniyor...</div>';
    try {
      const snap = await db.collection('public_stats').get();
      leaderboardDataCache = [];
      snap.forEach(doc => { leaderboardDataCache.push(doc.data()); });
      leaderboardLastFetch = Date.now();
    } catch (err) {
      console.error('Leaderboard error:', err);
      list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--red-vivid);">Liderlik tablosu yüklenemedi.</div>';
      return;
    }
  }
  
  let users = [...(leaderboardDataCache || [])];
  
  if (currentLeaderboardFilter === 'level') {
    users.sort((a, b) => (b.xp || 0) - (a.xp || 0));
  } else if (currentLeaderboardFilter === 'pr') {
    users.sort((a, b) => (b.bestPR || 0) - (a.bestPR || 0));
  }
  
  users = users.slice(0, 50);
  
  if (users.length === 0) {
    list.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);">Henüz kimse yok. İlk sen ol!</div>';
    return;
  }
  
  list.innerHTML = users.map((u, index) => {
    const isMe = currentUser && u.uid === currentUser.uid;
    const prExercise = (currentLeaderboardFilter === 'pr' && u.bestPRExercise) 
      ? `<div style="font-size:0.65rem; color:var(--text-muted); margin-top:2px; max-width:160px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${u.bestPRExercise}">💪 ${u.bestPRExercise}</div>` 
      : '';
    const valStr = currentLeaderboardFilter === 'level' 
      ? `<span style="color:var(--accent-primary); font-weight:800;">Lv.${u.level || 1}</span> <span style="opacity:0.4; margin:0 4px;">•</span> ${(u.xp||0).toLocaleString('tr-TR')} XP` 
      : `<span style="color:var(--accent-primary); font-weight:800;">${u.bestPR || 0}</span> <span style="font-size:0.75rem; opacity:0.7;">kg PR</span>`;
    
    let rankBadge = '';
    let cardStyle = '';
    
    if (index === 0) {
      rankBadge = `<div class="lb-rank lb-rank-1">👑</div>`;
      cardStyle = 'lb-card-1';
    } else if (index === 1) {
      rankBadge = `<div class="lb-rank lb-rank-2">2</div>`;
      cardStyle = 'lb-card-2';
    } else if (index === 2) {
      rankBadge = `<div class="lb-rank lb-rank-3">3</div>`;
      cardStyle = 'lb-card-3';
    } else {
      rankBadge = `<div class="lb-rank lb-rank-other">#${index+1}</div>`;
    }
    
    if (isMe) cardStyle += ' lb-card-me';
    
    const avatarHtml = u.photoURL 
      ? `<img src="${u.photoURL}" class="lb-avatar">` 
      : `<div class="lb-avatar lb-avatar-placeholder">👤</div>`;

    const clickHandler = currentLeaderboardFilter === 'pr' && u.bestPR > 0
      ? `onclick="showPRDetailPopup(${JSON.stringify(u).replace(/"/g, '&quot;')})"`
      : '';
      
      return `
      <div class="lb-card ${cardStyle}" ${clickHandler}>
        <div class="lb-rank-wrap">${rankBadge}</div>
        ${avatarHtml}
        <div class="lb-info">
          <div class="lb-name">${u.displayName || 'İsimsiz'}${isMe ? ' <span class="lb-me-badge">(Sen)</span>' : ''}</div>
           <div class="lb-val">${valStr}</div>
           ${prExercise}
        </div>
        ${currentLeaderboardFilter === 'pr' && u.bestPR > 0 ? '<div class="lb-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg></div>' : ''}
      </div>
    `;
  }).join('');
};

// =============================================
// PR DETAIL POPUP
// =============================================
window.showPRDetailPopup = function(userData) {
  // Remove any existing popup
  const existing = document.getElementById('prDetailPopup');
  if (existing) existing.remove();

  const u = typeof userData === 'string' ? JSON.parse(userData) : userData;
  const name = u.displayName || 'İsimsiz';
  const exercise = u.bestPRExercise || 'Bilinmeyen Hareket';
  const weight = u.bestPR || 0;
  const sets = u.bestPRSets || 1;
  const reps = u.bestPRReps || 0;
  const avatarHtml = u.photoURL
    ? `<img src="${u.photoURL}" style="width:64px;height:64px;border-radius:16px;object-fit:cover;border:2px solid rgba(139,124,247,0.4);" referrerpolicy="no-referrer">`
    : `<div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,var(--accent-deep),var(--accent-primary));display:flex;align-items:center;justify-content:center;font-size:1.8rem;border:2px solid rgba(139,124,247,0.4);">👤</div>`;

  const overlay = document.createElement('div');
  overlay.id = 'prDetailPopup';
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
    <div class="pr-popup-backdrop" onclick="document.getElementById('prDetailPopup').remove()"></div>
    <div class="pr-popup-card">
      <div class="pr-popup-close" onclick="document.getElementById('prDetailPopup').remove()">✕</div>
      
      <!-- Header -->
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:20px;">
        ${avatarHtml}
        <div style="flex:1; min-width:0;">
          <div style="font-size:0.65rem; font-weight:700; color:var(--accent-primary); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px;">🏆 Kişisel Rekor</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:1.15rem; font-weight:900; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${name}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">En yüksek PR detayları</div>
        </div>
      </div>

      <!-- Exercise chip -->
      <div style="margin-bottom:18px;">
        <div style="font-size:0.65rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px;">Hareket</div>
        <div class="pr-exercise-chip">💪 ${exercise}</div>
      </div>

      <!-- Stats grid -->
      <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
        <div class="pr-stat-box">
          <div class="pr-stat-val">${weight}<small style="font-size:0.6em;opacity:0.7;">kg</small></div>
          <div class="pr-stat-label">Ağırlık</div>
        </div>
        <div class="pr-stat-box">
          <div class="pr-stat-val">${sets}</div>
          <div class="pr-stat-label">Set</div>
        </div>
        <div class="pr-stat-box">
          <div class="pr-stat-val">${reps}</div>
          <div class="pr-stat-label">Tekrar</div>
        </div>
      </div>

      <!-- Volume indicator -->
      ${sets > 0 && reps > 0 ? `
      <div style="margin-top:16px; padding:12px 16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); border-radius:14px; display:flex; align-items:center; justify-content:space-between;">
        <div style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Toplam Hacim</div>
        <div style="font-family:'Space Grotesk',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary);">${(weight * sets * reps).toLocaleString('tr-TR')} <span style="font-size:0.7rem;opacity:0.6;">kg</span></div>
      </div>` : ''}
    </div>
  `;

  document.body.appendChild(overlay);
};

// =============================================
// WEEKLY PR DETAIL POPUP
// =============================================
window.showWeeklyPRPopup = function(exercise, weight, sets, reps) {
  const existing = document.getElementById('weeklyDetailPopup');
  if (existing) existing.remove();

  const exName = exercise || (currentLang === 'tr' ? 'Bilinmeyen Hareket' : 'Unknown Exercise');
  const wt = weight || 0;
  const s = sets || 1;
  const r = reps || 0;

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
          <div class="pr-stat-val">${wt}<small style="font-size:0.6em;opacity:0.7;">kg</small></div>
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
        <div style="font-family:'Space Grotesk',sans-serif; font-size:0.95rem; font-weight:800; color:var(--text-primary);">${(wt * s * r).toLocaleString(currentLang === 'tr' ? 'tr-TR' : 'en-US')} <span style="font-size:0.7rem;opacity:0.6;">kg</span></div>
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

/* ==========================================================================
   ZYRO AI — GEMINI INTEGRATION LOGIC
   ========================================================================== */

// --- STATE ---
let aiChatHistory = JSON.parse(localStorage.getItem('zyro_ai_history') || '[]');
if (!Array.isArray(aiChatHistory)) aiChatHistory = [];
let aiDrawerOpen = false;

// --- INIT ---
function initAI() {
  checkAIKeyStatus();
  renderAIChatHistory();
  
  // Floating badge logic (if there are no messages, show badge)
  const badge = document.querySelector('.ai-float-badge');
  if (badge && aiChatHistory.length === 0) {
    badge.style.display = 'block';
    badge.textContent = '1';
  }
}
document.addEventListener('DOMContentLoaded', initAI);

// --- KEY MANAGEMENT ---
function toggleAIKeyVisibility() {
  const input = document.getElementById('aiKeyInput');
  input.type = input.type === 'password' ? 'text' : 'password';
}

function checkAIKeyStatus() {
  const statusEl = document.getElementById('aiKeyStatus');
  const input = document.getElementById('aiKeyInput');
  if (!statusEl || !input) return;

  const key = window.getGeminiKey && window.getGeminiKey();
  if (key) {
    input.value = key;
    statusEl.className = 'ai-key-status valid';
    statusEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${t('apiKeyStatusActive')}`;
    document.getElementById('aiAnalyzePhotosBtn')?.removeAttribute('disabled');
  } else {
    input.value = '';
    statusEl.className = 'ai-key-status empty';
    statusEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${t('apiKeyStatusEmpty')}`;
    document.getElementById('aiAnalyzePhotosBtn')?.setAttribute('disabled', 'true');
  }
}

function saveAIKey() {
  const input = document.getElementById('aiKeyInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) {
    showToast(t('pleaseEnterValidKey'), 'error');
    return;
  }
  if (window.setGeminiKey) {
    window.setGeminiKey(val);
    checkAIKeyStatus();
    showToast(t('apiKeySaved'), 'success');
  }
}

function deleteAIKey() {
  localStorage.removeItem('zyro_gemini_key');
  checkAIKeyStatus();
  showToast(t('apiKeyDeleted'), 'info');
}

// --- CHAT HISTORY RENDER ---
function saveAIChatHistory() {
  // Keep last 40 messages to prevent localstorage bloat
  if (aiChatHistory.length > 40) aiChatHistory = aiChatHistory.slice(aiChatHistory.length - 40);
  localStorage.setItem('zyro_ai_history', JSON.stringify(aiChatHistory));
}

function clearAIChatHistory() {
  if(confirm(t('confirmClearChat'))) {
    aiChatHistory = [];
    saveAIChatHistory();
    renderAIChatHistory();
    showToast(t('chatHistoryCleared'), 'info');
  }
}

function formatAIMessage(text) {
  // Basic markdown parser for bold and lists
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
  
  // Format list items
  formatted = formatted.replace(/- (.*?)<br>/g, '• $1<br>');
  return formatted;
}

function createMsgHTML(role, text) {
  if (role === 'user') {
    return `
      <div class="ai-msg user">
        <div class="ai-msg-bubble">${formatAIMessage(text)}</div>
      </div>
    `;
  } else {
    return `
      <div class="ai-msg ai">
        <div class="ai-msg-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="#ffffff"/>
          </svg>
        </div>
        <div class="ai-msg-bubble">${formatAIMessage(text)}</div>
      </div>
    `;
  }
}

function renderAIChatHistory() {
  const drawerContainer = document.getElementById('aiDrawerMessages');
  const pageContainer = document.getElementById('aiPageMessages');
  
  let html = '';
  if (aiChatHistory.length === 0) {
    html = `
      <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:0.85rem; display:flex; flex-direction:column; align-items:center; gap:12px;">
        <div style="width:50px; height:50px; border-radius:14px; background:rgba(139,124,247,0.1); border:1px solid rgba(139,124,247,0.2); display:flex; align-items:center; justify-content:center; font-size:1.4rem; color:var(--accent-primary);">👋</div>
        <div>Merhaba! Ben senin kişisel AI asistanın.<br>Sana nasıl yardımcı olabilirim?</div>
      </div>
    `;
  } else {
    html = aiChatHistory.map(m => createMsgHTML(m.role, m.content)).join('');
  }

  if (drawerContainer) drawerContainer.innerHTML = html;
  if (pageContainer) pageContainer.innerHTML = html;
  
  scrollToBottom(drawerContainer);
  scrollToBottom(pageContainer);
}

function scrollToBottom(el) {
  if (el) el.scrollTop = el.scrollHeight;
}

// --- DRAWER LOGIC ---
function toggleAIDrawer() {
  aiDrawerOpen = !aiDrawerOpen;
  const drawer = document.getElementById('aiChatDrawer');
  const badge = document.querySelector('.ai-float-badge');
  if (badge) badge.style.display = 'none'; // hide badge on open
  
  if (aiDrawerOpen) {
    drawer.classList.add('open');
    setTimeout(() => document.getElementById('aiDrawerInput')?.focus(), 100);
    scrollToBottom(document.getElementById('aiDrawerMessages'));
  } else {
    drawer.classList.remove('open');
  }
}

function closeAIDrawer() {
  aiDrawerOpen = false;
  document.getElementById('aiChatDrawer')?.classList.remove('open');
}

function aiDrawerSendChip(text) {
  const input = document.getElementById('aiDrawerInput');
  if(input) { input.value = text; aiDrawerSend(); }
}
function aiPageSendChip(text) {
  const input = document.getElementById('aiPageInput');
  if(input) { input.value = text; aiPageSend(); }
}

function aiDrawerKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    aiDrawerSend();
  }
}
function aiPageKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    aiPageSend();
  }
}

async function doAIChat(inputEl, sendBtn, containerId, context = 'chat') {
  if (!window.hasGeminiKey || !window.hasGeminiKey()) {
    showToast('Önce profil ayarlarına gidip API Key girmelisin!', 'error');
    setTimeout(() => { closeAIDrawer(); switchPage('profile'); setTimeout(()=>switchProfileTab('ai'),200); }, 1000);
    return;
  }

  const text = inputEl.value.trim();
  if (!text) return;

  // Optimistic UI update
  inputEl.value = '';
  inputEl.style.height = 'auto'; // reset height
  sendBtn.disabled = true;
  
  aiChatHistory.push({ role: 'user', content: text });
  saveAIChatHistory();
  renderAIChatHistory();

  const container = document.getElementById(containerId);
  
  // Add loading/typing indicator
  const typingId = 'typing_' + Date.now();
  if (container) {
    container.insertAdjacentHTML('beforeend', `
      <div class="ai-msg ai" id="${typingId}">
        <div class="ai-msg-avatar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="#ffffff"/>
          </svg>
        </div>
        <div class="ai-typing"><span></span><span></span><span></span></div>
      </div>
    `);
    scrollToBottom(container);
  }

  try {
    // We only pass the last 10 messages for context to save tokens
    const recentMessages = aiChatHistory.slice(Math.max(aiChatHistory.length - 11, 0), -1); // exclude the one we just added (wait, we already pushed it!)
    // Actually slice(-10) is fine
    const messagesToSend = aiChatHistory.slice(-10);

    let finalResponse = '';

    if (window.geminiChatStream) {
      // Create empty message bubble
      const msgId = 'msg_' + Date.now();
      if (container) {
        document.getElementById(typingId)?.remove();
        container.insertAdjacentHTML('beforeend', `
          <div class="ai-msg ai" id="${msgId}_wrap">
            <div class="ai-msg-avatar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="#ffffff"/>
              </svg>
            </div>
            <div class="ai-msg-bubble" id="${msgId}"></div>
          </div>
        `);
      }

      await window.geminiChatStream(messagesToSend, (chunk, fullText) => {
        finalResponse = fullText;
        const bubble = document.getElementById(msgId);
        if (bubble) bubble.innerHTML = formatAIMessage(fullText);
        scrollToBottom(container);
      });
      
      if(finalResponse) {
        aiChatHistory.push({ role: 'model', content: finalResponse });
      }
    } else {
      // Fallback to non-stream
      finalResponse = await window.geminiChat(messagesToSend);
      document.getElementById(typingId)?.remove();
      aiChatHistory.push({ role: 'model', content: finalResponse });
    }

    saveAIChatHistory();
    renderAIChatHistory();

  } catch (err) {
    console.error(err);
    document.getElementById(typingId)?.remove();
    
    // Add error msg
    const errMsg = window.geminiErrorMessage ? window.geminiErrorMessage(err) : 'Bir hata oluştu.';
    aiChatHistory.pop(); // remove user msg from history on fail
    saveAIChatHistory();
    
    if (container) {
      container.insertAdjacentHTML('beforeend', `
        <div class="ai-msg ai">
          <div class="ai-msg-avatar" style="background:#ef4444;">!</div>
          <div class="ai-msg-bubble" style="border-color:rgba(239,68,68,0.3); color:#ef4444;">${errMsg}</div>
        </div>
      `);
      scrollToBottom(container);
    }
  } finally {
    sendBtn.disabled = false;
    setTimeout(() => inputEl.focus(), 100);
  }
}

function aiDrawerSend() {
  doAIChat(
    document.getElementById('aiDrawerInput'),
    document.getElementById('aiDrawerSendBtn'),
    'aiDrawerMessages'
  );
}

function aiPageSend() {
  doAIChat(
    document.getElementById('aiPageInput'),
    document.getElementById('aiPageSendBtn'),
    'aiPageMessages'
  );
}

// Auto-resize textarea
document.querySelectorAll('.ai-chat-input').forEach(el => {
  el.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
});

// --- DASHBOARD WIDGET LOGIC ---
async function aiWidgetSend() {
  const input = document.getElementById('aiWidgetInput');
  const btn = document.getElementById('aiWidgetSendBtn');
  const answerBox = document.getElementById('aiWidgetAnswer');
  
  if (!window.hasGeminiKey || !window.hasGeminiKey()) {
    answerBox.innerHTML = window.geminiErrorMessage({message: 'NO_KEY'});
    answerBox.classList.add('visible');
    return;
  }

  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  btn.disabled = true;
  answerBox.classList.add('visible');
  answerBox.innerHTML = '<div style="display:flex;align-items:center;gap:8px;"><span class="ai-typing" style="background:transparent;padding:0;border:none;"><span></span><span></span><span></span></span> <span>Analiz ediliyor...</span></div>';

  try {
    const response = await window.geminiChat([{ role: 'user', content: text }], { maxTokens: 400 });
    
    // Typewriter effect
    answerBox.innerHTML = '';
    let i = 0;
    const speed = 15;
    
    function typeWriter() {
      if (i < response.length) {
        let char = response.charAt(i);
        if (char === '\n') answerBox.innerHTML += '<br>';
        else answerBox.innerHTML += char;
        i++;
        setTimeout(typeWriter, speed);
      } else {
        // Format bold after typing is done for simplicity
        answerBox.innerHTML = formatAIMessage(response);
      }
    }
    typeWriter();
    
    // Also add to global chat history silently so they can continue the chat in full page!
    aiChatHistory.push({ role: 'user', content: text });
    aiChatHistory.push({ role: 'model', content: response });
    saveAIChatHistory();
    renderAIChatHistory();

  } catch(err) {
    answerBox.innerHTML = `<span style="color:#ef4444;">${window.geminiErrorMessage(err)}</span>`;
  } finally {
    btn.disabled = false;
  }
}

function aiWidgetAsk(text) {
  const input = document.getElementById('aiWidgetInput');
  if(input) { input.value = text; aiWidgetSend(); }
}

// --- BEFORE / AFTER AI ANALYSIS ---
let lastSelectedBeforeAfterImgs = []; // Store base64 of selected images

function openBeforeAfterAnalysis() {
  if (!window.hasGeminiKey || !window.hasGeminiKey()) {
    showToast('Önce profil ayarlarına gidip API Key girmelisin!', 'error');
    return;
  }

  const photos = (appData.progressImages || []).sort((a, b) => a.date.localeCompare(b.date));
  if (photos.length < 2) {
    showToast('Karşılaştırma için en az 2 fotoğrafınız olması gerekiyor.', 'error');
    return;
  }

  // Create Photo Selection Modal
  const modalId = 'aiSelectPhotosModal';
  document.getElementById(modalId)?.remove();

  const modalHtml = `
    <div class="ai-analysis-modal-overlay" id="${modalId}Overlay">
      <div class="ai-analysis-modal" id="${modalId}">
        <div class="ai-analysis-modal-header">
          <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#8b7cf7,#5a4cc9);display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="#ffffff"/>
            </svg>
          </div>
          <div style="flex:1;">
            <h3 style="margin:0;font-size:1.05rem;font-weight:800;color:var(--text-primary);">Fotoğraf Seçimi</h3>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">Analiz edilecek iki fotoğrafı (Önce / Sonra) seçin</div>
          </div>
          <button class="btn-small" onclick="document.getElementById('${modalId}Overlay').remove()" style="background:rgba(255,255,255,0.05);border:none;padding:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="ai-analysis-modal-body" style="padding:16px;">
          <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 12px; max-height:400px; overflow-y:auto; padding-right:8px;" id="aiPhotoSelectorGrid">
            ${photos.map((p, i) => `
              <div class="ai-photo-select-item" data-id="${p.id}" data-b64="${p.image}" onclick="toggleAIPhotoSelection(this)" style="position:relative; cursor:pointer; border-radius:12px; overflow:hidden; border:2px solid transparent; transition:all 0.2s;">
                <img src="${p.image}" style="width:100%; height:110px; object-fit:cover; display:block;">
                <div style="position:absolute; bottom:0; left:0; right:0; background:rgba(0,0,0,0.65); color:white; font-size:0.75rem; padding:6px; text-align:center; font-weight:600; backdrop-filter:blur(4px);">${p.date}</div>
                <div class="ai-photo-select-check" style="position:absolute; top:8px; right:8px; width:22px; height:22px; background:rgba(0,0,0,0.5); border:1.5px solid white; border-radius:50%; display:flex; align-items:center; justify-content:center; opacity:0; transition:all 0.2s; backdrop-filter:blur(2px);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:24px; text-align:right;">
            <button class="btn-primary" id="aiStartAnalyzeBtn" onclick="startAIAnalysis()" disabled style="width:100%; padding:14px; opacity:0.5; font-size:1rem;">Analiz Et (2 Fotoğraf Seçin)</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

window.toggleAIPhotoSelection = function(el) {
  el.classList.toggle('selected');
  const check = el.querySelector('.ai-photo-select-check');
  if(el.classList.contains('selected')) {
    el.style.borderColor = 'var(--accent-primary)';
    el.style.boxShadow = '0 4px 12px rgba(139,124,247,0.3)';
    check.style.opacity = '1';
    check.style.background = 'var(--accent-primary)';
    check.style.borderColor = 'var(--accent-primary)';
  } else {
    el.style.borderColor = 'transparent';
    el.style.boxShadow = 'none';
    check.style.opacity = '0';
  }
  
  const selectedCount = document.querySelectorAll('.ai-photo-select-item.selected').length;
  const btn = document.getElementById('aiStartAnalyzeBtn');
  if(selectedCount === 2) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.innerText = 'Analiz Et';
  } else {
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.innerText = 'Analiz Et (2 Fotoğraf Seçin)';
  }
};

window.startAIAnalysis = function() {
  const selectedEls = Array.from(document.querySelectorAll('.ai-photo-select-item.selected'));
  if(selectedEls.length !== 2) return;
  
  const photosData = selectedEls.map(el => ({
    b64: el.getAttribute('data-b64'),
    dateText: el.querySelector('div').innerText
  })).sort((a,b) => a.dateText.localeCompare(b.dateText));
  
  const beforePhoto = photosData[0];
  const afterPhoto = photosData[1];
  
  document.getElementById('aiSelectPhotosModalOverlay')?.remove();
  
  const modalId = 'aiAnalysisResultModal';
  document.getElementById(modalId)?.remove();

  const modalHtml = `
    <div class="ai-analysis-modal-overlay" id="${modalId}Overlay" style="align-items:flex-start; padding-top:40px; overflow-y:auto;">
      <div class="ai-analysis-modal" id="${modalId}" style="width: min(840px, 95vw); max-height: none; margin-bottom:40px;">
        <div class="ai-analysis-modal-header">
          <div style="width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,#8b7cf7,#5a4cc9);display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="#ffffff"/>
            </svg>
          </div>
          <div style="flex:1;">
            <h3 style="margin:0;font-size:1.05rem;font-weight:800;color:var(--text-primary);">AI Gelişim Analizi Sonucu</h3>
          </div>
          <button class="btn-small" onclick="document.getElementById('${modalId}Overlay').remove()" style="background:rgba(255,255,255,0.05);border:none;padding:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="ai-analysis-modal-body" id="${modalId}Body" style="padding:24px;">
          <div class="ai-analysis-loading" id="${modalId}Loading">
            <div class="ai-analysis-spinner"></div>
            <div style="text-align:center;">
              <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Fotoğraflar analiz ediliyor...</div>
              <div style="font-size:0.85rem;color:var(--text-muted);">Bu işlem birkaç saniye sürebilir.</div>
            </div>
          </div>
          
          <div id="${modalId}Content" style="display:none; flex-direction:column; gap:24px;">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
              <!-- Before -->
              <div style="display:flex; flex-direction:column; gap:16px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:20px; padding:16px;">
                <div style="text-align:center; font-weight:700; color:var(--text-secondary); font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em;">Önceki <span style="opacity:0.7;">(${beforePhoto.dateText})</span></div>
                <img src="${beforePhoto.b64}" style="width:100%; border-radius:12px; object-fit:cover; aspect-ratio:3/4; box-shadow:0 4px 16px rgba(0,0,0,0.2);">
                <div id="${modalId}BeforeAnalysis" style="font-size:0.88rem; color:var(--text-primary); line-height:1.6; padding:0 4px;"></div>
              </div>
              <!-- After -->
              <div style="display:flex; flex-direction:column; gap:16px; background:linear-gradient(135deg, rgba(139,124,247,0.08), rgba(90,76,201,0.03)); border:1px solid rgba(139,124,247,0.25); border-radius:20px; padding:16px; box-shadow:0 8px 32px rgba(139,124,247,0.08);">
                <div style="text-align:center; font-weight:800; color:var(--accent-primary); font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em;">Sonraki <span style="opacity:0.8;">(${afterPhoto.dateText})</span></div>
                <img src="${afterPhoto.b64}" style="width:100%; border-radius:12px; object-fit:cover; aspect-ratio:3/4; box-shadow:0 4px 16px rgba(0,0,0,0.2);">
                <div id="${modalId}AfterAnalysis" style="font-size:0.88rem; color:var(--text-primary); line-height:1.6; padding:0 4px;"></div>
              </div>
            </div>
            
            <!-- Comparison & Suggestions -->
            <div style="background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:20px; margin-top:8px;">
              <h4 style="margin:0 0 12px 0; font-size:1.05rem; display:flex; align-items:center; gap:8px; color:var(--text-primary);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Genel Değerlendirme & Öneriler
              </h4>
              <div id="${modalId}Comparison" style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  if (window.geminiAnalyzeImages) {
    window.geminiAnalyzeImages([beforePhoto.b64, afterPhoto.b64])
      .then(resultStr => {
        document.getElementById(`${modalId}Loading`).style.display = 'none';
        const contentEl = document.getElementById(`${modalId}Content`);
        contentEl.style.display = 'flex';
        
        let parsed;
        try {
          const cleanJson = resultStr.replace(/```json/gi, '').replace(/```/g, '').trim();
          parsed = JSON.parse(cleanJson);
        } catch(e) {
          // Fallback if AI didn't return valid JSON
          parsed = {
            photo1_analysis: "Analiz ayrıştırılamadı.",
            photo2_analysis: "Analiz ayrıştırılamadı.",
            comparison_and_suggestions: resultStr
          };
        }
        
        document.getElementById(`${modalId}BeforeAnalysis`).innerHTML = formatAIMessage(parsed.photo1_analysis || "");
        document.getElementById(`${modalId}AfterAnalysis`).innerHTML = formatAIMessage(parsed.photo2_analysis || "");
        document.getElementById(`${modalId}Comparison`).innerHTML = formatAIMessage(parsed.comparison_and_suggestions || "");
      })
      .catch(err => {
        document.getElementById(`${modalId}Loading`).style.display = 'none';
        const contentEl = document.getElementById(`${modalId}Content`);
        contentEl.style.display = 'flex';
        contentEl.innerHTML = `<div style="padding:16px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:12px;color:#ef4444;">${window.geminiErrorMessage ? window.geminiErrorMessage(err) : err.message}</div>`;
      });
  }
};

// =============================================
// DIET TRACKER & MACRO LOGGING
// =============================================
window.toggleDietTargetForm = function() {
  const container = document.getElementById('dietTargetFormContainer');
  if (!container) return;
  const isHidden = container.style.display === 'none' || container.style.display === '';
  if (isHidden) {
    // Fill values from state/targets
    const t = appData.dietTargets || { kcal: 2000, protein: 150, carbs: 200, fat: 70 };
    document.getElementById('targetKcal').value = t.kcal;
    document.getElementById('targetProtein').value = t.protein;
    document.getElementById('targetCarbs').value = t.carbs;
    document.getElementById('targetFat').value = t.fat;
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
};

window.saveDietTargets = function() {
  const kcal = parseInt(document.getElementById('targetKcal').value) || 2000;
  const protein = parseInt(document.getElementById('targetProtein').value) || 150;
  const carbs = parseInt(document.getElementById('targetCarbs').value) || 200;
  const fat = parseInt(document.getElementById('targetFat').value) || 70;

  appData.dietTargets = { kcal, protein, carbs, fat };
  saveData();
  renderDiet();
  document.getElementById('dietTargetFormContainer').style.display = 'none';
  showToast(currentLang === 'tr' ? 'Hedefler kaydedildi.' : 'Goals saved.', 'success');
};

window.switchDietTab = function(tab) {
  const tabAI = document.getElementById('dietTabAI');
  const tabManual = document.getElementById('dietTabManual');
  const btnAI = document.getElementById('dietTabBtnAI');
  const btnManual = document.getElementById('dietTabBtnManual');

  if (tab === 'ai') {
    tabAI.style.display = 'block';
    tabManual.style.display = 'none';
    btnAI.classList.add('active');
    btnAI.style.color = 'var(--text-primary)';
    btnManual.classList.remove('active');
    btnManual.style.color = 'var(--text-muted)';
  } else {
    tabAI.style.display = 'none';
    tabManual.style.display = 'block';
    btnAI.classList.remove('active');
    btnAI.style.color = 'var(--text-muted)';
    btnManual.classList.add('active');
    btnManual.style.color = 'var(--text-primary)';
  }
};

window.triggerDietPhotoUpload = function() {
  document.getElementById('dietPhotoInput').click();
};

window.handleDietPhotoSelect = async function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const dragZone = document.getElementById('dietDragDropZone');
  const loading = document.getElementById('dietAiLoading');
  const result = document.getElementById('dietAiResult');
  const preview = document.getElementById('dietPhotoPreview');

  // Convert to Base64
  const reader = new FileReader();
  reader.onload = async function(e) {
    const base64 = e.target.result;
    preview.src = base64;

    // Show loading spinner
    dragZone.style.display = 'none';
    loading.style.display = 'block';
    result.style.display = 'none';

    try {
      if (!window.geminiAnalyzeFoodImage) {
        throw new Error('AI analysis module not loaded yet.');
      }
      
      const res = await window.geminiAnalyzeFoodImage(base64);
      
      // Populate results
      document.getElementById('aiMealName').value = res.meal_name || '';
      document.getElementById('aiMealKcal').value = res.calories || 0;
      document.getElementById('aiMealProtein').value = res.protein || 0;
      document.getElementById('aiMealCarbs').value = res.carbs || 0;
      document.getElementById('aiMealFat').value = res.fat || 0;
      document.getElementById('dietAiDesc').textContent = res.description || '';

      loading.style.display = 'none';
      result.style.display = 'block';
    } catch(err) {
      console.error('AI food analysis error:', err);
      loading.style.display = 'none';
      dragZone.style.display = 'block';
      showToast(window.geminiErrorMessage ? window.geminiErrorMessage(err) : 'Yemek analiz edilemedi: ' + err.message, 'error');
    }
  };
  reader.readAsDataURL(file);
};

window.resetDietAiForm = function() {
  document.getElementById('dietDragDropZone').style.display = 'block';
  document.getElementById('dietAiResult').style.display = 'none';
  document.getElementById('dietAiLoading').style.display = 'none';
  document.getElementById('dietPhotoInput').value = '';
};

window.submitDietLog = function(type) {
  let name, kcal, protein, carbs, fat;

  if (type === 'ai') {
    name = document.getElementById('aiMealName').value.trim();
    kcal = parseInt(document.getElementById('aiMealKcal').value) || 0;
    protein = parseInt(document.getElementById('aiMealProtein').value) || 0;
    carbs = parseInt(document.getElementById('aiMealCarbs').value) || 0;
    fat = parseInt(document.getElementById('aiMealFat').value) || 0;
  } else {
    name = document.getElementById('manualMealName').value.trim();
    kcal = parseInt(document.getElementById('manualMealKcal').value) || 0;
    protein = parseInt(document.getElementById('manualMealProtein').value) || 0;
    carbs = parseInt(document.getElementById('manualMealCarbs').value) || 0;
    fat = parseInt(document.getElementById('manualMealFat').value) || 0;
  }

  if (!name) {
    showToast(currentLang === 'tr' ? 'Yemek adı boş olamaz!' : 'Meal name cannot be empty!', 'error');
    return;
  }

  const meal = {
    id: 'meal_' + Date.now(),
    name,
    calories: kcal,
    protein,
    carbs,
    fat,
    timestamp: Date.now()
  };

  const td = todayStr();
  if (!appData.dietLogs) appData.dietLogs = {};
  if (!appData.dietLogs[td]) appData.dietLogs[td] = [];

  appData.dietLogs[td].push(meal);
  saveData();
  renderDiet();

  // Reset forms
  if (type === 'ai') {
    window.resetDietAiForm();
  } else {
    document.getElementById('manualMealName').value = '';
    document.getElementById('manualMealKcal').value = '';
    document.getElementById('manualMealProtein').value = '';
    document.getElementById('manualMealCarbs').value = '';
    document.getElementById('manualMealFat').value = '';
  }

  showToast(currentLang === 'tr' ? 'Öğün kaydedildi.' : 'Meal logged.', 'success');
};

window.deleteDietLog = function(mealId) {
  if (!confirm(currentLang === 'tr' ? 'Bu öğünü silmek istediğinizden emin misiniz?' : 'Are you sure you want to delete this meal?')) return;
  const td = todayStr();
  if (appData.dietLogs && appData.dietLogs[td]) {
    appData.dietLogs[td] = appData.dietLogs[td].filter(m => m.id !== mealId);
    saveData();
    renderDiet();
    showToast(currentLang === 'tr' ? 'Öğün silindi.' : 'Meal deleted.', 'success');
  }
};

window.renderDiet = function() {
  // Ensure objects exist
  if (!appData.dietTargets) {
    appData.dietTargets = { kcal: 2000, protein: 150, carbs: 200, fat: 70 };
  }
  if (!appData.dietLogs) {
    appData.dietLogs = {};
  }

  const targets = appData.dietTargets;
  const td = todayStr();
  const logs = appData.dietLogs[td] || [];

  // Calculate totals consumed today
  let totalKcal = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  logs.forEach(m => {
    totalKcal += m.calories || 0;
    totalProtein += m.protein || 0;
    totalCarbs += m.carbs || 0;
    totalFat += m.fat || 0;
  });

  // Calculate remaining
  const remKcal = Math.max(0, targets.kcal - totalKcal);
  const remProtein = Math.max(0, targets.protein - totalProtein);
  const remCarbs = Math.max(0, targets.carbs - totalCarbs);
  const remFat = Math.max(0, targets.fat - totalFat);

  // Update UI values
  document.getElementById('dietKcalVal').textContent = `${totalKcal} / ${targets.kcal}`;
  document.getElementById('dietProteinVal').textContent = `${totalProtein}g / ${targets.protein}g`;
  document.getElementById('dietCarbsVal').textContent = `${totalCarbs}g / ${targets.carbs}g`;
  document.getElementById('dietFatVal').textContent = `${totalFat}g / ${targets.fat}g`;

  // Remaining texts
  document.getElementById('dietKcalRem').textContent = currentLang === 'tr' ? `Kalan: ${remKcal} kcal` : `Remaining: ${remKcal} kcal`;
  document.getElementById('dietProteinRem').textContent = currentLang === 'tr' ? `Kalan: ${remProtein}g` : `Remaining: ${remProtein}g`;
  document.getElementById('dietCarbsRem').textContent = currentLang === 'tr' ? `Kalan: ${remCarbs}g` : `Remaining: ${remCarbs}g`;
  document.getElementById('dietFatRem').textContent = currentLang === 'tr' ? `Kalan: ${remFat}g` : `Remaining: ${remFat}g`;

  // Bar progress widths
  const pctKcal = Math.min(100, Math.round((totalKcal / targets.kcal) * 100)) || 0;
  const pctProtein = Math.min(100, Math.round((totalProtein / targets.protein) * 100)) || 0;
  const pctCarbs = Math.min(100, Math.round((totalCarbs / targets.carbs) * 100)) || 0;
  const pctFat = Math.min(100, Math.round((totalFat / targets.fat) * 100)) || 0;

  document.getElementById('dietKcalBar').style.width = pctKcal + '%';
  document.getElementById('dietProteinBar').style.width = pctProtein + '%';
  document.getElementById('dietCarbsBar').style.width = pctCarbs + '%';
  document.getElementById('dietFatBar').style.width = pctFat + '%';

  // Render log list
  const list = document.getElementById('loggedMealsList');
  if (logs.length === 0) {
    list.innerHTML = `<div class="logged-empty">${currentLang === 'tr' ? 'Henüz yemek eklenmedi.' : 'No meals logged yet today.'}</div>`;
    return;
  }

  let html = '';
  logs.forEach(m => {
    const timeStr = new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    html += `
      <div class="logged-row" style="padding: 12px; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.01); border-radius: 8px; gap: 12px;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary); display: flex; align-items: center; flex-wrap: wrap; gap: 6px 8px;">
            <span>🍽️ ${m.name}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">${timeStr}</span>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px; display: flex; flex-wrap: wrap; gap: 6px 12px;">
            <span>🔥 <b>${m.calories}</b> kcal</span>
            <span>🥩 P: <b>${m.protein}</b>g</span>
            <span>🍞 C: <b>${m.carbs}</b>g</span>
            <span>🥑 F: <b>${m.fat}</b>g</span>
          </div>
        </div>
        <button class="delete-log" onclick="deleteDietLog('${m.id}')" title="Sil">×</button>
      </div>
    `;
  });
  list.innerHTML = html;
};
