import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAab0HdR9spYlqI-0Z3R4QRa3UoYU_Wflc",
  authDomain: "pin-it-8dd6e.firebaseapp.com",
  databaseURL: "https://pin-it-8dd6e-default-rtdb.firebaseio.com",
  projectId: "pin-it-8dd6e",
  storageBucket: "pin-it-8dd6e.appspot.com",
  messagingSenderId: "1054852884997",
  appId: "1:1054852884997:web:a9126892339a36b5e58a6c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
