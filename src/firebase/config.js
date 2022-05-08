//import {fb ,initializeApp } from "firebase/app";
import fb from 'firebase/compat/app';
const firebaseConfig = {
  apiKey: "AIzaSyDQ59jhXccy3A0PvbcYN64S09Mmz9zZVII",
  authDomain: "invitacion-jazmin.firebaseapp.com",
  databaseURL: "https://invitacion-jazmin-default-rtdb.firebaseio.com",
  projectId: "invitacion-jazmin",
  storageBucket: "invitacion-jazmin.appspot.com",
  messagingSenderId: "826639281310",
  appId: "1:826639281310:web:08ed2f17ee17a50d5fdf8f"
};
/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRESTORE_APP_ID
  };*/
export const firebase = fb.initializeApp(firebaseConfig);
