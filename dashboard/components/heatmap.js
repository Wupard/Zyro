/* ============================================================
   Zyro Panel v3 — last 16 weeks activity map
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  function Heatmap(props) {
    const model = props.model;
    const S = model.S;
    const heat = model.heat;
    return html`<section className="p s12">
      <div className="lab"><span>${S.heat}</span><span>${S.workoutCount(heat.count)}</span></div>
      ${heat.has
        ? html`<div className="heat" aria-hidden="true">
            ${heat.cells.map(function (cell) {
              return html`<i key=${cell.n} style=${{ '--a': cell.a, '--n': cell.n }}/>`;
            })}
          </div>`
        : html`<${Z.EmptyState} text=${S.emptyHeat} action=${S.addWorkout} onAction=${props.onAddWorkout}/>`}
    </section>`;
  }

  Z.Heatmap = Heatmap;
})();
