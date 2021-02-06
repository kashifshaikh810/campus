import React, {useState} from 'react';
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
