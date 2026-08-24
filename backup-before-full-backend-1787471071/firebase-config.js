const firebaseConfig = {
  apiKey: "AIzaSyBHQvnln0pmM2bynIVghovt9QMD47HixiQ",
  authDomain: "rdm-official-website.firebaseapp.com",
  projectId: "rdm-official-website",
  storageBucket: "rdm-official-website.firebasestorage.app",
  messagingSenderId: "252344041592",
  appId: "1:252344041592:web:dfa69837bea63968bf2d8d"
};

/* PLAYER / REHAN SESSION */
const playerApp = firebase.initializeApp(firebaseConfig);
const rdmAuth = playerApp.auth();
const rdmDB = playerApp.firestore();

/* SEPARATE ADMIN SESSION */
const adminApp = firebase.initializeApp(firebaseConfig, "RDM_ADMIN");
const rdmAdminAuth = adminApp.auth();

console.log("RDM Firebase dual-session ready");
