import { useEffect, useMemo, useRef, useState } from "react";
import { WebWorkerRequest, WebWorkerResponse } from "@/env";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { getBiasSnapshot, getReportingRatings } from "@/ReduxToolKit/Reducers/UserContent/ChartSlice";



export function useChartWorkers(chartTasks: WebWorkerRequest[]) {
    const dispatch = useDispatch<AppDispatch>();
    const processedBias = useRef<boolean | null>(null);
    const processedIntegrity = useRef<boolean | null>();
    const [biasRatings, setBiasRatings] = useState(null);
    const [integrityRatings, setIntegrityRatings] = useState(null);




    useEffect(() => {
        if (chartTasks.length === 0) return;




    }, []);


    return { biasRatings: biasRatings, integrityRatings: integrityRatings };
};