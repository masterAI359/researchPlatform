import { createSlice } from "@reduxjs/toolkit";

interface Display {
    showMindMap: boolean,
    showSearch: boolean,
    showContent: boolean,
    showWrapUp: boolean,
    showCompletion: boolean
}

const initialState: Display = {
    showMindMap: true,
    showSearch: false,
    showContent: false,
    showWrapUp: false,
    showCompletion: false

}


const DisplaySlice = createSlice({
    name: 'display',
    initialState: initialState,
    reducers: {
        displayMindMap: (state, action) => {
            state.showMindMap = action.payload
        },
        displaySearch: (state, action) => {
            state.showSearch = action.payload
        },
        displayArticleContent: (state, action) => {
            state.showContent = action.payload
        },
        displayWrapUp: (state, action) => {
            state.showWrapUp = action.payload
        },
        displayCompletion: (state, action) => {
            state.showCompletion = action.payload
        }
    }
})

export const { displayMindMap, displaySearch, displayArticleContent, displayCompletion, displayWrapUp } = DisplaySlice.actions

export default DisplaySlice.reducer