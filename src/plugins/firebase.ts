import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyCDU_9gaD195DXcjHTYDJihm0NvXzfSgXg',
	authDomain: 'criminal-wiki.firebaseapp.com',
	projectId: 'criminal-wiki',
	storageBucket: 'criminal-wiki.appspot.com',
	messagingSenderId: '531620615600',
	appId: '1:531620615600:web:db34d480ef4a98aed9b275',
	measurementId: 'G-CRJP87K5G4'
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const firestore = getFirestore();
