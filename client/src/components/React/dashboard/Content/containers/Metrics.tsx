import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ScrolltoTop from "@/helpers/ScrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { variants } from "@/motion/variants";
import { useEffect } from "react";
import ChartJsWrapper from "../UserCharts/ChartJsWrapper";
import StatsSkeleton from "@/components/React/charts/skeletons/StatsSkeleton";
import MetricsFallback from "../wrappers/MetricsFallback";
const StatsSection = lazy(() => import('../../../charts/ResearchStats/StatsSection'));
import { useCalculateStats } from "@/Hooks/useCalculateStats";

export default function Metrics() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const { stats, getStats } = useCalculateStats();
    const hasInvestigations: boolean = Array.isArray(investigations) && (investigations.length > 0);
    const hasArticles: boolean = Array.isArray(userArticles) && (userArticles.length > 0);
    const noSavedData: boolean = (hasArticles === false) && (hasInvestigations === false);
    const statsPopulated: boolean = Object.values(stats).some((el: number) => el !== null);

    //TODO: create web worker for stats calculation - statsWorker.js scaffolded already

    useEffect(() => {

        getStats();

    }, [getStats]);

    return (
        <motion.section
            key={"dashboard"}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-auto mx-auto h-full relative md:right-0 md:bottom-0 flex 
            flex-col gap-y-20 2xl:gap-y-24 justify-center xl:justify-start 
            items-center 2xl:px-52 grow 2xl:pb-96 p-4 md:p-0"
        >
            <ScrolltoTop
            />
            {noSavedData && <MetricsFallback />}

            {hasArticles && <ChartJsWrapper />}

            {(hasInvestigations) && (statsPopulated) &&
                <Suspense fallback={<StatsSkeleton />}>
                    <StatsSection stats={stats} />
                </Suspense>}
        </motion.section>
    );
};