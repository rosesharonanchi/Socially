import firebase from "firebase/compat/app"; // Import the compat version for compatibility
import "firebase/compat/auth"; // Import auth module
import "firebase/compat/firestore"; // Import firestore module

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZJN6U2Kn0-C1HaSZeC_ylICpixa0bgA",
  authDomain: "socially-bb01a.firebaseapp.com",
  projectId: "socially-bb01a",
  storageBucket: "socially-bb01a.appspot.com",
  messagingSenderId: "923204762460",
  appId: "1:923204762460:web:d9071b79b38389d0ce1f99",
  measurementId: "G-Y4HQCDX6H4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;