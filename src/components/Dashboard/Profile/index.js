import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import ProfileHeader from '../../ScreensMaterials/Headerss/ProfileHeader/index';
import ProfileImage from '../../ScreensMaterials/ProfileMaterial/ProfileImage/index';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <ProfileHeader />
      <ProfileImage navigation={navigation} />
      <Text>This is Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
