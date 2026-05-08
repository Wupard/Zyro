/* ===========================
   Zyro — Firebase Configuration
   =========================== */

const firebaseConfig = {
  apiKey: "AIzaSyDYrlYlNndylxPNv5VGguB10dTs_JTMUv0",
  authDomain: "zyro-d98d6.firebaseapp.com",
  projectId: "zyro-d98d6",
  storageBucket: "zyro-d98d6.firebasestorage.app",
  messagingSenderId: "909109062896",
  appId: "1:909109062896:web:e3f314b51ab47924446635",
  measurementId: "G-C8MK0BJ1G4"
};

// Check if Firebase is configured
var isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";
var app = null;
var auth = null;
var db = null;

if (isFirebaseConfigured && typeof firebase !== 'undefined') {
  app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();

  // Enable offline persistence (modern API to avoid deprecation warning)
  // Note: We wrap this in a try-catch to handle SDK version mismatches gracefully
  try {
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('Firestore persistence: Multiple tabs open, only one can enable persistence.');
      } else if (err.code === 'unimplemented') {
        console.warn('Firestore persistence: Browser does not support all features.');
      } else {
        console.error('Firestore persistence error:', err);
      }
    });
  } catch (e) {
    console.warn('Firestore persistence could not be initialized:', e);
  }
}

// Also attach to window for extra safety
window.isFirebaseConfigured = isFirebaseConfigured;
window.app = app;
window.auth = auth;
window.db = db;
