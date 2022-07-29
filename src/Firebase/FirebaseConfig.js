// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfDf0YxFtuayioXlgO_zq0LZMU_HFe35I",
  authDomain: "emartauth.firebaseapp.com",
  projectId: "emartauth",
  storageBucket: "emartauth.appspot.com",
  messagingSenderId: "649087046363",
  appId: "1:649087046363:web:2486db7b1b6488242af2fe",
  measurementId: "G-LBPEVB60FC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
