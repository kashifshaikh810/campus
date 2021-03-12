import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';
import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';

const DeleteButton = () => {
  const [BtnTxt, setBtnTxt] = useState(true);
  const [roll, setRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const rull = myLogin;
    setRoll(rull.selectedValue);
  });

  const handleSubmit = () => {
    console.log('work');
    setBtnTxt(false);
    const newPostKey = database().ref().child('addJobs').push().key;
    // const updates = ['/addJobs/' + newPostKey];
    database().ref().update(`/addJobs/${newPostKey}`);
  };

  return (
    <TouchableOpacity onPress={handleSubmit} disabled={!BtnTxt}>
      <View style={style.btnContainer}>
        <Text style={style.btnText}>{BtnTxt ? 'Delete' : 'Deleted....!'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeleteButton;
