import ActionType from '../../../utils/ActionType';

function notesReducer(notes = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ACTIVE_NOTES:
            console.log('GET_ACTIVE_NOTES : ', action.payload.notes);
            return action.payload.notes;
        case ActionType.GET_ARCHIVED_NOTES:
            console.log('GET_ARCHIVED_NOTES : ', action.payload.notes);
            return action.payload.notes;

        default:
            return notes;
    }
}

export default notesReducer;
