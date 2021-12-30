// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACRSYvmoKbddO1B_sWBJXQBZaMDBBciCI',
  authDomain: 'react-firebase-gallery-dev2.firebaseapp.com',
  projectId: 'react-firebase-gallery-dev2',
  storageBucket: 'react-firebase-gallery-dev2.appspot.com',
  messagingSenderId: '1095477802589',
  appId: '1:1095477802589:web:d2831d1a7c629aadc93fb4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
