import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { getPages } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { formPages } from "@/helpers/Presentation"
import LinkPagination from "../buttons/LinkPagination";
import Pages from "./Pages"
import SearchFailed from "../errors/SearchFailed";
import ErrorBoundary from "../../../../../Shared/ErrorBoundaries/ErrorBoundary";
import { searchResultsVariants } from "@/motion/variants"


export default function SearchResults() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { articleOptions, status, pages } = search
    const dispatch = useDispatch()


    useEffect(() => {

        if (status === 'fulfilled' && articleOptions) {
            const formedPages = formPages(articleOptions)
            dispatch(getPages(formedPages))
        }


    }, [status, articleOptions])

    return (
        <motion.div
            key='linkGridContainer'
            variants={searchResultsVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', duration: 0.2 }}
            className="h-full w-full min-h-screen grow"
        >
            <div
                className="h-full w-full mx-auto relative"
            >
                <ErrorBoundary
                    fallback={<SearchFailed />}
                >
                    <AnimatePresence
                    >
                        {status !== 'idle' &&
                            <LinkPagination identifier={'TopPager'} />
                        }
                        {status !== 'idle' &&
                            <motion.div
                                key='pagesContainer'
                                className="relative min-h-screen w-full inset-0 my-6"
                            >
                                <Pages />
                            </motion.div>
                        }
                        {(status === 'fulfilled' && !articleOptions) ||
                            (articleOptions && articleOptions.length < 1) &&
                            <SearchFailed key="no-results" />
                        }
                    </AnimatePresence>
                </ErrorBoundary>
            </div>
        </motion.div>


    )
};