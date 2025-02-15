import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "@/env";
import { fetchArticles } from "@/helpers/FetchRequests";

export const RetrieveArticles = createAsyncThunk(
    'investigate/fetchArticles',
    async (query: string, thunkAPI) => {

        const response = await fetchArticles(query)
        console.log(response.data)
        return response.data
    }
)


interface ArticleArrayType {
    articles: Array<ArticleType> | null,
    startSearch: boolean | null,
    status: string
}

const initialState: ArticleArrayType = {
    articles: null,
    startSearch: null,
    status: 'idle'
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
    extraReducers: (builder) => {

        builder.addCase(RetrieveArticles.pending, (state, action) => {
            state.status = 'pending'
        }),
            builder.addCase(RetrieveArticles.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.articles = action.payload
            }),
            builder.addCase(RetrieveArticles.rejected, (state, action) => {
                state.status = 'rejected';
            })
    }
})



export const { searchResults, resetResults, startSearch } = SearchResultsSlice.actions

export default SearchResultsSlice.reducer

