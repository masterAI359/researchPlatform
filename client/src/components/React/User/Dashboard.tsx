import { motion } from "framer-motion";
import SourceChart from "../Charts/SourceChart";
import { ChartContainer } from "../Charts/SourceChart";
import StatsSection from "../Charts/Stats";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};

export default function Dashboard() {
    const email = useSelector((state: RootState) => state.auth.email);

    console.log(email)

    return (
        <motion.section
            key={"dashboard"}
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="w-auto mx-auto h-full relative md:right-0 md:bottom-0 flex flex-col
        2xl:gap-y-24 justify-center items-center 2xl:px-52 grow 2xl:pb-96
        p-4 md:p-0
        "
        >
            <ChartContainer />
            <StatsSection />
        </motion.section>
    )
}