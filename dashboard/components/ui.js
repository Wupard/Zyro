/* ============================================================
   Zyro Panel v3 — small shared UI pieces
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;
  const React = Z.React;
  const { useState, useEffect, useRef } = React;

  function reducedMotion() {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
    catch (e) { return false; }
  }

  function CountUp(props) {
    const { value, decimals = 0 } = props;
    const [display, setDisplay] = useState(function () { return Z.num(0, decimals); });
    const played = useRef(false);

    useEffect(function () {
      const to = Number(value) || 0;
      if (played.current || reducedMotion()) {
        setDisplay(Z.num(to, decimals));
        return undefined;
      }
      played.current = true;
      const duration = 1400;
      const t0 = performance.now();
      let raf = 0;
      const tick = function (t) {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Z.num(to * eased, decimals));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return function () { cancelAnimationFrame(raf); };
    }, [value, decimals]);

    return html`<${React.Fragment}>${display}<//>`;
  }

  function EmptyState(props) {
    return html`<div className=${'empty-state' + (props.compact ? ' compact' : '')}>
      <p>${props.text}</p>
      <button type="button" class="btn sm" onClick=${props.onAction}>${props.action}</button>
    </div>`;
  }

  function smoothPath(pts) {
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const x0 = pts[i - 1][0];
      const y0 = pts[i - 1][1];
      const x1 = pts[i][0];
      const y1 = pts[i][1];
      const mx = (x0 + x1) / 2;
      d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
    }
    return d;
  }

  function scale(series, W, H, pt, pb) {
    const arr = series.length ? series : [0];
    const mn = Math.min.apply(null, arr);
    const mx = Math.max.apply(null, arr);
    const span = mx - mn || 1;
    return arr.map(function (v, i) {
      const x = arr.length === 1 ? W / 2 : (i * W) / (arr.length - 1);
      return [x, H - pb - ((v - mn) / span) * (H - pt - pb)];
    });
  }

  let sparkSeq = 0;
  function Sparkline(props) {
    const idRef = useRef(null);
    if (idRef.current === null) idRef.current = 'zd-spark-' + (++sparkSeq);
    const values = props.values && props.values.length ? props.values : [0, 0];
    const points = scale(values, 200, 70, 16, 8);
    const d = smoothPath(points);
    const color = props.color || '#8fb3cc';
    const gid = 'g' + idRef.current;
    return html`<svg className="spark" viewBox="0 0 200 70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id=${gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor=${color} stopOpacity=".3"/>
          <stop offset="1" stopColor=${color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path className="area" d=${d + ' L200,70 L0,70Z'} fill=${'url(#' + gid + ')'}/>
      <path className="line" d=${d} style=${{ stroke: color, strokeWidth: 2 }} vectorEffect="non-scaling-stroke"/>
    </svg>`;
  }

  Z.CountUp = CountUp;
  Z.EmptyState = EmptyState;
  Z.Sparkline = Sparkline;
  Z.smoothPath = smoothPath;
  Z.scale = scale;
})();
