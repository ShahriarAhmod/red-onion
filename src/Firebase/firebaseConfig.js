// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth '

const firebaseConfig = {
  apiKey: "AIzaSyA0FZCx0XMkC80oaKVrdojOQb37iisW2Xs",
  authDomain: "red-onion-df0c4.firebaseapp.com",
  projectId: "red-onion-df0c4",
  storageBucket: "red-onion-df0c4.appspot.com",
  messagingSenderId: "22881807235",
  appId: "1:22881807235:web:f2aeb56d5ba4a4755fe4b6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)