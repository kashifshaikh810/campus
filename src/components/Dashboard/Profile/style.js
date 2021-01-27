import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100'),
  },
  img: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: 80,
    backgroundColor: 'blue',
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('3'),
  },
});
