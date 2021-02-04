import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
import CompanyProfileHeader from '../../ScreensMaterials/Headerss/CompanyProfileHeader/CompanyHeader';
import {
  CompanyImg,
  CompanyCoverImg,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileImage/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../responsive/responsive';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const CompanyProfileScreen = ({navigation}) => {
  const [myTxt] = useState('Computing Yard');
  // const [edit, setEdit] = useState(true);
  // const [abcd, setAbcd] = useState(myTxt);
  // const editBtn = () => {
  //   setMyTxt();
  //   setEdit();
  // };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <CompanyProfileHeader navigation={navigation} />

        <CompanyCoverImg />

        <View style={{marginTop: hp('5')}}>
          <CompanyImg />
          <View style={style.card}>
            <View>
              <View style={style.company}>
                <Text style={style.companyChild}>Company Name :-</Text>
                <Text style={style.companyText}>{myTxt}</Text>
              </View>

              <View style={style.line} />

              <View style={style.description}>
                <Text style={style.companyChild}>Company Description :-</Text>

                <Text numberOfLines={4} style={style.descriptionText}>
                  dklosjlfkajflkdjflskdjflksdjflskdajfgvlpokjfgfgoifjgoifjgoijgoijgo[ijgoigoifjgofjokgjfkgjlfskljfsldojfsoijfsdojfsojfoifjojfdosdjfosdpjfsdojfsdojfsodjfoi
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: wp('20'),
          }}>
          <TouchableOpacity>
            <Text
              style={{
                width: wp('20'),
                height: hp('5'),
                textAlign: 'center',
                paddingTop: wp('2.6'),
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: 30,
              }}>
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                width: wp('20'),
                height: hp('5'),
                textAlign: 'center',
                paddingTop: wp('2.6'),
                backgroundColor: 'red',
                color: 'white',
                borderRadius: 30,
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CompanyProfileScreen;
