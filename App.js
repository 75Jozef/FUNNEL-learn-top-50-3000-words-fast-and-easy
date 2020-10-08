import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// import { init } from './localDb/db'
// init()
//   .then(() => {
//     console.log('initialized db OK');
//   })
//   .catch((err) => {
//     console.log('failed to open db');
//     console.log(err);
//   });

// import { composeWithDevTools } from 'redux-devtools-extension';

// !!!implement dotenv .env dependency to make app safer; store there keys...

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

// import ReduxThunk from 'redux-thunk';

// const rootReducer = combineReducers({
  
// });

// // const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
    // <Provider store={store}>
      <AppNavigator />
    // </Provider>
  );
}
