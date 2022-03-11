
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyBzikIqlEfFBkX9vIlUkUrvOLFWOr-jSV0',
  authDomain: 'disney-clone-202fa.firebaseapp.com',
  projectId: 'disney-clone-202fa',
  storageBucket: 'disney-clone-202fa.appspot.com',
  messagingSenderId: '1030680279650',
  appId: '1:1030680279650:web:f51df3ad33e2dcaa27af3b',
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)


export { app, db }
