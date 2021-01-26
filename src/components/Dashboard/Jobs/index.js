import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import JobsHeader from '../../Headerss/JobsHeader/JobsHeader';

const JobsScreen = () => {
  return (
    <View style={style.container}>
      <JobsHeader />
      <Text>This is Jobs Screen</Text>
    </View>
  );
};

export default JobsScreen;
