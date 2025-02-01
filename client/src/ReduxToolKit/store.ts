import { configureStore } from '@reduxjs/toolkit'
import { InvestigateFeature } from './Reducers/Root/InvestigateReducer'
import AuthenticateReducer from './Reducers/Athentication/Authentication'


export const store = configureStore({
    reducer: {
        investigation: InvestigateFeature,
        auth: AuthenticateReducer
    }

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch