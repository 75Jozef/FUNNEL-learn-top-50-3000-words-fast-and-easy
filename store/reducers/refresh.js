import { REFRESH } from '../actions/refresh';

const initialState = {
  refresh: false,
};

const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH: {
      let refresh = action.refresh;
      return {
        ...state,
        refresh: !refresh,
      };
    }
  }

  return state;
};

export default refreshReducer;
