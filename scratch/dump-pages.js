const fs = require('fs');
const html = fs.readFileSync('c:/Users/Administrator/Desktop/Zyro/index.html', 'utf8');

const pNotes = html.indexOf('id="pageNotes"');
const pComm = html.indexOf('id="pageComments"');
const notesBlock = html.substring(pNotes, pComm);
const lastDivNotes = notesBlock.lastIndexOf('</div>');
console.log('Notes block ends near:', pNotes + lastDivNotes);

const pCalc = html.indexOf('id="pageCalculators"');
const pDiet = html.indexOf('id="pageDiet"');
const calcBlock = html.substring(pCalc, pDiet);
const lastDivCalc = calcBlock.lastIndexOf('</div>');
console.log('Calc block ends near:', pCalc + lastDivCalc);

fs.writeFileSync('scratch/old-notes-html.txt', html.substring(pNotes - 30, pNotes + lastDivNotes + 6));
fs.writeFileSync('scratch/old-calc-html.txt', html.substring(pCalc - 30, pCalc + lastDivCalc + 6));
console.log('Saved old HTML blocks to scratch');
