import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
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