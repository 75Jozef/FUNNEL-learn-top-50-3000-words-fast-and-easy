import {
  insertStatus,
  loadStatuses,
  deleteZeroStatuses,
  deleteAll,
} from '../../localDb/db';

export const LANG = 'LANG';
export const SET_STATUS = 'SET_STATUS';
export const RESET_STATUSES = 'SET_STATUSES';

export const lang = (lng) => {
  return { type: LANG, language: lng };
};

export const setStatus = (index, status, lngscnd) => {
  return async (dispatch) => {
    let idlng = index.toString() + lngscnd;

    try {
      await insertStatus(idlng, status).then(() =>
        dispatch({
          type: SET_STATUS,
          data: { iden: index, status: status, lng: lngscnd },
        })
      );
    } catch (err) {
      throw err;
    }
  };
};

export const loadStatusesFromDb = () => {
  return async (dispatch) => {
    // const userId = getState().auth.userId;

    try {
      const dbResult = await deleteZeroStatuses().then(
        async () => await loadStatuses()
      );
      const statuses = dbResult.rows._array;

      for (const key in statuses) {
        let index = parseInt(statuses[key].idlng.slice(0, -2));
        let status = statuses[key].status;
        let lngscnd = statuses[key].idlng.slice(-2);

        await dispatch({
          type: SET_STATUS,
          data: { iden: index, status: status, lng: lngscnd },
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
      await dispatch({
        type: RESET_STATUSES,
      });
      await deleteAll();
    } catch (err) {
      throw err;
    }
  };
};
