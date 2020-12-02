import {
  insertStatus,
  loadStatuses,
  deleteZeroStatuses,
  deleteAll,
  deleteSettings,
} from '../../localDb/db';

export const LANG = 'LANG';
export const SET_STATUS = 'SET_STATUS';
export const SET_STATUSES = 'SET_STATUSES';
export const RESET_STATUSES = 'RESET_STATUSES';

export const lang = (lng) => {
  return { type: LANG, language: lng };
};

export const setStatus = (index, status, lngscnd) => {
  return async (dispatch) => {
    let idlng = index.toString() + lngscnd;
    try {
      await insertStatus(idlng, status);
      dispatch({
        type: SET_STATUS,
        data: { iden: index, status: status, lng: lngscnd },
      });
    } catch (err) {
      throw err;
    }
  };
};

export const loadStatusesFromDb = () => {
  return async (dispatch) => {
    try {
      const del = await deleteZeroStatuses();
      console.log('del', del);
      const dbResult = await loadStatuses();
      console.log('loaded statuses', dbResult);
      const statuses = dbResult.rows._array;
      if (statuses.length > 0) {
        await dispatch({
          type: SET_STATUSES,
          loadedStatuses: statuses,
        });
      }
    } catch (err) {
      throw err;
    }
  };
};

export const resetStatuses = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: RESET_STATUSES,
      });
      await deleteAll();
      await deleteSettings();
    } catch (err) {
      throw err;
    }
  };
};
