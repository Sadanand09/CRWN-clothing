// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx7hsodEGrdfeUOP0GsRe00hv3-VR1GgM",
  authDomain: "crwn-clothing-db-e4afa.firebaseapp.com",
  projectId: "crwn-clothing-db-e4afa",
  storageBucket: "crwn-clothing-db-e4afa.firebasestorage.app",
  messagingSenderId: "181054927091",
  appId: "1:181054927091:web:54c3faff249aeaf5f14786"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, provider );

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {

}