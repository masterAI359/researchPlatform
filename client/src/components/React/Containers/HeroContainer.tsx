import InvestigateHero from "../PromptChallenge/InvestigateHero"
import ScrollDown from "../ArticleComponents/ScrollDown"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroContainer({ query, setQuery, isLoading, setIsSubmitted, articles, selectedForSummary, loadingSummaries, summaries, gettingHelp, setGettingHelp }) {

    return (
        <AnimatePresence>
            {summaries.length < 1 && <div className="grid grid-cols-1 w-full h-auto mx-auto items-center">
                <InvestigateHero
                    query={query}
                    setQuery={setQuery}
                    isLoading={isLoading}
                    setIsSubmitted={setIsSubmitted}
                    gettingHelp={gettingHelp}
                    setGettingHelp={setGettingHelp}
                    summaries={summaries}
                />

            </div>}
        </AnimatePresence>

    )
}