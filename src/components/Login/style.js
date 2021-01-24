import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from '../responsive/responsive';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: hp('95'),
  },
  coverImgCon: {
    width: '100%',
    height: '100%',
    top: 0,
    borderRadius: 50,
    zIndex: 0,
    position: 'absolute',
    opacity: 0.5,
  },
  coverImg: {
    width: '100%',
    height: '104%',
    borderRadius: 40,
    zIndex: 0,
    position: 'relative',
  },
  txtContainer: {
    paddingHorizontal: 35,
    alignContent: 'flex-start',
    marginTop: 22,
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 5,
    color: 'white',
    paddingLeft: 12,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 30,
    zIndex: 5,
    position: 'relative',
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'green',
    width: '40%',
    borderWidth: 1,
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signupContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  signupTxt: {
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});
