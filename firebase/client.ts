// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBggHvIWA-IMjow9GkDmm7ZsP8Pxs0jxmc",
  authDomain: "prepwise-59ee8.firebaseapp.com",
  projectId: "prepwise-59ee8",
  storageBucket: "prepwise-59ee8.firebasestorage.app",
  messagingSenderId: "1000378413789",
  appId: "1:1000378413789:web:cc9376495dcb07daa3e134",
  measurementId: "G-M6L4RM78DP"
};

const app=!getApps().length ? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);