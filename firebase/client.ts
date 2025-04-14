import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCLWExObauoY0drQwquJ0VFrGAC-pK6vMQ",
  authDomain: "mock-interview-platform-37757.firebaseapp.com",
  projectId: "mock-interview-platform-37757",
  storageBucket: "mock-interview-platform-37757.firebasestorage.app",
  messagingSenderId: "331119930991",
  appId: "1:331119930991:web:e7e8abd923b1d66f89a79a",
  measurementId: "G-M28GGETMC0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);