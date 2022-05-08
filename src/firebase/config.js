//import {fb ,initializeApp } from "firebase/app";
import fb from 'firebase/compat/app';
console.log(process.env.REACT_APP_FIRESTORE_API_KEY)
console.log(process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN)
console.log(process.env.REACT_APP_FIRESTORE_DATABASE_URL)
console.log(process.env.REACT_APP_FIRESTORE_PROJECT_ID)
console.log(process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET)
console.log(process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID)
console.log(process.env.REACT_APP_FIRESTORE_APP_ID)
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRESTORE_APP_ID
  };
export const firebase = fb.initializeApp(firebaseConfig);
