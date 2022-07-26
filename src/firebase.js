import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7yeKcbHcGc55A7nQP3buQjudIXk5cPP4",
  authDomain: "challenge-9c77a.firebaseapp.com",
  projectId: "challenge-9c77a",
  storageBucket: "challenge-9c77a.appspot.com",
  messagingSenderId: "207301827870",
  appId: "1:207301827870:web:ce4ef05e09033bb4c33d0f",
  measurementId: "G-TKEW41K4KD"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

