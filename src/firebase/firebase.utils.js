import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1raF_4LD6I6bRQJWuFcvYEDF7K1Kq3eA",
  authDomain: "react-online-shopping.firebaseapp.com",
  databaseURL: "https://react-online-shopping.firebaseio.com",
  projectId: "react-online-shopping",
  storageBucket: "react-online-shopping.appspot.com",
  messagingSenderId: "814351674225",
  appId: "1:814351674225:web:ff31bffd027853e82d64d0",
  measurementId: "G-6Q6JVCEL7E",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("failed to create user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleSignIn = () => auth.signInWithPopup(googleProvider);

export default firebase;
