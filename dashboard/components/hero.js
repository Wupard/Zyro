/* ============================================================
   Zyro Panel v3 — today's workout hero + muscle map
   ============================================================ */
(function () {
  'use strict';
  const Z = window.ZyroDashboard;
  const html = Z.html;
  const React = Z.React;
  const { useState } = React;

  function Hero(props) {
    const model = props.model;
    const hero = model.hero;
    const S = model.S;
    const [view, setView] = useState('front');
    const [highlight, setHighlight] = useState(null);
    const [animateLabels, setAnimateLabels] = useState(true);

    function changeView(next) {
      if (next === view) return;
      setAnimateLabels(false);
      setView(next);
    }

    function enterTag(tag) {
      if (tag.view !== view) changeView(tag.view);
      setHighlight(tag.key);
    }

    return html`<section className="p s8 hero" aria-label=${hero.eyebrow}>
      <div className="hero-copy">
        <div className="hero-eyebrow">${hero.eyebrow}</div>
        <h2>${hero.title[0]}<br/>${hero.title[1]}</h2>
        <p>${hero.desc}</p>
        <div className="tags">
          ${hero.tags.map(function (tag) {
            return html`<span key=${tag.key} className="tag" role="button" tabIndex="0"
              style=${{ '--c': tag.color }}
              aria-label=${tag.label + ' ' + tag.sets + ' ' + S.sets}
              onMouseEnter=${function () { enterTag(tag); }}
              onMouseLeave=${function () { setHighlight(null); }}
              onFocus=${function () { enterTag(tag); }}
              onBlur=${function () { setHighlight(null); }}
              onKeyDown=${function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  enterTag(tag);
                }
              }}>${tag.label} <em>${tag.sets} ${S.sets}</em></span>`;
          })}
        </div>
        <div>
          <button type="button" className="btn" onClick=${function () {
            if (props.onStart) props.onStart(hero.tab);
          }}>
            <svg className="i" style=${{ width: 15, height: 15 }} aria-hidden="true" focusable="false">
              <use href="#i-play"/>
            </svg>
            ${hero.rest ? S.goWorkouts : S.start}
          </button>
        </div>
      </div>
      <div className="body">
        <div className="seg vw" role="group" aria-label=${S.viewLabel}>
          <button type="button" aria-pressed=${view === 'front'}
            onClick=${function () { changeView('front'); }}>${S.front}</button>
          <button type="button" aria-pressed=${view === 'back'}
            onClick=${function () { changeView('back'); }}>${S.back}</button>
        </div>
        <${Z.MuscleMap} work=${hero.work} view=${view} highlight=${highlight}
          animateLabels=${animateLabels} S=${S}/>
      </div>
    </section>`;
  }

  Z.Hero = Hero;
})();
