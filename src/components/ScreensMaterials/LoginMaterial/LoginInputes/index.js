import React from 'react';
import {View, TextInput} from 'react-native';
import style from '../../../Login/style';

const EmailInput = ({email, setEmail}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="green"
        keyboardType="email-address"
      />
    </View>
  );
};

const PasswordInput = ({password, setPassword}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="green"
        secureTextEntry={true}
      />
    </View>
  );
};

export {EmailInput, PasswordInput};
