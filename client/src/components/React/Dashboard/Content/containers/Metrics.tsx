import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import ScrolltoTop from "../../../../helpers/ScrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { variants } from "@/motion/variants";
import ChartJsWrapper from "../Content/UserCharts/ChartJsWrapper";
import StatsSkeleton from "../../Charts/skeletons/StatsSkeleton";
const StatsSection = lazy(() => import('../../Charts/ResearchStats/StatsSection'));

export default function Metrics() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const hasInvestigations = Array.isArray(investigations) && (investigations.length > 0);

    return (
        <motion.section
            key={"dashboard"}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-auto mx-auto h-full relative md:right-0 md:bottom-0 flex flex-col gap-y-20
        2xl:gap-y-24 justify-center xl:justify-start items-center 2xl:px-52 grow 2xl:pb-96
        p-4 md:p-0
        "
        >
            <ScrolltoTop />
            <ChartJsWrapper />

            {hasInvestigations &&
                <Suspense fallback={<StatsSkeleton />}>
                    <StatsSection />
                </Suspense>
            }

        </motion.section>
    );
};