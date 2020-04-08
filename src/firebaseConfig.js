import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCDkR8A_vZ945qreoreq3ctrUbv0BAi8pM",
    authDomain: "vue-social-fec09.firebaseapp.com",
    databaseURL: "https://vue-social-fec09.firebaseio.com",
    projectId: "vue-social-fec09",
    storageBucket: "vue-social-fec09.appspot.com",
    messagingSenderId: "1040284118537",
    appId: "1:1040284118537:web:ec5cf6089129f2805152d8"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// add firebase settings here
const settings = {
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')

export {
    db,
    auth,
    currentUser,
    usersCollection,
}