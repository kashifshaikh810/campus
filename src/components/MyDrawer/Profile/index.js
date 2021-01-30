import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
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
import ProfileLoader from '../../ScreensMaterials/ProfileMaterial/ProfileLoader/index';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [DateOb] = useState('Your Date Of Birth :');
  const [education, setEducation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const SubmitBtn = () => {
    setIsLoading(true);
    try {
      console.log('Data!');
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
      setName('');
      setEducation('');
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <ProfileHeader navigation={navigation} />
        <ProfileImage />

        <View>
          <View style={style.txtContainer}>
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
              onDateChange={setDate}
              mode="date"
              style={style.datePicker}
            />
          </TouchableOpacity>

          <View style={style.txtContainer}>
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

        <ProfileCv />

        <ProfileButton Submit={SubmitBtn} isLoading={isLoading} />

        <ProfileLoader isLoading={isLoading} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;
