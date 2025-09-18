import { useRef } from "react";
import { useScrollTrap } from "@/hooks/useOverScrollTrap";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/ReduxToolKit/hooks/useAppSelector";
import { selectWikiSummary } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import { WikiSummaryResponse } from "@/services/wiki/wiki";
import StandardExtract from "./standard/StandardExtract";
import DisambigExtract from "./disambig/DisambigExtract";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import ExtractError from "./errors/ExtractError";

export default function Description(): JSX.Element | null {
    const summary: WikiSummaryResponse = useAppSelector(selectWikiSummary);
    const investigate: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { errormessage } = investigate.wiki;
    const scrollRef = useRef(null);
    useScrollTrap(scrollRef);
    console.log(errormessage);


    return (
        <AnimatePresence >
            {summary
                ? <StandardExtract key={'standard'} />
                : <DisambigExtract key={'disambig'} />
            }

            {errormessage && <ExtractError key={'errormessage'} />}
        </AnimatePresence>
    )
};