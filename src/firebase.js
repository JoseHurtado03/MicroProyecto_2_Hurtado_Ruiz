// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADL43CloX2XJsSSn_LaHzOJWkYxavGuag",
  authDomain: "microproyecto-2-3ca70.firebaseapp.com",
  projectId: "microproyecto-2-3ca70",
  storageBucket: "microproyecto-2-3ca70.appspot.com",
  messagingSenderId: "741110876911",
  appId: "1:741110876911:web:41b715018bf4f60f39e91a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
