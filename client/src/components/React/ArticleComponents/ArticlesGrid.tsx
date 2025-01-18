import Article from "./Article"
import { ArticleType, SelectedArticle } from '../../../env'
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"





export default function ArticlesGrid() {
    const articles = useSelector((state: RootState) => state.search.articles)

    console.log(articles)

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
            <div className={`h-full w-fit mx-auto 2xl:max-w-7xl`}>
                <ol className="grid grid-cols-2 xs:gap-3 2xl:gap-16 mx-auto">
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


