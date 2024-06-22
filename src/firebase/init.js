// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARnjMscpbfjzfcJc1f1CuloEQ_KmD3YMY",
  authDomain: "geografisk-have-4da68.firebaseapp.com",
  projectId: "geografisk-have-4da68",
  storageBucket: "geografisk-have-4da68.appspot.com",
  messagingSenderId: "734436357077",
  appId: "1:734436357077:web:3d18e1ff759135df56835c",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
const db = getFirestore(app)
export {
  db
} 