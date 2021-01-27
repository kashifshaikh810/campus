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
    width: 85,
    height: 85,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('3'),
  },
});
