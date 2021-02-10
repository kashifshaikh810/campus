import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import style from '../../../Login/style';

const LoginButton = ({isLoading, Submit, disabled}) => {
  const [BtnText] = useState('Log In');
  return (
    <TouchableOpacity onPress={Submit} disabled={disabled}>
      <View style={style.btnContainer}>
        {isLoading ? (
          <View style={style.loader}>
            <ActivityIndicator size={17} color="#00ff00" />
          </View>
        ) : (
          <Text style={style.btnText}>{BtnText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;
