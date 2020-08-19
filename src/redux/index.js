import { combineReducers } from 'redux';
import auth from './reducers/auth';
import gui from './reducers/gui';

import { user } from './reducers/user';

export default combineReducers({
    auth,
    gui,
    user
});
