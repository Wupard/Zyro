const fs = require('fs');
const path = 'app.js';
let src = fs.readFileSync(path, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';
const nl = (s) => s.replace(/\n/g, eol);

function replaceRange(startNeedle, endNeedle, replacement, stripHeader) {
  const start = src.indexOf(startNeedle);
  if (start < 0) throw new Error('start not found: ' + startNeedle);
  let end = src.indexOf(endNeedle, start);
  if (end < 0) throw new Error('end not found: ' + endNeedle);
  if (stripHeader) {
    const header = src.lastIndexOf('// =============================================', end);
    if (header > start) end = header;
  }
  src = src.slice(0, start) + nl(replacement) + src.slice(end);
  console.log('replaced', startNeedle.slice(0, 55));
}

replaceRange(
  'function refreshDashboard(){',
  'function renderDashboardWarnings',
  `function refreshDashboard(){
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
  if (typeof updateLevelUI === 'function') updateLevelUI();
}

`,
  true
);

replaceRange(
  'function updateStats(){',
  '// STRENGTH DETAILS & PROGRESS (UPGRADED)',
  `function updateStats(){
  // The approved dashboard is rendered by React; keep every legacy caller
  // working by refreshing that view instead of the old DOM nodes.
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
  if (typeof updateLevelUI === 'function') updateLevelUI();
}

`,
  true
);

replaceRange(
  'function updateMuscleMap() {',
  '// Removed tooltip rendering and stats rendering functions completely',
  `function updateMuscleMap() {
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
}

`
);

replaceRange(
  'function renderWeeklyReport() {',
  '// LEVEL / XP SYSTEM',
  `function renderWeeklyReport() {
  if (window.ZyroDashboard && typeof window.ZyroDashboard.sync === 'function') {
    window.ZyroDashboard.sync();
  }
}

`,
  true
);

const attendanceNeedle = "function renderAttendance(){\r\n  const container=document.getElementById('attendanceDays');const label=document.getElementById('attWeekLabel');";
const attendanceNeedleLf = "function renderAttendance(){\n  const container=document.getElementById('attendanceDays');const label=document.getElementById('attWeekLabel');";
const att = src.includes(attendanceNeedle) ? attendanceNeedle : attendanceNeedleLf;
if (!src.includes(att)) throw new Error('attendance needle missing');
src = src.replace(att, att + nl("\n  if(!container || !label) return;"));

const oldRefresh = "if(currentPage==='dashboard'){if(typeof renderWeeklyReport==='function')renderWeeklyReport();setTimeout(drawDashboardChart,50);}";
if (!src.includes(oldRefresh)) throw new Error('refreshAllViews needle missing');
src = src.replace(oldRefresh, "if(currentPage==='dashboard'){refreshDashboard();}");

const navNeedle = "  const isSamePage = (currentPage === page);\r\n  currentPage=page;";
const navNeedleLf = "  const isSamePage = (currentPage === page);\n  currentPage=page;";
const nav = src.includes(navNeedle) ? navNeedle : navNeedleLf;
if (!src.includes(nav)) throw new Error('navigateTo needle missing');
src = src.replace(nav, nav + nl("\n  document.body.classList.toggle('zyro-dash-active', page === 'dashboard');"));

fs.writeFileSync(path, src, 'utf8');
console.log('done', eol === '\r\n' ? 'CRLF' : 'LF');
