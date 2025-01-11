import { createSlice } from '@reduxjs/toolkit'
import { SelectedArticle } from '@/env'


interface ChosenArticles {
    chosenArticles: Array<SelectedArticle> | null
}

const initialState: ChosenArticles = {
    chosenArticles: []
}


//currently using the given index of the article as the splice action.payload value

export const ArticlesSlice = createSlice({
    name: 'chosenArticles',
    initialState: initialState,
    reducers: {
        choose: (state, action) => {
            state.chosenArticles.push(action.payload)
        },
        discard: (state, action) => {
            state.chosenArticles.splice(action.payload, 1)
        }
    }
})


export const { choose, discard } = ArticlesSlice.actions

export default ArticlesSlice.reducer




