import { motion, time } from "framer-motion"
import { createPortal } from "react-dom"
import { GetArticleContent } from "@/ReduxToolKit/Reducers/Investigate/Reading"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { displayGetArticlesModal, displayArticleContent, displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { resetResults } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import ArticleLink from "../searching/components/sourceLinks/components/ArticleLink"
import { useEffect, useState } from "react"
import { getQuery } from "@/ReduxToolKit/Reducers/Investigate/UserPOV"
import { variants } from "@/motion/variants"

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

        const timer: NodeJS.Timeout = setTimeout(() => {
            dispatch(displayGetArticlesModal(false))
            dispatch(displaySearch(false))
            dispatch(displayArticleContent(true))
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
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4"
        >
            <div className="flex flex-col items-center gap-6 rounded-3xl p-2 md:p-8 lg:p-4 w-[95dvw] sm:w-11/12 lg:w-4/5 xl:w-5/6 2xl:max-w-6xl h-auto
     sm:gap-y-10 sm:p-10 bg-gradient-to-tr from-ebony to-mirage mt-2 
     shadow-inset text-center">
                <div className="mx-auto flex flex-col gap-y-2 lg:gap-y-12 w-full items-end h-full">
                    <div className="w-full flex justify-center h-auto">
                        <p className="text-white text-lg xl:text-3xl font-light tracking-tight text-center py-2 w-full">Get these articles?</p>

                    </div>

                    <ArticlesSelected />
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

        </motion.div>)


    return (
        createPortal(modal, document.body)
    )

}


function ArticlesSelected() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { chosenArticles } = investigateState.getArticle
    const { articleOptions } = investigateState.search
    const [selected, setSelected] = useState([])

    useEffect(() => {


        if ((chosenArticles.length > 0) && (articleOptions.length > 0)) {
            const filtered: ArticleType[] = articleOptions.filter(article1 =>
                chosenArticles.some(article2 => article1.url === article2.url)
            ).slice(0, 3);
            setSelected(filtered);
        } else {
            ;
        }

        return () => {
            setSelected([])
        }
    }, [chosenArticles]);


    return (
        <motion.div className="w-full h-full mx-auto">
            <div className="h-[60dvh] py-2 overflow-y-auto sm:overflow-y-hidden no-scrollbar overscroll-contain overflow-x-hidden
             sm:h-full flex flex-wrap justify-center gap-3 md:gap-4 xl:gap-6 items-center w-full lg:w-auto mx-auto">
                {selected.length > 0 && selected.map((article: ArticleType, index: number) => (
                    <ArticleLink article={article} key={article.url} index={index} />
                ))}
            </div>

        </motion.div>
    )
}

// className="fixed bottom-2 2xl:bottom-36 xl:bottom-40 lg:bottom-32  z-40 2xl:left-72 xl:left-28 lg:left-32 md:left-10
//          flex flex-col items-center gap-6 rounded-3xl p-2 md:p-8 lg:p-4 w-[95dvw] sm:w-11/12 lg:w-4/5 xl:w-5/6 2xl:w-2/3 h-auto
//        sm:gap-y-10 sm:p-10 bg-gradient-to-tr from-ebony to-mirage mt-2
//        shadow-inset text-center"