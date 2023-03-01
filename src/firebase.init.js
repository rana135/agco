// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCjdniZSQup0RNTycO_qDRYQ9JKclaHoV0",
  authDomain: "agco-198f0.firebaseapp.com",
  projectId: "agco-198f0",
  storageBucket: "agco-198f0.appspot.com",
  messagingSenderId: "411512755024",
  appId: "1:411512755024:web:dbc8881d21cb74caab5255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;