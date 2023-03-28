import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyB7b3Nn9EXIgKxYlXpmGzvsvB0XmTDG_70",
    authDomain: "neflix-clone-369cc.firebaseapp.com",
    projectId: "neflix-clone-369cc",
    storageBucket: "neflix-clone-369cc.appspot.com",
    messagingSenderId: "783964644788",
    appId: "1:783964644788:web:dc5ae5e98194c473a4bee1"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export {firebase};