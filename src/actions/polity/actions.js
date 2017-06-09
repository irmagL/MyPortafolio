import { firebaseRef } from '../../firebase';

import * as types from '../../constants/ActionTypes';

export const fetchPolityRequest = () => ({ type: types.FETCH_POLITY_REQUEST });
export const fetchPolitySuccess = payload => ({ type: types.FETCH_POLITY_SUCCESS, payload });
export const fetchPolityFailure = payload => ({ type: types.FETCH_POLITY_FAILURE, payload });

export const startFetchPolity = () => {
  return dispatch => {
    dispatch(fetchPolityRequest());

    firebaseRef.child('polity').once('value')
      .then(snapshot => dispatch(fetchPolitySuccess(snapshot.val())))
      .catch(() => dispatch(fetchPolityFailure('Ha ocurrido un error!.')));
  };
};
