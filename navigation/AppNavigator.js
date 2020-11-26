import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SideNavigator } from './../navigation/ScreenNavigator';

import * as wordsActions from '../store/actions/words';

const AppNavigator = (props) => {
  // preload of statuses

  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [isFetched, setIsFetched] = useState(false);

  const loadUserStatuses = useCallback(async () => {
    setError(null);

    try {
      dispatch(wordsActions.loadStatusesFromDb());
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError, setIsFetched]);

  //once component loaded, it fires action to fetch user products from firebase by GET method; makes only once when building screen or when change is done on this screen (not non server)

  useEffect(() => {
    loadUserStatuses().then(() => {
      setIsFetched(true);
    });
  }, [loadUserStatuses]);

  // end of preload of statuses

  let isAuth = true;
  return (
    <NavigationContainer>{isFetched && <SideNavigator />}</NavigationContainer>
  );
};

export default AppNavigator;
