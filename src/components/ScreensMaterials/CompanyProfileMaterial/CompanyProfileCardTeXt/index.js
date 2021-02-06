import React from 'react';
import {Text, View, TextInput} from 'react-native';
import style from '../../../MyDrawer/CompanyProfile/style';

const CompanyNameText = ({edit, myTxt, setAbcd, abcd}) => {
  return (
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
  );
};

const CompanyDescriptionText = ({edit, myDcTxt, setEtc, etc}) => {
  return (
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
  );
};

export {CompanyNameText, CompanyDescriptionText};
