import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import ChartHeader from "./ChartHeader";
import SourceChart from "./SourceChart";

export default function BiasChart() {
    return (
        <motion.section
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.2 }}
            className="lg:p-8">
            <div className="mx-auto 2xl:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24 items-center">
                    <ChartHeader />
                    <SourceChart />
                </div>
            </div>
        </motion.section>

    )
}