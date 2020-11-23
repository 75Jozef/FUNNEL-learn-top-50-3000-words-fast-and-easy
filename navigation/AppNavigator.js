import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, SideNavigator } from './../navigation/ScreenNavigator';

import * as wordsActions from '../store/actions/words';

const AppNavigator = (props) => {
  // preload of statuses and Settings

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const loadUserStatuses = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(wordsActions.loadStatusesFromDb());
      console.log('loaded from local DB');
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing, setError, setIsFetched]);

  //once component loaded, it fires action to fetch user products from firebase by GET method; makes only once when building screen or when change is done on this screen (not non server)

  useEffect(() => {
    setIsLoading(true);
    loadUserStatuses().then(() => {
      setIsFetched(true);
      setIsLoading(false);
    });
  }, [loadUserStatuses, setIsLoading]);

  // end of preload of statuses

  let isAuth = true;
  return (
    <NavigationContainer>
      {isAuth && isFetched && <SideNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
