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
            <div className="max-h-screen w-full">

                {Array.isArray(timeline) && (timeline.length > 0) ? <div
                    className="mx-auto w-full lg:w-4/5 mt-6 animate-fade-in">
                    <ResearchScroller />
                </div>
                    : <InvestigationsFallback />
                }

            </div>
        </motion.section>

    )
}