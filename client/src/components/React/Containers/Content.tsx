import { motion, AnimatePresence } from "framer-motion"
import LinkGrid from "../LinkComponents/LinkGrid"
import ModalContainer from "./ModalContainer"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ScrolltoTop from "../../../helpers/ScrollToTop"
import ArticleContainer from "./ArticleContainer"

export default function Content() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search, display } = investigateState
    const { showContent, showBackToSearchModal, showSearch,
        showGetArticlesModal, showSelectWarning, showSelectTooltip, showReadingTooltip } = display
    const { status } = search

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showBackToSearchModal || showGetArticlesModal || showSelectWarning || showSelectTooltip ? 0.3 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className={`${showBackToSearchModal || showGetArticlesModal || showSelectWarning || showSelectTooltip ? 'pointer-events-none' : 'pointer-events-auto'}
                relative shrink-0 w-full h-full min-h-screen mx-auto xs:px-2 mt-6`}>

            <ModalContainer />

            <div
                className="relative 2xl:max-w-7xl min-h-full flex flex-col justify-center box-border mx-auto">
                <AnimatePresence mode="wait">

                    {showSearch && status !== 'idle' ?
                        <motion.div
                            key='links'
                            style={{ position: 'relative' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.5 }}
                            className="w-full min-h-screen lg:pb-96"
                        >
                            <LinkGrid
                            />

                        </motion.div> : null}

                    {(showContent) &&
                        <motion.div
                            key='articles'
                            style={{ position: 'relative' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showReadingTooltip ? 0.5 : 1, transition: { type: 'tween', duration: 0.2, delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { type: 'tween', duration: 0.2, delay: 0 } }}
                            className="min-h-screen 2xl:max-w-5xl xl:max-w-4xl mx-auto lg:pb-96"
                        >
                            <ArticleContainer />
                            <ScrolltoTop key='scroll' />
                        </motion.div>}
                </AnimatePresence>
            </div>
        </motion.div>

    )
}
