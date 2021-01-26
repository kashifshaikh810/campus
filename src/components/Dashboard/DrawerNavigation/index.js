import React from 'react';
import {TouchableOpacity} from 'react-native';
import JobsScreen from '../Jobs/index';
import StudentsScreen from '../Students/index';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
  const logOut = () => {
    return <TouchableOpacity onPress={navigation.navigate('LogIn')} />;
  };
  return (
    <Drawer.Navigator initialRouteName="Jobs">
      <Drawer.Screen name="Jobs" component={JobsScreen} />
      <Drawer.Screen name="Students" component={StudentsScreen} />
      <Drawer.Screen name="Log Out" component={logOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
