import { forwardRef, HTMLAttributes, useEffect, useState, useRef } from "react"
import { useMotionValueEvent, motion, useScroll, AnimatePresence, transform, animate } from "framer-motion"
import SelectArticles from "../ArticleComponents/SelectArticles"
import { SelectedArticles } from "@/env"

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



const StoryContainer = forwardRef<HTMLDivElement, Props>(function StoryContainer(props, ref) {
    const [showSelect, setShowSelect] = useState<boolean>(false)

    //framer-motion hook to track when SelectArticles.tsx should move into view
    const yRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: yRef,
        offset: ['start end', 'end start']
    })



    const { children, selectedForSummary, readyToSelect, submittedForSummaries, setSubmittedForSummaries, loadingSummaries } = props

    function hideSelect() {

        if (selectedForSummary.length > 0) {
            setShowSelect(showSelect => !showSelect)

        } else {
            console.log("there's nothing to summarize yet")
        }
    }

    useMotionValueEvent(scrollYProgress, "change", (latest) => {

        if (latest > 0.15 && !showSelect && readyToSelect) {
            setShowSelect(true);
        } else if (latest === 0 && showSelect) {
            setShowSelect(false);
        }
    });

    return (
        <div
            ref={yRef}
            className="relative w-full min-h-96 h-auto mx-auto">
            <div className="relative w-full h-auto mx-auto">
                {children}
            </div>
            <AnimatePresence>
                {showSelect && <motion.div
                    className="w-full h-fit mx-auto fixed bottom-8 left-0"
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
                </motion.div>}

            </AnimatePresence>

        </div>
    )
})

export default StoryContainer