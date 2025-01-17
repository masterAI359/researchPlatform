import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface StepState {

    step: number,
    denied: boolean
}


const initialState: StepState = {

    step: 0,
    denied: null
}


export const StepSlice = createSlice({

    name: "StepsCounter",
    initialState: initialState,
    reducers: {
        increment: (state) => {

            state.step += 1
            console.log(state.step)
        },

        decrement: (state) => {

            state.step -= 1
        },

        incrementBy: (state, action: PayloadAction<number>) => {
            state.step += action.payload
        },
        denyIncrement: (state, action) => {
            state.denied = action.payload
            console.log(state.denied)
        }
    }

})


export const { increment, decrement, incrementBy, denyIncrement } = StepSlice.actions

export default StepSlice.reducer