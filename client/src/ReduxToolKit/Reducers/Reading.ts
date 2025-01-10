import { createSlice } from '@reduxjs/toolkit'


interface ReadingState {

    loadingContent: boolean,
    getContent: boolean,

}


const initialState: ReadingState = {

    loadingContent: false,
    getContent: false
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
        }
    }
})


export const { loadContent, getStories } = ReadingSlice.actions

export default ReadingSlice.reducer