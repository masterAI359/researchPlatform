import { lazy, Suspense, useRef } from "react";
import PieSkeleton from "@/components/React/charts/skeletons/PieSkeleton";
import DonutSkeleton from "@/components/React/charts/skeletons/DonutSkeleton";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
const BiasChart = lazy(() => import('@/components/React/charts/DonutChart/BiasChart'))
const IntegrityChart = lazy(() => import('@/components/React/charts/PieChart/IntegrityChart'))
import { useEffect } from "react";
import { getBiasSnapshot, getReportingRatings } from "@/ReduxToolKit/Reducers/UserContent.ts/ChartSlice";

export default function ChartJsWrapper() {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const biasRatings = useSelector((state: RootState) => state.chart.biasRatings);
    const ratingData = useSelector((state: RootState) => state.chart.reportingIntegrity);
    const processedIntegrity = useRef<boolean | null>(null);
    const processedBiases = useRef<boolean | null>(null);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        if (!userArticles || userArticles.length === 0) return;
        if (processedIntegrity.current === true) return;

        const worker = new Worker(
            new URL('../../../../../services/workers/sourceWorker.js', import.meta.url),
            { type: 'module' }
        );

        worker.onmessage = (e: MessageEvent<WebWorkerResponse>) => {
            dispatch(getReportingRatings(e.data.chartData));
            processedIntegrity.current = true;
        };

        worker.postMessage(userArticles);

        return () => {
            worker.terminate();
        }
    }, [userArticles]);


    useEffect(() => {
        if (!userArticles || userArticles.length === 0) return;
        if (processedBiases.current === true) return;
        const biasWorker = new Worker(
            new URL('../../../../../services/workers/biasSnapshot.js', import.meta.url),
            { type: 'module' }
        );

        let raf: any = 0;

        biasWorker.onmessage = (e: MessageEvent<WebWorkerResponse>) => {
            const payload: IntegrityRatings | number[] | null = e.data.chartData;
            cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                dispatch(getBiasSnapshot(payload));
                processedBiases.current = true;
            });
        };

        const message: WebWorkerRequest = {
            input: userArticles,
            type: "BiasSS"
        };

        biasWorker.postMessage(message);

        return () => {
            biasWorker.terminate();
        }

    }, [userArticles])

    return (
        <>
            {Array.isArray(biasRatings) && (biasRatings.length > 0) &&
                <Suspense fallback={<DonutSkeleton />}>
                    <BiasChart />
                </Suspense>}


            {Array.isArray(ratingData) && (ratingData.length > 0) &&
                <Suspense fallback={<PieSkeleton />}>
                    <IntegrityChart />
                </Suspense>}
        </>
    );
};