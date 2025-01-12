import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserPOVState {

    idea: string | null,
    perspective: string | null,
    expertise: string | null,
    biases: string | null,
    premises: string | null,
    query: string | null,
    searching: boolean,
    loading: boolean
}

const initialState: UserPOVState = {

    idea: null,
    perspective: null,
    expertise: null,
    biases: null,
    premises: null,
    query: null,
    searching: false,
    loading: false
}


export const UserPOVSlice = createSlice({

    name: "UserPOV",
    initialState: initialState,
    reducers: {
        getIdea: (state, action) => {
            state.idea = action.payload
        },
        getPerspective: (state, action) => {
            state.perspective = action.payload
        },
        getExpertise: (state, action) => {
            state.expertise = action.payload
        },
        getBiases: (state, action) => {
            state.biases = action.payload
        },
        getPremises: (state, action) => {
            state.premises = action.payload
        },
        getQuery: (state, action) => {
            state.query = action.payload
        },
        searching: (state, action) => {
            state.searching = action.payload
        },
        loading: (state, action) => {
            state.loading = action.payload
        }

    }
})

export const { getIdea, getPerspective, getExpertise, getBiases, getPremises, getQuery, searching, loading } = UserPOVSlice.actions

export default UserPOVSlice.reducer