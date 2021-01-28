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
    marginTop: wp('10'),
  },
  txtContainer: {
    paddingHorizontal: hp('5'),
    marginTop: wp('10'),
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 5,
    color: 'black',
    paddingLeft: 12,
  },
  loader: {
    position: 'absolute',
    top: hp('59.3'),
    bottom: 0,
    right: 0,
    left: 0,
  },
});
