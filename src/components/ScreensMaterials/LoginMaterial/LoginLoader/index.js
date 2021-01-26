import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from '../../../Login/style';

const LoginLoader = ({isLoading}) => {
  return (
    <>
      {isLoading ? (
        <View style={style.loader}>
          <ActivityIndicator size="small" color="#00ff00" />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginLoader;
