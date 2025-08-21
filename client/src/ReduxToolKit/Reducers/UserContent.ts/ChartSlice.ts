import { createSlice } from "@reduxjs/toolkit";

interface Chart {

    biasRatings: number[],
    reportingIntegrity: number[],
};

const initialState: Chart = {
    biasRatings: [],
    reportingIntegrity: []
}


export const ChartSlice = createSlice({
    name: 'chartData',
    initialState: initialState,
    reducers: {

        getReportingRatings: (state, action) => {

            const data = action.payload;
            state.reportingIntegrity = [
                data.veryHigh,
                data.high,
                data.mostlyFactual,
                data.mixed,
                data.low,
                data.veryLow,
                data.conspiracy,
                data.unknown
            ];
        },
        getBiasSnapshot: (state, action) => {
            const biasCounts = action.payload;
            state.biasRatings = [
                biasCounts.Right,
                biasCounts.Left,
                biasCounts.Center,
                biasCounts.Conspiracy,
                biasCounts.Questionable,
                biasCounts.Satire,
                biasCounts.Scientific
            ];
        }
    }
});


export const { getReportingRatings, getBiasSnapshot } = ChartSlice.actions;

export default ChartSlice.reducer;