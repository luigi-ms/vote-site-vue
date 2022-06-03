// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwHX4Q_rSqACt6EeuZgHZgtrEZr9b9nb8",
  authDomain: "voting-site-83c50.firebaseapp.com",
  projectId: "voting-site-83c50",
  storageBucket: "voting-site-83c50.appspot.com",
  messagingSenderId: "625311868708",
  appId: "1:625311868708:web:a45f7d8ee24d36b5a335b1",
  measurementId: "G-6GKTFTDEQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
