/* =========================================
   DASHBOARD (ANA SAYFA) REDESIGN LOGIC
   ========================================= */
window.dbInit = function() {
  const d = new Date();
  const h = d.getHours();
  let g = h < 12 ? 'Günaydın' : h < 17 ? 'Tünaydın' : 'İyi Akşamlar';
  if(currentLang!=='tr'){
    g = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
  }
  
  const greetEl = document.getElementById('db-greeting');
  if(greetEl) greetEl.textContent = g;
  
  const dateStrEl = document.getElementById('db-datestr');
  if(dateStrEl) {
    dateStrEl.textContent = d.toLocaleDateString(currentLang==='tr'?'tr-TR':'en-US', {
      weekday:'long', day:'numeric', month:'long'
    });
  }

  // Render weekly chart (dummy data)
  dbRenderWeeklyChart();
};

function dbRenderWeeklyChart() {
  const chartEl = document.getElementById('db-weekly-chart');
  if(!chartEl) return;
  
  const daysTr = ['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'];
  const daysEn = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const days = currentLang==='tr' ? daysTr : daysEn;
  const values = [45, 60, 0, 75, 50, 90, 30]; // Mock activity (min)
  const maxVal = 90;
  
  let html = '';
  days.forEach((day, i) => {
    const val = values[i];
    const pct = (val / maxVal) * 100;
    const isToday = (i === 3); // Mock today as Thursday
    const color = isToday ? 'var(--blue)' : 'rgba(255,255,255,0.15)';
    const textColor = isToday ? '#fff' : 'rgba(255,255,255,0.4)';
    
    html += `
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;">
        <div style="width:100%;height:100px;background:rgba(255,255,255,0.02);border-radius:6px;position:relative;display:flex;align-items:flex-end;">
          <div style="width:100%;background:${color};height:${pct}%;border-radius:6px;transition:height 0.6s ease;"></div>
        </div>
        <span style="font-size:10px;font-weight:600;color:${textColor};">${day}</span>
      </div>
    `;
  });
  
  chartEl.innerHTML = html;
}
