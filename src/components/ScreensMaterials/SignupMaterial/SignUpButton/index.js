import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../SignUp/style';

const SignUpButton = ({isLoading, Submit}) => {
  const [BtnTxt] = useState('Sign Up');

  return (
    <TouchableOpacity onPress={Submit}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{!isLoading && BtnTxt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SignUpButton;
