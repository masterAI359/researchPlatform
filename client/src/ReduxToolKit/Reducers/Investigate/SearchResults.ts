import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "@/env";
import { fetchArticles } from "@/helpers/FetchRequests";
import { decrement, increment, incrementBy } from "./Steps";

export const RetrieveArticles = createAsyncThunk(
    'investigate/fetchArticles',
    async (query: string, thunkAPI) => {

        const response = await fetchArticles(query)
        return response.data
    }
)


interface ArticleArrayType {
    articles: Array<ArticleType> | null,
    status: string,
    pages: any,
    currentPage: number | null
}

const initialState: ArticleArrayType = {
    articles: null,
    status: 'idle',
    pages: null,
    currentPage: 0
}


export const SearchResultsSlice = createSlice({

    name: 'searchResults',
    initialState: initialState,
    reducers: {
        searchResults: (state, action) => {
            state.articles = action.payload
        },
        getPages: (state, action) => {
            state.pages = action.payload
        },
        incrementPage: (state) => {
            state.currentPage += 1
        },
        decrementPage: (state) => {
            state.currentPage -= 1
        },
        incrementPageBy: (state, action) => {
            state.currentPage = action.payload
        },
        resetResults: () => initialState,
        resetArticles: (state) => {
            state.articles = null
        }

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



export const { searchResults, resetResults, resetArticles, getPages, incrementPage, incrementPageBy, decrementPage } = SearchResultsSlice.actions

export default SearchResultsSlice.reducer

