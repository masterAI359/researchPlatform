import { motion, AnimatePresence } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect } from "react"
import { getPages } from "@/ReduxToolKit/Reducers/Investigate/SearchResults"
import { formPages } from "@/helpers/Presentation"
import LinkPagination from "../Buttons/Pagination/LinkPagination"
import Pages from "./Pages"
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


export default function LinkGrid() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { articles, status } = search
    const dispatch = useDispatch()


    useEffect(() => {

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
            className="h-full w-full"
        >
            <div className={`h-full w-full mx-auto relative`}>
                <AnimatePresence>

                    {status === 'pending' && <LinkLoader />}
                    {status === 'fulfilled' && articles && <LinkPagination key={'pagerOne'} />}
                    {status === 'fulfilled' && articles &&
                        <motion.div layout key='pagesContainer' className="relative inset-0 py-6 min-h-screen">
                            <Pages />
                        </motion.div>}

                    {status === 'fulfilled' && articles && <LinkPagination key={'pagerTwo'} />}


                </AnimatePresence>

            </div>
        </motion.div>


    )
}




