import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SideNavigator } from './../navigation/ScreenNavigator';
import { View, Text } from 'react-native';
import ScreenFrame from './../components/UI/ScreenFrame';

import * as wordsActions from '../store/actions/words';
import * as langActions from '../store/actions/lang';

const AppNavigator = (props) => {
  const dispatch = useDispatch();

  const [isFetched, setIsFetched] = useState(false);

  const loadUserStatuses = useCallback(async () => {
    dispatch(wordsActions.loadStatusesFromDb());
  }, []);

  const loadSettings = useCallback(async () => {
    dispatch(langActions.loadSettingsFromDb());
  }, []);

  useEffect(() => {
    loadUserStatuses()
      .then(() => {
        loadSettings();
      })
      .then(() => setIsFetched(true));
  }, []);

  return (
    <NavigationContainer>
      {isFetched ? (
        <SideNavigator />
      ) : (
        <ScreenFrame>
          <View>
            <Text>Loading...</Text>
          </View>
        </ScreenFrame>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
