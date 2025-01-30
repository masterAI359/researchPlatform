import { combineReducers } from "@reduxjs/toolkit";
import StepsReducer from './Steps'
import UserPOVReducer from './UserPOV'
import NoteReducer from './NoteTaking'
import ReadingReducer from './Reading'
import SelectingArticles from './ChosenArticles'
import SearchResults from './SearchResults'
import ReviewReducer from './Review'
import HelpReducer from './HelpModal'
import EndInvestigateReducer from './EndInvestigation'
import AuthenticationReducer from './Authentication'


const appReducer = combineReducers({
    stepper: StepsReducer,
    pov: UserPOVReducer,
    notes: NoteReducer,
    read: ReadingReducer,
    getArticle: SelectingArticles,
    search: SearchResults,
    review: ReviewReducer,
    help: HelpReducer,
    end: EndInvestigateReducer,
    auth: AuthenticationReducer

})


export const rootReducer = (state: any, action: any) => {

    if (action.type === 'clear') {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}