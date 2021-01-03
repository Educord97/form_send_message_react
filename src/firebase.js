import firebase from "firebase";

let firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDm5XCctkqvfAmkmuhRJvXx0b6kJs0fGI",
  authDomain: "react-contact-form-2ad14.firebaseapp.com",
  projectId: "react-contact-form-2ad14",
  storageBucket: "react-contact-form-2ad14.appspot.com",
  messagingSenderId: "118919479656",
  appId: "1:118919479656:web:07f12ebada65b9a4d216dd",
});

let db = firebaseApp.firestore();

export { db };
