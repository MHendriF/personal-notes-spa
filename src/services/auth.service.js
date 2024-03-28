import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BASE_URL = 'https://notes-api.dicoding.dev/v1';

export const login = async (data, callback) => {
    axios
        .post(`${BASE_URL}/login`, data)
        .then((response) => {
            console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const register = async (data, callback) => {
    axios
        .post(`${BASE_URL}/register`, data)
        .then((response) => {
            console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const logout = () => {
    localStorage.removeItem('accessToken');
};

export const getName = (accessToken) => {
    const decoded = jwtDecode(accessToken);
    console.log(decoded);
};
