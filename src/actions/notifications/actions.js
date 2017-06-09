import { firebaseRef } from '../../firebase';

import * as types from '../../constants/ActionTypes';

export const fetchNotificationsRequest = () => ({ type: types.FETCH_NOTIFICATION_REQUEST });
export const fetchNotificationsSucces = payload => ({ type: types.FETCH_NOTIFICATION_SUCCESS, payload });
export const fetchNotificationsFailure = payload => ({ type: types.FETCH_NOTIFICATION_FAILURE, payload });

export const startFetchNotifications = () => {
  return dispatch => {
    dispatch(fetchNotificationsRequest());

    firebaseRef.child('aviso').once('value')
      .then(snapshot => dispatch(fetchNotificationsSucces(snapshot.val())))
      .catch(() => dispatch(fetchNotificationsFailure('Ha ocurrido un error')));
  };
};
