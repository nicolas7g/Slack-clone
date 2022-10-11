//tomado desde firebase-> proyecto slack-clone-> settings->SDK setup and configuration->config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCAXz4RFQBZjrndbOaxh8cfkDDnBhn5M1k",
    authDomain: "slack-clone-730b9.firebaseapp.com",
    projectId: "slack-clone-730b9",
    storageBucket: "slack-clone-730b9.appspot.com",
    messagingSenderId: "23298575726",
    appId: "1:23298575726:web:526c44eb337a62c16b857f",
    measurementId: "G-0L3TDS278K"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = signInWithPopup;//signInWithGoogle se transforma en una funcion

  export {auth, provider, signInWithGoogle};
  export default db; // entre el "export default" y el "export" varia la forma en la que se van a importar esas variables