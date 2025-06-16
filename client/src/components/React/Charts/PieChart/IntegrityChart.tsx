import PieChartHeader from "./PieChartHeader";
import { motion } from "framer-motion";
import PieChart from "./PieChart";

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};


export default function IntegrityChart() {

    return (
        <motion.section
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 md:justify-center items-center">

                    <PieChartHeader />
                    <PieChart />

                </div>
            </div>
        </motion.section>
    );
};