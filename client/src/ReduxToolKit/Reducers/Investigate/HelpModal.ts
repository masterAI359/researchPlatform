import { createSlice } from "@reduxjs/toolkit";
import { Help } from "@/env";

interface HelpModal {
    gettingHelp: boolean | null,
    helpInfo: Help[] | null
}

const initialState: HelpModal = {
    gettingHelp: false,
    helpInfo: null
}


export const HelpSlice = createSlice({
    name: 'HelpModal',
    initialState: initialState,
    reducers: {
        getHelp: (state, action) => {
            state.gettingHelp = action.payload;
        },
        getHelpInfo: (state, action) => {
            state.helpInfo = action.payload
        }
    }
})

export const { getHelp } = HelpSlice.actions

export default HelpSlice.reducer