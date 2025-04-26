
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZ3JEmXqqkL1kE4m1eUAHbOT8CKuVq8Is",
    authDomain: "vocabot-88162.firebaseapp.com",
    projectId: "vocabot-88162",
    storageBucket: "vocabot-88162.firebasestorage.app",
    messagingSenderId: "741232693260",
    appId: "1:741232693260:web:597317a3858a30f7469e29",
    measurementId: "G-ML9CVHRREW"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);
