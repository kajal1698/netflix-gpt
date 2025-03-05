// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrIMpNQSe-BrAnidw8_Tt2flVli_yotik",
  authDomain: "netflixgpt-b014b.firebaseapp.com",
  projectId: "netflixgpt-b014b",
  storageBucket: "netflixgpt-b014b.appspot.com",
  messagingSenderId: "624467320667",
  appId: "1:624467320667:web:9f574c4de1931c4dec047e",
  measurementId: "G-N7DJB2E2YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();