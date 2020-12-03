import { insertSettings, loadSettings, deleteSettings } from '../../localDb/db';

export const SET_LNG = 'SET_LNG';
export const SET_THEME = 'SET_THEME';

export const loadSettingsFromDb = () => {
  return async (dispatch) => {
    try {
      const dbResult = await loadSettings();
      const settings = dbResult.rows._array;

      for (const key in settings) {
        let lngfrst = settings[key].lngfrst;
        let lngscnd = settings[key].lngscnd;
        let theme = settings[key].theme;

        await dispatch({
          type: SET_LNG,
          lngfrst: lngfrst,
          lngscnd: lngscnd,
        });
        await dispatch({
          type: SET_THEME,
          theme: theme,
        });
      }
    } catch (err) {
      throw err;
    }
  };
};

export const setLng = (lngfrst, lngscnd, theme) => {
  return async (dispatch) => {
    try {
      await deleteSettings();
      insertSettings(1, lngfrst, lngscnd, theme);
      dispatch({
        type: SET_LNG,
        lngfrst: lngfrst,
        lngscnd: lngscnd,
      });
    } catch (err) {
      throw err;
    }
  };
};
