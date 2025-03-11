import ArticleLink from "./ArticleLink"
import { ArticleType } from '../../../env'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ArticleLoader from "../Loaders/ArticleLoader"
import { useEffect, useLayoutEffect, useState } from "react"
import LinkPagination from "../Buttons/Pagination/LinkPagination"
import Pages from "./Pages"

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





export default function LinkGrid() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const [page, setPage] = useState<number>(1)
    const [firstHalf, setFirstHalf] = useState(null)
    const [secondHalf, setSecondHalf] = useState(null)
    const { search } = investigateState
    const { articles, status } = search


    function sliceArticles(articleLinks: any) {
        const halfOne = articleLinks.slice(0, 12)
        const halfTwo = articleLinks.slice(12)

        if (articleLinks.length >= 12) {
            setFirstHalf(halfOne)
            setSecondHalf(halfTwo)
            console.log({ "First Half of Links": halfOne })
            console.log({ "Second Half of Links": halfTwo })
        } else {

            return
        }
    }

    useEffect(() => {

        if (status === 'fulfilled') {
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
            <div className={`h-full w-full mx-auto relative  2xl:pb-44`}>

                <AnimatePresence>
                    {status === 'fulfilled' && <LinkPagination page={page} setPage={setPage} />}

                    {status === 'pending' && <ArticleLoader />}

                    {status === 'fulfilled' &&
                        <motion.div layout key='pagesContainer' className="relative inset-0 py-12 min-h-svh overflow-hidden">
                            <Pages page={page} firstHalf={firstHalf} secondHalf={secondHalf} />
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>


    )
}




