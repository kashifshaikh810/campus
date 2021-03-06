import React, {useState, useEffect} from 'react';
import {View, Text, BackHandler} from 'react-native';
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
// import database from '@react-native-firebase/database';
import {userLogin} from '../redux/Actions/LogIn/LogInAction';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';

const SignIn = ({navigation}) => {
  const val = useSelector((state) => state.myLog.LoginData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('Company');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [userRoll, setUserRoll] = useState();
  const [myVal, setMyVal] = useState();

  useEffect(() => {
    const roll = val;
    setUserRoll(roll.selectedValue);
  });

  const Submit = async () => {
    setIsLoading(true);
    try {
      database()
        .ref('/NewUsers/')
        .orderByChild('selectedValue')
        .equalTo('Company')
        .on('value', (snap) => {
          let data = snap.val();
          let newData = Object.values(data);
          let selectedValues = newData;
          let [selectedValue] = selectedValues;
          setMyVal(selectedValue.selectedValue);
        });
      if (myVal === userRoll) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch(userLogin({email, password, selectedValue}));
        setEmail('');
        setPassword('');
      } else {
        alert('errr');
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err, 'err');

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
