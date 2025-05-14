import { createSlice, createAsyncThunk,  PayloadAction } from "@reduxjs/toolkit";

const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

export const getWikiExtract = createAsyncThunk('investigate/getWikiExtract', async (
    term: string, thunkAPI
    ):Promise<any> => {

    const encodedQuery: string = encodeURIComponent(term);
    const url: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`;

    try {
            const result = await fetch(url, options);
            if(!result.ok) {
                const status = result.status;
                let message = 'An unexpected error occurred while retrieving information.';
                if (status === 404) {
                  message = 'No summary was found for the highlighted term. Be carefult to only highlight a short phrase or a short phrase, else we cannot retrieve any information';
                } else if (status === 429) {
                  message = 'Too many requests. Please try again shortly.';
                } else if (status >= 500) {
                  message = 'Wikipedia is currently unavailable. Please try again later.';
                }
                    throw new Error(message);
            }
            const data = await result.json();
            if(data) {
                console.log(data)
                return data
            };

    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(`${err.message}` || 'Unknown Error')
    }
})

interface modalXY {
    x: number,
    y: number
}

interface WikiTypes {
    gettingSelection: boolean
    status: string,
    extract: string | null,
    description: string | null
    title: string | null,
    timestamp: string | null,
    desktopLink: string | null,
    mobileLink: string | null,
    modalPosition: modalXY | null
    selectedText: string | null,
    errormessage: any
}

const initialState: WikiTypes = {
    gettingSelection: false,
    status: 'idle',
    extract: null,
    description: null,
    title: null,
    timestamp: null,
    desktopLink: null,
    mobileLink: null,
    modalPosition: null,
    selectedText: null,
    errormessage: null
}


export const WikipediaSlice = createSlice({
    name: 'investigate/wikiExtract',
    initialState: initialState,
    reducers: {
        selectingText: (state, action) => {
            state.gettingSelection = action.payload;
        },
        getModalPosition: (state, action: PayloadAction<{x: number, y: number}>) => {
         state.modalPosition = action.payload
        },
        getSelectedText: (state, action) => {
            state.selectedText = action.payload
        },
        clearWikiSlice: () => initialState
    },
    extraReducers: (builder) => {

        builder.addCase(getWikiExtract.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getWikiExtract.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.extract = action.payload.extract;
            state.title = action.payload.title;
            state.timestamp = action.payload.timestamp;
            state.description = action.payload.description;
        })
        builder.addCase(getWikiExtract.rejected, (state, action) => {
            state.status = 'rejected';
            state.errormessage = action.payload;
        })
    }
})


export const { selectingText, getModalPosition, clearWikiSlice, getSelectedText } = WikipediaSlice.actions;

export default WikipediaSlice.reducer;