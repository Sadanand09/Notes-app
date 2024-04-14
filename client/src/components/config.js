import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA9OsXm64LsSwpKRRxlyat68gkmeqSh3mE",
  authDomain: "notesapp-851dc.firebaseapp.com",
  projectId: "notesapp-851dc",
  storageBucket: "notesapp-851dc.appspot.com",
  messagingSenderId: "393850349484",
  appId: "1:393850349484:web:56b825e6efa773b3747c09",
  measurementId: "G-43TRDCDHWZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};