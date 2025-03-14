import { useEffect, } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LinkGrid from "../LinkComponents/LinkGrid"
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel"
import ModalContainer from "./ModalContainer"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../AppRouting/ScrollToTop"
import ArticleContainer from "../Articles/ArticleContainer"

export default function Content({
}) {

    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search, read, display } = investigateState
    const { showContent, showBackToSearchModal, showSearch,
        showGetArticlesModal, showSelectWarning, showSelectTooltip } = display
    const { status } = search
    const { ContentStatus } = read
    const readyToRead = ContentStatus === 'fulfilled' || ContentStatus === 'rejected'

    // useEffect(() => {
    //
    // }, [ContentStatus, status])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showBackToSearchModal || showGetArticlesModal || showSelectWarning || showSelectTooltip ? 0.4 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className={`
                relative shrink-0 w-full h-full mx-auto xs:px-2`}>

            <ModalContainer />

            <div
                className="relative 2xl:max-w-7xl min-h-full flex flex-col justify-center box-border mx-auto">
                <AnimatePresence mode="wait">

                    {showSearch && status !== 'idle' ?
                        <motion.div
                            key='presentLinks'
                            style={{ position: 'relative' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.5 }}
                            className="w-full"
                        >
                            <ErrorBoundary>
                                <LinkGrid
                                />
                            </ErrorBoundary>

                        </motion.div> : null}

                    {showContent &&
                        <motion.div
                            key='presentArticles'
                            style={{ position: 'relative' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <ArticleContainer />
                            <ScrolltoTop key='scroll' />
                        </motion.div>}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {readyToRead && showContent && <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                    className="w-full h-auto relative mx-auto"
                >
                    <ControlPanel />
                </motion.div>}
            </AnimatePresence>
        </motion.div>

    )
}
