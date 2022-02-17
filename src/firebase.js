// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zihZNi17ilEbTxATLXQoa8nxaopwSoY",
  authDomain: "linkedin-clone-22bcb.firebaseapp.com",
  projectId: "linkedin-clone-22bcb",
  storageBucket: "linkedin-clone-22bcb.appspot.com",
  messagingSenderId: "370928454398",
  appId: "1:370928454398:web:23b4f882772c8faead33af"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };