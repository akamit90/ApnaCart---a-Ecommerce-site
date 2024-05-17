

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlaLYInlcni7ABnnh-KGqVvU1K-gMD1hk",
  authDomain: "apnacart-843f7.firebaseapp.com",
  projectId: "apnacart-843f7",
  storageBucket: "apnacart-843f7.appspot.com",
  messagingSenderId: "385094257559",
  appId: "1:385094257559:web:9f9aa63a259ad5847012d2",
  measurementId: "G-F0G5H1S5N0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export{app,auth,db}