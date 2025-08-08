import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUserCredentials = createAsyncThunk(
    'user/credentials',
    async (session: any, thunkAPI) => {
        try {
            if (session) {
                return session;
            };
        } catch (error) {
            if (error) {
                console.log(error.message)
                return thunkAPI.rejectWithValue(error.message)
            };
        };
    }
);

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
        clearAuthSlice: () => { return initialState }
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchUserCredentials.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchUserCredentials.fulfilled, (state, action) => {
                if (action.payload && action.payload.user) {
                    state.status = 'fulfilled';
                    state.activeSession = true;
                } else {
                    state.activeSession = false
                }

            })
            .addCase(fetchUserCredentials.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }
});

export const { showSignOut, redirectFromLogin, clearAuthSlice, getCurrentSession } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;