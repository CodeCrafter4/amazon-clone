import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwEMX7Q3F0h0-H3KLLc6eglP3ObHj-D-s",
  authDomain: "my-ad4b2.firebaseapp.com",
  projectId: "my-ad4b2",
  storageBucket: "my-ad4b2.appspot.com",
  messagingSenderId: "810857075262",
  appId: "1:810857075262:web:7dc29ab47fabfb3136b76f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);

