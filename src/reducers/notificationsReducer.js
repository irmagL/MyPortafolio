import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching:null,
  error: null,
  entities: {},
  selectedKey: null
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NOTIFICATION_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.payload
      };
    case types.FETCH_NOTIFICATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default notificationsReducer;
