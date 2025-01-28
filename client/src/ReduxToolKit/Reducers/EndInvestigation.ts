import { createSlice } from '@reduxjs/toolkit'


interface EndState {

    endProcess: boolean | null,
    saveInput: boolean | null
}


const initialState = {
    endProcess: false,
    saveInput: null
}


export const EndInvestigateSlice = createSlice({

    name: 'endInvestigate',
    initialState: initialState,
    reducers: {
        endInvestigate: (state, action) => {
            state.endProcess = action.payload
        }
    }
})


export const { endInvestigate } = EndInvestigateSlice.actions

export default EndInvestigateSlice.reducer