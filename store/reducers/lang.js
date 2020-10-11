import { LANG } from '../actions/lang';

import { NativeModules, Platform } from 'react-native';

let deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

if (deviceLanguage === undefined) {
  // iOS 13 workaround, take first of AppleLanguages array
  deviceLanguage = NativeModules.SettingsManager.settings.AppleLanguages[0];
  if (deviceLanguage == undefined) {
    deviceLanguage = 'en_US';
  }
}

const initialState = {
  language: deviceLanguage,
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG: {
      return {
        language: action.language,
      };
    }
  }

  return state;
};

export default langReducer;
