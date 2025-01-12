import { createSlice } from "@reduxjs/toolkit";

interface FinishedState {
    finished: boolean
}


const initialState: FinishedState = {

    finished: false
}

export const FinishedSlice = createSlice({
    name: 'FinishLine',
    initialState: initialState,
    reducers: {
        initiateFinalProcess: (state, action) => {
            state.finished = action.payload
        }
    }
})


export const { initiateFinalProcess } = FinishedSlice.actions

export default FinishedSlice.reducer


