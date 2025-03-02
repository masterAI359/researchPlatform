import { createSlice } from "@reduxjs/toolkit";

interface Display {
    showMindMap: boolean,
    showSearch: boolean,
    showContent: boolean,
    showWrapUp: boolean,
    showResults: boolean,
    showCompletion: boolean,
    showWorkModal: boolean,
    showBackToSearchModal: boolean
}

const initialState: Display = {
    showMindMap: true,
    showSearch: false,
    showContent: false,
    showWrapUp: false,
    showResults: false,
    showCompletion: false,
    showWorkModal: false,
    showBackToSearchModal: false,

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
        },
        displayResults: (state, action) => {
            state.showResults = action.payload
        },
        displayWorkModal: (state, action) => {
            state.showWorkModal = action.payload
        },
        displayReturnModal: (state, action) => {
            state.showBackToSearchModal = action.payload
        }
    }
})

export const { displayMindMap, displaySearch, displayArticleContent, displayCompletion, displayWrapUp, displayResults, displayWorkModal, displayReturnModal } = DisplaySlice.actions

export default DisplaySlice.reducer