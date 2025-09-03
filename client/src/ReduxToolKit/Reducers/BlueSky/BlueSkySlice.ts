import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            if (response.ok) {
                const results = response.json();
                return results;
            } else {
                return thunkAPI.rejectWithValue('Connection refused');
            }

        } catch (error) {
            if (error) {
                return thunkAPI.rejectWithValue(error)
            }
        }
    }
)


export const getFeed = createAsyncThunk(
    'investigate/getBlueSkyFeed',
    async (_: void, thunkAPI) => {
        const options: OptionsTypes = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }

        try {
            const req = await fetch('/getBlueSkyFeed', options);
            if (req.ok) {
                const data = await req.json();
                return data;
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }
)

type PopoverXY = {
    x: number | null,
    y: number | null
}

type Dimensions = {
    w: number | null,
    h: number | null
};

interface BSTypes {

    status: string,
    feedStatus: string
    posts: any | null,
    errorMessage: string | null,
    selected: any,
    popoverPost: any | null,
    popoverPosition: PopoverXY,
    containerDimensions: Dimensions
};

const initialState: BSTypes = {
    status: 'idle',
    feedStatus: 'idle',
    posts: null,
    errorMessage: null,
    selected: null,
    popoverPost: null,
    containerDimensions: {
        w: null,
        h: null
    },
    popoverPosition: {
        x: null,
        y: null
    }
};


export const BlueSkySlice = createSlice({
    name: 'blueSkyPosts',
    initialState: initialState,
    reducers: {
        selectPost: (state, action) => {
            state.selected = action.payload
        },
        getStoredPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        getPopoverPosition: (state, action: PayloadAction<PopoverXY>) => {
            const coordinates = action.payload;
            state.popoverPosition.x = coordinates.x;
            state.popoverPosition.y = coordinates.y;
        },
        getPopoverPost: (state, action) => {
            state.popoverPost = action.payload;
        },
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
            state.feedStatus = 'pending';
        })
        builder.addCase(getFeed.fulfilled, (state, action) => {
            state.feedStatus = 'fulfilled';
            state.posts = action.payload;
        })
        builder.addCase(getFeed.rejected, (state) => {
            state.feedStatus = 'rejected';
            state.errorMessage = 'Could Not fetch BlueSky Feed'
        })
    }
});

export const { resetBlueSkyState, selectPost, getStoredPosts, getPopoverPosition, getPopoverPost } = BlueSkySlice.actions;

export default BlueSkySlice.reducer;