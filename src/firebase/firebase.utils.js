import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK9sRjvZCAQq7n4n2CX0l8k5vXom0rcxY",
  authDomain: "crwn-clothing-6f337.firebaseapp.com",
  databaseURL: "https://crwn-clothing-6f337.firebaseio.com",
  projectId: "crwn-clothing-6f337",
  storageBucket: "crwn-clothing-6f337.appspot.com",
  messagingSenderId: "343395679613",
  appId: "1:343395679613:web:d743438a57a507df906014",
  measurementId: "G-BV6ZS3RMBZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_acount" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
