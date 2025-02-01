import { createSlice } from "@reduxjs/toolkit";

interface Notes {
    notes: string | null,
    takingNotes: boolean | null
}


const initialState: Notes = {
    notes: null,
    takingNotes: false
}


export const NoteSlice = createSlice({
    name: 'NoteTaking',
    initialState: initialState,
    reducers: {

    }
})