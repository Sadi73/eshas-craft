// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XaaT-HW8H-UTDrStz_NFByH9_x9X8t4",
  authDomain: "esha-craft.firebaseapp.com",
  projectId: "esha-craft",
  storageBucket: "esha-craft.appspot.com",
  messagingSenderId: "951152334937",
  appId: "1:951152334937:web:957ca983222a4e0b603948"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;