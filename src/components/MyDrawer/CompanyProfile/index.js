import React, {useState, useEffect} from 'react';
import {View, BackHandler} from 'react-native';
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
import {firebase} from '@react-native-firebase/auth';

const CompanyProfileScreen = ({navigation}) => {
  const currentText = useSelector((state) => state.com.CompanyData);
  const [myTxt, setMyTxt] = useState();
  const [myDcTxt, setMyDcTxt] = useState();
  const [edit, setEdit] = useState(true);
  const [abcd, setAbcd] = useState(currentText.abcd);
  const [etc, setEtc] = useState(currentText.etc);
  const dispatch = useDispatch();

  const editBtn = () => {
    setEdit();
  };

  const cancelBtn = () => {
    setEdit(true);
  };

  const saveBtn = () => {
    const uid = firebase.auth().currentUser?.uid;
    database().ref(`/CompanyData/${uid}`).push({
      abcd,
      etc,
    });
    dispatch(companyProfile({abcd, etc}));
    setEdit(true);
    setMyTxt(abcd);
    setMyDcTxt(etc);
  };

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`/CompanyData/${uid}`)
      .on('value', (snapshot) => {
        const newAppliedJobs = snapshot.val()
          ? Object.values(snapshot.val())
          : [];
        const [data] = newAppliedJobs;
        console.log(data);
        dispatch(companyProfile(data));
      });
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, []);

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
