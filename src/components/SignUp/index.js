import React, {useState} from 'react';
import {View} from 'react-native';
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
import {
  FirstNameInput,
  LastNameInput,
  SignUpEmailInput,
  SignUpPasswordInput,
} from '../ScreensMaterials/SignupMaterial/SignUpInputes/index';

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
        <View style={style.containerTwo}>
          <View style={style.containerThree}>
            <SignUpImgOne />

            <SignUpImgTwo />

            <FirstNameInput firstName={firstName} setFirstName={setFirstName} />

            <LastNameInput lastName={lastName} setLastName={setLastName} />

            <SignUpEmailInput email={email} setEmail={setEmail} />

            <SignUpPasswordInput
              password={password}
              setPassword={setPassword}
            />

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
