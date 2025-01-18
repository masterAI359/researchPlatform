import { createSlice } from "@reduxjs/toolkit";

interface FinishedState {
    finished: boolean,
    endingPerspective: string | null,
    newConcepts: boolean | null,
    newPOV: boolean
    wantedMore: boolean | null,
    merit: boolean | null,
    movedOnIdea: boolean | null,
    takeAway: string | null,
    endProcess: boolean
}


const initialState: FinishedState = {

    finished: false,
    endingPerspective: '',
    newConcepts: null,
    newPOV: null,
    wantedMore: null,
    merit: null,
    movedOnIdea: null,
    takeAway: '',
    endProcess: false
}

export const ReviewSlice = createSlice({
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
        },
        getMerit: (state, action) => {
            state.merit = action.payload
        },
        moved: (state, action) => {
            state.movedOnIdea = action.payload
        },
        getTakeAways: (state, action) => {
            state.takeAway = action.payload
        },
        endInvestigate: (state, action) => {
            state.endProcess = action.payload
        }

    }
})


export const {
    initiateFinalProcess,
    finalPerspective,
    changedStance,
    newKnowledge,
    wantsMoreContext,
    getMerit,
    moved,
    getTakeAways,
    endInvestigate

} = ReviewSlice.actions

export default ReviewSlice.reducer


