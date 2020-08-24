import { gpAxios, setUserToken } from '../../utils/gpAxios';
import { apiPaths } from '../../utils/apiPaths';
import { AUTHENTICATION } from './constant';
import { LOGIN_SUCCESS } from '../../actions/types';

/**
 *
 * @param {*} isSpin
 */
export const authSpinner = isSpin => {
    return {
        type: AUTHENTICATION.SPINNER,
        payload: isSpin
    };
};

/**
 *
 * @param {*} isSpin
 */
export const setMeeterSlug = slug => {
    return {
        type: AUTHENTICATION.SET_MEETER_SLUG,
        payload: slug
    };
};

/**
 *
 * @param {*} data
 */
export const signUpRequest = (data, history) => dispatch => {
    dispatch(authSpinner(true));
    gpAxios
        .post(apiPaths.user_management.signUp, data)
        .then(response => {
            if (response.data.status) {
                // localStorage.setItem('user_token', response.data.data.result.auth_user_token);
                localStorage.setItem('meeter_slug', response.data.data.result.meeter_meet_slug);
                dispatch({ type: LOGIN_SUCCESS, payload: { token: response.data.data.result.auth_user_token } });
                setUserToken(response.data.data.result.auth_user_token);
                localStorage.setItem('auth', true);
                history.push('/onBoarding-one');
            }

            dispatch(authSpinner(false));
        })
        .catch(e => {
            dispatch(authSpinner(false));
        });
};
