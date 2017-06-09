import { firebaseRef } from '../../firebase';

import * as types from '../../constants/ActionTypes';

export const fetchWorksRequest = () => ({ type: types.FETCH_WORKS_REQUEST });
export const fetchWorksSuccess = payload => ({ type: types.FETCH_WORKS_SUCCESS, payload });
export const fetchWorksFailure = payload => ({ type: types.FETCH_WORKS_FAILURE, payload });

export const selectWork = payload => ({ type: types.SELECT_WORK, payload });

export const fetchWorkRequest = () => ({ type: types.FETCH_WORK_REQUEST });
export const fetchWorkSuccess = payload => ({ type: types.FETCH_WORK_SUCCESS, payload });
export const fetchWorkFailure = payload => ({ type: types.FETCH_WORK_FAILURE, payload });

export const startFetchWorks = () => {
  return dispatch => {
    dispatch(fetchWorksRequest());

    firebaseRef.child('works').once('value')
      .then(snapshot => dispatch(fetchWorksSuccess(snapshot.val())))
      .catch(() => dispatch(fetchWorksFailure('Ha ocurrido un error!.')));
  };
};

export const startFetchWorkById = id => {
  return (dispatch, getState) => {
    const { notices: { entities } } = getState();
    dispatch(selectWork(id));
    if (Object.is(entities[id])) {
      dispatch(fetchWorkRequest());

      firebaseRef.child(`works/${id}`).once('value')
        .then(snapshot => dispatch(fetchWorkSuccess(snapshot.val())))
        .catch(() => dispatch(fetchWorkFailure('Ha ocurrido un error!')));
    }
  };
};
