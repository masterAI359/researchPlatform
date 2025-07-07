import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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

export const { clearUser, supabaseContext, readSavedArticle, removeSavedArticle } = UserContentSlice.actions

export default UserContentSlice.reducer