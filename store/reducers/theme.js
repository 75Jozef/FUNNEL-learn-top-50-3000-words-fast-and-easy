import { THEME } from '../actions/theme';

const initialState = {
  theme: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME: {
      return {
        ...state,
        theme: !state.theme,
      };
    }
  }

  return state;
};

export default themeReducer;
