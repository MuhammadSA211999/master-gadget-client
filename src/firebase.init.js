import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAL4eFgINSnoOlllBsRBdcBYX8R5IvdQEQ",
  authDomain: "practice-project-msa.firebaseapp.com",
  projectId: "practice-project-msa",
  storageBucket: "practice-project-msa.appspot.com",
  messagingSenderId: "953246593383",
  appId: "1:953246593383:web:0cf4e98bc921ff20d83fc2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth