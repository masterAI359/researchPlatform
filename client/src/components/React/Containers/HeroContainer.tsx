import { useState } from "react"
import InvestigateHero from "../HeroComponents/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import { AnimatePresence, motion } from "framer-motion"


export default function HeroContainer({
    query,
    setQuery,
    isLoading,
    setIsSubmitted,
    loadingSummaries,
    summaries,
    gettingHelp,
    setGettingHelp,
    currentStep,
    setCurrentStep
}) {
    const [startSearch, setStartSearch] = useState<boolean>(false)

    const openHero = summaries.length < 1 && startSearch === false
    const hideComponents = summaries.length >= 1 || loadingSummaries === true

    console.log(openHero)
    console.log(hideComponents)
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
                    query={query}
                    setQuery={setQuery}
                    isLoading={isLoading}
                    setIsSubmitted={setIsSubmitted}
                    gettingHelp={gettingHelp}
                    setGettingHelp={setGettingHelp}
                    summaries={summaries}
                    setStartSearch={setStartSearch}
                />

            </motion.div>)}

            {startSearch &&
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
            }

        </AnimatePresence>

    )
}