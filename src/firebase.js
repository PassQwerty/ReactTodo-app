import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2u4RXWBpqS7JyVxtdg7U5wnqh28w8yEk",
    authDomain: "totolist-19f14.firebaseapp.com",
    databaseURL: "https://totolist-19f14-default-rtdb.firebaseio.com",
    projectId: "totolist-19f14",
    storageBucket: "totolist-19f14.appspot.com",
    messagingSenderId: "413524396942",
    appId: "1:413524396942:web:df9300e1e9c9496686b2df"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};