/* ============================================================
   Zyro Panel v3 — top heading: greeting, date, streak
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  function Header(props) {
    const model = props.model;
    const S = model.S;
    return html`<header>
      <div>
        <h1>${model.greeting}, <b>${model.userName}</b></h1>
        <p className="sub">${model.dateLabel}</p>
      </div>
      <div className="pill">
        <svg className="i" aria-hidden="true" focusable="false"><use href="#i-flame"/></svg>
        <span><${Z.CountUp} value=${model.streak}/> ${S.streak}</span>
      </div>
    </header>`;
  }

  Z.Header = Header;
})();
