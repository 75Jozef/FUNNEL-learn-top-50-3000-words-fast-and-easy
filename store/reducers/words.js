import WORDS from '../../data/words';
import { RESET_STATUSES, SET_STATUS, SET_STATUSES } from './../actions/words';

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
    case RESET_STATUSES: {
      console.log('reset statuses words');
      return {
        words: WORDS,
      };
    }
    case SET_STATUSES: {
      const statuses = action.loadedStatuses;
      const updatedWords = [...state.words];

      for (const key in statuses) {
        let index = parseInt(statuses[key].idlng.slice(0, -2));
        let status = statuses[key].status;
        let lngscnd = statuses[key].idlng.slice(-2);
        updatedWords[index]['st' + lngscnd] = status;
      }

      return {
        ...state,
        words: updatedWords,
      };
    }
  }

  return state;
};
