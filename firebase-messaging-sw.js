// ============================================================
// firebase-messaging-sw.js — Zyro FCM Service Worker
// Bu dosya SADECE Firebase Cloud Messaging içindir.
// Cache/fetch işlemleri sw.js tarafından yapılır.
// ============================================================

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase config — firebase-config.js service worker scope'unda çalışmadığı için inline tanımlıyoruz
const firebaseConfig = {
  apiKey: "AIzaSyDYrlYlNndylxPNv5VGguB10dTs_JTMUv0",
  authDomain: "zyro-d98d6.firebaseapp.com",
  projectId: "zyro-d98d6",
  storageBucket: "zyro-d98d6.firebasestorage.app",
  messagingSenderId: "909109062896",
  appId: "1:909109062896:web:e3f314b51ab47924446635",
  measurementId: "G-C8MK0BJ1G4"
};

// Firebase'i başlat (tekrar başlatmaktan kaçın)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const messaging = firebase.messaging();

// Arka planda (uygulama kapalıyken) gelen push bildirimleri
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Arka plan mesajı alındı:', payload);

  const notificationTitle = payload.notification?.title || 'Zyro Bildirimi';
  const notificationBody  = payload.notification?.body  || '';
  const notifIcon  = payload.notification?.icon  || '/favicon.svg';
  const notifBadge = payload.notification?.badge || '/favicon.svg';
  const clickLink  = payload.data?.link || '/';

  const notificationOptions = {
    body: notificationBody,
    icon: notifIcon,
    badge: notifBadge,
    vibrate: [200, 100, 200],
    requireInteraction: false,
    data: { link: clickLink, ...payload.data },
    // Aynı konu üzerinden gelen bildirimler birikmesin (Android-like)
    tag: 'zyro-push-' + (payload.data?.tag || 'default'),
    renotify: true,
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Bildirime tıklandığında uygulamayı aç / ön plana getir
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.link || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Açık bir pencere varsa ön plana getir
      for (const client of windowClients) {
        if ('focus' in client) {
          client.focus();
          client.navigate(targetUrl);
          return;
        }
      }
      // Açık pencere yoksa yeni aç
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// SW'nin hemen aktif olmasını sağla (kullanıcı uygulamayı yeniden açmak zorunda kalmasın)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
