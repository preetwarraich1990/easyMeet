import {
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    LOGOUT,
    AUTH_SPINNING
} from './types';

const initialState = {
    token: localStorage.getItem('token') !== null ? localStorage.getItem('token') : null,
    isAuthenticated: localStorage.getItem('token') !== null,
    loading: false,
    user: localStorage.getItem('userInfo') !== null ? JSON.parse(localStorage.getItem('userInfo')) : null
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AUTH_SPINNING:
            return {
                ...state,
                loading: payload,
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userInfo', JSON.stringify(payload.user));
            return {
                ...state,
                ...payload,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userInfo', JSON.stringify(payload.user));
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
            localStorage.removeItem('userInfo');
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
