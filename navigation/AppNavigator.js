import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './../navigation/ScreenNavigator';

const AppNavigator = () => {
  let isAuth = true;

  return (
    <NavigationContainer>{isAuth && <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigator;
