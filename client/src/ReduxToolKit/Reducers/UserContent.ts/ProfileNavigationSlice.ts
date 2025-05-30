import { createSlice } from "@reduxjs/toolkit";
import { acceptedInput } from "../Investigate/Steps";

interface NavigateProfile {

    displaySavedArticles: boolean,
    displaySavedInvestigations: boolean,
    displayDeleteModal: boolean,
    displayAccountManagement: boolean,
    displayDashboard: boolean
}

const initialState: NavigateProfile = {
    displaySavedArticles: false,
    displaySavedInvestigations: false,
    displayDeleteModal: false,
    displayAccountManagement: false,
    displayDashboard: true
}



const ProfileNavigationSlice = createSlice({
    name: 'profileNav',
    initialState: initialState,
    reducers: {
        presentArticles: (state) => {
            state.displaySavedArticles = true;
            state.displayAccountManagement = false;
            state.displayDashboard = false;
            state.displaySavedInvestigations = false;

        },
        presentResearch: (state) => {
            state.displaySavedInvestigations = true;
            state.displayAccountManagement = false;
            state.displaySavedArticles = false;
            state.displayDashboard = false;
        },
        presentDeleteModal: (state, action) => {
            state.displayDeleteModal = action.payload;

        },
        presentManagement: (state) => {
            state.displayAccountManagement = true;
            state.displayDashboard = false;
            state.displaySavedArticles = false;
            state.displaySavedInvestigations = false;
        },
        presentDashboard: (state) => {
            state.displayDashboard = true;
            state.displaySavedInvestigations = false;
            state.displaySavedArticles = false;
            state.displayAccountManagement = false;
        }
    }
});


export const { presentArticles, presentResearch, presentDeleteModal, presentManagement, presentDashboard } = ProfileNavigationSlice.actions;

export default ProfileNavigationSlice.reducer;