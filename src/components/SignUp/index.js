import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SignUpHeader from '../ScreensMaterials/Headerss/SignupHeader/SignUpHeader';
import SignUpButton from '../ScreensMaterials/SignupMaterial/SignUpButton/index';
import {
  SignUpImgOne,
  SignUpImgTwo,
} from '../ScreensMaterials/SignupMaterial/SignUpImages';
import SignUpLoader from '../ScreensMaterials/SignupMaterial/SignUpLoader';
import SignUpNavigation from '../ScreensMaterials/SignupMaterial/SignUpNavigation/index';
import DropDown from '../ScreensMaterials/SignupMaterial/SignUpDropDown/index';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Submit = () => {
    setIsLoading(true);
    try {
      console.log('SignUp SubmiteD!');
      navigation.navigate('LogIn');
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <SignUpHeader />
        <View style={{padding: 10, flex: 1}}>
          <View style={style.containerThree}>
            <SignUpImgOne />

            <SignUpImgTwo />

            <View style={style.txtContainer}>
              <TextInput
                style={style.text}
                value={firstName}
                placeholder="First Name"
                onChangeText={(text) => setFirstName(text)}
                placeholderTextColor="green"
                keyboardType="default"
              />
            </View>

            <View style={style.txtContainer}>
              <TextInput
                style={style.text}
                value={lastName}
                placeholder="Last Name"
                onChangeText={(text) => setLastName(text)}
                placeholderTextColor="green"
                keyboardType="default"
              />
            </View>

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

            <DropDown />

            <SignUpButton
              navigation={navigation}
              isLoading={isLoading}
              Submit={Submit}
            />

            <SignUpLoader isLoading={isLoading} />

            <SignUpNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
