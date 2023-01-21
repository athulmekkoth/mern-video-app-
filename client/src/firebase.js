
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from  "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDS6JEkVicc9EIWdhyDRKZ4QjeDMKh-76o",
  authDomain: "video-c3e4b.firebaseapp.com",
  projectId: "video-c3e4b",
  storageBucket: "video-c3e4b.appspot.com",
  messagingSenderId: "228003264725",
  appId: "1:228003264725:web:7f4c6d206c67b92734ca5c"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider =new GoogleAuthProvider()
export default app; 