// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore}from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtbi-gmzRGyMPKpNFOdgOZIxKRCDNbtdk",
  authDomain: "house-rentals-e14ec.firebaseapp.com",
  projectId: "house-rentals-e14ec",
  storageBucket: "house-rentals-e14ec.appspot.com",
  messagingSenderId: "985326588764",
  appId: "1:985326588764:web:10cd501d5089b757f1e799",
  measurementId: "G-6QNB6T6BBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore();