import { useState, Suspense, lazy, useEffect, } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SelectArticles from "../ArticleComponents/SelectArticles"
import SummaryContainer from "../SummaryComponents/SummaryContainer"
import LinkGrid from "../ArticleComponents/LinkGrid"
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel"
import ModalContainer from "./ModalContainer"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../AppRouting/ScrollToTop"
import { useDispatch } from "react-redux"

export default function ArticleContainer({
}) {

    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search, read, getArticle, display } = investigateState
    const { showContent, showBackToSearchModal, showSearch, showGetArticlesModal, showSelectWarning } = display
    const { status } = search
    const { ContentStatus } = read

    useEffect(() => {

    }, [ContentStatus, status])

    return (
        <ErrorBoundary>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: showBackToSearchModal || showGetArticlesModal || showSelectWarning ? 0.4 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className={`
                relative shrink-0 w-full h-full mx-auto xs:px-2`}>

                <ModalContainer />

                <div
                    className="relative 2xl:max-w-7xl min-h-full flex flex-col justify-center box-border mx-auto">
                    <AnimatePresence mode="popLayout">

                        {showSearch && status !== 'idle' ?
                            <motion.div
                                layout
                                key='presentArticles'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'tween', duration: 0.5 }}
                                className="w-full"
                            >
                                <LinkGrid
                                />
                            </motion.div> : null}

                        {showContent &&
                            <motion.div
                                layout
                                key='presentSummaries'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'tween', duration: 0.3 }}
                            >
                                <SummaryContainer
                                />
                                <ScrolltoTop />
                            </motion.div>}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {ContentStatus === 'fulfilled' && <motion.div
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
        </ErrorBoundary>

    )
}
