import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "@/env";
import { fetchArticles } from "@/helpers/FetchRequests";

export const RetrieveArticles = createAsyncThunk(
    'investigate/fetchArticles',
    async (query: string, thunkAPI) => {

        try {
            const response = await fetchArticles(query)

            if (!response) {
                throw new Error(`Unable to query endpoint for article links: ${response.statusText}`);
            }
            if (response) {
                return response;
            } else {
                return
            }
        } catch (error) {
            console.error(error);

            return thunkAPI.rejectWithValue(error);
        };

    }
);


interface ArticleArrayType {
    articleOptions: Array<ArticleType> | null,
    optionsMap: Map<string, ArticleType> | null,
    status: string,
    pages: any,
    currentPage: number | null
}

const initialState: ArticleArrayType = {
    articleOptions: null,
    optionsMap: null,
    status: 'idle',
    pages: null,
    currentPage: 0
};



export const SearchResultsSlice = createSlice({

    name: 'searchResults',
    initialState: initialState,
    reducers: {
        searchResults: (state, action) => {
            state.articleOptions = action.payload.data;
            state.optionsMap = action.payload.optionsLookup;
            console.log(state.optionsMap);
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
            state.articleOptions = null;
            state.optionsMap = null;
        }

    },
    extraReducers: (builder) => {

        builder.addCase(RetrieveArticles.pending, (state, action) => {
            state.status = 'pending'
        }),
            builder.addCase(RetrieveArticles.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.articleOptions = action.payload.data
            }),
            builder.addCase(RetrieveArticles.rejected, (state, action) => {
                state.status = 'rejected';
            })
    }
})



export const { searchResults, resetResults, resetArticles, getPages, incrementPage, incrementPageBy, decrementPage } = SearchResultsSlice.actions

export default SearchResultsSlice.reducer

