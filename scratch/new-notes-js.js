// ============================================================
// ZYRO NOTLAR (NOTES) — Zyro Panel v3 Redesign
// Connected directly to appData.notes, preserved, multi-tag, colors
// ============================================================
let editingNoteId = null;
let currentNoteColor = '#8fb3cc';
let currentNoteTag = null;
let isAddingTag = false;
let selectedNoteIds = new Set();

const NOTE_COLORS = ['#8fb3cc', '#c99a9a', '#7d9be0', '#7fb08f', '#b99a7a'];

function getAvailableTags() {
  const defaultTags = [
    { id: 'later', label: currentLang === 'tr' ? 'Daha Sonra' : 'Later', icon: 'zr-i-upd' },
    { id: 'idea', label: currentLang === 'tr' ? 'Fikir' : 'Idea', icon: 'zr-i-post' },
    { id: 'gym', label: 'GYM', icon: 'zr-i-dumb' }
  ];
  let custom = [];
  try {
    const stored = JSON.parse(localStorage.getItem('zyro-custom-tags'));
    if (Array.isArray(stored)) custom = stored;
  } catch (e) {}
  return [...defaultTags, ...custom];
}

function initNotes() {
  const form = document.getElementById('fn');
  if (!form) return;

  const dotsEl = document.getElementById('dots');
  const tagsEl = document.getElementById('tg');
  const cancelBtn = document.getElementById('cx');
  const bulkDeleteBtn = document.getElementById('ds');

  // Render color dots
  if (dotsEl) {
    dotsEl.innerHTML = NOTE_COLORS.map((c, i) =>
      `<button type="button" class="dot2" style="--c:${c}" data-c="${c}" aria-pressed="${c === currentNoteColor}" aria-label="Renk ${i + 1}"></button>`
    ).join('');

    dotsEl.onclick = e => {
      const b = e.target.closest('[data-c]');
      if (b) {
        currentNoteColor = b.dataset.c;
        renderNotesForm();
      }
    };
  }

  // Tags click handling
  if (tagsEl) {
    tagsEl.onclick = async e => {
      const t = e.target.closest('[data-t]');
      const td = e.target.closest('[data-td]');
      const ta = e.target.closest('[data-ta]');

      if (t) {
        currentNoteTag = currentNoteTag === t.dataset.t ? null : t.dataset.t;
        renderNotesForm();
        return;
      }

      if (ta) {
        const k = ta.dataset.ta;
        if (k === 'new') {
          isAddingTag = true;
          renderNotesForm();
          return;
        }
        if (k === 'no') {
          isAddingTag = false;
          renderNotesForm();
          return;
        }
        if (k === 'ok') {
          const input = document.getElementById('tn');
          const val = input ? input.value.trim() : '';
          if (!val) {
            showToast(currentLang === 'tr' ? 'Etiket adı boş olamaz' : 'Tag name cannot be empty', 'error');
            return;
          }
          let custom = [];
          try {
            custom = JSON.parse(localStorage.getItem('zyro-custom-tags')) || [];
          } catch (e) {}
          if (custom.some(x => x.label.toLowerCase() === val.toLowerCase())) {
            showToast(currentLang === 'tr' ? 'Bu etiket zaten var' : 'This tag already exists', 'error');
            return;
          }
          const newTag = { id: 't_' + Date.now(), label: val, icon: 'zr-i-tag-custom', custom: 1 };
          custom.push(newTag);
          localStorage.setItem('zyro-custom-tags', JSON.stringify(custom));
          currentNoteTag = newTag.id;
          isAddingTag = false;
          renderNotesForm();
          return;
        }
      }

      if (td) {
        if (confirm(currentLang === 'tr' ? 'Bu etiket silinsin mi?' : 'Delete this tag?')) {
          let custom = [];
          try {
            custom = JSON.parse(localStorage.getItem('zyro-custom-tags')) || [];
          } catch (e) {}
          custom = custom.filter(x => x.id !== td.dataset.td);
          localStorage.setItem('zyro-custom-tags', JSON.stringify(custom));
          if (currentNoteTag === td.dataset.td) currentNoteTag = null;
          renderNotesForm();
          renderNotes();
        }
      }
    };

    tagsEl.onkeydown = e => {
      if (e.target.id === 'tn') {
        if (e.key === 'Enter') {
          e.preventDefault();
          const okBtn = tagsEl.querySelector('[data-ta=ok]');
          if (okBtn) okBtn.click();
        }
        if (e.key === 'Escape') {
          isAddingTag = false;
          renderNotesForm();
        }
      }
    };
  }

  // Cancel button
  if (cancelBtn) {
    cancelBtn.onclick = () => {
      editingNoteId = null;
      currentNoteTag = null;
      currentNoteColor = NOTE_COLORS[0];
      form.reset();
      const errEl = document.getElementById('er');
      if (errEl) errEl.textContent = '';
      renderNotesForm();
    };
  }

  // Form submit
  form.onsubmit = e => {
    e.preventDefault();
    const title = (document.getElementById('nt').value || '').trim();
    const text = (document.getElementById('nx').value || '').trim();
    const errEl = document.getElementById('er');

    if (!title && !text) {
      if (errEl) errEl.textContent = currentLang === 'tr' ? 'Bir başlık veya not yaz.' : 'Write a title or note.';
      return;
    }
    if (errEl) errEl.textContent = '';

    if (!appData.notes) appData.notes = {};

    const noteId = editingNoteId || ('n_' + Date.now());
    const existing = appData.notes[noteId] || {};

    appData.notes[noteId] = {
      id: noteId,
      title: title,
      text: text,
      color: currentNoteColor,
      tag: currentNoteTag,
      timestamp: existing.timestamp || Date.now(),
      date: existing.date || todayStr()
    };

    saveData();
    showToast(editingNoteId ? (currentLang === 'tr' ? 'Not güncellendi' : 'Note updated') : (currentLang === 'tr' ? 'Not kaydedildi' : 'Note saved'), 'success');

    editingNoteId = null;
    currentNoteTag = null;
    currentNoteColor = NOTE_COLORS[0];
    form.reset();
    renderNotesForm();
    renderNotes();
  };

  // Bulk delete
  if (bulkDeleteBtn) {
    bulkDeleteBtn.onclick = () => {
      if (!selectedNoteIds.size) return;
      const count = selectedNoteIds.size;
      const msg = currentLang === 'tr' ? `${count} not silinsin mi? Bu işlem geri alınamaz.` : `Delete ${count} notes? This cannot be undone.`;
      if (!confirm(msg)) return;

      selectedNoteIds.forEach(id => {
        delete appData.notes[id];
      });
      selectedNoteIds.clear();
      saveData();
      renderNotes();
      showToast(currentLang === 'tr' ? 'Notlar silindi' : 'Notes deleted', 'success');
    };
  }

  renderNotesForm();
  renderNotes();
}

function renderNotesForm() {
  const dotsEl = document.getElementById('dots');
  const tagsEl = document.getElementById('tg');
  const ft = document.getElementById('ft');
  const bg = document.getElementById('bg');
  const svt = document.getElementById('svt');
  const cx = document.getElementById('cx');

  if (dotsEl) {
    dotsEl.innerHTML = NOTE_COLORS.map((c, i) =>
      `<button type="button" class="dot2" style="--c:${c}" data-c="${c}" aria-pressed="${c === currentNoteColor}" aria-label="Renk ${i + 1}"></button>`
    ).join('');
  }

  if (tagsEl) {
    const tags = getAvailableTags();
    const tagItems = tags.map(t =>
      `<span class="tc${t.custom ? ' cu' : ''}">` +
        `<button type="button" data-t="${t.id}" aria-pressed="${t.id === currentNoteTag}">` +
          `<svg class="i" width="14" height="14"><use href="#${t.icon}"/></svg>${t.label}` +
        `</button>` +
        (t.custom ? `<button type="button" class="tr2" data-td="${t.id}" aria-label="Sil">✕</button>` : '') +
      `</span>`
    ).join('');

    const addPart = isAddingTag
      ? `<span class="ta"><input class="in" id="tn" maxlength="20" placeholder="${currentLang === 'tr' ? 'Etiket adı' : 'Tag name'}"><button type="button" class="btn" data-ta="ok">${currentLang === 'tr' ? 'Ekle' : 'Add'}</button><button type="button" class="ghost" data-ta="no">${currentLang === 'tr' ? 'İptal' : 'Cancel'}</button></span>`
      : `<button type="button" class="add" data-ta="new"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>${currentLang === 'tr' ? 'Etiket ekle' : 'Add tag'}</button>`;

    tagsEl.innerHTML = tagItems + addPart;
    if (isAddingTag) {
      const inp = document.getElementById('tn');
      if (inp) inp.focus();
    }
  }

  if (ft) ft.textContent = editingNoteId ? (currentLang === 'tr' ? 'Notu düzenle' : 'Edit note') : (currentLang === 'tr' ? 'Bugünkü giriş' : 'Today\'s entry');
  if (bg) bg.hidden = !!editingNoteId;
  if (svt) svt.textContent = editingNoteId ? (currentLang === 'tr' ? 'Güncelle' : 'Update') : (currentLang === 'tr' ? 'Notu kaydet' : 'Save note');
  if (cx) cx.hidden = !editingNoteId;
}

function renderNotes() {
  const container = document.getElementById('ls');
  const countEl = document.getElementById('cn');
  const deleteSelectedBtn = document.getElementById('ds');
  const dst = document.getElementById('dst');
  if (!container) return;

  const entries = Object.values(appData.notes || {}).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  // Prune deleted selected ids
  selectedNoteIds = new Set([...selectedNoteIds].filter(id => appData.notes && appData.notes[id]));

  if (countEl) countEl.textContent = entries.length;
  if (deleteSelectedBtn) deleteSelectedBtn.disabled = !selectedNoteIds.size;
  if (dst) {
    dst.textContent = selectedNoteIds.size
      ? (currentLang === 'tr' ? `Seçilenleri sil (${selectedNoteIds.size})` : `Delete selected (${selectedNoteIds.size})`)
      : (currentLang === 'tr' ? 'Seçilenleri sil' : 'Delete selected');
  }

  if (entries.length === 0) {
    container.innerHTML = `<div class="empty">${currentLang === 'tr' ? 'Henüz not yok. İlk girişini yukarıdan ekle.' : 'No notes yet. Add your first entry above.'}</div>`;
    return;
  }

  const tags = getAvailableTags();

  container.innerHTML = entries.map(n => {
    const d = new Date(n.timestamp || Date.now());
    const dateStr = d.toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      weekday: 'short'
    });
    const foundTag = tags.find(x => x.id === n.tag);
    const color = n.color || NOTE_COLORS[0];
    const isChecked = selectedNoteIds.has(n.id);

    return `
      <article class="nt" style="--c:${color}" data-id="${n.id}">
        <input type="checkbox" data-s ${isChecked ? 'checked' : ''} aria-label="Seç">
        <div>
          <time>${dateStr}</time>
          ${n.title ? `<h3>${escapeHtml(n.title)}</h3>` : ''}
          <div class="tx">${escapeHtml(n.text || '')}</div>
          ${foundTag ? `<span class="tag"><svg class="i" width="12" height="12"><use href="#${foundTag.icon}"/></svg>${escapeHtml(foundTag.label)}</span>` : ''}
        </div>
        <div class="na">
          <button class="ghost" data-a="e">
            <svg class="i" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            ${currentLang === 'tr' ? 'Düzenle' : 'Edit'}
          </button>
          <button class="ghost danger" data-a="d">
            <svg class="i" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            ${currentLang === 'tr' ? 'Sil' : 'Delete'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Event delegation on list
  container.onclick = e => {
    const card = e.target.closest('[data-id]');
    if (!card) return;
    const id = card.dataset.id;
    const note = appData.notes && appData.notes[id];

    if (e.target.matches('[data-s]')) {
      if (e.target.checked) selectedNoteIds.add(id);
      else selectedNoteIds.delete(id);
      renderNotes();
      return;
    }

    const actionBtn = e.target.closest('[data-a]');
    if (!actionBtn) return;

    if (actionBtn.dataset.a === 'e' && note) {
      editingNoteId = id;
      currentNoteTag = note.tag || null;
      currentNoteColor = note.color || NOTE_COLORS[0];
      renderNotesForm();
      const titleInput = document.getElementById('nt');
      const textInput = document.getElementById('nx');
      if (titleInput) titleInput.value = note.title || '';
      if (textInput) textInput.value = note.text || '';
      const formEl = document.getElementById('fn');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (textInput) textInput.focus();
    } else if (actionBtn.dataset.a === 'd') {
      const msg = currentLang === 'tr' ? 'Not silinsin mi? Bu işlem geri alınamaz.' : 'Delete this note? This cannot be undone.';
      if (confirm(msg)) {
        delete appData.notes[id];
        selectedNoteIds.delete(id);
        saveData();
        renderNotes();
        showToast(currentLang === 'tr' ? 'Not silindi' : 'Note deleted', 'success');
      }
    }
  };
}
