import ActionType from '../../../utils/ActionType';

function notesReducer(notes = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ACTIVE_NOTES:
            return action.payload.notes;
        case ActionType.GET_ARCHIVED_NOTES:
            return action.payload.notes;
        case ActionType.GET_NOTE:
            return action.payload.notes;
        case ActionType.ADD_NOTE:
            return [...notes, action.payload.notes];
        case ActionType.DELETE_NOTE:
            return notes.filter((note) => note.id !== action.payload.notes.id);
        case ActionType.ARCHIVE_NOTE:
            return notes.filter((note) => note.id !== action.payload.notes.id);
        case ActionType.UNARCHIVE_NOTE:
            return notes.filter((note) => note.id !== action.payload.notes.id);
        default:
            return notes;
    }
}

export default notesReducer;
