import { LANG } from '../actions/lang';

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
  language: 'en',
};

const langReducer = (state = initialState, action) => {
  return state;
};

export default langReducer;
