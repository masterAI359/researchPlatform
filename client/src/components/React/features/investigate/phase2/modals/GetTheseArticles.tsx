import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { GetArticleContent } from "@/ReduxToolKit/Reducers/Investigate/Reading"
import { useAppdispatch } from "@/hooks/appDispatch"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { displayGetArticlesModal, displayArticleContent, displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { resetResults } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { useEffect, useState } from "react"
import { getQuery } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { variants } from "@/motion/variants"
import DisplayThese from "./DisplayThese"

export function GetTheseArticles() {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { chosenArticles } = investigateState.getArticle;
    const [fetching, setFetching] = useState<boolean | null>(null);
    const appDispatch = useAppdispatch();
    const dispatch = useDispatch();

    const retrieveArticles = (): void => {
        dispatch(getQuery(null))
        dispatch(resetResults())
        appDispatch(GetArticleContent(chosenArticles))
    };

    useEffect(() => {

        if (!fetching) {
            return
        } else {
            retrieveArticles();
        };

        const timer = window.setTimeout(() => {
            dispatch(displayGetArticlesModal(false));
            dispatch(displaySearch(false));
            dispatch(displayArticleContent(true));
        }, 200);

        return () => clearTimeout(timer);

    }, [fetching]);



    const modal = (
        <motion.div
            key='getTheseArticles'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4"
        >
            <div className="flex flex-col items-center gap-6 rounded-3xl p-2 md:p-8 lg:p-4 w-[95dvw] sm:w-11/12 lg:w-4/5 xl:w-5/6 2xl:max-w-6xl h-auto
     sm:gap-y-10 sm:p-10 bg-black border border-border_gray mt-2 
     shadow-material text-center">
                <div className="mx-auto flex flex-col gap-y-2 lg:gap-y-12 w-full items-end h-full">
                    <div className="w-full flex justify-center h-auto">
                        <p className="text-white text-lg xl:text-3xl font-light tracking-tight text-center py-2 w-full">Get these articles?</p>

                    </div>
                    <div className={`${fetching ? 'opacity-0' : 'opacity-100'} 
                    flex items-center justify-center h-full w-full
                    transition-opacity duration-150 ease-in-out`}>
                        <DisplayThese fetching={fetching} />

                    </div>
                    <div className="flex gap-x-2 py-4 items-center justify-center h-full w-full">
                        <button onClick={() => setFetching(true)} type="button"
                            className="text-base min-w-36 md:w-52 py-2 px-4 border focus:ring-2 rounded-full shadow-material 
                    border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 
                    focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                            Yes
                        </button>
                        <button onClick={() => dispatch(displayGetArticlesModal(false))} type="button"
                            className="text-base py-2 min-w-36 md:w-52 px-4 border focus:ring-2 rounded-full shadow-material
                    border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 
                    focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                            No
                        </button>

                    </div>
                </div>
            </div>

        </motion.div>
    )


    return (
        createPortal(modal, document.body)
    )

};