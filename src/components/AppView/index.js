import React from 'react';
import SignIn from '../Login';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={null} initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppView;
