import firebase from 'firebase'

// firebase init goes here
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.database()
const auth = firebase.auth()
console.log('inside config - auth:', auth)
console.log('inside config db:', db)
const currentUser = auth.currentUser

export {
    db,
    auth,
    currentUser,
}