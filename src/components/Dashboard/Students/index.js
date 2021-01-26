import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import StudentsHeader from '../../Headerss/StudentsHeader/StudentsHeader';

const StudentsScreen = () => {
  return (
    <View style={style.container}>
      <StudentsHeader />
      <Text>This Is Students Screen Screen</Text>
    </View>
  );
};

export default StudentsScreen;
