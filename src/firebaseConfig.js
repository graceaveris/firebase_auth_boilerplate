import firebase from 'firebase'

// <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

// firebase init goes here
var firebaseConfig = {
    apiKey: "AIzaSyAsvEoh-ybZi-Ul1dR6wqHAy1r2qFtYFiM",
    authDomain: "vue-boiler-realtime.firebaseapp.com",
    databaseURL: "https://vue-boiler-realtime.firebaseio.com",
    projectId: "vue-boiler-realtime",
    storageBucket: "vue-boiler-realtime.appspot.com",
    messagingSenderId: "634866889133",
    appId: "1:634866889133:web:438a078614a76802e1b124"
  };
  firebase.initializeApp(firebaseConfig);

// firebase utils
// const db = firebase.firestore()
const auth = firebase.auth()
console.log('inside config', auth)
const currentUser = auth.currentUser

// add firebase settings here
// const settings = {
// }
// db.settings(settings)

// firebase collections
// const usersCollection = db.collection('users')

export {
    // db,
    auth,
    currentUser,
    // usersCollection,
}