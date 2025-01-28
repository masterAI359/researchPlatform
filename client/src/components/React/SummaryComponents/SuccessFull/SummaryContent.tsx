import { motion } from "framer-motion"
import FullText from "./FullText"


export default function SummaryContent({ article_text, summary, fullStory }: any) {

    return (
        <motion.div className={`${fullStory ? `xs:no-scrollbar md:mx-1 my-1` : null} cursor-text`}>
            <main className={`display-block opacity-87 h-full 2xl:w-4/5`}>
                <FullText article_text={article_text} />
            </main>
        </motion.div>
    )
}

//{/*fullStory ? <FullText article_text={article_text} /> : <SummarizedText summary={summary} /> */}
