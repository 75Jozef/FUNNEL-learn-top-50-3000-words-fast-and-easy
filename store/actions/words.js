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
        loadedUserStatuses.push(statuses[key].idlng, statuses[key].status);
      }

      console.log(loadedUserStatuses, 'loaded user statuses');

      dispatch({
        type: SET_STATUSES,
        statuses: loadedUserStatuses,
      });
    } catch (err) {
      throw err;
    }
  };
};
