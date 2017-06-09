import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: null,
  error: null,
  data: {}
};

const polityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POLITY_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.FETCH_POLITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.FETCH_POLITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default polityReducer;
