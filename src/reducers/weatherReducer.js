import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: null,
  error: null,
  entities: {}
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.payload
      };
    case types.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
