// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRpsZU3tTyaNGAYdi4C157SrbocbDjUrI",
  authDomain: "netflix-gpt-53a43.firebaseapp.com",
  projectId: "netflix-gpt-53a43",
  storageBucket: "netflix-gpt-53a43.appspot.com",
  messagingSenderId: "454328280060",
  appId: "1:454328280060:web:7ad32e6e8e69b0a5784879",
  measurementId: "G-JCVE3G3J2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();