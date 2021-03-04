import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import style from './style';
import CompanyProfileHeader from '../../ScreensMaterials/Headerss/CompanyProfileHeader/CompanyHeader';
import {
  CompanyImg,
  CompanyCoverImg,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileImage/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  EditButton,
  SaveButton,
  CancelButton,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileButtons/index';
import {
  CompanyNameText,
  CompanyDescriptionText,
} from '../../ScreensMaterials/CompanyProfileMaterial/CompanyProfileCardTeXt/index';
import database from '@react-native-firebase/database';
import {useSelector, useDispatch} from 'react-redux';
import {companyProfile} from '../../redux/Actions/CompanyProfile/CompanyProfileAction';

const CompanyProfileScreen = ({navigation}) => {
  const [myTxt, setMyTxt] = useState('Computing Yard');
  const [myDcTxt, setMyDcTxt] = useState('Need a senior full stack developer');
  const [edit, setEdit] = useState(true);
  const [abcd, setAbcd] = useState();
  const [etc, setEtc] = useState();
  const dispatch = useDispatch();

  const editBtn = () => {
    setEdit();
  };

  const cancelBtn = () => {
    setEdit(true);
  };

  const saveBtn = () => {
    database().ref('/CompanyData/').push({
      abcd,
      etc,
    });
    dispatch(companyProfile({abcd, etc}));
    setEdit(true);
    setMyTxt(abcd);
    setMyDcTxt(etc);
  };

  // useEffect(() => {
  //   // dispatch(companyProfile({abcd, etc}));
  //   database()
  //     .ref('/CompanyData')
  //     .on('value', (snapshot) => {
  //       let data = [];
  //       snapshot.forEach((childSnapshot) => {
  //         let childKey = childSnapshot.key;
  //         let childData = childSnapshot.val();

  //         data.push(childData);
  //         console.log(childKey, 'ChildData');
  //       });
  //       // dispatch(companyProfile(snapshot.val()));
  //     });
  // });

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <CompanyProfileHeader navigation={navigation} />
        <CompanyCoverImg />
        <View style={style.containerTwo}>
          <CompanyImg />
          <View style={style.card}>
            <View>
              <CompanyNameText
                edit={edit}
                myTxt={myTxt}
                abcd={abcd}
                setAbcd={setAbcd}
              />

              <View style={style.line} />

              <CompanyDescriptionText
                edit={edit}
                myDcTxt={myDcTxt}
                etc={etc}
                setEtc={setEtc}
              />
            </View>
          </View>
        </View>
        <View style={style.cardBtn}>
          <View style={style.btnContainer}>
            <EditButton editBtn={editBtn} />

            <View style={style.btnLine} />

            <SaveButton saveBtn={saveBtn} />

            <View style={style.btnLine} />

            <CancelButton cancelBtn={cancelBtn} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CompanyProfileScreen;
