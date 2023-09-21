// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-7db9b.firebaseapp.com",
  projectId: "blog-app-7db9b",
  storageBucket: "blog-app-7db9b.appspot.com",
  messagingSenderId: "588945684672",
  appId: "1:588945684672:web:b1a500061c0ffc16a9d525",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
