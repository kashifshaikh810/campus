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
import EditIcon from 'react-native-vector-icons/AntDesign';
import SaveIcon from 'react-native-vector-icons/AntDesign';
import CancelIcon from 'react-native-vector-icons/MaterialIcons';

const CompanyProfileScreen = ({navigation}) => {
  const [myTxt, setMyTxt] = useState('Computing Yard');
  const [myDcTxt, setMyDcTxt] = useState(
    'daksdlajdaojdiasojdasiojdasidjsaidjasjdsajdasjdasodaajda',
  );
  const [edit, setEdit] = useState(true);
  const [abcd, setAbcd] = useState(myTxt);
  const [etc, setEtc] = useState(myDcTxt);

  const editBtn = () => {
    setEdit();
  };

  const cancelBtn = () => {
    setEdit(true);
  };

  const saveBtn = () => {
    setEdit(true);
    setMyTxt(abcd);
    setMyDcTxt(etc);
  };

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
                <Text numberOfLines={1} style={style.companyText}>
                  {edit ? (
                    myTxt
                  ) : (
                    <View style={style.txtContainer}>
                      <TextInput
                        style={style.text}
                        value={abcd}
                        onChangeText={(text) => setAbcd(text)}
                        keyboardType="default"
                      />
                    </View>
                  )}
                </Text>
              </View>

              <View style={style.line} />

              <View style={style.description}>
                <Text style={style.companyChild}>Company Description :-</Text>

                <Text numberOfLines={2} style={style.descriptionText}>
                  {edit ? (
                    myDcTxt
                  ) : (
                    <View style={style.txtContainer}>
                      <TextInput
                        style={style.text}
                        value={etc}
                        onChangeText={(text) => setEtc(text)}
                        keyboardType="default"
                      />
                    </View>
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: wp('90'),
            height: hp('50'),
            margin: wp('5'),
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              // marginTop: wp('20'),
            }}>
            <TouchableOpacity onPress={editBtn}>
              <View
                style={{
                  width: wp('10'),
                  height: hp('5'),
                  alignItems: 'center',
                  paddingTop: wp('1.8'),
                }}>
                <EditIcon name="edit" size={25} color="black" />
              </View>
              <Text style={{textAlign: 'center'}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={saveBtn}>
              <View
                style={{
                  width: wp('10'),
                  height: hp('5'),
                  paddingTop: wp('1.8'),
                  alignItems: 'center',
                }}>
                <SaveIcon name="save" size={25} color="black" />
              </View>
              <Text style={{textAlign: 'center'}}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={cancelBtn}>
              <View
                style={{
                  width: wp('10'),
                  height: hp('5'),
                  paddingTop: wp('1.8'),
                  alignItems: 'center',
                }}>
                <CancelIcon name="cancel" size={25} color="black" />
              </View>
              <Text style={{textAlign: 'center'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CompanyProfileScreen;
