import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTszEQHBqTXzwl5rCk_DSCng_FYbnRMUw",
  authDomain: "discord-clone-347c7.firebaseapp.com",
  projectId: "discord-clone-347c7",
  storageBucket: "discord-clone-347c7.appspot.com",
  messagingSenderId: "790846681197",
  appId: "1:790846681197:web:3e1936dcae0a78848f0f64",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider, db, storage };

export default app;