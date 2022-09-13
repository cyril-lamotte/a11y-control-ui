import './app.css'
import App from './App.svelte'
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const app = new App({
  target: document.getElementById('app')
})

// Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyD4raM_vnGnlxrGsyrZ_sdjZdf5BY_hhus",
  authDomain: "accessibility-control-ui.firebaseapp.com",
  projectId: "accessibility-control-ui",
  storageBucket: "accessibility-control-ui.appspot.com",
  messagingSenderId: "246434092051",
  appId: "1:246434092051:web:2a44ea60b6167df7f51be6"
};

// Initialize Firebase.
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const querySnapshot = await getDocs(collection(db, 'projects'));
querySnapshot.forEach((doc) => {
  // doc.id
  console.log(doc.data());
});

export default app
