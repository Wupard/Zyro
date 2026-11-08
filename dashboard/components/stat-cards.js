/* ============================================================
   Zyro Panel v3 — three stat tiles with sparklines
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  function StatCard(props) {
    const stat = props.stat;
    return html`<section className="p s4 t stat" style=${{ minHeight: 190 }}>
      <div className="lab">${stat.title}</div>
      ${stat.has
        ? html`<${Z.React.Fragment}>
            <b><${Z.CountUp} value=${stat.value} decimals=${stat.decimals}/><small>${stat.unit}</small></b>
            <div className="delta">${stat.deltaText}</div>
            <${Z.Sparkline} values=${stat.spark} color=${props.color}/>
          <//>`
        : html`<${Z.EmptyState} compact text=${props.emptyText} action=${props.actionLabel} onAction=${props.onAction}/>`}
    </section>`;
  }

  Z.StatCard = StatCard;
})();
