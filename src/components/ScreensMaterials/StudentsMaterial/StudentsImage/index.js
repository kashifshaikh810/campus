import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../Dashboard/Students/style';
import MenuIcon from '../../MenuIcon/index';

const StudentImg = ({navigation}) => {
  const [myImg] = useState(require('../../../../../assets/students.jpg'));
  return (
    <View style={style.imgContainer}>
      <MenuIcon navigation={navigation} />
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export default StudentImg;
