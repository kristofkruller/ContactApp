// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app"
import { deleteObject, getStorage, ref } from "firebase/storage"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// INIT FIREBASE
const app = initializeApp(firebaseConfig);

// AUTH
export const auth = getAuth(app);

export const signUpwithFirebase = async (mail: string, pass: string) => {
  try {
    await createUserWithEmailAndPassword(auth, mail, pass);
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
       console.error("Firebase error",error);
    }
  }
};
export const signInwithFirebase = async (mail: string, pass: string) => {
  try {
    await signInWithEmailAndPassword(auth, mail, pass);
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
       console.error("Firebase error",error);
    }
  }
};
// IMG HANDLER
export const imgStorage = getStorage(app);

export const deleteImage = async (url) => {
  
  const imgRef = ref(imgStorage, url)

  try { 
    await deleteObject(imgRef)
  } catch (error) {
    console.error(error)
  }
}
