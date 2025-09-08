import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { StatBreakdownTypes } from "@/env";

export const fetchSavedInvestigations = createAsyncThunk('user/investigations', async (thunkAPI) => {

    try {
        const response = await fetch('/getUserResearch', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },

        });

        const investigations = await response.json();
        if (investigations) return investigations;

    } catch (error) {
        if (error) {
            console.error(error)
            return
        };
    }
});


interface SavedInvestigations {
    status: string,
    userResearch: any,
    associatedArticles: any,
    investigationToReview: any,
    sourcesToReview: any,
    stats: StatBreakdownTypes
}


const initialState: SavedInvestigations = {
    status: 'idle',
    userResearch: [],
    associatedArticles: [],
    investigationToReview: null,
    sourcesToReview: null,
    stats: {
        percentChanged: null,
        validated: null,
        neutral: null,
        neededMore: null
    }
}


const userInvestigationsSlice = createSlice({
    name: 'priorInvestigations',
    initialState: initialState,
    reducers: {
        clearUserInvestigations: () => initialState,
        populateResearch: (state, action) => {
            state.userResearch = action.payload;
        },
        getUserResearch: (state, action) => {
            state.userResearch = action.payload
        },
        reviewThisResearch: (state, action) => {
            state.investigationToReview = action.payload
        },
        getSourcesToReview: (state, action) => {
            state.sourcesToReview = action.payload
        },
        getStatsBreakdown: (state, action: PayloadAction<StatBreakdownTypes | null>) => {
            const data = action.payload;
            state.stats.percentChanged = data.percentChanged;
            state.stats.validated = data.validated;
            state.stats.neutral = data.neutral;
            state.stats.neededMore = data.neededMore;
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


export const { clearUserInvestigations, getUserResearch, reviewThisResearch, getSourcesToReview, populateResearch, getStatsBreakdown } = userInvestigationsSlice.actions

export default userInvestigationsSlice.reducer