import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyDbcw66cb6TJSrsbjEMrsT553hAvViJMww",
    authDomain: "clothing-shop-db-603fb.firebaseapp.com",
    databaseURL: "https://clothing-shop-db-603fb.firebaseio.com",
    projectId: "clothing-shop-db-603fb",
    storageBucket: "clothing-shop-db-603fb.appspot.com",
    messagingSenderId: "824322497334",
    appId: "1:824322497334:web:c9ed0d7d85751980ef7197",
    measurementId: "G-KMSP430E0T"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvide = new firebase.auth.FacebookAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  facebookProvide.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  export const signInWithFacebook = () => auth.signInWithPopup(facebookProvide);

  export default firebase;
