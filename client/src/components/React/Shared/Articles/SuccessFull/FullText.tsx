import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { useDispatch, useSelector } from "react-redux"
import { getModalPosition, getSelectedText, modalStages } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";
import TextPopover from "../popovers/TextPopover";
import { ExtractThis } from "../popovers/TextPopover";
import { AnimatePresence } from "framer-motion";
import WikiTermExtract from "../../../features/WikiExtract/components/WikiTermExtract";


export default function FullText({ article_text, article_url }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const dispatch = useDispatch<AppDispatch>();
    const { selectedText, status, wikiModalStages } = investigateState.wiki;

    const handleHighlightStart = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!wikiModalStages.highlight) {
            return
        } else {
            const x: number = e.pageX;
            const y: number = e.pageY;

            dispatch(getModalPosition({ x, y }));
        }

    }

    const handleHighlightEnd = () => {
        if (wikiModalStages.highlight) {
            const selection = window.getSelection();

            if (selection && selection.rangeCount > 0) {
                const selectedTextString = selection.toString().trim();
                dispatch(getSelectedText(selectedTextString));
                dispatch(modalStages({
                    display: true,
                    highlight: false
                }))
            }
        }
    }


    return (
        <div
            onMouseDown={(e) => handleHighlightStart(e)}
            onMouseUp={handleHighlightEnd}
            className={`pt-6 text-white w-full h-full xl:text-xl tracking-tight relative 
                leading-6 md:leading-6 whitespace-pre-wrap  pb-16 transition-all duration-1000 ease-in-out
                selection:bg-blue-300 selection:text-black`}
        >
            {selectedText && status === 'idle' &&
                <TextPopover>
                    <ExtractThis />
                </TextPopover>}

            <AnimatePresence>
                {wikiModalStages.display && <WikiTermExtract article_url={article_url} />}
            </AnimatePresence>
            <p className="font-light xl:text-xl tracking-tight text-white">
                {article_text}
            </p>
        </div>
    )
};