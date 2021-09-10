/* Import combine reducers */
import { combineReducers } from 'redux';

/* Import reducers */
import userReducer from './user.reducer';

export default combineReducers({
    userReducer,
});