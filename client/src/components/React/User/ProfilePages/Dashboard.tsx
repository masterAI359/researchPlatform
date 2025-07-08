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

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};

export default function Dashboard() {
    const investigations = useSelector((state: RootState) => state.userWork.userResearch);
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        if (Array.isArray(investigations) && investigations.length === 0) {
            dispatch(fetchSavedInvestigations())
        }

        if (Array.isArray(userArticles) && userArticles.length === 0) {
            dispatch(fetchSavedArticles());
        };

    }, [investigations])

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
            <BiasChart />
            <IntegrityChart />
            <StatsSection />

        </motion.section>
    )
}