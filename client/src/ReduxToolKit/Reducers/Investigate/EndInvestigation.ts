import { createSlice } from '@reduxjs/toolkit'


interface EndState {

    endProcess: boolean | null,
    ending: boolean | null
    saveInput: boolean | null
}


const initialState: EndState = {
    endProcess: false,
    saveInput: null,
    ending: false
}


export const EndInvestigateSlice = createSlice({

    name: 'endInvestigate',
    initialState: initialState,
    reducers: {
        endInvestigate: (state, action) => {
            state.endProcess = action.payload
        },
        endingView: (state, action) => {
            state.ending = action.payload
        }
    }
})


export const { endInvestigate, endingView } = EndInvestigateSlice.actions

export default EndInvestigateSlice.reducer