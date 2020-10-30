import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDXjEeehPmSyTwdnm2Qs8TU5ba5kmjs5gM",
  authDomain: "crm-linkedin-5858b.firebaseapp.com",
  databaseURL: "https://crm-linkedin-5858b.firebaseio.com",
  projectId: "crm-linkedin-5858b",
  storageBucket: "crm-linkedin-5858b.appspot.com",
  messagingSenderId: "354350350100",
  appId: "1:354350350100:web:5af67c7beb87aac97f0c01",
  measurementId: "G-4Y50Q6V62Z"
}

firebase.initializeApp(config);

export default firebase;