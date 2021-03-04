import React, {useEffect, useState} from 'react';
import JobsScreen from '../Jobs/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Profile/index';
import AddJobs from '../AddJobs/index';
import CompanyProfileScreen from '../../MyDrawer/CompanyProfile/index';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import CustomContent from './CustomContent';

const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
  const [userRoll, setUserRoll] = useState();
  const myLogin = useSelector((state) => state.myLog.LoginData);

  useEffect(() => {
    const roll = myLogin;
    setUserRoll(roll.selectedValue);
  });

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: 'green',
        activeTintColor: '#f1f1f1',
        inactiveTintColor: 'green',
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
                color="#4f4f4f"
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
                color="#4f4f4f"
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
            <Foundation name="social-joomla" size={20} color="#4f4f4f" />
          ),
        }}
      />
      {userRoll !== 'Student' ? (
        <Drawer.Screen
          name="Add Jobs"
          component={AddJobs}
          options={{
            drawerIcon: () => (
              <FontAwesome5 name="journal-whills" size={20} color="#4f4f4f" />
            ),
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
