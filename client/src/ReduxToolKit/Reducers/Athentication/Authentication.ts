import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

interface Authentication {

    authenticated: boolean | null,
    username: string | null,
    password: string | null,
    email: string | null,
    signOut: boolean | null,
    signedIn: boolean | null
}


const initialState: Authentication = {

    authenticated: null,
    username: null,
    password: null,
    email: null,
    signOut: false,
    signedIn: false
}


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
        }
    }
})

export const { isAuthenticated, getUserName, getUserPassword, getEmail, showSignOut, redirectFromLogin } = AuthenticationSlice.actions

export default AuthenticationSlice.reducer