import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../responsive/responsive';

const JobsScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <JobsHeader navigation={navigation} />
      <View
        style={{
          borderWidth: 1,
          width: wp('90'),
          height: hp('89'),
          alignSelf: 'center',
          margin: wp('2'),
          marginBottom: wp('20'),
          borderRadius: wp('7'),
        }}>
        <JobImg />
        <ScrollView>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: wp('80'),
              height: hp('7'),
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: wp('5'),
              borderRadius: wp('5'),
            }}>
            <Text>sasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default JobsScreen;
