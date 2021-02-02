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
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  arrowContainer: {
    flex: 1,
    marginLeft: wp('3'),
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('3'),
    position: 'relative',
  },
  backIcon: {
    marginTop: wp('2'),
    color: '#f1f1f1',
  },
  num: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 17,
  },
  jobTitle: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 96,
  },
  text: {
    padding: 4,
    fontSize: 17,
    maxWidth: wp('67'),
  },
  containerThree: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  numTwo: {
    fontSize: 17,
  },
  salaryPkg: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
  },
  tiTle: {
    padding: 2,
    fontSize: 17,
    maxWidth: wp('55'),
  },
  containerFour: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  numThree: {
    fontSize: 17,
  },
  myRequire: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
  },
  requireTitle: {
    padding: 2,
    fontSize: 17,
    maxWidth: wp('58'),
  },
  containerFive: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  numFour: {
    fontSize: 17,
  },
  expe: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
  },
  expeTitle: {
    padding: 2,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  containerSix: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  numSix: {
    fontSize: 17,
  },
  resigSt: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
  },
  resigTitle: {
    padding: 2,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  containerSaven: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  numSaven: {
    fontSize: 17,
  },
  desc: {
    padding: 2,
    fontSize: 15,
    fontWeight: 'bold',
    width: 96,
  },
  descTitle: {
    padding: 2,
    fontSize: 17,
    maxWidth: wp('60'),
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'center',
    backgroundColor: 'green',
    width: '40%',
    borderRadius: 20,
    marginVertical: wp('2'),
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
