import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";

//TODO: save the URL's of the associated articles from the user's investigation at the time

export const saveUserInvestigation = createAsyncThunk(
    'user/SaveInvestigation',
    async (investigationData: any, thunkAPI) => {
        const { idea, initial_perspective, biases, premises, ending_perspective, changed_opinion, new_concepts, takeaway, user_id } = investigationData
        const { data, error } = await supabase
            .from('investigations')
            .insert([{
                idea: idea,
                initial_perspective: initial_perspective,
                biases: biases,
                premises: premises,
                ending_perspective: ending_perspective,
                changed_opinion: changed_opinion,
                new_concepts: new_concepts,
                takeaway: takeaway,
                user_id: user_id
            }]).select()
        if (error) {
            return thunkAPI.rejectWithValue(error.message)
        } else if (data) {
            return data
        }
        console.log(data)
    }
)

interface SaveInvestigation {
    status: string,
    saved: boolean
}

const initialState: SaveInvestigation = {
    status: 'idle',
    saved: false
}


const SaveInvestigationSlice = createSlice({
    name: 'saveInvestigation',
    initialState: initialState,
    reducers: {
        removeNotification: (state) => {
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(saveUserInvestigation.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(saveUserInvestigation.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.saved = true
            })
            .addCase(saveUserInvestigation.rejected, (state, action) => {
                state.status = 'rejected'

            })
    }
})

export const { removeNotification } = SaveInvestigationSlice.actions

export default SaveInvestigationSlice.reducer