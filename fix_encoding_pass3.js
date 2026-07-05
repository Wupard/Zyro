const fs = require('fs');
let str = fs.readFileSync('index.html', 'utf-8');

const map = [
  // ✦ four-pointed star: U+E2 U+153 U+A6
  ['\u00e2\u0153\u00a6', '\u2726'],
  // ✔ heavy check: U+E2 U+153 U+201C  
  ['\u00e2\u0153\u201c', '\u2714'],
  // ✕ cross: U+E2 U+153 U+2022
  ['\u00e2\u0153\u2022', '\u2715'],
  // ✨ sparkles: U+E2 U+153 U+A8
  ['\u00e2\u0153\u00a8', '\u2728'],
  // ✏️ pencil + variation selector: U+E2 U+153 U+8D U+EF U+B8 U+8F
  ['\u00e2\u0153\u008d\u00ef\u00b8\u008f', '\u270f\ufe0f'],
  // ✏ pencil without VS: U+E2 U+153 U+8F (another variant)
  ['\u00e2\u0153\u008f\u00ef\u00b8\u008f', '\u270f\ufe0f'],
  ['\u00e2\u0153\u008f', '\u270f'],
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

// Also fix check marks in theme swatches
fs.writeFileSync('index.html', str, 'utf-8');
console.log('\nTotal: ' + total + ' replacements. File saved!');
