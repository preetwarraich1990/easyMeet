import { combineReducers } from 'redux';
import colors from './colors/reducer';
import sidebar from './sidebars/reducer';

export default combineReducers({
    colors,
    sidebar
});
