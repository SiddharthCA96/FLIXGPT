// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABay7QEpRP8LkmyXmY1v2AFv8e-yf33JE",
  authDomain: "flixgpt-db7ae.firebaseapp.com",
  projectId: "flixgpt-db7ae",
  storageBucket: "flixgpt-db7ae.firebasestorage.app",
  messagingSenderId: "398501893944",
  appId: "1:398501893944:web:74fc4a91f4c9d1e36213cd",
  measurementId: "G-R1DZ4WVN5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
