// ============================================================
// sw.js — Zyro PWA Service Worker (Cache / Offline)
// FCM işlemleri firebase-messaging-sw.js tarafından yapılır.
// Bu dosya SADECE cache ve offline desteği içindir.
// ============================================================

const CACHE_NAME = 'zyro-v9';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .catch((err) => console.warn('PWA Cache install error:', err))
  );
  // Hemen aktif ol — kullanıcı yenileme beklemek zorunda kalmasın
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Sadece aynı origin'deki istekleri cache'le (Firebase/Google API'lerini hariç tut)
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Network First → Cache Fallback stratejisi
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          // Navigation isteği ise ana sayfayı döndür (SPA desteği)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        })
      )
  );
});
