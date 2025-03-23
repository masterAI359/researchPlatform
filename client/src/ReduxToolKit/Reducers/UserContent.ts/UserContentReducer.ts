import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";

//TODO: learn about the extra reducers within slices of state. This could simplify the loading states and active states for our components

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
        const { data, error } = await supabase
            .from('articles')
            .select()
            .eq('user_id', id)

        if (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        return data
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
        }
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

export const { clearUser, supabaseContext, readSavedArticle } = UserContentSlice.actions

export default UserContentSlice.reducer