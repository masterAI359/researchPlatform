import { createSlice } from "@reduxjs/toolkit";
import { acceptedInput } from "../Investigate/Steps";

interface NavigateProfile {

    displaySavedArticles: boolean,
    displaySavedInvestigations: boolean,
    displayDeleteModal: boolean,
    displayAccountManagement: boolean,
    displayDashboard: boolean,
    displayThisInvestigation: boolean,
    displayThisArticle: boolean,
    backToArticles: boolean,
    backToResearch: boolean
}

const initialState: NavigateProfile = {
    displaySavedArticles: false,
    displaySavedInvestigations: false,
    displayDeleteModal: false,
    displayAccountManagement: false,
    displayDashboard: true,
    displayThisInvestigation: false,
    displayThisArticle: false,
    backToArticles: false,
    backToResearch: false
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
            state.displayThisInvestigation = false;
            state.displayThisArticle = false;
            state.backToResearch = false;
            state.backToArticles = true;
        },
        presentResearch: (state) => {
            state.displaySavedInvestigations = true;
            state.displayAccountManagement = false;
            state.displaySavedArticles = false;
            state.displayDashboard = false;
            state.displayThisInvestigation = false;
            state.displayThisArticle = false;
            state.backToResearch = true;
            state.backToArticles = false;
        },
        presentDeleteModal: (state, action) => {
            state.displayDeleteModal = action.payload;

        },
        presentManagement: (state) => {
            state.displayAccountManagement = true;
            state.displayDashboard = false;
            state.displaySavedArticles = false;
            state.displaySavedInvestigations = false;
            state.displayThisInvestigation = false;
            state.displayThisArticle = false;
            state.backToResearch = false;
            state.backToArticles = false;
        },
        presentDashboard: (state) => {
            state.displayDashboard = true;
            state.displaySavedInvestigations = false;
            state.displaySavedArticles = false;
            state.displayAccountManagement = false;
            state.displayThisInvestigation = false;
            state.displayThisArticle = false;
            state.backToResearch = false;
            state.backToArticles = false;
        },
        presentThisInvestigation: (state) => {
            state.displayThisInvestigation = true;
            state.displayAccountManagement = false;
            state.displaySavedInvestigations = false;
            state.displaySavedArticles = false;
            state.displaySavedInvestigations = false;
            state.displayThisArticle = false;
        },
        presentThisArticle: (state) => {
            state.displayThisArticle = true;
            state.displayThisInvestigation = false;
            state.displayAccountManagement = false;
            state.displaySavedInvestigations = false;
            state.displaySavedArticles = false;
            state.displaySavedInvestigations = false;
        }
    }
});


export const { presentArticles, presentResearch, presentDeleteModal, presentManagement, presentDashboard, presentThisInvestigation, presentThisArticle } = ProfileNavigationSlice.actions;

export default ProfileNavigationSlice.reducer;