import { createSlice } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { login, putAccessToken, getUserLogged, register } from '../../services/auth.service';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: [],
    },
    reducers: {
        setAuthUserAction: (state, action) => {},
        unsetAuthUserAction: (state, action) => {},
        registerUserAction: (state, action) => {},
    },
});

function asyncSetAuthUser(data) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const accessToken = await login(data);
            putAccessToken(accessToken);
            const authUser = await getUserLogged();

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
        putAccessToken('');
        dispatch(hideLoading());
    };
}

function asyncRegisterUser(data) {
    return async () => {
        dispatch(showLoading());
        try {
            await register(data);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export { asyncSetAuthUser, asyncUnsetAuthUser, asyncRegisterUser };
export const { setAuthUserAction, unsetAuthUserAction, registerUserAction } = authSlice.actions;
export default authSlice.reducer;
