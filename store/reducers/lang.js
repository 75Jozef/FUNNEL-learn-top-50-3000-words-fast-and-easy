import { SET_LNG } from '../actions/lang';

import { NativeModules } from 'react-native';

let deviceLanguage = NativeModules.I18nManager.localeIdentifier.slice(0, 2);

if (deviceLanguage == undefined) {
  deviceLanguage = 'en';
}

const lngfrst = deviceLanguage;
const lngscnd = 'en';

const initialState = {
  lngfrst: lngfrst,
  lngscnd: lngscnd,
  languagesFirst: [
    'en',
    'cn',
    'es',
    'pt',
    'ru',
    'uk',
    'de',
    'fr',
    'it',
    'ar',
    'ja',
    'tr',
    'fa',
    'ko',
    'vi',
    'id',
    'th',
    'hi',
    'el',
    'sv',
    'fi',
    'da',
    'nl',
    'ro',
    'bg',
    'pl',
    'hr',
    'sr',
    'hu',
    'cs',
    'sk',
    'lv',
    'et',
    'be',
    'pa',
    'bn',
    'ur',
    'jv',
    'ta',
    'ms',
    'af',
    'mr',
    'eo',
  ],
  languagesSecond: [
    'en',
    'cn',
    'es',
    'pt',
    'ru',
    'uk',
    'de',
    'fr',
    'it',
    'ar',
    'ja',
    'tr',
    'fa',
    'ko',
    'vi',
    'id',
    'th',
    'hi',
    'el',
    'sv',
    'fi',
    'da',
    'nl',
    'ro',
    'bg',
    'pl',
    'hr',
    'sr',
    'hu',
    'cs',
    'sk',
    'lv',
    'et',
    'be',
    'pa',
    'bn',
    'ur',
    'jv',
    'ta',
    'ms',
    'af',
    'mr',
    'eo',
  ],
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LNG: {
      const lngfrst = action.lngfrst;
      const lngscnd = action.lngscnd;

      let indexFirst = state.languagesFirst.indexOf(lngfrst);
      let indexSecond = state.languagesSecond.indexOf(lngscnd);

      const updatedLanguagesFirst = [...state.languagesFirst];
      const updatedLanguagesSecond = [...state.languagesSecond];

      [updatedLanguagesFirst[0], updatedLanguagesFirst[indexFirst]] = [
        updatedLanguagesFirst[indexFirst],
        updatedLanguagesFirst[0],
      ];

      [updatedLanguagesSecond[0], updatedLanguagesSecond[indexSecond]] = [
        updatedLanguagesSecond[indexSecond],
        updatedLanguagesSecond[0],
      ];

      return {
        ...state,
        lngfrst: lngfrst,
        lngscnd: lngscnd,
        languagesFirst: updatedLanguagesFirst,
        languagesSecond: updatedLanguagesSecond,
      };
    }
  }
  return state;
};

export default langReducer;
