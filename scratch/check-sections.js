const fs = require('fs');
const html = fs.readFileSync('c:/Users/Administrator/Desktop/Zyro/index.html', 'utf8');

const pNotes = html.indexOf('id="pageNotes"');
const pComm = html.indexOf('id="pageComments"');
console.log('pageNotes:', pNotes, 'next page:', pComm);
console.log(html.substring(pNotes, pNotes + 400));

const pCalc = html.indexOf('id="pageCalculators"');
const pDiet = html.indexOf('id="pageDiet"');
console.log('pageCalc:', pCalc, 'next page:', pDiet);
console.log(html.substring(pCalc, pCalc + 400));
