import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  error: null,
  entities: {},
  allIds: [],
  selectedKey: null
};

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WORKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.FETCH_WORKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: action.payload,
        allIds: Object.keys(action.payload).map(x => x)
      };
    case types.FETCH_WORKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case types.SELECT_WORK:
      return {
        ...state,
        selectedKey: action.payload
      };
    case types.FETCH_WORK_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.FETCH_WORK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload
        },
        allIds: state.allIds.concat(action.payload.id)
      };
    case types.FETCH_WORK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default worksReducer;
