import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyCq5TBsPioXj5Z0YWZS9vRz5hQelFVj7F0",
  authDomain: "nuxt-prueba.firebaseapp.com",
  databaseURL: "https://nuxt-prueba.firebaseio.com",
  projectId: "nuxt-prueba",
  storageBucket: "nuxt-prueba.appspot.com",
  messagingSenderId: "900735626641",
  appId: "1:900735626641:web:851f6842ccb910a573fe30",
  measurementId: "G-WPSP7KJK17"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}
