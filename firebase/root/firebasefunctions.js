
// Import the functions you need from the SDKs you need
import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getFirestore, Timestamp, FieldValue } from "firebase/firestore";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
//import {FB_Auth, Push, Fetch} from "./fb_controller";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8UlMrvwPONlwq-qjs0-RyHQ2QKdYpGlo",
  authDomain: "project-a9c2b.firebaseapp.com",
  projectId: "project-a9c2b",
  storageBucket: "project-a9c2b.appspot.com",
  messagingSenderId: "1026438619687",
  appId: "1:1026438619687:web:dfef22766b36fa9def2402",
  measurementId: "G-0377N22HM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export default db;
/*
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //const auth_data = FB_Auth(user);
    //show success and redirect
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //show error message on screen
  });

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const auth_data = FB_Auth(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

*/