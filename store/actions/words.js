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
    console.log(idlng);

    try {
      const dbResult = await insertStatus(idlng, status);
      dispatch({
        type: SET_STATUS,
        data: { iden: index, status: status, lng: lngscnd },
      });
      console.log(await loadStatuses());
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
        console.log('ready to dispatch:', index, status, lngscnd);
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
      console.log('deleted all rows');

      console.log(await loadStatuses());
    } catch (err) {
      throw err;
    }
  };
};
