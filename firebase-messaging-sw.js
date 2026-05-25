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
  } catch(e) {
    console.warn('FCM SW Messaging init failed:', e);
  }
}
