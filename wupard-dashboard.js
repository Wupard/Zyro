/* ================================================
   WUPARD Dashboard — JS Controller
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  renderSetsTable();
  renderGoals();
  renderActivities();
  renderWeeklyChart();
  animateBodyFatRing();
});

// =============================================
// NAVIGATION
// =============================================
function initNavigation() {
  document.querySelectorAll('.wp-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      document.querySelectorAll('.wp-nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      document.querySelectorAll('.wp-page').forEach(p => p.style.display = 'none');
      const targetPage = document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1));
      if (targetPage) targetPage.style.display = 'block';
      document.getElementById('wpSidebar').classList.remove('open');
      document.getElementById('wpOverlay').classList.remove('show');
    });
  });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const sidebar = document.getElementById('wpSidebar');
  const overlay = document.getElementById('wpOverlay');

  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
}

// =============================================
// SETS TABLE DATA
// =============================================
function renderSetsTable() {
  const tbody = document.getElementById('setsTableBody');
  if (!tbody) return;

  const data = [
    { date: 'Jul 22', exercise: 'Barbell Bench Press', sets: 3, reps: 10, weight: '80 kg', fatigue: 72, active: true },
    { date: 'Jul 22', exercise: 'Incline Bench Press', sets: 3, reps: 12, weight: '55 kg', fatigue: 58 },
    { date: 'Jul 20', exercise: 'Squat', sets: 4, reps: 8, weight: '100 kg', fatigue: 85 },
    { date: 'Jul 20', exercise: 'Romanian Deadlift', sets: 3, reps: 10, weight: '90 kg', fatigue: 78 },
    { date: 'Jul 18', exercise: 'Lat Pulldown', sets: 3, reps: 12, weight: '65 kg', fatigue: 52 },
    { date: 'Jul 18', exercise: 'Seated Row Machine', sets: 3, reps: 10, weight: '70 kg', fatigue: 60 },
    { date: 'Jul 16', exercise: 'Cable Shoulder', sets: 3, reps: 12, weight: '20 kg', fatigue: 45 },
  ];

  tbody.innerHTML = data.map(row => `
    <tr class="${row.active ? 'active-row' : ''}">
      <td>${row.date}</td>
      <td style="font-weight:600;color:var(--text-white)">${row.exercise}</td>
      <td class="accent-val">${row.sets}</td>
      <td>${row.reps}</td>
      <td style="font-weight:700">${row.weight}</td>
      <td>
        <div class="fatigue-bar">
          <div class="fatigue-bar-fill" style="width:${row.fatigue}%;${row.fatigue > 75 ? 'background:var(--red)' : row.fatigue > 55 ? 'background:var(--yellow)' : 'background:var(--accent)'}"></div>
        </div>
      </td>
    </tr>
  `).join('');
}

// =============================================
// GOALS
// =============================================
function renderGoals() {
  const container = document.getElementById('goalsContainer');
  if (!container) return;

  const goals = [
    { text: 'Weight Target: 77 kg', deadline: 'Jul 31', completed: false },
    { text: 'Run 10km under 50 min', deadline: 'Jul 28', completed: false },
    { text: 'Improve Bench Press to 90kg', deadline: 'Aug 15', completed: false },
    { text: 'Complete 20 sessions this month', deadline: 'Jul 31', completed: true },
    { text: 'Log body weight daily', deadline: 'Ongoing', completed: true },
  ];

  container.innerHTML = goals.map((goal, i) => `
    <div class="wp-goal-item ${goal.completed ? 'completed' : ''}">
      <div class="wp-checkbox ${goal.completed ? 'checked' : ''}" data-goal="${i}" onclick="toggleGoal(this)">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <span class="wp-goal-text">${goal.text}</span>
      <span class="wp-goal-deadline">${goal.deadline}</span>
    </div>
  `).join('');
}

function toggleGoal(el) {
  el.classList.toggle('checked');
  el.closest('.wp-goal-item').classList.toggle('completed');
}

// =============================================
// RECENT ACTIVITIES
// =============================================
function renderActivities() {
  const container = document.getElementById('activitiesContainer');
  if (!container) return;

  const activities = [
    { name: 'Chest & Shoulders', detail: '8 exercises • 24 sets', time: 'Today', icon: 'chest' },
    { name: 'Leg Day', detail: '6 exercises • 20 sets', time: 'Yesterday', icon: 'legs' },
    { name: 'Back & Triceps', detail: '9 exercises • 27 sets', time: '2 days ago', icon: 'back' },
    { name: 'Body Weight Logged', detail: '78.4 kg recorded', time: '3 days ago', icon: 'weight' },
    { name: 'Full Body Session', detail: '12 exercises • 36 sets', time: '4 days ago', icon: 'full' },
  ];

  const icons = {
    chest: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 6.5h11M6.5 17.5h11M12 2v4M12 18v4M4.5 8.5v7M19.5 8.5v7"/></svg>',
    legs: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4v16M18 4v16M6 12h12"/></svg>',
    back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    weight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>',
    full: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
  };

  container.innerHTML = activities.map(a => `
    <div class="wp-activity-item">
      <div class="wp-activity-icon">${icons[a.icon]}</div>
      <div class="wp-activity-info">
        <div class="wp-activity-name">${a.name}</div>
        <div class="wp-activity-detail">${a.detail}</div>
      </div>
      <div class="wp-activity-time">${a.time}</div>
    </div>
  `).join('');
}

// =============================================
// WEEKLY CHART (Chart.js)
// =============================================
function renderWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Sets Trained',
        data: [18, 0, 24, 0, 22, 28, 0],
        borderColor: '#D45500',
        backgroundColor: 'rgba(212, 85, 0, 0.08)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#D45500',
        pointBorderColor: '#000',
        pointBorderWidth: 2,
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#111',
          titleColor: '#D45500',
          bodyColor: '#fff',
          borderColor: '#D45500',
          borderWidth: 1,
          titleFont: { weight: '800', size: 11 },
          bodyFont: { weight: '600', size: 12 },
          padding: 10,
          displayColors: false,
        }
      },
      scales: {
        x: {
          grid: { color: '#1E1E1E', drawBorder: false },
          ticks: {
            color: '#666',
            font: { size: 10, weight: '700', family: 'Inter' },
            padding: 8
          },
          border: { display: false }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#1E1E1E', drawBorder: false },
          ticks: {
            color: '#666',
            font: { size: 10, weight: '600', family: 'Inter' },
            padding: 8,
            stepSize: 10
          },
          border: { display: false }
        }
      }
    }
  });
}

// =============================================
// BODY FAT RING ANIMATION
// =============================================
function animateBodyFatRing() {
  const ring = document.getElementById('bodyFatRing');
  if (!ring) return;

  const circumference = 2 * Math.PI * 60; // r=60
  const percent = 14.2 / 30; // 14.2% out of 30% max
  const offset = circumference - (percent * circumference);

  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;

  requestAnimationFrame(() => {
    setTimeout(() => {
      ring.style.strokeDashoffset = offset;
    }, 300);
  });
}
