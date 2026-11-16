const fs = require('fs');
const notlar = fs.readFileSync('c:/Users/Administrator/Desktop/Notlar.html', 'utf8');
const hesap = fs.readFileSync('c:/Users/Administrator/Desktop/Hesaplayıcılar.html', 'utf8');

const sNotlar = notlar.substring(notlar.indexOf('<style>') + 7, notlar.indexOf('</style>'));
const sHesap = hesap.substring(hesap.indexOf('<style>') + 7, hesap.lastIndexOf('</style>'));

// Notlar specific CSS:
// Let's find rules from .hero2 onwards
const heroIdxN = sNotlar.indexOf('.hero2');
const heroIdxH = sHesap.indexOf('.hero2');

console.log('Notlar specific CSS len:', sNotlar.substring(heroIdxN).length);
console.log('Hesap specific CSS len:', sHesap.substring(heroIdxH).length);

fs.writeFileSync('scratch/notlar-style.css', sNotlar.substring(heroIdxN));
fs.writeFileSync('scratch/hesap-style.css', sHesap.substring(heroIdxH));
console.log('Saved specific CSS to scratch');
