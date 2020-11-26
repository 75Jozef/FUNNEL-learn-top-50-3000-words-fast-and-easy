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

  useEffect(() => {
    loadUserStatuses().then(() => {
      setIsFetched(true);
    });
  }, []);

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
