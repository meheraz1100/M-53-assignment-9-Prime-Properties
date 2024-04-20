// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATy1LrbDDaK7oDgMVufF_YR7Sabc9p0rI",
  authDomain: "react-prime-properties.firebaseapp.com",
  projectId: "react-prime-properties",
  storageBucket: "react-prime-properties.appspot.com",
  messagingSenderId: "638813998839",
  appId: "1:638813998839:web:45e8f79c0311d4a0c40df2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;