import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAjB2r6E8sBINiOylmeRgpWwRbSFFHPsFQ",
    authDomain: "discord-clone-6f094.firebaseapp.com",
    databaseURL: "https://discord-clone-6f094.firebaseio.com",
    projectId: "discord-clone-6f094",
    storageBucket: "discord-clone-6f094.appspot.com",
    messagingSenderId: "639122780200",
    appId: "1:639122780200:web:8a72fdd2361354bcf5051d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();  // Get the Auth service for the default app
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;