import { combineReducers } from 'redux';
import userReducer from '../User/reducer';
import utilReducer from '../utils/reducer';

export default combineReducers({
  user: userReducer,
  util: utilReducer
});
