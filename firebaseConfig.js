// src/firebaseConfig.js
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCP4qDy2XUJPs5pF-Tn6BARJeqYGgs8gDk",
  authDomain: "portfolio-5500a.firebaseapp.com",
  databaseURL: "https://portfolio-5500a.firebaseio.com",
  projectId: "portfolio-5500a",
  storageBucket: "portfolio-5500a.appspot.com",
  messagingSenderId: "593509742109",
  appId: "1:593509742109:web:c23ab56c3070286e6b38f4",
  measurementId: "G-7HG3B23QZ3",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
