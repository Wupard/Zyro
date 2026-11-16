const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Yeni Hesaplayıcılar HTML
const newCalcHTML = `    <div class="page" data-page="calculators" id="pageCalculators">
      <section class="hero2">
        <div>
          <h1><b data-i18n="navCalculators">Hesaplayıcılar</b></h1>
          <p data-i18n="calcHeroSub">Performansını takip et ve analiz et</p>
        </div>
        <div class="ibox">
          <svg class="i"><use href="#zr-i-calc"/></svg>
        </div>
      </section>
      <div class="hs">
        <nav class="pn tl" id="tl" role="tablist" aria-label="Hesaplayıcılar"></nav>
        <section class="pn" id="pane" role="tabpanel"></section>
      </div>
    </div>`;

// 2. Yeni Notlar HTML
const newNotesHTML = `    <div class="page" data-page="notes" id="pageNotes">
      <svg width="0" height="0" style="position:absolute"><symbol id="zr-i-tag-custom" viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8zM7.5 8.5h.01"/></symbol></svg>
      <section class="hero2">
        <div>
          <h1><span data-i18n="dailyNotesTitle">Günlük</span> <b data-i18n="navNotes">notlar</b></h1>
          <p data-i18n="dailyNotesSub">Düşüncelerini, planlarını ve fikirlerini kaydet</p>
        </div>
        <div class="ibox">
          <svg class="i"><use href="#zr-i-note"/></svg>
        </div>
      </section>
      <div class="stk">
        <section class="pn">
          <div class="lab"><b id="ft">Bugünkü giriş</b><span class="tag" id="bg">BUGÜN</span></div>
          <form id="fn" novalidate>
            <div class="top2">
              <input class="in" id="nt" maxlength="80" placeholder="Başlık (opsiyonel)" aria-label="Başlık">
              <div class="dots" id="dots" role="group" aria-label="Renk"></div>
            </div>
            <textarea class="in" id="nx" maxlength="5000" placeholder="Günün nasıldı? Ne öğrendin? Nasıl hissediyorsun?…" aria-label="Not"></textarea>
            <div class="chips" id="tg" role="group" aria-label="Etiket" style="margin-top:14px"></div>
            <div class="acts" style="margin-top:16px">
              <button class="btn" id="sv">
                <svg class="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span id="svt">Notu kaydet</span>
              </button>
              <button type="button" class="ghost" id="cx" hidden>İptal</button>
              <span class="err" id="er" role="alert" style="margin:0;align-self:center"></span>
            </div>
          </form>
        </section>
        <section class="pn">
          <div class="lab">
            <b>Geçmiş girişler <span class="tag" id="cn">0</span></b>
            <button class="ghost danger" id="ds" disabled>
              <svg class="i" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              <span id="dst">Seçilenleri sil</span>
            </button>
          </div>
          <div id="ls"></div>
        </section>
      </div>
    </div>`;

// Replace Notes in index.html
const pNotes = html.indexOf('<div class="page" data-page="notes" id="pageNotes">');
const pComm = html.indexOf('<div class="page" data-page="comments" id="pageComments">');
if (pNotes === -1 || pComm === -1) {
  console.error('Could not find notes boundary in index.html');
  process.exit(1);
}
html = html.substring(0, pNotes) + newNotesHTML + '\n\n  ' + html.substring(pComm);

// Replace Calculators in index.html
const pCalc = html.indexOf('<div class="page" data-page="calculators" id="pageCalculators">');
const pDiet = html.indexOf('<div class="page" data-page="diet" id="pageDiet">');
if (pCalc === -1 || pDiet === -1) {
  console.error('Could not find calculators boundary in index.html');
  process.exit(1);
}
html = html.substring(0, pCalc) + newCalcHTML + '\n\n  ' + html.substring(pDiet);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully with new Notlar and Hesaplayıcılar HTML!');
