import { motion, AnimatePresence, MotionConfigProps } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { useEffect, useMemo, useState } from "react";
import WikiExtractLoader from "../loaders/WikiExtractLoader";
import ExtractNotification from "../notifications/ExtractNotification";
import { clearWikiSlice, modalStages, selectWikiDisambig, selectWikiSummary } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import Description from "./WikiDescription";
import TermFooter from "./TermFooter";
import { variants } from "@/motion/variants";
import { WikiTerm } from "@/env";
import HighlightTextTip from "../tooltips/HighlightTextTip";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";
import { useAppSelector } from "@/ReduxToolKit/hooks/useAppSelector";
import { WikiDisambigResponse, WikiResponse, WikiSummaryResponse } from "@/services/wiki/wiki";
import type { Extracts } from "@/ReduxToolKit/Reducers/Investigate/Review";

export default function WikiTermExtract({ article_url, data }: WikiTerm) {
    const summary: WikiSummaryResponse = useAppSelector(selectWikiSummary);
    const disambig: WikiDisambigResponse = useAppSelector(selectWikiDisambig);
    const investigateState: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { extracts } = investigateState.review;
    const dispatch = useDispatch<AppDispatch>();
    const [showNotification, setShowNotification] = useState<boolean>(null);

    const isSaved: boolean = useMemo(() => {
        if (!extracts) return false;

        if (summary) {
            return extracts.some((extr: Extracts) => extr.title === summary.title);
        } else if (disambig) {
            return extracts.some((extr: Extracts) => extr.title === disambig.title);
        } else {
            return false
        };
    }, [extracts, disambig, summary]);

    useEffect(() => {

        return () => {
            dispatch(clearWikiSlice());
        };
    }, []);


    const termExtracted = (
        <motion.div
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", duration: 0.2 }}
            className="w-[17rem] xl:w-80 h-auto p-2 rounded-3xl  
            bg-black border border-border_gray
        flex flex-col items-center fixed lg:left-0.5 lg:bottom-32 2xl:bottom-44"
        >
            <div
                className="min-w-full max-w-full h-auto relative"
            >

                <WikiModalHeader
                />

                <RenderExtractContents
                    article_url={article_url}
                    setShowNotification={setShowNotification}
                />
                <TermFooter saved={isSaved} article_url={article_url} setShowNotification={setShowNotification} />
                <AnimatePresence>
                    {showNotification && <ExtractNotification saved={isSaved} setShowNotification={setShowNotification} />}
                </AnimatePresence>
            </div>
        </motion.div>
    );

    return createPortal(termExtracted, document.body);
};


type ExtractContent = WikiResponse | null;

function RenderExtractContents({ article_url, setShowNotification }) {
    const summary: WikiSummaryResponse = useAppSelector(selectWikiSummary);
    const disambig: WikiDisambigResponse = useAppSelector(selectWikiDisambig);
    const investigate: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { status, extract } = investigate.wiki;

    const content: ExtractContent = extract ? (summary ?? disambig) : null;
    const title: string | null = content ? content.kind === 'disambiguation'
        ? `${content.title} could refer to:`
        : content.title
        : null;

    return (
        <AnimatePresence mode="wait">
            {status === 'idle' && !extract && <HighlightTextTip />}

            {status === 'pending' &&
                <WikiExtractLoader
                    key={'wikiloader'}
                />}
            {status === 'fulfilled' &&
                <Extract
                    key={'extract'}
                    title={title}
                />
            }
            {status === 'rejected' &&

                <motion.div
                    key={'rejectedExtract'}
                    variants={variants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    transition={{ type: "tween", duration: 0.2 }}
                    className="text-white">
                    Couldn't extract information for the submitted term
                </motion.div>
            }
        </AnimatePresence>
    );
};

interface ExtractTitle {
    title?: string | null
};

function Extract({ title }: ExtractTitle): JSX.Element | null {




    return (
        <motion.div
            key='extract'
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", duration: 0.2 }}
        >
            <figcaption className="flex flex-col h-12 w-full items-center gap-y-2">

                <h1
                    className="text-zinc-400 font-light text-center tracking-tight text-base mt-2">
                    <em>
                        {title}
                    </em></h1>

            </figcaption>
            <Description />

        </motion.div>
    )
}


function WikiModalHeader() {
    const dispatch = useDispatch<AppDispatch>();

    const handleClose = () => {
        dispatch(modalStages({
            display: false,
            highlight: false,
            confirmExtract: false,
            text: null
        }));
    };

    return (
        <>
            <div onClick={handleClose} className="cursor-pointer transition-all duration-200 ease-in-out absolute w-8 h-8 top-0 right-0 rounded-full p-1 md:hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler text-white icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
            <div className="w-full gap-x-2 px-2 mx-auto h-fit min-h-14 flex items-center justify-start">
                <div className="w-7 h-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        className="text-white icon icon-tabler icons-tabler-outline icon-tabler-brand-wikipedia"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 4.984h2" /><path d="M8 4.984h2.5" /><path d="M14.5 4.984h2.5" /><path d="M22 4.984h-2" /><path d="M4 4.984l5.455 14.516l6.545 -14.516" /><path d="M9 4.984l6 14.516l6 -14.516" /></svg>
                </div>
                <div className="w-auto h-fit">
                    <p className="text-zinc-400 font-light text-lg">
                        Wikipedia Extract
                    </p>
                </div>
            </div>
        </>
    );
};