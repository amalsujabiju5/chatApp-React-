
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCehtJGQGqBOcG7Kli-IMrxL1S3hpW__JI",
    authDomain: "chatapp-ad489.firebaseapp.com",
    projectId: "chatapp-ad489",
    storageBucket: "chatapp-ad489.appspot.com",
    messagingSenderId: "172534672698",
    appId: "1:172534672698:web:8f6edb86c77bb575eaf403"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();