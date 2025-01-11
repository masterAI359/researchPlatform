import { createSlice } from '@reduxjs/toolkit'


interface ReadingState {

    loadingContent: boolean,
    getContent: boolean,
    summaries: Array<any> | null

}


const initialState: ReadingState = {

    loadingContent: false,
    getContent: false,
    summaries: null
}


export const ReadingSlice = createSlice({
    name: 'readingReducer',
    initialState: initialState,
    reducers: {
        loadContent: (state, action) => {
            state.loadingContent = action.payload
        },
        getStories: (state, action) => {
            state.getContent = action.payload
        },
        articleData: (state, action) => {
            state.summaries = action.payload
        },

    }
})


export const { loadContent, getStories, articleData } = ReadingSlice.actions

export default ReadingSlice.reducer