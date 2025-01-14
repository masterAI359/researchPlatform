import { createSlice } from '@reduxjs/toolkit'

interface NoteState {
    takingNotes: boolean,
    noteTaken: string | null
}

const initialState: NoteState = {
    takingNotes: false,
    noteTaken: ''
}

export const NoteSlice = createSlice({
    name: 'takeNotes',
    initialState: initialState,
    reducers: {
        writingNote: (state, action) => {
            state.takingNotes = action.payload
        },
        saveNote: (state, action) => {
            state.noteTaken = action.payload
        }
    }
})

export const { writingNote, saveNote } = NoteSlice.actions

export default NoteSlice.reducer