import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useLayoutEffect, useState } from "react"
import { getPages } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import LinkPagination from "../Buttons/Pagination/LinkPagination"
import Pages from "./Pages"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import LinkLoader from "../Loaders/LinkLoader"


const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut',
            delayChildren: 0.3,
            staggerDirection: 1
        }
    }
}

const variants = {
    show: {
        opacity: 1,
        transition: { type: 'tween', delay: 0.2, duration: 0.2 }
    },
    hide: {
        opacity: 0,
        transition: { type: 'tween', duration: 0.2 }
    }
}



export default function LinkGrid() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const [page, setPage] = useState<number>(1)
    const { search } = investigateState
    const { articles, status, pages } = search
    const dispatch = useDispatch()



    const formPages = (links: any) => {

        let pageArray = []

        for (let i = 0; i < links.length; i += 9) {

            let end = i + 9

            let subArray = links.slice(i, end)
            pageArray.push(subArray)

        }
        dispatch(getPages(pageArray))
        return pageArray
    }




    useLayoutEffect(() => {



        if (status === 'fulfilled' && articles) {
            formPages(articles)
            console.log(articles.length)
            console.log(pages)
        }

    }, [status, articles])

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h-full w-full"
        >
            <div className={`h-full w-full mx-auto relative`}>
                <ErrorBoundary>
                    <AnimatePresence>

                        {status === 'pending' && <LinkLoader />}
                        {status === 'fulfilled' && articles && <LinkPagination page={page} setPage={setPage} />}

                        {status === 'fulfilled' &&
                            <motion.div layout key='pagesContainer' className="relative inset-0 py-6 min-h-full">
                                {articles && <Pages />}
                            </motion.div>
                        }

                        {status === 'fulfilled' && articles && <LinkPagination page={page} setPage={setPage} />}

                    </AnimatePresence>
                </ErrorBoundary>

            </div>
        </motion.div>


    )
}




