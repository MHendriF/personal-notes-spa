import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const addNoteActionCreator = (data) => {
    return {
        type: ActionType.ADD_NOTE,
        payload: {
            data,
        },
    };
};

export const deleteNoteActionCreator = (data) => {
    return {
        type: ActionType.DELETE_NOTE,
        payload: {
            data,
        },
    };
};

export const archiveNoteActionCreator = (data) => {
    return {
        type: ActionType.ARCHIVE_NOTE,
        payload: {
            data,
        },
    };
};

export const unarchiveNoteActionCreator = (data) => {
    return {
        type: ActionType.UNARCHIVE_NOTE,
        payload: {
            data,
        },
    };
};

export const getNoteActionCreator = (data) => {
    return {
        type: ActionType.GET_NOTE,
        payload: {
            data,
        },
    };
};

export const getActiveNotesActionCreator = (data) => {
    return {
        type: ActionType.GET_ACTIVE_NOTES,
        payload: {
            data,
        },
    };
};

export const getArchivedNotesActionCreator = (data) => {
    return {
        type: ActionType.GET_ARCHIVED_NOTES,
        payload: {
            data,
        },
    };
};

export const asyncAddNote = (data) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.addNote(data);
            dispatch(addNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncDeleteNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.deleteNote(id);
            dispatch(deleteNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncArchiveNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.archiveNote(id);
            dispatch(archiveNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncUnarchiveNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.unarchiveNote(id);
            dispatch(unarchiveNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncGetNote = (id) => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getNote(id);
            dispatch(getNoteActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncGetActiveNotes = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getActiveNotes();
            dispatch(getActiveNotesActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};

export const asyncGetArchivedNotes = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getArchivedNotes();
            dispatch(getArchivedNotesActionCreator(response));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
