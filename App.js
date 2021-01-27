import React from 'react';
import {StatusBar} from 'react-native';
import AppView from './src/components/AppNavigation/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="green" />
      <AppView />
    </>
  );
};

export default App;
