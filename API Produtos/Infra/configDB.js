import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrymMJS2eAkOxIHkR14OBt3U5oY--eZqw",
    authDomain: "mercatour---api-produtos.firebaseapp.com",
    projectId: "mercatour---api-produtos",
    storageBucket: "mercatour---api-produtos.appspot.com",
    messagingSenderId: "762165486504",
    appId: "1:762165486504:web:1468e1ee7f2069e0ce739d",
    measurementId: "G-4QELTWK9FE"
}

export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase)