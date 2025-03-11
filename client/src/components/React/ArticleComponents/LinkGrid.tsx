import ArticleLink from "./ArticleLink"
import { ArticleType } from '../../../env'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ArticleLoader from "../Loaders/ArticleLoader"
import { useLayoutEffect, useState } from "react"
import LinkPagination from "../Buttons/Pagination/LinkPagination"
import Pages from "./Pages"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"

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
    const [firstHalf, setFirstHalf] = useState(null)
    const [secondHalf, setSecondHalf] = useState(null)
    const { search } = investigateState
    const { articles, status } = search
    const maxContent = 12
    const resultsLength = articles?.length

    const hasPages = resultsLength > maxContent

    function sliceArticles(articleLinks: any) {
        const halfOne = articleLinks.slice(0, 9)
        const halfTwo = articleLinks.slice(9)

        if (articleLinks.length >= 9) {
            setFirstHalf(halfOne)
            setSecondHalf(halfTwo)
            console.log({ "First Half of Links": halfOne })
            console.log({ "Second Half of Links": halfTwo })
        } else {

            return
        }
    }

    useLayoutEffect(() => {

        if (status === 'fulfilled' && articles) {
            sliceArticles(articles)
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

                        {status === 'pending' && <ArticleLoader />}

                        {status === 'fulfilled' &&
                            <motion.div layout key='pagesContainer' className="relative inset-0 py-6 min-h-full">
                                {hasPages ? <Pages page={page} firstHalf={firstHalf} secondHalf={secondHalf} />
                                    : <motion.ol
                                        layout
                                        key='pageOne'
                                        variants={variants}
                                        initial='hide'
                                        animate='show'
                                        exit='hide'
                                        className="relative max-w-4xl 2xl:max-w-full 2xl:w-full mx-auto 
                grid grid-cols-2 2xl:grid-cols-2 2xl:gap-12 xs:gap-3 min-h-full">
                                        {firstHalf?.map((article: ArticleType, index: number) => {
                                            return (
                                                <ArticleLink
                                                    index={index}
                                                    key={index}
                                                    article={article}
                                                />)
                                        })
                                        }
                                    </motion.ol>
                                }
                            </motion.div>
                        }

                        {status === 'fulfilled' && hasPages && <LinkPagination page={page} setPage={setPage} />}

                    </AnimatePresence>
                </ErrorBoundary>

            </div>
        </motion.div>


    )
}




