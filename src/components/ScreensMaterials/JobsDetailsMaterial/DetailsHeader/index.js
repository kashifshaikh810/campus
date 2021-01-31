import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DetailsBackIcon from '../DetailsBackIcon/index';

const DetailsHeader = ({navigation}) => {
  return (
    <View style={style.container}>
      <View>
        <DetailsBackIcon navigation={navigation} />
      </View>
      <View style={style.txtContainer}>
        <Text style={style.mainTxt}>Jobs Details</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'green',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  mainTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
