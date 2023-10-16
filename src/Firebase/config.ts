// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTggcRHLrygY77bGB_Mu0ZAQb20LIopxU",
  authDomain: "portfolio-10e95.firebaseapp.com",
  projectId: "portfolio-10e95",
  storageBucket: "portfolio-10e95.appspot.com",
  messagingSenderId: "149674429772",
  appId: "1:149674429772:web:24b1f07f4f4f985efcd3e9",
  measurementId: "G-DH38G3QNMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
