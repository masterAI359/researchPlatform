import { lazy, Suspense } from "react";
import PieSkeleton from "@/components/React/charts/skeletons/PieSkeleton";
import DonutSkeleton from "@/components/React/charts/skeletons/DonutSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
const BiasChart = lazy(() => import('@/components/React/charts/DonutChart/BiasChart'))
const IntegrityChart = lazy(() => import('@/components/React/charts/PieChart/IntegrityChart'))


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