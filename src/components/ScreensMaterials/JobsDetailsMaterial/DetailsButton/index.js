import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';

const DetailsButton = () => {
  const [BtnTxt, setBtnTxt] = useState(true);
  return (
    <TouchableOpacity onPress={() => setBtnTxt()}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{BtnTxt ? 'apply' : 'Applyed!'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsButton;
