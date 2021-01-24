import React, {useState} from 'react';
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
import SignUpHeader from '../Headerss/SignUpHeader';
import {heightPercentageToDP as hp} from '../responsive/responsive';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [img] = useState(require('../../../assets/kashif.jpeg'));
  const [myImg] = useState(require('../../../assets/live.jpg'));

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

            <TouchableOpacity onPress={Submit}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}> {!isLoading && 'Sign Up'}</Text>
              </View>
            </TouchableOpacity>

            {!isLoading ? (
              <View
                style={{
                  position: 'absolute',
                  top: hp('65'),
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
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                <Text style={style.signupTxt}>Click Here.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
