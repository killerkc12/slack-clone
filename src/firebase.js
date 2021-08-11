import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDZQb-3Rpz8VNBKrgb7DFvzmrLnucdh1ZM",
    authDomain: "slack-clone-2ae0f.firebaseapp.com",
    projectId: "slack-clone-2ae0f",
    storageBucket: "slack-clone-2ae0f.appspot.com",
    messagingSenderId: "25553097786",
    appId: "1:25553097786:web:0f14dbbe5e593f81ad1103",
    measurementId: "G-0DB60P020B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;