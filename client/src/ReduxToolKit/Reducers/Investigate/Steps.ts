import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { bool } from 'prop-types'


export interface StepState {

    step: number,
    denied: boolean | null,
    acceptInput: boolean | null
}


const initialState: StepState = {

    step: 0,
    denied: null,
    acceptInput: null
}


export const StepSlice = createSlice({

    name: "StepsCounter",
    initialState: initialState,
    reducers: {
        increment: (state) => {

            state.step += 1
        },

        decrement: (state) => {

            state.step -= 1
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.step += action.payload
        },
        backToStart: (state) => {
            state.step = 0
        },
        denyIncrement: (state, action) => {
            state.denied = action.payload
            console.log(state.denied)
        },
        acceptedInput: (state, action) => {
            state.acceptInput = action.payload
        }
    }

})


export const { increment, decrement, incrementBy, denyIncrement, acceptedInput, backToStart } = StepSlice.actions

export default StepSlice.reducer