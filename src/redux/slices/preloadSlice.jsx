// import { createSlice } from '@reduxjs/toolkit';
// import { hideLoading, showLoading } from 'react-redux-loading-bar';
// // import { getUserLogged } from '../../services/auth.service';
// import api from '../../utils/api';
// import { setAuthUserAction } from './authSlice';

// const preloadSlice = createSlice({
//     name: 'preload',
//     initialState: {
//         data: [],
//     },
//     reducers: {
//         setIsPreloadAction: (state, action) => {
//             state.data.push(action.payload);
//             console.log('state setIsPreloadAction: ', state, 'action : ', action.payload);
//         },
//     },
// });

// function asyncPreloadProcess() {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             // await getUserLogged((status, res) => {
//             //     console.log('status: ', status);
//             //     if (status) {
//             //         console.log('getUserLogged: ', res);
//             //         const authUser = res;
//             //         dispatch(setAuthUserAction(authUser));
//             //     } else {
//             //         console.log(res.message);
//             //     }
//             // });
//             const authUser = await api.getUserLogged();
//             dispatch(setAuthUserAction(authUser));
//         } catch (error) {
//             dispatch(setAuthUserAction(null));
//         } finally {
//             dispatch(setIsPreloadAction(false));
//         }
//         dispatch(hideLoading());
//     };
// }

// export { asyncPreloadProcess };
// export const { setIsPreloadAction } = preloadSlice.actions;
// export default preloadSlice.reducer;
