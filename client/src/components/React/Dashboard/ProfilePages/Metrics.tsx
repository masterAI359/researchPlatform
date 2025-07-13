import { motion } from "framer-motion";
import StatsSection from "../../Charts/ResearchStats/StatsSection";
import ScrolltoTop from "../../../../helpers/ScrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { variants } from "@/motion/variants";
import ChartJsWrapper from "../DisplayContent/UserCharts/ChartJsWrapper";
import StatsFallback from "../../Charts/ChartFallbacks/StatsFallback";
import FallbackWrapper from "../../Containers/FbWrapper";

export default function Metrics() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);

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
            {Array.isArray(userArticles) && (userArticles.length > 0)
                ? <ChartJsWrapper />
                : <FallbackWrapper />}

            {Array.isArray(investigations) && (investigations.length > 0)
                ? <StatsSection />
                : <StatsFallback />
            }
        </motion.section>
    );
};