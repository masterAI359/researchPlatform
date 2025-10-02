import { motion } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import ScrolltoTop from "@/helpers/ScrollToTop";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootState, AppDispatch } from "@/ReduxToolKit/store";
import { variants } from "@/motion/variants";
import { useEffect } from "react";
import { getStatsBreakdown } from "@/ReduxToolKit/Reducers/UserContent/UserInvestigations";
import type { StatBreakdownTypes } from "@/env";
import ChartJsWrapper from "../UserCharts/ChartJsWrapper";
import StatsSkeleton from "@/components/React/features/charts/skeletons/StatsSkeleton";
import MetricsFallback from "../wrappers/MetricsFallback";
import StatsWorker from '@/services/workers/statsWorker.js?worker';
import StatsFallback from "../../../charts/ChartFallbacks/StatsFallback";
const StatsSection = lazy(() => import('../../../charts/ResearchStats/StatsSection'));


export default function Metrics() {
    const { userResearch, stats } = useSelector((state: RootState) => state.userWork, shallowEqual);
    const hasInvestigations: boolean = Array.isArray(userResearch) && (userResearch.length > 0);
    const statsPopulated: boolean = Object.values(stats).some((el: number) => el !== null);
    const calcRef = useRef<boolean | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!hasInvestigations || statsPopulated) return;

        const worker = new StatsWorker();
        let raf: any = 0;

        try {

            worker.onmessage = (e: MessageEvent) => {
                const payload: StatBreakdownTypes = e.data.chartData;

                cancelAnimationFrame(raf);

                raf = requestAnimationFrame(() => {
                    dispatch(getStatsBreakdown(payload));
                    calcRef.current = true;
                });
            };

            worker.postMessage(userResearch);

        } catch (error) {
            calcRef.current = false;
            console.error(error);
        }

        return () => {
            worker.terminate();
            if (calcRef.current !== null) calcRef.current = null;
        };

    }, [userResearch]);

    return (
        <motion.section
            key={"dashboard"}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-auto mx-auto h-full min-h-dvh relative md:right-0 md:bottom-0 flex 
            flex-col gap-y-20 2xl:gap-y-24 justify-center xl:justify-start 
            items-center 2xl:px-52 grow 2xl:pb-96 p-4 md:p-0"
        >
            <ScrolltoTop
            />

            <ChartJsWrapper />

            <Suspense fallback={<StatsSkeleton />}>
                {statsPopulated && <StatsSection />}
            </Suspense>

            {(calcRef.current === false) && <StatsFallback />}
        </motion.section>
    );
};