import { combineReducers } from 'redux';
import loginReducer from './loginReducer.js';
import profileReducer from './profileReducer.js';

export default combineReducers({
	loginReducer,
	profileReducer,
});
