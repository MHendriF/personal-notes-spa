import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import noteReducer from './slices/noteSlice';
import authReducer from './slices/authSlice';
import preloadReducer from './slices/preloadSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        preload: preloadReducer,
        notes: noteReducer,
        loadingBar: loadingBarReducer,
    },
});

export default store;
