import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import credentials from "../credentials.json"

const firebaseConfig = {
  apiKey: credentials.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:credentials.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: credentials.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default firebase;
