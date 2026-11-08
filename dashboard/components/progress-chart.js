/* ============================================================
   Zyro Panel v3 — progress chart (weight / volume)
   One continuous path, revealed with the clip-path wipe.
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;
  const React = Z.React;
  const { useState } = React;

  function axisValue(value, unit, lang) {
    if (unit === Z.STR[lang].ton || (unit === Z.STR[lang].kg && value >= 10000)) {
      return Z.num(value / 1000, 1) + ' ' + Z.STR[lang].ton;
    }
    return Z.num(value, 0) + ' ' + unit;
  }

  function ProgressChart(props) {
    const model = props.model;
    const S = model.S;
    const chart = model.chart;
    const [mode, setMode] = useState('w');
    const data = mode === 'w' ? chart.weight : chart.volume;

    let content;
    if (!data.has) {
      content = html`<${Z.EmptyState}
        text=${mode === 'w' ? S.emptyChart : S.emptyVolume}
        action=${mode === 'w' ? S.addWeight : S.addWorkout}
        onAction=${mode === 'w' ? props.onAddWeight : props.onAddWorkout}/>`;
    } else {
      const values = data.values.length === 1 ? [data.values[0], data.values[0]] : data.values;
      const W = 640;
      const H = 240;
      const points = Z.scale(values, W - 60, H, 30, 34).map(function (p) { return [p[0] + 30, p[1]]; });
      const d = Z.smoothPath(points);
      const last = points[points.length - 1];
      const grid = [];
      for (let i = 0; i < 4; i++) {
        const y = 30 + (i * (H - 64)) / 3;
        grid.push(html`<line key=${'g' + i} x1="30" x2=${W - 30} y1=${y} y2=${y} stroke="rgba(255,255,255,.06)"/>`);
      }
      const firstDate = data.dates[0];
      const leftLabel = data.kind === 'w'
        ? Z.fmtDate(firstDate, { day: 'numeric', month: 'short' })
        : firstDate;
      const lastValue = data.values[data.values.length - 1];
      const rightLabel = `${S.today} · ${axisValue(lastValue, data.unit, model.lang)}`;
      content = html`<svg id="chart" viewBox="0 0 640 240" preserveAspectRatio="none" role="img"
        aria-label=${S.progress + ' · ' + (mode === 'w' ? S.weight : S.volume)}>
        <defs>
          <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fb3cc" stopOpacity=".35"/>
            <stop offset="1" stopColor="#8fb3cc" stopOpacity="0"/>
          </linearGradient>
        </defs>
        ${grid}
        <path className="area" d=${d + ' L' + last[0] + ',' + (H - 34) + ' L30,' + (H - 34) + 'Z'} fill="url(#ga)"/>
        <path className="line" d=${d} vectorEffect="non-scaling-stroke"/>
        <circle className="dot area" cx=${last[0]} cy=${last[1]} r="5"/>
        <text className="ax" x="30" y=${H - 8}>${leftLabel}</text>
        <text className="ax" x=${W - 30} y=${H - 8} textAnchor="end">${rightLabel}</text>
      </svg>`;
    }

    return html`<section className="p s8">
      <div className="lab">
        <span>${S.progress}</span>
        <span className="seg" role="group">
          <button type="button" aria-pressed=${mode === 'w'} onClick=${function () { setMode('w'); }}>${S.weight}</button>
          <button type="button" aria-pressed=${mode === 'v'} onClick=${function () { setMode('v'); }}>${S.volume}</button>
        </span>
      </div>
      ${content}
    </section>`;
  }

  Z.ProgressChart = ProgressChart;
})();
