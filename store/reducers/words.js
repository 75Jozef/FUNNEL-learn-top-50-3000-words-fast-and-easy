import WORDS from '../../data/words';

const initialState = {
  words: WORDS,
  //   v: WORDS.filter((word) => word.userlvl === 'v'),
  //   n: WORDS.filter((word) => word.userlvl === 'n'),
  //   a: WORDS.filter((word) => word.userlvl === 'a'),
  //   h: WORDS.filter((word) => word.userlvl === 'h'),
  //   f: WORDS.filter((word) => word.userlvl === 'f'),
  //   t: WORDS.filter((word) => word.userlvl === 't'),
  //   x: WORDS.filter((word) => word.userlvl === 'x'),
};

export default (state = initialState, action) => {
  return state;
};
