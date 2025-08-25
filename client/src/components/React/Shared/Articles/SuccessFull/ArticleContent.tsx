import { motion } from "framer-motion"
import FullText from "./FullText"

export default function ArticleContent({ article_text, fullStory, article_url }: any) {

    return (
        <motion.div className={`${fullStory ? `md:mx-1 my-1` : null}`}>
            <main className={`display-block opacity-87 h-full 2xl:w-full`}>
                <FullText article_text={article_text} article_url={article_url} />
            </main>
        </motion.div>
    )
}

