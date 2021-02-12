import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('90'),
  },
  img: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: 80,
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
    paddingLeft: wp('10'),
  },
  icon: {
    position: 'absolute',
    left: 45,
    bottom: 11,
  },
  btnIcon: {
    position: 'absolute',
    left: 20,
  },
  loader: {
    position: 'absolute',
    top: hp('73.3'),
    bottom: 0,
    right: 0,
    left: 0,
  },
  dateOB: {
    textAlign: 'center',
    color: 'green',
    marginTop: wp('8'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    marginTop: wp('3'),
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  datePicker: {
    height: hp('5'),
    width: hp('40'),
    marginTop: wp('2'),
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cvUploaded: {
    alignSelf: 'center',
    height: hp('4'),
    width: hp('25'),
    backgroundColor: '#b3b3b3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5'),
  },
  cvMain: {
    color: 'white',
    fontWeight: 'bold',
  },
});
