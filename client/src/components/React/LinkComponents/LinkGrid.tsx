import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { getPages } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { formPages } from "@/helpers/Presentation"
import LinkPagination from "../Buttons/Pagination/LinkPagination"
import Pages from "./Pages"
import LinkLoader from "../Loaders/LinkLoader"
import SearchFailed from "../ErrorMessages/SearchFailed"
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


export default function LinkGrid() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { articles, status, pages } = search
    const dispatch = useDispatch()


    useEffect(() => {

        if (articles !== null && articles.length < 1) {
            console.log(articles)
        }

        if (status === 'fulfilled' && articles) {
            const formedPages = formPages(articles)
            dispatch(getPages(formedPages))
        }


    }, [status, articles])

    return (
        <motion.div
            key='linkGridContainer'
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ type: 'tween', duration: 0.2 }}
            className="h-full w-full min-h-screen"
        >
            <div className={`h-full w-full mx-auto relative`}>
                <ErrorBoundary>
                    <AnimatePresence>

                        {status === 'pending' && <LinkLoader />}
                        {status === 'fulfilled' && articles !== null && articles.length > 0 && <LinkPagination identifier={'TopPager'} />}
                        {status === 'fulfilled' && articles &&
                            <motion.div layout key='pagesContainer' className="relative min-h-screen inset-0 my-6">
                                <Pages />
                            </motion.div>}
                        {(status === 'fulfilled' && !articles) || (articles && articles.length < 1) && <SearchFailed />}

                        {status === 'fulfilled' && articles !== null && articles.length !== 0 && <LinkPagination identifier={'BottomPager'} key={'pagerTwo'} />}


                    </AnimatePresence>
                </ErrorBoundary>


            </div>
        </motion.div>


    )
}




