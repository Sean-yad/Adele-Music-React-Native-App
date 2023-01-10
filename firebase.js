// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9DmOAnM5rEYiGPQErnI4kXw14VSzU_I",
  authDomain: "auth-48eeb.firebaseapp.com",
  projectId: "auth-48eeb",
  storageBucket: "auth-48eeb.appspot.com",
  messagingSenderId: "818207875032",
  appId: "1:818207875032:web:6e9cc2b0cf88d973025cad",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
