// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQEL3sAj86bIx8D1D04Ss5VL89q7AxPeQ",
  authDomain: "society-a7731.firebaseapp.com",
  projectId: "society-a7731",
  storageBucket: "society-a7731.appspot.com",
  messagingSenderId: "643932005437",
  appId: "1:643932005437:web:d59b768ba608af4bd67654",
  measurementId: "G-PL6VB4XD8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);