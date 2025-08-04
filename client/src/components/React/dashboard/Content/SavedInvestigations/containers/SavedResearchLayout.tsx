import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import PriorInvestigation from "../components/InvestigationSaved"
import { motion, AnimatePresence } from "framer-motion"
import ScrolltoTop from "@/helpers/ScrollToTop"
import InvestigationsFallback from "../fallbacks/InvestigationsFallback"
import { investigationsVariants } from "@/motion/variants"
import ResearchScroller from "./ResearchScroller"


export default function SavedResearchLayout() {
    const savedInvestigations = useSelector((state: RootState) => state.userWork.userResearch);
    const newArr = Array.isArray(savedInvestigations) ? [...savedInvestigations] : [];
    const timeline = newArr.reverse();


    return (
        <motion.section
            key='savedResearch'
            variants={investigationsVariants}
            initial='closed'
            animate='open'
            exit='closed'
            className="w-full">
            <ScrolltoTop />
            <div className="p-6 sm:p-4 md:p-12 h-fit w-full">
                <div className="relative text-left">
                    <h2 className="text-lg sm:2xl md:text-lg lg:text-2xl xl:text-4xl mt-6 tracking-tight font-light  text-white text-center lg:text-left">
                        A timeline of your<span className="block text-zinc-400">research and conclusions.</span>
                    </h2>
                </div>
                <AnimatePresence>
                    {Array.isArray(timeline) && (timeline.length > 0) ? <motion.div
                        variants={investigationsVariants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                        className="mx-auto w-full lg:w-4/5 mt-4">
                        <ResearchScroller />
                    </motion.div>
                        : <InvestigationsFallback />
                    }
                </AnimatePresence>

            </div>
        </motion.section>

    )
}