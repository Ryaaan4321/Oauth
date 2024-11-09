// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "oauthtest-bbfad.firebaseapp.com",
  projectId: "oauthtest-bbfad",
  storageBucket: "oauthtest-bbfad.firebasestorage.app",
  messagingSenderId: "853230342484",
  appId: "1:853230342484:web:3e9ba693d2e3a284a638c1"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);