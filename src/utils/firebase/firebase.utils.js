import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkU_Z5iZJzvkPgnw3CL430hdDtagcFS1A",
  authDomain: "crwn-clothing-db-3a0b0.firebaseapp.com",
  projectId: "crwn-clothing-db-3a0b0",
  storageBucket: "crwn-clothing-db-3a0b0.appspot.com",
  messagingSenderId: "457267732845",
  appId: "1:457267732845:web:e750370df67a9e5a723a64",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
  ////////FLOWWWWW OF CODE ABOVE EXPLAINED///////
  //if user data does NOT exist
  // create/set the documentation using data from userAuth in my collection
  //if user data exists
  //return userDocRef
};
