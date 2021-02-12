import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const LogOut = ({navigation}) => {
  const handleSignOut = () => {
    console.log('logout1');
    // auth().signOut();
    navigation.navigate('LogIn');
    // console.log('logout');
  };
  return <TouchableOpacity onPress={handleSignOut} />;
};

export default LogOut;
