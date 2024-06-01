import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { Products } from "../types/store";

const firebaseConfig = {
  apiKey: "AIzaSyDblKMSaGR3l3VUP8Gcylpskcio8hM7cdQ",
  authDomain: "vanguard-35d26.firebaseapp.com",
  projectId: "vanguard-35d26",
  storageBucket: "vanguard-35d26.appspot.com",
  messagingSenderId: "187651490470",
  appId: "1:187651490470:web:f995465153247e0d556a67",
  measurementId: "G-Q75K0PGBWK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addProducts = async (formData: Omit<Products, 'id'>) =>{
try {
    const docRef = await addDoc(collection(db, 'Productos'), formData)
} catch (error) {
    console.error('Error adding documents: ')
}
}

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'Productos'));
    const arrayProducts: Array<Products>= [];

    querySnapshot.forEach((doc: any) => {
    const data = doc.data() as any;
    arrayProducts.push({id: doc.id, ...data})
    });
    return arrayProducts
}