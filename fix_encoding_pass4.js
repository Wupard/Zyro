const fs = require('fs');
let str = fs.readFileSync('index.html', 'utf-8');

const map = [
  // ⚙️ gear: U+E2 U+161 U+2122 U+EF U+B8 U+8F
  ['\u00e2\u0161\u2122\u00ef\u00b8\u008f', '\u2699\ufe0f'],
  // ⚙ gear without VS
  ['\u00e2\u0161\u2122', '\u2699'],
];

let total = 0;
for (const [bad, good] of map) {
  if (str.includes(bad)) {
    const count = str.split(bad).length - 1;
    str = str.split(bad).join(good);
    console.log('Fixed ' + count + 'x: -> [' + good + ']');
    total += count;
  }
}

fs.writeFileSync('index.html', str, 'utf-8');
console.log('Total: ' + total + ' replacements. Saved!');
