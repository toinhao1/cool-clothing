import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCaYE-lImlPDPywYtjstLhnR-Wq_hqGbAM',
	authDomain: 'cool-clothing-db.firebaseapp.com',
	databaseURL: 'https://cool-clothing-db.firebaseio.com',
	projectId: 'cool-clothing-db',
	storageBucket: 'cool-clothing-db.appspot.com',
	messagingSenderId: '700162174595',
	appId: '1:700162174595:web:61b1f3fb6e54822295f5b6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
