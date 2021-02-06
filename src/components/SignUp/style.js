import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('95'),
  },
  containerTwo: {
    padding: 10,
    flex: 1,
  },
  containerThree: {
    borderRadius: 40,
    height: '100%',
    paddingBottom: 22,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
  },
  coverImgCon: {
    width: '100%',
    height: '100%',
    top: 0,
    borderRadius: 50,
    zIndex: 0,
    position: 'absolute',
    opacity: 0.3,
  },
  coverImg: {
    width: '100%',
    height: '104%',
    borderRadius: 40,
    zIndex: 0,
    position: 'relative',
  },
  txtContainer: {
    paddingHorizontal: wp('10'),
    alignContent: 'flex-start',
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 5,
    color: 'white',
    paddingLeft: wp('4'),
  },
  loader: {
    position: 'absolute',
    top: hp('65.7'),
    bottom: 0,
    right: 0,
    left: 0,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('2'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    marginTop: wp('6'),
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: wp('4'),
  },
  signupTxt: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});
