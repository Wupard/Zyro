/* ============================================================
   Zyro Panel v3 — muscle map
   FRONT / BACK paths, BASE body, label lines and highlight
   behaviour are carried over from the approved design.
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;
  const React = Z.React;

  const FRONT = {
    delt: ['M70 78Q56 80 52 98Q56 108 66 104Q72 92 74 80Z'],
    chest: ['M98 82L76 80Q70 94 74 108Q88 116 98 108Z'],
    bi: ['M52 100Q46 118 48 136Q56 140 62 134Q64 118 66 104Z'],
    fore: ['M48 138Q42 160 42 178Q50 182 56 176Q60 156 62 136Z'],
    abs: ['M98 112L84 114Q82 140 86 166L98 170Z'],
    obl: ['M83 114Q74 122 72 150Q74 164 81 168Q82 140 83 114Z'],
    quad: ['M98 176Q80 178 74 200Q72 240 80 270Q92 274 98 266Z'],
    calf: ['M80 278Q76 310 80 350Q88 356 94 350Q98 316 96 280Z']
  };
  const BACK = {
    trap: ['M100 58Q84 64 72 78Q82 92 100 120Z'],
    delt: ['M70 78Q56 80 52 98Q56 108 66 104Q72 92 74 80Z'],
    tri: ['M52 100Q46 118 48 136Q56 140 62 134Q64 118 66 104Z'],
    fore: ['M48 138Q42 160 42 178Q50 182 56 176Q60 156 62 136Z'],
    lat: ['M98 122Q82 104 74 98Q70 130 80 160Q90 166 98 158Z'],
    low: ['M98 162Q88 168 84 178L98 184Z'],
    glute: ['M98 184Q78 184 74 200Q80 218 98 216Z'],
    ham: ['M98 220Q82 222 76 242Q76 264 82 276Q94 276 98 268Z'],
    calf: ['M82 280Q76 306 82 338Q90 346 96 336Q98 310 96 282Z']
  };
  const BASE = 'M100 58L88 60Q80 66 70 76Q56 78 50 98L44 140Q38 164 38 180Q40 190 50 188Q58 180 60 152L66 126Q70 140 72 162Q72 174 80 180Q74 202 72 232Q72 262 78 282Q76 320 80 354L98 354Z';
  const LAB = {
    front: { chest: ['r', 96, 86], delt: ['l', 90, 61] },
    back: { tri: ['l', 120, 55], delt: ['r', 90, 61] }
  };

  function mirroredPaths(map, work, highlight, mirror) {
    const out = [];
    Object.keys(map).forEach(function (key) {
      map[key].forEach(function (d, i) {
        const w = work[key];
        const classes = ['m'];
        if (w) classes.push('on');
        if (highlight && highlight === key) classes.push('hi');
        const style = w ? { '--c': w.color, '--o': w.opacity.toFixed(2) } : undefined;
        out.push(html`<path key=${key + '-' + i} className=${classes.join(' ')} data-m=${key} d=${d} style=${style}/>`);
      });
    });
    return html`<g transform=${mirror ? 'translate(200 0) scale(-1 1)' : undefined}>${out}</g>`;
  }

  function MuscleMap(props) {
    const work = props.work || {};
    const view = props.view || 'front';
    const highlight = props.highlight || null;
    const map = view === 'front' ? FRONT : BACK;
    const labels = LAB[view] || {};
    const labelNodes = [];
    let k = 0;
    Object.keys(labels).forEach(function (muscle) {
      const w = work[muscle];
      if (!w) return;
      const def = labels[muscle];
      const side = def[0];
      const y = def[1];
      const x = def[2];
      const cx = 50 + (side === 'l' ? x : 200 - x);
      const ex = side === 'l' ? 40 : 258;
      const anchor = side === 'l' ? 'end' : 'start';
      const tx = side === 'l' ? ex - 6 : ex + 6;
      labelNodes.push(html`<g key=${'lb-' + muscle}
        className=${'lb' + (props.animateLabels ? '' : ' still')}
        style=${{ '--c': w.color, '--k': k++ }}
        tabIndex="0" role="button"
        aria-label=${w.label + ' ' + w.sets + ' ' + props.S.sets}
        onMouseEnter=${function () { if (props.onHighlight) props.onHighlight(muscle); }}
        onMouseLeave=${function () { if (props.onHighlight) props.onHighlight(null); }}
        onFocus=${function () { if (props.onHighlight) props.onHighlight(muscle); }}
        onBlur=${function () { if (props.onHighlight) props.onHighlight(null); }}>
        <line x1=${cx} y1=${y} x2=${ex} y2=${y}/>
        <circle cx=${cx} cy=${y} r="3"/>
        <text x=${tx} y=${y + 4} textAnchor=${anchor}>${w.label}</text>
      </g>`);
    });

    return html`<svg id="mm" className=${highlight ? 'hl' : ''} viewBox="0 0 300 372"
      role="img" aria-label=${props.S.mapLabel}>
      <g transform="translate(50 0)">
        <circle className="base" cx="100" cy="30" r="20"/>
        <path className="base" d=${BASE}/>
        <path className="base" transform="translate(200 0) scale(-1 1)" d=${BASE}/>
        ${mirroredPaths(map, work, highlight, false)}
        ${mirroredPaths(map, work, highlight, true)}
      </g>
      ${labelNodes}
    </svg>`;
  }

  Z.MuscleMap = MuscleMap;
})();
