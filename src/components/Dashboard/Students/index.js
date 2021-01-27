import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import StudentsHeader from '../../ScreensMaterials/Headerss/StudentsHeader/StudentsHeader';
import StudentImg from '../../ScreensMaterials/StudentsMaterial/StudentsImage/index';

const StudentsScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <StudentsHeader />
      <StudentImg navigation={navigation} />
      <Text>This Is Students Screen</Text>
    </View>
  );
};

export default StudentsScreen;
