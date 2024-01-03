// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "process.env.REACT_API_API_FIREBASE_KEY",
  authDomain: "process.env.REACT_API_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_API_FIREBASE_PROJECT_ID",
  storageBucket: "process.env.REACT_API_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_API_FIREBASE_MESSAGING_SENDER",
  appId: "process.env.REACT_API_APP_ID",
  measurementId: "process.env.REACT_API_MEASUREID",
  databaseURL: "process.env.REACT_API_DATABASE_URL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
