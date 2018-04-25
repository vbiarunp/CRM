import { combineReducers } from 'redux';
import staffReducer from './staffReducer';
import statusReducer from './statusReducer';

export default combineReducers({
    staff: staffReducer,
    statusMessage: statusReducer
});