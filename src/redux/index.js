import { combineReducers } from 'redux';

import auth from './auth/reducer';
import meeting from './meetings/reducer';
import { user } from './user';

export default combineReducers({
    auth,
    user,
    meeting
});
