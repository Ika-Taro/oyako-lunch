import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-wsettKFyK_SXxotOIkQrjeiLHImcv1Q",
  authDomain: "hatinohe-oyako-lunch-c5af0.firebaseapp.com",
  databaseURL: "https://hatinohe-oyako-lunch-c5af0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hatinohe-oyako-lunch-c5af0",
  storageBucket: "hatinohe-oyako-lunch-c5af0.appspot.com",
  messagingSenderId: "1001813633999",
  appId: "1:1001813633999:web:529ecc8194a874347e40ba",
  measurementId: "G-XLYGVXDV1N"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;