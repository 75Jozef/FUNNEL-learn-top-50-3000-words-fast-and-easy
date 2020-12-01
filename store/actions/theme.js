import { insertSettings } from '../../localDb/db';
export const THEME = 'THEME';

export const theme = (lngfrst, lngscnd, theme) => {
  return async (dispatch) => {
    try {
      await insertSettings(1, lngfrst, lngscnd, theme).then(() =>
        dispatch({
          type: THEME,
          theme: theme,
        })
      );
    } catch (err) {
      throw err;
    }
  };
};
