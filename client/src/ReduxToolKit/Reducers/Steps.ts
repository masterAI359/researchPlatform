import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface StepState {

    step: number
}


const initialState: StepState = {

    step: 0,
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
        }
    }
})


export const { increment, decrement, incrementBy } = StepSlice.actions

export default StepSlice.reducer