const fs = require('fs');

let str = fs.readFileSync('index.html', 'utf-8');

// Additional replacements for remaining garbled chars
const map = [
  // 📸 camera - two variants
  // U+11F U+178 U+201D U+201D = ğŸ""
  ['\u011f\u0178\u201d\u201d', '\uD83D\uDCF8'],
  // U+11F U+178 U+201C U+B8 = ğŸ"¸
  ['\u011f\u0178\u201c\u00b8', '\uD83D\uDCF8'],
  // 📦 box - U+11F U+178 U+201C U+A6
  ['\u011f\u0178\u201c\u00a6', '\uD83D\uDCE6'],
  // 🥑 avocado fat - U+11F U+178 U+A5 U+2018 (left single quote)
  ['\u011f\u0178\u00a5\u2018', '\uD83E\uDD51'],
  // 👑 crown leaderboard - U+11F U+178 U+2018 U+2018
  ['\u011f\u0178\u2018\u2018', '\uD83D\uDC51'],
  // 👤 person - U+11F U+178 U+2018 U+A4
  ['\u011f\u0178\u2018\u00a4', '\uD83D\uDC64'],
  // 📢 megaphone - U+11F U+178 U+201C U+A2
  ['\u011f\u0178\u201c\u00a2', '\uD83D\uDCE2'],
  // 🚩 flag/report - U+11F U+178 U+161 U+A9
  ['\u011f\u0178\u0161\u00a9', '\uD83D\uDEA9'],
  // 🔧 spam/wrench - U+11F U+178 U+201C U+A7
  ['\u011f\u0178\u201c\u00a7', '\uD83D\uDD27'],
  // 🤬 angry/swear - U+11F U+178 U+A4 U+AC
  ['\u011f\u0178\u00a4\u00ac', '\uD83E\uDD2C'],
  // 🔨 hammer - U+11F U+178 U+201C U+A8
  ['\u011f\u0178\u201c\u00a8', '\uD83D\uDD28'],
  // 📅 calendar - U+11F U+178 U+201C U+2026
  ['\u011f\u0178\u201c\u2026', '\uD83D\uDCC5'],
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
console.log('\nTotal: ' + total + ' replacements. File saved!');
