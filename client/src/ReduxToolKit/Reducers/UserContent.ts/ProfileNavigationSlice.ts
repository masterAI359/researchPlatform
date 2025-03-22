import { createSlice } from "@reduxjs/toolkit";

interface NavigateProfile {

    displaySavedArticles: boolean,
    displaySavedInvestigations: boolean,
    displayDeleteModal: boolean
}

const initialState: NavigateProfile = {
    displaySavedArticles: false,
    displaySavedInvestigations: true,
    displayDeleteModal: false
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
        },
        presentDeleteModal: (state, action) => {
            state.displayDeleteModal = action.payload
        }
    }
})


export const { presentArticles, presentResearch, presentDeleteModal } = ProfileNavigationSlice.actions

export default ProfileNavigationSlice.reducer