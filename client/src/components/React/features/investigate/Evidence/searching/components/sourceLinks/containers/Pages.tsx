import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import Page from "../components/Page"
import { RootState } from "@/ReduxToolKit/store"
import LinkSkeletons from "../skeletons/LinkSkeletons"

const variants = {
    show: {
        opacity: 1,
        transition: { type: 'tween', duration: 0.4, ease: 'easeInOut', delay: 0.4 }
    },
    hide: {
        opacity: 0,
        transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' }
    }
};


export default function Pages() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { currentPage, pages, status } = search;


    return (
        <motion.div
            key='pagesOfLinks'
            variants={variants}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative h-full w-full"
        >
            <AnimatePresence>
                {status === 'pending' && <LinkSkeletons />}
            </AnimatePresence>

            <AnimatePresence>

                {(Array.isArray(pages)) &&
                    (status === 'fulfilled') &&
                    (pages[currentPage]) &&
                    <Page
                        key={`page${currentPage}`}
                        pageContent={pages[currentPage]}
                    />
                }
            </AnimatePresence>
        </motion.div>
    )
}