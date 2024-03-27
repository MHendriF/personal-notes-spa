import axios from 'axios';

export const login = (data, callback) => {
    axios
        .post('https://fakestoreapi.com/auth/login', data)
        .then((response) => {
            callback(true, response.data.token);
            //console.log(response);
        })
        .catch((error) => {
            callback(false, error);
        });
};
