import axios from 'axios';

const userToken = localStorage.getItem('token');
export const base_url = process.env.API_HOST;


export const gpAxios = axios.create({
    baseURL: base_url,
    headers: {
        Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
    }
});

/**
 *
 * @param token
 */
export const setUserToken = token => {
    if (token) {
        gpAxios.defaults.headers.common['User-Key'] = token;
        gpAxios.defaults.headers.common['Authorization'] = `Basic ${process.env.REACT_APP_TOKEN}`;
    } else {
        delete gpAxios.defaults.headers.common['User-Key'];
    }
};
