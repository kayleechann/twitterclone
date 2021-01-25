import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGs0hP8V1288jcJUzGqR-5OXuL5PTtFtM",
    authDomain: "twitter-clone-e538a.firebaseapp.com",
    projectId: "twitter-clone-e538a",
    storageBucket: "twitter-clone-e538a.appspot.com",
    messagingSenderId: "525080431226",
    appId: "1:525080431226:web:abe060c979ffc3801889c3",
    measurementId: "G-S7194B612L"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
