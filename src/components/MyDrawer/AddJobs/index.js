import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import style from './style';
import AddJobsHeader from '../../ScreensMaterials/Headerss/AddJobsHeader/index';
import AddJobsImag from '../../ScreensMaterials/AddJobsMaterial/AddJobsImag/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AddJobsButton from '../../ScreensMaterials/AddJobsMaterial/AddJobsButton/index';
import AddJobsDropDown from '../../ScreensMaterials/AddJobsMaterial/AddJobsDropDown/index';

const AddJobs = ({navigation}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryPackage, setSalaryPackage] = useState('');
  const [requirement, setRequirement] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  return (
    <KeyboardAwareScrollView>
      <View style={style.container}>
        <AddJobsHeader navigation={navigation} />
        <AddJobsImag />
        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={jobTitle}
            placeholder="Job Title"
            onChangeText={(text) => setJobTitle(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={salaryPackage}
            placeholder="Salary Package"
            onChangeText={(text) => setSalaryPackage(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            value={requirement}
            placeholder="Requirement"
            onChangeText={(text) => setRequirement(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            placeholder="Experience"
            value={experience}
            onChangeText={(text) => setExperience(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

        <AddJobsDropDown />

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

        <AddJobsButton />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddJobs;
