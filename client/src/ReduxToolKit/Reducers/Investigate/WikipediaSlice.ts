import { createSlice, createAsyncThunk, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";


const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

export const getWikiExtract = createAsyncThunk('investigate/getWikiExtract', async (
    term: string
    ):Promise<any> => {

    const encodedQuery: string = encodeURIComponent(term);

    const url: string = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedQuery}`;

    try {
            const result = await fetch(url, options);
            if(!result.ok) {
                throw new Error('Could not connect to Wikipedia API!');
            }
            const data = await result.json();
            if(data) return data;

    } catch (err) {
        console.log(err);
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
    title: string | null,
    timestamp: string | null,
    desktopLink: string | null,
    mobileLink: string | null,
    modalPosition: modalXY | null
    selectedText: string | null
}

const initialState: WikiTypes = {
    gettingSelection: false,
    status: 'idle',
    extract: null,
    title: null,
    timestamp: null,
    desktopLink: null,
    mobileLink: null,
    modalPosition: null,
    selectedText: null
}


export const WikipediaSlice = createSlice({
    name: 'investigate/wikiExtract',
    initialState: initialState,
    reducers: {
        selectingText: (state) => {
            state.gettingSelection = !state.gettingSelection
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
            state.desktopLink = action.payload.desktop.page;
            state.mobileLink = action.payload.mobile.page;
        })
        builder.addCase(getWikiExtract.rejected, (state) => {
            state.status = 'rejected';
        })
    }
})


export const { selectingText, getModalPosition, clearWikiSlice, getSelectedText } = WikipediaSlice.actions;

export default WikipediaSlice.reducer;