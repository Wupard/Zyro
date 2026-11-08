/* ============================================================
   Zyro Panel v3 — icon sprite
   Same symbol set as the approved design.
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  const symbols = [
    ['i-grid', html`<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>`],
    ['i-dumb', html`<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>`],
    ['i-trend', html`<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>`],
    ['i-fork', html`<path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 21V3c-2 2-3 5-3 8h3"/>`],
    ['i-user', html`<circle cx="12" cy="5" r="2"/><path d="M12 8v6M7 10h10M9 21l3-7 3 7"/>`],
    ['i-calc', html`<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/>`],
    ['i-cup', html`<path d="M8 4h8v6a4 4 0 01-8 0zM8 6H4v2a3 3 0 003 3M16 6h4v2a3 3 0 01-3 3M12 14v4M8 20h8"/>`],
    ['i-note', html`<path d="M5 4h14v16H5zM9 9h6M9 13h4"/>`],
    ['i-play', html`<path d="M7 4l13 8-13 8z" fill="currentColor"/>`],
    ['i-flame', html`<path d="M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>`]
  ];

  function IconSprite() {
    return html`<svg width="0" height="0" style=${{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fb3cc"/>
          <stop offset="1" stopColor="#dcc7a8"/>
        </linearGradient>
        <filter id="bl"><feGaussianBlur stdDeviation="7"/></filter>
        ${symbols.map(([id, content]) => html`<symbol id=${id} viewBox="0 0 24 24">${content}</symbol>`)}
      </defs>
    </svg>`;
  }

  Z.IconSprite = IconSprite;
})();
