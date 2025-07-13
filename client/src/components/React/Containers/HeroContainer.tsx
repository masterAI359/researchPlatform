import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import ReviewWrapper from "../Investigate/Wrappers/ReviewWrapper"
import FinalResults from "../Results/FinalResults"
import CompletionHero from "../HeroComponents/CompletionHero"
import ScrolltoTop from "../../../helpers/ScrollToTop"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"



export default function HeroContainer({
}) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { display } = investigateState
    const { showMindMap, showSearch, showWrapUp, showCompletion, showResults, showWorkModal } = display


    return (
        <section className={`w-full h-full shrink-0 mx-auto transition-opacity duration-200 ease-in-out ${showWorkModal ? 'opacity-50' : 'opacity-100'}`}>
            <AnimatePresence mode="wait">

                {showMindMap && (<motion.div
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
                    <ScrolltoTop />

                </motion.div>)}

                {showSearch ?
                    (<motion.div
                        key='Search'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <SearchHero
                        />
                        <ScrolltoTop />

                    </motion.div>) : null}

                {showWrapUp && <motion.div
                    key='WrapUp'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                >
                    <ReviewWrapper />
                    <ScrolltoTop />
                </motion.div>}

                {showCompletion &&
                    <motion.div
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
                        <ScrolltoTop />
                    </motion.div>
                }

                {showResults && <motion.div
                    key='Results'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full max-w-full mx-auto"
                    transition={{
                        type: 'tween',
                        duration: 0.4,
                        delay: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                >
                    <FinalResults />
                    <ScrolltoTop />
                </motion.div>
                }

            </AnimatePresence>

        </section>
    )
}