import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import style from '../../../Dashboard/Profile/style';
import UploadIcon from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../responsive/responsive';

const ProfileImage = () => {
  const myImage = useState(require('../../../../../assets/kashif.jpg'));
  return (
    <View style={style.imgContainer}>
      <View style={style.img} />
      <View style={styles.uploadIconContainer}>
        <UploadIcon
          name="upload"
          size={25}
          color="black"
          style={styles.uploadIcon}
        />
      </View>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  uploadIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  uploadIcon: {
    marginBottom: hp('1'),
    marginLeft: hp('6'),
    width: 35,
    height: 35,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});
