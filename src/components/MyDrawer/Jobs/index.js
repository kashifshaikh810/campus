import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, BackHandler} from 'react-native';
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
import DeleteButton from '../../ScreensMaterials/JobsDetailsMaterial/DetailsButton/DeleteButton';

const JobsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [myJobs, setMyJobs] = useState([]);
  const [userRoll, setUserRoll] = useState();

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    // const roll = myLogin;
    // setUserRoll(roll.selectedValue);
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
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // if (userRoll === 'Student') {
    database()
      .ref('/addJobs/')
      .on('value', (snapshot) => {
        const mySnaap = snapshot.val();
        const newSnaap = Object.values(mySnaap);
        newSnaap.map((tex, i) => {
          const aa = Object.values(tex);
          const newData = Object.values(aa);
          console.log('dadaddad ', newData);
          setIsLoading(false);
          setMyJobs(newData);
          return tex;
        });
      });
    // }

    // try {
    //   if (userRoll === 'Company') {
    //     const uid = firebase.auth().currentUser?.uid;
    //     database()
    //       .ref(`/addJobs/${uid}`)
    //       .on('value', (snapshot) => {
    //         const mySnaap = snapshot.val() ? Object.values(snapshot.val()) : [];
    //         setMyJobs(mySnaap);
    //         console.log(Object.keys(mySnaap));
    //         setIsLoading(false);
    //       });
    //     BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    //   } else {
    //     null;
    //   }
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    // }
  }, []);

  const jobDetail = (index) => {
    navigation.navigate('JobsDetails', {
      myJobs: myJobs,
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
            {isLoading ? (
              <View style={style.loader}>
                <ActivityIndicator size={40} color="green" />
              </View>
            ) : (
              myJobs.map((applyJob, index) => {
                return (
                  <>
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
                    {userRoll === 'Company' ? <DeleteButton /> : <></>}
                  </>
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
