const firebaseConfig = {
  apiKey: "AIzaSyBHQvnln0pmM2bynIVghovt9QMD47HixiQ",
  authDomain: "rdm-official-website.firebaseapp.com",
  projectId: "rdm-official-website",
  storageBucket: "rdm-official-website.firebasestorage.app",
  messagingSenderId: "252344041592",
  appId: "1:252344041592:web:dfa69837bea63968bf2d8d"
};

firebase.initializeApp(firebaseConfig);
const rdmAuth = firebase.auth();
const rdmDB = firebase.firestore();
console.log("RDM Firebase connected");
