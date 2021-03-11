import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, BackHandler} from 'react-native';
import style from './style';
import ProfileHeader from '../../ScreensMaterials/Headerss/ProfileHeader/index';
import ProfileImage from '../../ScreensMaterials/ProfileMaterial/ProfileImage/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  ProfileButton,
  ProfileCv,
} from '../../ScreensMaterials/ProfileMaterial/ProfileButton/index';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {yourProfile} from '../../redux/Actions/YourProfile/YourProfileAction';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
// import {useDispatch} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  // const dispatch = useDispatch();
  const [DateOb] = useState('Your Date Of Birth :');
  const [PickPics, setPickPics] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [education, setEducation] = useState('');
  const [Pics, setPics] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`/StudentProfileData/${uid}`)
      .on('value', (snapshot) => {
        const newSnap = snapshot.val() ? Object.values(snapshot.val()) : [];
        const [snap] = newSnap;
        // const myPic = snap ? snap.PickPics : '';
        const myName = snap ? snap.name : '';
        const myEducation = snap ? snap.education : '';
        setName(myName);
        setEducation(myEducation);
        console.log('User data: ', snap.name);
      });
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, []);

  const SubmitBtn = () => {
    setIsLoading(true);
    const uid = firebase.auth().currentUser?.uid;
    try {
      database().ref(`/StudentProfileData/${uid}`).push({
        PickPics,
        name,
        education,
        Pics,
      });
      setIsLoading(false);
      alert('Your Data is Now Saved');
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  // console.log('datee ', date);
  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <ProfileHeader navigation={navigation} />
        <ProfileImage PickPics={PickPics} setPickPics={setPickPics} />

        <View>
          <View style={style.txtContainer}>
            <AntDesign
              name="contacts"
              size={17}
              color="green"
              style={style.icon}
            />
            <TextInput
              style={style.text}
              value={name}
              placeholder="Your Name"
              onChangeText={(text) => setName(text)}
              placeholderTextColor="green"
              keyboardType="name-phone-pad"
            />
          </View>

          <Text style={style.dateOB}>{DateOb}</Text>

          <TouchableOpacity style={style.dateContainer}>
            <DatePicker
              date={date}
              onDateChange={(text) => setDate(text)}
              mode="date"
              style={style.datePicker}
            />
          </TouchableOpacity>

          <View style={style.txtContainer}>
            <MaterialCommunityIcons
              name="cast-education"
              size={17}
              color="green"
              style={style.icon}
            />
            <TextInput
              style={style.text}
              placeholder="Your Education"
              value={education}
              onChangeText={(text) => setEducation(text)}
              placeholderTextColor="green"
              keyboardType="name-phone-pad"
            />
          </View>
        </View>

        <ProfileCv Pics={Pics} setPics={setPics} />

        <ProfileButton
          Submit={SubmitBtn}
          isLoading={isLoading}
          disabled={!name || !education}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;
