import { createReducer } from '../../../../utils/reducerUtil';
import { colors } from './types';

/**
 * * @initialState
 */
const initialState = {
    mainColor: '#1C3F53',
    textColor: '#707070',
    hoverColor: '#707070'
};

/**
 *
 * @param {*} state
 * @param {*} payload
 */
export const setMainColor = (state, payload) => {
    return {
        ...state,
        mainColor: payload,
    };
};

/**
 *
 * @param {*} state
 * @param {*} payload
 */
export const setTextColor = (state, payload) => {
    return {
        ...state,
        textColor: payload,
    };
};
/**
 *
 * @param state
 * @param payload
 * @returns {{hoverColor: *}}
 */
export const setHover = (state, payload) => {
    return {
        ...state,
        hoverColor: payload,
    };
};


export default createReducer(initialState, {
    [colors.MAIN]: setMainColor,
    [colors.TEXT]: setTextColor,
    [colors.HOVER]: setHover
});
