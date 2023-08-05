// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKy1uIIPpb_XOUHmhJwJ5RSnNQjRAaCKE",
    authDomain: "nepflex-3e1c0.firebaseapp.com",
    projectId: "nepflex-3e1c0",
    storageBucket: "nepflex-3e1c0.appspot.com",
    messagingSenderId: "948312509912",
    appId: "1:948312509912:web:4f935aae8d582857b636ad",
    measurementId: "G-C16V8GMS9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);