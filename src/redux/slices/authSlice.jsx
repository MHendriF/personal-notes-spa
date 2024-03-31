import { createSlice } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
//import { login, putAccessToken, getUserLogged, register } from '../../services/auth.service';
import api from '../../utils/api';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
    },
    reducers: {
        setAuthUserAction: (state, action) => {
            state.data.push(action.payload);
            console.log('state setAuthUserAction: ', state, 'action : ', action.payload);
        },
        unsetAuthUserAction: (state, action) => {
            state.data.push(action.payload);
            console.log('state unsetAuthUserAction: ', state, 'action : ', action.payload);
        },
        registerUserAction: (state, action) => {
            state.data.push(action.payload);
            console.log('state registerUserAction: ', state, 'action : ', action.payload);
        },
    },
});

function asyncSetAuthUser(data) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            // await login(data, (status, res) => {
            //     if (status) {
            //         console.log(res.accessToken);
            //         putAccessToken(res.accessToken);
            //     } else {
            //         console.log(res);
            //     }
            // });
            // await getUserLogged((status, res) => {
            //     if (status) {
            //         console.log('getUserLogged: ', res);
            //         const authUser = res;
            //         dispatch(setAuthUserAction(authUser));
            //     } else {
            //         console.log(res.message);
            //     }
            // });

            const accessToken = await api.login(data);
            api.putAccessToken(accessToken);
            const authUser = await api.getUserLogged();
            console.log(authUser);
            dispatch(setAuthUserAction(authUser));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(unsetAuthUserAction());
        api.putAccessToken('');
        dispatch(hideLoading());
    };
}

function asyncRegisterUser(data) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            await api.register(data);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export { asyncSetAuthUser, asyncUnsetAuthUser, asyncRegisterUser };
export const { setAuthUserAction, unsetAuthUserAction, registerUserAction } = authSlice.actions;
export default authSlice.reducer;
