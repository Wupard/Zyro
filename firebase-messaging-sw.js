importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

importScripts('./firebase-config.js');

if (typeof firebase !== 'undefined' && firebaseConfig) {
  // Ensure we don't initialize app if already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  try {
    const messaging = firebase.messaging();
    
    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        data: payload.data
      };
    
      self.registration.showNotification(notificationTitle, notificationOptions);
    });
    
    self.addEventListener('notificationclick', function(event) {
      event.notification.close();
      const targetUrl = (event.notification.data && event.notification.data.link) ? event.notification.data.link : '/';
      
      event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
          for (let i = 0; i < windowClients.length; i++) {
            const client = windowClients[i];
            if (client.url.includes(self.registration.scope) && 'focus' in client) {
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow(targetUrl);
          }
        })
      );
    });
  } catch(e) {
    console.warn('FCM SW Messaging init failed:', e);
  }
}
