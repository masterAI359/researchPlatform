import { createSlice } from '@reduxjs/toolkit'


interface ReadingState {

    loadingContent: boolean,
    getContent: boolean,
    summaries: Array<any> | null,
    currentStory: number,
    reading: boolean

}


const initialState: ReadingState = {

    loadingContent: false,
    getContent: false,
    summaries: null,
    currentStory: 0,
    reading: false
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
        incrementStory: (state) => {
            state.currentStory = state.currentStory += 1
        },
        decrementStory: (state) => {
            state.currentStory -= 1
        },
        isReading: (state, action) => {
            state.reading = action.payload
        }

    }
})


export const { loadContent, getStories, articleData, incrementStory, decrementStory, isReading } = ReadingSlice.actions

export default ReadingSlice.reducer