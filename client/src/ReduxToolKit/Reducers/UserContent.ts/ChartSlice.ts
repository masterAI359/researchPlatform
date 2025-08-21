import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Chart {

    biasRatings: number[],
    reportingIntegrity: number[]
};

const initialState: Chart = {
    biasRatings: [],
    reportingIntegrity: []
};


export const ChartSlice = createSlice({
    name: 'chartData',
    initialState: initialState,
    reducers: {

        getReportingRatings: (state: Chart, action: PayloadAction<number[]>) => {
            state.reportingIntegrity = action.payload;
        },
        getBiasSnapshot: (state: Chart, action: PayloadAction<number[]>) => {
            state.biasRatings = action.payload;
        }
    }
});


export const { getReportingRatings, getBiasSnapshot } = ChartSlice.actions;

export default ChartSlice.reducer;