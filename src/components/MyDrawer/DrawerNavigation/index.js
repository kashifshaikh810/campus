import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import JobsScreen from '../Jobs/index';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import LogOut from '../../ScreensMaterials/LogOutButton/LogOut';
import ProfileScreen from '../Profile/index';
import AddJobs from '../AddJobs/index';
import CompanyProfileScreen from '../../MyDrawer/CompanyProfile/index';
import Logout from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Jobs"
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
        activeTintColor: '#531158',
      }}
      hideStatusBar={true}>
      <Drawer.Screen name="Your Profile" component={ProfileScreen} />
      <Drawer.Screen name="Jobs" component={JobsScreen} />
      <Drawer.Screen name="Add Jobs" component={AddJobs} />
      <Drawer.Screen name="Company Profile" component={CompanyProfileScreen} />
      {/* <Drawer.Screen name="Log Out" component={LogOut} /> */}
      {/* <DrawerItem
        label="LogOut"
        labelStyle={{fontFamily: 'Roboto-Regular'}}
        inactiveTintColor="#324345"
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
