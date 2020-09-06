import { createReducer } from '../../utils/reducerUtil';
import { meeting } from './types';

const initState = {
    meeter_spinner: false,
    meeter_data: null,
    meeter_error: null
};


/**
 * @setSpinner
 * @param state
 * @param payload
 * @returns {{spinner: boolean}}
 */
export const setSpinner = (state, payload) => ({
    ...state,
    meeter_spinner: payload,
    meeter_spinner: true
});

/**
 *
 * @param state
 * @param payload
 * @returns {{meeter_data: *, meeter_spinner: boolean}}
 */
export const setMeeterData = (state, payload) => ({
    ...state,
    meeter_data: payload,
    meeter_spinner: false
});

/**
 *
 * @param state
 * @param payload
 * @returns {{meeter_error: *, meeter_spinner: boolean}}
 */
export const setMeeterFailed = (state, payload) => ({
    ...state,
    meeter_spinner: false,
    meeter_error: payload
});

export default createReducer(initState, {
    [meeting.GET_METER_DATA_INIT]: setSpinner,
    [meeting.GET_METER_DATA_SUCCESS]: setMeeterData,
    [meeting.GET_METER_DATA_FAILED]: setMeeterFailed,
});
