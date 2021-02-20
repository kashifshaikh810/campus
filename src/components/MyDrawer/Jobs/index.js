import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {widthPercentageToDP as wp} from '../../responsive/responsive';
import {firebase} from '@react-native-firebase/auth';

const JobsScreen = ({navigation}) => {
  const applyJobs = useSelector((state) => state.job.applyJobs);
  // const dispatch = useDispatch();

  const jobDetail = (index) => {
    navigation.navigate('JobsDetails', {
      applyJobs: applyJobs,
      index: index,
    });
  };

  if (!firebase?.auth().currentUser?.uid) {
    navigation.navigate('LogIn');
  }
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <JobsHeader navigation={navigation} />
        <View style={style.mainCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <JobImg />
            {applyJobs.map((applyJob, index) => {
              return (
                <TouchableOpacity
                  style={style.touchAbleContent}
                  onPress={() => jobDetail(index)}>
                  <Text numberOfLines={1} style={style.teXt}>
                    Job Title : {applyJob.jobTitle}
                  </Text>
                  <Text numberOfLines={1} style={style.teXt}>
                    Salary Package : {applyJob.salaryPackage}
                  </Text>
                  <Text numberOfLines={1} style={style.teXt}>
                    Requirement : {applyJob.requirement}
                  </Text>
                  <Text numberOfLines={1} style={style.teXt}>
                    Experience : {applyJob.experience}
                  </Text>
                  <Text numberOfLines={1} style={style.teXt}>
                    Designation : {applyJob.designation}
                  </Text>
                  <Text numberOfLines={1} style={style.teXt}>
                    Description : {applyJob.description}
                  </Text>
                </TouchableOpacity>
              );
            })}
            <View style={{paddingBottom: wp('4')}} />
          </ScrollView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JobsScreen;
