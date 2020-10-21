import WORDS from '../../data/words';
import { SET_STATUS } from './../actions/words';

const initialState = {
  words: WORDS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      const iden = action.data.iden;
      const status = action.data.status;
      const lng = action.data.lng;

      let index = state.words.findIndex((item) => item.iden === iden);

      const updatedWords = [...state.words];
      updatedWords[index]['st' + lng] = status;

      return {
        ...state,
        words: updatedWords,
      };
    }
  }
  return state;
};
