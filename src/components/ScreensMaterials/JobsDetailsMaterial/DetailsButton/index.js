import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';
// import {useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

const DetailsButton = () => {
  const [BtnTxt, setBtnTxt] = useState(true);
  const [roll, setRoll] = useState();
  // const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const uid = firebase.auth().currentUser?.uid;
    console.log(uid);
    database()
      .ref(`NewUsers/${uid}`)
      .on('value', (snapshot) => {
        const user = snapshot.val();
        const newUser = user.selectedValue;
        setRoll(newUser);
      });
    if (BtnTxt) {
      setBtnTxt();
    } else {
      <></>;
    }
  });

  return (
    <>
      {roll === 'Student' ? (
        <TouchableOpacity onPress={() => setBtnTxt()} disabled={!BtnTxt}>
          <View style={style.btnContainer}>
            <Text style={style.btnText}>
              {BtnTxt ? 'Apply' : 'Applyed Success!'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailsButton;
