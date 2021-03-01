import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SignUpHeader from '../ScreensMaterials/Headerss/SignupHeader/SignUpHeader';
import SignUpButton from '../ScreensMaterials/SignupMaterial/SignUpButton/index';
import {
  SignUpImgOne,
  SignUpImgTwo,
} from '../ScreensMaterials/SignupMaterial/SignUpImages';
import SignUpNavigation from '../ScreensMaterials/SignupMaterial/SignUpNavigation/index';
import DropDown from '../ScreensMaterials/SignupMaterial/SignUpDropDown/index';
import {
  FirstNameInput,
  LastNameInput,
  SignUpEmailInput,
  SignUpPasswordInput,
} from '../ScreensMaterials/SignupMaterial/SignUpInputes/index';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('Company');
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const Submit = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setIsLoading(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      database().ref('/NewUsers/').push({
        firstName,
        lastName,
        email,
        password,
        selectedValue,
      });
      navigation.navigate('LogIn');
    } catch (err) {
      console.log(err, 'error');
      setErrMsg(err?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setErrMsg('');
  }, []);

  const handleChange = () => {
    setErrMsg('');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <SignUpHeader />
        <View style={style.containerTwo}>
          <View style={style.containerThree}>
            <SignUpImgOne />

            <SignUpImgTwo />

            <FirstNameInput
              firstName={firstName}
              setFirstName={setFirstName}
              handleChange={handleChange}
            />

            <LastNameInput
              lastName={lastName}
              setLastName={setLastName}
              handleChange={handleChange}
            />

            <SignUpEmailInput
              email={email}
              setEmail={setEmail}
              handleChange={handleChange}
            />

            <SignUpPasswordInput
              password={password}
              setPassword={setPassword}
              handleChange={handleChange}
            />

            <DropDown
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />

            <Text style={style.errMsg}>{errMsg}</Text>

            <SignUpButton
              navigation={navigation}
              isLoading={isLoading}
              Submit={Submit}
              disabled={
                !firstName && !lastName && !email && !password && !selectedValue
              }
            />

            <SignUpNavigation navigation={navigation} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
