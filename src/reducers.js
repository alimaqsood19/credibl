import { combineReducers } from 'redux';
import userReducer from './Fornite/reducer';

export default combineReducers({
  user: userReducer
});
