import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SideNavigator } from './../navigation/ScreenNavigator';
import { View, Text } from 'react-native';

import * as wordsActions from '../store/actions/words';

const AppNavigator = (props) => {
  const dispatch = useDispatch();

  const [isFetched, setIsFetched] = useState(false);

  const loadUserStatuses = useCallback(async () => {
    dispatch(wordsActions.loadStatusesFromDb());
  }, []);

  //once component loaded, it fires action to fetch user products from firebase by GET method; makes only once when building screen or when change is done on this screen (not non server)

  useEffect(() => {
    loadUserStatuses().then(() => {
      setIsFetched(true);
    });
  }, []);

  // end of preload of statuses

  let isAuth = true;
  return (
    <NavigationContainer>
      {isFetched ? (
        <SideNavigator />
      ) : (
        <View>
          <Text>Failed loading statuses</Text>
        </View>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
