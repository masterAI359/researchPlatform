import { createSlice } from "@reduxjs/toolkit";

interface Authentication {
    activeSession: boolean,
    signOut: boolean | null,
    signedIn: boolean | null,
    status: string
}


const initialState: Authentication = {
    activeSession: false,
    signOut: false,
    signedIn: false,
    status: 'idle'
};


export const AuthenticationSlice = createSlice({

    name: 'authentication',
    initialState: initialState,
    reducers: {
        showSignOut: (state) => {
            state.signOut = !state.signOut
        },
        redirectFromLogin: (state, action) => {
            state.signedIn = action.payload
        },
        getCurrentSession: (state, action) => {
            state.activeSession = action.payload
        },
        authenticate: (state, action) => {
            state.activeSession = action.payload;
        },
        clearAuthSlice: () => { return initialState }
    },
});

export const { showSignOut, redirectFromLogin, clearAuthSlice, getCurrentSession, authenticate } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;