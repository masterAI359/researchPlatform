import { motion } from "framer-motion";
import BiasChart from "../../Charts/DonutChart/BiasChart";
import StatsSection from "../../Charts/ResearchStats/StatsSection";
import IntegrityChart from "../../Charts/PieChart/IntegrityChart";
import ScrolltoTop from "../../AppRouting/ScrollToTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { fetchSavedInvestigations } from "@/ReduxToolKit/Reducers/UserContent.ts/UserInvestigations";
import { fetchSavedArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer";
import ChartFallback from "../../Charts/ChartFallbacks/ChartFallback";
import { variants } from "@/motion/variants";
import StatsFallback from "../../Charts/ChartFallbacks/StatsFallback";



export default function Dashboard() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const dispatch = useDispatch<AppDispatch>();
    const integrityMessage = `
    No articles saved —
    bookmark some stories to see your reporting 
    quality snapshot.`;
    const biasMessage = "No articles saved — bookmark some stories to see a breakdown of the biases in your information sources."
    const actionFallback = "Look into a topic";
    const directionLink = "/investigate";


    useEffect(() => {

        if (Array.isArray(investigations) && investigations.length === 0) {
            dispatch(fetchSavedInvestigations())
        }

        if (Array.isArray(userArticles) && userArticles.length === 0) {
            dispatch(fetchSavedArticles());
        };

    }, []);

    const charts = (
        <>
            <BiasChart />
            <IntegrityChart />
        </>
    );

    const fallbacks = (
        <div className="flex flex-col gap-y-24 py-16">
            <ChartFallback message={biasMessage} actionText={actionFallback} direction={directionLink} />
            <ChartFallback message={integrityMessage} actionText={actionFallback} direction={directionLink} />
        </div>
    );

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
                ? charts
                : fallbacks}

            {Array.isArray(investigations) && (investigations.length > 0)
                ? <StatsSection />
                : <StatsFallback />
            }
        </motion.section>
    )
};