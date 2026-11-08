/* ============================================================
   Zyro Panel v3 — best records
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;

  function Records(props) {
    const model = props.model;
    const S = model.S;
    return html`<section className="p s4">
      <div className="lab">${S.records}</div>
      ${model.records.length
        ? model.records.map(function (rec) {
            return html`<div className="pr" key=${rec.name}>
              <div>${rec.name}<span>${rec.ago}</span></div>
              <div><b>${Z.num(rec.value, rec.value % 1 ? 1 : 0)}</b><em>${rec.unit}</em></div>
            </div>`;
          })
        : html`<${Z.EmptyState} text=${S.emptyRecords} action=${S.logWorkout} onAction=${props.onAddWorkout}/>`}
    </section>`;
  }

  Z.Records = Records;
})();
