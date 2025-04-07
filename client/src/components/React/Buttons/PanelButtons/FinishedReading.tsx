import { useDispatch, useSelector } from "react-redux";
import { initiateFinalProcess } from "@/ReduxToolKit/Reducers/Investigate/Review";
import { displayArticleContent, displayReadingTooltip, displayWrapUp } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";
import GuideDoneReading from "../../Tooltips/GuideDoneReading";
import { RootState } from "@/ReduxToolKit/store";
import { useLayoutEffect } from "react";


export function FinishedReading({ }) {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { showReadingTooltip } = investigateState.display
    const { summaries } = investigateState.read
    const dispatch = useDispatch()

    useLayoutEffect(() => {

        if (summaries && summaries.length < 1) {
            dispatch(displayReadingTooltip(false))
        }

    }, [])

    return (
        <button
            onClick={() => {
                dispatch(initiateFinalProcess(true))
                dispatch(displayArticleContent(false))
                dispatch(displayWrapUp(true))
            }}
            className="my-auto mx-auto rounded-lg transition-all 
        duration-300 xs:max-w-8 xs:max-h-8 xl:max-w-7 xl:max-h-7 2xl:max-w-8 
        2xl:max-h-8 p-0.5 ease-in-out group relative">


            {showReadingTooltip && <GuideDoneReading />}
            {!showReadingTooltip && <div className="absolute p-1 bg-white z-50 hidden transition-all duration-200 ease-in-out md:group-hover:block bottom-11 -left-1
            rounded-md items-center border border-astro_gray shadow-thick after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
            after:transform after:-translate-x-1/2 after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-0 
            after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent">
                <p className="text-black" >Done Reading</p>
            </div>}
            <div className="h-full w-full box-border">
                <svg className="text-blue-400 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="100%" height="100%" fillRule="nonzero"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M7,2c-2.80078,0 -5,2.19922 -5,5v27c0,2.80078 2.19922,5 5,5h27c2.80078,0 5,-2.19922 5,-5v-27c0,-0.5 -0.08594,-1 -0.1875,-1.5l-19.71875,21.90625l-9.6875,-8.71875l1.28125,-1.5l8.3125,7.3125l18.6875,-20.8125c-0.89844,-1 -2.1875,-1.6875 -3.6875,-1.6875zM41,11v24c0,3.30078 -2.69922,6 -6,6h-24v2c0,2.80078 2.19922,5 5,5h27c2.80078,0 5,-2.19922 5,-5v-27c0,-2.80078 -2.19922,-5 -5,-5z" /></g></g></svg>

            </div>


        </button>
    );
}
