import React from 'react';
import JobsScreen from '../Jobs/index';
import StudentsScreen from '../Students/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LogOut from '../../ScreensMaterials/LogOutButton/LogOut';
import ProfileScreen from '../Profile/index';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Jobs">
      <Drawer.Screen name="Your Profile" component={ProfileScreen} />
      <Drawer.Screen name="Jobs" component={JobsScreen} />
      <Drawer.Screen name="Students" component={StudentsScreen} />
      <Drawer.Screen name="Log Out" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
