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

  // ---- Quick access — direct links without opening the main menu ----
  function QuickAccess(props) {
    const S = props.model.S;
    const links = [
      { page: 'workouts', key: 'workouts', icon: 'i-dumb', color: '#8fb3cc' },
      { page: 'posture', key: 'posture', icon: 'i-user', color: '#dcc7a8' },
      { page: 'diet', key: 'diet', icon: 'i-fork', color: '#9ecb8f' },
      { page: 'progress', key: 'weight', icon: 'i-trend', color: '#c99a9a' }
    ];
    return html`<section className="p s12 qa" aria-label=${S.quickAccess}>
      <div className="lab">${S.quickAccess}</div>
      <div className="qa-grid">
        ${links.map(function (l) {
          return html`<button type="button" className="qa-btn" key=${l.page}
            style=${{ '--c': l.color }}
            onClick=${function () { Z.go(l.page); }}>
            <span className="qa-ic">
              <svg className="i" aria-hidden="true" focusable="false"><use href=${'#' + l.icon}/></svg>
            </span>
            <span className="qa-tx">${S.quick[l.key]}</span>
            <svg className="qa-go" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>`;
        })}
      </div>
    </section>`;
  }

  // ---- Latest updates — 4 most recent entries + "View all" ----
  function UpdatesFeed(props) {
    const S = props.model.S;
    const updates = (props.model.updates || []);
    return html`<section className="p s12 uf" aria-label=${S.latestUpdates}>
      <div className="lab">
        <span>${S.latestUpdates}</span>
        <button type="button" className="uf-viewall" onClick=${function () { Z.go('updates'); }}>
          ${S.viewAll}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      ${updates.length
        ? html`<div className="uf-list">
            ${updates.map(function (u) {
              return html`<button type="button" className="uf-item" key=${u.id}
                onClick=${function () { Z.go('updates'); }}>
                <span className="uf-dot">
                  <svg className="i" style=${{ width: 15, height: 15 }} aria-hidden="true" focusable="false"><use href="#i-spark"/></svg>
                </span>
                <span className="uf-body">
                  <b>${u.title || S.latestUpdates}</b>
                  ${u.summary ? html`<small>${u.summary}</small>` : null}
                  ${u.dateLabel ? html`<em>${u.dateLabel}</em>` : null}
                </span>
              </button>`;
            })}
          </div>`
        : html`<${Z.EmptyState} compact text=${S.noUpdates} action=${S.viewAll}
            onAction=${function () { Z.go('updates'); }}/>`}
    </section>`;
  }

  Z.QuickAccess = QuickAccess;
  Z.UpdatesFeed = UpdatesFeed;

  function App(props) {
    const model = props.model;
    const S = model.S;
    return html`<${React.Fragment}>
      <${Z.IconSprite}/>
      <main>
        <${Z.Header} model=${model}/>
        <div className="grid">
          <${Z.Hero} model=${model} onStart=${Z.startWorkout}/>
          <${Z.WeeklyGoal} model=${model}/>
          <${Z.QuickAccess} model=${model}/>
          <${Z.StatCard} stat=${model.stats.weight} color="#8fb3cc"
            emptyText=${S.emptyWeight} actionLabel=${S.addWeight} onAction=${Z.addWeight}/>
          <${Z.StatCard} stat=${model.stats.consistency} color="#dcc7a8"
            emptyText=${S.emptyConsistency} actionLabel=${S.addWorkout} onAction=${Z.goWorkouts}/>
          <${Z.StatCard} stat=${model.stats.strength} color="#8fb3cc"
            emptyText=${S.emptyStrength} actionLabel=${S.addWorkout} onAction=${Z.goWorkouts}/>
          <${Z.ProgressChart} model=${model} onAddWeight=${Z.addWeight} onAddWorkout=${Z.goWorkouts}/>
          <${Z.Records} model=${model} onAddWorkout=${Z.goWorkouts}/>
          <${Z.Heatmap} model=${model} onAddWorkout=${Z.goWorkouts}/>
          <${Z.UpdatesFeed} model=${model}/>
        </div>
      </main>
    </${React.Fragment}>`;
  }

  let root = null;
  let syncFrame = 0;

  Z.go = function (page) {
    try {
      if (typeof window.switchPage === 'function') window.switchPage(page);
      else if (typeof window.navigateTo === 'function') window.navigateTo(page);
    } catch (e) { /* ignore */ }
  };

  Z.goWorkouts = function () { Z.go('workouts'); };

  Z.startWorkout = function (tab) {
    try { if (tab) currentWorkoutTab = tab; } catch (e) { /* ignore */ }
    // Make sure the Workouts page opens on the same day the hero is showing.
    try { if (window.ZyroWorkouts && window.ZyroWorkouts.openDay) window.ZyroWorkouts.openDay(tab); } catch (e) { /* ignore */ }
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

  function renderDashboard() {
    const host = document.getElementById('zyroDashboardRoot');
    if (!host || !ReactDOM) return;
    if (!root) root = ReactDOM.createRoot(host);

    const model = Z.buildModel();
    root.render(html`<${App} model=${model}/>`);
  }

  Z.sync = function () {
    const page = document.getElementById('pageDashboard');
    if (!page || !page.classList.contains('active')) {
      if (syncFrame) { cancelAnimationFrame(syncFrame); syncFrame = 0; }
      document.body.classList.remove('zyro-dash-active');
      return;
    }
    document.body.classList.add('zyro-dash-active');
    // Several legacy helpers call sync back to back (stats, muscle map,
    // refresh-all). Coalesce them into one render per animation frame.
    if (syncFrame) return;
    syncFrame = requestAnimationFrame(function () {
      syncFrame = 0;
      const active = document.getElementById('pageDashboard');
      if (active && active.classList.contains('active')) renderDashboard();
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () { Z.sync(); }, 0);
  });
})();
