import React, { useState } from 'react';

import AppNavigator from './navigation/AppNavigator';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import langReducer from './store/reducers/lang';
import wordsReducer from './store/reducers/words';
import themeReducer from './store/reducers/theme';

import { initStatuses, initSettings } from './localDb/db';

initStatuses()
  .then(() => {})
  .catch((err) => {});

initSettings()
  .then(() => {})
  .catch((err) => {});

const rootReducer = combineReducers({
  language: langReducer,
  words: wordsReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
  });
};

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
