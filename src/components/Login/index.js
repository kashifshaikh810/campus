import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LogInHeader from '../Headerss/LoginHeader/LogInHeader';
import {
  LoginImgOne,
  LoginImgTwo,
} from '../ScreensMaterials/LoginMaterial/LoginImages/index';
import LoginLoader from '../ScreensMaterials/LoginMaterial/LoginLoader/index';
import LoginButton from '../ScreensMaterials/LoginMaterial/LoginButton/index';
import LoginNavigation from '../ScreensMaterials/LoginMaterial/LoginNavigation/index';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Submit = () => {
    setIsLoading(true);
    try {
      console.log('Data SubmiteD!');
      navigation.navigate('DrawerNav');
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(err);
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
