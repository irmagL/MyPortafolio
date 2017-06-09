import { firebaseRef } from '../../firebase';

import * as types from '../../constants/ActionTypes';

export const fetchNoticesRequest = () => ({ type: types.FETCH_NOTICES_REQUEST });
export const fetchNoticesSuccess = payload => ({ type: types.FETCH_NOTICES_SUCCESS, payload });
export const fetchNoticesFailure = payload => ({ type: types.FETCH_NOTICES_FAILURE, payload });

export const selectNotice = payload => ({ type: types.SELECT_NOTICE, payload });

export const fetchNoticeRequest = () => ({ type: types.FETCH_NOTICE_REQUEST });
export const fetchNoticeSuccess = payload => ({ type: types.FETCH_NOTICE_SUCCESS, payload });
export const fetchNoticeFailure = payload => ({ type: types.FETCH_NOTICE_FAILURE, payload });

export const startFetchNotices = () => {
  return dispatch => {
    dispatch(fetchNoticesRequest());

    firebaseRef.child('notices').once('value')
      .then(snapshot => dispatch(fetchNoticesSuccess(snapshot.val())))
      .catch(() => dispatch(fetchNoticesFailure('Ha ocurrido un error!.')));
  };
};

export const startFetchNoticeById = id => {
  return (dispatch, getState) => {
    const { notices: { entities } } = getState();
    dispatch(selectNotice(id));
    if (Object.is(entities[id])) {
      dispatch(fetchNoticeRequest());

      firebaseRef.child(`notices/${id}`).once('value')
        .then(snapshot => dispatch(fetchNoticeSuccess(snapshot.val())))
        .catch(() => dispatch(fetchNoticeFailure('Ha ocurrido un error!')));
    }
  };
};
