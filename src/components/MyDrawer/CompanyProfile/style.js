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
    padding: wp('5'),
    marginTop: wp('7'),
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
    marginTop: wp('1'),
    fontSize: wp('4'),
    maxWidth: wp('90'),
    maxWidth: wp('50'),
  },
  descriptionText: {
    marginTop: wp('2'),
    maxHeight: hp('30'),
    maxWidth: wp('50'),
    lineHeight: wp('6'),
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
    // paddingHorizontal: 20,
    alignContent: 'flex-start',
    marginTop: wp('20'),
    flexDirection: 'row',
  },
  text: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 2,
    color: 'black',
    paddingLeft: 12,
  },
});
