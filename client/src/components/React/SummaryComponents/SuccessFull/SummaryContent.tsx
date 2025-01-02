import { useState } from "react";
import { motion } from "framer-motion"
import FullText from "./FullText"
import SummarizedText from "./SummarizedText"


export default function SummaryContent({
    article_text,
    summary,
    fullStory
}: any) {






    return (
        <motion.div className={`${fullStory ? `overflow-y-scroll scrollbar-thin scrollbar-track-rounded-full 
            scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300 scroll-smooth mx-1 my-1` : null} cursor-text`}>
            <main className={`display-block opacity-87 2xl:max-h-[40rem] 2xl:w-3/4`}>
                {fullStory ? <FullText article_text={article_text} /> : <SummarizedText summary={summary} />}

            </main>
        </motion.div>
    )
}