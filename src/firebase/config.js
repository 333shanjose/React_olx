import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAr1bvXdQ9uHeQch-lU-Wc3CTYVVhC81Jc",
    authDomain: "olxr-c3458.firebaseapp.com",
    projectId: "olxr-c3458",
    storageBucket: "olxr-c3458.appspot.com",
    messagingSenderId: "463108127641",
    appId: "1:463108127641:web:3d1b97ee338037692d7108",
    measurementId: "G-SCRB5VQ8ZJ"
  };
  export default  firebase.initializeApp(firebaseConfig)