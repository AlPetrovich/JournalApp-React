// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi-fY45v5e2svIzvWjOnFChOGwac3u8_0",
  authDomain: "react-journal-v2.firebaseapp.com",
  projectId: "react-journal-v2",
  storageBucket: "react-journal-v2.appspot.com",
  messagingSenderId: "885514077439",
  appId: "1:885514077439:web:c1c7522e52f11a83d7b8ca"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp ); //aqui vienen funcionalidades de autenticacion
export const FirebaseDB = getFirestore( FirebaseApp ); //config de mi DB