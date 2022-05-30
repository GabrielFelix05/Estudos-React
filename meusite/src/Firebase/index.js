import firebase from 'firebase/compat/app'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyA1hgH-O14RboIXSLVR991LEoZCi37I16A",
  authDomain: "curso-43180.firebaseapp.com",
  projectId: "curso-43180",
  storageBucket: "curso-43180.appspot.com",
  messagingSenderId: "786678191603",
  appId: "1:786678191603:web:4f7830e410e79c437cae86",
  measurementId: "G-WP6MFZ08DS"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase