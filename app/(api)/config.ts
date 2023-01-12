// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBdrLb5d1GOEZvB268soWuFHXQV2zfQIXo",
  authDomain: "geese-site.firebaseapp.com",
  projectId: "geese-site",
  storageBucket: "geese-site.appspot.com",
  messagingSenderId: "794733014711",
  appId: "1:794733014711:web:4c888ce297988d91296732",
  measurementId: "G-4F870GCXD5"
});
export const storage = getStorage(app);