import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import DetailsHeader from '../ScreensMaterials/JobsDetailsMaterial/DetailsHeader/index';
// import DetailsImage from '../ScreensMaterials/JobsDetailsMaterial/DetailsImage/index';
import DetailsButton from '../ScreensMaterials/JobsDetailsMaterial/DetailsButton/index';
import {useSelector} from 'react-redux';
// import RNFirebase from '@react-native-firebase/app';

const JobsDetails = ({route, navigation}) => {
  const applyJobs = useSelector((state) => state.job.applyJobs);
  const {
    jobTitle,
    salaryPackage,
    requirement,
    experience,
    designation,
    description,
  } = applyJobs[route?.params?.index];

  // useEffect(() => {
  //   // console.log( , 'new world');
  //   RNFirebase.database()
  //     .ref()
  //     .child('users/')
  //     .on('value', (res) => {
  //       console.log(res.val(), 'res');
  //     });
  //   // .then((res) => {
  //   // })
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // });
  // }, []);

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
