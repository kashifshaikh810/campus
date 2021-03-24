import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, BackHandler, Platform} from 'react-native';
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
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';
// import {useDispatch} from 'react-redux';

const ProfileScreen = ({navigation}) => {
  // const dispatch = useDispatch();
  const [DateOb] = useState('Your Date Of Birth :');
  const [PickPics, setPickPics] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [education, setEducation] = useState('');
  const [Pics, setPics] = useState('');
  const [cvPic, setCvPic] = useState('');
  const [showPic, setShowPic] = useState('');
  const [showErr, setShowErr] = useState('');
  const [myCurrDateOfBirth, setMyCurrDateOfBirth] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [cvPic, setCvPic] = useState('');
  const storageRef = storage().ref(
    `/Dpimages/${PickPics ? PickPics.name : ''}`,
  );
  const storageCv = storage().ref(`/Cvimages/${Pics ? Pics.name : ''}`);

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    console.log('dateeee', date);
    const uid = firebase.auth().currentUser?.uid;
    database()
      .ref(`/StudentProfileData/${uid}`)
      .on('value', (snapshot) => {
        let newSnap = snapshot.val() ? Object.values(snapshot.val()) : [];
        let [snap] = newSnap;
        let myCurrPic = snap ? snap.downloadURL : '';
        let myCurrCvPic = snap ? snap.myDownloadURL : '';
        let myName = snap ? snap.name : '';
        let myDatOfBirth = snap ? snap.date : '';
        let myEducation = snap ? snap.education : '';
        // let data = myDatOfBirth.toISOString().split('t')[0];
        setName(myName);
        setEducation(myEducation);
        setShowPic(myCurrPic);
        setCvPic(myCurrCvPic);
        // setDate(new Date(myDatOfBirth));
        console.log('dataaa', myDatOfBirth);
        // console.log('sa ', myCurrPic);
        // console.log('User data: ', snap.name);
      });
    BackHandler.addEventListener('hardwareBackPress', disableBackButton);
  }, []);

  const SubmitBtn = async () => {
    if (name && date && education) {
      setIsLoading(true);
      const myCvPic = Pics.uri;
      const cvResult = await RNFetchBlob.fs.readFile(myCvPic, 'base64');
      const cvTask = storageCv.putString(cvResult, 'base64', {
        contentType: Pics.type,
      });
      cvTask.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });

      const myPicOrg = PickPics.uri;
      const result = await RNFetchBlob.fs.readFile(myPicOrg, 'base64');
      const task = storageRef.putString(result, 'base64', {
        contentType: PickPics.type,
      });
      task.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      await task.then((imageSnapshot) => {
        console.log('Image Upload Successfully');
        storage()
          .ref(imageSnapshot.metadata.fullPath)
          .getDownloadURL()
          .then((downloadURL) => {
            console.log('image ', downloadURL);
            const uid = firebase.auth().currentUser?.uid;
            try {
              cvTask.then((imageSnapshot) => {
                console.log('Image Upload Successfully');
                console.log('dateeee ', date);
                let abc = date ? date?.toISOString()?.split('t')[0] : [];
                storage()
                  .ref(imageSnapshot.metadata.fullPath)
                  .getDownloadURL()
                  .then((myDownloadURL) => {
                    console.log('image ', myDownloadURL);
                    console.log('date is in profile ', date);
                    database().ref(`/StudentProfileData/${uid}`).push({
                      downloadURL,
                      name,
                      education,
                      myDownloadURL,
                      date: abc,
                    });
                  });
              });
              setIsLoading(false);
              alert('Your Data is Now Saved');
            } catch (err) {
              console.log(err);
              setIsLoading(false);
            }
          });
      });
    } else {
      setShowErr('All Fields Are Required');
    }
  };

  const handleChange = () => {
    setShowErr('');
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <ProfileHeader navigation={navigation} />
        <ProfileImage
          PickPics={PickPics}
          showPic={showPic}
          setPickPics={setPickPics}
        />

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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </View>
        </View>

        <ProfileCv Pics={Pics} setPics={setPics} cvPic={cvPic} />

        <Text style={style.errStyle}>{showErr}</Text>

        <ProfileButton
          Submit={SubmitBtn}
          isLoading={isLoading}
          disabled={!name}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;
