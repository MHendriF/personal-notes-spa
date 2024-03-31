import ActionType from '../../../utils/ActionType';

function noteReducer(note = null, action = {}) {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            console.log('ADD_NOTE : ', action.payload.note);
            return action.payload.note;
        case ActionType.GET_NOTE:
            console.log('GET_NOTE : ', action.payload.note);
            return action.payload.note;
        case ActionType.DELETE_NOTE:
            console.log('DELETE_NOTE : ', action.payload.noteId);
            return null;
        case ActionType.ARCHIVE_NOTE:
            console.log('ARCHIVE_NOTE : ', action.payload.noteId);
            return {
                ...note,
                archived: true,
            };
        case ActionType.UNARCHIVE_NOTE:
            console.log('UNARCHIVE_NOTE : ', action.payload.noteId);
            return {
                ...note,
                archived: false,
            };
        default:
            return note;
    }
}

export default noteReducer;
