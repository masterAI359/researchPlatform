import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "@/SupaBase/supaBaseClient";


export const fetchUserCredentials = createAsyncThunk(
    'user/credentials',
    async (thunkAPI) => {
        try {
            const { data: { session } } = await supabase.auth.getSession()

            if (session) {
                return session
            }

        } catch (error) {
            if (error) {
                console.log(error)
            }
        }

    }
)

interface Authentication {
    activeSession: any,
    authenticated: boolean | null,
    username: string | null,
    password: string | null,
    email: string | null,
    signOut: boolean | null,
    signedIn: boolean | null,
    user_id: string | null,
    status: string
}


const initialState: Authentication = {
    activeSession: null,
    authenticated: null,
    username: null,
    password: null,
    email: null,
    signOut: false,
    signedIn: false,
    user_id: null,
    status: 'idle'
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
        },
        getCurrentSession: (state, action) => {
            state.activeSession = action.payload
        },
        clearAuthSlice: () => { return initialState }
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchUserCredentials.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchUserCredentials.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.user_id = action.payload.user.id
                state.email = action.payload.user.email
            })
            .addCase(fetchUserCredentials.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
});

export const { isAuthenticated, getUserName, getUserPassword, getEmail, showSignOut, redirectFromLogin, getID, clearAuthSlice, getCurrentSession } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;