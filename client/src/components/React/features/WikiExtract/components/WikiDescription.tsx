import { useRef } from "react";
import { useScrollTrap } from "@/hooks/useOverScrollTrap";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/ReduxToolKit/hooks/useAppSelector";
import { selectWikiSummary } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import { WikiSummaryResponse } from "@/services/wiki/wiki";
import StandardExtract from "./standard/StandardExtract";
import DisambigExtract from "./disambig/DisambigExtract";

export default function Description(): JSX.Element | null {
    const summary: WikiSummaryResponse = useAppSelector(selectWikiSummary);
    const scrollRef = useRef(null);
    useScrollTrap(scrollRef);

    console.log(summary)

    return (
        <AnimatePresence >
            {summary
                ? <StandardExtract />
                : <DisambigExtract />
            }
        </AnimatePresence>
    )
};