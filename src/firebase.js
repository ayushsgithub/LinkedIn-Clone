// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDu_NOqcehogcseS8YPvXeANsi9ZK3F9YU",
    authDomain: "linkedin-clone-e8b1e.firebaseapp.com",
    projectId: "linkedin-clone-e8b1e",
    storageBucket: "linkedin-clone-e8b1e.appspot.com",
    messagingSenderId: "569204627654",
    appId: "1:569204627654:web:738758a6217556e72cdfc7",
    measurementId: "G-M40B5MDQVF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };