import { useState, Suspense, lazy, useEffect, } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SelectArticles from "../ArticleComponents/SelectArticles"
import SummaryContainer from "../SummaryComponents/SummaryContainer"
import LinkGrid from "../ArticleComponents/LinkGrid"
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import ScrolltoTop from "../AppRouting/ScrollToTop"
import { BackToSearch } from "../Modals/BackToSearch"

export default function ArticleContainer({
}) {
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search, read, getArticle, end, display } = investigateState
    const { showContent, showBackToSearchModal } = display
    const { loading, articles, status } = search
    const { endProcess } = end
    const { chosenArticles } = getArticle
    const { ContentStatus } = read

    console.log(showBackToSearchModal)
    console.log(ContentStatus)

    function hideSelect() {

        if (chosenArticles.length > 0) {
            setShowSelect(showSelect => !showSelect)

        } else {
            console.log("there's nothing to summarize yet")
        }
    }


    useEffect(() => { }, [ContentStatus, status])

    return (
        <ErrorBoundary>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: showBackToSearchModal ? 0.5 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className={`
                relative shrink-0 w-full h-full mx-auto xs:px-2`}>
                {showBackToSearchModal ? <BackToSearch /> : null}

                <div
                    className="relative 2xl:max-w-7xl min-h-full flex flex-col justify-center box-border mx-auto">
                    <AnimatePresence mode="popLayout">

                        {status !== 'idle' &&
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
                            </motion.div>}

                        {showContent &&
                            <motion.div
                                layout
                                key='presentSummaries'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: 'tween', duration: 1 }}
                            >
                                <SummaryContainer
                                />
                                <ScrolltoTop />
                            </motion.div>}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {articles &&

                        <SelectArticles
                            showSelect={showSelect}
                            hideSelect={hideSelect}
                        />
                    }

                </AnimatePresence>
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
