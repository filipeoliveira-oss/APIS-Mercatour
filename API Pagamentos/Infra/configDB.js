import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDneASgJvThp_yq1dVEd_qKEVXkJ6SW63k",
    authDomain: "mercatour---api-projetos.firebaseapp.com",
    projectId: "mercatour---api-projetos",
    storageBucket: "mercatour---api-projetos.appspot.com",
    messagingSenderId: "39387693866",
    appId: "1:39387693866:web:74187f6804d59e5f699453",
    measurementId: "G-QF2LGF7718"
}

export const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase)