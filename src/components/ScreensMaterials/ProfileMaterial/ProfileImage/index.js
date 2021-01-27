import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import style from '../../../Dashboard/Profile/style';
import MenuIcon from '../../MenuIcon/index';

const ProfileImage = ({navigation}) => {
  const myImage = useState(require('../../../../../assets/luck.jpg'));
  return (
    <View style={style.imgContainer}>
      <MenuIcon navigation={navigation} />
      <View style={style.img} />
    </View>
  );
};

export default ProfileImage;
