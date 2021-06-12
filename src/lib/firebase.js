import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const emailSignIn = (email, password) => {
  return (
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => error.message)
  );
};

export const googleSingIn = () => {
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => error.message);
};

export const clientIdToken = () => {
  return firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => idToken)
    .catch((error) => console.log(error));
};
