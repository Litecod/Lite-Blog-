// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "lite-blog-d7eb3.firebaseapp.com",
  projectId: "lite-blog-d7eb3",
  storageBucket: "lite-blog-d7eb3.firebasestorage.app",
  messagingSenderId: "596071308655",
  appId: "1:596071308655:web:1ec35324f51dc1d4ae9c9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);