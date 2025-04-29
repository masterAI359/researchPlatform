import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OptionsTypes } from "@/env";


export const searchBlueSky = createAsyncThunk(
    'investigate/getBlueSkyPosts', 
    async (query: string, thunkAPI) => {
        const options: OptionsTypes = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(`/searchBlueSky?q=${query}`, options);
            if(response.ok) {
                const results = response.json();
                console.log(results)
                return results;
            } else {
                return thunkAPI.rejectWithValue('Connection refused');
            }
           
        } catch (error) {
            if(error) {
                return thunkAPI.rejectWithValue(error)
            }
        }
    }
)


export const getFeed = createAsyncThunk(
    'investigate/getFeed',
    async (thunkAPI) => {
        const options: OptionsTypes = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }

        try {
            const req = await fetch('/getBlueSkyFeed', options);
            if(req.ok) {
                const res = req.json();
                return res;
            }
        } catch (error) {
            if(error) console.log(error)
        }
    }
)


interface BSTypes {

    status: string,
    posts: any | null,

}

const initialState: BSTypes = {
    status: 'idle',
    posts: null
}


export const BlueSkySlice = createSlice({
    name: 'blueSkyPosts',
    initialState: initialState,
    reducers: {
        resetBlueSkyState: () => initialState
    },
    extraReducers: (builder) => {

        builder.addCase(searchBlueSky.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(searchBlueSky.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload.posts;
        })
        builder.addCase(searchBlueSky.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(getFeed.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(getFeed.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload.posts;
        })
        builder.addCase(getFeed.rejected, (state) => {
            state.status = 'rejected';
        })
    }
});

export const { resetBlueSkyState } = BlueSkySlice.actions;

export default BlueSkySlice.reducer;