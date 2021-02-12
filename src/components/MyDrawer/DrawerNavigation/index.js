import React from 'react';
import JobsScreen from '../Jobs/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LogOut from '../../ScreensMaterials/LogOutButton/LogOut';
import ProfileScreen from '../Profile/index';
import AddJobs from '../AddJobs/index';
import CompanyProfileScreen from '../../MyDrawer/CompanyProfile/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Jobs"
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
        activeTintColor: '#531158',
      }}
      drawerStyle={{
        width: '95%',
      }}>
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
      <Drawer.Screen
        name="Log Out"
        component={LogOut}
        options={{
          drawerIcon: () => <AntDesign name="logout" size={20} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
