import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, Dimensions } from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Fonts from '../constants/Fonts';

import * as Languages from '../data/languages';
import * as Buttons from './../components/UI/Buttons';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
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

import MasterScreen, {
  screenOptions as masterScreenOptions,
} from './../screens/MasterScreen';

import OptionsScreen, {
  screenOptions as optionsScreenOptions,
} from '../screens/OptionsScreen';

import StatisticsScreen, {
  screenOptions as statisticsScreenOptions,
} from './../screens/StatisticsScreen';

import WelcomeScreen, {
  screenOptions as welcomeScreenOptions,
} from './../screens/WelcomeScreen';

import InstructionsScreen, {
  screenOptions as instructionsScreenOptions,
} from '../screens/InstructionsScreen';
import { TxtItalic } from '../components/UI/Txt';
import ColorsLight from '../constants/ColorsLight';

//* Default Navigation Options

//* Auth Navigation ****************************

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
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
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <WelcomeStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
      <WelcomeStackNavigator.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={welcomeScreenOptions}
      />
    </WelcomeStackNavigator.Navigator>
  );
};

//* Master Navigation ***************************

const MasterStackNavigator = createStackNavigator();

export const MasterNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <MasterStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
      <MasterStackNavigator.Screen
        name='Master'
        component={MasterScreen}
        options={masterScreenOptions}
      />
      <MasterStackNavigator.Screen
        name='Instructions'
        component={InstructionsScreen}
        options={instructionsScreenOptions}
      />
    </MasterStackNavigator.Navigator>
  );
};

//* Stats Navigation ***************************

const StatsStackNavigator = createStackNavigator();

export const StatsNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <StatsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
      <StatsStackNavigator.Screen
        name='Stats'
        component={StatisticsScreen}
        options={statisticsScreenOptions}
      />
    </StatsStackNavigator.Navigator>
  );
};

//* Options Navigation ***************************

const OptionsStackNavigator = createStackNavigator();

export const OptionsNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <OptionsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
      <OptionsStackNavigator.Screen
        name='Options'
        component={OptionsScreen}
        options={optionsScreenOptions}
      />
    </OptionsStackNavigator.Navigator>
  );
};

//* About Navigation ***************************

const AboutStackNavigator = createStackNavigator();

export const AboutNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));
  return (
    <AboutStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.base,
        },
        headerTitleStyle: {
          fontFamily: Fonts.bold,
        },
        headerTintColor: Colors.surround,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode={'none'}>
      <AboutStackNavigator.Screen
        name='About'
        component={AboutScreen}
        options={aboutScreenOptions}
      />
    </AboutStackNavigator.Navigator>
  );
};

//* Side Drawer Navigation *******************
const SideDrawerNavigator = createDrawerNavigator();
export const SideNavigator = () => {
  const [theme, setTheme] = useState();
  const actTheme = useSelector((state) => state.theme.theme);
  useEffect(() => setTheme(actTheme));

  return (
    <SideDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View
            style={{
              flex: 1,
              paddingTop: 3,
              backgroundColor: Colors.base,
            }}>
            <SafeAreaView forceInset={{ top: 'always' }}>
              <DrawerItemList {...props} />

              <View
                style={{
                  marginTop: 30,
                  marginLeft: 6,
                  flexDirection: 'row',
                  alignContent: 'center',
                  backgroundColor: Colors.base,
                }}>
                <Buttons.ButtonBox
                  action={() => {}}
                  bodyStyle={{
                    borderWidth: 0,
                    backgroundColor: Colors.base,
                  }}
                  insideStyle={{ color: Colors.surround }}>
                  <Ionicons
                    name={'md-exit'}
                    size={30}
                    color={Colors.surround}
                  />
                </Buttons.ButtonBox>
                <TxtItalic style={{ marginLeft: 15 }}>EXIT</TxtItalic>
              </View>
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.textPrimary,
        inactiveTintColor: Colors.surround,
        activeBackgroundColor: Colors.inactive,
        inactiveBackgroundColor: Colors.base,
        labelStyle: {
          fontSize: Dimensions.get('window').width / 23,
          marginLeft: 1,
        },
      }}>
      <SideDrawerNavigator.Screen
        name='Welcome'
        component={WelcomeNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-home'} size={30} color={Colors.surround} />
          ),
          headerStyle: {
            backgroundColor: Colors.base,
            height: Dimensions.get('window').height / 15,
          },
          headerTitleStyle: {
            color: Colors.inactive,
          },
          headerPressColorAndroid: Colors.textPrimary,
          headerTintColor: Colors.surround,
        }}
      />

      <SideDrawerNavigator.Screen
        name='F|U|N|N|E|L'
        component={MasterNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-funnel'} size={30} color={Colors.surround} />
          ),
          headerStyle: {
            backgroundColor: Colors.base,
            height: Dimensions.get('window').height / 15,
          },
          headerTitleStyle: {
            color: Colors.inactive,
          },
          headerPressColorAndroid: Colors.textPrimary,
          headerTintColor: Colors.surround,
        }}
      />
      <SideDrawerNavigator.Screen
        name='Statistics'
        component={StatsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-stats'} size={30} color={Colors.surround} />
          ),
          headerStyle: {
            backgroundColor: Colors.base,
            height: Dimensions.get('window').height / 15,
          },
          headerTitleStyle: {
            color: Colors.inactive,
          },
          headerPressColorAndroid: Colors.textPrimary,
          headerTintColor: Colors.surround,
        }}
      />
      <SideDrawerNavigator.Screen
        name='Options'
        component={OptionsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-options'} size={30} color={Colors.surround} />
          ),
          headerStyle: {
            backgroundColor: Colors.base,
            height: Dimensions.get('window').height / 15,
          },
          headerTitleStyle: {
            color: Colors.inactive,
          },
          headerPressColorAndroid: Colors.textPrimary,
          headerTintColor: Colors.surround,
        }}
      />
      <SideDrawerNavigator.Screen
        name='About'
        component={AboutNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons name={'ios-heart'} size={30} color={Colors.surround} />
          ),
          headerStyle: {
            backgroundColor: Colors.base,
            height: Dimensions.get('window').height / 15,
          },
          headerTitleStyle: {
            color: Colors.inactive,
          },
          headerPressColorAndroid: Colors.textPrimary,
          headerTintColor: Colors.surround,
        }}
      />
    </SideDrawerNavigator.Navigator>
  );
};
