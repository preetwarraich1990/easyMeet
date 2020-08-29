import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from '../../actions/types';

const initialState = {
    token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : null,
    isAuthenticated: localStorage.getItem('token') !== null,
    loading: true,
    user: localStorage.getItem('userInfo') !== null ? localStorage.getItem('userInfo') : null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);

            return {
                ...state,
                ...payload,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            };

        case REGISTER_FAILED:
        case LOGIN_FAILED:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('auth');
            localStorage.removeItem('user_token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };

        default:
            return state;
    }
};
