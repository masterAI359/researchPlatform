import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import SummaryHero from "../SummaryComponents/SuccessFull/SummaryHero"
import ReviewWrapper from "../Investigate/Wrappers/ReviewWrapper"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function HeroContainer({
}) {
    const reading = useSelector((state: RootState) => state.read.reading)
    const startSearch = useSelector((state: RootState) => state.search.startSearch)
    const initiateEnd = useSelector((state: RootState) => state.review.finished)

    return (
        <AnimatePresence mode="popLayout">

            {startSearch === null && (<motion.div
                layout
                key='Investigate'
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className={`grid grid-cols-1 w-full h-auto mx-auto items-center`}>
                <InvestigateHero
                />

            </motion.div>)}

            {startSearch ?
                (<motion.div
                    layout
                    key='Search'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                >
                    <SearchHero
                    />
                </motion.div>) : null}

            {reading &&
                <motion.div
                    layout
                    key='Search'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                >
                    <SummaryHero />
                </motion.div>
            }

            {initiateEnd && <motion.div
                layout
                key='Finished'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            >
                <ReviewWrapper />
            </motion.div>}

        </AnimatePresence>

    )
}