import React, {useState} from 'react';
import {View, Image} from 'react-native';
import style from '../../../MyDrawer/Company/style';

const CompanyImg = () => {
  const [myImg] = useState(require('../../../../../assets/company.jpg'));
  return (
    <View style={style.imgContainer}>
      <Image source={myImg} style={style.img} />
    </View>
  );
};

export default CompanyImg;
