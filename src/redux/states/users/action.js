import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const registerUserActionCreator = (data) => {
    return {
        type: ActionType.REGISTER_USER,
        payload: {
            data,
        },
    };
};

export const asyncRegisterUser = (data) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.register(data);
            console.log(response);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
