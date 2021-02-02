import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Company" value="java" color="green" />
          <Picker.Item label="Student" value="js" color="green" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: hp('5.4'),
    width: wp('75'),
    borderWidth: 1,
    paddingLeft: wp('2'),
    borderColor: 'green',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default DropDown;
