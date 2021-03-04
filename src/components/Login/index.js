import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LogInHeader from '../ScreensMaterials/Headerss/LoginHeader/LogInHeader';
import {
  LoginImgOne,
  LoginImgTwo,
} from '../ScreensMaterials/LoginMaterial/LoginImages/index';
import LoginButton from '../ScreensMaterials/LoginMaterial/LoginButton/index';
import LoginNavigation from '../ScreensMaterials/LoginMaterial/LoginNavigation/index';
import {
  EmailInput,
  PasswordInput,
} from '../ScreensMaterials/LoginMaterial/LoginInputes/index';
import {firebase} from '@react-native-firebase/auth';
import DropDown from '../ScreensMaterials/LoginMaterial/LogInDropDown/index';
import database from '@react-native-firebase/database';
import {userLogin} from '../redux/Actions/LogIn/LogInAction';
import {useDispatch} from 'react-redux';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('Company');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const Submit = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      database().ref('/UserLogin/').push({
        email,
        password,
        selectedValue,
      });
      dispatch(userLogin({email, password, selectedValue}));
      setIsLoading(false);
      setEmail('');
      setPassword('');
      navigation.navigate('DrawerNav');
    } catch (err) {
      console.log(err?.message, 'err');
      setErrMsg(err?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    setErrMsg('');
  }, []);

  const handleChange = () => {
    setErrMsg('');
  };

  if (firebase?.auth().currentUser) {
    navigation.navigate('DrawerNav');
  }
  return (
    <KeyboardAwareScrollView>
      <View style={style.mainContainer}>
        <LogInHeader />
        <View style={style.mainTwo}>
          <View style={style.containerThree}>
            <LoginImgOne />

            <LoginImgTwo />

            <View>
              <EmailInput
                email={email}
                setEmail={setEmail}
                handleChange={handleChange}
              />
              <PasswordInput
                password={password}
                setPassword={setPassword}
                handleChange={handleChange}
              />
            </View>

            <View>
              <DropDown
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </View>

            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'red',
                textAlign: 'center',
              }}>
              {errMsg}
            </Text>

            <LoginButton
              Submit={Submit}
              isLoading={isLoading}
              disabled={!password}
            />

            <LoginNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
