import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../Dashboard/Jobs/style';
import MenuIcon from '../../MenuIcon/index';

const JobImg = ({navigation}) => {
  const [myImg] = useState(require('../../../../../assets/kashif.jpg'));
  return (
    <View style={style.imgContainer}>
      <MenuIcon navigation={navigation} />
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export default JobImg;
