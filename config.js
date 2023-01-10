import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg9DmOAnM5rEYiGPQErnI4kXw14VSzU_I",
  authDomain: "auth-48eeb.firebaseapp.com",
  projectId: "auth-48eeb",
  storageBucket: "auth-48eeb.appspot.com",
  messagingSenderId: "818207875032",
  appId: "1:818207875032:web:6e9cc2b0cf88d973025cad",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
