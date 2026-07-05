const fs = require('fs');
let str = fs.readFileSync('index.html', 'utf-8');

// More garbled sequences found
const map = [
  // ◀ left triangle: U+E2 U+2014 U+20AC
  ['\u00e2\u2014\u20ac', '\u25c0'],
  // ▶ right triangle: U+E2 U+2013 U+B6
  ['\u00e2\u2013\u00b6', '\u25b6'],
  // ☀️ sun: U+E2 U+2DC U+20AC U+EF U+B8 U+8F
  ['\u00e2\u02dc\u20ac\u00ef\u00b8\u008f', '\u2600\ufe0f'],
  // ─ box-drawing dash (repeated): U+E2 U+201D U+20AC
  ['\u00e2\u201d\u20ac', '\u2500'],
  // ⚠️ warning: U+E2 U+161 U+A0 U+EF U+B8 U+8F
  ['\u00e2\u0161\u00a0\u00ef\u00b8\u008f', '\u26a0\ufe0f'],
  // ⛔ no entry: U+E2 U+203A U+201D
  ['\u00e2\u203a\u201d', '\u26d4'],
  // ❓ question mark: U+E2 U+9D U+201C  
  ['\u00e2\u009d\u201c', '\u2753'],
  // ● circle: U+E2 U+2014 U+8F
  ['\u00e2\u2014\u008f', '\u25cf'],
];

let total = 0;
for (const [bad, good] of map) {
  if (str.includes(bad)) {
    const count = str.split(bad).length - 1;
    str = str.split(bad).join(good);
    console.log('Fixed ' + count + 'x: [' + [...bad].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase()).join('') + '] -> [' + good + ']');
    total += count;
  }
}

fs.writeFileSync('index.html', str, 'utf-8');
console.log('\nTotal: ' + total + ' replacements. Saved!');
