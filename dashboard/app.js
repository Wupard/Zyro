/* ============================================================
   Zyro Panel v3 — React root + app shell
   Mounts inside #zyroDashboardRoot and re-renders from appData.
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;
  const React = Z.React;
  const ReactDOM = Z.ReactDOM;

  function App(props) {
    const model = props.model;
    const S = model.S;
    return html`<${React.Fragment}>
      <${Z.IconSprite}/>
      <${Z.Rail} model=${model} onNavigate=${Z.go}/>
      <main>
        <${Z.Header} model=${model}/>
        <div className="grid">
          <${Z.Hero} model=${model} onStart=${Z.startWorkout}/>
          <${Z.WeeklyGoal} model=${model}/>
          <${Z.StatCard} stat=${model.stats.weight} color="#8fb3cc"
            emptyText=${S.emptyWeight} actionLabel=${S.addWeight} onAction=${Z.addWeight}/>
          <${Z.StatCard} stat=${model.stats.consistency} color="#dcc7a8"
            emptyText=${S.emptyConsistency} actionLabel=${S.addWorkout} onAction=${Z.goWorkouts}/>
          <${Z.StatCard} stat=${model.stats.strength} color="#8fb3cc"
            emptyText=${S.emptyStrength} actionLabel=${S.addWorkout} onAction=${Z.goWorkouts}/>
          <${Z.ProgressChart} model=${model} onAddWeight=${Z.addWeight} onAddWorkout=${Z.goWorkouts}/>
          <${Z.Records} model=${model} onAddWorkout=${Z.goWorkouts}/>
          <${Z.Heatmap} model=${model} onAddWorkout=${Z.goWorkouts}/>
        </div>
      </main>
    </${React.Fragment}>`;
  }

  let root = null;

  Z.go = function (page) {
    try {
      if (typeof window.switchPage === 'function') window.switchPage(page);
      else if (typeof window.navigateTo === 'function') window.navigateTo(page);
    } catch (e) { /* ignore */ }
  };

  Z.goWorkouts = function () { Z.go('workouts'); };

  Z.startWorkout = function (tab) {
    try { if (tab) currentWorkoutTab = tab; } catch (e) { /* ignore */ }
    Z.go('workouts');
  };

  Z.addWeight = function () {
    Z.go('progress');
    setTimeout(function () {
      const input = document.getElementById('weightInput');
      if (!input) return;
      try { input.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { /* ignore */ }
      input.focus({ preventScroll: true });
    }, 160);
  };

  Z.sync = function () {
    const page = document.getElementById('pageDashboard');
    if (!page || !page.classList.contains('active')) {
      document.body.classList.remove('zyro-dash-active');
      return;
    }
    document.body.classList.add('zyro-dash-active');
    const host = document.getElementById('zyroDashboardRoot');
    if (!host || !ReactDOM) return;
    if (!root) root = ReactDOM.createRoot(host);

    const model = Z.buildModel();
    root.render(html`<${App} model=${model}/>`);
  };

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () { Z.sync(); }, 0);
  });
})();
