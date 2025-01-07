import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserPOVState {

    idea: string | null,
    perspective: string | null,
    expertise: string | null,
    biases: string | null,
    premises: string | null,
    query: string | null
}

const initialState = {

    idea: null,
    perspective: null,
    expertise: null,
    biases: null,
    premises: null,
    query: null
}


