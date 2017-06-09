import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: null,
  error: null,
  entities: {},
  allIds: [],
  selectedKey: null
};

const faunaReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_FAUNA_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.FETCH_FAUNA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.payload,
        allIds: Object.keys(action.payload).map(x => x)
      };
    case types.FETCH_FAUNA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      case types.FETCH_ONEFAUNA_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case types.FETCH_ONEFAUNA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          entities: {
            ...state.entities,
            [action.payload.id]: action.payload
          },
          allIds: state.allIds.concat(action.payload.id)
        };
      case types.FETCH_ONEFAUNA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case types.SELECT_FAUNA:
        return {
          ...state,
          selectedKey: action.payload
        };
    default:
      return state;
  }
};

export default faunaReducer;
