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
    enterValidEmail: string | null,
    mustMatchFirstPassword: string | null
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
    enterValidEmail: null,
    mustMatchFirstPassword: null

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
        showLengthRequirement: (state, action) => {
            state.passWordLengthRequired = action.payload
        },
        showSpecialCharsWarning: (state) => {
            state.mustHaveSpecialChars = 'password must contain at least 1 special character'
        },
        requestValidEmail: (state, action) => {
            state.enterValidEmail = action.payload
        },
        matchPasswords: (state, action) => {
            state.mustMatchFirstPassword = action.payload
        }
    }
})


export const { getNewEmail, getFirstPassword, getSecondPassword, showLengthRequirement, showSpecialCharsWarning, requestValidEmail, matchPasswords } = NewUserSlice.actions

export default NewUserSlice.reducer