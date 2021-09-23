import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
// import 'firebase/firestore';

// here i setup and initialise firebase config.

const firebaseConfig ={
  apiKey: "AIzaSyASEnfrgpYVtU9uQSHh_mtRwNf_zKLLrYI",
  authDomain: "cart-wixy1.firebaseapp.com",
  projectId: "cart-wixy1",
  storageBucket: "cart-wixy1.appspot.com",
  messagingSenderId: "659710484442",
  appId: "1:659710484442:web:78b235f2fbc719581aeae3"
};

// Initialize Firebase
console.log("firebase initialize called")
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

