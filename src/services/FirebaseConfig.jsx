
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCu3TXEC0YkukzbuCGk6phzPbHuZCYvKNw",
  authDomain: "edicioneselpanda-edf76.firebaseapp.com",
  projectId: "edicioneselpanda-edf76",
  storageBucket: "edicioneselpanda-edf76.appspot.com",
  messagingSenderId: "26142110350",
  appId: "1:26142110350:web:d888b0efc1b075420f8fdf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)