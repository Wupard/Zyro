/* ============================================================
   Zyro Panel v3 — left rail, active page and level / XP box
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  const ITEMS = [
    ['dashboard', 'i-grid'],
    ['workouts', 'i-dumb'],
    ['progress', 'i-trend'],
    ['diet', 'i-fork'],
    ['posture', 'i-user'],
    ['calculators', 'i-calc'],
    ['leaderboard', 'i-cup'],
    ['notes', 'i-note']
  ];

  function Rail(props) {
    const model = props.model;
    const S = model.S;
    const level = model.level;
    return html`<aside className="rail">
      <div className="brand">
        <svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
          <path d="M4 4h20L13 12z" fill="#8fb3cc"/>
          <path d="M24 4v6L9 24H4v-6z" fill="#dcc7a8"/>
          <path d="M9 24h15v-6l-6 3z" fill="#8fb3cc" opacity=".55"/>
        </svg>
        <span>Zyro</span>
      </div>
      <nav className="nav" aria-label=${S.navLabel}>
        ${ITEMS.map(function (item) {
          const active = item[0] === 'dashboard';
          return html`<a key=${item[0]} href="#" aria-current=${active ? 'page' : undefined}
            onClick=${function (e) { e.preventDefault(); if (props.onNavigate) props.onNavigate(item[0]); }}>
            <svg className="i" aria-hidden="true" focusable="false"><use href=${'#' + item[1]}/></svg>
            <span>${S.nav[item[0]]}</span>
          </a>`;
        })}
      </nav>
      <div className="lvl">
        <b>${level.label} ${level.level}</b>
        <span>${Z.int(level.xp)} / ${Z.int(level.next)} XP</span>
        <div className="xp"><i style=${{ width: level.progress + '%' }}/></div>
      </div>
    </aside>`;
  }

  Z.Rail = Rail;
})();
