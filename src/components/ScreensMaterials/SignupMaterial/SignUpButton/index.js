import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from '../../../SignUp/style';

const SignUpButton = ({isLoading, Submit}) => {
  const [BtnTxt] = useState('Sign Up');

  return (
    <TouchableOpacity onPress={Submit}>
      <View style={style.btnContainer}>
        {isLoading ? (
          <View style={style.loader}>
            <ActivityIndicator size={16} color="#00ff00" />
          </View>
        ) : (
          <Text style={style.btnText}>{BtnTxt}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SignUpButton;
