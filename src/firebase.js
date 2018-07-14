import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { firebaseApiKey } from './config/keys';

const config = {
  apiKey: firebaseApiKey,
  authDomain: "achievement-25b0e.firebaseapp.com",
  databaseURL: "https://achievement-25b0e.firebaseio.com",
  projectId: "achievement-25b0e",
  storageBucket: "achievement-25b0e.appspot.com",
  messagingSenderId: "1011827615986"
};
firebase.initializeApp(config);

export default firebase;