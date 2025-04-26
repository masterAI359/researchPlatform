import { combineReducers } from "@reduxjs/toolkit";
import StepsReducer from '../Investigate/Steps'
import UserPOVReducer from '../Investigate/UserPOV'
import NoteReducer from '../Investigate/NoteTaking'
import ReadingReducer from '../Investigate/Reading'
import SelectingArticles from '../Investigate/ChosenArticles'
import SearchResults from '../Investigate/SearchResults'
import ReviewReducer from '../Investigate/Review'
import HelpReducer from '../Investigate/HelpModal'
import EndInvestigateReducer from '../Investigate/EndInvestigation'
import DisplayReducer from '../Investigate/DisplayReducer'
import BlueSkySlice from "../Investigate/BlueSkySlice";

const investigateReducer = combineReducers({
    stepper: StepsReducer,
    pov: UserPOVReducer,
    notes: NoteReducer,
    read: ReadingReducer,
    getArticle: SelectingArticles,
    search: SearchResults,
    review: ReviewReducer,
    help: HelpReducer,
    end: EndInvestigateReducer,
    display: DisplayReducer,
    bluesky: BlueSkySlice
})


export const InvestigateFeature = (state: any, action: any) => {

    if (action.type === 'clear') {
        return investigateReducer(undefined, action)
    }

    return investigateReducer(state, action)
}