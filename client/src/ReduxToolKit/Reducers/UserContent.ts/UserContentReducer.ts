import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { populate } from "dotenv";


interface UserContent {
    status: string,
    userArticles: any,
    error: any,
    contextForSupabase: string | null,
    ArticleToReview: any,
    deletingArticle: boolean,
}

const initialState: UserContent = {
    status: 'idle',
    userArticles: [],
    error: null,
    contextForSupabase: null,
    ArticleToReview: null,
    deletingArticle: false,
}

export const fetchSavedArticles = createAsyncThunk(
    'user/articles',
    async (thunkAPI) => {
        try {
            const response = await fetch('/getUserArticles', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error(`Failed to fetch articles: ${response.statusText}`);
            }

            const results = await response.json();
            return results


        } catch (error) {
            console.error(error);
        };

    }
);



const UserContentSlice = createSlice({
    name: 'userContent',
    initialState: initialState,
    reducers: {
        clearUser: () => { return initialState },
        populateArticles: (state, action) => {
            state.userArticles = action.payload;
        },
        supabaseContext: (state, action) => {
            state.contextForSupabase = action.payload
        },
        readSavedArticle: (state, action) => {
            state.ArticleToReview = action.payload
        },
        removeSavedArticle: (state, action) => {
            state.userArticles = state.userArticles.splice(action.payload, 1);
        },
        removingArticle: (state, action) => {
            state.deletingArticle = action.payload;
        },
        refreshArticles: (state, action) => {
            state.userArticles = state.userArticles.filter(a => a.id !== action.payload);
        }

    },
    extraReducers: builder => {

        builder
            .addCase(fetchSavedArticles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSavedArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (state.userArticles) {
                    state.userArticles = action.payload
                }
            })
            .addCase(fetchSavedArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload
            })
    }
})

export const { clearUser, supabaseContext, readSavedArticle, removeSavedArticle, populateArticles, removingArticle, refreshArticles } = UserContentSlice.actions

export default UserContentSlice.reducer