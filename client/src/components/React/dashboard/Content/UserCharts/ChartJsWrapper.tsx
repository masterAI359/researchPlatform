import { lazy, Suspense } from "react";
import PieSkeleton from "@/components/React/Charts/skeletons/PieSkeleton";
import DonutSkeleton from "@/components/React/Charts/skeletons/DonutSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
const BiasChart = lazy(() => import('@/components/React/Charts/DonutChart/BiasChart'))
const IntegrityChart = lazy(() => import('@/components/React/Charts/PieChart/IntegrityChart'))


export default function ChartJsWrapper() {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);

    return (
        <>
            {Array.isArray(userArticles) && (userArticles.length > 0) &&
                <Suspense fallback={<DonutSkeleton />}>
                    <BiasChart />
                </Suspense>}

            {Array.isArray(userArticles) && (userArticles.length > 0) &&
                <Suspense fallback={<PieSkeleton />}>
                    <IntegrityChart />
                </Suspense>}
        </>
    );
};