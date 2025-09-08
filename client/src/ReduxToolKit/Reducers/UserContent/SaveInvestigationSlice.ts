import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SaveInvestigation {
    status: string,
    saved: boolean,
    sources: string[] | null,
    swapButtons: boolean | null
}

const initialState: SaveInvestigation = {
    status: 'idle',
    saved: null,
    sources: null,
    swapButtons: false
}

export const saveUserInvestigation = createAsyncThunk(
    'user/SaveInvestigation',
    async (investigationData: Investigation, thunkAPI) => {

        const investigation = investigationData;
        typeof investigation
        const url: string = '/saveResearch';

        try {
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    investigation: investigation
                })
            })

            if (!response.ok) {
                throw new Error(`Unable to connect to endpoint: ${url} - Error Message: ${response.statusText}`);
            }

            const result = await response.json();

            if (result) {
                return result
            }

        } catch (error) {
            const errorMessage = thunkAPI.rejectWithValue(error.message);
            return errorMessage;
        }
    }
)


const SaveInvestigationSlice = createSlice({
    name: 'saveInvestigation',
    initialState: initialState,
    reducers: {
        removeNotification: (state, action) => {
            state.status = action.payload
        },
        recordSources: (state, action) => {
            state.sources = action.payload
        },
        switchButtons: (state, action) => {
            state.swapButtons = action.payload
        },
        researchSaved: (state, action) => {
            state.saved = action.payload
        },
        clearSaveInvestigationSlice: () => initialState
    },
    extraReducers: (builder) => {

        builder
            .addCase(saveUserInvestigation.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(saveUserInvestigation.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.saved = true
            })
            .addCase(saveUserInvestigation.rejected, (state, action) => {
                state.status = 'rejected';
                state.saved = false

            })
    }
})

export const { removeNotification, clearSaveInvestigationSlice, recordSources, switchButtons, researchSaved } = SaveInvestigationSlice.actions

export default SaveInvestigationSlice.reducer