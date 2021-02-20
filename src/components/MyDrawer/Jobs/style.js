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
    marginTop: wp('4'),
  },
  mainCard: {
    borderWidth: 1,
    borderColor: 'green',
    width: wp('90'),
    height: hp('83'),
    alignSelf: 'center',
    margin: wp('3'),
    borderRadius: wp('7'),
  },
  touchAbleContent: {
    width: wp('80'),
    height: hp('15'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('5'),
    borderRadius: wp('5'),
    padding: wp('3'),
    backgroundColor: '#b3b3b3',
  },
  teXt: {
    maxWidth: wp('100'),
    maxHeight: hp('5'),
    fontWeight: 'bold',
    color: '#f1f1f1',
    letterSpacing: 0.6,
    lineHeight: hp('2.4'),
  },
});
