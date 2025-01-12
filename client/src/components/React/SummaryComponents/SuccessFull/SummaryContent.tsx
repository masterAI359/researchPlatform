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
        <motion.div className={`${fullStory ? `xs:no-scrollbar md:show-scrollbar md:overflow-y-scroll md:scrollbar-thin md:scrollbar-track-rounded-full 
            scrollbar-thumb-rounded-full md:scrollbar-thumb-gray-600 md:scrollbar-track-gray-300 scroll-smooth md:mx-1 my-1` : null} cursor-text`}>
            <main className={`display-block opacity-87 xl:max-h-[40rem] 2xl:w-4/5`}>
                {fullStory ? <FullText article_text={article_text} /> : <SummarizedText summary={summary} />}

            </main>
        </motion.div>
    )
}