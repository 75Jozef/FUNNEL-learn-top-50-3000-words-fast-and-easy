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
    'it',
    'pa',
    'jv',
    'th',
    'pl',
    'fa',
    'ur',
    'uk',
    'ro',
    'nl',
    'sr',
    'hr',
    'hu',
    'el',
    'cs',
    'sv',
    'be',
    'fi',
    'da',
    'cn',
    'es',
    'ar',
    'pt',
    'id',
    'ms',
    'fr',
    'ru',
    'de',
    'ja',
    'hi',
    'bn',
    'tr',
    'mr',
    'ko',
    'vi',
    'ta',
    'sk',
    'af',
    'lv',
    'eo',
    'et',
    'bg',
  ],
  languagesSecond: [
    'en',
    'it',
    'pa',
    'jv',
    'th',
    'pl',
    'fa',
    'ur',
    'uk',
    'ro',
    'nl',
    'sr',
    'hr',
    'hu',
    'el',
    'cs',
    'sv',
    'be',
    'fi',
    'da',
    'cn',
    'es',
    'ar',
    'pt',
    'id',
    'ms',
    'fr',
    'ru',
    'de',
    'ja',
    'hi',
    'bn',
    'tr',
    'mr',
    'ko',
    'vi',
    'ta',
    'sk',
    'af',
    'lv',
    'eo',
    'et',
    'bg',
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
