import { configureStore } from '@reduxjs/toolkit'
import { InvestigateFeature } from './Reducers/Root/InvestigateReducer'
import AuthenticateReducer from './Reducers/Athentication/Authentication'
import UserContentSlice from './Reducers/UserContent.ts/UserContentReducer'
import userInvestigationSlice from './Reducers/UserContent.ts/UserInvestigations'
import ProfileNavigationSlice from './Reducers/UserContent.ts/ProfileNavigationSlice'
import SaveInvestigationSlice from './Reducers/UserContent.ts/SaveInvestigationSlice'
import NewUserSlice from './Reducers/Athentication/NewUserSlice'

export const store = configureStore({
    reducer: {
        investigation: InvestigateFeature,
        auth: AuthenticateReducer,
        userdata: UserContentSlice,
        userWork: userInvestigationSlice,
        profileNav: ProfileNavigationSlice,
        saveResearch: SaveInvestigationSlice,
        newUser: NewUserSlice
    }

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch