window.prgInit = function() {
  prgRenderProgress();
  prgRenderWeight();
  prgRenderStrength();
};

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function prgRenderProgress() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();
  
  let wHtml = '';
  let pHtml = '';
  let sCount = 0;
  let pCount = 0;
  
  const workoutLogs = appData.workoutLogs || {};
  
  for(let i=1; i<=daysInMonth; i++) {
    let dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
    let isToday = (i === today);
    let todayCls = isToday ? 'today-ring' : '';
    
    let comp = appData.completedHabits && appData.completedHabits[dateStr] ? appData.completedHabits[dateStr] : {};
    
    let didSport = comp.workout || (workoutLogs[dateStr] && workoutLogs[dateStr].length > 0);
    let didPost = comp.posture;
    
    if(didSport) sCount++;
    if(didPost) pCount++;
    
    let sCls = didSport ? 'done-sport' : 'empty';
    let pCls = didPost ? 'done-posture' : 'empty';
    
    wHtml += `<div class="prg-hday ${sCls} ${todayCls}">${i}</div>`;
    pHtml += `<div class="prg-hday ${pCls} ${todayCls}">${i}</div>`;
  }
  
  const sdEl = document.getElementById('prg-sport-days');
  if(sdEl) sdEl.innerHTML = wHtml;
  
  const pdEl = document.getElementById('prg-posture-days');
  if(pdEl) pdEl.innerHTML = pHtml;
  
  const scEl = document.getElementById('prg-sport-count');
  if(scEl) scEl.innerText = `${sCount}/${daysInMonth} ${currentLang==='tr'?'Gün':'Days'}`;
  
  const sdsEl = document.getElementById('prg-sport-days-stat');
  if(sdsEl) sdsEl.innerText = sCount;
  
  const pcEl = document.getElementById('prg-posture-count');
  if(pcEl) pcEl.innerText = `${pCount}/${daysInMonth} ${currentLang==='tr'?'Gün':'Days'}`;
  
  const pdsEl = document.getElementById('prg-posture-days-stat');
  if(pdsEl) pdsEl.innerText = pCount;
  
  setTimeout(() => {
    document.querySelectorAll('.prg-cal-scroll').forEach(grid => {
      const todayEl = grid.querySelector('.today-ring');
      if (todayEl) {
        const scrollLeft = todayEl.offsetLeft - (grid.clientWidth / 2) + (todayEl.clientWidth / 2);
        grid.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    });
  }, 100);
}

function prgRenderWeight() {
  const emptyEl = document.getElementById('prg-weight-empty');
  const listEl = document.getElementById('prg-weight-list');
  if(!emptyEl || !listEl) return;
  
  const weightKeys = Object.keys(appData.weightLog || {}).sort();
  if(weightKeys.length===0){
    emptyEl.style.display='block';
    listEl.innerHTML = '';
    return;
  }
  emptyEl.style.display='none';
  
  const mockWeights = weightKeys.map(k => ({ date: k, w: appData.weightLog[k] }));
  let html='';
  
  mockWeights.slice().reverse().forEach((x,i)=>{
    let diff='';
    if(i < mockWeights.length-1) {
      let prev = mockWeights.slice().reverse()[i+1].w;
      let d = x.w - prev;
      if(d>0) diff = `<span style="color:#F43F5E;font-size:11px;font-weight:700;">+${d.toFixed(1)}</span>`;
      else if(d<0) diff = `<span style="color:#10F5A3;font-size:11px;font-weight:700;">${d.toFixed(1)}</span>`;
      else diff = `<span style="color:var(--text-muted);font-size:11px;font-weight:700;">0.0</span>`;
    }
    html += `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:10px;height:10px;border-radius:50%;background:#A78BFA;box-shadow:0 0 6px #A78BFA;"></div>
          <span style="font-size:13px;font-weight:600;">${x.date}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          ${diff}
          <span style="font-size:15px;font-weight:800;" class="mono">${x.w} kg</span>
        </div>
      </div>
    `;
  });
  listEl.innerHTML = html;
  
  prgDrawLineChart('prg-weight-chart', mockWeights.map(x=>x.w), '#A78BFA', '#7C3AED');
}

window.prgSaveWeight = function() {
  const inp = document.getElementById('prg-weight-inp');
  if(!inp) return;
  let w = parseFloat(inp.value);
  if(isNaN(w) || w<=0) return;
  
  if(!appData.weightLog) appData.weightLog = {};
  appData.weightLog[todayStr()] = w;
  saveData();
  
  prgRenderWeight();
  inp.value='';
};

let prgSelMuscle = 'all';
let prgSelEx = null;

function getPersonalRecords() {
  const prs = {};
  Object.keys(appData.workoutLogs || {}).forEach(date => {
    const dayLogs = appData.workoutLogs[date];
    dayLogs.forEach(log => {
      if(!prs[log.name] || log.weight > (prs[log.name]?.max || 0)) {
        prs[log.name] = { id: log.name.replace(/[^a-zA-Z0-9]/g, '_'), name: log.name, mus: log.muscle || 'all', max: log.weight, reps: log.reps, date: date };
      }
    });
  });
  return Object.values(prs).sort((a,b) => b.max - a.max);
}

function prgRenderStrength() {
  const mockExercises = getPersonalRecords();
  
  const muscles = [
    {id:'all', label:currentLang==='tr'?'Tümü':'All'}, {id:'Chest', label:currentLang==='tr'?'Göğüs':'Chest'},
    {id:'Back', label:currentLang==='tr'?'Sırt':'Back'}, {id:'Shoulders', label:currentLang==='tr'?'Omuz':'Shoulders'},
    {id:'Legs', label:currentLang==='tr'?'Bacak':'Legs'}, {id:'Arms', label:currentLang==='tr'?'Kol':'Arms'}
  ];
  let mHtml = muscles.map(m=> `<div class="prg-mchip ${prgSelMuscle===m.id?'active':''}" onclick="prgSetMuscle('${m.id}')">${m.label}</div>`).join('');
  const chipsEl = document.getElementById('prg-muscle-chips');
  if(chipsEl) chipsEl.innerHTML = mHtml;
  
  let filtered = prgSelMuscle==='all' ? mockExercises : mockExercises.filter(x=>x.mus.toLowerCase()===prgSelMuscle.toLowerCase());
  const exCountEl = document.getElementById('prg-ex-count');
  if(exCountEl) exCountEl.innerText = filtered.length;
  
  let eHtml = filtered.map(x=> `
    <div class="prg-ex-row-str ${prgSelEx===x.id?'active':''}" onclick="prgSelectEx('${x.id}')">
      <div style="width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.05);display:flex;align-items:center;justify-content:center;font-size:16px;">🔥</div>
      <div style="flex:1;">
        <p style="font-size:13px;font-weight:700;margin:0;">${x.name}</p>
        <p style="font-size:11px;color:var(--text-muted);margin-top:2px;">Maks: ${x.max} kg</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  `).join('');
  
  if(filtered.length===0) eHtml=`<p style="font-size:12px;color:rgba(255,255,255,.4);padding:10px;">${currentLang==='tr'?'Kayıt yok':'No records'}</p>`;
  
  const exListEl = document.getElementById('prg-strength-ex-list');
  if(exListEl) exListEl.innerHTML = eHtml;
  
  if(!prgSelEx && filtered.length>0) prgSelectEx(filtered[0].id);
  else if(filtered.length===0) {
    const detailEl = document.getElementById('prg-pr-detail');
    if(detailEl) detailEl.style.display='none';
  }
  
  const badgeEl = document.getElementById('prg-pr-badge');
  if(badgeEl) badgeEl.innerText = mockExercises.length + ' PR';
  
  let tHtml = mockExercises.map(x=>`
    <div class="prg-pr-row">
      <div style="flex:1;">
        <p style="font-size:13px;font-weight:700;">${x.name}</p>
        <p style="font-size:11px;color:var(--text-muted);">${x.mus}</p>
      </div>
      <div style="width:90px;text-align:right;">
        <p style="font-size:14px;font-weight:800;color:#FCD34D;" class="mono">${x.max}kg</p>
      </div>
      <div style="width:70px;text-align:center;">
        <p style="font-size:13px;font-weight:700;" class="mono">${x.reps}</p>
      </div>
      <div style="width:70px;text-align:right;">
        <p style="font-size:11px;color:var(--text-muted);">${x.date.substring(5)}</p>
      </div>
      <div style="width:44px;display:flex;justify-content:flex-end;">
      </div>
    </div>
  `).join('');
  
  const tableEl = document.getElementById('prg-pr-table');
  if(tableEl) tableEl.innerHTML = tHtml;
  
  const countStatEl = document.getElementById('prg-pr-count-stat');
  if(countStatEl) countStatEl.innerText = mockExercises.length;
}

window.prgSetMuscle = function(m) {
  prgSelMuscle = m;
  prgSelEx = null;
  prgRenderStrength();
};

window.prgSelectEx = function(id) {
  prgSelEx = id;
  document.querySelectorAll('.prg-ex-row-str').forEach(e=>e.classList.remove('active'));
  prgRenderStrengthDetail();
  
  setTimeout(()=>{
    const activeEl = document.querySelector(`.prg-ex-row-str[onclick="prgSelectEx('${id}')"]`);
    if(activeEl) activeEl.classList.add('active');
  },10);
};

function prgRenderStrengthDetail() {
  const mockExercises = getPersonalRecords();
  let ex = mockExercises.find(x=>x.id===prgSelEx);
  if(!ex) return;
  
  let det = document.getElementById('prg-pr-detail');
  if(!det) return;
  det.style.display='block';
  
  det.classList.remove('prg-slide-in');
  void det.offsetWidth;
  det.classList.add('prg-slide-in');
  
  const titleEl = document.getElementById('prg-pr-ex-title');
  if(titleEl) titleEl.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r=".5" fill="var(--text-muted)"/></svg>
    <span>${ex.name} ${currentLang==='tr'?'Analizi':'Analysis'}</span>
  `;
  
  const maxWEl = document.getElementById('prg-pr-max-weight');
  if(maxWEl) maxWEl.innerText = ex.max;
  
  const maxDEl = document.getElementById('prg-pr-max-detail');
  if(maxDEl) maxDEl.innerText = currentLang==='tr' ? "En Yüksek Ağırlık" : "Highest Weight";
  
  const maxDateEl = document.getElementById('prg-pr-max-date');
  if(maxDateEl) maxDateEl.innerText = ex.date;
  
  // Find last workout for this exercise
  let lastLog = null;
  const dates = Object.keys(appData.workoutLogs || {}).sort().reverse();
  for(let date of dates) {
    const logs = appData.workoutLogs[date];
    const log = logs.find(l => l.name === ex.name);
    if(log && date !== ex.date) { 
      lastLog = { ...log, date };
      break;
    } else if (log && !lastLog) { 
      lastLog = { ...log, date };
    }
  }
  
  if (lastLog) {
      const lastWEl = document.getElementById('prg-pr-last-weight');
      if(lastWEl) lastWEl.innerText = lastLog.weight;
      
      const lastDEl = document.getElementById('prg-pr-last-detail');
      if(lastDEl) lastDEl.innerText = (currentLang==='tr'?"Son Set: ":"Last Set: ") + lastLog.reps + (currentLang==='tr'?" tekrar":" reps");
      
      const lastDescEl = document.getElementById('prg-pr-last-desc');
      if(lastDescEl) lastDescEl.innerText = currentLang==='tr'?"Performans analizi":"Performance analysis";
      
      const lastDateEl = document.getElementById('prg-pr-last-date');
      if(lastDateEl) lastDateEl.innerText = lastLog.date;
  }
  
  // Chart (Historical progression)
  const history = [];
  dates.reverse().forEach(d => { // go forward in time
    const log = appData.workoutLogs[d].find(l => l.name === ex.name);
    if(log) history.push(log.weight);
  });
  
  let data = history;
  if(data.length === 1) data = [data[0]*0.9, data[0]]; 
  prgDrawLineChart('prg-strength-chart', data, '#2DD4BF', '#0D9488');
}

window.prgTogglePRAccordion = function() {
  let body = document.getElementById('prg-pr-acc-body');
  let arrow = document.getElementById('prg-pr-acc-arrow');
  if(!body || !arrow) return;
  
  if(body.classList.contains('open')){
    body.classList.remove('open');
    arrow.style.transform = 'rotate(0deg)';
  }else{
    body.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
  }
};

window.clearNotif = function() {
  let ping = document.getElementById('prg-notif-ping');
  if(ping) ping.style.display='none';
};

window.prgResetStrength = function() {
  if(confirm(currentLang==='tr' ? "Tüm güç verileri sıfırlanacak. Emin misiniz?" : "All strength data will be reset. Are you sure?")) {
     showToast(currentLang==='tr' ? "Sıfırlama işlemi devre dışı (Veriler antrenmanlardan alınmaktadır)." : "Reset disabled (Data relies on workouts).", 'info');
  }
};

function prgDrawLineChart(svgId, data, color, fillBase) {
  const svg = document.getElementById(svgId);
  if(!svg || data.length===0) return;
  
  const w = svg.clientWidth || 300;
  const h = svg.clientHeight || 100;
  const pad = 15;
  
  const min = Math.min(...data)*0.95;
  const max = Math.max(...data)*1.05;
  const range = (max - min) || 1;
  
  const stepX = (w - pad*2) / (data.length - 1 || 1);
  
  let pathD = `M ${pad} ${h - pad - ((data[0]-min)/range)*(h-pad*2)}`;
  let pointsHtml = '';
  
  data.forEach((val, i) => {
    let cx = pad + i*stepX;
    let cy = h - pad - ((val-min)/range)*(h-pad*2);
    if(i>0) pathD += ` L ${cx} ${cy}`;
    
    pointsHtml += `<circle cx="${cx}" cy="${cy}" r="4" fill="${color}" stroke="#0f0f1a" stroke-width="2"/>`;
    if(i === data.length-1 || data.length < 5) { 
      pointsHtml += `<text x="${cx}" y="${cy-10}" fill="${color}" font-size="10" font-weight="700" text-anchor="middle">${val}</text>`;
    }
  });
  
  let gradientId = 'grad-'+svgId;
  let defs = `
    <defs>
      <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${fillBase}" stop-opacity="0"/>
      </linearGradient>
    </defs>
  `;
  
  let areaD = pathD + ` L ${pad + (data.length-1)*stepX} ${h} L ${pad} ${h} Z`;
  
  svg.innerHTML = `
    ${defs}
    <path d="${areaD}" fill="url(#${gradientId})" />
    <path d="${pathD}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    ${pointsHtml}
  `;
}

/* =========================================
   NOTES (NOTLAR) REDESIGN LOGIC
   ========================================= */
const NT_PREDEFINED_TAGS = [
  { label:'Daha Sonra', icon:'⏰', color:'rgba(59,130,246,.8)',  bg:'rgba(59,130,246,.1)',  border:'rgba(59,130,246,.25)' },
  { label:'Fikir',      icon:'💡', color:'rgba(252,211,77,.8)',  bg:'rgba(245,158,11,.1)',  border:'rgba(245,158,11,.25)' },
  { label:'GYM',        icon:'🏋️', color:'rgba(167,139,250,.8)', bg:'rgba(124,58,237,.12)', border:'rgba(124,58,237,.25)' },
  { label:'Beslenme',   icon:'🥗', color:'rgba(16,245,163,.8)',  bg:'rgba(16,245,163,.1)',  border:'rgba(16,245,163,.25)' },
  { label:'Hedef',      icon:'🎯', color:'rgba(251,146,60,.8)',  bg:'rgba(245,158,11,.08)', border:'rgba(251,146,60,.25)' },
  { label:'Motivasyon', icon:'🔥', color:'rgba(251,113,133,.8)', bg:'rgba(244,63,94,.1)',   border:'rgba(244,63,94,.25)' },
  { label:'Plan',       icon:'📋', color:'rgba(45,212,191,.8)',  bg:'rgba(13,148,136,.1)',  border:'rgba(13,148,136,.25)' },
];

const NT_MOOD_META = {
  great:   { emoji:'😄', label:'Harika',   color:'#10F5A3' },
  good:    { emoji:'🙂', label:'İyi',      color:'#A78BFA' },
  neutral: { emoji:'😐', label:'Normal',   color:'rgba(255,255,255,.5)' },
  tired:   { emoji:'😴', label:'Yorgun',   color:'#60A5FA' },
  stressed:{ emoji:'😤', label:'Stresli',  color:'#FCD34D' },
  bad:     { emoji:'😔', label:'Kötü',     color:'#FB7185' },
  pumped:  { emoji:'🔥', label:'Enerjik',  color:'#F97316' },
  focused: { emoji:'🎯', label:'Odaklı',   color:'#2DD4BF' },
};

const NT_NOTE_COLORS = {
  default:{ bg:'rgba(255,255,255,.03)', topBar:'rgba(255,255,255,.15)' },
  rose:   { bg:'rgba(244,63,94,.08)',   topBar:'#F43F5E' },
  teal:   { bg:'rgba(13,148,136,.08)',  topBar:'#0D9488' },
  amber:  { bg:'rgba(245,158,11,.08)', topBar:'#F59E0B' },
  violet: { bg:'rgba(124,58,237,.1)',   topBar:'#7C3AED' },
};

let ntSelectedTags= [];
let ntSelectedMood= '';
let ntSelectedColor='default';
let ntCustomTags  = [];
let ntSortAsc     = false;
let ntFilterTag   = 'Tümü';
let ntExpanded    = false;

window.ntInit = function() {
  if(!appData.notes) appData.notes = [];
  ntRenderGreeting();
  let s = appData.streak || 0;
  
  const streakTxt = document.getElementById('nt-streak-txt');
  if(streakTxt) streakTxt.textContent = s + (currentLang==='tr' ? " günlük seri" : " day streak");
  
  ntRenderTodayBadge();
  ntRenderTagChips();
  ntRenderFilterTabs();
  ntRenderNotes();
  ntUpdateStats();
};

function ntRenderGreeting(){
  const h=new Date().getHours();
  const g=h<12?'Günaydın':h<17?'İyi öğleden sonralar':'İyi geceler';
  const greetEl = document.getElementById('nt-greeting');
  if(greetEl) greetEl.textContent=g;
  const dateEl = document.getElementById('nt-datestr');
  if(dateEl) dateEl.textContent=new Date().toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

function ntRenderTodayBadge(){
  const badge = document.getElementById('nt-today-badge');
  if(badge) badge.textContent=(currentLang==='tr'?'BUGÜN · ':'TODAY · ') + new Date().toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{day:'numeric',month:'short'}).toUpperCase();
}

window.ntSetColor = function(key){
  ntSelectedColor=key;
  document.querySelectorAll('.nt-cdot').forEach(d=>d.classList.remove('active'));
  const cdot = document.getElementById('nt-cdot-'+key);
  if(cdot) cdot.classList.add('active');
};

window.ntSetMood = function(m){
  ntSelectedMood = ntSelectedMood===m?'':m;
  document.querySelectorAll('.nt-mood-btn').forEach(b=>b.classList.remove('selected'));
  if(ntSelectedMood) {
    const btn = document.getElementById('nt-mood-'+ntSelectedMood);
    if(btn) btn.classList.add('selected');
  }
};

function ntRenderTagChips(){
  const c=document.getElementById('nt-tag-chips-write');
  if(!c) return;
  c.innerHTML='';
  const allTags=[...NT_PREDEFINED_TAGS,...ntCustomTags.map(t=>({label:t,icon:'#',color:'rgba(167,139,250,.8)',bg:'rgba(124,58,237,.1)',border:'rgba(124,58,237,.2)'}))];
  allTags.forEach(tag=>{
    const active=ntSelectedTags.includes(tag.label);
    const chip=document.createElement('div');
    chip.className='nt-tag-chip';
    chip.style.cssText=`color:${active?tag.color:'rgba(255,255,255,.45)'};background:${active?tag.bg:'rgba(255,255,255,.04)'};border-color:${active?tag.border:'rgba(255,255,255,.08)'};`;
    chip.innerHTML=`<span>${tag.icon}</span><span>${tag.label}</span>`;
    chip.onclick=()=>ntToggleTag(tag.label);
    c.appendChild(chip);
  });
}

function ntToggleTag(label){
  const idx=ntSelectedTags.indexOf(label);
  if(idx>-1) ntSelectedTags.splice(idx,1);
  else ntSelectedTags.push(label);
  ntRenderTagChips();
}

window.ntAddCustomTag = function(){
  const inp=document.getElementById('nt-custom-tag-inp');
  if(!inp) return;
  const val=inp.value.trim();
  if(!val||ntCustomTags.includes(val)||NT_PREDEFINED_TAGS.find(t=>t.label===val)) { inp.value=''; return; }
  ntCustomTags.push(val);
  inp.value='';
  ntRenderTagChips();
};

window.ntOnBodyInput = function(){
  const body=document.getElementById('nt-note-body');
  if(!body) return;
  const len=body.value.length;
  const el=document.getElementById('nt-char-count');
  if(!el) return;
  el.textContent=len;
  el.style.color= len>500?'#FB7185':len>300?'#FCD34D':'rgba(255,255,255,0.16)';
};

window.ntToggleExpand = function(){
  ntExpanded=!ntExpanded;
  const ta=document.getElementById('nt-note-body');
  if(ta) ta.rows= ntExpanded?12:5;
  const icon = document.getElementById('nt-expand-icon');
  if(icon) {
    icon.innerHTML= ntExpanded
      ? '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/>'
      : '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>';
  }
};

window.ntSaveNote = function(){
  const titleEl = document.getElementById('nt-note-title');
  const bodyEl = document.getElementById('nt-note-body');
  if(!titleEl || !bodyEl) return;
  
  const title = titleEl.value.trim();
  const body  = bodyEl.value.trim();
  if(!body){ showToast(currentLang==='tr'?'Lütfen bir not gir':'Please enter a note', 'error'); return; }

  const note = {
    id:     Date.now().toString(),
    title:  title || '',
    body,
    tags:   [...ntSelectedTags],
    mood:   ntSelectedMood,
    color:  ntSelectedColor,
    date:   new Date().toISOString(),
    pinned: false,
  };

  if(!appData.notes) appData.notes = [];
  appData.notes.unshift(note);
  saveData();

  titleEl.value='';
  bodyEl.value='';
  
  const charEl = document.getElementById('nt-char-count');
  if(charEl) charEl.textContent='0';
  
  ntSelectedTags=[];
  ntSelectedMood='';
  ntSelectedColor='default';
  
  document.querySelectorAll('.nt-mood-btn').forEach(b=>b.classList.remove('selected'));
  document.querySelectorAll('.nt-cdot').forEach(d=>d.classList.remove('active'));
  const defColor = document.getElementById('nt-cdot-default');
  if(defColor) defColor.classList.add('active');
  
  ntRenderTagChips();
  ntRenderNotes();
  ntRenderFilterTabs();
  ntUpdateStats();
  
  showToast(currentLang==='tr'?'Not kaydedildi':'Note saved', 'success');
};

function ntRenderFilterTabs(){
  const c=document.getElementById('nt-filter-tabs');
  if(!c) return;
  const allTagLabels=[currentLang==='tr'?'Tümü':'All',...new Set((appData.notes||[]).flatMap(n=>n.tags))];
  c.innerHTML='';
  allTagLabels.forEach(t=>{
    const btn=document.createElement('button');
    btn.className='nt-pill-tab'+(t===ntFilterTag?' active':'');
    const count= (t==='Tümü'||t==='All')?(appData.notes||[]).length:(appData.notes||[]).filter(n=>n.tags.includes(t)).length;
    btn.innerHTML=t+(count>0?` <span class="mono" style="font-size:10px;opacity:.7;">(${count})</span>`:'');
    btn.onclick=()=>{ ntFilterTag=t; ntRenderFilterTabs(); ntRenderNotes(); };
    c.appendChild(btn);
  });
}

window.ntRenderNotes = function(){
  const list  = document.getElementById('nt-notes-list');
  const empty = document.getElementById('nt-notes-empty');
  const searchInp = document.getElementById('nt-search-inp');
  
  if(!list || !empty) return;
  
  const query = searchInp ? searchInp.value.toLowerCase().trim() : '';
  const isAll = (ntFilterTag==='Tümü' || ntFilterTag==='All');

  let filtered = (appData.notes||[]).filter(n=>{
    const matchTag   = isAll||(n.tags && n.tags.includes(ntFilterTag));
    const matchSearch= !query||((n.title||'')+n.body+(n.tags||[]).join(' ')).toLowerCase().includes(query);
    return matchTag && matchSearch;
  });

  if(!ntSortAsc) filtered=[...filtered].sort((a,b)=>new Date(b.date)-new Date(a.date));
  else         filtered=[...filtered].sort((a,b)=>new Date(a.date)-new Date(b.date));

  filtered.sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0));

  list.innerHTML='';

  if(filtered.length===0){
    empty.style.display='flex';
    return;
  }
  empty.style.display='none';

  filtered.forEach((note,i)=>{
    const col = NT_NOTE_COLORS[note.color] || NT_NOTE_COLORS.default;
    const mood= note.mood ? NT_MOOD_META[note.mood] : null;
    const timeAgo= ntGetTimeAgo(new Date(note.date));
    const wordCount= note.body.split(/\s+/).filter(Boolean).length;
    const preview= note.body.length>160 ? note.body.slice(0,160)+'…' : note.body;

    const card=document.createElement('div');
    card.className='nt-note-card nt-note-in';
    card.style.cssText=`background:${col.bg};padding:18px 20px;animation-delay:${i*35}ms;`;
    
    let tagsHtml = '';
    if(note.tags && note.tags.length>0) {
      tagsHtml = `<div style="display:flex;flex-wrap:wrap;gap:5px;">` +
        note.tags.map(t=>{
          const meta=NT_PREDEFINED_TAGS.find(p=>p.label===t)||{color:'rgba(167,139,250,.8)',bg:'rgba(124,58,237,.1)',border:'rgba(124,58,237,.2)',icon:'#'};
          return `<span style="font-size:10px;font-weight:700;padding:3px 9px;border-radius:99px;color:${meta.color};background:${meta.bg};border:1px solid ${meta.border};">${meta.icon} ${t}</span>`;
        }).join('') + `</div>`;
    }

    card.innerHTML=`
      <div style="position:absolute;top:0;left:0;right:0;height:2px;border-radius:20px 20px 0 0;background:${col.topBar};opacity:.6;"></div>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px;">
        <div style="flex:1;min-width:0;">
          ${note.title?`<p style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${ntEscHtml(note.title)}</p>`:''}
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-size:11px;color:var(--text-muted);" class="mono">${timeAgo}</span>
            <span style="color:rgba(255,255,255,.12);font-size:10px;">·</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.16);" class="mono">${wordCount} ${currentLang==='tr'?'kelime':'words'}</span>
            ${mood?`<span style="color:rgba(255,255,255,.12);font-size:10px;">·</span><span style="font-size:12px;" title="${mood.label}">${mood.emoji}</span>`:''}
            ${note.pinned?`<svg width="10" height="10" viewBox="0 0 24 24" fill="#FCD34D" stroke="#FCD34D" stroke-width="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3" fill="#0A0A0F"/></svg>`:''}
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
          <button onclick="ntTogglePin('${note.id}')" style="width:28px;height:28px;border-radius:10px;background:${note.pinned?'rgba(252,211,77,.15)':'rgba(255,255,255,.05)'};border:1px solid ${note.pinned?'rgba(252,211,77,.25)':'rgba(255,255,255,.08)'};cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;" title="Sabitle">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="${note.pinned?'#FCD34D':'none'}" stroke="${note.pinned?'#FCD34D':'rgba(255,255,255,.35)'}" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </button>
          <button onclick="ntDeleteNote('${note.id}')" class="nt-btn-danger" style="width:28px;height:28px;" title="Sil">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </div>
      <p style="font-size:13px;color:rgba(255,255,255,.65);line-height:1.65;margin-bottom:12px;">${ntEscHtml(preview)}</p>
      ${tagsHtml}
    `;
    list.appendChild(card);
  });
};

window.ntDeleteNote = function(id){
  const idx=(appData.notes||[]).findIndex(n=>n.id===id);
  if(idx>-1){ 
    appData.notes.splice(idx,1); 
    saveData();
    showToast(currentLang==='tr'?'Not silindi':'Note deleted', 'success'); 
  }
  ntRenderNotes(); 
  ntRenderFilterTabs(); 
  ntUpdateStats();
};

window.ntTogglePin = function(id){
  const note=(appData.notes||[]).find(n=>n.id===id);
  if(note){ 
    note.pinned=!note.pinned; 
    saveData();
    showToast(note.pinned ? (currentLang==='tr'?'Not sabitlendi':'Note pinned') : (currentLang==='tr'?'Sabitleme kaldırıldı':'Pin removed'), 'success'); 
  }
  ntRenderNotes();
};

window.ntToggleSort = function(){
  ntSortAsc=!ntSortAsc;
  const label = document.getElementById('nt-sort-label');
  if(label) label.textContent=ntSortAsc ? (currentLang==='tr'?'Eski → Yeni':'Old → New') : (currentLang==='tr'?'Yeni → Eski':'New → Old');
  ntRenderNotes();
};

function ntUpdateStats(){
  const today=new Date(); today.setHours(0,0,0,0);
  const todayNotes=(appData.notes||[]).filter(n=>{ const d=new Date(n.date); d.setHours(0,0,0,0); return d.getTime()===today.getTime(); });
  const totalWords=(appData.notes||[]).reduce((a,n)=>a+n.body.split(/\s+/).filter(Boolean).length,0);
  
  const elTotal = document.getElementById('nt-stat-total');
  if(elTotal) elTotal.textContent=(appData.notes||[]).length;
  
  const elToday = document.getElementById('nt-stat-today');
  if(elToday) elToday.textContent=todayNotes.length;
  
  let noteStreak = 0;
  const elStreak = document.getElementById('nt-stat-streak');
  if(elStreak) elStreak.textContent=noteStreak+(todayNotes.length>0?1:0);
  
  const elWords = document.getElementById('nt-stat-words');
  if(elWords) elWords.textContent=totalWords;
}

function ntGetTimeAgo(date){
  const s=Math.floor((new Date()-date)/1000);
  if(s<60)  return s+(currentLang==='tr'?'sn önce':'s ago');
  if(s<3600)return Math.floor(s/60)+(currentLang==='tr'?'dk önce':'m ago');
  if(s<86400)return Math.floor(s/3600)+(currentLang==='tr'?'sa önce':'h ago');
  return date.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US',{day:'numeric',month:'short'});
}

function ntEscHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
