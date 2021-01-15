import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    databaseURL
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    appId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
})