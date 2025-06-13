import { configureStore } from '@reduxjs/toolkit'
import { InvestigateFeature } from './Reducers/Root/InvestigateReducer'
import AuthenticateReducer from './Reducers/Athentication/Authentication'
import UserContentSlice from './Reducers/UserContent.ts/UserContentReducer'
import userInvestigationSlice from './Reducers/UserContent.ts/UserInvestigations'
import ProfileNavigationSlice from './Reducers/UserContent.ts/ProfileNavigationSlice'
import SaveInvestigationSlice from './Reducers/UserContent.ts/SaveInvestigationSlice'
import NewUserSlice from './Reducers/Athentication/NewUserSlice'
import FeedBackSlice from './Reducers/Feedback/FeedbackSlice'
import BlueSkySlice from './Reducers/BlueSky/BlueSkySlice'
import ChartSlice from './Reducers/UserContent.ts/ChartSlice';

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