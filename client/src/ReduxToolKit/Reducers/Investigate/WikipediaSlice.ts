import { createSlice, createAsyncThunk, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { extractFromWiki, WikiResponse } from "@/services/wiki/wiki";
import { RootState } from "@/ReduxToolKit/store";

type WikiReject = string;

export const getWikiExtract = createAsyncThunk<WikiResponse, string, { rejectValue: WikiReject }>(
    'investigate/getWikiExtract',
    async (term, thunkAPI) => {
        try {
            const result = await extractFromWiki(term);
            console.log(result);
            return result;
        } catch (e) {
            const message =
                e instanceof Error ? e.message : 'Unknown Error';
            return thunkAPI.rejectWithValue(message);
        };
    }
);



interface modalXY {
    x: number,
    y: number
};


export interface ModalStages {
    display: boolean,
    highlight: boolean,
    confirmExtract: boolean,
    text: string | null,
};

interface WikiTypes {
    wikiModalStages: ModalStages,
    displayWikiModal: boolean,
    gettingSelection: boolean,
    status: string,
    extract: WikiResponse | null,
    modalPosition: modalXY | null,
    selectedText: string | null,
    errormessage: string | null
};

const initialState: WikiTypes = {
    wikiModalStages: {
        display: false,
        highlight: false,
        confirmExtract: false,
        text: null
    },
    displayWikiModal: false,
    gettingSelection: false,
    status: 'idle',
    extract: null,
    modalPosition: null,
    selectedText: null,
    errormessage: null
};


export const selectWikiExtract = (s: RootState) => s.investigation.wiki.extract;

export const selectWikiSummary = createSelector(
    selectWikiExtract,
    (x) => (x?.kind === "summary" ? x : null)
);

export const selectWikiDisambig = createSelector(
    selectWikiExtract,
    (x) => (x?.kind === "disambiguation" ? x : null)
);




export const WikipediaSlice = createSlice({
    name: 'investigate/wikiExtract',
    initialState: initialState,
    reducers: {
        selectingText: (state, action) => {
            state.gettingSelection = action.payload;
        },
        getModalPosition: (state, action: PayloadAction<{ x: number, y: number }>) => {
            state.modalPosition = action.payload
        },
        getSelectedText: (state, action) => {
            state.selectedText = action.payload
        },
        showWikiModal: (state) => {
            state.displayWikiModal = !state.displayWikiModal;
        },
        modalStages: (state, action: PayloadAction<ModalStages>) => {
            state.wikiModalStages = action.payload
        },

        clearWikiSlice: () => initialState
    },
    extraReducers: (builder) => {

        builder.addCase(getWikiExtract.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getWikiExtract.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            if (action.payload.kind !== 'error') {
                state.extract = action.payload;
            } else {
                state.errormessage = action.payload.message;
            }
        })
        builder.addCase(getWikiExtract.rejected, (state, action) => {
            state.status = 'rejected';
        })
    }
})


export const { selectingText, getModalPosition, clearWikiSlice, getSelectedText, showWikiModal, modalStages } = WikipediaSlice.actions;

export default WikipediaSlice.reducer;