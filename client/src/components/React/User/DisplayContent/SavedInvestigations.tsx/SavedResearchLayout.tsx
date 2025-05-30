import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import PriorInvestigation from "./InvestigationSaved"
import { motion, AnimatePresence } from "framer-motion"
import ScrolltoTop from "@/components/React/AppRouting/ScrollToTop"



export default function SavedResearchLayout() {
    const savedInvestigations = useSelector((state: RootState) => state.userWork.userResearch)
    const newArr = [...savedInvestigations] //read-only property prevents direct reversal
    const timeline = newArr.reverse()


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
            <div className="px-8 py-12 w-full">
                <div className="relative text-center lg:text-left">
                    <span className="text-blue-400"> Investigations </span>
                    <h2 className="text-base mt-6 tracking-tight font-light lg:text-4xl text-white text-center lg:text-left">
                        A timeline of your<span className="block text-zinc-400">research and conclusions.</span>
                    </h2>
                </div>
                <AnimatePresence>
                    {timeline && <motion.div
                        variants={variants}
                        initial='closed'
                        animate='open'
                        exit='closed'
                        transition={{ duration: 0.2, type: 'tween', delay: 0.2 }}
                        className="mx-auto w-full border mt-12">
                        {timeline.map((investigation: any, index: number) => (
                            <PriorInvestigation key={index} investigation={investigation} />
                        ))}
                    </motion.div>}
                </AnimatePresence>

            </div>
        </motion.section>

    )
}