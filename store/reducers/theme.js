import { THEME } from '../actions/theme';
import { SET_THEME } from '../actions/lang';

import ColorsDark from './../../constants/ColorsDark';
import ColorsLight from './../../constants/ColorsLight';
import Colors from './../../constants/Colors';

const initialState = {
  theme: 'dark',
};

const themeReducer = (state = initialState, action) => {
  let theme = {};
  switch (action.type) {
    case THEME: {
      if (action.theme === 'dark') {
        theme = ColorsDark;
        for (let [key, value] of Object.entries(theme)) {
          Colors[key] = value;
        }
      } else if (action.theme === 'light') {
        theme = ColorsLight;
        for (let [key, value] of Object.entries(theme)) {
          Colors[key] = value;
        }
      }
      return {
        ...state,
        theme: action.theme,
      };
    }
    case SET_THEME: {
      if (action.theme === 'dark') {
        theme = ColorsDark;
        for (let [key, value] of Object.entries(theme)) {
          Colors[key] = value;
        }
      } else if (action.theme === 'light') {
        theme = ColorsLight;
        for (let [key, value] of Object.entries(theme)) {
          Colors[key] = value;
        }
      }
      return {
        ...state,
        theme: action.theme,
      };
    }
  }

  return state;
};

export default themeReducer;
