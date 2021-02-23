import * as React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAd24HPrjpWDBHujXm3LIhsAWqZXI6lgw8',
  authDomain: 'my-campus-c6fe2.firebaseapp.com',
  databaseURL: 'https://my-campus-c6fe2-default-rtdb.firebaseio.com/',
  projectId: 'my-campus-c6fe2',
  storageBucket: 'my-campus-c6fe2.appspot.com',
  messagingSenderId: '937548188637',
  appId: '1:937548188637:web:b0d47a05acd834b2ebc434',
  measurementId: 'G-3XZGY5XB6D',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {
    firebase,
    auth,
    database,
  };
};
