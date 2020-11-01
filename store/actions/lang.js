export const SET_LNG_FRST = 'SET_LNG_FRST';
export const SET_LNG_SCND = 'SET_LNG_SCND';

export const setLngFrst = (lngfrst) => {
  return { type: SET_LNG_FRST, lngfrst: lngfrst };
};

export const setLngScnd = (lngscnd) => {
  return { type: SET_LNG_SCND, lngscnd: lngscnd };
};
