/* ============================================================
   Zyro — Posture page controller
   Approved posture design. Reads the shared 7-day posture program
   and persists every completed round into the app data layer.
   ============================================================ */
(function () {
  'use strict';

  var HOST_ID = 'zyroPostureRoot';
  var P = window.ZYRO_POSTURE;
  if (!P) return;

  var host = null;
  var mounted = false;
  var selectedDay = null;
  var openKey = null;
  var toastTimer = null;
  var celebrationTimer = null;
  var firstRender = true;
  var syncFrame = 0;
  var T = null;

  /* ---------------- helpers ---------------- */
  function lang() {
    try { return typeof currentLang !== 'undefined' && currentLang === 'tr' ? 'tr' : 'en'; }
    catch (e) { return 'en'; }
  }
  function S() {
    try {
      var set = I18N[lang()];
      if (set && set.zp) return set.zp;
      if (I18N.en && I18N.en.zp) return I18N.en.zp;
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
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function typeOf(day) { return P.type(day); }
  function exName(ex) { return P.label(ex, lang()); }
  function totalRounds(day) { return P.totalRounds(day); }
  function mmss(sec) {
    sec = Math.max(0, Math.ceil(Number(sec) || 0));
    return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  }
  function todayLogs() {
    var logs = (data().postureLogs || {})[today()] || [];
    return logs.filter(function (l) { return l && l.exercise; });
  }
  function logKey(day, exId, round) { return day + '|' + exId + '|' + round; }
  function doneSet(day) {
    var set = {};
    todayLogs().forEach(function (l) {
      if (l.day !== day) return;
      set[l.exercise + '|' + l.round] = true;
    });
    return set;
  }
  function arr(day, index) {
    var type = typeOf(day);
    var ex = type && type.exercises[index];
    if (!ex) return [];
    var done = doneSet(day);
    return ex.rounds.map(function (round, i) {
      return !!done[ex.id + '|' + i];
    });
  }
  function exDoneCount(day) {
    var type = typeOf(day);
    if (!type) return 0;
    return type.exercises.filter(function (ex, i) {
      return arr(day, i).every(Boolean);
    }).length;
  }
  function roundsDone(day) {
    var set = doneSet(day);
    var type = typeOf(day);
    if (!type) return 0;
    var count = 0;
    type.exercises.forEach(function (ex) {
      ex.rounds.forEach(function (round, i) {
        if (set[ex.id + '|' + i]) count++;
      });
    });
    return count;
  }
  function dayProgress(day) {
    var total = totalRounds(day);
    return total ? Math.round((roundsDone(day) / total) * 100) : 0;
  }
  function allDone(day) {
    return totalRounds(day) > 0 && roundsDone(day) >= totalRounds(day);
  }
  function celebrated() {
    var c = data().postureCelebrations || {};
    return !!c[today()];
  }
  function markCelebrated() {
    var d = data();
    if (!d.postureCelebrations) d.postureCelebrations = {};
    d.postureCelebrations[today()] = Date.now();
    save();
  }
  function defaultDay() {
    var key = P.todayKey();
    if (P.days[key]) return key;
    return 'pzt';
  }
  function streak() {
    var logs = data().postureLogs || {};
    var dates = Object.keys(logs).filter(function (d) {
      return (logs[d] || []).some(function (l) { return l && l.exercise; });
    });
    if (!dates.length) return 0;
    var set = {};
    dates.forEach(function (d) { set[d] = true; });
    var cursor = new Date();
    var t = today();
    if (!set[t]) cursor.setDate(cursor.getDate() - 1);
    var count = 0;
    for (var i = 0; i < 365; i++) {
      var d = new Date(cursor);
      d.setDate(d.getDate() - i);
      var off = d.getTimezoneOffset() * 60000;
      var key = new Date(d.getTime() - off).toISOString().split('T')[0];
      if (!set[key]) break;
      count++;
    }
    return count;
  }

  /* ---------------- icons / shell ---------------- */
  function sprite() {
    return '<svg width="0" height="0" style="position:absolute"><defs>' +
      '<linearGradient id="zp-rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8fb3cc"/><stop offset="1" stop-color="#dcc7a8"/></linearGradient>' +
      '<symbol id="zp-i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></symbol>' +
      '<symbol id="zp-i-dumb" viewBox="0 0 24 24"><path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/></symbol>' +
      '<symbol id="zp-i-trend" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></symbol>' +
      '<symbol id="zp-i-fork" viewBox="0 0 24 24"><path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10M17 21V3c-2 2-3 5-3 8h3"/></symbol>' +
      '<symbol id="zp-i-user" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path d="M12 8v6M7 10h10M9 21l3-7 3 7"/></symbol>' +
      '<symbol id="zp-i-calc" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/></symbol>' +
      '<symbol id="zp-i-cup" viewBox="0 0 24 24"><path d="M8 4h8v6a4 4 0 01-8 0zM8 6H4v2a3 3 0 003 3M16 6h4v2a3 3 0 01-3 3M12 14v4M8 20h8"/></symbol>' +
      '<symbol id="zp-i-note" viewBox="0 0 24 24"><path d="M5 4h14v16H5zM9 9h6M9 13h4"/></symbol>' +
      '<symbol id="zp-i-play" viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z" fill="currentColor" stroke="none"/></symbol>' +
      '<symbol id="zp-i-chev" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></symbol>' +
      '<symbol id="zp-i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" stroke-width="2.4"/></symbol>' +
      '<symbol id="zp-i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>' +
      '</defs></svg>';
  }
  function icon(name, size) {
    var s = size || 19;
    return '<svg class="i" style="width:' + s + 'px;height:' + s + 'px"><use href="#zp-i-' + name + '"/></svg>';
  }
  function shell() {
    var s = S();
    return sprite() +
      '<main>' +
        '<header>' +
          '<div><h1>' + esc(s.title1 || 'Posture') + ' <b>' + esc(s.title2 || 'program') + '</b></h1><p class="sub">' + esc(s.subtitle || '') + '</p></div>' +
          '<div class="pill" id="zpPill"></div>' +
        '</header>' +
        '<div class="days" id="zpDays" role="tablist" aria-label="' + esc(s.weeklyProgram || 'Weekly program') + '"></div>' +
        '<div class="grid">' +
          '<section class="p s8" id="zpList"></section>' +
          '<aside class="p s4">' +
            '<div class="lab">' + esc(s.todayFocus || '') + '</div>' +
            '<div class="big" id="zpFocus"></div>' +
            '<div class="note"><span><b>' + esc(s.timedWord || 'Timed exercises.') + '</b> ' + esc(s.timedNote || '') + '</span></div>' +
            '<div class="note"><span><b>' + esc(s.repWord || 'Rep exercises.') + '</b> ' + esc(s.repNote || '') + '</span></div>' +
            '<div class="note"><span><b>' + esc(s.slowWord || 'Slow and controlled') + '</b> ' + esc(s.slowNote || '') + '</span></div>' +
            '<div class="pstats" id="zpStats"></div>' +
          '</aside>' +
        '</div>' +
      '</main>' +
      '<div class="toast" id="zpToast" role="status" aria-live="polite"></div>' +
      '<div class="fin" id="zpFin"></div>' +
      '<canvas id="zpCf" aria-hidden="true"></canvas>';
  }

  /* ---------------- render parts ---------------- */
  function renderPill() {
    var el = document.getElementById('zpPill');
    if (!el) return;
    var s = S();
    var type = typeOf(P.todayKey());
    if (!type) { el.textContent = ''; return; }
    el.textContent = (s.todayPill || function (day, name) { return 'Today: ' + day + ' · ' + name; })(P.days[P.todayKey()].name[lang()], type.name[lang()]);
  }

  function renderDays() {
    var el = document.getElementById('zpDays');
    if (!el) return;
    var s = S();
    var todayKey = P.todayKey();
    el.innerHTML = P.order.map(function (key) {
      var day = P.days[key];
      var type = typeOf(key);
      var pct = dayProgress(key);
      return '<button class="day' + (key === todayKey ? ' today' : '') + '" role="tab" aria-selected="' + (key === selectedDay) + '" data-zpday="' + key + '">' +
        '<small>' + esc(day.abbr[lang()]) + '</small><b>' + esc(type ? type.name[lang()] : '') + '</b><i><u style="--w:' + pct + '%"></u></i></button>';
    }).join('');
  }

  function renderFocus() {
    var el = document.getElementById('zpFocus');
    if (!el) return;
    var type = typeOf(selectedDay);
    el.textContent = type ? type.focus[lang()] : '';
  }

  function renderStats() {
    var el = document.getElementById('zpStats');
    if (!el) return;
    var s = S();
    var xp = Number(call('calculateXP', 0)) || 0;
    var days = streak();
    el.innerHTML = '<div><b>' + fmt(days) + '</b><span>' + esc(s.streakWord || 'day streak') + '</span></div>' +
      '<div><b>' + fmt(xp) + '</b><span>' + esc(s.xpWord || 'XP') + '</span></div>';
  }

  function renderLevel() {
    var el = document.getElementById('zpLevel');
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

  function timerState(key, j, value) {
    if (!T || T.key !== key || T.j !== j) return null;
    var left = T.run ? Math.max(0, Math.ceil((T.end - Date.now()) / 1000)) : T.left;
    return { on: true, run: T.run, left: left, total: T.total };
  }

  function renderList(animate) {
    var el = document.getElementById('zpList');
    if (!el) return;
    var s = S();
    var type = typeOf(selectedDay);
    if (!type) { el.innerHTML = ''; return; }
    var n = type.exercises.length;
    var finished = exDoneCount(selectedDay);
    el.innerHTML = '<div class="head">' +
        '<div><h2>' + esc(P.days[selectedDay].name[lang()]) + ' · ' + esc(type.name[lang()]) + '</h2><p>' + esc(s.priority || 'Focus') + ': ' + esc(type.focus[lang()]) + '</p></div>' +
        '<div class="hr">' +
          '<div class="rw"><svg viewBox="0 0 100 100"><circle class="t" cx="50" cy="50" r="42"/><circle class="v" id="zpRv" cx="50" cy="50" r="42" pathLength="1"/></svg><b>' + finished + '/' + n + '</b></div>' +
        '</div>' +
      '</div>' +
      type.exercises.map(function (ex, i) {
        var a = arr(selectedDay, i);
        var key = selectedDay + '|' + i;
        var isOpen = openKey === key;
        var done = a.every(Boolean);
        return '<div class="ex' + (animate ? ' ent' : '') + (done ? ' ok' : '') + (isOpen ? ' open' : '') + '" data-zpk="' + key + '" style="--n:' + i + '">' +
          '<button class="ex-h" aria-expanded="' + isOpen + '"><span class="nm">' + esc(exName(ex)) + '<span>' + esc(ex.area[lang()]) + '</span></span>' +
          '<span class="meta"><b>' + esc(ex.summary[lang()]) + '</b><span>' + esc(ex.type === 'time' ? (s.timedSmall || 'Timed') : (s.repSmall || 'Reps')) + '</span></span>' +
          '<span class="prog">' + a.map(function (ok) { return '<u class="' + (ok ? 'on' : '') + '"></u>'; }).join('') + '</span>' +
          '<svg class="i chev"><use href="#zp-i-chev"/></svg></button>' +
          '<div class="sets"><div><div class="sets-in">' +
            ex.rounds.map(function (round, j) {
              var ok = a[j];
              var ts = timerState(key, j, ex.value);
              var running = ts && ts.run;
              var left = ts ? ts.left : ex.value;
              var pct = ts ? ((ts.total - ts.left) / ts.total) * 100 : 0;
              var mid = ex.type === 'time'
                ? '<span class="tm" data-ztk="' + key + '|' + j + '">' + mmss(ok ? ex.value : left) + '</span>'
                : '<span class="tm rp">' + ex.value + ' ' + esc(s.repUnit || 'reps') + '</span>';
              var btn;
              if (ok) {
                btn = '<button class="ck" data-zpa="u" data-zpj="' + j + '" aria-pressed="true" aria-label="' + esc(round[lang()] + ' ' + (s.doneWord || 'complete, undo')) + '"><svg class="i" style="width:22px;height:22px"><use href="#zp-i-check"/></svg></button>';
              } else if (ex.type === 'time') {
                btn = '<button class="go' + (running ? ' run' : '') + '" data-zpa="t" data-zpj="' + j + '">' +
                  (running ? esc(s.stopWord || 'Pause') : (ts && left < ex.value ? esc(s.resumeWord || 'Resume') : esc(s.startWord || 'Start'))) + '</button>';
              } else {
                btn = '<button class="ck" data-zpa="m" data-zpj="' + j + '" aria-pressed="false" aria-label="' + esc(round[lang()] + ' ' + (s.completeRound || 'complete')) + '"><svg class="i" style="width:22px;height:22px"><use href="#zp-i-check"/></svg></button>';
              }
              return '<div class="rd' + (ok ? ' ok' : '') + '" style="--p:' + (ok ? 0 : pct) + '%"><label>' + esc(round[lang()]) + '</label>' + mid + btn + '</div>';
            }).join('') +
            '<div class="foot"><span>' + esc(ex.note[lang()]) + '</span>' +
              '<a class="w" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' + encodeURIComponent(ex.name.split(' (')[0] + ' exercise') + '">' + icon('play', 11) + esc(s.watch || 'Watch') + '</a></div>' +
          '</div></div></div></div>';
      }).join('');
    requestAnimationFrame(function () {
      var v = document.getElementById('zpRv');
      if (v) v.style.strokeDashoffset = String(1 - (n ? finished / n : 0));
    });
  }

  function refresh() {
    renderDays();
    renderList(false);
    renderFocus();
    renderStats();
  }

  /* ---------------- persistence ---------------- */
  function persistRound(day, index, roundIndex, done) {
    var type = typeOf(day);
    var ex = type && type.exercises[index];
    if (!ex) return;
    var d = data();
    var date = today();
    if (!d.postureLogs) d.postureLogs = {};
    if (!d.postureLogs[date]) d.postureLogs[date] = [];
    var list = d.postureLogs[date];
    for (var i = list.length - 1; i >= 0; i--) {
      var l = list[i];
      if (!l) continue;
      if (l.exercise === ex.id && l.day === day && Number(l.round) === roundIndex) list.splice(i, 1);
    }
    if (done) {
      list.push({
        exercise: ex.id,
        exerciseName: ex.name,
        day: day,
        round: roundIndex,
        roundLabel: ex.rounds[roundIndex] ? ex.rounds[roundIndex].en : String(roundIndex + 1),
        date: date,
        timestamp: Date.now(),
        source: 'posture'
      });
    }
    if (!list.length) delete d.postureLogs[date];
    save();
  }

  function markRound(day, index, roundIndex, done) {
    persistRound(day, index, roundIndex, done);
    if (done) {
      var a = arr(day, index);
      if (a.every(Boolean)) {
        openKey = null;
        refresh();
        doneExercise(day, index);
        return;
      }
    }
    refresh();
  }

  function doneExercise(day, index) {
    var s = S();
    var type = typeOf(day);
    var ex = type.exercises[index];
    if (allDone(day)) {
      if (!celebrated()) {
        markCelebrated();
        clearTimeout(celebrationTimer);
        celebrationTimer = setTimeout(function () { celebrate(day); }, 450);
      }
      return;
    }
    toast(exName(ex) + ' ' + (s.roundDoneWord || 'complete'), ex.rounds.length + ' ' + (s.roundWord || 'rounds') + ' ' + (s.roundDoneWord || 'complete'));
  }

  function toast(title, sub) {
    var el = document.getElementById('zpToast');
    if (!el) return;
    el.innerHTML = '<div class="ic">' + icon('check', 22) + '</div><div><b>' + esc(title) + '</b><span>' + esc(sub) + '</span></div>';
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 4200);
  }

  function celebrate(day) {
    var el = document.getElementById('zpFin');
    if (!el) return;
    var s = S();
    var type = typeOf(day);
    el.innerHTML = '<div class="card" role="dialog" aria-modal="true" aria-label="' + esc(s.sessionDone || 'Posture session complete') + '"><div class="ic">' + icon('check', 30) + '</div>' +
      '<h3>' + esc(s.sessionDone || 'Posture session complete') + '</h3>' +
      '<p>' + esc(P.days[day].name[lang()]) + ' · ' + esc(type.name[lang()]) + '. ' + esc(s.sessionDoneTail || '') + '</p>' +
      '<div class="stats"><div><b>' + type.exercises.length + '</b><span>' + esc(s.exercises || 'exercises') + '</span></div><div><b>' + roundsDone(day) + '</b><span>' + esc(s.roundWord || 'rounds') + '</span></div></div>' +
      '<button class="btn" id="zpFx">' + esc(s.close || 'Close') + '</button></div>';
    el.classList.add('show');
    confetti();
    var fx = document.getElementById('zpFx');
    if (fx) fx.focus();
  }

  function maybeCelebrate(day) {
    if (!day || !typeOf(day)) return;
    if (!allDone(day)) return;
    if (celebrated()) return;
    markCelebrated();
    clearTimeout(celebrationTimer);
    celebrationTimer = setTimeout(function () { celebrate(day); }, 650);
  }

  function confetti() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) { /* ignore */ }
    var canvas = document.getElementById('zpCf');
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

  /* ---------------- timers ---------------- */
  function stopTimer() {
    if (!T) return;
    clearInterval(T.iv);
    T = null;
  }

  function paintTimer() {
    if (!T) return;
    var el = document.querySelector('[data-ztk="' + T.key + '|' + T.j + '"]');
    if (!el) return;
    var left = T.run ? Math.max(0, Math.ceil((T.end - Date.now()) / 1000)) : T.left;
    el.textContent = mmss(left);
    if (el.parentElement) el.parentElement.style.setProperty('--p', ((T.total - left) / T.total * 100) + '%');
  }

  function toggleTimer(key, j, value) {
    if (T && (T.key !== key || T.j !== j)) stopTimer();
    if (!T) T = { key: key, j: j, left: value, total: value, run: false, iv: 0 };
    if (T.run) {
      T.left = Math.max(0, Math.ceil((T.end - Date.now()) / 1000));
      clearInterval(T.iv);
      T.run = false;
      refresh();
      return;
    }
    T.run = true;
    T.end = Date.now() + T.left * 1000;
    T.iv = setInterval(function () {
      if (!T) return;
      if (document.hidden) return;
      T.left = Math.max(0, Math.ceil((T.end - Date.now()) / 1000));
      paintTimer();
      if (T.left <= 0) {
        var parts = T.key.split('|');
        var day = parts[0];
        var index = parseInt(parts[1], 10);
        var round = T.j;
        stopTimer();
        try { if (navigator.vibrate) navigator.vibrate(180); } catch (e) { /* ignore */ }
        markRound(day, index, round, true);
      }
    }, 250);
    refresh();
  }

  function handleVisibility() {
    if (!T || !T.run) return;
    if (document.hidden) {
      T.left = Math.max(0, Math.ceil((T.end - Date.now()) / 1000));
      clearInterval(T.iv);
      T.run = false;
      refresh();
    }
  }

  /* ---------------- events ---------------- */
  function bind() {
    host.addEventListener('click', function (e) {
      var nav = e.target.closest('[data-zppage]');
      if (nav) {
        e.preventDefault();
        var page = nav.getAttribute('data-zppage');
        if (typeof window.switchPage === 'function') window.switchPage(page);
        else if (typeof window.navigateTo === 'function') window.navigateTo(page);
        return;
      }

      var dayBtn = e.target.closest('[data-zpday]');
      if (dayBtn) {
        stopTimer();
        selectedDay = dayBtn.getAttribute('data-zpday');
        openKey = null;
        renderDays();
        renderList(true);
        renderFocus();
        return;
      }

      var head = e.target.closest('.ex-h');
      if (head) {
        var exEl = head.parentElement;
        var key = exEl.getAttribute('data-zpk');
        var willOpen = openKey !== key;
        openKey = willOpen ? key : null;
        host.querySelectorAll('.ex').forEach(function (x) {
          var on = willOpen && x === exEl;
          x.classList.toggle('open', on);
          var h = x.querySelector('.ex-h');
          if (h) h.setAttribute('aria-expanded', on);
        });
        return;
      }

      var action = e.target.closest('[data-zpa]');
      if (!action) {
        if (e.target.id === 'zpFin' || e.target.id === 'zpFx') {
          var fin = document.getElementById('zpFin');
          if (fin) fin.classList.remove('show');
        }
        return;
      }
      var exWrap = action.closest('.ex');
      if (!exWrap) return;
      var parts = exWrap.getAttribute('data-zpk').split('|');
      var day = parts[0];
      var index = parseInt(parts[1], 10);
      var round = parseInt(action.getAttribute('data-zpj'), 10);
      var kind = action.getAttribute('data-zpa');
      var type = typeOf(day);
      var exercise = type && type.exercises[index];
      if (!exercise) return;

      if (kind === 't') { toggleTimer(day + '|' + index, round, exercise.value); return; }
      if (kind === 'u') {
        if (T && T.key === day + '|' + index && T.j === round) stopTimer();
        markRound(day, index, round, false);
        return;
      }
      markRound(day, index, round, true);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var fin = document.getElementById('zpFin');
      if (fin) fin.classList.remove('show');
    });

    document.addEventListener('visibilitychange', handleVisibility);
  }

  /* ---------------- sync ---------------- */
  function paint() {
    host = document.getElementById(HOST_ID);
    if (!host) return;

    document.body.classList.add('zyro-posture-active');
    if (!mounted) {
      host.classList.add('zw', 'zp');
      host.innerHTML = shell();
      bind();
      mounted = true;
      firstRender = true;
    }
    if (!selectedDay || !P.days[selectedDay]) selectedDay = defaultDay();
    renderPill();
    renderDays();
    renderList(firstRender);
    firstRender = false;
    renderFocus();
    renderStats();
    renderLevel();
    clearTimeout(celebrationTimer);
    celebrationTimer = setTimeout(function () { maybeCelebrate(selectedDay); }, 700);
  }

  function sync() {
    var page = document.getElementById('pagePosture');
    if (!page || !page.classList.contains('active')) {
      if (syncFrame) { cancelAnimationFrame(syncFrame); syncFrame = 0; }
      document.body.classList.remove('zyro-posture-active');
      return;
    }
    document.body.classList.add('zyro-posture-active');
    if (syncFrame) return;
    syncFrame = requestAnimationFrame(function () {
      syncFrame = 0;
      var active = document.getElementById('pagePosture');
      if (active && active.classList.contains('active')) paint();
    });
  }

  window.ZyroPosture = { sync: sync, markRound: markRound, setDay: function (d) { if (P.days[d]) { selectedDay = d; openKey = null; paint(); } } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(sync, 0); });
  else setTimeout(sync, 0);
})();
