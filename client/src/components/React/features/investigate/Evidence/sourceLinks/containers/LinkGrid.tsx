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
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ type: 'tween', duration: 0.2 }}
            className="h-full w-full min-h-screen grow"
        >
            <div className={`h-full w-full mx-auto relative`}>
                <ErrorBoundary fallback={<SearchFailed />}>
                    <AnimatePresence>

                        {status === 'fulfilled' && articleOptions !== null && <LinkPagination identifier={'TopPager'} />}
                        {status !== 'idle' &&
                            <motion.div layout key='pagesContainer' className="relative min-h-screen w-full inset-0 my-6">
                                <Pages />
                            </motion.div>}
                        {(status === 'fulfilled' && !articleOptions) || (articleOptions && articleOptions.length < 1) && <SearchFailed />}

                        {status === 'fulfilled' && articleOptions !== null && <LinkPagination identifier={'BottomPager'} key={'pagerTwo'} />}


                    </AnimatePresence>
                </ErrorBoundary>


            </div>
        </motion.div>


    )
};