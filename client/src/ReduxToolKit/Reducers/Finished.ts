import { createSlice } from "@reduxjs/toolkit";

interface FinishedState {
    finished: boolean,
    endingPerspective: string | null,
    newConcepts: boolean | null,
    newPOV: boolean | null,
    wantedMore: boolean | null
}


const initialState: FinishedState = {

    finished: false,
    endingPerspective: '',
    newConcepts: null,
    newPOV: null,
    wantedMore: null

}

export const FinishedSlice = createSlice({
    name: 'FinishLine',
    initialState: initialState,
    reducers: {
        initiateFinalProcess: (state, action) => {
            state.finished = action.payload
        },
        newKnowledge: (state, action) => {
            state.newConcepts = action.payload
        },
        changedStance: (state, action) => {
            state.newPOV = action.payload
        },
        finalPerspective: (state, action) => {
            state.endingPerspective = action.payload
        },
        wantsMoreContext: (state, action) => {
            state.wantedMore = action.payload
        }

    }
})


export const { initiateFinalProcess, finalPerspective, changedStance, newKnowledge, wantsMoreContext } = FinishedSlice.actions

export default FinishedSlice.reducer


