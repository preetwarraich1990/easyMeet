import { createReducer } from '../../../../utils/reducerUtil';
import { sidebar } from './types';

/**
 * * @initialState
 */
const initialState = {
    leftSidebar: false,
    rightSidebar: false,
    autoHide: true
};

/**
 *
 * @param {*} state
 * @param {*} payload
 */
export const setLeftSidebar = (state, payload) => {
    return {
        ...state,
        leftSidebar: payload
    };
};

/**
 *
 * @param {*} state
 * @param {*} payload
 */
export const setRightSidebar = (state, payload) => {
    return {
        ...state,
        rightSidebar: payload
    };
};

export const toggleAutoHide = state => {
    return {
        ...state,
        autoHide: !state.autoHide
    };
};

export default createReducer(initialState, {
    [sidebar.LEFT_SIDEBAR]: setLeftSidebar,
    [sidebar.RIGHT_SIDEBAR]: setRightSidebar,
    [sidebar.TOGGLE_AUTO_HIDE]: toggleAutoHide
});
