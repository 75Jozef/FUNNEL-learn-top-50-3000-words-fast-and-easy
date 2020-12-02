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
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LNG: {
      const lngfrst = action.lngfrst;
      const lngscnd = action.lngscnd;
      return {
        ...state,
        lngfrst: lngfrst,
        lngscnd: lngscnd,
      };
    }
  }
  return state;
};

export default langReducer;
