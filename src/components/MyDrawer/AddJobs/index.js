import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import style from './style';
import AddJobsHeader from '../../ScreensMaterials/Headerss/AddJobsHeader/index';
import AddJobsImag from '../../ScreensMaterials/AddJobsMaterial/AddJobsImag/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import AddJobsButton from '../../ScreensMaterials/AddJobsMaterial/AddJobsButton/index';
import AddJobsDropDown from '../../ScreensMaterials/AddJobsMaterial/AddJobsDropDown/index';
import database from '@react-native-firebase/database';

const AddJobs = ({navigation}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [salaryPackage, setSalaryPackage] = useState('');
  const [requirement, setRequirement] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('beginner');

  const handleSubmit = () => {
    try {
      database().ref('/addJobs/').push({
        jobTitle,
        salaryPackage,
        requirement,
        experience,
        designation,
        description,
      });
      setJobTitle('');
      setSalaryPackage('');
      setRequirement('');
      setDesignation('');
      setDescription('');
      setExperience('');
      navigation.navigate('Jobs');
      alert('Posting Success... !');
    } catch (err) {
      console.log('error ', err?.message);
    }
  };

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

        <AddJobsDropDown
          experience={experience}
          setExperience={setExperience}
        />

        <View style={style.txtContainer}>
          <TextInput
            style={style.text}
            placeholder="Designation"
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            placeholderTextColor="green"
            keyboardType="default"
          />
        </View>

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

        <AddJobsButton
          handleSubmit={handleSubmit}
          disabled={
            !jobTitle &&
            !salaryPackage &&
            !requirement &&
            !designation &&
            !description
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddJobs;
