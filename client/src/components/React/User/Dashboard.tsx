import { motion } from "framer-motion";
import SourceChart from "../Charts/SourceChart";
import { ChartContainer } from "../Charts/SourceChart";

const variants = {
    open: { opacity: 1},
    closed: {opacity: 0}
};

export default function Dashboard () {

    return (
        <motion.section 
        variants={variants}
         initial='closed'
        animate='open'
        exit='closed'
        transition={{ type: 'tween', duration: 0.2 }}
        className="w-full h-full flex flex-col justify-center items-center grow 2xl:pb-96"
        >
           

            <ChartContainer/>
           

        </motion.section>
    )
}