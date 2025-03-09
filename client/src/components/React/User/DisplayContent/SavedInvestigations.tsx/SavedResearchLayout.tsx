import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import PriorInvestigation from "./InvestigationSaved"
import { motion } from "framer-motion"
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
            className="lg:p-0 bg-black">
            <ScrolltoTop />
            <div className="px-8 py-12 lg:py-0 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
                <div className="relative text-left">
                    <span className="text-blue-400"> Investigations </span>
                    <h2 className="text-base mt-6 tracking-tight font-light lg:text-4xl text-white text-left">
                        A timeline of your<span className="block text-zinc-400">research and conclusions.</span>
                    </h2>
                </div>
                <div className="mx-auto max-w-2xl lg:max-w-2/3 mt-12">
                    {timeline.map((investigation: any, index: number) => (
                        <PriorInvestigation key={index} investigation={investigation} />
                    ))}
                </div>
            </div>
        </motion.section>

    )
}