import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import style from './style';
import ProfileHeader from '../../ScreensMaterials/Headerss/ProfileHeader/index';
import ProfileImage from '../../ScreensMaterials/ProfileMaterial/ProfileImage/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  ProfileButton,
  ProfileCv,
} from '../../ScreensMaterials/ProfileMaterial/ProfileButton/index';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [education, setEducation] = useState('');
  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <ProfileHeader navigation={navigation} />
        <ProfileImage />

        <View>
          <View style={style.txtContainer}>
            <TextInput
              style={style.text}
              value={name}
              placeholder="Your Name"
              onChangeText={(text) => setName(text)}
              placeholderTextColor="green"
              keyboardType="name-phone-pad"
            />
          </View>

          <View style={style.txtContainer}>
            <TextInput
              style={style.text}
              placeholder="Your Date Of Birth"
              value={dateOfBirth}
              onChangeText={(text) => setDateOfBirth(text)}
              placeholderTextColor="green"
            />
          </View>

          <View style={style.txtContainer}>
            <TextInput
              style={style.text}
              placeholder="Your Education"
              value={education}
              onChangeText={(text) => setEducation(text)}
              placeholderTextColor="green"
            />
          </View>
        </View>

        <ProfileCv />

        <ProfileButton />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;
