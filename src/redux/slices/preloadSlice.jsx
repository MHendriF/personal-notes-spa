import { createSlice } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { getUserLogged } from '../../services/auth.service';
import { setAuthUserAction } from './authSlice';

const preloadSlice = createSlice({
    name: 'preload',
    initialState: {
        data: [],
    },
    reducers: {
        setIsPreloadAction: (state, action) => {},
    },
});

function asyncPreloadProcess() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const authUser = await getUserLogged();
            dispatch(setAuthUserAction(authUser));
        } catch (error) {
            dispatch(setAuthUserAction(null));
        } finally {
            dispatch(setIsPreloadAction(false));
        }
        dispatch(hideLoading());
    };
}

export { asyncPreloadProcess };
export const { setIsPreloadAction } = preloadSlice.actions;
export default preloadSlice.reducer;
