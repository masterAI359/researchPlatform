import { configureStore } from '@reduxjs/toolkit'
import StepsReducer from './Reducers/Steps'
import UserPOVReducer from './Reducers/UserPOV'

export const store = configureStore({
    reducer: {
        stepper: StepsReducer,
        pov: UserPOVReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch