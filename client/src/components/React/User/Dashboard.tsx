import { motion } from "framer-motion";
import SourceChart from "../Charts/SourceChart";
import { ChartContainer } from "../Charts/SourceChart";
import StatsSection from "../Charts/Stats";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

const variants = {
    open: { opacity: 1},
    closed: {opacity: 0}
};

export default function Dashboard () {
    const email = useSelector((state: RootState) => state.auth.email);

    console.log(email)

    return (
        <motion.section 
        variants={variants}
         initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: 'tween', duration: 0.2 }}
        className="2xl:max-w- h-full relative md:right-0 md:bottom-0 flex flex-col
        2xl:gap-y-24 justify-center items-center 2xl:px-52 grow 2xl:pb-96"
        >
            <div className="w-full flex justify-start 2xl:px-24">
            <ChartContainer/>

            </div>
           
            <div className="w-full flex justify-start 2xl:px-24">
            <StatsSection />

            </div>

        </motion.section>
    )
}