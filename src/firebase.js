// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9_Of4lqIH_9rb4Dxw9b6ajhOulOC5OSE",
  authDomain: "casa-pelgo.firebaseapp.com",
  projectId: "casa-pelgo",
  storageBucket: "casa-pelgo.appspot.com",
  messagingSenderId: "808553143944",
  appId: "1:808553143944:web:024f7820854fe1254c893d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);