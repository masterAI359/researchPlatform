import { createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "@/env";

interface ArticleArrayType {
    articles: Array<ArticleType> | null
}

const initialState: ArticleArrayType = {
    articles: null
}


export const SearchResultsSlice = createSlice({

    name: 'searchResults',
    initialState: initialState,
    reducers: {
        searchResults: (state, action) => {
            state.articles = action.payload
        },
        resetResults: () => initialState
    },
})


export const { searchResults, resetResults } = SearchResultsSlice.actions

export default SearchResultsSlice.reducer

