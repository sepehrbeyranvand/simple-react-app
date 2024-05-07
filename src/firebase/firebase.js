// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3mtRq1nhpGw-uPgbjG0HGly1pg0KhXk",
  authDomain: "sepehr-project-19c58.firebaseapp.com",
  projectId: "sepehr-project-19c58",
  storageBucket: "sepehr-project-19c58.appspot.com",
  messagingSenderId: "110524634935",
  appId: "1:110524634935:web:90a020ddd9d789e326acb2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export {db}