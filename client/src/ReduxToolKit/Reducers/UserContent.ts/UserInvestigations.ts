import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";

export const fetchSavedInvestigations = createAsyncThunk(
    'user/investigations',
    async (id: string | number, thunkAPI) => {

        const { data, error } = await supabase
            .from('investigations')
            .select()
            .eq('user_id', id)

        if (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        if (data) {
            return data

        }
    }
)


interface SavedInvestigations {
    status: string,
    userResearch: any,
    associatedArticles: any,
    investigationToReview: any
}


const initialState: SavedInvestigations = {
    status: 'idle',
    userResearch: [],
    associatedArticles: [],
    investigationToReview: null
}


const userInvestigationsSlice = createSlice({
    name: 'priorInvestigations',
    initialState: initialState,
    reducers: {
        clearUserInvestigations: () => initialState,
        getUserResearch: (state, action) => {
            state.userResearch = action.payload
        },
        reviewThisResearch: (state, action) => {
            state.investigationToReview = action.payload
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchSavedInvestigations.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchSavedInvestigations.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.userResearch = action.payload
            })
            .addCase(fetchSavedInvestigations.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
})


export const { clearUserInvestigations, getUserResearch, reviewThisResearch } = userInvestigationsSlice.actions

export default userInvestigationsSlice.reducer