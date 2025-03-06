import { createSlice } from "@reduxjs/toolkit";

interface NavigateProfile {

    displaySavedArticles: boolean,
    displaySavedInvestigations: boolean,
}

const initialState: NavigateProfile = {
    displaySavedArticles: false,
    displaySavedInvestigations: true
}



const ProfileNavigationSlice = createSlice({
    name: 'profileNav',
    initialState: initialState,
    reducers: {
        presentArticles: (state, action) => {
            state.displaySavedArticles = action.payload
        },
        presentResearch: (state, action) => {
            state.displaySavedInvestigations = action.payload
        }
    }
})


export const { presentArticles, presentResearch } = ProfileNavigationSlice.actions

export default ProfileNavigationSlice.reducer