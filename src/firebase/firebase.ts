import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDaIGDbbXynWK1AdrWEPBsnaXi06V04W0",
  authDomain: "typescoersionquiz.firebaseapp.com",
  projectId: "typescoersionquiz",
  storageBucket: "typescoersionquiz.appspot.com",
  messagingSenderId: "21468837137",
  appId: "1:21468837137:web:f0cf83f6d2b59071f5c8b0",
  measurementId: "G-Y865NKVDNB",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export default app;
