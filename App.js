import React, { useState, useEffect } from 'react';

import AppNavigator from './navigation/AppNavigator';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import langReducer from './store/reducers/lang';
import wordsReducer from './store/reducers/words';
import themeReducer from './store/reducers/theme';
import refreshReducer from './store/reducers/refresh';

import { initStatuses, initSettings } from './localDb/db';

initStatuses()
  .then(() => {
    console.log('initialized statuses db OK');
  })
  .catch((err) => {
    console.log('failed to open statuses db');
    console.log(err);
  });

initSettings()
  .then(() => {
    console.log('initialized settings db OK');
  })
  .catch((err) => {
    console.log('failed to open settings db');
    console.log(err);
  });

const rootReducer = combineReducers({
  language: langReducer,
  words: wordsReducer,
  theme: themeReducer,
  refresh: refreshReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
  });
};

//! screenshot banned of some screens; copy texts is available from list od words by filter
//! git ignore, implement .env and encrypt data

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
