import { createSlice } from '@reduxjs/toolkit';
import { getInitialData } from '../../utils';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        data: JSON.parse(localStorage.getItem('notes')) || [...getInitialData()],
    },
    reducers: {
        addNote: (state, action) => {
            state.data.push(action.payload);
        },
        updateNote: (state, action) => {
            const item = state.data.find((note) => note.id === action.payload.id);
            if (item) {
                item.title = action.payload.title;
                item.body = action.payload.body;
            } else {
                console.log('note not found');
            }
        },
        deleteNote: (state, action) => {
            state.data = state.data.filter((note) => note.id !== action.payload);
            if (state.data.length === 0) {
                localStorage.removeItem('notes');
            }
        },
        archiveNote: (state, action) => {
            const item = state.data.find((note) => note.id === action.payload);
            if (item) {
                item.archived = !item.archived;
            } else {
                console.log('item not found');
            }
        },
    },
});

export const { addNote, updateNote, deleteNote, archiveNote } = noteSlice.actions;
export default noteSlice.reducer;
