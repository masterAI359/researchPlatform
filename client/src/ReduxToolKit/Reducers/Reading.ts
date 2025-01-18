import { createListenerMiddleware, createSlice } from '@reduxjs/toolkit'


interface ReadingState {

    loadingContent: boolean,
    getContent: boolean,
    summaries: Array<any> | null,
    failedNotifications: Array<any> | null,
    currentStory: number,
    reading: boolean,
    paginateLimit: boolean
}


const initialState: ReadingState = {

    loadingContent: false,
    getContent: false,
    summaries: null,
    failedNotifications: null,
    currentStory: 0,
    reading: false,
    paginateLimit: false
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
        rejected: (state, action) => {
            state.failedNotifications = action.payload
        },
        closeNotification: (state, action) => {
            state.failedNotifications.splice(action.payload, 1)
        },
        incrementStory: (state) => {
            state.currentStory = state.currentStory += 1
        },
        decrementStory: (state) => {
            state.currentStory -= 1
        },
        isReading: (state, action) => {
            state.reading = action.payload
        },
        resetData: () => initialState,
        limitPagination: (state, action) => {
            state.paginateLimit = action.payload
        }
    }
})


export const {
    loadContent,
    getStories,
    articleData,
    rejected,
    incrementStory,
    decrementStory, isReading,
    resetData,
    closeNotification,
    limitPagination } = ReadingSlice.actions

export default ReadingSlice.reducer