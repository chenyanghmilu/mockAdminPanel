import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: "AIzaSyBPv4m53bvA-xdzn_Whf1oCMoSFWgLsK3k",
	authDomain: "e-commerce-db-355bb.firebaseapp.com",
	databaseURL: "https://e-commerce-db-355bb.firebaseio.com",
	projectId: "e-commerce-db-355bb",
	storageBucket: "e-commerce-db-355bb.appspot.com",
	messagingSenderId: "989641903243",
	appId: "1:989641903243:web:6c825c34428500cda2588e",
	measurementId: "G-QJ8ZBTN9W1"
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = (firestore.doc(`user/${userAuth.uid}`));
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})

		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const getCurrenrUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth)
		}, reject)
	})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googelprovider = new firebase.auth.GoogleAuthProvider();
googelprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googelprovider);

export default firebase;