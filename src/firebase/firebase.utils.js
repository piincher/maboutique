import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBF2d7rNJWj6KNxiB8zMUrv-MrrLX0ZtdI',
	authDomain: 'meal-db-52c9a.firebaseapp.com',
	projectId: 'meal-db-52c9a',
	storageBucket: 'meal-db-52c9a.appspot.com',
	messagingSenderId: '1078868177670',
	appId: '1:1078868177670:web:eb081d6f0d47cc6bcce487',
	measurementId: 'G-V4C8NS1DW0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
