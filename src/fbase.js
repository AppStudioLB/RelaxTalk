import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbOY1WXZ7MGYPZ0VvnlXoP78dDxDLgkbI",
  authDomain: "relaxtalk-9f82d.firebaseapp.com",
  projectId: "relaxtalk-9f82d",
  storageBucket: "relaxtalk-9f82d.appspot.com",
  messagingSenderId: "317814282178",
  appId: "1:317814282178:web:194f9f431345e59a74685b",
  measurementId: "G-K2968E34DL"
};


firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
