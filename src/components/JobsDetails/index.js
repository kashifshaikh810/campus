import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import DetailsHeader from '../ScreensMaterials/JobsDetailsMaterial/DetailsHeader/index';
import DetailsButton from '../ScreensMaterials/JobsDetailsMaterial/DetailsButton/index';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const JobsDetails = ({route, navigation}) => {
  const [myJobTitle, setMyJobTitle] = useState();
  const [mySalaryPkg, setMySalaryPkg] = useState();
  const [myRequirement, setMyRequirement] = useState();
  const [myExperience, setMyExperience] = useState();
  const [myDesignation, setMyDesignation] = useState();
  const [myDescription, setMyDescription] = useState();

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`NewUsers/${uid}`)
      .on('value', (snapshot) => {
        const user = snapshot.val();
        const newUser = user.selectedValue;
        if (newUser === 'Student') {
          const {
            jobTitle,
            salaryPackage,
            requirement,
            experience,
            designation,
            description,
          } = route?.params?.myJobsStudents[route?.params?.index];
          setMyJobTitle(jobTitle);
          setMySalaryPkg(salaryPackage);
          setMyRequirement(requirement);
          setMyExperience(experience);
          setMyDesignation(designation);
          setMyDescription(description);
        } else {
          const {
            jobTitle,
            salaryPackage,
            requirement,
            experience,
            designation,
            description,
          } = route?.params?.myJobs[route?.params?.index];
          setMyJobTitle(jobTitle);
          setMySalaryPkg(salaryPackage);
          setMyRequirement(requirement);
          setMyExperience(experience);
          setMyDesignation(designation);
          setMyDescription(description);
        }
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
            {myJobTitle}
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
            {mySalaryPkg}
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
            {myRequirement}
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
            {myExperience}
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
            {myDesignation}
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
            {myDescription}
          </Text>
        </View>
      </View>
      <DetailsButton navigation={navigation} />
    </View>
  );
};

export default JobsDetails;
