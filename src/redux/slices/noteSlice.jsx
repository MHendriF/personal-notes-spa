import { createSlice } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { addNote, deleteNote, getNote, getActiveNotes, getArchivedNotes, archiveNote, unarchiveNote } from '../../services/note.service';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        data: [],
    },
    reducers: {
        addNoteAction: (state, action) => {
            //state.data.push(action.payload);
        },
        deleteNoteAction: (state, action) => {
            // state.data = state.data.filter((note) => note.id !== action.payload);
            // if (state.data.length === 0) {
            //     localStorage.removeItem('notes');
            // }
        },
        archiveNoteAction: (state, action) => {
            // const item = state.data.find((note) => note.id === action.payload);
            // if (item) {
            //     item.archived = !item.archived;
            // } else {
            //     console.log('item not found');
            // }
        },
        unarchiveNoteAction: (state, action) => {},
        getNoteAction: (state, action) => {},
        getActiveNotesAction: (state, action) => {},
        getArchivedNotesAction: (state, action) => {},
    },
});

function asyncAddNote(data) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await addNote(data);
            dispatch(addNoteAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncDeleteNote(id) {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await deleteNote(id);
            dispatch(deleteNoteAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncArchiveNote(id) {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await archiveNote(id);
            dispatch(archiveNoteAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncUnarchiveNote(id) {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await unarchiveNote(id);
            dispatch(unarchiveNoteAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncGetNote(id) {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await getNote(id);
            dispatch(getNoteAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncGetActiveNotes() {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await getActiveNotes();
            dispatch(getActiveNotesAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

function asyncGetArchivedNotes() {
    return async (dispatch) => {
        //dispatch(showLoading());
        try {
            const response = await getArchivedNotes();
            dispatch(getArchivedNotesAction(response));
        } catch (error) {
            alert(error.message);
        }
        //dispatch(hideLoading());
    };
}

export { asyncAddNote, asyncDeleteNote, asyncArchiveNote, asyncUnarchiveNote, asyncGetNote, asyncGetActiveNotes, asyncGetArchivedNotes };
export const {
    addNoteAction,
    deleteNoteAction,
    archiveNoteAction,
    unarchiveNoteAction,
    getNoteAction,
    getActiveNotesAction,
    getArchivedNotesAction,
} = noteSlice.actions;
export default noteSlice.reducer;
