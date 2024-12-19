import { useState } from "react"
import InvestigateHero from "../Investigate/Wrappers/InvestigateHero"
import SearchHero from "../HeroComponents/SearchHero"
import { AnimatePresence, motion } from "framer-motion"

const variants = {

    open: { scale: 1, opacity: 1 },
    closed: { scale: 0, opacity: 0 },
    exit: { opacity: 0, scale: 0.8 }
}

export default function HeroContainer({ query, setQuery, isLoading, setIsSubmitted, articles, selectedForSummary, loadingSummaries, summaries, gettingHelp, setGettingHelp }) {
    const [startSearch, setStartSearch] = useState<boolean>(false)

    const openHero = summaries.length < 1 && startSearch === false

    console.log(openHero)

    return (
        <AnimatePresence>
            {startSearch === false && <div className="grid grid-cols-1 w-full h-auto mx-auto items-center">
                <InvestigateHero
                    query={query}
                    setQuery={setQuery}
                    isLoading={isLoading}
                    setIsSubmitted={setIsSubmitted}
                    gettingHelp={gettingHelp}
                    setGettingHelp={setGettingHelp}
                    summaries={summaries}
                    setStartSearch={setStartSearch}
                />

            </div>}

            {startSearch &&
                <motion.div
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                >
                    <SearchHero
                        setQuery={setQuery}
                        isLoading={isLoading}
                        setIsSubmitted={setIsSubmitted}
                    />
                </motion.div>
            }
        </AnimatePresence>

    )
}