import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LogInHeader from '../Headerss/LogInHeader';
import {heightPercentageToDP as hp} from '../responsive/responsive';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [img] = useState(require('../../../assets/login.jpg'));
  const [myImg] = useState(require('../../../assets/cover.jpg'));

  const Submit = () => {
    setIsLoading(true);
    try {
      console.log('Data SubmiteD!');
      navigation.navigate('Dashboard');
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
        <View
          style={{
            padding: 10,
            flex: 1,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 40,
              height: '100%',
              paddingBottom: 22,
              zIndex: 1,
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-around',
            }}>
            <View style={style.coverImgCon}>
              <Image source={myImg} style={style.coverImg} />
            </View>
            <View style={style.imgContainer}>
              <Image source={img} style={style.img} />
            </View>

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

            <TouchableOpacity onPress={Submit}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}> {!isLoading && 'Log In'}</Text>
              </View>
            </TouchableOpacity>

            {isLoading ? (
              <View
                style={{
                  position: 'absolute',
                  top: hp('59.3'),
                  bottom: 0,
                  right: 0,
                  left: 0,
                }}>
                <ActivityIndicator size="small" color="#00ff00" />
              </View>
            ) : (
              <></>
            )}

            <View style={style.signupContainer}>
              <Text>You Need To Sign Up?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={style.signupTxt}>Click Here.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
