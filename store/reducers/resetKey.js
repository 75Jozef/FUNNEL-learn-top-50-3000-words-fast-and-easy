import { RESETKEY } from '../actions/resetKey';

const initialState = {
  key: '',
};

const resetKeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESETKEY: {
      return {
        ...state,
        key: action.key,
      };
    }
  }
  return state;
};

export default resetKeyReducer;
