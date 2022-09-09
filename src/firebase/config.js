import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFb_yHMQsX0X8V00swUvIzZAL5vIdJfoM",
  authDomain: "cooking-ninja-7c914.firebaseapp.com",
  projectId: "cooking-ninja-7c914",
  storageBucket: "cooking-ninja-7c914.appspot.com",
  messagingSenderId: "960855859419",
  appId: "1:960855859419:web:896640911352a366c5ecfe"
};

//init firebase
firebase.initializeApp(firebaseConfig)


//initialize services
const projectFirestore = firebase.firestore()

export{projectFirestore}