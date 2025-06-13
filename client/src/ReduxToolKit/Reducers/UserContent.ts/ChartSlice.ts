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
        }
    }
});


export const { getReportingRatings } = ChartSlice.actions;

export default ChartSlice.reducer;