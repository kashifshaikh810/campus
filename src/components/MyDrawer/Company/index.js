import React from 'react';
import {View} from 'react-native';
import style from './style';
import CompanyHeader from '../../ScreensMaterials/Headerss/CompanyHeader/CompanyHeader';
import CompanyImg from '../../ScreensMaterials/CompanyMaterial/CompanyImage/index';

const CompanyScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <CompanyHeader navigation={navigation} />
      <CompanyImg />
    </View>
  );
};

export default CompanyScreen;
