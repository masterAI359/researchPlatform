import InvestigateHero from "../PromptChallenge/InvestigateHero"
import ScrollDown from "../ArticleComponents/ScrollDown"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroContainer({ query, setQuery, isLoading, setIsSubmitted, articles, selectedForSummary, loadingSummaries, summaries }) {

    return (
        <div className="grid grid-cols-1 w-full h-auto mx-auto items-center">
            <InvestigateHero
                query={query}
                setQuery={setQuery}
                isLoading={isLoading}
                setIsSubmitted={setIsSubmitted}
            />
            <AnimatePresence>
                {articles.length > 0 &&
                    <motion.div
                        key='scrollDown'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ScrollDown
                            selectedForSummary={selectedForSummary}
                            articles={articles}
                            loadingSummaries={loadingSummaries}
                            summaries={summaries} />
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}