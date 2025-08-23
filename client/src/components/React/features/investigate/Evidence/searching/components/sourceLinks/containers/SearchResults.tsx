import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { getPages } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { formPages } from "@/helpers/Presentation"
import LinkPagination from "../buttons/LinkPagination";
import Pages from "./Pages"
import SearchFailed from "../errors/SearchFailed";
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import { searchResultsVariants } from "@/motion/variants"
import { useIsMobile } from "@/Hooks/useIsMobile"


export default function SearchResults() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { articleOptions, status, pages } = search
    const isMobile = useIsMobile();
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
                className="h-full w-full flex flex-col justify-start items-center mx-auto relative"
            >
                <ErrorBoundary
                    fallback={<SearchFailed />}
                >
                    <LinkPagination key={'linkPagination'} />
                    <AnimatePresence
                    >

                        {status !== 'idle' &&
                            <motion.div
                                key='pagesContainer'
                                className="relative min-h-screen w-full inset-0"
                            >
                                <Pages key={'pages'} />
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