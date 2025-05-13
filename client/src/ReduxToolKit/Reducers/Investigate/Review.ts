import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";


export interface Extracts {
    title: string,
    extract: string
}

interface FinishedState {
    wrapUp: boolean | null,
    endingPerspective: string | null,
    newConcepts: boolean | null,
    newPOV: string | null
    wantedMore: boolean | null,
    merit: boolean | null,
    movedOnIdea: boolean | null,
    takeAway: string | null,
    extracts: Extracts[]
}


const initialState: FinishedState = {

    wrapUp: false,
    endingPerspective: '',
    newConcepts: null,
    newPOV: null,
    wantedMore: null,
    merit: null,
    movedOnIdea: null,
    takeAway: '',
    extracts: []
}

type UpdateExtractPayload = {
    title: string;
    extract: string;
}

export const ReviewSlice = createSlice({
    name: 'FinishLine',
    initialState: initialState,
    reducers: {
        initiateFinalProcess: (state, action) => {
            state.wrapUp = action.payload
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
        getExtract: (state, action: PayloadAction<UpdateExtractPayload>) => {
            const { title, extract } = action.payload;
            const extracted = {title: title, extract: extract}
            const exists = state.extracts.some((obj: Extracts) => obj.title === extracted.title);

            if(exists) {
                state.extracts = state.extracts.filter((obj) => obj.title !== extracted.title);
            } else {
                state.extracts.push(extracted);
            }

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
    getExtract
} = ReviewSlice.actions

export default ReviewSlice.reducer


