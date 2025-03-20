import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMOa4Z1sjS7pPcAqaXGcSiVECATCL-Dyk",
  authDomain: "sayitloud-39e78.firebaseapp.com",
  projectId: "sayitloud-39e78",
  storageBucket: "sayitloud-39e78.firebasestorage.app",
  messagingSenderId: "609149462716",
  appId: "1:609149462716:web:a5a013586feca7c97b48b9"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const colRef = collection(firestore, "data")

getDocs(colRef)
    .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
            data.push({ ... doc.data(), id: doc.id})
        })
    })