import * as types from '../../constants/ActionTypes';
import DarkSkyApi from 'dark-sky-api';

export const fetchWeatherRequest = () => ({ type: types.FETCH_WEATHER_REQUEST });
export const fetchWeatherSuccess = payload => ({ type: types.FETCH_WEATHER_SUCCESS, payload });
export const fetchWeatherFailure = payload => ({ type: types.FETCH_WEATHER_FAILURE, payload });
DarkSkyApi.apiKey = '1f04b1b6b21925ad4767047dcbe2144b';

export const startFetchWeather = () => {
  return dispatch => {
    dispatch(fetchWeatherRequest());
    const position = {
  latitude: 17.018365,
  longitude: -97.769769
};

DarkSkyApi.loadCurrent(position)
.then(result => dispatch(fetchWeatherSuccess(result)))
.catch(() => dispatch(fetchWeatherFailure('Ha ocurrido un error!')));
  };
};
