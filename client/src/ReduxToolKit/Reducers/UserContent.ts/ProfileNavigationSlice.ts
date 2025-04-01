import { createSlice } from "@reduxjs/toolkit";
import { acceptedInput } from "../Investigate/Steps";

interface NavigateProfile {

    displaySavedArticles: boolean,
    displaySavedInvestigations: boolean,
    displayDeleteModal: boolean,
    displayAccountManagement: boolean
}

const initialState: NavigateProfile = {
    displaySavedArticles: false,
    displaySavedInvestigations: true,
    displayDeleteModal: false,
    displayAccountManagement: false
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
        },
        presentManagement: (state, action) => {
            state.displayAccountManagement = action.payload
        }
    }
})


export const { presentArticles, presentResearch, presentDeleteModal, presentManagement } = ProfileNavigationSlice.actions

export default ProfileNavigationSlice.reducer