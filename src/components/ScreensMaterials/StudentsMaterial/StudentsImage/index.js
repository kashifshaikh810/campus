import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../Dashboard/Students/style';

const StudentImg = () => {
  const [myImg] = useState(require('../../../../../assets/students.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export default StudentImg;
