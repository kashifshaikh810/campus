import React, {useState} from 'react';
import {View} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LogInHeader from '../ScreensMaterials/Headerss/LoginHeader/LogInHeader';
import {
  LoginImgOne,
  LoginImgTwo,
} from '../ScreensMaterials/LoginMaterial/LoginImages/index';
import LoginLoader from '../ScreensMaterials/LoginMaterial/LoginLoader/index';
import LoginButton from '../ScreensMaterials/LoginMaterial/LoginButton/index';
import LoginNavigation from '../ScreensMaterials/LoginMaterial/LoginNavigation/index';
import {
  EmailInput,
  PasswordInput,
} from '../ScreensMaterials/LoginMaterial/LoginInputes/index';
import {firebase} from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Submit = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
      setEmail('');
      setPassword('');
      console.log(email, 'email');
      console.log(password, 'password');
      navigation.navigate('DrawerNav');
    } catch ({message}) {
      console.log(message, 'error');
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.mainContainer}>
        <LogInHeader />
        <View style={style.mainTwo}>
          <View style={style.containerThree}>
            <LoginImgOne />

            <LoginImgTwo />

            <View>
              <EmailInput email={email} setEmail={setEmail} />
              <PasswordInput password={password} setPassword={setPassword} />
            </View>

            <LoginButton Submit={Submit} isLoading={isLoading} />

            <LoginLoader isLoading={isLoading} />

            <LoginNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
