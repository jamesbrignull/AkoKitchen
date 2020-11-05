import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9palBe0J1yhZ5ezkC3Q9Pdfv5YQTvPdY",
  authDomain: "crown-clothing-159b8.firebaseapp.com",
  databaseURL: "https://crown-clothing-159b8.firebaseio.com",
  projectId: "crown-clothing-159b8",
  storageBucket: "crown-clothing-159b8.appspot.com",
  messagingSenderId: "817582047266",
  appId: "1:817582047266:web:2daf48a75764678e018a7b",
  measurementId: "G-42SD2C4WE2",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
