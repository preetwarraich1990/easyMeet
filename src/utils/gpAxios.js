import axios from 'axios';

export const base_url = process.env.API_HOST;

export const gpAxios = axios.create({
    baseURL: base_url,
    headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Basic ZWFzeW1lZXRjcDoyMDIwI0FCQ1Btaw=='
    }
});

export const setUserToken = token => {
    if (token) {
        gpAxios.defaults.headers.common['User-Key'] = token;
    } else {
        delete gpAxios.defaults.headers.common['User-Key'];
    }
};
if (localStorage.getItem('user_token')) {
    gpAxios.defaults.headers['User-Key'] = localStorage.getItem('user_token');
}
// export const gpAxios
// gpAxios.defaults.headers.common.token = localStorage.getItem("id_token");
