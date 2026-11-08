/* ============================================================
   Zyro — Workouts page controller
   Approved v2 design. Reads the shared 5-day program and persists
   every confirmed set into the app data layer.
   ============================================================ */
(function () {
  'use strict';

  var HOST_ID = 'zyroWorkoutsRoot';
  var P = window.ZYRO_PROGRAM;
  if (!P) return;

  var host = null;
  var mounted = false;
  var selectedDay = null;
  var openKey = null;
  var unit = 'kg';
  var freeCat = 'all';
  var toastTimer = null;
  var ST = {};
  var celebratedTimer = null;
  var firstRender = true;
  var syncFrame = 0;

  /* ---------------- helpers ---------------- */
  function lang() {
    try { return typeof currentLang !== 'undefined' && currentLang === 'tr' ? 'tr' : 'en'; }
    catch (e) { return 'en'; }
  }
  function S() {
    try {
      var langSet = I18N[lang()];
      if (langSet && langSet.zw) return langSet.zw;
      if (I18N.en && I18N.en.zw) return I18N.en.zw;
    } catch (e) { /* ignore */ }
    return {};
  }
  function data() {
    try { return (typeof appData !== 'undefined' && appData) ? appData : {}; }
    catch (e) { return {}; }
  }
  function save() {
    try { if (typeof saveData === 'function') saveData(); } catch (e) { /* ignore */ }
  }
  function call(name, fallback) {
    try { if (typeof window[name] === 'function') return window[name](); }
    catch (e) { /* ignore */ }
    return fallback;
  }
  function today() {
    try { if (typeof todayStr === 'function') return todayStr(); }
    catch (e) { /* ignore */ }
    var d = new Date();
    var off = d.getTimezoneOffset() * 60000;
    return new Date(d.getTime() - off).toISOString().split('T')[0];
  }
  function locale() { return lang() === 'tr' ? 'tr-TR' : 'en-US'; }
  function fmt(n) {
    var v = Number(n) || 0;
    return Math.round(v).toLocaleString(locale());
  }
  function numText(n) {
    var v = Number(n);
    if (!isFinite(v)) return '';
    return String(Math.round(v * 10) / 10);
  }
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function parseNum(value) {
    var n = Number(String(value == null ? '' : value).replace(',', '.'));
    return isFinite(n) ? n : 0;
  }
  function todayLogs() {
    var logs = (data().workoutLogs || {})[today()] || [];
    return logs.filter(function (l) { return l && l.exercise; });
  }
  function defaultDay() {
    var key = P.todayKey();
    if (P.isProgramDay(key)) return key;
    for (var i = 1; i <= 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var k = P.keyForDate(d);
      if (P.isProgramDay(k)) return k;
    }
    return 'sal';
  }
  function resetCache() { ST = {}; }

  function hydrateList(list, day, ex) {
    list.forEach(function (s) { s.ok = false; });
    todayLogs().forEach(function (l) {
      if (l.free) return;
      if (l.day !== day) return;
      if (l.exercise !== ex.name) return;
      var n = parseInt(l.setNumber, 10) || 1;
      var idx = n - 1;
      if (idx < 0 || idx >= list.length) return;
      var u = l.unit === 'lbs' ? 'lbs' : 'kg';
      var input = Number(l.inputWeight);
      var kg = Number(l.weight) || 0;
      list[idx].ok = true;
      list[idx].u = u;
      list[idx].r = l.reps == null ? '' : String(l.reps);
      if (isFinite(input) && input > 0) list[idx].w = numText(input);
      else if (kg > 0) list[idx].w = numText(u === 'lbs' ? kg / 0.4536 : kg);
    });
  }

  function rehydrate() {
    Object.keys(ST).forEach(function (key) {
      var parts = key.split('|');
      var day = parts[0];
      var index = parseInt(parts[1], 10);
      var ex = P.days[day] && P.days[day].exercises[index];
      if (ex) hydrateList(ST[key], day, ex);
    });
  }

  function arr(day, index) {
    var key = day + '|' + index;
    if (ST[key]) return ST[key];
    var ex = P.days[day].exercises[index];
    var list = [];
    for (var i = 0; i < ex.sets; i++) list.push({ w: '', r: '', ok: false, u: unit });
    hydrateList(list, day, ex);
    ST[key] = list;
    return list;
  }
  function volOf(list) {
    return list.filter(function (s) { return s.ok; }).reduce(function (total, s) {
      return total + (parseNum(s.w) || 0) * (s.u === 'lbs' ? 0.4536 : 1) * (parseNum(s.r) || 0);
    }, 0);
  }
  function exDone(day, index) {
    return arr(day, index).every(function (s) { return s.ok; });
  }
  function exDoneCount(day) {
    return P.days[day].exercises.filter(function (e, i) { return exDone(day, i); }).length;
  }
  function setsDone(day) {
    return P.days[day].exercises.reduce(function (total, e, i) {
      return total + arr(day, i).filter(function (s) { return s.ok; }).length;
    }, 0);
  }
  function totalSets(day) {
    return P.days[day].exercises.reduce(function (total, e) { return total + e.sets; }, 0);
  }
  function dayVol(day) {
    return P.days[day].exercises.reduce(function (total, e, i) { return total + volOf(arr(day, i)); }, 0);
  }
  function allDone(day) {
    return P.days[day].exercises.length > 0 && P.days[day].exercises.every(function (e, i) { return exDone(day, i); });
  }
  function celebrated() {
    var c = data().workoutCelebrations || {};
    return !!c[today()];
  }
  function markCelebrated() {
    var d = data();
    if (!d.workoutCelebrations) d.workoutCelebrations = {};
    d.workoutCelebrations[today()] = Date.now();
    save();
  }

  /* ---------------- icons / shell ---------------- */
  function sprite() {
    return '<svg width="0" height="0" style="position:absolute"><defs>' +
      '<linearGradient id="zw-rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8fb3cc"/><stop offset="1" stop-color="#dcc7a8"/></linearGradient>' +
      '<symbol id="zw-i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></symbol>' +
      '<symbol id="zw-i-dumb" viewBox="0 0 24 24"><path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/></symbol>' +
      '<symbol id="zw-i-trend" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></symbol>' +
      '<symbol id="zw-i-fork" viewBox="0 0 24 24"><path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 21V3c-2 2-3 5-3 8h3"/></symbol>' +
      '<symbol id="zw-i-user" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path d="M12 8v6M7 10h10M9 21l3-7 3 7"/></symbol>' +
      '<symbol id="zw-i-calc" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/></symbol>' +
      '<symbol id="zw-i-cup" viewBox="0 0 24 24"><path d="M8 4h8v6a4 4 0 01-8 0zM8 6H4v2a3 3 0 003 3M16 6h4v2a3 3 0 01-3 3M12 14v4M8 20h8"/></symbol>' +
      '<symbol id="zw-i-note" viewBox="0 0 24 24"><path d="M5 4h14v16H5zM9 9h6M9 13h4"/></symbol>' +
      '<symbol id="zw-i-play" viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor" stroke="none"/></symbol>' +
      '<symbol id="zw-i-chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></symbol>' +
      '<symbol id="zw-i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" stroke-width="2.4"/></symbol>' +
      '<symbol id="zw-i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
      '</defs></svg>';
  }
  function icon(name, size) {
    var s = size || 19;
    return '<svg class="i" style="width:' + s + 'px;height:' + s + 'px"><use href="#zw-i-' + name + '"/></svg>';
  }
  function navItem(page, iconName, label, current) {
    return '<a href="#" data-zwpage="' + page + '"' + (page === 'admin' ? ' class="admin-only" style="display:none"' : '') + (current ? ' aria-current="page"' : '') + '>' +
      icon(iconName) + '<span>' + esc(label) + '</span></a>';
  }
  function menuText(nav, key, tr, en) {
    return nav[key] || (typeof currentLang !== 'undefined' && currentLang === 'tr' ? tr : en);
  }

  function shell() {
    var s = S();
    var nav = s.nav || {};
    return sprite() +
      '<aside class="rail">' +
        '<div class="brand"><svg width="30" height="30" viewBox="0 0 28 28"><path d="M4 4h20L13 12z" fill="#8fb3cc"/><path d="M24 4v6L9 24H4v-6z" fill="#dcc7a8"/><path d="M9 24h15v-6l-6 3z" fill="#8fb3cc" opacity=".55"/></svg>Zyro</div>' +
        '<nav class="nav" aria-label="' + esc(s.navLabel || 'Menu') + '">' +
          navItem('dashboard', 'grid', menuText(nav, 'dashboard', 'Ana Sayfa', 'Home'), false) +
          navItem('workouts', 'dumb', menuText(nav, 'workouts', 'Antrenman', 'Workout'), true) +
          navItem('posture', 'user', menuText(nav, 'posture', 'Postür', 'Posture'), false) +
          navItem('diet', 'fork', menuText(nav, 'diet', 'Diyet & Beslenme', 'Diet & Nutrition'), false) +
          navItem('progress', 'trend', menuText(nav, 'progress', 'İlerleme', 'Progress'), false) +
          navItem('updates', 'trend', menuText(nav, 'updates', 'Güncellemeler', 'Updates'), false) +
          navItem('notes', 'note', menuText(nav, 'notes', 'Notlar', 'Notes'), false) +
          navItem('comments', 'note', menuText(nav, 'comments', 'Yorumlar', 'Comments'), false) +
          navItem('calculators', 'calc', menuText(nav, 'calculators', 'Hesaplayıcılar', 'Calculators'), false) +
          navItem('beforeafter', 'grid', menuText(nav, 'beforeafter', 'Gelişim', 'Transformation'), false) +
          navItem('achievements', 'cup', menuText(nav, 'achievements', 'Başarımlar', 'Achievements'), false) +
          navItem('leaderboard', 'cup', menuText(nav, 'leaderboard', 'Liderlik Tablosu', 'Leaderboard'), false) +
          navItem('profile', 'user', menuText(nav, 'profile', 'Profil', 'Profile'), false) +
          navItem('admin', 'cup', menuText(nav, 'admin', 'ADMIN MERKEZİ', 'ADMIN CENTER'), false) +
        '</nav>' +
        '<div class="lvl" id="zwLevel"></div>' +
      '</aside>' +
      '<main>' +
        '<header>' +
          '<div><h1>' + esc(s.title1 || 'Workout') + ' <b>' + esc(s.title2 || 'program') + '</b></h1><p class="sub">' + esc(s.subtitle || '') + '</p></div>' +
          '<div class="pill" id="zwPill"></div>' +
        '</header>' +
        '<div class="days" id="zwDays" role="tablist" aria-label="' + esc(s.weeklyProgram || 'Weekly program') + '"></div>' +
        '<div class="grid">' +
          '<section class="p s8" id="zwList"></section>' +
          '<aside class="p s4">' +
            '<div class="lab">' + esc(s.todayFocus || '') + '</div>' +
            '<div class="big" id="zwFocus"></div>' +
            '<div class="note"><span><b>RIR</b> ' + esc(s.rirNote || '') + '</span></div>' +
            '<div class="note"><span><b>' + esc(s.compoundWord || 'Compound lifts') + '</b> ' + esc(s.compoundNote || '') + '</span></div>' +
            '<div class="note"><span><b>' + esc(s.isoWord || 'Isolation lifts') + '</b> ' + esc(s.isoNote || '') + '</span></div>' +
          '</aside>' +
          '<section class="p s7">' +
            '<div class="lab"><b>' + esc(s.freeLog || 'Free log') + '</b><span>' + esc(s.freeLogSub || '') + '</span></div>' +
            '<div class="chips" id="zwChips" role="group" aria-label="' + esc(s.category || 'Category') + '"></div>' +
            '<div style="margin-top:14px"><label class="cap" for="zwExs">' + esc(s.exercise || 'Exercise') + '</label><select class="in" id="zwExs"></select></div>' +
            '<div class="f3">' +
              '<div><div class="cap"><span>' + esc(s.weight || 'Weight') + '</span><span class="seg useg"><button data-zwu="kg" aria-pressed="true">kg</button><button data-zwu="lbs" aria-pressed="false">lbs</button></span></div>' +
                '<div class="st"><button data-zst="wgt" data-zwd="-2.5" aria-label="' + esc(s.decrease || 'Decrease') + '">−</button><input id="zwWgt" inputmode="decimal" placeholder="0" aria-label="' + esc(s.weight || 'Weight') + '"><button data-zst="wgt" data-zwd="2.5" aria-label="' + esc(s.increase || 'Increase') + '">+</button></div></div>' +
              '<div><div class="cap"><span>' + esc(s.reps || 'Reps') + '</span></div>' +
                '<div class="st"><button data-zst="rep" data-zwd="-1" aria-label="' + esc(s.decrease || 'Decrease') + '">−</button><input id="zwRep" inputmode="numeric" placeholder="0" aria-label="' + esc(s.reps || 'Reps') + '"><button data-zst="rep" data-zwd="1" aria-label="' + esc(s.increase || 'Increase') + '">+</button></div></div>' +
              '<div><div class="cap"><span>' + esc(s.sets || 'Sets') + '</span></div>' +
                '<div class="st"><button data-zst="set" data-zwd="-1" aria-label="' + esc(s.decrease || 'Decrease') + '">−</button><input id="zwSet" inputmode="numeric" placeholder="0" aria-label="' + esc(s.sets || 'Sets') + '"><button data-zst="set" data-zwd="1" aria-label="' + esc(s.increase || 'Increase') + '">+</button></div></div>' +
            '</div>' +
            '<button class="btn" id="zwSave">' + icon('plus', 16) + esc(s.addRecord || 'Add record') + '</button>' +
            '<div class="err" id="zwErr" role="alert"></div>' +
            '<a class="link" href="#" data-zwpage="progress"><span>' + esc(s.viewStrength || 'View strength progress') + '</span><span>›</span></a>' +
          '</section>' +
          '<section class="p s5">' +
            '<div class="lab"><b>' + esc(s.todaysRecords || "Today's log") + '</b><span class="tag" id="zwCnt">0</span></div>' +
            '<div id="zwLog"></div>' +
          '</section>' +
        '</div>' +
      '</main>' +
      '<div class="toast" id="zwToast" role="status" aria-live="polite"></div>' +
      '<div class="fin" id="zwFin"></div>' +
      '<canvas id="zwCf" aria-hidden="true"></canvas>';
  }

  /* ---------------- render parts ---------------- */
  function renderPill() {
    var el = document.getElementById('zwPill');
    if (!el) return;
    var s = S();
    var key = P.todayKey();
    var p = P.days[key];
    if (!p || p.rest) el.textContent = s.restDayPill || 'Rest day today';
    else el.textContent = (s.todayPill || function (d, sp) { return 'Today: ' + d + ' · ' + sp; })(p.name[lang()], p.split);
  }

  function renderDays() {
    var el = document.getElementById('zwDays');
    if (!el) return;
    var s = S();
    var todayKey = P.todayKey();
    el.innerHTML = P.order.map(function (key) {
      var p = P.days[key];
      var isToday = key === todayKey;
      if (!p || p.rest) {
        return '<div class="day rest' + (isToday ? ' today' : '') + '"><small>' + esc(p ? p.abbr[lang()] : key) + '</small><b>' + esc(s.restWord || 'Rest') + '</b><i></i></div>';
      }
      var total = totalSets(key);
      var pct = total ? Math.round((setsDone(key) / total) * 100) : 0;
      return '<button class="day' + (isToday ? ' today' : '') + '" role="tab" aria-selected="' + (key === selectedDay) + '" data-zday="' + key + '">' +
        '<small>' + esc(p.abbr[lang()]) + '</small><b>' + esc(p.split) + '</b><i><u style="--w:' + pct + '%"></u></i></button>';
    }).join('');
  }

  function renderFocus() {
    var el = document.getElementById('zwFocus');
    if (!el) return;
    var p = P.days[selectedDay];
    el.textContent = p ? p.focus[lang()] : '';
  }

  function setSuffix(s) {
    return s.ok ? s.u : unit;
  }

  function renderList(animate) {
    var el = document.getElementById('zwList');
    if (!el) return;
    var s = S();
    var p = P.days[selectedDay];
    if (!p || p.rest) { el.innerHTML = ''; return; }
    var n = p.exercises.length;
    var finished = exDoneCount(selectedDay);
    el.innerHTML = '<div class="head">' +
        '<div><h2>' + esc(p.name[lang()]) + ' · ' + esc(p.split) + '</h2><p>' + esc(s.priority || 'Priority') + ': ' + esc(p.focus[lang()]) + '</p></div>' +
        '<div class="hr">' +
          '<div class="seg useg"><button data-zwu="kg" aria-pressed="' + (unit === 'kg') + '">kg</button><button data-zwu="lbs" aria-pressed="' + (unit === 'lbs') + '">lbs</button></div>' +
          '<div class="rw"><svg viewBox="0 0 100 100"><circle class="t" cx="50" cy="50" r="42"/><circle class="v" id="zwRv" cx="50" cy="50" r="42" pathLength="1"/></svg><b>' + finished + '/' + n + '</b></div>' +
        '</div>' +
      '</div>' +
      p.exercises.map(function (e, i) {
        var a = arr(selectedDay, i);
        var key = selectedDay + '|' + i;
        var isOpen = openKey === key;
        var done = exDone(selectedDay, i);
        return '<div class="ex' + (animate ? ' ent' : '') + (done ? ' ok' : '') + (isOpen ? ' open' : '') + '" data-zwk="' + key + '" style="--n:' + i + '">' +
          '<button class="ex-h" aria-expanded="' + isOpen + '"><span class="nm">' + esc(e.name) + '<span>' + esc((s.cats || {})[e.cat] || e.cat) + '</span></span>' +
          '<span class="meta"><b>' + e.sets + ' × ' + esc(e.reps) + '</b><span>RIR ' + esc(e.rir) + '</span></span>' +
          '<span class="prog">' + a.map(function (set) { return '<u class="' + (set.ok ? 'on' : '') + '"></u>'; }).join('') + '</span>' +
          '<svg class="i chev"><use href="#zw-i-chev"/></svg></button>' +
          '<div class="sets"><div><div class="sets-in">' +
            a.map(function (set, j) {
              return '<div class="sr-row' + (set.ok ? ' ok' : '') + '"><label>' + esc(s.set || 'Set') + ' ' + (j + 1) + '</label>' +
                '<div class="fld"><input class="in" inputmode="decimal" data-zwf="w" data-zwj="' + j + '" placeholder="0" value="' + esc(set.w) + '" aria-label="' + esc((s.set || 'Set') + ' ' + (j + 1) + ' ' + (s.weight || 'weight')) + '"><em>' + esc(setSuffix(set)) + '</em></div>' +
                '<div class="fld"><input class="in" inputmode="numeric" data-zwf="r" data-zwj="' + j + '" placeholder="' + esc(String(e.reps).split('–')[0]) + '" value="' + esc(set.r) + '" aria-label="' + esc((s.set || 'Set') + ' ' + (j + 1) + ' ' + (s.repsShort || 'reps')) + '"><em>' + esc(s.repsShort || 'reps') + '</em></div>' +
                '<button class="ck" data-zwj="' + j + '" aria-pressed="' + set.ok + '" aria-label="' + esc((s.set || 'Set') + ' ' + (j + 1) + ' ' + (s.completeWord || 'complete')) + '"><svg class="i" style="width:22px;height:22px"><use href="#zw-i-check"/></svg></button></div>';
            }).join('') +
            '<div class="foot"><span>' + esc(s.target || 'Target') + ': ' + esc(e.reps) + ' ' + esc(s.repsShort || 'reps') + ' · RIR ' + esc(e.rir) + '</span>' +
            '<a class="w" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(e.name + ' form') + '">' + icon('play', 11) + esc(s.watch || 'Watch') + '</a></div>' +
          '</div></div></div></div>';
      }).join('');
    requestAnimationFrame(function () {
      var v = document.getElementById('zwRv');
      if (v) v.style.strokeDashoffset = String(1 - (n ? finished / n : 0));
    });
  }

  function renderLevel() {
    var el = document.getElementById('zwLevel');
    if (!el) return;
    var s = S();
    var xp = Number(call('calculateXP', 0)) || 0;
    var level = Number(call('calculateLevel', 1)) || 1;
    var current = 0;
    var next = 50;
    try {
      if (typeof getXPForLevel === 'function') {
        current = getXPForLevel(level);
        next = getXPForLevel(level + 1);
      }
    } catch (e) { /* ignore */ }
    var range = next - current;
    var progress = range > 0 ? Math.max(0, Math.min(100, ((xp - current) / range) * 100)) : 100;
    el.innerHTML = '<b>' + esc(s.level || 'Level') + ' ' + level + '</b><span>' + fmt(xp) + ' XP</span><div class="xp"><i style="width:' + progress.toFixed(1) + '%"></i></div>';
  }

  function renderChips() {
    var el = document.getElementById('zwChips');
    if (!el) return;
    var cats = S().cats || {};
    el.innerHTML = Object.keys(cats).map(function (key) {
      return '<button data-zwc="' + key + '" aria-pressed="' + (key === freeCat) + '">' + esc(cats[key]) + '</button>';
    }).join('');
  }

  function exerciseOptions() {
    var out = P.allExercises.slice();
    var seen = {};
    out.forEach(function (e) { seen[e.name] = true; });
    try {
      if (typeof EXERCISE_CATEGORIES !== 'undefined' && EXERCISE_CATEGORIES) {
        Object.keys(EXERCISE_CATEGORIES).forEach(function (cat) {
          (EXERCISE_CATEGORIES[cat] || []).forEach(function (name) {
            if (seen[name]) return;
            seen[name] = true;
            out.push({ name: name, sets: 1, reps: '', rir: '', cat: cat });
          });
        });
      }
    } catch (e) { /* ignore */ }
    return out;
  }

  function renderOptions() {
    var el = document.getElementById('zwExs');
    if (!el) return;
    var s = S();
    var seen = {};
    var options = ['<option value="">' + esc(s.selectExercise || 'Select exercise…') + '</option>'];
    exerciseOptions().forEach(function (e) {
      if (freeCat !== 'all' && e.cat !== freeCat) return;
      if (seen[e.name]) return;
      seen[e.name] = true;
      options.push('<option value="' + esc(e.name) + '">' + esc(e.name) + '</option>');
    });
    el.innerHTML = options.join('');
  }

  function renderLog() {
    var el = document.getElementById('zwLog');
    var cnt = document.getElementById('zwCnt');
    if (!el) return;
    var s = S();
    var groups = {};
    var order = [];
    var totalVolume = 0;
    todayLogs().forEach(function (l) {
      var name = l.exercise;
      if (!groups[name]) { groups[name] = { name: name, program: [], free: [], volume: 0 }; order.push(name); }
      var g = groups[name];
      if (l.free) {
        var fv = (Number(l.weight) || 0) * (Number(l.reps) || 0) * (Number(l.sets) || 1);
        g.volume += fv;
        g.free.push({ sets: Number(l.sets) || 1, reps: Number(l.reps) || 0, w: Number(l.inputWeight) || 0, u: l.unit === 'lbs' ? 'lbs' : 'kg' });
        totalVolume += fv;
      } else {
        var v = (Number(l.weight) || 0) * (Number(l.reps) || 0);
        g.volume += v;
        g.program.push({ n: parseInt(l.setNumber, 10) || 0, reps: Number(l.reps) || 0, w: Number(l.inputWeight) || 0, u: l.unit === 'lbs' ? 'lbs' : 'kg' });
        totalVolume += v;
      }
    });
    var rows = order.map(function (name) {
      var g = groups[name];
      var chips = g.program.sort(function (a, b) { return a.n - b.n; }).map(function (x) {
        return '<i>' + (x.w ? esc(numText(x.w)) + ' ' + esc(x.u) + ' × ' : '') + x.reps + '</i>';
      });
      g.free.forEach(function (x) {
        chips.push('<i>' + x.sets + ' × ' + x.reps + (x.w ? ' · ' + esc(numText(x.w)) + ' ' + esc(x.u) : '') + '</i>');
      });
      return '<div class="lg"><div>' + esc(g.name) + '<div class="sch">' + chips.join('') + '</div></div><b>' + (g.volume ? fmt(g.volume) + ' kg' : '—') + '</b></div>';
    });
    if (cnt) cnt.textContent = rows.length + ' ' + (s.records || 'records');
    el.innerHTML = rows.length
      ? rows.join('') + '<div class="lg"><span>' + esc(s.totalVolume || 'Total volume') + '</span><b>' + fmt(totalVolume) + ' kg</b></div>'
      : '<div class="empty">' + esc(s.emptyLog || 'No records yet today.') + '</div>';
  }

  function refresh() {
    renderDays();
    renderList(false);
    renderLog();
  }

  /* ---------------- persistence ---------------- */
  function persistSet(day, index, setIndex, set) {
    var ex = P.days[day].exercises[index];
    var date = today();
    var d = data();
    if (!d.workoutLogs) d.workoutLogs = {};
    if (!d.workoutLogs[date]) d.workoutLogs[date] = [];
    var list = d.workoutLogs[date];
    for (var i = list.length - 1; i >= 0; i--) {
      var l = list[i];
      if (!l || l.free) continue;
      if (l.exercise === ex.name && l.day === day && (parseInt(l.setNumber, 10) || 1) === setIndex + 1) list.splice(i, 1);
    }
    if (set.ok) {
      var inputWeight = parseNum(set.w);
      list.push({
        exercise: ex.name,
        day: day,
        setNumber: setIndex + 1,
        weight: inputWeight * (set.u === 'lbs' ? 0.4536 : 1),
        inputWeight: inputWeight,
        unit: set.u,
        reps: parseNum(set.r),
        sets: 1,
        date: date,
        timestamp: Date.now(),
        source: 'program'
      });
    }
    if (!list.length) delete d.workoutLogs[date];
    save();
  }

  function focusNext() {
    var row = document.querySelector('.zw .ex.open .sr-row:not(.ok)');
    if (!row) return;
    var inputs = Array.prototype.slice.call(row.querySelectorAll('input'));
    var target = inputs.filter(function (input) { return !input.value; })[0] || inputs[1] || inputs[0];
    if (target) target.focus({ preventScroll: true });
  }

  function confirmSet(button) {
    var exEl = button.closest('.ex');
    if (!exEl) return;
    var parts = exEl.dataset.zwk.split('|');
    var day = parts[0];
    var index = parseInt(parts[1], 10);
    var setIndex = parseInt(button.dataset.zwj, 10);
    var list = arr(day, index);
    var set = list[setIndex];
    if (!set) return;

    if (set.ok) {
      set.ok = false;
      persistSet(day, index, setIndex, set);
      refresh();
      return;
    }
    if (!(parseNum(set.r) > 0)) {
      var row = button.closest('.sr-row');
      var reps = row ? row.querySelector('[data-zwf="r"]') : null;
      if (reps) { reps.classList.add('bad'); reps.focus(); }
      return;
    }
    set.w = numText(parseNum(set.w));
    set.ok = true;
    set.u = unit;
    var next = list[setIndex + 1];
    if (next && !next.w) next.w = set.w;
    persistSet(day, index, setIndex, set);

    if (list.every(function (x) { return x.ok; })) {
      openKey = null;
      refresh();
      doneExercise(day, index);
    } else {
      refresh();
      setTimeout(focusNext, 40);
    }
  }

  function doneExercise(day, index) {
    var s = S();
    var ex = P.days[day].exercises[index];
    if (allDone(day)) {
      if (!celebrated()) {
        markCelebrated();
        clearTimeout(celebratedTimer);
        celebratedTimer = setTimeout(function () { celebrate(day); }, 450);
      }
      return;
    }
    var v = volOf(arr(day, index));
    toast(ex.name + ' ' + (s.completedWord || 'completed'), arr(day, index).length + ' ' + (s.setsWord || 'sets') + (v ? ' · ' + fmt(v) + ' kg ' + (s.volumeWord || 'volume') : ''));
  }

  function toast(title, sub) {
    var el = document.getElementById('zwToast');
    if (!el) return;
    el.innerHTML = '<div class="ic">' + icon('check', 22) + '</div><div><b>' + esc(title) + '</b><span>' + esc(sub) + '</span></div>';
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 4200);
  }

  function celebrate(day) {
    var el = document.getElementById('zwFin');
    if (!el) return;
    var s = S();
    var p = P.days[day];
    el.innerHTML = '<div class="card" role="dialog" aria-modal="true" aria-label="' + esc(s.workoutDone || 'Workout complete') + '"><div class="ic">' + icon('check', 30) + '</div>' +
      '<h3>' + esc(s.workoutDone || 'Workout complete') + '</h3>' +
      '<p>' + esc(p.name[lang()]) + ' · ' + esc(p.split) + '. ' + esc(s.workoutDoneTail || '') + '</p>' +
      '<div class="stats"><div><b>' + p.exercises.length + '</b><span>' + esc(s.exercises || 'exercises') + '</span></div><div><b>' + setsDone(day) + '</b><span>' + esc(s.setsWord || 'sets') + '</span></div><div><b>' + fmt(dayVol(day)) + '</b><span>' + esc(s.kgVolume || 'kg volume') + '</span></div></div>' +
      '<button class="btn" id="zwFx">' + esc(s.close || 'Close') + '</button></div>';
    el.classList.add('show');
    confetti();
    var fx = document.getElementById('zwFx');
    if (fx) fx.focus();
  }

  function maybeCelebrate(day) {
    if (!day || !P.days[day] || P.days[day].rest) return;
    if (!allDone(day)) return;
    if (celebrated()) return;
    markCelebrated();
    clearTimeout(celebratedTimer);
    celebratedTimer = setTimeout(function () { celebrate(day); }, 650);
  }

  function confetti() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) { /* ignore */ }
    var canvas = document.getElementById('zwCf');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var colors = ['#8fb3cc', '#dcc7a8', '#eceef1', '#a9c7da', '#c99a9a'];
    var t0 = performance.now();
    var particles = [];
    for (var i = 0; i < 170; i++) {
      var a = Math.random() * 6.283;
      var v = 6 + Math.random() * 10;
      particles.push({
        x: canvas.width / 2, y: canvas.height * 0.4,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6,
        w: 6 + Math.random() * 7, h: 4 + Math.random() * 5,
        r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        c: colors[Math.random() * 5 | 0]
      });
    }
    function frame(t) {
      var elapsed = t - t0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.vy += 0.28; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - elapsed / 4200);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (elapsed < 4200) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(frame);
  }

  /* ---------------- free log ---------------- */
  function saveFree() {
    var s = S();
    var select = document.getElementById('zwExs');
    var repInput = document.getElementById('zwRep');
    var setInput = document.getElementById('zwSet');
    var weightInput = document.getElementById('zwWgt');
    var err = document.getElementById('zwErr');
    var name = select ? select.value : '';
    var reps = parseNum(repInput ? repInput.value : '');
    var sets = parseNum(setInput ? setInput.value : '');
    if (!name || reps < 1 || sets < 1) {
      if (err) err.textContent = s.fillRequired || 'Fill in exercise, reps and sets.';
      return;
    }
    if (err) err.textContent = '';
    var inputWeight = parseNum(weightInput ? weightInput.value : '');
    var d = data();
    var date = today();
    if (!d.workoutLogs) d.workoutLogs = {};
    if (!d.workoutLogs[date]) d.workoutLogs[date] = [];
    d.workoutLogs[date].push({
      exercise: name,
      day: selectedDay,
      free: true,
      source: 'free',
      sets: sets,
      reps: reps,
      weight: inputWeight * (unit === 'lbs' ? 0.4536 : 1),
      inputWeight: inputWeight,
      unit: unit,
      date: date,
      timestamp: Date.now()
    });
    save();
    if (weightInput) weightInput.value = '';
    if (repInput) repInput.value = '';
    if (setInput) setInput.value = '';
    renderLog();
    renderDays();
    toast(name + ' ' + (s.savedWord || 'saved'), sets + ' ' + (s.setsWord || 'sets') + ' × ' + reps + ' ' + (s.repsShort || 'reps'));
  }

  /* ---------------- events ---------------- */
  function bind() {
    host.addEventListener('click', function (e) {
      var nav = e.target.closest('[data-zwpage]');
      if (nav) {
        e.preventDefault();
        var page = nav.getAttribute('data-zwpage');
        if (typeof window.switchPage === 'function') window.switchPage(page);
        else if (typeof window.navigateTo === 'function') window.navigateTo(page);
        return;
      }

      var dayBtn = e.target.closest('[data-zday]');
      if (dayBtn) {
        selectedDay = dayBtn.getAttribute('data-zday');
        openKey = null;
        renderDays();
        renderList(true);
        renderFocus();
        return;
      }

      var unitBtn = e.target.closest('.useg button');
      if (unitBtn) {
        unit = unitBtn.getAttribute('data-zwu') === 'lbs' ? 'lbs' : 'kg';
        host.querySelectorAll('.useg button').forEach(function (btn) {
          btn.setAttribute('aria-pressed', btn.getAttribute('data-zwu') === unit);
        });
        renderList(false);
        return;
      }

      var head = e.target.closest('.ex-h');
      if (head) {
        var exEl = head.parentElement;
        var key = exEl.getAttribute('data-zwk');
        var willOpen = openKey !== key;
        openKey = willOpen ? key : null;
        host.querySelectorAll('.ex').forEach(function (x) {
          var on = willOpen && x === exEl;
          x.classList.toggle('open', on);
          var h = x.querySelector('.ex-h');
          if (h) h.setAttribute('aria-expanded', on);
        });
        if (willOpen) setTimeout(focusNext, 380);
        return;
      }

      var check = e.target.closest('.ck');
      if (check) { confirmSet(check); return; }

      var chip = e.target.closest('[data-zwc]');
      if (chip) {
        freeCat = chip.getAttribute('data-zwc');
        renderChips();
        renderOptions();
        return;
      }

      var step = e.target.closest('[data-zst]');
      if (step) {
        var input = document.getElementById('zw' + (step.getAttribute('data-zst') === 'wgt' ? 'Wgt' : step.getAttribute('data-zst') === 'rep' ? 'Rep' : 'Set'));
        if (!input) return;
        var value = Math.max(0, (parseNum(input.value) || 0) + Number(step.getAttribute('data-zwd')));
        input.value = Number.isInteger(value) ? String(value) : value.toFixed(1);
        return;
      }

      var saveBtn = e.target.closest('#zwSave');
      if (saveBtn) { saveFree(); return; }

      if (e.target.id === 'zwFin' || e.target.id === 'zwFx') {
        var fin = document.getElementById('zwFin');
        if (fin) fin.classList.remove('show');
      }
    });

    host.addEventListener('input', function (e) {
      var input = e.target.closest('[data-zwf]');
      if (!input) return;
      var exEl = input.closest('.ex');
      if (!exEl) return;
      var parts = exEl.getAttribute('data-zwk').split('|');
      var list = arr(parts[0], parseInt(parts[1], 10));
      var set = list[parseInt(input.getAttribute('data-zwj'), 10)];
      if (!set) return;
      set[input.getAttribute('data-zwf')] = input.value.replace(',', '.');
      input.classList.remove('bad');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var fin = document.getElementById('zwFin');
      if (fin) fin.classList.remove('show');
    });
  }

  /* ---------------- sync ---------------- */
  function paint() {
    host = document.getElementById(HOST_ID);
    if (!host) return;

    document.body.classList.add('zyro-workouts-active');
    if (!mounted) {
      host.classList.add('zw');
      host.innerHTML = shell();
      bind();
      mounted = true;
      resetCache();
      firstRender = true;
    } else {
      rehydrate();
    }
    if (!selectedDay || !P.days[selectedDay] || P.days[selectedDay].rest) selectedDay = defaultDay();
    renderPill();
    renderDays();
    renderList(firstRender);
    firstRender = false;
    renderFocus();
    renderChips();
    renderOptions();
    renderLog();
    renderLevel();
    clearTimeout(celebratedTimer);
    celebratedTimer = setTimeout(function () { maybeCelebrate(selectedDay); }, 700);
  }

  function sync() {
    var page = document.getElementById('pageWorkouts');
    if (!page || !page.classList.contains('active')) {
      if (syncFrame) { cancelAnimationFrame(syncFrame); syncFrame = 0; }
      return;
    }
    document.body.classList.add('zyro-workouts-active');
    // Coalesce the several sync calls that can happen in one tick.
    if (syncFrame) return;
    syncFrame = requestAnimationFrame(function () {
      syncFrame = 0;
      var active = document.getElementById('pageWorkouts');
      if (active && active.classList.contains('active')) paint();
    });
  }

  window.ZyroWorkouts = { sync: sync };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(sync, 0); });
  else setTimeout(sync, 0);
})();
