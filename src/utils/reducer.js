import {
  SET_LOADING,
  ADD_ERROR,
  REMOVE_ERROR,
  REMOVE_LOADING
} from '../utils/constants';
const InitialState = {
  err: null,
  loading: true
};

function utilReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_ERROR:
      return {
        ...state,
        err: action.err
      };
    case REMOVE_ERROR:
      return {
        ...state,
        err: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export default utilReducer;
