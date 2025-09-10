import { lazy, Suspense, useRef, useEffect } from "react";
import PieSkeleton from "@/components/React/features/charts/skeletons/PieSkeleton";
import DonutSkeleton from "@/components/React/features/charts/skeletons/DonutSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";
import { RootState } from "@/ReduxToolKit/store";
import { getBiasSnapshot, getReportingRatings } from "@/ReduxToolKit/Reducers/UserContent/ChartSlice";
import BiasWebWorker from '@/services/workers/biasSnapshot.js?worker';
import IntegrityWebWorker from '@/services/workers/integrityWorker.js?worker';
const BiasChart = lazy(() => import('@/components/React/features/charts/DonutChart/BiasChart'))
const IntegrityChart = lazy(() => import('@/components/React/features/charts/PieChart/IntegrityChart'));

export default function ChartJsWrapper() {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const biasRatings = useSelector((state: RootState) => state.chart.biasRatings);
    const ratingData = useSelector((state: RootState) => state.chart.reportingIntegrity);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!Array.isArray(userArticles) || (userArticles.length === 0)) return;
        if (Array.isArray(ratingData) && (ratingData.length > 0)) return;

        const worker = new IntegrityWebWorker();
        let raf: any = 0;

        worker.onmessage = (e: MessageEvent) => {
            const payload: number[] = e.data;
            cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                dispatch(getReportingRatings(payload));
            });
        };

        worker.postMessage(userArticles);

        return () => {
            worker.terminate();
        }
    }, [userArticles, ratingData]);


    useEffect(() => {
        if (!userArticles || userArticles.length === 0) return;
        if (Array.isArray(biasRatings) && (biasRatings.length > 0)) return;

        const biasWorker = new BiasWebWorker();
        let raf: any = 0;

        biasWorker.onmessage = (e: MessageEvent) => {
            const payload: number[] = e.data.chartData;
            cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                dispatch(getBiasSnapshot(payload));
            });
        };

        biasWorker.postMessage(userArticles);

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