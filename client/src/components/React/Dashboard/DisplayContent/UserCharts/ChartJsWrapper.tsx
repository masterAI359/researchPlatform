import { lazy, Suspense } from "react";
import PieSkeleton from "@/components/React/Placeholders/PieSkeleton";
import DonutSkeleton from "@/components/React/Placeholders/DonutSkeleton";
const BiasChart = lazy(() => import('@/components/React/Charts/DonutChart/BiasChart'))
const IntegrityChart = lazy(() => import('@/components/React/Charts/PieChart/IntegrityChart'))


export default function ChartJsWrapper() {

    return (
        <>
            <Suspense fallback={<DonutSkeleton />}>
                <BiasChart />
            </Suspense>

            <Suspense fallback={<PieSkeleton />}>
                <IntegrityChart />
            </Suspense>
        </>
    );
};