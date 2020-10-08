import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './../screens/SplashScreen';

const AppNavigator = () => {
  
  return (
    <NavigationContainer>
  <SplashScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
