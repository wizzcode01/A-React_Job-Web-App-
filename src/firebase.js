import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA9yCfd3elCKYtvWB2WbqZsDvhJrk8uwPU",
  authDomain: "jobvite-react-webapp.firebaseapp.com",
  projectId: "jobvite-react-webapp",
  storageBucket: "jobvite-react-webapp.appspot.com",
  messagingSenderId: "818962264077",
  appId: "1:818962264077:web:41e01a7b5e40a6e8afa544",
  measurementId: "G-BKBXJ8ZB27"
};

const app = initializeApp(firebaseConfig)
console.log('Firebase app initialized:', app)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

