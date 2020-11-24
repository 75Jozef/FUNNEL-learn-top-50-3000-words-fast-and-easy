import { insertStatus, loadStatuses } from '../../localDb/db';

export const LANG = 'LANG';
export const SET_STATUS = 'SET_STATUS';
export const SET_STATUSES = 'SET_STATUSES';

export const lang = (lng) => {
  return { type: LANG, language: lng };
};

// export const setStatus = (index, status, lngscnd) => {
//   return {
//     type: SET_STATUS,
//     data: { iden: index, status: status, lng: lngscnd },
//   };
// };

export const setStatus = (index, status, lngscnd) => {
  return async (dispatch) => {
    let idlng = index.toString() + lngscnd;
    console.log(idlng);

    try {
      const dbResult = await insertStatus(idlng, status);

      console.log(dbResult, 'adding user status');

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
    // const userId = getState().auth.userId;
    const loadedUserStatuses = [];
    try {
      const dbResult = await loadStatuses();
      console.log(dbResult);
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
