import { SET_LNG_FRST } from '../actions/lang';
import { SET_LNG_SCND } from '../actions/lang';

import { NativeModules, Platform } from 'react-native';

// let deviceLanguage =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale.slice(0, 1)
//     : NativeModules.I18nManager.localeIdentifier.slice(0, 1);

// if (deviceLanguage === undefined) {
//   // iOS 13 workaround, take first of AppleLanguages array
//   deviceLanguage = NativeModules.SettingsManager.settings.AppleLanguages[0].slice(
//     0,
//     1
//   );
//   if (deviceLanguage == undefined) {
//     deviceLanguage = 'en';
//   }
// }

const initialState = {
  lngfrst: 'sk',
  lngscnd: 'en',
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LNG_FRST: {
      const lngfrst = action.lngfrst;
      return {
        ...state,
        lngfrst: lngfrst,
      };
    }
    case SET_LNG_SCND: {
      const lngscnd = action.lngscnd;
      return {
        ...state,
        lngscnd: lngscnd,
      };
    }
  }

  return state;
};

export default langReducer;
