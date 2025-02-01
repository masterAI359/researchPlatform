import { createSlice } from "@reduxjs/toolkit";

interface HelpModal {
    gettingHelp: boolean | null
}

const initialState = {
    gettingHelp: false
}


export const HelpSlice = createSlice({
    name: 'HelpModal',
    initialState: initialState,
    reducers: {
        getHelp: (state, action) => {
            state.gettingHelp = action.payload
        }
    }
})

export const { getHelp } = HelpSlice.actions

export default HelpSlice.reducer