import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';

import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';

import AboutScreen, {
  screenOptions as aboutScreenOptions,
} from './../screens/AboutScreen';

import AuthScreen, {
  screenOptions as authScreenOptions,
} from '../screens/AuthScreen';

import ChallengeScreen, {
  screenOptions as challengeScreenOptions,
} from '../screens/ChallengeScreen';

import HowToScreen, {
  screenOptions as howToScreenOptions,
} from '../screens/HowToScreen';

import MainScreen, {
  screenOptions as mainScreenOptions,
} from './../screens/MainScreen';

import SettingsScreen, {
  screenOptions as settingsScreenOptions,
} from './../screens/SettingsScreen';

import StatisticsScreen, {
  screenOptions as statisticsScreenOptions,
} from './../screens/StatisticsScreen';

import WelcomeScreen, {
  screenOptions as welcomeScreenOptions,
} from './../screens/WelcomeScreen';

import UserScreen, {
  screenOptions as userScreenOptions,
} from './../screens/UserScreen';

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

//* Welcome navigation ***********************
const WelcomeStackNavigator = createStackNavigator();
export const WelcomeNavigator = () => {
  return (
    <WelcomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <WelcomeStackNavigator.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={welcomeScreenOptions}
      />
    </WelcomeStackNavigator.Navigator>
  );
};

//* Main Navigation ***************************

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MainStackNavigator.Screen
        name='MainScreen'
        component={MainScreen}
        options={mainScreenOptions}
      />
      <MainStackNavigator.Screen
        name='UserScreen'
        component={UserScreen}
        options={userScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

//* How To Navigation ***************************

const HowToStackNavigator = createStackNavigator();

export const HowToNavigator = () => {
  return (
    <HowToStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HowToStackNavigator.Screen
        name='HowToScreen'
        component={HowToScreen}
        options={howToScreenOptions}
      />
      <HowToStackNavigator.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={settingsScreenOptions}
      />
      <HowToStackNavigator.Screen
        name='AboutScreen'
        component={AboutScreen}
        options={aboutScreenOptions}
      />
    </HowToStackNavigator.Navigator>
  );
};

//* Challenge Navigation ***************************

const ChallengeStackNavigator = createStackNavigator();

export const ChallengeNavigator = () => {
  return (
    <ChallengeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ChallengeStackNavigator.Screen
        name='Challenge Screen'
        component={ChallengeScreen}
        options={challengeScreenOptions}
      />
      <ChallengeStackNavigator.Screen
        name='StatisticsScreen'
        component={StatisticsScreen}
        options={statisticsScreenOptions}
      />
    </ChallengeStackNavigator.Navigator>
  );
};

//* Side Drawer Navigation *******************
const SideDrawerNavigator = createDrawerNavigator();
export const SideNavigator = () => {
  return (
    <SideDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 50 }}>
            <SafeAreaView forceInset={{ top: 'always' }}>
              <DrawerItemList {...props} />
              <Button
                title='Logout!'
                color={Colors.accent}
                onPress={() => {}}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{ activeTintColor: Colors.backPrimary }}>
      <SideDrawerNavigator.Screen
        name='WelcomeScreen'
        component={WelcomeNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={Colors.base}
            />
          ),
        }}
      />
      <SideDrawerNavigator.Screen
        name='How To'
        component={HowToNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={Colors.base}
            />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Main Screen'
        component={MainNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={Colors.base}
            />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Challenge Screen'
        component={ChallengeNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={Colors.base}
            />
          ),
        }}
      />
    </SideDrawerNavigator.Navigator>
  );
};
