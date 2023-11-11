// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2FQri7-xzHYzsq_sc8wpv1KteorP9A3E",
  authDomain: "practica-reacthooks-9c602.firebaseapp.com",
  projectId: "practica-reacthooks-9c602",
  storageBucket: "practica-reacthooks-9c602.appspot.com",
  messagingSenderId: "1056807666325",
  appId: "1:1056807666325:web:ce42870818414ac28c919c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


