// import { createSlice } from '@reduxjs/toolkit';
// import { hideLoading, showLoading } from 'react-redux-loading-bar';
// //import { addNote, deleteNote, getNote, getActiveNotes, getArchivedNotes, archiveNote, unarchiveNote } from '../../services/note.service';
// import api from '../../utils/api';

// const noteSlice = createSlice({
//     name: 'notes',
//     initialState: {
//         data: [],
//     },
//     reducers: {
//         addNoteAction: (state, action) => {
//             console.log('state addNoteAction: ', state, 'action : ', action.payload);
//             //state.data.push(action.payload);
//         },
//         deleteNoteAction: (state, action) => {
//             console.log('state deleteNoteAction: ', state, 'action : ', action.payload);
//             // state.data = state.data.filter((note) => note.id !== action.payload);
//             // if (state.data.length === 0) {
//             //     localStorage.removeItem('notes');
//             // }
//         },
//         archiveNoteAction: (state, action) => {
//             console.log('state archiveNoteAction: ', state, 'action : ', action.payload);
//             // const item = state.data.find((note) => note.id === action.payload);
//             // if (item) {
//             //     item.archived = !item.archived;
//             // } else {
//             //     console.log('item not found');
//             // }
//         },
//         unarchiveNoteAction: (state, action) => {
//             console.log('state unarchiveNoteAction: ', state, 'action : ', action.payload);
//         },
//         getNoteAction: (state, action) => {
//             console.log('state getNoteAction: ', state, 'action : ', action.payload);
//         },
//         getActiveNotesAction: (state, action) => {
//             console.log('state getActiveNotesAction: ', state, 'action : ', action.payload);
//         },
//         getArchivedNotesAction: (state, action) => {
//             console.log('state getArchivedNotesAction: ', state, 'action : ', action.payload);
//         },
//     },
// });

// function asyncAddNote(data) {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.addNote(data);
//             dispatch(addNoteAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncDeleteNote(id) {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.deleteNote(id);
//             dispatch(deleteNoteAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncArchiveNote(id) {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.archiveNote(id);
//             dispatch(archiveNoteAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncUnarchiveNote(id) {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.unarchiveNote(id);
//             dispatch(unarchiveNoteAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncGetNote(id) {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.getNote(id);
//             dispatch(getNoteAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncGetActiveNotes() {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.getActiveNotes();
//             dispatch(getActiveNotesAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// function asyncGetArchivedNotes() {
//     return async (dispatch) => {
//         dispatch(showLoading());
//         try {
//             const response = await api.getArchivedNotes();
//             dispatch(getArchivedNotesAction(response));
//         } catch (error) {
//             alert(error.message);
//         }
//         dispatch(hideLoading());
//     };
// }

// export { asyncAddNote, asyncDeleteNote, asyncArchiveNote, asyncUnarchiveNote, asyncGetNote, asyncGetActiveNotes, asyncGetArchivedNotes };
// export const {
//     addNoteAction,
//     deleteNoteAction,
//     archiveNoteAction,
//     unarchiveNoteAction,
//     getNoteAction,
//     getActiveNotesAction,
//     getArchivedNotesAction,
// } = noteSlice.actions;
// export default noteSlice.reducer;
