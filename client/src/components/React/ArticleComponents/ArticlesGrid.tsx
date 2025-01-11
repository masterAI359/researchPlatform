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
        >
            <div className={`h-full mx-auto 2xl:px-36 md:px-12 sm:w-full lg:px-16 xl:px-36 2xl:max-w-7xl`}>
                <ol className="grid grid-cols-2 lg:gap-10 xs:gap-3 mx-auto lg:mt-4">
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


