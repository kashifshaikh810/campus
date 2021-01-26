import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const StudentsHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.txtContainer}>
        <Text style={style.mainTxt}>Welcome To Student Page</Text>
      </View>
    </View>
  );
};

export default StudentsHeader;

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '7%',
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
