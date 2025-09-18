import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { getExtract } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { useAppSelector } from "@/ReduxToolKit/hooks/useAppSelector";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";
import type { WikiDisambigResponse, WikiSummaryResponse } from "@/services/wiki/wiki";
import { selectWikiSummary, selectWikiDisambig } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import SaveExtractTooltip from "../tooltips/SaveExtractTooltip";
import ExtractBookmark from "./buttons/ExtractBookmark";
import TimeStamp from "./timestamp/TimeStamp";
import { useMemo } from "react";

type SavePayload =
    | { kind: "summary"; title: string; extract: string; associatedArticle: string }
    | { kind: "disambig"; title: string; candidates: WikiDisambigResponse["candidates"]; associatedArticle: string };



export default function TermFooter({ article_url, setShowNotification, saved }) {
    const summary: WikiSummaryResponse = useAppSelector(selectWikiSummary);
    const disambig: WikiDisambigResponse = useAppSelector(selectWikiDisambig);
    const investigate: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { status, extract } = investigate.wiki;
    const dispatch = useDispatch();

    const payload: SavePayload | null = useMemo(() => {
        if (summary) {
            return { kind: "summary", title: summary.title, extract: summary.extract, associatedArticle: article_url };
        }
        if (disambig) {
            return { kind: "disambig", title: disambig.title, candidates: disambig.candidates, associatedArticle: article_url };
        }
        return null;
    }, [summary, disambig, article_url]);

    const handleSave = (): void => {
        if (!payload) return;
        try {
            dispatch(getExtract(payload));

        } catch (err) {
            console.log(err);
        } finally {
            setShowNotification(true);
        }
    };


    return (
        <motion.footer className={`${status !== 'idle' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in
        min-w-full h-16 flex shrink-0 items-center justify-between`}>
            <TimeStamp
                disambig={disambig}
                summary={summary}
            />
            <div className="h-6 w-6 cursor-pointer group relative">
                {extract &&
                    <>
                        <SaveExtractTooltip />
                        <ExtractBookmark saved={saved} handleSave={handleSave} />
                    </>}

            </div>
        </motion.footer>
    );
};