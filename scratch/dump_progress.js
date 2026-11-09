const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const pStart = html.indexOf('id="pageProgress"');
const pEnd = html.indexOf('<!-- ============ PAGE:', pStart + 10);
const pSlice = html.substring(pStart, pEnd);
console.log(pSlice);
