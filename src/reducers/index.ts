/* Import combine reducers */
import { combineReducers } from 'redux';

/* Import reducers */
import userReducer from './user.reducer';
import userErrorReducer from './user.error.reducer';

export default combineReducers({
    userReducer,
    userErrorReducer
});