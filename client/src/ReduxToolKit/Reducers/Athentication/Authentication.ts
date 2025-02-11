import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";

interface Authentication {

    authenticated: boolean | null,
    username: string | null,
    password: string | null,
    email: string | null,
    signOut: boolean | null,
    signedIn: boolean | null,
    user_id: string | null,
}


const initialState: Authentication = {

    authenticated: null,
    username: null,
    password: null,
    email: null,
    signOut: false,
    signedIn: false,
    user_id: null,
};





export const AuthenticationSlice = createSlice({

    name: 'authentication',
    initialState: initialState,
    reducers: {
        isAuthenticated: (state, action) => {

            state.authenticated = action.payload
        },
        getUserName: (state, action) => {
            state.username = action.payload
        },
        getUserPassword: (state, action) => {
            state.password = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        },
        showSignOut: (state, action) => {
            state.signOut = action.payload
        },
        redirectFromLogin: (state, action) => {
            state.signedIn = action.payload
        },
        getID: (state, action) => {
            state.user_id = action.payload
        }
    }
});

export const { isAuthenticated, getUserName, getUserPassword, getEmail, showSignOut, redirectFromLogin, getID } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;