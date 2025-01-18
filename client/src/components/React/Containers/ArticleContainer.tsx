import { useState, useRef } from "react"
import { useMotionValueEvent, motion, useScroll, AnimatePresence } from "framer-motion"
import SelectArticles from "../ArticleComponents/SelectArticles"
import SummaryContainer from "../SummaryComponents/SummaryContainer"
import ArticlesGrid from "../ArticleComponents/ArticlesGrid"
import ArticleLoader from "../Loaders/ArticleLoader"
import SummaryLoader from "../Loaders/SummaryLoader"
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"


export default function ArticleContainer({
    loadingSummaries,
}) {
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const loading = useSelector((state: RootState) => state.pov.loading)
    const articles = useSelector((state: RootState) => state.search.articles)
    const loadingContent = useSelector((state: RootState) => state.read.loadingContent)
    const chosenArticles = useSelector((state: RootState) => state.getArticle.chosenArticles)
    const reading = useSelector((state: RootState) => state.read.reading)
    const stories = useSelector((state: RootState) => state.read.summaries)

    console.log(stories)

    function hideSelect() {

        if (chosenArticles.length > 0) {
            setShowSelect(showSelect => !showSelect)

        } else {
            console.log("there's nothing to summarize yet")
        }
    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative w-full h-auto mx-auto xs:px-2">
            <div
                className="relative w-full h-auto box-border mx-auto">
                <AnimatePresence mode="popLayout">
                    {loading === true &&
                        <motion.div
                            layout
                            key='loadingArticles'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "tween", duration: 0.5 }}
                        >
                            <ArticleLoader />
                        </motion.div>}

                    {articles !== null &&
                        <motion.div
                            layout
                            key='presentArticles'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'tween', duration: 0.5 }}
                        >
                            <ArticlesGrid
                            />
                        </motion.div>}

                    {loadingContent &&
                        <motion.div
                            layout
                            key='loadingSummaries'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ type: 'tween', duration: 0.5 }}
                        >
                            <SummaryLoader />
                        </motion.div>
                    }

                    {reading &&
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
                        </motion.div>}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {articles &&
                    <div className="relative w-full h-auto flex justify-start">
                        <motion.div
                            key='selectArticles'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <SelectArticles
                                showSelect={showSelect}
                                hideSelect={hideSelect}
                                loadingSummaries={loadingSummaries}
                            />
                        </motion.div>
                    </div>
                }

            </AnimatePresence>
            <AnimatePresence>
                {stories && <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                    className="w-full h-auto relative mx-auto"
                >
                    <ControlPanel />
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}
