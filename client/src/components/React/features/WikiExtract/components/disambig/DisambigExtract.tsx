import { useState, useRef, useMemo } from "react";
import { useScrollTrap } from "@/hooks/useOverScrollTrap";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/ReduxToolKit/hooks/useAppSelector";
import { selectWikiDisambig } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import { WikiDisambigCandidate, WikiDisambigResponse, } from "@/services/wiki/wiki";
import NavCandidates from "./buttons/NavDisambig";
import Candidate from "./term/Candidate";

export default function DisambigExtract(): JSX.Element | null {
    const disambig: WikiDisambigResponse = useAppSelector(selectWikiDisambig);
    const candidates = disambig?.candidates ?? [];
    if (!candidates.length) return null;
    const scrollRef = useRef(null);
    const [page, setPage] = useState<number>(0);
    useScrollTrap(scrollRef);
    const terms = useMemo(() => {
        return candidates?.filter((term: WikiDisambigCandidate) => term.extract !== "");
    }, [candidates]);

    return (
        <motion.main className="2xl:min-h-36 relative min-w-full max-w-full h-auto flex flex-col gap-y-6 mb-6 items-center justify-between transition-all duration-400 ease-in-out ">
            <AnimatePresence mode="popLayout">

                {terms[page] && <motion.div
                    key={terms[page].pageid}
                    id="wiki_extract"
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    exit={{ opacity: 0, scale: 1, transition: { type: 'tween', duration: 0.2 } }}
                    className="h-72 w-full border-b border-white/20 mt-4 overflow-y-hidden relative">
                    <div
                        ref={scrollRef}
                        className="absolute inset-0 text-white 2xl:text-sm  overflow-y-scroll no-scrollbar lg:text-sm text-xs font-light tracking-tight">
                        <Candidate candidate={terms[page]} />

                    </div>
                </motion.div>}
            </AnimatePresence>
            <NavCandidates
                setPage={setPage}
                candidates={terms}
                page={page}
            />
        </motion.main>
    )
};



