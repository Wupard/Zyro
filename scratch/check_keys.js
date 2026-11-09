const fs = require('fs');
const app = fs.readFileSync('app.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

const enSection = app.substring(app.indexOf('en: {'), app.indexOf('tr: {'));
const trSection = app.substring(app.indexOf('tr: {'), app.indexOf('let currentLang ='));

function extract(str) {
  const s = new Set();
  const re = /^\s*([a-zA-Z0-9_]+)\s*:/gm;
  let m;
  while ((m = re.exec(str)) !== null) s.add(m[1]);
  return s;
}

const en = extract(enSection);
const tr = extract(trSection);

const reH = /data-i18n="([^"]+)"/g;
const hK = new Set();
let hm;
while ((hm = reH.exec(html)) !== null) hK.add(hm[1]);

hK.forEach(k => {
  if (!en.has(k)) console.log('MISSING_EN: ' + k);
  if (!tr.has(k)) console.log('MISSING_TR: ' + k);
});
