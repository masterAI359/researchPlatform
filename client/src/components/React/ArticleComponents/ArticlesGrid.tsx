import Article from "./Article"
import { Articles, SelectedArticles } from '../../../env'
import { motion } from "framer-motion"


interface GridProps {
    articles: Articles[],
    selectedForSummary: SelectedArticles[],
    setSelectedForSummary: Function,

}

export default function ArticlesGrid({ articles, selectedForSummary, setSelectedForSummary }: GridProps) {

    const container = {

        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
                delayChildren: 0.3,
                staggerDirection: 1
            }
        }
    }


    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <div className={`h-full mx-auto 2xl:px-36 md:px-12 sm:w-full lg:px-16 xl:px-36 2xl:max-w-7xl`}>
                <ol className="grid grid-cols-2 lg:gap-10 xs:gap-3 mx-auto lg:mt-4">
                    {articles.map((article: Articles) =>
                        <Article
                            key={article.url}
                            article={article}
                            selectedForSummary={selectedForSummary}
                            setSelectedForSummary={setSelectedForSummary}
                        />
                    )}
                </ol>
            </div>
        </motion.div>


    )
}


