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
            const results = response.json();
            console.log(results)
            return results;
        } catch (error) {
            if(error) {
                return thunkAPI.rejectWithValue(error)
            }
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
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(searchBlueSky.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(searchBlueSky.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        })
        builder.addCase(searchBlueSky.rejected, (state) => {
            state.status = 'rejected'
        })
    }
});


export default BlueSkySlice.reducer;