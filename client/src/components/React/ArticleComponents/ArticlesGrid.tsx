import Article from "./Article"
import { ArticleType, SelectedArticle } from '../../../env'
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"





export default function ArticlesGrid() {
    const articles = useSelector((state: RootState) => state.search.articles)

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
            className="h-full xl:max-w-7xl"
        >
            <div className={`h-full w-fit mx-auto`}>
                <ol className="grid grid-cols-2 xs:gap-3 min-h-full 2xl:gap-20 mx-auto">
                    {articles?.map((article: ArticleType, index: number) =>
                        <Article
                            index={index}
                            key={article.url}
                            article={article}
                        />
                    )}
                </ol>
            </div>
        </motion.div>


    )
}


