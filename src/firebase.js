import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxvWp7JTHVrxdvRKFePjeX_VQttdl6qfY",
  authDomain: "group-20-2a828.firebaseapp.com",
  projectId: "group-20-2a828",
  storageBucket: "group-20-2a828.appspot.com",
  messagingSenderId: "821844174079",
  appId: "1:821844174079:web:76f59c3f3fa39451dfd8ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
