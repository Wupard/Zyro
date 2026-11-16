const fs = require('fs');
let app = fs.readFileSync('app.js', 'utf8');

const newNotesJS = fs.readFileSync('scratch/new-notes-js.js', 'utf8');
const newCalcJS = fs.readFileSync('scratch/new-calc-js.js', 'utf8');

// 1. Replace Notes logic
const notesStart = app.indexOf('function initNotes()');
const notesEnd = app.indexOf('// =============================================\n// STATS');
if (notesStart === -1 || notesEnd === -1) {
  console.error('Could not locate notes block boundaries');
  process.exit(1);
}
app = app.substring(0, notesStart) + newNotesJS + '\n\n' + app.substring(notesEnd);

// 2. Replace Calculators logic
const calcStart = app.indexOf('function initCalculators()');
const calcEnd = app.indexOf('// =============================================\n// RENDER BEFORE/AFTER PHOTO NAV');
if (calcStart === -1 || calcEnd === -1) {
  console.error('Could not locate calc block boundaries');
  process.exit(1);
}
app = app.substring(0, calcStart) + newCalcJS + '\n\n' + app.substring(calcEnd);

fs.writeFileSync('app.js', app, 'utf8');
console.log('app.js successfully updated with new Notes & Calculators logic!');
