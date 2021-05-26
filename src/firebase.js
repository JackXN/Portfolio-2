import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA3uj-wqiwVlpBufGUNQCV_l06zhnpWmfo",
    authDomain: "contact-form-2cd90.firebaseapp.com",
    projectId: "contact-form-2cd90",
    storageBucket: "contact-form-2cd90.appspot.com",
    messagingSenderId: "589284070441",
    appId: "1:589284070441:web:280790bed10644ab19f838",

})

var db = firebaseApp.firestore(); 


export { db };