import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, SideNavigator } from './../navigation/ScreenNavigator';

const AppNavigator = (props) => {
  let isAuth = true;

  return (
    <NavigationContainer>
      {isAuth && <SideNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
