import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../JobsDetails/style';
import {useSelector} from 'react-redux';

const DetailsButton = () => {
  const [BtnTxt, setBtnTxt] = useState(true);
  const [roll, setRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const rull = myLogin;
    setRoll(rull.selectedValue);
  });

  return (
    <>
      {roll === 'Student' ? (
        <TouchableOpacity onPress={() => setBtnTxt()}>
          <View style={style.btnContainer}>
            <Text style={style.btnText}>
              {BtnTxt ? 'Apply' : 'Applyed Success!'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default DetailsButton;
