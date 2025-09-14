import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import Page from "./Page"
import { RootState } from "@/ReduxToolKit/store"
import LinkSkeletons from "../components/skeletons/LinkSkeletons";

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
            className="relative min-h-0 h-full flex flex-col justify-center items-center grow w-full"
        >
            <AnimatePresence>
                {status === 'pending' && <LinkSkeletons key={'linkSkeletons'} />}
            </AnimatePresence>

            <div className="relative min-h-0 grow w-full h-full">
                <AnimatePresence mode="wait">

                    {(Array.isArray(pages)) &&
                        (status === 'fulfilled') &&
                        (pages[currentPage]) &&
                        <Page
                            key={`page${currentPage}`}
                            pageContent={pages[currentPage]}
                        />
                    }
                </AnimatePresence>
            </div>


        </motion.div>
    )
}