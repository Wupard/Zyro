const fs = require('fs');
const path = "c:\\Users\\Yusuf Kahraman\\Desktop\\Zyro\\app.js";
let content = fs.readFileSync(path, 'utf8');

const old1 = `  } catch(e) {
    console.error('Notif render error:', e);
    list.innerHTML = \`<div class="notif-empty"><p style="color:var(--red-vivid);">Yükleme hatası</p></div>\`;
  }`;

const new1 = `  } catch(e) {
    console.error('Notif render error:', e);
    list.innerHTML = \`<div class="notif-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:0.3;margin-bottom:10px;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><p>Şu anlık bildirim yok</p></div>\`;
  }`;

content = content.replace(old1, new1);

const old2 = `  if (user && rank.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += \` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>\`;
    }
    renderAdminPanel();
  } else {
    document.body.classList.remove('is-admin');
  }`;

const new2 = `  if (user && rank.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += \` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>\`;
    }
    renderAdminPanel();
    if(document.getElementById('adminNotifPanel')) document.getElementById('adminNotifPanel').style.display = 'block';
  } else {
    document.body.classList.remove('is-admin');
    if(document.getElementById('adminNotifPanel')) document.getElementById('adminNotifPanel').style.display = 'none';
  }`;

content = content.replace(old2, new2);

fs.writeFileSync(path, content, 'utf8');
console.log("Replacement done with Node.");
