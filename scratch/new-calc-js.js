// ============================================================
// ZYRO HESAPLAYICILAR (CALCULATORS) — Zyro Panel v3 Redesign
// 5 Calculators: 1RM, Unit Converter, Body Fat, Growth, Macros
// 1RM exercises populate automatically from user's workoutLogs & default workout program
// ============================================================
let currentCalcTab = 'rm';

const CALC_TABS = [
  ['rm', { tr: '1RM Hesapla', en: '1RM Calculator' }],
  ['un', { tr: 'Birim Dönüştürücü', en: 'Unit Converter' }],
  ['bf', { tr: 'Yağ Oranı', en: 'Body Fat' }],
  ['pr', { tr: 'Gelişim', en: 'Growth / Progress' }],
  ['mc', { tr: 'Makro/Kalori', en: 'Macros / Calories' }]
];

const CALC_CATS = {
  all: { tr: 'Tümü (Tüm Vücut)', en: 'All (Full Body)' },
  chest: { tr: 'Göğüs', en: 'Chest' },
  back: { tr: 'Sırt', en: 'Back' },
  shoulders: { tr: 'Omuz', en: 'Shoulders' },
  biceps: { tr: 'Biceps', en: 'Biceps' },
  triceps: { tr: 'Triceps', en: 'Triceps' },
  legs: { tr: 'Bacak', en: 'Legs' },
  core: { tr: 'Core', en: 'Core' }
};

const CALC_ACT = [
  [1.2, { tr: 'Hareketsiz', en: 'Sedentary' }, { tr: 'Masa başı, az egzersiz', en: 'Desk job, little exercise' }],
  [1.375, { tr: 'Hafif aktif', en: 'Lightly active' }, { tr: 'Haftada 1–3 gün egzersiz', en: '1–3 days/week exercise' }],
  [1.55, { tr: 'Orta aktif', en: 'Moderately active' }, { tr: 'Haftada 3–5 gün egzersiz', en: '3–5 days/week exercise' }],
  [1.725, { tr: 'Çok aktif', en: 'Very active' }, { tr: 'Haftada 6–7 gün egzersiz', en: '6–7 days/week exercise' }],
  [1.9, { tr: 'Ekstra aktif', en: 'Extra active' }, { tr: 'Günde iki antrenman / ağır iş', en: 'Twice a day / heavy work' }]
];

function getUserWorkoutExercises() {
  const map = new Map();

  // 1) From shared program if available
  if (window.ZyroProgram && window.ZyroProgram.DAYS) {
    Object.values(window.ZyroProgram.DAYS).forEach(day => {
      (day.exercises || []).forEach(ex => {
        if (!map.has(ex.name)) {
          map.set(ex.name, { cat: ex.cat || 'chest', ex: ex.name, w: 0, r: 0 });
        }
      });
    });
  }

  // Fallback defaults if map empty
  if (map.size === 0) {
    const defaults = [
      { cat: 'chest', ex: 'Bench Press', w: 80, r: 8 },
      { cat: 'chest', ex: 'Incline Dumbbell Press', w: 28, r: 10 },
      { cat: 'back', ex: 'Barbell Row', w: 70, r: 8 },
      { cat: 'back', ex: 'Lat Pulldown', w: 65, r: 10 },
      { cat: 'legs', ex: 'Squat', w: 100, r: 6 },
      { cat: 'legs', ex: 'Romanian Deadlift', w: 90, r: 8 },
      { cat: 'shoulders', ex: 'Overhead Press', w: 45, r: 8 },
      { cat: 'biceps', ex: 'Barbell Curl', w: 30, r: 10 },
      { cat: 'triceps', ex: 'Triceps Pushdown', w: 35, r: 12 }
    ];
    defaults.forEach(d => map.set(d.ex, d));
  }

  // 2) Overlay user's real workoutLogs to get latest weight & reps
  if (appData && appData.workoutLogs) {
    Object.keys(appData.workoutLogs).forEach(dateKey => {
      const logs = appData.workoutLogs[dateKey] || [];
      logs.forEach(l => {
        if (l.exercise) {
          const existing = map.get(l.exercise) || { cat: 'chest', ex: l.exercise, w: 0, r: 0 };
          const w = parseFloat(l.weight) || 0;
          const r = parseInt(l.reps) || 0;
          if (w > 0) {
            existing.w = w;
            existing.r = r;
          }
          map.set(l.exercise, existing);
        }
      });
    });
  }

  return Array.from(map.values());
}

// Custom dropdown registry
const DD = {};
function ddClose(d) {
  const l = d.querySelector('.dd-l');
  const b = d.querySelector('.dd-b');
  if (l) l.hidden = true;
  if (b) b.setAttribute('aria-expanded', 'false');
}

function ddHTML(id, l) {
  return `<div class="fld"><label id="${id}-l">${l}</label><div class="dd" id="${id}" data-v=""><button type="button" class="in dd-b" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="${id}-l"><span></span><svg class="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button><div class="dd-l" role="listbox" hidden></div></div></div>`;
}

function ddDraw(id) {
  const d = document.getElementById(id);
  if (!d || !DD[id]) return;
  const { opts, ph } = DD[id];
  const cur = opts.find(o => String(o[0]) === d.dataset.v);
  const sp = d.querySelector('.dd-b span');
  if (sp) {
    sp.textContent = cur ? cur[1] : ph;
    sp.classList.toggle('ph', !cur);
  }
  const listEl = d.querySelector('.dd-l');
  if (listEl) {
    listEl.innerHTML = opts.length
      ? (opts.length > 8 ? `<input class="in dd-s" placeholder="${currentLang === 'tr' ? 'Ara…' : 'Search…'}" aria-label="Ara">` : '') +
        opts.map(o => `<button type="button" role="option" data-o="${escapeHtml(String(o[0]))}" aria-selected="${String(o[0]) === d.dataset.v}"><span>${escapeHtml(o[1])}</span>${o[2] ? `<small>${escapeHtml(o[2])}</small>` : ''}</button>`).join('')
      : `<div class="dd-e">${currentLang === 'tr' ? 'Bu kategoride egzersiz yok' : 'No exercise in this category'}</div>`;
  }
}

function ddSet(id, opts, v, ph, cb) {
  DD[id] = { opts, ph, cb };
  const d = document.getElementById(id);
  if (d) {
    d.dataset.v = v == null ? '' : v;
    ddDraw(id);
  }
}

function initCalculators() {
  const tl = document.getElementById('tl');
  const pane = document.getElementById('pane');
  if (!tl || !pane) return;

  // Dropdown global document click & keydown listeners (setup once)
  if (!window.__zyroCalcDDInited) {
    window.__zyroCalcDDInited = true;
    document.addEventListener('click', e => {
      const b = e.target.closest('.dd-b');
      const o = e.target.closest('[data-o]');
      document.querySelectorAll('.dd').forEach(d => {
        if (!d.contains(e.target) || (b && b.parentNode === d && b.getAttribute('aria-expanded') === 'true')) {
          ddClose(d);
        }
      });
      if (b) {
        const d = b.parentNode;
        const l = d.querySelector('.dd-l');
        if (b.getAttribute('aria-expanded') !== 'true') {
          l.hidden = false;
          b.setAttribute('aria-expanded', 'true');
          const f = l.querySelector('[aria-selected=true]') || l.querySelector('[data-o]');
          if (f) f.focus({ preventScroll: false });
        }
      } else if (o) {
        const d = o.closest('.dd');
        d.dataset.v = o.dataset.o;
        ddDraw(d.id);
        ddClose(d);
        const btn = d.querySelector('.dd-b');
        if (btn) btn.focus();
        if (DD[d.id] && DD[d.id].cb) DD[d.id].cb(d.dataset.v);
      }
    });

    document.addEventListener('input', e => {
      if (e.target.classList.contains('dd-s')) {
        const q = e.target.value.toLowerCase();
        e.target.parentNode.querySelectorAll('[data-o]').forEach(b => {
          b.hidden = !b.textContent.toLowerCase().includes(q);
        });
      }
    });

    document.addEventListener('keydown', e => {
      const d = e.target.closest && e.target.closest('.dd');
      if (!d) return;
      if (e.key === 'Escape') {
        ddClose(d);
        const btn = d.querySelector('.dd-b');
        if (btn) btn.focus();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const l = d.querySelector('.dd-l');
        if (l.hidden) {
          const btn = d.querySelector('.dd-b');
          if (btn) btn.click();
          return;
        }
        const a = [...l.querySelectorAll('[data-o]')].filter(x => !x.hidden);
        const i = a.indexOf(document.activeElement);
        const n = e.key === 'ArrowDown' ? Math.min(a.length - 1, i + 1) : Math.max(0, i - 1);
        if (a[n]) a[n].focus();
      }
    });
  }

  tl.onclick = e => {
    const b = e.target.closest('[data-t]');
    if (b) {
      currentCalcTab = b.dataset.t;
      renderCalculators();
    }
  };

  pane.onclick = e => {
    if (e.target.closest('[data-go]')) executeCalc(currentCalcTab);
  };

  pane.onkeydown = e => {
    if (e.key === 'Enter' && e.target.matches('input.in')) executeCalc(currentCalcTab);
  };

  renderCalculators();
}

function renderCalculators() {
  const tl = document.getElementById('tl');
  const pane = document.getElementById('pane');
  if (!tl || !pane) return;

  // Render tab list
  tl.innerHTML = CALC_TABS.map(([k, nameObj]) =>
    `<button role="tab" data-t="${k}" aria-selected="${k === currentCalcTab}">${nameObj[currentLang] || nameObj.tr}</button>`
  ).join('');

  // Render active view
  pane.innerHTML = getCalcViewHTML(currentCalcTab);
  setupCalcView(currentCalcTab);
}

function getCalcViewHTML(tab) {
  const numInp = (id, label, unit, ph) =>
    `<div class="fld"><label for="${id}">${label}</label><div class="u"><input class="in" id="${id}" inputmode="decimal" placeholder="${ph || ''}" autocomplete="off"><span>${unit || ''}</span></div></div>`;

  const genderSeg = () =>
    `<div class="seg2" role="radiogroup" aria-label="Cinsiyet" style="margin-bottom:16px"><input type="radio" name="calcG" id="calcG1" value="m" checked><label for="calcG1">${currentLang === 'tr' ? 'Erkek' : 'Male'}</label><input type="radio" name="calcG" id="calcG2" value="f"><label for="calcG2">${currentLang === 'tr' ? 'Kadın' : 'Female'}</label></div>`;

  const tailBtn = label =>
    `<button class="btn w" data-go>${label}</button><div class="err" id="calcErr" role="alert"></div><div id="calcRes" aria-live="polite"></div>`;

  const headBlock = (iconHref, title, subtitle) =>
    `<div class="ph2"><div class="ibox" style="width:44px;height:44px;border-radius:14px"><svg class="i"><use href="#${iconHref}"/></svg></div><div><b>${title}</b><span>${subtitle}</span></div></div>`;

  if (tab === 'rm') {
    return headBlock('zr-i-trend', currentLang === 'tr' ? '1RM Hesaplayıcı' : '1RM Calculator', currentLang === 'tr' ? 'Epley formülü • Loglardan otomatik' : 'Epley formula • Auto from logs') +
      `<div class="fl">${ddHTML('calcCat', currentLang === 'tr' ? 'Kategori seç' : 'Select category')}${ddHTML('calcEx', currentLang === 'tr' ? 'Egzersiz' : 'Exercise')}</div>` +
      `<div class="fl" style="margin-top:14px">${numInp('calcW', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '0')}${numInp('calcR', currentLang === 'tr' ? 'Tekrar sayısı' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '0')}</div>` +
      tailBtn(currentLang === 'tr' ? '1RM hesapla' : 'Calculate 1RM');
  }

  if (tab === 'un') {
    return `<div class="fl">${numInp('calcKg', currentLang === 'tr' ? 'Kilogram (kg)' : 'Kilogram (kg)', 'KG', '0')}${numInp('calcLb', currentLang === 'tr' ? 'Pounds (lbs)' : 'Pounds (lbs)', 'LB', '0')}</div>`;
  }

  if (tab === 'bf') {
    return genderSeg() +
      `<div class="fl">${numInp('calcH', currentLang === 'tr' ? 'Boy' : 'Height', 'CM', 'cm')}${numInp('calcWa', currentLang === 'tr' ? 'Bel' : 'Waist', 'CM', 'cm')}${numInp('calcNe', currentLang === 'tr' ? 'Boyun' : 'Neck', 'CM', 'cm')}<div id="calcHipWrap" hidden>${numInp('calcHi', currentLang === 'tr' ? 'Kalça' : 'Hip', 'CM', 'cm')}</div></div>` +
      tailBtn(currentLang === 'tr' ? 'Yağ oranını hesapla' : 'Calculate Body Fat');
  }

  if (tab === 'pr') {
    return headBlock('zr-i-ba', currentLang === 'tr' ? 'Gelişim kıyaslaması' : 'Growth Comparison', currentLang === 'tr' ? 'Önceki ve şu anki kaldırışını karşılaştır' : 'Compare past and current lifts') +
      `<p style="margin:0 0 10px;color:var(--steel);font-size:12px;letter-spacing:.06em">${currentLang === 'tr' ? 'ÖNCEKİ KALDIRIŞ' : 'PREVIOUS LIFT'}</p>` +
      `<div class="fl">${numInp('calcW1', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '80')}${numInp('calcR1', currentLang === 'tr' ? 'Tekrar' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '8')}</div>` +
      `<p style="margin:22px 0 10px;color:var(--steel);font-size:12px;letter-spacing:.06em">${currentLang === 'tr' ? 'ŞU ANKİ KALDIRIŞ' : 'CURRENT LIFT'}</p>` +
      `<div class="fl">${numInp('calcW2', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', '85')}${numInp('calcR2', currentLang === 'tr' ? 'Tekrar' : 'Reps', currentLang === 'tr' ? 'TEKRAR' : 'REPS', '10')}</div>` +
      tailBtn(currentLang === 'tr' ? 'Kıyasla' : 'Compare');
  }

  if (tab === 'mc') {
    return `<div class="fl">${numInp('calcMcW', currentLang === 'tr' ? 'Ağırlık' : 'Weight', 'KG', 'kg')}${numInp('calcMcH', currentLang === 'tr' ? 'Boy' : 'Height', 'CM', 'cm')}${numInp('calcMcA', currentLang === 'tr' ? 'Yaş' : 'Age', currentLang === 'tr' ? 'YIL' : 'YRS', 'yıl')}</div>` +
      `<div style="margin:14px 0 16px">${ddHTML('calcAct', currentLang === 'tr' ? 'Aktivite seviyesi' : 'Activity level')}</div>` +
      genderSeg() +
      tailBtn(currentLang === 'tr' ? 'Makro / kalori hesapla' : 'Calculate Macros / Calories');
  }

  return '';
}

function setupCalcView(tab) {
  if (tab === 'rm') {
    const exercises = getUserWorkoutExercises();
    const catOpts = Object.entries(CALC_CATS).map(([k, obj]) => [k, obj[currentLang] || obj.tr]);

    function updateExOpts() {
      const selectedCat = document.getElementById('calcCat')?.dataset.v || 'all';
      const filtered = exercises.filter(e => selectedCat === 'all' || e.cat === selectedCat);
      ddSet(
        'calcEx',
        filtered.map(e => [e.ex, e.ex, e.w ? `${e.w} kg × ${e.r}` : '']),
        '',
        currentLang === 'tr' ? 'Egzersiz seçin…' : 'Select exercise…',
        v => {
          const match = exercises.find(q => q.ex === v);
          if (match && match.w) {
            const wInput = document.getElementById('calcW');
            const rInput = document.getElementById('calcR');
            if (wInput) wInput.value = match.w;
            if (rInput) rInput.value = match.r;
          }
        }
      );
    }

    ddSet('calcCat', catOpts, 'all', currentLang === 'tr' ? 'Kategori seç' : 'Select category', updateExOpts);
    updateExOpts();
  }

  if (tab === 'un') {
    const kg = document.getElementById('calcKg');
    const lb = document.getElementById('calcLb');
    if (kg && lb) {
      kg.oninput = e => {
        const v = parseFloat(e.target.value.replace(',', '.'));
        lb.value = (!isNaN(v) && v >= 0) ? (v * 2.20462).toFixed(2).replace('.', ',') : '';
      };
      lb.oninput = e => {
        const v = parseFloat(e.target.value.replace(',', '.'));
        kg.value = (!isNaN(v) && v >= 0) ? (v / 2.20462).toFixed(2).replace('.', ',') : '';
      };
    }
  }

  if (tab === 'bf') {
    document.querySelectorAll('[name=calcG]').forEach(r => {
      r.onchange = () => {
        const isMale = document.getElementById('calcG1').checked;
        const hipWrap = document.getElementById('calcHipWrap');
        if (hipWrap) hipWrap.hidden = isMale;
      };
    });
  }

  if (tab === 'mc') {
    const actOpts = CALC_ACT.map(([mult, titleObj, descObj]) => [
      mult,
      titleObj[currentLang] || titleObj.tr,
      descObj[currentLang] || descObj.tr
    ]);
    ddSet('calcAct', actOpts, '1.55', currentLang === 'tr' ? 'Seç' : 'Select');
  }
}

function executeCalc(tab) {
  const getNum = id => {
    const el = document.getElementById(id);
    return el ? parseFloat((el.value || '').replace(',', '.')) : NaN;
  };
  const setErr = msg => {
    const res = document.getElementById('calcRes');
    const err = document.getElementById('calcErr');
    if (res) res.innerHTML = '';
    if (err) err.textContent = msg;
  };
  const setOk = html => {
    const res = document.getElementById('calcRes');
    const err = document.getElementById('calcErr');
    if (err) err.textContent = '';
    if (res) res.innerHTML = `<div class="rs">${html}</div>`;
  };

  const epley = (w, r) => (r === 1 ? w : w * (1 + r / 30));

  if (tab === 'rm') {
    const w = getNum('calcW');
    const r = getNum('calcR');
    if (!(w > 0 && w < 1000)) return setErr(currentLang === 'tr' ? 'Geçerli bir ağırlık gir.' : 'Enter a valid weight.');
    if (!(Number.isInteger(r) && r >= 1 && r <= 30)) return setErr(currentLang === 'tr' ? 'Tekrar sayısı 1–30 arasında tam sayı olmalı.' : 'Reps must be integer between 1–30.');

    const m = epley(w, r);
    const percentages = [95, 90, 85, 80, 75, 70, 60, 50];
    const rows = percentages.map(p =>
      `<tr><td>%${p}</td><td>${(Math.round(m * p / 100 * 2) / 2).toFixed(1).replace('.', ',')} kg</td></tr>`
    ).join('');

    setOk(`
      <div class="v">${m.toFixed(1).replace('.', ',')}<small>kg · ${currentLang === 'tr' ? 'tahmini 1RM' : 'est. 1RM'}</small></div>
      <table class="pt">${rows}</table>
    `);
  }

  if (tab === 'bf') {
    const isMale = document.getElementById('calcG1').checked;
    const h = getNum('calcH');
    const wa = getNum('calcWa');
    const ne = getNum('calcNe');
    const hi = getNum('calcHi');

    if (![h, wa, ne].every(x => x > 0)) return setErr(currentLang === 'tr' ? 'Boy, bel ve boyun ölçülerini gir.' : 'Enter height, waist and neck.');
    if (!isMale && !(hi > 0)) return setErr(currentLang === 'tr' ? 'Kalça ölçüsünü gir.' : 'Enter hip measurement.');

    const d = isMale ? (wa - ne) : (wa + hi - ne);
    if (!(d > 0)) return setErr(currentLang === 'tr' ? 'Ölçüler tutarsız: bel boyundan büyük olmalı.' : 'Inconsistent measurements.');

    const bf = isMale
      ? 495 / (1.0324 - 0.19077 * Math.log10(d) + 0.15456 * Math.log10(h)) - 450
      : 495 / (1.29579 - 0.35004 * Math.log10(d) + 0.221 * Math.log10(h)) - 450;

    if (!(bf > 0 && bf < 70)) return setErr(currentLang === 'tr' ? 'Sonuç mantıksız çıktı, ölçüleri kontrol et.' : 'Invalid result, check measurements.');

    const maleCats = [
      [6, currentLang === 'tr' ? 'Temel yağ' : 'Essential fat'],
      [14, currentLang === 'tr' ? 'Atletik' : 'Athletic'],
      [18, currentLang === 'tr' ? 'Fit' : 'Fitness'],
      [25, currentLang === 'tr' ? 'Ortalama' : 'Average'],
      [99, currentLang === 'tr' ? 'Yüksek' : 'High']
    ];
    const femaleCats = [
      [14, currentLang === 'tr' ? 'Temel yağ' : 'Essential fat'],
      [21, currentLang === 'tr' ? 'Atletik' : 'Athletic'],
      [25, currentLang === 'tr' ? 'Fit' : 'Fitness'],
      [32, currentLang === 'tr' ? 'Ortalama' : 'Average'],
      [99, currentLang === 'tr' ? 'Yüksek' : 'High']
    ];
    const catList = isMale ? maleCats : femaleCats;
    const matched = catList.find(x => bf < x[0]) || catList[catList.length - 1];

    setOk(`
      <div class="v">%${bf.toFixed(1).replace('.', ',')}<small>${matched[1]}</small></div>
      <p>${currentLang === 'tr' ? 'ABD Donanması yöntemiyle tahmini değerdir.' : 'Estimated using US Navy method.'}</p>
    `);
  }

  if (tab === 'pr') {
    const w1 = getNum('calcW1');
    const r1 = getNum('calcR1');
    const w2 = getNum('calcW2');
    const r2 = getNum('calcR2');

    if (!(w1 > 0 && w2 > 0)) return setErr(currentLang === 'tr' ? 'İki kaldırış için de ağırlık gir.' : 'Enter weight for both lifts.');
    if (![r1, r2].every(r => Number.isInteger(r) && r >= 1 && r <= 30)) return setErr(currentLang === 'tr' ? 'Tekrar sayıları 1–30 arasında tam sayı olmalı.' : 'Reps must be integer between 1–30.');

    const old1 = epley(w1, r1);
    const new1 = epley(w2, r2);
    const diff = new1 - old1;
    const pct = (diff / old1) * 100;
    const sign = diff > 0 ? '+' : (diff < 0 ? '−' : '');

    const label = diff > 0
      ? (currentLang === 'tr' ? 'artış' : 'increase')
      : (diff < 0 ? (currentLang === 'tr' ? 'düşüş' : 'decrease') : (currentLang === 'tr' ? 'değişim yok' : 'no change'));

    setOk(`
      <div class="v">${sign}${Math.abs(diff).toFixed(1).replace('.', ',')}<small>kg · %${Math.abs(pct).toFixed(1).replace('.', ',')} ${label}</small></div>
      <p>${currentLang === 'tr' ? 'Tahmini 1RM:' : 'Estimated 1RM:'} ${old1.toFixed(1).replace('.', ',')} kg → ${new1.toFixed(1).replace('.', ',')} kg</p>
    `);
  }

  if (tab === 'mc') {
    const w = getNum('calcMcW');
    const h = getNum('calcMcH');
    const a = getNum('calcMcA');

    if (!(w > 20 && w < 400)) return setErr(currentLang === 'tr' ? 'Ağırlığı gir (kg).' : 'Enter weight (kg).');
    if (!(h > 90 && h < 250)) return setErr(currentLang === 'tr' ? 'Boyu gir (cm).' : 'Enter height (cm).');
    if (!(a >= 10 && a <= 100)) return setErr(currentLang === 'tr' ? 'Yaşı gir.' : 'Enter age.');

    const isMale = document.getElementById('calcG1').checked;
    const bmr = (10 * w) + (6.25 * h) - (5 * a) + (isMale ? 5 : -161);
    const actMult = parseFloat(document.getElementById('calcAct')?.dataset.v || '1.55');
    const tdee = bmr * actMult;

    const goals = [
      [currentLang === 'tr' ? 'Kilo ver' : 'Lose weight', 0.8],
      [currentLang === 'tr' ? 'Koru' : 'Maintain', 1.0],
      [currentLang === 'tr' ? 'Kilo al' : 'Gain weight', 1.1]
    ];

    const cards = goals.map(([n, mult]) => {
      const c = tdee * mult;
      const p = 2 * w;
      const f = (c * 0.25) / 9;
      const carbs = Math.max(0, (c - (p * 4) - (f * 9)) / 4);
      return `
        <div>
          <small>${n}</small>
          <b>${Math.round(c)} kcal</b>
          <span>P ${Math.round(p)} g · K ${Math.round(carbs)} g · Y ${Math.round(f)} g</span>
        </div>
      `;
    }).join('');

    setOk(`
      <div class="v">${Math.round(tdee)}<small>kcal · ${currentLang === 'tr' ? 'günlük harcama' : 'daily expenditure'} (BMR ${Math.round(bmr)})</small></div>
      <div class="g3">${cards}</div>
      <p>${currentLang === 'tr' ? 'Mifflin-St Jeor; protein 2 g/kg, yağ %25. Tahmini değerlerdir.' : 'Mifflin-St Jeor; protein 2 g/kg, fat 25%. Estimated values.'}</p>
    `);
  }
}
