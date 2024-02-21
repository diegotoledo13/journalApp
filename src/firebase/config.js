// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8yzDe6pHCncTYBchIsYjgwlhECzoSKX8",
  authDomain: "journalapp-82698.firebaseapp.com",
  projectId: "journalapp-82698",
  storageBucket: "journalapp-82698.appspot.com",
  messagingSenderId: "429288143771",
  appId: "1:429288143771:web:26243ef4b20ec37e0abf3e",
  measurementId: "G-DSGDB4685V",
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp);
export const FirestoreDB = getFirestore(FireBaseApp);
export const analytics = getAnalytics(app);
