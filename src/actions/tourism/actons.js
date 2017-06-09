import { firebaseRef } from '../../firebase';

import * as types from '../../constants/ActionTypes';

export const fetchTourismsRequest = () => ({ type: types.FETCH_TOURISMS_REQUEST });
export const fetchTourismsSuccess = payload => ({ type: types.FETCH_TOURISMS_SUCCESS, payload });
export const fetchTourismsFailure = payload => ({ type: types.FETCH_TOURISMS_FAILURE, payload });

export const selectTourism = payload => ({ type: types.SELECT_TOURISM, payload });

export const fetchTourismRequest = () => ({ type: types.FETCH_TOURISM_REQUEST });
export const fetchTourismSuccess = payload => ({ type: types.FETCH_TOURISM_SUCCESS, payload });
export const fetchTourismFailure = payload => ({ type: types.FETCH_TOURISM_FAILURE, payload });

export const startFetchTourisms = () => {
  return dispatch => {
    dispatch(fetchTourismsRequest());

    firebaseRef.child('tourism').once('value')
      .then(snapshot => dispatch(fetchTourismsSuccess(snapshot.val())))
      .catch(() => dispatch(fetchTourismsFailure('Ha ocurrido un error!.')));
  };
};

export const startFetchTourismById = id => {
  return (dispatch, getState) => {
    const { notices: { entities } } = getState();
    dispatch(selectTourism(id));
    if (Object.is(entities[id])) {
      dispatch(fetchTourismRequest());

      firebaseRef.child(`tourism/${id}`).once('value')
        .then(snapshot => dispatch(fetchTourismSuccess(snapshot.val())))
        .catch(() => dispatch(fetchTourismFailure('Ha ocurrido un error!')));
    }
  };
};
