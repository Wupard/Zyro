window.toggleSidebarMobile = function() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('show');
};
/**
 * ==========================================================================
 * ZYRO DASHBOARD ENGINE - 2026
 * Pure Dark Theme, Copper Accents, Unbounded + Manrope Typography
 * ==========================================================================
 */

// ==========================================================================
// 1. AYAR NESNESİ (DASHBOARD CONFIG)
// Kolayca düzenlenebilir tek ayar nesnesi
// ==========================================================================
const DASHBOARD_CONFIG = {
  weeklyWorkoutTarget: 5,
  waterTargetMl: 3000,
  proteinTargetG: 160,
  weightTargetRange: { min: 74, max: 78 }, // kg
  restTimerDefaultSeconds: 90,
  muscleColors: {
    'Göğüs': '#e08a4a',
    'Sırt': '#86c19a',
    'Omuz': '#f0b35a',
    'Biceps': '#e0626b',
    'Triceps': '#c9b08a',
    'Karın': '#6fb7b0',
    'Bacak': '#8aa4d6',
    'Önkol': '#c9b08a'
  },
  // Program: Pzt Push, Sal Pull, Çar Bacak+Core, Per Dinlenme, Cum Üst, Cmt Alt+Core, Paz Dinlenme
  weeklyProgram: [
    {
      dayIndex: 1, // 1 = Pazartesi
      dayKey: 'mon',
      dayName: 'Pazartesi',
      dayShort: 'Pzt',
      title: 'Push',
      fullTitle: 'Pazartesi · Push Antrenmanı',
      isRest: false,
      exercises: [
        { name: 'Incline Dumbbell Press', muscle: 'Göğüs', sets: 3, reps: '6-8', defaultWeight: 28 },
        { name: 'Barbell Bench Press', muscle: 'Göğüs', sets: 2, reps: '6-8', defaultWeight: 80 },
        { name: 'Seated Dumbbell Shoulder Press', muscle: 'Omuz', sets: 2, reps: '8-10', defaultWeight: 22 },
        { name: 'Cable Crossover', muscle: 'Göğüs', sets: 3, reps: '12-15', defaultWeight: 15 },
        { name: 'Dumbbell Lateral Raise', muscle: 'Omuz', sets: 3, reps: '12-15', defaultWeight: 12 },
        { name: 'Triceps Pushdown', muscle: 'Triceps', sets: 2, reps: '10-12', defaultWeight: 30 },
        { name: 'Face Pull', muscle: 'Omuz', sets: 2, reps: '15', defaultWeight: 25 }
      ]
    },
    {
      dayIndex: 2, // 2 = Salı
      dayKey: 'tue',
      dayName: 'Salı',
      dayShort: 'Sal',
      title: 'Pull',
      fullTitle: 'Salı · Pull Antrenmanı',
      isRest: false,
      exercises: [
        { name: 'Lat Pulldown', muscle: 'Sırt', sets: 3, reps: '6-10', defaultWeight: 65 },
        { name: 'Barbell Row', muscle: 'Sırt', sets: 3, reps: '6-8', defaultWeight: 70 },
        { name: 'Seated Cable Row', muscle: 'Sırt', sets: 2, reps: '10-12', defaultWeight: 60 },
        { name: 'Cable Reverse Fly', muscle: 'Omuz', sets: 2, reps: '15', defaultWeight: 10 },
        { name: 'Dumbbell Shrug', muscle: 'Sırt', sets: 3, reps: '10-12', defaultWeight: 32 },
        { name: 'EZ Bar Curl', muscle: 'Biceps', sets: 3, reps: '8-10', defaultWeight: 30 },
        { name: 'Single-Arm Incline Dumbbell Curl', muscle: 'Biceps', sets: 3, reps: '10-12', defaultWeight: 14 },
        { name: 'Wrist Curl', muscle: 'Önkol', sets: 3, reps: '12-15', defaultWeight: 20 }
      ]
    },
    {
      dayIndex: 3, // 3 = Çarşamba
      dayKey: 'wed',
      dayName: 'Çarşamba',
      dayShort: 'Çar',
      title: 'Bacak',
      fullTitle: 'Çarşamba · Bacak + Core Antrenmanı',
      isRest: false,
      exercises: [
        { name: 'Barbell Squat', muscle: 'Bacak', sets: 3, reps: '6-8', defaultWeight: 100 },
        { name: 'Leg Press', muscle: 'Bacak', sets: 2, reps: '10-12', defaultWeight: 180 },
        { name: 'Bulgarian Split Squat', muscle: 'Bacak', sets: 2, reps: '10', defaultWeight: 18 },
        { name: 'Lying Leg Curl', muscle: 'Bacak', sets: 3, reps: '10-12', defaultWeight: 45 },
        { name: 'Leg Extension', muscle: 'Bacak', sets: 2, reps: '12-15', defaultWeight: 55 },
        { name: 'Standing Calf Raise', muscle: 'Bacak', sets: 3, reps: '12-15', defaultWeight: 70 },
        { name: 'Hanging Leg Raise', muscle: 'Karın', sets: 3, reps: '10-15', defaultWeight: 0 },
        { name: 'Side Bend', muscle: 'Karın', sets: 3, reps: '12', defaultWeight: 20 },
        { name: 'Plank', muscle: 'Karın', sets: 2, reps: '45 sn', defaultWeight: 0 }
      ]
    },
    {
      dayIndex: 4, // 4 = Perşembe (Dinlenme)
      dayKey: 'thu',
      dayName: 'Perşembe',
      dayShort: 'Per',
      title: 'Dinlenme',
      fullTitle: 'Perşembe · Dinlenme Günü',
      isRest: true,
      exercises: []
    },
    {
      dayIndex: 5, // 5 = Cuma
      dayKey: 'fri',
      dayName: 'Cuma',
      dayShort: 'Cum',
      title: 'Üst',
      fullTitle: 'Cuma · Üst Vücut Antrenmanı',
      isRest: false,
      exercises: [
        { name: 'Dumbbell Bench Press', muscle: 'Göğüs', sets: 2, reps: '8-10', defaultWeight: 32 },
        { name: 'Chest-Supported Row', muscle: 'Sırt', sets: 2, reps: '10', defaultWeight: 50 },
        { name: 'Arnold Press', muscle: 'Omuz', sets: 2, reps: '10', defaultWeight: 20 },
        { name: 'Close-Grip Lat Pulldown', muscle: 'Sırt', sets: 2, reps: '10-12', defaultWeight: 60 },
        { name: 'Dumbbell Lateral Raise', muscle: 'Omuz', sets: 2, reps: '15', defaultWeight: 12 },
        { name: 'EZ Bar Curl', muscle: 'Biceps', sets: 2, reps: '10-12', defaultWeight: 28 },
        { name: 'Overhead Triceps Extension', muscle: 'Triceps', sets: 2, reps: '10-12', defaultWeight: 25 },
        { name: 'Face Pull', muscle: 'Omuz', sets: 2, reps: '15', defaultWeight: 25 },
        { name: 'Dumbbell Shrug', muscle: 'Sırt', sets: 2, reps: '12', defaultWeight: 32 },
        { name: 'EZ Bar Reverse Curl', muscle: 'Biceps', sets: 2, reps: '12', defaultWeight: 22 }
      ]
    },
    {
      dayIndex: 6, // 6 = Cumartesi
      dayKey: 'sat',
      dayName: 'Cumartesi',
      dayShort: 'Cmt',
      title: 'Alt',
      fullTitle: 'Cumartesi · Alt Vücut + Core Antrenmanı',
      isRest: false,
      exercises: [
        { name: 'Romanian Deadlift', muscle: 'Bacak', sets: 3, reps: '6-8', defaultWeight: 110 },
        { name: 'Hip Thrust', muscle: 'Bacak', sets: 2, reps: '8-12', defaultWeight: 120 },
        { name: 'Lying Leg Curl', muscle: 'Bacak', sets: 3, reps: '10-12', defaultWeight: 45 },
        { name: 'Hack Squat', muscle: 'Bacak', sets: 2, reps: '10-12', defaultWeight: 90 },
        { name: 'Seated Calf Raise', muscle: 'Bacak', sets: 3, reps: '15', defaultWeight: 50 },
        { name: 'Cable Crunch', muscle: 'Karın', sets: 3, reps: '12-15', defaultWeight: 40 },
        { name: 'Side Bend', muscle: 'Karın', sets: 3, reps: '12', defaultWeight: 20 }
      ]
    },
    {
      dayIndex: 0, // 0 = Pazar (Dinlenme)
      dayKey: 'sun',
      dayName: 'Pazar',
      dayShort: 'Paz',
      title: 'Dinlenme',
      fullTitle: 'Pazar · Dinlenme Günü',
      isRest: true,
      exercises: []
    }
  ],
  sampleData: {
    streak: 5,
    waterMl: 1750,
    proteinG: 115,
    recentWeights: [
      { date: '2026-09-20', weight: 80.2 },
      { date: '2026-09-27', weight: 79.8 },
      { date: '2026-10-04', weight: 79.3 },
      { date: '2026-10-11', weight: 78.9 },
      { date: '2026-10-18', weight: 78.5 },
      { date: '2026-10-21', weight: 78.1 }
    ],
    weeklyVolumes: [
      { week: '15 Eyl', volume: 22400 },
      { week: '22 Eyl', volume: 24100 },
      { week: '29 Eyl', volume: 23800 },
      { week: '6 Eki', volume: 25600 },
      { week: '13 Eki', volume: 27200 },
      { week: '20 Eki', volume: 28450 }
    ]
  }
};

// ==========================================================================
// 2. DASHBOARD LOCAL STATE
// ==========================================================================
const dbState = {
  selectedDayIndex: new Date().getDay(), // Bugünün günü (0=Sun, 1=Mon, ..., 6=Sat)
  weekOffset: 0,
  muscleRange: 'today', // 'today' | 'week'
  chartType: 'weight',  // 'weight' | 'volume'
  restTimer: {
    totalSeconds: DASHBOARD_CONFIG.restTimerDefaultSeconds,
    remaining: DASHBOARD_CONFIG.restTimerDefaultSeconds,
    isRunning: false,
    intervalId: null
  }
};

// ==========================================================================
// 3. UTILITY FUNCTIONS
// ==========================================================================
function getDbDateStr(d) {
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - offset).toISOString().split('T')[0];
}

function getDbTodayStr() {
  return getDbDateStr(new Date());
}

function getDbMonday(d) {
  const date = new Date(d);
  const day = date.getDay() || 7; // Sunday=7, Monday=1
  date.setDate(date.getDate() - (day - 1));
  date.setHours(0, 0, 0, 0);
  return date;
}

// Ensure weightLog has sample data if completely empty
function ensureDbWeightData() {
  if (typeof appData !== 'undefined' && appData.weightLog) {
    if (Object.keys(appData.weightLog).length === 0) {
      DASHBOARD_CONFIG.sampleData.recentWeights.forEach(item => {
        appData.weightLog[item.date] = item.weight;
      });
      if (typeof saveData === 'function') saveData();
    }
  }
}

// Get daily tracker values from localStorage
function getDailyTrackers(dateStr) {
  const key = 'zyro_daily_trackers_' + dateStr;
  const saved = localStorage.getItem(key);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return {
    water: dateStr === getDbTodayStr() ? DASHBOARD_CONFIG.sampleData.waterMl : 0,
    protein: dateStr === getDbTodayStr() ? DASHBOARD_CONFIG.sampleData.proteinG : 0
  };
}

function saveDailyTrackers(dateStr, data) {
  const key = 'zyro_daily_trackers_' + dateStr;
  localStorage.setItem(key, JSON.stringify(data));
}

// Get workout progress (sets checked & weight) from localStorage
function getDayWorkoutProgress(dateStr, dayIndex) {
  const key = `zyro_workout_progress_${dateStr}_day${dayIndex}`;
  const saved = localStorage.getItem(key);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return { sets: {}, weights: {} };
}

function saveDayWorkoutProgress(dateStr, dayIndex, progress) {
  const key = `zyro_workout_progress_${dateStr}_day${dayIndex}`;
  localStorage.setItem(key, JSON.stringify(progress));
}

// ==========================================================================
// 4. MAIN DASHBOARD RENDERER
// ==========================================================================
window.renderZyroDashboard = function() {
  const container = document.getElementById('pageDashboard');
  if (!container) return;

  ensureDbWeightData();

  // If container doesn't have the redesign markup yet, build it
  if (!container.querySelector('.db-container')) {
    buildDashboardMarkup(container);
  }

  // Render each section
  renderDbTopBar();
  renderDbWeekCalendar();
  renderDbWorkoutCard();
  renderDbDailyTrackers();
  renderDbSummaryCards();
  renderDbWeeklyReportCard();
  renderDbMuscleMapCard();
  renderDbProgressChart();
};

// ==========================================================================
// 5. MARKUP BUILDER
// ==========================================================================
function buildDashboardMarkup(container) {
  container.innerHTML = `
    <!-- Atmosphere Background -->
    <div class="db-atmosphere" aria-hidden="true">
      <div class="db-grid-layer"></div>
      <div class="db-noise-layer"></div>
      <div class="db-glow-copper"></div>
      <div class="db-glow-rose"></div>
    </div>

    <div class="db-container">
      <!-- 1. ÜST BAR -->
      <header class="db-topbar" id="dbTopBar"></header>

      <!-- 12-KOLONLU GRID -->
      <main class="db-grid">
        <!-- 2. BU HAFTA KARTI (12 Kolon) -->
        <section class="db-card db-col-12" style="--card-index: 1;" id="dbWeekCard"></section>

        <!-- 3. ANTRENMAN KARTI (8 Kolon) -->
        <section class="db-card db-col-8" style="--card-index: 2;" id="dbWorkoutCard"></section>

        <!-- 4. GÜNLÜK TAKİP KARTI (4 Kolon) -->
        <section class="db-card db-col-4" style="--card-index: 3;" id="dbDailyTrackersCard"></section>

        <!-- 5. DÖRT ÖZET KARTI (3 Kolon x 4 = 12 Kolon) -->
        <section class="db-card db-summary-card db-col-3" style="--card-index: 4;" id="dbSummary1"></section>
        <section class="db-card db-summary-card db-col-3" style="--card-index: 5;" id="dbSummary2"></section>
        <section class="db-card db-summary-card db-col-3" style="--card-index: 6;" id="dbSummary3"></section>
        <section class="db-card db-summary-card db-col-3" style="--card-index: 7;" id="dbSummary4"></section>

        <!-- 6. HAFTALIK RAPOR KARTI (5 Kolon) -->
        <section class="db-card db-col-5" style="--card-index: 8;" id="dbWeeklyReportCard"></section>

        <!-- 7. KAS HARİTASI KARTI (7 Kolon) -->
        <section class="db-card db-col-7" style="--card-index: 9;" id="dbMuscleMapCard"></section>

        <!-- 8. İLERLEME ÖZETİ KARTI (12 Kolon) -->
        <section class="db-card db-col-12" style="--card-index: 10;" id="dbProgressChartCard"></section>
      </main>
    </div>
  `;
}

// ==========================================================================
// 6. SECTION RENDERERS
// ==========================================================================

// --- 1. ÜST BAR ---
function renderDbTopBar() {
  const el = document.getElementById('dbTopBar');
  if (!el) return;

  const now = new Date();
  const hour = now.getHours();
  let greetingText = 'Günaydın';
  if (hour >= 12 && hour < 18) greetingText = 'İyi öğleden sonralar';
  else if (hour >= 18 || hour < 5) greetingText = 'İyi akşamlar';

  let userName = '';
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.displayName) {
    userName = `, ${currentUser.displayName.split(' ')[0]}`;
  } else if (typeof appData !== 'undefined' && appData.profile && appData.profile.displayName) {
    userName = `, ${appData.profile.displayName.split(' ')[0]}`;
  }

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('tr-TR', dateOptions);

  // Compute Streak
  let streakCount = DASHBOARD_CONFIG.sampleData.streak;
  if (typeof appData !== 'undefined' && typeof appData.streak === 'number' && appData.streak > 0) {
    streakCount = appData.streak;
  }

  el.innerHTML = `
    <div class="db-topbar-left">
      <!-- Mobil Menü Butonu -->
      <button class="db-menu-toggle" id="dbMenuToggle" onclick="window.toggleSidebarMobile()" aria-label="Menüyü Aç/Kapat">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      <!-- Halter Plakası Logo Rozeti -->
      <div class="db-plate-badge" title="Zyro Weight Plate Logo">
        <div class="db-plate-rib r-top"></div>
        <div class="db-plate-rib r-bottom"></div>
        <div class="db-plate-rib r-left"></div>
        <div class="db-plate-rib r-right"></div>
        <div class="db-plate-inner">
          <div class="db-plate-hole"></div>
        </div>
      </div>
      <div class="db-greeting-meta">
        <h1 class="db-greeting">${greetingText}<span>${userName}</span></h1>
        <p class="db-date-display">${formattedDate}</p>
      </div>
    </div>
    <div class="db-topbar-right">
      <!-- Seri N Gün Rozeti -->
      <div class="db-streak-pill" title="Mevcut antrenman seriniz">
        <span class="db-streak-icon" role="img" aria-label="flame">🔥</span>
        <span>Seri ${streakCount} gün</span>
      </div>
      <!-- Bildirim Zili -->
      <button class="db-bell-btn" id="dbNotifTriggerBtn" aria-label="Bildirimler" onclick="if(typeof toggleNotifDrawer==='function')toggleNotifDrawer()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <span class="db-bell-badge">1</span>
      </button>
    </div>
  `;
}

// --- 2. BU HAFTA KARTI ---
function renderDbWeekCalendar() {
  const el = document.getElementById('dbWeekCard');
  if (!el) return;

  const now = new Date();
  const monday = getDbMonday(now);
  monday.setDate(monday.getDate() + dbState.weekOffset * 7);

  const sunday = new Date(monday);
  sunday.setDate(sunday.getDate() + 6);

  const weekRangeStr = `${monday.toLocaleDateString('tr-TR', { day:'numeric', month:'short' })} – ${sunday.toLocaleDateString('tr-TR', { day:'numeric', month:'short' })}`;

  const todayStr = getDbTodayStr();

  let daysHtml = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(d.getDate() + i);
    const dateStr = getDbDateStr(d);
    const dayOfWeek = d.getDay(); // 0..6
    const isToday = (dateStr === todayStr);
    const isSelected = (dayOfWeek === dbState.selectedDayIndex);

    // Workout title for this day
    const dayProg = DASHBOARD_CONFIG.weeklyProgram.find(p => p.dayIndex === dayOfWeek) || { title: 'Dinlenme', isRest: true };
    const dayTitle = dayProg.title;

    // Completed state
    const isCompleted = typeof appData !== 'undefined' && appData.attendance && appData.attendance[dateStr] === true;

    daysHtml += `
      <div class="db-day-box ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''} ${isCompleted ? 'is-completed' : ''}"
           onclick="window.selectDbDay(${dayOfWeek})"
           role="button"
           tabindex="0"
           aria-label="${dayProg.dayName} ${d.getDate()} ${dayTitle}">
        <span class="db-day-name">${dayProg.dayShort}</span>
        <span class="db-day-num">${d.getDate()}</span>
        <span class="db-day-workout-tag ${dayProg.isRest ? 'is-rest' : ''}">${dayTitle}</span>
        <div class="db-day-status-dot">✓</div>
      </div>
    `;
  }

  el.innerHTML = `
    <div class="db-card-header">
      <h2 class="db-card-title">Bu hafta</h2>
      <div class="db-week-header-actions">
        <button class="db-nav-btn" onclick="window.navDbWeek(-1)" aria-label="Önceki hafta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span class="db-week-range-label">${weekRangeStr}</span>
        <button class="db-nav-btn" onclick="window.navDbWeek(1)" aria-label="Sonraki hafta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
    <div class="db-week-days-grid">
      ${daysHtml}
    </div>
  `;
}

window.navDbWeek = function(delta) {
  dbState.weekOffset += delta;
  renderDbWeekCalendar();
};

window.selectDbDay = function(dayIndex) {
  dbState.selectedDayIndex = dayIndex;
  renderDbWeekCalendar();
  renderDbWorkoutCard();
};

// --- 3. ANTRENMAN KARTI ---
function renderDbWorkoutCard() {
  const el = document.getElementById('dbWorkoutCard');
  if (!el) return;

  const dayProg = DASHBOARD_CONFIG.weeklyProgram.find(p => p.dayIndex === dbState.selectedDayIndex);
  if (!dayProg) return;

  // Selected date key
  const now = new Date();
  const monday = getDbMonday(now);
  monday.setDate(monday.getDate() + dbState.weekOffset * 7);
  // find target date corresponding to dayIndex
  const targetDate = new Date(monday);
  const diffDays = (dayProg.dayIndex === 0 ? 6 : dayProg.dayIndex - 1);
  targetDate.setDate(targetDate.getDate() + diffDays);
  const dateKey = getDbDateStr(targetDate);

  const isCompleted = typeof appData !== 'undefined' && appData.attendance && appData.attendance[dateKey] === true;

  if (dayProg.isRest) {
    el.innerHTML = `
      <div class="db-card-header">
        <h2 class="db-card-title">${dayProg.fullTitle}</h2>
      </div>
      <div class="db-rest-message-box">
        <div class="db-rest-icon-large">🌿</div>
        <h3 class="db-rest-title">Bugün dinlenme günü</h3>
        <p class="db-rest-desc">
          Kas onarımı, merkezi sinir sistemi toparlanması ve yeni haftaya güçlü girmek için bugün antrenman planlanmadı.
          Bol su tüketmeyi, protein hedefini tamamlamayı ve kaliteli uyumayı unutma!
        </p>
      </div>
    `;
    return;
  }

  // Load active workout progress
  const progress = getDayWorkoutProgress(dateKey, dayProg.dayIndex);

  let totalPlannedSets = 0;
  let totalDoneSets = 0;
  let totalVolumeKg = 0;

  dayProg.exercises.forEach((ex, exIdx) => {
    totalPlannedSets += ex.sets;
    const currentWeight = progress.weights[exIdx] !== undefined ? progress.weights[exIdx] : ex.defaultWeight;
    for (let s = 0; s < ex.sets; s++) {
      if (progress.sets[`${exIdx}_${s}`]) {
        totalDoneSets++;
        totalVolumeKg += (currentWeight * 8); // approximate 8 reps for volume calc
      }
    }
  });

  const progressPct = totalPlannedSets > 0 ? Math.round((totalDoneSets / totalPlannedSets) * 100) : 0;

  // Build Exercise Rows
  const exerciseRowsHtml = dayProg.exercises.map((ex, exIdx) => {
    const muscleColor = DASHBOARD_CONFIG.muscleColors[ex.muscle] || '#e08a4a';
    const currentWeight = progress.weights[exIdx] !== undefined ? progress.weights[exIdx] : ex.defaultWeight;

    let exDoneSets = 0;
    let circlesHtml = '';
    for (let s = 0; s < ex.sets; s++) {
      const isSetDone = !!progress.sets[`${exIdx}_${s}`];
      if (isSetDone) exDoneSets++;
      circlesHtml += `
        <div class="db-set-circle ${isSetDone ? 'is-done' : ''}"
             onclick="window.toggleDbSet(${exIdx}, ${s}, '${dateKey}', ${dayProg.dayIndex})"
             title="Set ${s + 1}"
             role="button"
             tabindex="0">
          ${isSetDone ? '✓' : (s + 1)}
        </div>
      `;
    }

    const isAllDone = (exDoneSets === ex.sets);

    return `
      <div class="db-exercise-row ${isAllDone ? 'is-all-done' : ''}">
        <div class="db-ex-info">
          <div class="db-muscle-badge" style="background:${muscleColor};" title="${ex.muscle}"></div>
          <div class="db-ex-name-group">
            <span class="db-ex-name" title="${ex.name}">${ex.name}</span>
            <span class="db-ex-meta">${ex.muscle}</span>
          </div>
        </div>
        <div class="db-ex-sets-reps">${ex.sets}x${ex.reps}</div>
        <div class="db-kg-wrapper">
          <input type="number"
                 class="db-kg-input"
                 value="${currentWeight}"
                 step="0.5"
                 min="0"
                 onchange="window.updateDbExerciseWeight(${exIdx}, this.value, '${dateKey}', ${dayProg.dayIndex})"
                 aria-label="Ağırlık kg">
          <span class="db-kg-unit">kg</span>
        </div>
        <div class="db-set-circles">
          ${circlesHtml}
        </div>
      </div>
    `;
  }).join('');

  // Rest Timer Formatted String
  const timerMins = String(Math.floor(dbState.restTimer.remaining / 60)).padStart(2, '0');
  const timerSecs = String(dbState.restTimer.remaining % 60).padStart(2, '0');

  el.innerHTML = `
    <div class="db-workout-card-inner">
      <!-- Thin Progress Line At Top -->
      <div class="db-workout-progress-line" title="Antrenman İlerlemesi: %${progressPct}">
        <div class="db-workout-progress-fill" style="width: ${progressPct}%;"></div>
      </div>

      <div class="db-card-header">
        <div>
          <h2 class="db-card-title">${dayProg.fullTitle}</h2>
        </div>
        <span style="font-size:0.75rem; color:var(--db-text-muted); font-weight:600;">
          ${totalDoneSets} / ${totalPlannedSets} set
        </span>
      </div>

      <!-- Rest Timer Box -->
      <div class="db-rest-timer-box">
        <div class="db-rest-timer-left">
          <div class="db-timer-time" id="dbTimerDisplay">${timerMins}:${timerSecs}</div>
          <div class="db-timer-presets">
            <button class="db-timer-chip ${dbState.restTimer.totalSeconds===60?'active':''}" onclick="window.setDbRestTime(60)">60 sn</button>
            <button class="db-timer-chip ${dbState.restTimer.totalSeconds===90?'active':''}" onclick="window.setDbRestTime(90)">90 sn</button>
            <button class="db-timer-chip ${dbState.restTimer.totalSeconds===120?'active':''}" onclick="window.setDbRestTime(120)">2 dk</button>
          </div>
        </div>
        <div class="db-timer-actions">
          <button class="db-timer-btn" onclick="window.toggleDbRestTimer()">
            ${dbState.restTimer.isRunning ? 'Durdur' : 'Dinlenmeyi Başlat'}
          </button>
          <button class="db-timer-btn-sub" onclick="window.resetDbRestTimer()">Sıfırla</button>
        </div>
      </div>

      <!-- Exercise Rows List -->
      <div class="db-exercise-list">
        ${exerciseRowsHtml}
      </div>

      <!-- Workout Footer Summary -->
      <div class="db-workout-footer">
        <div class="db-workout-summary-text">
          Toplam <strong>${totalDoneSets}/${totalPlannedSets}</strong> set · <strong>${totalVolumeKg.toLocaleString('tr-TR')} kg</strong> tahmini hacim
        </div>
        <button class="db-btn-complete ${isCompleted ? 'is-finished' : ''}"
                onclick="window.toggleFinishWorkout('${dateKey}', ${dayProg.dayIndex})">
          ${isCompleted ? '✓ Antrenman Tamamlandı (Geri Al)' : 'Antrenmanı Bitir'}
        </button>
      </div>
    </div>
  `;
}

// Toggle Set Circle Clicked
window.toggleDbSet = function(exIdx, setIdx, dateKey, dayIndex) {
  const progress = getDayWorkoutProgress(dateKey, dayIndex);
  const key = `${exIdx}_${setIdx}`;
  const nowDone = !progress.sets[key];
  progress.sets[key] = nowDone;
  saveDayWorkoutProgress(dateKey, dayIndex, progress);

  // If set was marked done, auto start rest timer!
  if (nowDone) {
    window.startDbRestTimer();
  }

  // Also sync to appData.workoutLogs
  syncWorkoutLogEntry(dateKey, dayIndex, exIdx, progress);

  renderDbWorkoutCard();
  renderDbSummaryCards();
  renderDbWeeklyReportCard();
  renderDbMuscleMapCard();
  renderDbProgressChart();
};

window.updateDbExerciseWeight = function(exIdx, val, dateKey, dayIndex) {
  const num = parseFloat(val) || 0;
  const progress = getDayWorkoutProgress(dateKey, dayIndex);
  progress.weights[exIdx] = num;
  saveDayWorkoutProgress(dateKey, dayIndex, progress);

  syncWorkoutLogEntry(dateKey, dayIndex, exIdx, progress);
  renderDbWorkoutCard();
  renderDbWeeklyReportCard();
  renderDbProgressChart();
};

// Sync completed exercises into appData.workoutLogs
function syncWorkoutLogEntry(dateKey, dayIndex, exIdx, progress) {
  if (typeof appData === 'undefined') return;
  if (!appData.workoutLogs) appData.workoutLogs = {};
  if (!appData.workoutLogs[dateKey]) appData.workoutLogs[dateKey] = [];

  const dayProg = DASHBOARD_CONFIG.weeklyProgram.find(p => p.dayIndex === dayIndex);
  if (!dayProg) return;
  const ex = dayProg.exercises[exIdx];
  if (!ex) return;

  const currentWeight = progress.weights[exIdx] !== undefined ? progress.weights[exIdx] : ex.defaultWeight;

  // Count done sets for this exercise
  let doneCount = 0;
  for (let s = 0; s < ex.sets; s++) {
    if (progress.sets[`${exIdx}_${s}`]) doneCount++;
  }

  // Update or add in appData.workoutLogs
  const existingIdx = appData.workoutLogs[dateKey].findIndex(l => l.exercise === ex.name);
  if (doneCount > 0) {
    const entry = {
      exercise: ex.name,
      weight: currentWeight,
      inputWeight: currentWeight,
      unit: 'kg',
      reps: 8,
      sets: doneCount,
      timestamp: Date.now()
    };
    if (existingIdx >= 0) {
      appData.workoutLogs[dateKey][existingIdx] = entry;
    } else {
      appData.workoutLogs[dateKey].push(entry);
    }
  } else if (existingIdx >= 0) {
    appData.workoutLogs[dateKey].splice(existingIdx, 1);
  }

  if (typeof saveData === 'function') saveData();
}

// Finish / Undo Workout Button
window.toggleFinishWorkout = function(dateKey, dayIndex) {
  if (typeof appData === 'undefined') return;
  if (!appData.attendance) appData.attendance = {};
  if (!appData.completedDays) appData.completedDays = {};

  const wasCompleted = (appData.attendance[dateKey] === true);
  appData.attendance[dateKey] = !wasCompleted;

  if (!wasCompleted) {
    if (!appData.completedDays[dateKey]) appData.completedDays[dateKey] = {};
    appData.completedDays[dateKey].workout = true;

    // Trigger celebration confetti
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#e08a4a', '#f0b35a', '#86c19a', '#d6d0c4']
      });
    }
  } else {
    if (appData.completedDays[dateKey]) appData.completedDays[dateKey].workout = false;
  }

  if (typeof saveData === 'function') saveData();

  renderDbWeekCalendar();
  renderDbWorkoutCard();
  renderDbSummaryCards();
  renderDbWeeklyReportCard();
};

// Rest Timer Engine
window.setDbRestTime = function(sec) {
  dbState.restTimer.totalSeconds = sec;
  dbState.restTimer.remaining = sec;
  if (dbState.restTimer.isRunning) {
    window.startDbRestTimer();
  } else {
    updateTimerDisplay();
  }
};

window.startDbRestTimer = function() {
  if (dbState.restTimer.intervalId) clearInterval(dbState.restTimer.intervalId);
  dbState.restTimer.isRunning = true;
  dbState.restTimer.remaining = dbState.restTimer.totalSeconds;
  updateTimerDisplay();

  dbState.restTimer.intervalId = setInterval(() => {
    if (dbState.restTimer.remaining > 0) {
      dbState.restTimer.remaining--;
      updateTimerDisplay();
    } else {
      clearInterval(dbState.restTimer.intervalId);
      dbState.restTimer.isRunning = false;
      dbState.restTimer.intervalId = null;
      updateTimerDisplay();
      if (typeof showToast === 'function') {
        showToast('Dinlenme süresi tamamlandı! Sıradaki sete başla.', 'success');
      }
    }
  }, 1000);
};

window.toggleDbRestTimer = function() {
  if (dbState.restTimer.isRunning) {
    clearInterval(dbState.restTimer.intervalId);
    dbState.restTimer.isRunning = false;
    dbState.restTimer.intervalId = null;
    updateTimerDisplay();
  } else {
    if (dbState.restTimer.remaining <= 0) dbState.restTimer.remaining = dbState.restTimer.totalSeconds;
    dbState.restTimer.isRunning = true;
    dbState.restTimer.intervalId = setInterval(() => {
      if (dbState.restTimer.remaining > 0) {
        dbState.restTimer.remaining--;
        updateTimerDisplay();
      } else {
        clearInterval(dbState.restTimer.intervalId);
        dbState.restTimer.isRunning = false;
        dbState.restTimer.intervalId = null;
        updateTimerDisplay();
      }
    }, 1000);
  }
};

window.resetDbRestTimer = function() {
  if (dbState.restTimer.intervalId) clearInterval(dbState.restTimer.intervalId);
  dbState.restTimer.isRunning = false;
  dbState.restTimer.intervalId = null;
  dbState.restTimer.remaining = dbState.restTimer.totalSeconds;
  updateTimerDisplay();
};

function updateTimerDisplay() {
  const el = document.getElementById('dbTimerDisplay');
  if (!el) return;
  const m = String(Math.floor(dbState.restTimer.remaining / 60)).padStart(2, '0');
  const s = String(dbState.restTimer.remaining % 60).padStart(2, '0');
  el.textContent = `${m}:${s}`;
}

// --- 4. GÜNLÜK TAKİP KARTI ---
function renderDbDailyTrackers() {
  const el = document.getElementById('dbDailyTrackersCard');
  if (!el) return;

  const todayStr = getDbTodayStr();
  const trackers = getDailyTrackers(todayStr);

  // Latest Scale Weight
  let latestWeight = 78.4;
  if (typeof appData !== 'undefined' && appData.weightLog) {
    const sorted = Object.entries(appData.weightLog).sort((a,b) => b[0].localeCompare(a[0]));
    if (sorted.length > 0) latestWeight = sorted[0][1];
  }

  const waterPct = Math.min(100, Math.round((trackers.water / DASHBOARD_CONFIG.waterTargetMl) * 100));
  const proteinPct = Math.min(100, Math.round((trackers.protein / DASHBOARD_CONFIG.proteinTargetG) * 100));

  el.innerHTML = `
    <div class="db-card-header">
      <h2 class="db-card-title">Günlük takip</h2>
    </div>
    <div class="db-trackers-col">
      <!-- 1. Tartı Kaydı -->
      <div class="db-tracker-item">
        <div class="db-tracker-top">
          <span class="db-tracker-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
            Tartı kaydı
          </span>
          <span class="db-tracker-value">${latestWeight} kg</span>
        </div>
        <div class="db-scale-form">
          <input type="number" id="dbScaleInput" class="db-scale-input" placeholder="${latestWeight}" step="0.1" min="30" max="250">
          <button class="db-scale-btn" onclick="window.saveDbScaleWeight()">Kaydet</button>
        </div>
      </div>

      <!-- 2. Su Sayacı -->
      <div class="db-tracker-item">
        <div class="db-tracker-top">
          <span class="db-tracker-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6fb7b0" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            Su sayacı
          </span>
          <span class="db-tracker-value">${trackers.water} / ${DASHBOARD_CONFIG.waterTargetMl} ml</span>
        </div>
        <div class="db-progress-track">
          <div class="db-progress-fill fill-water" style="width: ${waterPct}%;"></div>
        </div>
        <div class="db-tracker-actions">
          <button class="db-tracker-btn" onclick="window.adjustDbWater(-250)">−250 ml</button>
          <button class="db-tracker-btn" onclick="window.adjustDbWater(250)">+250 ml</button>
          <button class="db-tracker-btn" onclick="window.adjustDbWater(500)">+500 ml</button>
        </div>
      </div>

      <!-- 3. Protein Sayacı -->
      <div class="db-tracker-item">
        <div class="db-tracker-top">
          <span class="db-tracker-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e08a4a" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
            Protein sayacı
          </span>
          <span class="db-tracker-value">${trackers.protein} / ${DASHBOARD_CONFIG.proteinTargetG} g</span>
        </div>
        <div class="db-progress-track">
          <div class="db-progress-fill fill-protein" style="width: ${proteinPct}%;"></div>
        </div>
        <div class="db-tracker-actions">
          <button class="db-tracker-btn" onclick="window.adjustDbProtein(-10)">−10 g</button>
          <button class="db-tracker-btn" onclick="window.adjustDbProtein(25)">+25 g</button>
          <button class="db-tracker-btn" onclick="window.adjustDbProtein(30)">+30 g</button>
        </div>
      </div>
    </div>
  `;
}

window.adjustDbWater = function(delta) {
  const todayStr = getDbTodayStr();
  const trackers = getDailyTrackers(todayStr);
  trackers.water = Math.max(0, trackers.water + delta);
  saveDailyTrackers(todayStr, trackers);
  renderDbDailyTrackers();
};

window.adjustDbProtein = function(delta) {
  const todayStr = getDbTodayStr();
  const trackers = getDailyTrackers(todayStr);
  trackers.protein = Math.max(0, trackers.protein + delta);
  saveDailyTrackers(todayStr, trackers);
  renderDbDailyTrackers();
};

window.saveDbScaleWeight = function() {
  const inp = document.getElementById('dbScaleInput');
  if (!inp || !inp.value) return;
  const val = parseFloat(inp.value);
  if (isNaN(val) || val <= 0) return;

  const todayStr = getDbTodayStr();
  if (typeof appData !== 'undefined') {
    if (!appData.weightLog) appData.weightLog = {};
    appData.weightLog[todayStr] = val;
    if (typeof saveData === 'function') saveData();
  }

  if (typeof showToast === 'function') {
    showToast(`Tartı kaydedildi: ${val} kg`, 'success');
  }

  renderDbDailyTrackers();
  renderDbSummaryCards();
  renderDbProgressChart();
};

// --- 5. DÖRT ÖZET KARTI ---
function renderDbSummaryCards() {
  const now = new Date();
  const monday = getDbMonday(now);

  // Card 1: Haftalık antrenman
  let weeklyDoneCount = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    const ds = getDbDateStr(d);
    if (typeof appData !== 'undefined' && appData.attendance && appData.attendance[ds]) {
      weeklyDoneCount++;
    }
  }
  const weeklyTarget = DASHBOARD_CONFIG.weeklyWorkoutTarget;
  const ringPct = Math.min(100, Math.round((weeklyDoneCount / weeklyTarget) * 100));
  const dashOffset = Math.round(100 - ringPct);

  const s1 = document.getElementById('dbSummary1');
  if (s1) {
    s1.innerHTML = `
      <div class="db-stat-icon-badge b-copper" title="Haftalık Antrenman Hedefi">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>
      </div>
      <div class="db-stat-label-muted">Haftalık antrenman</div>
      <div class="db-ring-wrapper">
        <div class="db-stat-big-val">${weeklyDoneCount}/${weeklyTarget}</div>
        <svg class="db-ring-svg" viewBox="0 0 36 36">
          <path class="db-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="db-ring-fill" stroke-dashoffset="${dashOffset}" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
      </div>
    `;
  }

  // Card 2: Mevcut kilo
  let curWeight = 78.4;
  let diffStr = '—';
  let diffIsPositive = true;
  if (typeof appData !== 'undefined' && appData.weightLog) {
    const sorted = Object.entries(appData.weightLog).sort((a,b) => b[0].localeCompare(a[0]));
    if (sorted.length > 0) curWeight = sorted[0][1];
    if (sorted.length > 1) {
      const diff = (sorted[0][1] - sorted[1][1]).toFixed(1);
      diffStr = `${diff >= 0 ? '+' : ''}${diff} kg`;
      diffIsPositive = (diff <= 0); // losing weight or maintaining is green
    }
  }

  const s2 = document.getElementById('dbSummary2');
  if (s2) {
    s2.innerHTML = `
      <div class="db-stat-icon-badge b-green" title="Mevcut Kilo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
      </div>
      <div class="db-stat-label-muted">Mevcut kilo</div>
      <div style="display:flex;align-items:baseline;gap:8px;">
        <span class="db-stat-big-val">${curWeight} <small style="font-size:0.9rem;color:var(--db-text-muted);">kg</small></span>
        <span class="db-trend-pill" style="color:${diffIsPositive ? 'var(--db-green)' : 'var(--db-rose)'};">${diffStr}</span>
      </div>
      <!-- Mini Sparkline SVG -->
      <svg class="db-mini-sparkline" viewBox="0 0 100 24" preserveAspectRatio="none">
        <path d="M0,18 Q20,12 40,15 T80,8 T100,6" fill="none" stroke="var(--db-green)" stroke-width="2"/>
      </svg>
    `;
  }

  // Card 3: Tutarlılık (Son 4 hafta)
  let consistencyPct = 85;
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
  let attendedDays = 0;
  for (let i = 0; i < 28; i++) {
    const d = new Date(fourWeeksAgo); d.setDate(d.getDate() + i);
    const ds = getDbDateStr(d);
    if (typeof appData !== 'undefined' && appData.attendance && appData.attendance[ds]) attendedDays++;
  }
  consistencyPct = Math.min(100, Math.round((attendedDays / 20) * 100)) || 85; // 20 target in 4 weeks

  const s3 = document.getElementById('dbSummary3');
  if (s3) {
    s3.innerHTML = `
      <div class="db-stat-icon-badge b-amber" title="Tutarlılık Oranı">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div class="db-stat-label-muted">Son 4 hafta tutarlılık</div>
      <div class="db-stat-big-val">%${consistencyPct}</div>
      <!-- Mini 4-week bars -->
      <div class="db-mini-bars">
        <div class="db-mini-bar is-full" style="height: 70%;" title="Hafta 1: %70"></div>
        <div class="db-mini-bar is-full" style="height: 90%;" title="Hafta 2: %90"></div>
        <div class="db-mini-bar is-full" style="height: 80%;" title="Hafta 3: %80"></div>
        <div class="db-mini-bar is-full" style="height: 100%;" title="Hafta 4: %100"></div>
      </div>
    `;
  }

  // Card 4: Güç İlerlemesi
  let bestProgExName = 'Barbell Bench Press';
  let bestProgAmount = 10;
  let bestProgDaysAgo = 3;

  if (typeof computeExerciseStats === 'function') {
    const allStats = computeExerciseStats();
    let maxProg = 0;
    allStats.forEach(s => {
      const diff = s.currentWeight - s.baselineWeight;
      if (diff > maxProg) {
        maxProg = diff;
        bestProgExName = s.name;
        bestProgAmount = diff;
        const prDate = new Date(s.lastUpdated + 'T00:00:00');
        bestProgDaysAgo = Math.max(0, Math.round((new Date() - prDate) / 86400000));
      }
    });
  }

  const s4 = document.getElementById('dbSummary4');
  if (s4) {
    s4.innerHTML = `
      <div class="db-stat-icon-badge b-copper" title="Güç Gelişimi">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      </div>
      <div class="db-stat-label-muted">Güç ilerlemesi</div>
      <div class="db-stat-big-val">+${bestProgAmount} <small style="font-size:0.9rem;color:var(--db-text-muted);">kg</small></div>
      <div class="db-progress-track">
        <div class="db-progress-fill" style="width: 85%; background:linear-gradient(90deg, var(--db-copper), var(--db-amber));"></div>
      </div>
      <div class="db-strength-detail-text" title="${bestProgExName} (${bestProgDaysAgo} gün önce)">
        ${bestProgExName} · ${bestProgDaysAgo === 0 ? 'Bugün' : bestProgDaysAgo + ' gün önce'}
      </div>
    `;
    s4.onclick = () => {
      if (typeof showStrengthDetails === 'function') showStrengthDetails(bestProgExName);
    };
  }
}

// --- 6. HAFTALIK RAPOR KARTI (2x2 Düzen) ---
function renderDbWeeklyReportCard() {
  const el = document.getElementById('dbWeeklyReportCard');
  if (!el) return;

  const now = new Date();
  const monday = getDbMonday(now);

  let thisWorkouts = 0;
  let thisVolume = 0;
  const muscleSets = {};
  let bestPR = 105;
  let bestPRExercise = 'Barbell Bench Press';

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(d.getDate() + i);
    const ds = getDbDateStr(d);
    if (typeof appData !== 'undefined' && appData.attendance && appData.attendance[ds]) {
      thisWorkouts++;
    }
    const logs = (typeof appData !== 'undefined' && appData.workoutLogs && appData.workoutLogs[ds]) || [];
    logs.forEach(l => {
      const w = l.weight || 0;
      const r = l.reps || 8;
      const s = l.sets || 1;
      thisVolume += (w * r * s);
      if (w > bestPR) {
        bestPR = w;
        bestPRExercise = l.exercise || 'Bench Press';
      }
      // Map muscle group
      const exLower = (l.exercise || '').toLowerCase();
      let m = 'Göğüs';
      if (exLower.includes('lat') || exLower.includes('row') || exLower.includes('pull')) m = 'Sırt';
      else if (exLower.includes('press') || exLower.includes('lateral') || exLower.includes('face')) m = 'Omuz';
      else if (exLower.includes('curl')) m = 'Biceps';
      else if (exLower.includes('tricep') || exLower.includes('pushdown')) m = 'Triceps';
      else if (exLower.includes('squat') || exLower.includes('leg') || exLower.includes('deadlift')) m = 'Bacak';
      else if (exLower.includes('crunch') || exLower.includes('plank')) m = 'Karın';
      muscleSets[m] = (muscleSets[m] || 0) + s;
    });
  }

  // Fallback sample values if early week
  if (thisVolume === 0) thisVolume = 28450;
  const sortedMuscles = Object.entries(muscleSets).sort((a,b) => b[1] - a[1]);
  const topMuscleStr = sortedMuscles.length > 0 ? `${sortedMuscles[0][0]} (${sortedMuscles[0][1]} set)` : 'Göğüs (14 set)';

  el.innerHTML = `
    <div class="db-card-header">
      <h2 class="db-card-title">Haftalık rapor</h2>
      <span style="font-size:0.75rem; color:var(--db-text-muted); font-weight:600;">Bu Hafta</span>
    </div>
    <div class="db-report-grid">
      <!-- 1. Haftalık Hedef -->
      <div class="db-report-box">
        <span class="db-report-label">Haftalık hedef</span>
        <span class="db-report-val">${thisWorkouts} / ${DASHBOARD_CONFIG.weeklyWorkoutTarget}</span>
        <span class="db-report-sub">${thisWorkouts >= DASHBOARD_CONFIG.weeklyWorkoutTarget ? '✓ Hedef tamamlandı' : 'Hedefe devam'}</span>
      </div>

      <!-- 2. Toplam Hacim -->
      <div class="db-report-box">
        <span class="db-report-label">Toplam hacim</span>
        <span class="db-report-val">${Math.round(thisVolume).toLocaleString('tr-TR')} <small style="font-size:0.75rem;">kg</small></span>
        <span class="db-report-sub">+%12 geçen haftaya göre</span>
      </div>

      <!-- 3. En Çok Çalışılan Kas -->
      <div class="db-report-box">
        <span class="db-report-label">En çok çalışılan kas</span>
        <span class="db-report-val" style="font-size:1rem;">${topMuscleStr}</span>
        <span class="db-report-sub">Optimal gelişim</span>
      </div>

      <!-- 4. En Yüksek PR -->
      <div class="db-report-box">
        <span class="db-report-label">En yüksek PR</span>
        <span class="db-report-val">${bestPR} <small style="font-size:0.75rem;">kg</small></span>
        <span class="db-report-sub" style="color:var(--db-copper);">${bestPRExercise}</span>
      </div>
    </div>
  `;
}

// --- 7. KAS HARİTASI KARTI (VÜCUT FİGÜRÜ YOK) ---
function renderDbMuscleMapCard() {
  const el = document.getElementById('dbMuscleMapCard');
  if (!el) return;

  const now = new Date();
  const monday = getDbMonday(now);
  const todayStr = getDbTodayStr();

  let totalSets = 0;
  const uniqueExercises = new Set();
  const muscleDistribution = {
    'Göğüs': 0,
    'Sırt': 0,
    'Omuz': 0,
    'Biceps': 0,
    'Triceps': 0,
    'Bacak': 0,
    'Karın': 0
  };

  const processLog = (l) => {
    const s = l.sets || 1;
    totalSets += s;
    if (l.exercise) uniqueExercises.add(l.exercise);

    const exLower = (l.exercise || '').toLowerCase();
    if (exLower.includes('bench') || exLower.includes('chest') || exLower.includes('fly') || exLower.includes('crossover')) muscleDistribution['Göğüs'] += s;
    else if (exLower.includes('lat') || exLower.includes('row') || exLower.includes('pull')) muscleDistribution['Sırt'] += s;
    else if (exLower.includes('press') || exLower.includes('lateral') || exLower.includes('face') || exLower.includes('shoulder')) muscleDistribution['Omuz'] += s;
    else if (exLower.includes('bicep') || exLower.includes('curl')) muscleDistribution['Biceps'] += s;
    else if (exLower.includes('tricep') || exLower.includes('pushdown') || exLower.includes('extension')) muscleDistribution['Triceps'] += s;
    else if (exLower.includes('squat') || exLower.includes('leg') || exLower.includes('deadlift') || exLower.includes('thrust') || exLower.includes('calf')) muscleDistribution['Bacak'] += s;
    else if (exLower.includes('crunch') || exLower.includes('plank') || exLower.includes('bend')) muscleDistribution['Karın'] += s;
    else muscleDistribution['Göğüs'] += s;
  };

  if (dbState.muscleRange === 'today') {
    const logs = (typeof appData !== 'undefined' && appData.workoutLogs && appData.workoutLogs[todayStr]) || [];
    logs.forEach(processLog);
    // If empty today, provide sample display
    if (totalSets === 0) {
      muscleDistribution['Göğüs'] = 8;
      muscleDistribution['Omuz'] = 5;
      muscleDistribution['Triceps'] = 4;
      totalSets = 17;
      uniqueExercises.add('Incline Dumbbell Press');
      uniqueExercises.add('Barbell Bench Press');
      uniqueExercises.add('Lateral Raise');
      uniqueExercises.add('Triceps Pushdown');
    }
  } else {
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday); d.setDate(d.getDate() + i);
      const ds = getDbDateStr(d);
      const logs = (typeof appData !== 'undefined' && appData.workoutLogs && appData.workoutLogs[ds]) || [];
      logs.forEach(processLog);
    }
    // If empty this week, provide full split sample display
    if (totalSets === 0) {
      muscleDistribution['Göğüs'] = 14;
      muscleDistribution['Sırt'] = 12;
      muscleDistribution['Bacak'] = 16;
      muscleDistribution['Omuz'] = 10;
      muscleDistribution['Biceps'] = 8;
      muscleDistribution['Triceps'] = 6;
      muscleDistribution['Karın'] = 6;
      totalSets = 72;
      for (let k = 0; k < 18; k++) uniqueExercises.add('Egzersiz ' + k);
    }
  }

  // Sorted muscles
  const activeMuscles = Object.entries(muscleDistribution)
    .filter(([_, count]) => count > 0)
    .sort((a,b) => b[1] - a[1]);

  const maxMuscleSets = activeMuscles.length > 0 ? activeMuscles[0][1] : 1;

  const rowsHtml = activeMuscles.map(([mName, count]) => {
    const color = DASHBOARD_CONFIG.muscleColors[mName] || '#e08a4a';
    const pct = Math.min(100, Math.round((count / maxMuscleSets) * 100));
    return `
      <div class="db-muscle-row">
        <div class="db-m-left">
          <div class="db-m-color-sq" style="background:${color};"></div>
          <span class="db-m-name">${mName}</span>
        </div>
        <div class="db-m-bar-track">
          <div class="db-m-bar-fill" style="width: ${pct}%; background:${color};"></div>
        </div>
        <div class="db-m-sets-count">${count} set</div>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <div class="db-card-header">
      <h2 class="db-card-title">Kas dağılımı</h2>
      <div class="db-toggle-group">
        <button class="db-toggle-btn ${dbState.muscleRange==='today'?'active':''}" onclick="window.setDbMuscleRange('today')">Bugün</button>
        <button class="db-toggle-btn ${dbState.muscleRange==='week'?'active':''}" onclick="window.setDbMuscleRange('week')">Bu hafta</button>
      </div>
    </div>

    <!-- Top Total Sets & Exercises -->
    <div class="db-muscle-totals">
      <div class="db-muscle-total-item">
        <span class="db-muscle-big-num">${totalSets}</span>
        <span class="db-muscle-total-label">Toplam set</span>
      </div>
      <div style="width:1px; height:36px; background:var(--db-line);"></div>
      <div class="db-muscle-total-item">
        <span class="db-muscle-big-num is-ex">${uniqueExercises.size}</span>
        <span class="db-muscle-total-label">Egzersiz</span>
      </div>
    </div>

    <!-- Muscle List Rows -->
    <div class="db-muscle-rows">
      ${rowsHtml}
    </div>
  `;
}

window.setDbMuscleRange = function(range) {
  dbState.muscleRange = range;
  renderDbMuscleMapCard();
};

// --- 8. İLERLEME ÖZETİ (KİLO / HACİM GRAFİĞİ) ---
function renderDbProgressChart() {
  const el = document.getElementById('dbProgressChartCard');
  if (!el) return;

  el.innerHTML = `
    <div class="db-card-header">
      <h2 class="db-card-title">İlerleme özeti</h2>
      <div class="db-toggle-group">
        <button class="db-toggle-btn ${dbState.chartType==='weight'?'active':''}" onclick="window.setDbChartType('weight')">Kilo</button>
        <button class="db-toggle-btn ${dbState.chartType==='volume'?'active':''}" onclick="window.setDbChartType('volume')">Hacim</button>
      </div>
    </div>
    <div class="db-chart-canvas-container" id="dbChartContainer">
      <canvas id="dbProgressCanvas"></canvas>
    </div>
  `;

  // Draw appropriate chart
  setTimeout(() => {
    if (dbState.chartType === 'weight') {
      drawDbWeightChart();
    } else {
      drawDbVolumeChart();
    }
  }, 40);
}

window.setDbChartType = function(type) {
  dbState.chartType = type;
  renderDbProgressChart();
};

// Draw Weight Chart on Canvas
function drawDbWeightChart() {
  const canvas = document.getElementById('dbProgressCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  // Gather weights
  let weights = [];
  if (typeof appData !== 'undefined' && appData.weightLog) {
    weights = Object.entries(appData.weightLog).map(([d, val]) => ({ date: d, weight: val }));
  }
  if (weights.length < 2) {
    weights = DASHBOARD_CONFIG.sampleData.recentWeights;
  }
  weights.sort((a,b) => a.date.localeCompare(b.date));

  const pad = { top: 30, right: 30, bottom: 40, left: 50 };
  const cW = w - pad.left - pad.right;
  const cH = h - pad.top - pad.bottom;

  ctx.clearRect(0, 0, w, h);

  const targetMin = DASHBOARD_CONFIG.weightTargetRange.min;
  const targetMax = DASHBOARD_CONFIG.weightTargetRange.max;

  const allVals = weights.map(x => x.weight).concat([targetMin, targetMax]);
  let minVal = Math.floor(Math.min(...allVals) - 1.5);
  let maxVal = Math.ceil(Math.max(...allVals) + 1.5);
  const valRange = maxVal - minVal;

  const getY = (val) => pad.top + cH - ((val - minVal) / valRange) * cH;
  const getX = (idx) => pad.left + (cW / Math.max(weights.length - 1, 1)) * idx;

  // 1. Draw Target Weight Green Transparent Band
  const targetTopY = getY(targetMax);
  const targetBottomY = getY(targetMin);
  ctx.fillStyle = 'rgba(134, 193, 154, 0.12)';
  ctx.fillRect(pad.left, targetTopY, cW, targetBottomY - targetTopY);

  // Target Band Border Lines
  ctx.strokeStyle = 'rgba(134, 193, 154, 0.4)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(pad.left, targetTopY);
  ctx.lineTo(pad.left + cW, targetTopY);
  ctx.moveTo(pad.left, targetBottomY);
  ctx.lineTo(pad.left + cW, targetBottomY);
  ctx.stroke();
  ctx.setLineDash([]);

  // Label for target band
  ctx.font = '10px "Manrope", sans-serif';
  ctx.fillStyle = '#86c19a';
  ctx.textAlign = 'right';
  ctx.fillText(`Hedef Aralığı (${targetMin}-${targetMax} kg)`, pad.left + cW - 4, targetTopY - 6);

  // 2. Y-Axis Grid Lines & Labels
  ctx.font = '10px "Unbounded", sans-serif';
  ctx.fillStyle = '#8d867a';
  ctx.textAlign = 'right';
  const ySteps = 4;
  for (let s = 0; s <= ySteps; s++) {
    const val = minVal + (valRange / ySteps) * s;
    const y = getY(val);
    ctx.strokeStyle = '#2a2723';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + cW, y);
    ctx.stroke();
    ctx.fillText(`${val.toFixed(0)} kg`, pad.left - 8, y + 3);
  }

  // 3. X-Axis Date Labels
  ctx.font = '11px "Manrope", sans-serif';
  ctx.fillStyle = '#8d867a';
  ctx.textAlign = 'center';
  weights.forEach((item, i) => {
    const x = getX(i);
    const d = new Date(item.date + 'T00:00:00');
    const label = d.toLocaleDateString('tr-TR', { day:'numeric', month:'short' });
    ctx.fillText(label, x, h - 14);
  });

  // 4. Gradient Fill Under Line
  const points = weights.map((item, i) => ({ x: getX(i), y: getY(item.weight) }));
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
  grad.addColorStop(0, 'rgba(224, 138, 74, 0.28)');
  grad.addColorStop(1, 'rgba(224, 138, 74, 0.0)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, pad.top + cH);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, pad.top + cH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // 5. Copper Line
  ctx.beginPath();
  ctx.strokeStyle = '#e08a4a';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  // 6. Points (with Ring on the last point)
  points.forEach((p, i) => {
    const isLast = (i === points.length - 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, isLast ? 5 : 4, 0, Math.PI * 2);
    ctx.fillStyle = '#151412';
    ctx.fill();
    ctx.strokeStyle = '#e08a4a';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Ringed Outer Glow on Last Point
    if (isLast) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(224, 138, 74, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Tooltip/Value badge above last point
      ctx.font = '600 11px "Unbounded", sans-serif';
      ctx.fillStyle = '#e08a4a';
      ctx.textAlign = 'center';
      ctx.fillText(`${weights[i].weight} kg`, p.x, p.y - 16);
    }
  });
}

// Draw Volume Chart (Last 6 Weeks Bar Chart)
function drawDbVolumeChart() {
  const container = document.getElementById('dbChartContainer');
  if (!container) return;

  const vols = DASHBOARD_CONFIG.sampleData.weeklyVolumes;
  const maxVol = Math.max(...vols.map(v => v.volume));

  const barsHtml = vols.map(v => {
    const pct = Math.max(12, Math.round((v.volume / maxVol) * 100));
    return `
      <div class="db-vol-bar-group">
        <span class="db-vol-val-label">${(v.volume / 1000).toFixed(1)}k</span>
        <div class="db-vol-bar" style="height: ${pct}%;" title="${v.week}: ${v.volume.toLocaleString('tr-TR')} kg"></div>
        <span class="db-vol-week-label">${v.week}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="db-volume-bars-container">
      ${barsHtml}
    </div>
  `;
}

// ==========================================================================
// 7. INITIALIZATION & APP.JS INTEGRATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // If starting on dashboard, render
  if (typeof currentPage === 'undefined' || currentPage === 'dashboard') {
    setTimeout(window.renderZyroDashboard, 60);
  }
});

// Window resize re-draws canvas chart
let dbResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(dbResizeTimer);
  dbResizeTimer = setTimeout(() => {
    if (typeof currentPage === 'undefined' || currentPage === 'dashboard') {
      if (dbState.chartType === 'weight') drawDbWeightChart();
    }
  }, 150);
});
