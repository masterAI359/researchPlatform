import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { GetArticleContent } from "@/ReduxToolKit/Reducers/Investigate/Reading"
import { useAppdispatch } from "@/Hooks/appDispatch"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { displayGetArticlesModal, displayArticleContent, displaySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer"
import { resetResults, resetArticles } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import ArticleLink from "../ArticleComponents/ArticleLink"
import { useEffect, useState } from "react"

export function GetTheseArticles() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { chosenArticles } = investigateState.getArticle
    const articlesToSummarize = encodeURIComponent(JSON.stringify(chosenArticles))
    const appDispatch = useAppdispatch()
    const dispatch = useDispatch()

    const variants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }

    const retrieveArticles = () => {

        dispatch(resetResults())
        dispatch(displaySearch(false))
        appDispatch(GetArticleContent(articlesToSummarize))
        dispatch(displayGetArticlesModal(false))
        dispatch(displayArticleContent(true))
    }

    const modal = (
        <motion.div
            key='getTheseArticles'
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed bottom-12 lg:bottom-36 2xl:left-72 z-40
          flex flex-col items-center gap-x-8 gap-y-6 rounded-3xl p-2 md:p-8 w-full 2xl:w-2/3 h-auto
        sm:gap-y-10 sm:p-10 bg-ebony mt-2 
        shadow-thick text-center">
            <div className="mx-auto flex flex-col gap-y-8 py-4 lg:gap-y-12 w-full items-end h-full">
                <div className="w-full flex justify-center h-auto">
                    <p className="text-white xl:text-3xl font-light tracking-tight text-center w-full">Get these articles?</p>

                </div>

                <ArticlesSelected />
                <div className="flex gap-x-2 items-center justify-center h-full w-full">
                    <button onClick={retrieveArticles} type="button" className="text-sm w-36 md:w-52 py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        Yes
                    </button>
                    <button onClick={() => dispatch(displayGetArticlesModal(false))} type="button" className="text-sm py-2 w-36 md:w-52 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                        No
                    </button>

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
    const { articles } = investigateState.search
    const [selected, setSelected] = useState([])

    useEffect(() => {
        const filtered: ArticleType[] = articles.filter(article1 =>
            chosenArticles.some(article2 => article1.url === article2.url)
        ).slice(0, 3);
        setSelected(filtered);
    }, [articles, chosenArticles]);


    return (
        <motion.div className="w-full h-full  mx-auto">
            <div className="h-full grid  grid-cols-2 gap-y-4 lg:gridjustify-center lg:grid-cols-3 gap-x-2 lg:gap-x-8 items-center w-full lg:w-5/6 mx-auto">
                {selected.length > 0 && selected.map((article: ArticleType, index: number) => (
                    <ArticleLink article={article} key={index} index={index} />
                ))}
            </div>

        </motion.div>
    )
}

