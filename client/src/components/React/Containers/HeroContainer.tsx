import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import SummaryHero from "../SummaryComponents/SuccessFull/SummaryHero"
import ReviewWrapper from "../Investigate/Wrappers/ReviewWrapper"
import CompletionHero from "../HeroComponents/CompletionHero"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function HeroContainer({
}) {
    const reading = useSelector((state: RootState) => state.read.reading)
    const startSearch = useSelector((state: RootState) => state.search.startSearch)
    const wrapUp = useSelector((state: RootState) => state.review.finished)
    const completion = useSelector((state: RootState) => state.end.endProcess)

    console.log(completion)

    return (
        <AnimatePresence mode="popLayout">

            {startSearch === null && (<motion.div
                layout
                key='Investigate'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: 'tween',
                    duration: 0.27,
                    delay: 0.12,
                    ease: [0.4, 0, 0.2, 1],
                }}
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
                    transition={{
                        type: 'tween',
                        duration: 0.24,
                        delay: 0.22,
                        ease: [0.4, 0, 0.2, 1],
                    }}
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
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                >
                    <SummaryHero />
                </motion.div>
            }

            {wrapUp && <motion.div
                layout
                key='WrapUp'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            >
                <ReviewWrapper />
            </motion.div>}

            {completion &&
                <motion.div
                    layout
                    key='Completion'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'tween',
                        duration: 0.24,
                        delay: 0.22,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <CompletionHero />
                </motion.div>
            }

        </AnimatePresence>

    )
}