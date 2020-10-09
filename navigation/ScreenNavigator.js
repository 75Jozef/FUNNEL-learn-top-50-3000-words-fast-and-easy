import React from 'react';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';

import { createStackNavigator } from '@react-navigation/stack';
// import {
//   createDrawerNavigator,
//   DrawerItemList,
// } from '@react-navigation/drawer';

// import AboutScreen, {
//   screenOptions as aboutScreenOptions,
// } from './../screens/AboutScreen';

import AuthScreen, {
  screenOptions as authScreenOptions,
} from '../screens/AuthScreen';

// import ChallengeScreen, {
//   screenOptions as challengeScreenOptions,
// } from '../screens/ChallengeScreen';

// import HowToScreen, {
//   screenOptions as howToScreenOptions,
// } from '../screens/HowToScreen';

// import MainScreen, {
//   screenOptions as mainScreenOptions,
// } from './../screens/MainScreen';

// import SettingsScreen, {
//   screenOptions as settingsScreenOptions,
// } from './../screens/SettingsScreen';

// import StatisticsScreen, {
//   screenOptions as statisticsScreenOptions,
// } from './../screens/StatisticsScreen';

// import WelcomeScreen, {
//   screenOptions as welcomeScreenOptions,
// } from './../screens/WelcomeScreen';

// import UserScreen, {
//   screenOptions as userScreenOptions,
// } from './../screens/UserScreen';

//* Default Navigation Options
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.base,
  },
  headerTitleStyle: {
    fontFamily: Fonts.bold,
  },
  headerTintColor: Colors.surround,
  gestureEnabled: true,
};

//* Auth Navigation ****************************

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name='Auth'
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
