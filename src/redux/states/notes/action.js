import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import ActionType from '../../../utils/ActionType';

export const getActiveNotesActionCreator = (notes) => {
    return {
        type: ActionType.GET_ACTIVE_NOTES,
        payload: {
            notes,
        },
    };
};

export const getArchivedNotesActionCreator = (notes) => {
    return {
        type: ActionType.GET_ARCHIVED_NOTES,
        payload: {
            notes,
        },
    };
};

export const asyncGetActiveNotes = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const response = await api.getActiveNotes();
            const notes = dispatch(getActiveNotesActionCreator(response));
            console.log('asyncGetActiveNotes : ', response);
            console.log('dispatch : ', notes);
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
            const notes = dispatch(getArchivedNotesActionCreator(response));
            console.log('asyncGetArchivedNotes : ', response);
            console.log('dispatch : ', notes);
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
};
