import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAgrhdG9b6_ZXZd3jRMcCHwmqBth7xIj5Q",
  authDomain: "miniblog-gf.firebaseapp.com",
  projectId: "miniblog-gf",
  storageBucket: "miniblog-gf.appspot.com",
  messagingSenderId: "923287196851",
  appId: "1:923287196851:web:fea27b12fc59afb183ccc6",
  measurementId: "G-GWQBWNZ5XW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);