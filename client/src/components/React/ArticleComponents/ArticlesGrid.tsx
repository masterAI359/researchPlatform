import Article  from "./Article"
import { Articles, SelectedArticles } from '../../../env'
import { motion } from "framer-motion"


interface GridProps {
    articles: Articles[],
    selectedForSummary: SelectedArticles[],
    setSelectedForSummary: Function,
    summaries:object[]

}

export default function ArticlesGrid ({ articles, selectedForSummary, setSelectedForSummary, summaries }:GridProps) {

    const container = {

        hidden: { opacity: 0},
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
                   <div className="space-y-24">
                    <div className="mx-atuo text-lg lg:col-span-2 mt-12 lg:mt-0">
                       <ol className="grid lg:grid-cols-2 gap-10 mx-auto mt-24">
                           {articles.map((article: Articles) => 
                           <Article
                           key = {article.url}
                           article = {article}
                           selectedForSummary = {selectedForSummary}
                           setSelectedForSummary = {setSelectedForSummary}
                           />
                           )}
                       </ol>
                    </div>
                </div>
            </div>
        </motion.div>

   
    )
}


