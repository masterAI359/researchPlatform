import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const options: OptionsTypes = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}

export const GetArticleContent = createAsyncThunk('content/getArticleContent',
    async (articlesToSummarize: any, thunkAPi) => {

        try {
            const tldrResponse = await fetch(`/summarize?q=${articlesToSummarize}`, options)

            if (!tldrResponse.ok) {
                throw new Error('There was an issue with TLDR API')
            }

            const tldrJSON = await tldrResponse.json()

            return tldrJSON

        } catch (error) {
            console.log(error.message)
            return thunkAPi.rejectWithValue(error.message)
        }
    }
)


interface ReadingState {

    getContent: boolean | null,
    summaries: Array<any> | null,
    failedNotifications: Array<any> | null,
    currentStory: number | null,
    reading: boolean | null,
    paginateLimit: boolean | null,
    ContentStatus: string
}


const initialState: ReadingState = {

    getContent: false,
    summaries: null,
    failedNotifications: null,
    currentStory: 0,
    reading: false,
    paginateLimit: false,
    ContentStatus: 'idle'
}


export const ReadingSlice = createSlice({
    name: 'readingReducer',
    initialState: initialState,
    reducers: {
        getStories: (state, action) => {
            state.getContent = action.payload
        },
        articleData: (state, action) => {
            state.summaries = action.payload
        },
        rejected: (state, action) => {
            state.failedNotifications = action.payload
        },
        closeNotification: (state, action) => {
            state.failedNotifications.splice(action.payload, 1)
        },
        incrementStory: (state) => {
            state.currentStory = state.currentStory += 1
        },
        decrementStory: (state) => {
            state.currentStory -= 1
        },
        isReading: (state, action) => {
            state.reading = action.payload
        },
        resetData: () => initialState,
        limitPagination: (state, action) => {
            state.paginateLimit = action.payload
        }

    },
    extraReducers: (builder) => {

        builder.addCase(GetArticleContent.fulfilled, (state, action) => {
            state.ContentStatus = 'fulfilled'
            state.summaries = action.payload.retrieved
            state.failedNotifications = action.payload.rejected
        }),
            builder.addCase(GetArticleContent.rejected, (state, action) => {
                state.ContentStatus = 'rejected'
            }),
            builder.addCase(GetArticleContent.pending, (state, action) => {
                state.ContentStatus = 'pending'
            })
    }
})


export const {
    articleData,
    rejected,
    incrementStory,
    decrementStory, isReading,
    resetData,
    closeNotification,
    limitPagination } = ReadingSlice.actions

export default ReadingSlice.reducer