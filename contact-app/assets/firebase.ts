// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { deleteObject, getStorage, ref } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "contactapp-66a1a.firebaseapp.com",
  projectId: "contactapp-66a1a",
  storageBucket: "contactapp-66a1a.appspot.com",
  messagingSenderId: "436442060092",
  appId: "1:436442060092:web:fc418a4ddbfe97f8997a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imgStorage = getStorage(app);

export const deleteImage = async (url) => {
  
  const imgRef = ref(imgStorage, url)

  try { 
    await deleteObject(imgRef)
  } catch (error) {
    console.error(error)
  }
}
