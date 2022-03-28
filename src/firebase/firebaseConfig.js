import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_9CCWLOg9DgjITXWyPAjZ6fwQJreCUM8",
    authDomain: "react-app-project-4f5bf.firebaseapp.com",
    projectId: "react-app-project-4f5bf",
    storageBucket: "react-app-project-4f5bf.appspot.com",
    messagingSenderId: "251280741352",
    appId: "1:251280741352:web:1fce3a818d5c251abb0a5d"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referencia a mi base de datos
const db = firebase.firestore();
//auth provider para que pueda hacer la autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}