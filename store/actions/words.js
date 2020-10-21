export const LANG = 'LANG';
export const SET_STATUS = 'SET_STATUS';

export const lang = (lng) => {
  return { type: LANG, language: lng };
};

export const setStatus = (index, status, lng) => {
  return { type: SET_STATUS, data: { iden: index, status: status, lng: lng } };
};
