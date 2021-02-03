import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../MyDrawer/AddJobs/style';

const AddJobsButton = () => {
  const [BtnText] = useState('Submit');
  return (
    <TouchableOpacity>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{BtnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddJobsButton;
