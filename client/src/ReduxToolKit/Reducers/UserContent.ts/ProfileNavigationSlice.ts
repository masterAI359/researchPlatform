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

    }
})