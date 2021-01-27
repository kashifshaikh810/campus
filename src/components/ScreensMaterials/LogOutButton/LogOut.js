import React from 'react';
import {TouchableOpacity} from 'react-native';

const LogOut = ({navigation}) => {
  return <TouchableOpacity onPress={navigation.navigate('LogIn')} />;
};

export default LogOut;
