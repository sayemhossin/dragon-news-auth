// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0hRTzkjHuodLpEBEmpSm9hc-Gl3ymAU",
  authDomain: "react-dragon-news-auth-41b0d.firebaseapp.com",
  projectId: "react-dragon-news-auth-41b0d",
  storageBucket: "react-dragon-news-auth-41b0d.appspot.com",
  messagingSenderId: "1091955212193",
  appId: "1:1091955212193:web:8d710e4ee4bd9953c615e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app