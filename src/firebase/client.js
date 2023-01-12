import firebase from "firebase/app";
import '@firebase/firestore';

const API_KEY = process.env.REACT_APP_API_KEY


const firebaseConfig = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: "challenge-grey-dive-4f449.firebaseapp.com",
  projectId: "challenge-grey-dive-4f449",
  storageBucket: "challenge-grey-dive-4f449.appspot.com",
  messagingSenderId: "106853305394",
  appId: "1:106853305394:web:7b0dc70f4b0bb185cd402b",
});

// Initialize Firebase
export const getFirebase = () => {
  return firebaseConfig;
};

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
};
