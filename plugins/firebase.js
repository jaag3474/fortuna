import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/database");


const firebaseConfig = {
  apiKey: "AIzaSyD26voZctjujNxP_8_TRhvGPUUnn-UhKxg",
  authDomain: "pula-41000.firebaseapp.com",
  databaseURL: "https://pula-41000.firebaseio.com",
  projectId: "pula-41000",
  storageBucket: "pula-41000.appspot.com",
  messagingSenderId: "306744698284",
  appId: "1:306744698284:web:08244338bffff944900609",
  measurementId: "G-HB0SP4DW0T"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const baseDb = firebase.database();

export {firebase, db, auth, storage}
