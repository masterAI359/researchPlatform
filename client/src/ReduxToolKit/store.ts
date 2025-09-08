import { configureStore } from '@reduxjs/toolkit'
import { InvestigateFeature } from './Reducers/Root/InvestigateReducer'
import AuthenticateReducer from './Reducers/Athentication/Authentication'
import UserContentSlice from './Reducers/UserContent/UserContentReducer'
import userInvestigationSlice from './Reducers/UserContent/UserInvestigations'
import ProfileNavigationSlice from './Reducers/UserContent/ProfileNavigationSlice'
import SaveInvestigationSlice from './Reducers/UserContent/SaveInvestigationSlice'
import NewUserSlice from './Reducers/Athentication/NewUserSlice'
import FeedBackSlice from './Reducers/Feedback/FeedbackSlice'
import BlueSkySlice from './Reducers/BlueSky/BlueSkySlice'
import ChartSlice from './Reducers/UserContent/ChartSlice';

export const store = configureStore({
    reducer: {
        investigation: InvestigateFeature,
        auth: AuthenticateReducer,
        userdata: UserContentSlice,
        userWork: userInvestigationSlice,
        profileNav: ProfileNavigationSlice,
        saveResearch: SaveInvestigationSlice,
        newUser: NewUserSlice,
        feedback: FeedBackSlice,
        bluesky: BlueSkySlice,
        chart: ChartSlice
    }

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;