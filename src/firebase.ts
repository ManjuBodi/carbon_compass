import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'your_api_key',
  authDomain: 'your_domain',
  projectId: 'your_projectid',
  storageBucket: 'your_storage_bucket',
  messagingSenderId: 'your_id',
  appId: 'your_app_id',
  measurementId: 'your_measurement_id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
