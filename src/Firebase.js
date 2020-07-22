import firebase from "firebase";
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD1rwCsxm3npvGA8MIoKJp0LZyGP4A_efA",
    authDomain: "dress-planet.firebaseapp.com",
    databaseURL: "https://dress-planet.firebaseio.com",
    projectId: "dress-planet",
    storageBucket: "dress-planet.appspot.com",
    messagingSenderId: "1053673863016",
    appId: "1:1053673863016:web:ca74e222c95b5dc6c708dd",
    measurementId: "G-PGFV7RGC7Z"
}
firebase.initializeApp(config);
const db = firebase.firestore();
export const dbStockRef = db.collection('stock')
