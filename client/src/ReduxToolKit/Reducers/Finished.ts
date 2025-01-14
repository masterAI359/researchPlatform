import { createSlice } from "@reduxjs/toolkit";

interface FinishedState {
    finished: boolean,
    changedPerspective: string | null
}


const initialState: FinishedState = {

    finished: false,
    changedPerspective: ''
}

export const FinishedSlice = createSlice({
    name: 'FinishLine',
    initialState: initialState,
    reducers: {
        initiateFinalProcess: (state, action) => {
            state.finished = action.payload
        },
        newPerspective: (state, action) => {
            state.changedPerspective = action.payload
        }
    }
})


export const { initiateFinalProcess, newPerspective } = FinishedSlice.actions

export default FinishedSlice.reducer


