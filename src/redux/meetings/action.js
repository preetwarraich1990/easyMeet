import { apiPaths } from '../../utils/apiPaths';
import { gpAxios } from '../../utils/gpAxios';
import { meeting } from './types'

/**
 *
 * @param data
 * @returns {{payload: *, type: string}}
 */
const setMeeterData = (data) => {
    return {
        type: meeting.GET_METER_DATA_SUCCESS,
        payload: data
    }
}

/**
 *
 * @param meeter_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const getMeeterData = meeter_slug => async dispatch => {
    dispatch({
         type: meeting.GET_METER_DATA_INIT
    })
    try {
        const meeterData = await gpAxios.get(`${apiPaths.user_management.get_meeter_from_slug}${meeter_slug}`);
        console.log(meeterData);
        dispatch(setMeeterData(meeterData.data.data.result))
    } catch (e) {
        dispatch({
            type: meeting.GET_METER_DATA_FAILED
        })
    }

};


/**
 *
 * @param meeter_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const meetingRequest = (data, history) => async dispatch => {   
    const meeterData = await gpAxios.post(apiPaths.get_meeting_request_url, data);
    return meeterData; 
};


/**
 *
 * @param meeter_id
 * @returns {function(*): Promise<AxiosResponse<any>>}
 */
export const getMeetingList = () => async dispatch => {   
    const meeterList = await gpAxios.get(apiPaths.get_meeting_list);
    return meeterList; 
};
