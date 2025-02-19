import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import SummaryHero from "../HeroComponents/SummaryHero"
import ReviewWrapper from "../Investigate/Wrappers/ReviewWrapper"
import CompletionHero from "../HeroComponents/CompletionHero"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"


export default function HeroContainer({
}) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { read, display } = investigateState
    const { ContentStatus } = read
    const { showMindMap, showSearch, showContent, showWrapUp, showCompletion } = display



    return (
        <ErrorBoundary>
            <section className="w-full h-full shrink-0 mx-auto">
                <AnimatePresence mode="popLayout">

                    {showMindMap && (<motion.div
                        layout
                        key='Investigate'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                        className={`grid grid-cols-1 w-full h-auto mx-auto items-center`}>
                        <InvestigateHero
                        />

                    </motion.div>)}

                    {showSearch ?
                        (<motion.div
                            layout
                            key='Search'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                        >
                            <SearchHero
                            />

                        </motion.div>) : null}

                    {showContent && ContentStatus === 'fulfilled' ?
                        <motion.div
                            layout
                            key='Reading'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                        >
                            <SummaryHero />
                        </motion.div>
                        : null}

                    {showWrapUp && <motion.div
                        layout
                        key='WrapUp'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                    >
                        <ReviewWrapper />
                    </motion.div>}

                    {showCompletion &&
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

            </section>

        </ErrorBoundary>

    )
}