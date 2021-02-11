import React from 'react';
import {View, TextInput} from 'react-native';
import style from '../../../SignUp/style';

const FirstNameInput = ({firstName, setFirstName, handleChange}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        value={firstName}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        placeholderTextColor="green"
        keyboardType="default"
        onChange={handleChange}
      />
    </View>
  );
};

const LastNameInput = ({lastName, setLastName, handleChange}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        value={lastName}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        placeholderTextColor="green"
        keyboardType="default"
        onChange={handleChange}
      />
    </View>
  );
};

const SignUpEmailInput = ({email, setEmail, handleChange}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="green"
        keyboardType="email-address"
        onChange={handleChange}
      />
    </View>
  );
};

const SignUpPasswordInput = ({password, setPassword, handleChange}) => {
  return (
    <View style={style.txtContainer}>
      <TextInput
        style={style.text}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="green"
        secureTextEntry={true}
        onChange={handleChange}
      />
    </View>
  );
};

export {FirstNameInput, LastNameInput, SignUpEmailInput, SignUpPasswordInput};
