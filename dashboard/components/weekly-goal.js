/* ============================================================
   Zyro Panel v3 — weekly goal ring + daily bars
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  function WeeklyGoal(props) {
    const week = props.model.week;
    const S = props.model.S;
    return html`<section className="p s4">
      <div className="lab"><span>${S.weeklyGoal}</span><span>${week.goal} ${S.workoutWord}</span></div>
      <div className="ringbox">
        <svg className="ring" width="190" height="190" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <circle className="t" cx="50" cy="50" r="42"/>
          <circle className="v" cx="50" cy="50" r="42" pathLength="1"
            style=${{ '--off': (1 - week.ratio).toFixed(3) }}/>
        </svg>
        <div className="c">
          <b><${Z.CountUp} value=${week.completed}/>/${week.goal}</b>
          <span>${S.completed}</span>
        </div>
      </div>
      <div className="wk">
        ${week.days.map(function (day, i) {
          const cls = (day.on ? 'on ' : '') + (day.now ? 'now' : '');
          return html`<div key=${day.key} className=${cls} style=${{ '--n': i }}>
            <i style=${{ '--h': day.height + 'px', '--n': i }}/>
            ${day.label}
          </div>`;
        })}
      </div>
    </section>`;
  }

  Z.WeeklyGoal = WeeklyGoal;
})();
