const fs = require('fs');
const str = fs.readFileSync('index.html', 'utf-8');

// Find all lines with non-ASCII chars and print the hex values
const lines = str.split('\n');
const garbled = [];
lines.forEach((line, i) => {
  if (line.includes('\u011f\u0178') || line.includes('\u00e2\u009c') || line.includes('\u00e2\u20ac') || line.includes('\u00c3\u00d7')) {
    garbled.push({ lineNum: i+1, line: line.trim().slice(0,100) });
  }
});

console.log('Lines with garbled chars:', garbled.length);
garbled.slice(0,10).forEach(g => console.log(g.lineNum + ': ' + g.line));

// Print the hex codes for the emoji chars found
const emojiChars = ['ğ', 'Ÿ', '"', '¥'];
emojiChars.forEach(c => {
  console.log('Char:', JSON.stringify(c), 'Code:', c.charCodeAt(0).toString(16));
});

// More specifically: what are the codepoints of the garbled emoji?
const fireMatch = str.match(/ğŸ"¥/);
if (fireMatch) {
  console.log('\nFire emoji chars:');
  [...fireMatch[0]].forEach(c => console.log('  U+' + c.charCodeAt(0).toString(16).padStart(4,'0'), c));
}
