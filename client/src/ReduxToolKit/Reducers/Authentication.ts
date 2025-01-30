import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

interface Authentication {

    authenticated: boolean | null,
    username: string | null,
    password: string | null,
    email: string | null
}


const initialState: Authentication = {

    authenticated: null,
    username: null,
    password: null,
    email: null
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
        }
    }
})

export const { isAuthenticated, getUserName, getUserPassword, getEmail } = AuthenticationSlice.actions

export default AuthenticationSlice.reducer