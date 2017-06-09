import * as types from '../../constants/ActionTypes';
import moment from 'moment';

export const dateRequest = () => ({ type: types.DATE_REQUEST });
export const dateSuccess = payload => ({ type: types.DATE_SUCCESS, payload });
export const dateFailure = payload => ({ type: types.DATE_FAILURE, payload });
export const dateUpdate = payload => ({ type: types.DATE_UPDATE, payload });

const getDate = date => ({
  hour: date.format("hh"),
  minutes: date.format("mm"),
  meridiem: date.format("a"),
  month: date.format("MMMM"),
  day: date.format("DD"),
  year: date.format("YYYY")
});

export const startDate = () => {
  return dispatch => {
    dispatch(dateRequest());
    let date = moment().locale('es');
    dispatch(dateSuccess(getDate(date)));
    setInterval(() => {
      let date = moment().locale('es');
      dispatch(dateSuccess(getDate(date)));
    }, 3000);
  };
};
