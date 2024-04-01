import ActionType from '../../../utils/ActionType';

function notesReducer(notes = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ACTIVE_NOTES:
            console.log('GET_ACTIVE_NOTES : ', action.payload.notes);
            return action.payload.notes;
        case ActionType.GET_ARCHIVED_NOTES:
            console.log('GET_ARCHIVED_NOTES : ', action.payload.notes);
            return action.payload.notes;
        case ActionType.SEARCH_ACTIVE_NOTES:
            console.log('SEARCH_ACTIVE_NOTES : ', action.payload.notes, 'keyword : ', action.payload.keyword);
            return action.payload.notes.filter((note) => !note.archived && note.title.toLowerCase().includes(action.payload.keyword.toLowerCase()));
        case ActionType.SEARCH_ARCHIVED_NOTES:
            console.log('SEARCH_ARCHIVED_NOTES : ', action.payload.notes);
            return action.payload.notes.filter((note) => note.archived && note.title.toLowerCase().includes(action.payload.keyword.toLowerCase()));
        default:
            return notes;
    }
}

export default notesReducer;
