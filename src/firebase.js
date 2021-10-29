// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlebK2RvkBTyLVvUvSd9ab6dQsppOsYHk",
  authDomain: "photo-tagging-game.firebaseapp.com",
  projectId: "photo-tagging-game",
  storageBucket: "photo-tagging-game.appspot.com",
  messagingSenderId: "824455373394",
  appId: "1:824455373394:web:5036ff67e426c999f9f58b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = getFirestore();
export default db;