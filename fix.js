const fs = require('fs'); const lines = fs.readFileSync('app.js', 'utf8').split('\n'); const start = 6056; const end = 6066; const newLines = \  } else {
    section.innerHTML = \\`n      <div style="padding:16px; background:rgba(76,203,141,0.1); border:1px solid rgba(76,203,141,0.2); border-radius:10px; margin-bottom:16px;">
        <div style="font-size:0.85rem; color:var(--green-vivid); font-weight:600; margin-bottom:8px;">?? Bilgi</div>
        <div style="font-size:0.8rem; color:var(--text-secondary);">Google ile giriþ yaptýðýnýz için þu anda þifreniz yok. Aþaðýdan bir þifre belirleyebilirsiniz.</div>
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Þifre</label>
        <input type="password" id="newPassword" class="log-input" placeholder="Þifre belirleyin (min 6 karakter)">
      </div>
      <div>
        <label style="font-size:0.75rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Yeni Þifre (Tekrar)</label>
        <input type="password" id="confirmPassword" class="log-input" placeholder="Þifreyi tekrar girin">
      </div>
      <button class="btn-primary" onclick="setNewPassword()" style="width:100%; margin-top:12px;">Þifre Belirle</button>
    \\;
  }\.split('\n'); lines.splice(start, end - start + 1, ...newLines); fs.writeFileSync('app.js', lines.join('\n'));
