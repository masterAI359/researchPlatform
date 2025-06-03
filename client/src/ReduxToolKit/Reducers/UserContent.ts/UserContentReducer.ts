import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";


interface UserContent {
    status: string,
    userArticles: any,
    error: any,

    contextForSupabase: string | null,
    ArticleToReview: any
}

const initialState: UserContent = {
    status: 'idle',
    userArticles: [],
    error: null,
    contextForSupabase: null,
    ArticleToReview: null
}

export const fetchSavedArticles = createAsyncThunk(
    'user/articles',
    async (id: string, thunkAPI) => {
        try {
            const data = await fetch('http://localhost:5001/getUserArticles', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,

                }),
            })

            const articles = await data.json();
            if (articles) return articles;

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        };

    }
);



const UserContentSlice = createSlice({
    name: 'userContent',
    initialState: initialState,
    reducers: {
        clearUser: () => { return initialState },
        supabaseContext: (state, action) => {
            state.contextForSupabase = action.payload
        },
        readSavedArticle: (state, action) => {
            state.ArticleToReview = action.payload
        },
        removeSavedArticle: (state, action) => {
            state.userArticles = state.userArticles.splice(action.payload, 1);
        },

    },
    extraReducers: builder => {

        builder
            .addCase(fetchSavedArticles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSavedArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userArticles = action.payload
            })
            .addCase(fetchSavedArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload
            })
    }
})

export const { clearUser, supabaseContext, readSavedArticle, removeSavedArticle } = UserContentSlice.actions

export default UserContentSlice.reducer