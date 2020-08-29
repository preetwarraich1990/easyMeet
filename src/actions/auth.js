import service, { setAuthToken } from '../service/service';
import { LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED, AUTH_ERROR, LOGOUT } from './types';
import { gpAxios } from '../utils/gpAxios';

export const loginUser = (email, password, history=null) => async dispatch => {
    const data = {
        email: email,
        password: password,
        device_token: "dfsdfhsfhkdddssjsdfh"
    };
    try {
        const res = await gpAxios.post('/login', data);
      //  console.log(res.data.data.result.auth_user_token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: res.data.data.result.auth_user_token,
                user: res.data.data.result
            }
        }); 
        localStorage.setItem('token', res.data.data.result.auth_user_token);
        localStorage.setItem('userInfo', JSON.stringify(res.data.data.result));
        if(history !== null){
            history.push('/dashbaord');
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED
        });
    }
};

export const loadUser = () => async dispatch => {
    setAuthToken(localStorage.getItem('token'));
    try {
        const res = await service.get('/users/me');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const logout = () => async dispatch => {
    try {
        await service.post('/users/logout');
    } catch (e) {}
    dispatch({
        type: LOGOUT
    });
};
