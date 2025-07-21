import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import PriorInvestigation from "./InvestigationSaved"
import { motion, AnimatePresence } from "framer-motion"
import ScrolltoTop from "@/helpers/ScrollToTop"
import InvestigationsFallback from "@/components/React/Dashboard/DisplayContent/SavedInvestigations.tsx/fallbacks/InvestigationsFallback"



export default function SavedResearchLayout() {
    const savedInvestigations = useSelector((state: RootState) => state.userWork.userResearch);
    const newArr = Array.isArray(savedInvestigations) ? [...savedInvestigations] : [];
    const timeline = newArr.reverse();


    const variants = {
        open: {
            opacity: 1,
            transition: {
                duration: 0.2,
                type: 'tween',
                delay: 0.3
            }
        },
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2,
                type: 'tween'
            }
        }
    }


    return (
        <motion.section
            key='savedResearch'
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            className="w-full">
            <ScrolltoTop />
            <div className="p-6 sm:p-4 md:p-16 h-fit w-full">
                <div className="relative text-left">
                    <h2 className="text-lg sm:2xl md:text-3xl lg:text-4xl mt-6 tracking-tight font-light  text-white text-center lg:text-left">
                        A timeline of your<span className="block text-zinc-400">research and conclusions.</span>
                    </h2>
                </div>
                <AnimatePresence>
                    {Array.isArray(timeline) && (timeline.length > 0) ? <motion.div
                        variants={variants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                        className="mx-auto w-full lg:w-4/5 mt-12">
                        {timeline.map((investigation: any, index: number) => (
                            <PriorInvestigation key={index} investigation={investigation} />
                        ))}
                    </motion.div>
                        : <InvestigationsFallback />
                    }
                </AnimatePresence>

            </div>
        </motion.section>

    )
}