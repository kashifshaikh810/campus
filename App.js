import React from 'react';
import {StatusBar} from 'react-native';
import AppView from './src/components/AppNavigation/index';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAd24HPrjpWDBHujXm3LIhsAWqZXI6lgw8',
  authDomain: 'my-campus-c6fe2.firebaseapp.com',
  projectId: 'my-campus-c6fe2',
  storageBucket: 'my-campus-c6fe2.appspot.com',
  messagingSenderId: '937548188637',
  appId: '1:937548188637:web:b0d47a05acd834b2ebc434',
  measurementId: 'G-3XZGY5XB6D',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="green" />
      <AppView />
    </>
  );
};

export default App;
