import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';

const AddJobsDropDown = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Junior Developer" value="html" color="green" />
          <Picker.Item label="Senior Developer" value="js" color="green" />
          <Picker.Item label="Lead Developer" value="css" color="green" />
          <Picker.Item
            label="Full Stack Developer"
            value="java"
            color="green"
          />
          <Picker.Item
            label="Front End Developer"
            value="graphql"
            color="green"
          />
          <Picker.Item label="Back End Developer" value="react" color="green" />
          <Picker.Item label="beginner" value="es6" color="green" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: hp('6.7'),
    width: wp('88'),
    borderWidth: 1,
    paddingLeft: 2,
    marginTop: wp('5'),
    borderColor: 'green',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default AddJobsDropDown;
