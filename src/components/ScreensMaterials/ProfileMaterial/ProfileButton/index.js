import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../Dashboard/Profile/style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';

const ProfileButton = () => {
  const [BtnText] = useState('Submit');
  return (
    <TouchableOpacity>
      <View style={style.btnContainer}>
        <Text style={style.btnText}> {BtnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProfileCv = () => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        height: hp('5'),
        width: hp('30'),
        backgroundColor: 'blue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('5'),
      }}>
      <Text style={{color: '#f2f2f2', fontWeight: 'bold'}}>
        Attech Your Cv...
      </Text>
    </TouchableOpacity>
  );
};

export {ProfileButton, ProfileCv};
