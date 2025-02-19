import Article from "./Article"
import { ArticleType, SelectedArticle } from '../../../env'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import ArticleLoader from "../Loaders/ArticleLoader"
import SearchFailed from "../ErrorMessages/SearchFailed"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"


export default function ArticlesGrid() {
    const investigateState = useSelector((state: RootState) => state.investigation)
    const { search } = investigateState
    const { articles, status } = search

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
            className="h-full xl:max-w-7xl"
        >
            <div className={`h-full w-full mx-auto`}>

                <ErrorBoundary>
                    <AnimatePresence mode="wait">
                        {status === 'pending' && <ArticleLoader key='articleLoader' />}

                        {status === 'fulfilled' &&
                            <motion.ol className="max-w-4xl mx-auto grid grid-cols-2 xs:gap-3 
                    min-h-full 2xl:gap-12">
                                {articles.map((article: ArticleType, index: number) => {
                                    return (
                                        <Article
                                            index={index}
                                            key={index}
                                            article={article}
                                        />)
                                })
                                }
                            </motion.ol>}

                        {status === 'rejected' &&
                            <SearchFailed key='searchFailed' />}

                    </AnimatePresence>
                </ErrorBoundary>


            </div>
        </motion.div>


    )
}




