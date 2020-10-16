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

import ChallengesScreen, {
  screenOptions as challengesScreenOptions,
} from '../screens/ChallengesScreen';

import ChallengeScreen, {
  screenOptions as challengeScreenOptions,
} from '../screens/ChallengeScreen';

import HowToScreen, {
  screenOptions as howToScreenOptions,
} from '../screens/HowToScreen';

import MasterScreen, {
  screenOptions as masterScreenOptions,
} from './../screens/MasterScreen';

import SettingsScreen, {
  screenOptions as settingsScreenOptions,
} from './../screens/SettingsScreen';

import StatisticsScreen, {
  screenOptions as statisticsScreenOptions,
} from './../screens/StatisticsScreen';

import WelcomeScreen, {
  screenOptions as welcomeScreenOptions,
} from './../screens/WelcomeScreen';

import InstructionsScreen, {
  screenOptions as instructionsScrenOptions,
} from '../screens/InstructionsScreen';

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
      <WelcomeStackNavigator.Screen
        name='About'
        component={AboutScreen}
        options={aboutScreenOptions}
      />
    </WelcomeStackNavigator.Navigator>
  );
};

//* Instructions Navigation ****************************

const InstructionsStackNavigator = createStackNavigator();

export const InstructionsNavigator = () => {
  return (
    <InstructionsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <InstructionsStackNavigator.Screen
        name='Instructions'
        component={InstructionsScreen}
        options={instructionsScrenOptions}
      />
    </InstructionsStackNavigator.Navigator>
  );
};

//* Master Navigation ***************************

const MasterStackNavigator = createStackNavigator();

export const MasterNavigator = () => {
  return (
    <MasterStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MasterStackNavigator.Screen
        name='Master'
        component={MasterScreen}
        options={masterScreenOptions}
      />
    </MasterStackNavigator.Navigator>
  );
};

//* Challenges Navigation ***************************

const ChallengesStackNavigator = createStackNavigator();

export const ChallengesNavigator = () => {
  return (
    <ChallengesStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ChallengesStackNavigator.Screen
        name='Challenges'
        component={ChallengesScreen}
        options={challengesScreenOptions}
      />
      <ChallengesStackNavigator.Screen
        name='Challenge'
        component={ChallengeScreen}
        options={challengeScreenOptions}
      />
    </ChallengesStackNavigator.Navigator>
  );
};

//* Stats Navigation ***************************

const StatsStackNavigator = createStackNavigator();

export const StatsNavigator = () => {
  return (
    <StatsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <StatsStackNavigator.Screen
        name='Stats'
        component={StatisticsScreen}
        options={statisticsScreenOptions}
      />
    </StatsStackNavigator.Navigator>
  );
};

//* Settings Navigation ***************************

const SettingsStackNavigator = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SettingsStackNavigator.Screen
        name='Settings'
        component={SettingsScreen}
        options={settingsScreenOptions}
      />
    </SettingsStackNavigator.Navigator>
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
      drawerContentOptions={{ activeTintColor: Colors.accent }}>
      <SideDrawerNavigator.Screen
        name='Welcome'
        component={WelcomeNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-home'} size={23} color={Colors.base} />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Instructions'
        component={InstructionsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-fitness'} size={23} color={Colors.base} />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='F|U|N|N|E|L'
        component={MasterNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-funnel'} size={23} color={Colors.base} />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Challenges'
        component={ChallengesNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-pulse'} size={23} color={Colors.base} />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Statistics'
        component={StatsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-stats'} size={23} color={Colors.base} />
          ),
        }}
      />

      <SideDrawerNavigator.Screen
        name='Options'
        component={SettingsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-options'} size={23} color={Colors.base} />
          ),
        }}
      />
    </SideDrawerNavigator.Navigator>
  );
};
