import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../Login/style';

const LoginButton = ({isLoading, Submit}) => {
  const [BtnText] = useState('Log In');
  return (
    <TouchableOpacity onPress={Submit}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}> {!isLoading && BtnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;
