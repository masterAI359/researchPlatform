import { motion, AnimatePresence } from "framer-motion"
import type { WikiDisambigCandidate } from "@/services/wiki/wiki"
import Candidate from "@/components/React/features/WikiExtract/components/disambig/term/Candidate"

export interface SavedDisambig {
    terms: WikiDisambigCandidate[],
    page: number
}

export default function DisambigSaved({ terms, page }: SavedDisambig) {

    return (
        <article>
            <AnimatePresence mode="wait">
                {terms[page] && <motion.div
                    id="wiki_extract"
                    layout
                    key={'fullbackground'}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    className="h-72 w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
                    <div className="h-full w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
                        <div
                            className="absolute inset-0 text-white 2xl:text-sm  overflow-y-scroll no-scrollbar lg:text-sm text-xs font-light tracking-tight">
                            {terms[page] && (
                                <Candidate key={terms[page].pageid} candidate={terms[page]} />
                            )}
                        </div>
                    </div>

                </motion.div>}
            </AnimatePresence>
        </article>
    )
};