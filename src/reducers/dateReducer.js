import * as types from '../constants/ActionTypes';

const initialState = {
  isReady: null,
  info: {},
  error: null
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATE_REQUEST:
      return {
        ...state,
        isReady: false,
        error: null
      };
    case types.DATE_SUCCESS:
      return {
        ...state,
        isReady: true,
        info: action.payload
      };
    case types.DATE_UPDATE:
      return {
        ...state,
        info: action.payload
      };
    case types.DATE_FAILURE:
      return {
        ...state,
        isReady: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dateReducer;
