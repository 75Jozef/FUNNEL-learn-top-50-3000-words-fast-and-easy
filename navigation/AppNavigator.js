import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
