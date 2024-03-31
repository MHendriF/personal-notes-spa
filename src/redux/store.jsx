import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
// import noteReducer from './slices/noteSlice';
// import authReducer from './slices/authSlice';
// import preloadReducer from './slices/preloadSlice';
import authReducer from './states/authUser/reducer';
import noteReducer from './states/notes/reducer';
import preloadReducer from './states/isPreload/reducer';
import usersReducer from './states/users/reducer';

const store = configureStore({
    reducer: {
        authUser: authReducer,
        isPreload: preloadReducer,
        notes: noteReducer,
        users: usersReducer,
        loadingBar: loadingBarReducer,
    },
});

export default store;
