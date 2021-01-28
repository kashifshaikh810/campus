import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';

const JobsScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <JobsHeader navigation={navigation} />
      <JobImg />
      <Text>This is Jobs Screen</Text>
    </View>
  );
};

export default JobsScreen;
