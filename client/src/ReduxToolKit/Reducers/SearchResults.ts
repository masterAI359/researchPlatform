import { createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "@/env";

interface ArticleArrayType {
    articles: Array<ArticleType> | null,
    startSearch: boolean | null
}

const initialState: ArticleArrayType = {
    articles: null,
    startSearch: false
}


export const SearchResultsSlice = createSlice({

    name: 'searchResults',
    initialState: initialState,
    reducers: {
        searchResults: (state, action) => {
            state.articles = action.payload
        },
        resetResults: () => initialState,
        startSearch: (state, action) => {
            state.startSearch = action.payload
        },


    },
})



export const { searchResults, resetResults, startSearch } = SearchResultsSlice.actions

export default SearchResultsSlice.reducer

