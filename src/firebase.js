// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSbBfGVGV0tVgnjtL7kpSXzcjyczpcGUk",
  authDomain: "whatsapp-clone-17602.firebaseapp.com",
  projectId: "whatsapp-clone-17602",
  storageBucket: "whatsapp-clone-17602.appspot.com",
  messagingSenderId: "428732952515",
  appId: "1:428732952515:web:a920e9633356b988351776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
