import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJtV8ABWfoMVYtGsjumDHdxG3G3EatRXc",
    authDomain: "react-app-journal-d7b93.firebaseapp.com",
    databaseURL: "https://react-app-journal-d7b93.firebaseio.com",
    projectId: "react-app-journal-d7b93",
    storageBucket: "react-app-journal-d7b93.appspot.com",
    messagingSenderId: "676197813826",
    appId: "1:676197813826:web:05c8d4ee18f5bed4bb27db"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}