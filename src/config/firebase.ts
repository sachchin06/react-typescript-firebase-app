// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg4s4YjHf_cp0p60zo3JiTEaQTr9__96w",
  authDomain: "basic-react-concepts.firebaseapp.com",
  projectId: "basic-react-concepts",
  storageBucket: "basic-react-concepts.appspot.com",
  messagingSenderId: "714825216737",
  appId: "1:714825216737:web:7f68107ba6323894927da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

