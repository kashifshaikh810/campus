import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import JobsScreen from '../Jobs/index';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../Profile/index';
import AddJobs from '../AddJobs/index';
import CompanyProfileScreen from '../../MyDrawer/CompanyProfile/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

const handleSignOut = (props) => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  props.navigation.navigate('LogIn');
};

// options={{
//   drawerIcon: () => <AntDesign name="logout" size={20} color="black" />,
// }}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => handleSignOut(props)} />
    </DrawerContentScrollView>
  );
}

function CustomContent(props) {
  return (
    <View>
      <View style={{justifyContent: 'flex-end'}}>
        <Image
          source={require('../../../../assets/download.jpeg')}
          style={{width: '100%'}}
        />
        {/* <Image
          source={require('../../../../assets/jobss.jpg')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            zIndex: 1,
            position: 'absolute',
            alignSelf: 'center',
          }}
        /> */}
      </View>
      <View style={{marginTop: 20, marginHorizontal: 10}}>
        <DrawerItemList {...props} />
      </View>
      {/* <View>
        <DrawerItem {...props} />
      </View> */}
    </View>
  );
}

const DrawerNav = ({navigation}) => {
  const [userRoll, setUserRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const roll = myLogin;
    setUserRoll(roll.selectedValue);
  });

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent navigation={navigation} {...props} />
      )}
      drawerContent={(props) => <CustomContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
        activeTintColor: '#531158',
      }}>
      {userRoll === 'Student' ? (
        <Drawer.Screen
          name="Your Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-profile"
                size={20}
                color="black"
              />
            ),
          }}
        />
      ) : (
        <Drawer.Screen
          name="Company Profile"
          component={CompanyProfileScreen}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-profile"
                size={20}
                color="black"
              />
            ),
          }}
        />
      )}
      <Drawer.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          drawerIcon: () => (
            <Foundation name="social-joomla" size={20} color="black" />
          ),
        }}
      />
      {userRoll !== 'Student' ? (
        <Drawer.Screen
          name="Add Jobs"
          component={AddJobs}
          options={{
            drawerIcon: () => (
              <FontAwesome5 name="journal-whills" size={20} color="black" />
            ),
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
