import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface InitialStateType {
    emailInput: string | null,
    firstPassword: string | null,
    secondPassword: string | null,
    canSubmit: boolean | null,
    acceptedInput: boolean | null,
    accountCreated: boolean | null,
    passWordLengthRequired: string | null,
    mustHaveSpecialChars: string | null,
    enterValidEmail: string | null
}

const InitialState: InitialStateType = {
    emailInput: null,
    firstPassword: null,
    secondPassword: null,
    canSubmit: null,
    acceptedInput: null,
    accountCreated: null,
    passWordLengthRequired: null,
    mustHaveSpecialChars: null,
    enterValidEmail: null

}


const NewUserSlice = createSlice({
    name: 'newUser',
    initialState: InitialState,
    reducers: {
        getNewEmail: (state, action) => {
            state.emailInput = action.payload
        },
        getFirstPassword: (state, action) => {
            state.firstPassword = action.payload
        },
        getSecondPassword: (state, action) => {
            state.secondPassword = action.payload
        },
        showLengthRequirement: (state) => {
            state.passWordLengthRequired = 'password must be at least 8 characters'
        },
        showSpecialCharsWarning: (state) => {
            state.mustHaveSpecialChars = 'password must contain at least 1 special character'
        },
        requestValidEmail: (state) => {
            state.enterValidEmail = 'please enter a valid email address'
        }
    }
})


export const { getNewEmail, getFirstPassword, getSecondPassword, showLengthRequirement, showSpecialCharsWarning, requestValidEmail } = NewUserSlice.actions

export default NewUserSlice.reducer