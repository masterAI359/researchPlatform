import { useState } from "react"
import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import FinishLine from "../Investigate/Finished/FinishLine"
import { AnimatePresence, motion } from "framer-motion"


export default function HeroContainer({
    hideSearch,
    setQuery,
    isLoading,
    setIsSubmitted,
    summaries,
    gettingHelp,
    setGettingHelp,
    currentStep,
    setCurrentStep,
    finished
}) {
    const [startSearch, setStartSearch] = useState<boolean>(false)

    return (
        <AnimatePresence mode="wait">

            {!startSearch && (<motion.div
                key='Investigate'
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className={`grid grid-cols-1 w-full h-auto mx-auto items-center`}>
                <InvestigateHero
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    gettingHelp={gettingHelp}
                    setGettingHelp={setGettingHelp}
                    summaries={summaries}
                    setStartSearch={setStartSearch}
                />

            </motion.div>)}

            {!hideSearch && startSearch ?
                (<motion.div
                    key='Search'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                >
                    <SearchHero
                        setQuery={setQuery}
                        isLoading={isLoading}
                        setIsSubmitted={setIsSubmitted}
                        currentStep={currentStep}
                    />
                </motion.div>)
                : null}

            {finished && <motion.div
                key='Finished'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
            >
                <FinishLine />
            </motion.div>}

        </AnimatePresence>

    )
}