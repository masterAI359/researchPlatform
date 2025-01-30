import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

interface Authentication {

    authenticated: boolean | null
}


const initialState: Authentication = {

    authenticated: null
}


export const AuthenticationSlice = createSlice({

    name: 'authentication',
    initialState: initialState,
    reducers: {
        isAuthenticated: (state, action) => {

            state.authenticated = action.payload
        }
    }
})

export const { isAuthenticated } = AuthenticationSlice.actions

export default AuthenticationSlice.reducer