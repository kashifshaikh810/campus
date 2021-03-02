import React, {useEffect, useState} from 'react';
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
import database from '@react-native-firebase/database';
import {myRoll} from '../../redux/Actions/Rolls/RollsAction';
import {useDispatch, useSelector} from 'react-redux';

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

const DrawerNav = ({navigation}) => {
  const dispatch = useDispatch();
  const MyRoll = useSelector((state) => state.roll.Student);

  // useEffect(() => {
  //   database()
  //     .ref('/NewUsers/')
  //     .orderByChild('selectedValue')
  //     .equalTo('Company')
  //     .on('value', (snapshot) => {
  //       let data = snapshot.val();
  //       let newData = Object.values(data);
  //       let [fff] = newData;
  //       dispatch(myRoll(fff.selectedValue));
  //       console.log('MY Rollingg ', MyRoll);
  //       // console.log('This is', fff.selectedValue);
  //       // setCompanyVal(fff.selectedValue);
  //     });
  // }, []);

  useEffect(() => {
    database()
      .ref('/NewUsers/')
      .orderByChild('selectedValue')
      .equalTo('Student')
      .on('value', (snapshot) => {
        let data = snapshot.val();
        let newData = Object.values(data);
        let [fff] = newData;
        dispatch(myRoll(fff.selectedValue));
        console.log('MY Rollingg ', MyRoll);
        // console.log('This is', fff.selectedValue);
        // setStudentVal(fff.selectedValue);
      });
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent navigation={navigation} {...props} />
      )}
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
        activeTintColor: '#531158',
      }}>
      {MyRoll === 'Student' ? (
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
      <Drawer.Screen
        name="Add Jobs"
        component={AddJobs}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="journal-whills" size={20} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
