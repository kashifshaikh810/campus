import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import DetailsHeader from '../ScreensMaterials/JobsDetailsMaterial/DetailsHeader/index';
import DetailsButton from '../ScreensMaterials/JobsDetailsMaterial/DetailsButton/index';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const JobsDetails = ({route, navigation}) => {
  const [userRoll, setUserRoll] = useState();

  // const {
  //   jobTitle,
  //   salaryPackage,
  //   requirement,
  //   experience,
  //   designation,
  //   description,
  // } = route?.params?.myJobs[route?.params?.index];

  const {
    jobTitle,
    salaryPackage,
    requirement,
    experience,
    designation,
    description,
  } = route?.params?.myJobsStudents[route?.params?.index];

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    console.log(uid);
    database()
      .ref(`NewUsers/${uid}`)
      .on('value', (snapshot) => {
        const user = snapshot.val();
        const newUser = user.selectedValue;
        console.log('Curr User Roll: ', newUser);
        setUserRoll(newUser);
      });
  });

  return (
    <View style={style.container}>
      <DetailsHeader navigation={navigation} />
      <View style={style.containerTwo}>
        <View>
          <Text style={style.num}>1.</Text>
        </View>
        <View>
          <Text style={style.jobTitle}>Job Title :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.text}>
            {jobTitle}
          </Text>
        </View>
      </View>

      <View style={style.containerThree}>
        <View>
          <Text style={style.numTwo}>2.</Text>
        </View>
        <View>
          <Text style={style.salaryPkg}>Salary Package :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.tiTle}>
            {salaryPackage}
          </Text>
        </View>
      </View>

      <View style={style.containerFour}>
        <View>
          <Text style={style.numThree}>3.</Text>
        </View>
        <View>
          <Text style={style.myRequire}>Requirement :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.requireTitle}>
            {requirement}
          </Text>
        </View>
      </View>

      <View style={style.containerFive}>
        <View>
          <Text style={style.numFour}>4.</Text>
        </View>
        <View>
          <Text style={style.expe}>Experience :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.expeTitle}>
            {experience}
          </Text>
        </View>
      </View>

      <View style={style.containerSix}>
        <View>
          <Text style={style.numSix}>5.</Text>
        </View>
        <View>
          <Text style={style.resigSt}>Designation :-</Text>
        </View>
        <View>
          <Text numberOfLines={4} style={style.resigTitle}>
            {designation}
          </Text>
        </View>
      </View>

      <View style={style.containerSaven}>
        <View>
          <Text style={style.numSaven}>6.</Text>
        </View>
        <View>
          <Text style={style.desc}>Description :-</Text>
        </View>
        <View>
          <Text numberOfLines={5} style={style.descTitle}>
            {description}
          </Text>
        </View>
      </View>
      <DetailsButton navigation={navigation} />
    </View>
  );
};

export default JobsDetails;
