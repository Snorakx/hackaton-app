import { combineReducers } from 'redux';
import userReducer from './user/userReducer';


export default combineReducers({
  movies: userReducer,
});