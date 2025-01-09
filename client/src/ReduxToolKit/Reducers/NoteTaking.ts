import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NoteState {
    takingNotes: boolean
}

const initialState: NoteState = {
    takingNotes: false
}

export const NoteSlice = createSlice({
    name: 'takeNotes',
    initialState: initialState,
    reducers: {
        writingNote: (state, action) => {
            state.takingNotes = action.payload
        }
    }
})

export const { writingNote } = NoteSlice.actions

export default NoteSlice.reducer