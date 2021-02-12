import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from '../../../MyDrawer/Profile/style';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileButton = ({isLoading, Submit}) => {
  const [BtnText] = useState('Submit');
  return (
    <TouchableOpacity onPress={Submit}>
      <View style={style.btnContainer}>
        <FontAwesome
          name="sign-in"
          size={17}
          color="white"
          style={style.btnIcon}
        />
        <Text style={style.btnText}>{!isLoading && BtnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProfileCv = () => {
  const cvUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View>
      <TouchableOpacity style={style.cvUploaded} onPress={cvUpload}>
        <Text style={style.cvMain}>Attech Your Cv...</Text>
      </TouchableOpacity>

      <View>
        {/* show cv selected cv image */}
        <Text></Text>
      </View>
    </View>
  );
};

export {ProfileButton, ProfileCv};
