import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    AUTH_SPINNING
} from './types';
import { gpAxios } from '~/utils/gpAxios';
import { apiPaths } from '../../utils/apiPaths';
import { setUserToken } from '../../utils/gpAxios';

/**
 *
 * @param data
 * @returns {{payload: *, type: string}}
 */
export const authSpinner = data => {
    return {
        type: AUTH_SPINNING,
        payload: data
    };
};

/**
 *
 * @param email
 * @param password
 * @param history
 * @returns {function(...[*]=)}
 */
export const loginUser = (email, password, history = null) => async dispatch => {
    dispatch(authSpinner(true));
    const data = {
        email: email,
        password: password,
        device_token: 'dfsdfhsfhkdddssjsdfh'
    };
    try {
        const response = await gpAxios.post('/login', data);
        dispatch(authSpinner(false));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: response.data.data.result.auth_user_token,
                user: response.data.data.result
            }
        });

        if (history !== null) {
            history.push('/');
        }
    } catch (error) {
        dispatch(authSpinner(false));
        dispatch({
            type: LOGIN_FAILED
        });
    }
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
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: { token: response.data.data.result.auth_user_token, user: response.data.data.result }
                });
                setUserToken(response.data.data.result.auth_user_token);
                history.push('/onboarding-one');
            }

            dispatch(authSpinner(false));
        })
        .catch(e => {
            dispatch(authSpinner(false));
            dispatch({ type: REGISTER_FAILED });
        });
};

// export const loadUser = () => async dispatch => {
//     setAuthToken(localStorage.getItem('token'));
//     try {
//         const res = await service.get('/users/me');
//         dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         });
//     } catch (e) {
//         dispatch({
//             type: AUTH_ERROR
//         });
//     }
// };

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
};
