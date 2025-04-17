import { createSlice } from "@reduxjs/toolkit";


interface FeedbackTypes {

    status: string,
    authorEmail: string | null,
    message: string | null,
    seen: boolean | null
}


const initialState: FeedbackTypes = {

    status: 'idle',
    authorEmail: null,
    message: null,
    seen: null
}



export const FeedBackSlice = createSlice({
    name: 'feedback',
    initialState: initialState,
    reducers: {

        getAuthorEmail: (state, action) => {

            state.authorEmail = action.payload
        },
        getFeedBackMessage: (state, action) => {
            state.message = action.payload
        },
        feedbackSubmitted: (state) => {
            state.status = 'fullfilled'
        },
        stopAskingForFeedBack: (state, action) => {
            state.seen = action.payload
        },


    }
})

export const { getAuthorEmail, getFeedBackMessage, feedbackSubmitted, stopAskingForFeedBack} = FeedBackSlice.actions

export default FeedBackSlice.reducer