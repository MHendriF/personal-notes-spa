import axios from 'axios';
import { getAccessToken } from './auth.service';

const BASE_URL = 'https://notes-api.dicoding.dev/v1';

export const addNote = async (data, callback) => {
    axios
        .post(`${BASE_URL}/notes`, data, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            console.log(error);
            callback(false, error.response.data);
        });
};

export const getActiveNotes = async (callback) => {
    axios
        .get(`${BASE_URL}/notes`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const getArchivedNotes = async (callback) => {
    axios
        .get(`${BASE_URL}/notes/archived`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            //console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            //console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const getNote = async (id, callback) => {
    axios
        .get(`${BASE_URL}/notes/${id}`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            //console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            //console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const archiveNote = async (id, callback) => {
    axios
        .post(`${BASE_URL}/notes/${id}/archive`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            //console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            //console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const unarchiveNote = async (id, callback) => {
    axios
        .post(`${BASE_URL}/notes/${id}/unarchive`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            //console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            //console.log(error.response.data);
            callback(false, error.response.data);
        });
};

export const deleteNote = async (id, callback) => {
    axios
        .delete(`${BASE_URL}/notes/${id}`, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        .then((response) => {
            //console.log(response.data.data);
            callback(true, response.data.data);
        })
        .catch((error) => {
            //console.log(error.response.data);
            callback(false, error.response.data);
        });
};
