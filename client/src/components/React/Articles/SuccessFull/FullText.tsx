import { AppDispatch, RootState } from "@/ReduxToolKit/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getModalPosition, getSelectedText } from "@/ReduxToolKit/Reducers/Investigate/WikipediaSlice";


export default function FullText({ article_text }) {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const dispatch = useDispatch<AppDispatch>();
    const { gettingSelection, modalPosition, selectedText } = investigateState.wiki;
    const [before, setBefore] = useState();
    const [after, setAfter] = useState();
    const [highlighted, setHighlighted] = useState();
   
    const handleHighlightStart = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('start called', gettingSelection)
        if(!gettingSelection) {
            return
        } else {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            dispatch(getModalPosition({x, y}));

        window.getSelection()?.removeAllRanges();
        }

    }


    const handleHighlightEnd = () => {
        if(gettingSelection) {
  const selection = window.getSelection();

        if(selection && selection.rangeCount > 0) {
            const selectedTextString = selection.toString().trim();
            const range = selection.getRangeAt(0)
            console.log(range)
            dispatch(getSelectedText(selectedTextString));
        }
        }
    }

    useEffect(() => {

        gettingSelection

        console.log({ "Modal Position": modalPosition, "Selected Text": selectedText});

    }, [selectedText, modalPosition, gettingSelection])
    


    return (
        <div
            onMouseDown={(e) => handleHighlightStart(e)}
            onMouseUp={handleHighlightEnd}
            className={`pt-6 text-white h-full font-serif xl:text-lg font-light tracking-tight 
                xs:leading-6 md:leading-8 whitespace-pre-wrap pb-16 transition-all duration-1000 ease-in-out`}
        >
            {article_text}
        </div>
    )
}