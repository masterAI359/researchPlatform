import { HTMLAttributes, useState, useRef } from "react"
import { useMotionValueEvent, motion, useScroll, AnimatePresence, transform, animate } from "framer-motion"
import SelectArticles from "../ArticleComponents/SelectArticles"
import { SelectedArticles } from "@/env"
import SummaryContainer from "../SummaryComponents/SummaryContainer"
import ArticlesGrid from "../ArticleComponents/ArticlesGrid"
import ArticleLoader from "../Loaders/ArticleLoader"
import SummaryLoader from "../Loaders/SummaryLoader"
import ControlPanel from "../Buttons/ButtonWrappers/ControlPanel"

import TakeNotes from "../Buttons/TakeNotes"

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    selectedForSummary: SelectedArticles[],
    readyToSelect: boolean,
    submittedForSummaries: boolean,
    setSubmittedForSummaries: Function,
    loadingSummaries: boolean
}

const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
}




export default function StoryContainer({ selectedForSummary, setSelectedForSummary, articles, summaries, isLoading, loadingSummaries,
    readyToSelect, fetchedSummaries, submittedForSummaries, setSubmittedForSummaries, fetchedArticles, setTakingNotes, finished, setFinished
}) {
    const [showSelect, setShowSelect] = useState<boolean>(false)



    const yRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: yRef,
        offset: ['start end', 'end start']
    })

    function hideSelect() {

        if (selectedForSummary.length > 0) {
            setShowSelect(showSelect => !showSelect)

        } else {
            console.log("there's nothing to summarize yet")
        }
    }

    useMotionValueEvent(scrollYProgress, "change", (latest) => {

        if (latest > 0.15 && !showSelect && readyToSelect === true) {
            setShowSelect(true);
        } else if (latest === 0 && showSelect) {
            setShowSelect(false);
        }
    });

    return (
        <div
            ref={yRef}
            className="relative w-full h-auto mx-auto">
            <div
                className="relative w-full h-auto box-border mx-auto">

                <AnimatePresence >
                    {isLoading === true &&
                        <motion.div
                            key='loadingArticles'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "tween", duration: 0.5 }}
                        >
                            <ArticleLoader

                                isLoading={isLoading}
                                summaries={summaries} />
                        </motion.div>}

                    {readyToSelect === true &&
                        <motion.div
                            key='presentArticles'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArticlesGrid
                                summaries={summaries}
                                articles={articles}
                                selectedForSummary={selectedForSummary}
                                setSelectedForSummary={setSelectedForSummary} />
                        </motion.div>}

                    {loadingSummaries === true &&
                        <motion.div
                            key='loadingSummaries'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <SummaryLoader />
                        </motion.div>
                    }

                    {fetchedSummaries.length > 0 &&
                        <motion.div
                            key='presentSummaries'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <SummaryContainer

                                summaries={summaries}
                                articles={articles}
                                selectedForSummary={selectedForSummary} />
                        </motion.div>}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {showSelect &&
                    <div className="relative w-full h-auto flex justify-start">
                        <motion.div
                            className="w-full h-fit relative"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ type: "spring", damping: 10, duration: 0.3 }}

                        >
                            <SelectArticles
                                hideSelect={hideSelect}
                                selectedForSummary={selectedForSummary}
                                submittedForSummaries={submittedForSummaries}
                                setSubmittedForSummaries={setSubmittedForSummaries}
                                loadingSummaries={loadingSummaries} />
                        </motion.div>
                    </div>
                }

            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'tween', duration: 0.2 }}
                className="w-full h-auto relative mx-auto"
            >
                <ControlPanel setTakingNotes={setTakingNotes} setFinished={setFinished} />
            </motion.div>

        </div>
    )
}
