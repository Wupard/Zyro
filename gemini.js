// =============================================
// GEMINI AI — Core API Layer
// =============================================
// Google Gemini 3.1 Pro (ücretsiz/kendi key'i) entegrasyonu
// Kullanıcı kendi key'ini Profil > AI Ayarları'ndan girer

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const GEMINI_MODEL = 'gemini-2.0-flash';

// ---- Key Management ----
window.getGeminiKey = function() {
  return localStorage.getItem('zyro_gemini_key') || '';
};

window.setGeminiKey = function(key) {
  if (key && key.trim()) {
    localStorage.setItem('zyro_gemini_key', key.trim());
    return true;
  }
  return false;
};

window.hasGeminiKey = function() {
  return !!localStorage.getItem('zyro_gemini_key');
};

// ---- Build system context from user data ----
window.buildAISystemContext = function() {
  const p = (window.appData && window.appData.profile) || {};
  const name = p.displayName || (window.currentUser && window.currentUser.displayName) || 'Kullanıcı';
  const weight = p.weight ? `${p.weight} kg` : 'Belirtilmemiş';
  const height = p.height ? `${p.height} cm` : 'Belirtilmemiş';
  const age = p.age || 'Belirtilmemiş';
  const gender = p.gender === 'male' ? 'Erkek' : p.gender === 'female' ? 'Kadın' : 'Belirtilmemiş';

  // Last 7 days workout summary
  let totalSets = 0, totalExercises = new Set(), recentPR = 0, recentPREx = '';
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const logs = (window.appData && window.appData.workoutLogs && window.appData.workoutLogs[ds]) || [];
    logs.forEach(l => {
      totalSets += (l.sets || 1);
      if (l.exercise) totalExercises.add(l.exercise);
      if ((l.weight || 0) > recentPR) { recentPR = l.weight; recentPREx = l.exercise || ''; }
    });
  }

  let xp = 0, level = 1;
  try {
    if (typeof calculateXP === 'function') xp = calculateXP();
    if (typeof calculateLevel === 'function') level = calculateLevel(xp);
  } catch(e) {}

  return `Sen Zyro fitness uygulamasının AI antrenman koçusun. Adın "Zyro AI".

Kullanıcı Bilgileri:
- Ad: ${name}
- Kilo: ${weight}
- Boy: ${height}
- Yaş: ${age}
- Cinsiyet: ${gender}
- Seviye: ${level} (${xp} XP)
- Son 7 günde toplam set: ${totalSets}
- Son 7 günde çalışılan egzersiz sayısı: ${totalExercises.size}
${recentPR > 0 ? `- Son hafta en yüksek ağırlık: ${recentPR} kg (${recentPREx})` : ''}

Kurallar:
- Türkçe konuş, motive edici ve pozitif ol
- Kısa ve öz cevaplar ver (1-3 paragraf maksimum)
- Spor bilimini temele al, abartma
- Kullanıcı verilerini kullanarak kişiselleştirilmiş tavsiyeler ver
- Beslenme soruları için besin değerlerini belirt (kalori, protein, karbonhidrat, yağ)
- Emoji kullanabilirsin ama aşırıya kaçma`;
};


// ---- Content Preparation Helper ----
function prepareGeminiContents(messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return [];
  }

  // Filter out empty messages
  let filtered = messages.filter(msg => msg && typeof msg.content === 'string' && msg.content.trim());

  // Ensure first message has role 'user'
  while (filtered.length > 0 && filtered[0].role !== 'user') {
    filtered.shift();
  }

  if (filtered.length === 0) {
    return [];
  }

  // Merge or filter consecutive messages with the same role
  const optimized = [];
  filtered.forEach(msg => {
    const role = msg.role === 'user' ? 'user' : 'model';
    if (optimized.length > 0 && optimized[optimized.length - 1].role === role) {
      // Append content to previous message of the same role
      optimized[optimized.length - 1].parts[0].text += '\n\n' + msg.content.trim();
    } else {
      optimized.push({
        role: role,
        parts: [{ text: msg.content.trim() }]
      });
    }
  });

  return optimized;
}

// ---- Text Chat ----
window.geminiChat = async function(messages, options = {}) {
  const key = getGeminiKey();
  if (!key) throw new Error('NO_KEY');

  const systemPrompt = options.systemPrompt || buildAISystemContext();
  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent?key=${key}`;

  const contents = prepareGeminiContents(messages);

  const requestBody = {
    contents,
    generationConfig: {
      temperature: options.temperature || 0.8,
      maxOutputTokens: options.maxTokens || 1024,
      topP: 0.95
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' }
    ]
  };

  if (systemPrompt) {
    requestBody.systemInstruction = {
      parts: [{ text: systemPrompt }]
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    if (response.status === 400 || response.status === 403) throw new Error('INVALID_KEY');
    if (response.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return text;
};

// ---- Streaming Chat ----
window.geminiChatStream = async function(messages, onChunk, onDone, options = {}) {
  const key = getGeminiKey();
  if (!key) throw new Error('NO_KEY');

  const systemPrompt = options.systemPrompt || buildAISystemContext();
  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=${key}`;

  const contents = prepareGeminiContents(messages);

  const requestBody = {
    contents,
    generationConfig: {
      temperature: options.temperature || 0.8,
      maxOutputTokens: options.maxTokens || 1024
    }
  };

  if (systemPrompt) {
    requestBody.systemInstruction = {
      parts: [{ text: systemPrompt }]
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    if (response.status === 400 || response.status === 403) throw new Error('INVALID_KEY');
    if (response.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(`HTTP ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullText = '';
  let buffer = '';

  const processLine = (line) => {
    if (line.startsWith('data: ')) {
      const jsonStr = line.slice(6).trim();
      if (jsonStr === '[DONE]') return;
      try {
        const parsed = JSON.parse(jsonStr);
        const chunk = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (chunk) {
          fullText += chunk;
          onChunk(chunk, fullText);
        }
      } catch(e) { /* skip malformed */ }
    }
  };

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    for (const line of lines) {
      processLine(line);
    }
  }

  // Process any leftover data in buffer
  if (buffer.trim()) {
    processLine(buffer);
  }

  if (onDone) onDone(fullText);
  return fullText;
};


// ---- Image Analysis (Before/After) ----
window.geminiAnalyzeImages = async function(imageBase64Array, customPrompt) {
  const key = getGeminiKey();
  if (!key) throw new Error('NO_KEY');

  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent?key=${key}`;

  const parts = [
    { text: customPrompt || `Bu iki fitness gelişim fotoğrafını karşılaştır. 
    
İlk fotoğraf "Önceki" (eski hal), ikinci fotoğraf "Sonraki" (yeni hal) durumu gösteriyor.

Lütfen değerlendirmeni aşağıdaki JSON formatında, belirtilen anahtarlarla (keys) tam olarak eşleşecek şekilde ver:
{
  "photo1_analysis": "Birinci (eski) fotoğraf için vücut durumu, iyi yanlar ve eksik/kötü yanların kısa bir özeti.",
  "photo2_analysis": "İkinci (yeni) fotoğraf için vücut durumu, iyi yanlar ve eksik/kötü yanların kısa bir özeti.",
  "comparison_and_suggestions": "İki fotoğraf arasındaki genel karşılaştırma (kas/yağ gelişimi) ve bundan sonra odaklanılması gereken gelişim önerileri."
}

Türkçe, spor koçu gibi gerçekçi ama motive edici bir üslupla yorum yap.` }
  ];

  imageBase64Array.forEach((b64, i) => {
    const mimeType = b64.startsWith('data:image/png') ? 'image/png' : 
                     b64.startsWith('data:image/webp') ? 'image/webp' : 'image/jpeg';
    const data = b64.replace(/^data:image\/[a-z]+;base64,/, '');
    parts.push({
      inlineData: { mimeType, data }
    });
    parts.push({ text: i === 0 ? '(Bu birinci / eski fotoğraf)' : '(Bu ikinci / yeni fotoğraf)' });
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts }],
      generationConfig: { 
        temperature: 0.7, 
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            photo1_analysis: { type: "STRING" },
            photo2_analysis: { type: "STRING" },
            comparison_and_suggestions: { type: "STRING" }
          },
          required: ["photo1_analysis", "photo2_analysis", "comparison_and_suggestions"]
        }
      }
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    if (response.status === 400 || response.status === 403) throw new Error('INVALID_KEY');
    if (response.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
};

window.geminiAnalyzeFoodImage = async function(imageBase64) {
  const key = getGeminiKey();
  if (!key) throw new Error('NO_KEY');

  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent?key=${key}`;

  const prompt = `Bu yemek fotoğrafını analiz et ve içindeki yiyecekleri tahmin ederek makro besin değerlerini (kalori, protein, karbonhidrat, yağ) hesapla. 
Eğer resim bir yemek değilse veya net değilse, en yakın tahminini yap ama açıklama kısmında bunu belirt.

Lütfen değerlendirmeni aşağıdaki JSON formatında, belirtilen anahtarlarla (keys) tam olarak eşleşecek şekilde ver:
{
  "meal_name": "Yemeğin kısa adı (Türkçe)",
  "calories": 450,
  "protein": 30,
  "carbs": 45,
  "fat": 12,
  "description": "Yemeğin içeriği hakkında kısa bir açıklama ve tahmin açıklaması (Türkçe)"
}

Sadece geçerli bir JSON objesi döndür, markdown veya ek açıklama metni ekleme.`;

  const mimeType = imageBase64.startsWith('data:image/png') ? 'image/png' : 
                   imageBase64.startsWith('data:image/webp') ? 'image/webp' : 'image/jpeg';
  const data = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');

  const parts = [
    { text: prompt },
    { inlineData: { mimeType, data } }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts }],
      generationConfig: { 
        temperature: 0.3, 
        maxOutputTokens: 1024,
        responseMimeType: "application/json" 
      }
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    if (response.status === 400 || response.status === 403) throw new Error('INVALID_KEY');
    if (response.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(err.error?.message || `HTTP ${response.status}`);
  }

  const resData = await response.json();
  const text = resData.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return JSON.parse(text.trim());
};

// ---- Free Text Food Analysis (for manual entry) ----
window.geminiAnalyzeFoodText = async function(foodText) {
  const key = getGeminiKey();
  if (!key) throw new Error('NO_KEY');

  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent?key=${key}`;

  const prompt = `Aşağıdaki yiyecek listesini analiz et ve toplam makro besin değerlerini hesapla.

Kullanıcı girişi: "${foodText}"

Kurallar:
- Her besin için ortalama besin değerlerini kullan (gramaj belirtilmişse o miktara göre, belirtilmemişse standart porsiyon)
- Tüm besinlerin TOPLAMINI hesapla
- Türkçe bir özet yemek adı üret (ör: "Kahvaltı Tabağı", "Öğle Öğünü")
- Sadece geçerli JSON döndür, başka hiçbir şey ekleme

Yanıtı SADECE şu JSON formatında ver (başka açıklama, markdown, kod bloğu ekleme):
{"meal_name":"Kısa Türkçe yemek adı","calories":450,"protein":30,"carbs":45,"fat":12,"description":"Kısa Türkçe açıklama"}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 512
      }
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const errMsg = err.error?.message || '';
    if (response.status === 403 || errMsg.includes('API_KEY')) throw new Error('INVALID_KEY');
    if (response.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(errMsg || `HTTP ${response.status}`);
  }

  const resData = await response.json();
  let text = resData.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Strip markdown code fences if model wraps in ```json ... ```
  text = text.trim();
  if (text.startsWith('```')) {
    text = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
  }

  // Find the first JSON object in the text
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Geçersiz AI yanıtı: JSON bulunamadı');

  return JSON.parse(jsonMatch[0]);
};

// ---- Error message helper ----
window.geminiErrorMessage = function(err) {
  if (!err) return 'Bilinmeyen hata';
  const msg = err.message || String(err);
  if (msg === 'NO_KEY') return '⚙️ Önce AI ayarlarından Gemini API key\'ini gir. <a href="#" onclick="switchPage(\'profile\');setTimeout(()=>switchProfileTab(\'ai\'),200);return false;" style="color:var(--accent-primary);">Ayarlara git →</a>';
  if (msg === 'INVALID_KEY') return '🔑 API key geçersiz. Profil > AI Ayarları\'ndan kontrol et.';
  if (msg === 'RATE_LIMIT') return '⏳ Çok fazla istek gönderildi. 1 dakika bekle ve tekrar dene.';
  if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) return '🌐 İnternet bağlantısı yok. Kontrol et ve tekrar dene.';
  return `Hata: ${msg}`;
};

console.log('[Zyro] Gemini AI module loaded ✓');
