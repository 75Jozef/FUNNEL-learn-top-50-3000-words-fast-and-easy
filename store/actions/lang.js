export const SET_LNG_FRST = 'SET_LNG_FRST';
export const SET_LNG_SCND = 'SET_LNG_SCND';

export const setLngFrst = (lngfrst, lngscnd) => {
  return { type: SET_LNG_FRST, lngfrst: lngfrst, lngscnd: lngscnd };
};

export const setLngScnd = (lngfrst, lngscnd) => {
  return { type: SET_LNG_SCND, lngfrst: lngfrst, lngscnd: lngscnd };
};
