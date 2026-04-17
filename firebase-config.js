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
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

// Explicitly make these global for app.js
var isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";
var app = null;
var auth = null;
var db = null;

if (isFirebaseConfigured && typeof firebase !== 'undefined') {
  app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();

  // Enable offline persistence
  db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
    console.warn('Firestore persistence error:', err.code);
  });
}

// Also attach to window for extra safety
window.isFirebaseConfigured = isFirebaseConfigured;
window.app = app;
window.auth = auth;
window.db = db;
