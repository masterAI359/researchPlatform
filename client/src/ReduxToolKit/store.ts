import { configureStore } from '@reduxjs/toolkit'
import StepsReducer from './Reducers/Steps'
import UserPOVReducer from './Reducers/UserPOV'
import NoteReducer from './Reducers/NoteTaking'
import ReadingReducer from './Reducers/Reading'

export const store = configureStore({
    reducer: {
        stepper: StepsReducer,
        pov: UserPOVReducer,
        notes: NoteReducer,
        read: ReadingReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch