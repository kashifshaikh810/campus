import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, BackHandler} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import style from './style';
import JobsHeader from '../../ScreensMaterials/Headerss/JobsHeader/JobsHeader';
import JobImg from '../../ScreensMaterials/JobsMaterial/JobsImage/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../responsive/responsive';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {applyJob} from '../../redux/Actions/ApplyJobs/ApplyJobsAction';

const JobsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const applyJobs = useSelector((state) => state.job.applyJobs);
  const dispatch = useDispatch();

  const jobDetail = (index) => {
    navigation.navigate('JobsDetails', {
      applyJobs: applyJobs,
      index: index,
    });
  };

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      database()
        .ref('/addJobs')
        .on('value', (snapshot) => {
          dispatch(applyJob(Object.values(snapshot.val())));
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, []);

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
            {isLoading ? (
              <View style={style.loader}>
                <ActivityIndicator size={40} color="green" />
              </View>
            ) : (
              applyJobs.map((applyJob, index) => {
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
              })
            )}

            <View style={{paddingBottom: wp('4')}} />
          </ScrollView>
        </View>
        <View style={style.bottomTxtContainer}>
          <View style={style.dot} />
          <Text style={style.bottomTxt}>
            Select to the Favourite Job & Go To the Job Details
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default JobsScreen;
