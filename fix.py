import sys

path = r"c:\Users\Yusuf Kahraman\Desktop\Zyro\app.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Yükleme Hatası
content = content.replace(
    "  } catch(e) {\n    console.error('Notif render error:', e);\n    list.innerHTML = `<div class=\"notif-empty\"><p style=\"color:var(--red-vivid);\">Yükleme hatası</p></div>`;\n  }",
    "  } catch(e) {\n    console.error('Notif render error:', e);\n    list.innerHTML = `<div class=\"notif-empty\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" style=\"opacity:0.3;margin-bottom:10px;\"><path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/></svg><p>Şu anlık bildirim yok</p></div>`;\n  }"
)

# Replace admin panel logic
old_admin_block = """  if (user && rank.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += ` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>`;
    }
    renderAdminPanel();
  } else {
    document.body.classList.remove('is-admin');
  }"""

new_admin_block = """  if (user && rank.canAdmin) {
    document.body.classList.add('is-admin');
    const navComments = document.getElementById('nav-comments');
    if (navComments && !navComments.querySelector('.admin-badge')) {
      navComments.innerHTML += ` <span class="admin-badge" style="background:var(--accent-primary); color:white; font-size:0.6rem; padding:2px 4px; border-radius:4px; margin-left:4px;">ADMIN</span>`;
    }
    renderAdminPanel();
    if(document.getElementById('adminNotifPanel')) document.getElementById('adminNotifPanel').style.display = 'block';
  } else {
    document.body.classList.remove('is-admin');
    if(document.getElementById('adminNotifPanel')) document.getElementById('adminNotifPanel').style.display = 'none';
  }"""

content = content.replace(old_admin_block, new_admin_block)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replacement done.")
