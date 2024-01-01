// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey:"AIzaSyDlcVkmuygNtW-KgaCQ4hohL6qhUYrponk",
  authDomain: "mern-cd52a.firebaseapp.com",
  projectId: "mern-cd52a",
  storageBucket: "mern-cd52a.appspot.com",
  messagingSenderId: "757023816160",
  appId: "1:757023816160:web:24fef71f608ca5430e1385"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);