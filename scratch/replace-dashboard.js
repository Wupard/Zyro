const fs = require('fs');
const path = 'index.html';
let src = fs.readFileSync(path, 'utf8');
const startMarker = '    <!-- ============ PAGE: DASHBOARD ============ -->';
const endMarker = '    <!-- ============ PAGE: WORKOUTS ============ -->';
const start = src.indexOf(startMarker);
const end = src.indexOf(endMarker);
if (start < 0 || end < 0 || end <= start) {
  console.error('markers not found', start, end);
  process.exit(1);
}
const block = [
  '    <!-- ============ PAGE: DASHBOARD ============ -->',
  '    <div class="page active zyro-dash" data-page="dashboard" id="pageDashboard">',
  '      <!-- React root: dashboard/dashboard-app.js -->',
  '      <div id="zyroDashboardRoot"></div>',
  '    </div>',
  '',
  ''
].join('\r\n');
src = src.slice(0, start) + block + src.slice(end);
fs.writeFileSync(path, src, 'utf8');
console.log('replaced', end - start, 'chars with', block.length);
