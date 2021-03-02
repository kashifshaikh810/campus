import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../responsive/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp('100'),
    backgroundColor: '#b3b3b3',
  },
  containerTwo: {
    marginTop: hp('5'),
  },
  coverImgContainer: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: wp('12'),
    zIndex: 0,
    position: 'absolute',
  },
  coverImg: {
    width: wp('96'),
    height: hp('73'),
    borderRadius: 40,
    zIndex: 0,
    position: 'relative',
  },
  img: {
    width: hp('15'),
    height: hp('15'),
    borderRadius: 80,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: wp('7'),
  },
  card: {
    borderWidth: 3,
    borderColor: 'green',
    width: wp('70'),
    height: hp('32'),
    padding: wp('5'),
    marginTop: wp('7'),
    paddingTop: wp('5'),
    alignSelf: 'center',
    position: 'relative',
    borderRadius: 40,
    backgroundColor: '#f3f3f3',
    zIndex: 1,
    display: 'flex',
  },
  company: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyChild: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  companyText: {
    marginTop: wp('2'),
    fontSize: wp('4'),
    maxWidth: wp('90'),
    maxWidth: wp('50'),
  },
  descriptionText: {
    marginTop: wp('2'),
    maxHeight: hp('15'),
    maxWidth: wp('50'),
    fontSize: wp('4'),
  },
  line: {
    borderWidth: 1,
    width: wp('70'),
    marginTop: wp('5'),
    borderColor: 'green',
    alignSelf: 'center',
  },
  description: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: wp('5'),
  },
  txtContainer: {
    alignContent: 'flex-start',
    marginTop: wp('23'),
    flexDirection: 'row',
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 2,
    color: 'black',
    paddingLeft: 8,
    marginTop: 10,
    width: wp('50'),
  },
  textTwo: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    color: 'black',
    paddingLeft: 12,
    width: wp('50'),
    height: hp('5'),
  },
  cardBtn: {
    borderWidth: 1,
    borderColor: '#b3b3b3',
    width: wp('85'),
    marginTop: hp('10'),
    alignSelf: 'center',
    borderRadius: 40,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  allBtn: {
    width: wp('10'),
    height: hp('5'),
    alignItems: 'center',
    paddingTop: wp('1.8'),
  },
  allBtnTxt: {
    textAlign: 'center',
    color: 'black',
  },
  btnLine: {
    borderWidth: 0.7,
    borderColor: '#b3b3b3',
  },
});
