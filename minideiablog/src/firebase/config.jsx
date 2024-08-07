// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgrhdG9b6_ZXZd3jRMcCHwmqBth7xIj5Q",
  authDomain: "miniblog-gf.firebaseapp.com",
  projectId: "miniblog-gf",
  storageBucket: "miniblog-gf.appspot.com",
  messagingSenderId: "923287196851",
  appId: "1:923287196851:web:fea27b12fc59afb183ccc6",
  measurementId: "G-GWQBWNZ5XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);