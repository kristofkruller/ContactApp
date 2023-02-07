// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyQeBaFDOeAbL_2OUwIODeDiDChaeyCc",
  authDomain: "contactapp-66a1a.firebaseapp.com",
  projectId: "contactapp-66a1a",
  storageBucket: "contactapp-66a1a.appspot.com",
  messagingSenderId: "436442060092",
  appId: "1:436442060092:web:fc418a4ddbfe97f8997a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imgStorage = getStorage(app);
