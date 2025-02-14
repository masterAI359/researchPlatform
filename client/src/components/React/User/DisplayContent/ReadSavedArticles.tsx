import { RootState } from "@/ReduxToolKit/store"
import { motion, AnimatePresence } from "framer-motion"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Summary } from "../../SummaryComponents/SuccessFull/Summary"
import BackToSavedArticles from "../../Buttons/NavigatingButtons/BackToSavedArticles"

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            ease: 'easeInOut',
            delayChildren: 0.3,
        }
    }
}


export default function ReadSavedArticle() {
    const savedArticle = useSelector((state: RootState) => state.userdata.ArticleToReview)
    const dispatch = useDispatch()

    const displayData = {
        summary: savedArticle.summary,
        article_image: savedArticle.image_url,
        article_url: savedArticle.article_url,
        article_title: savedArticle.title,
        date: null,
        article_pub_date: savedArticle.date_published,
        article_authors: savedArticle.authors,
        article_text: savedArticle.full_text,
        logo: null,
        source: savedArticle.provider
    }




    return (
        <section
            className="min-h-full 2xl:w-full xs:px-2 md:px-8 scroll-smooth
      inset mx-auto xs:mt-10 xl:mt-16 relative">
            <div className="absolute 2xl:left-32 top-32">
                <BackToSavedArticles />
            </div>
            <main
                className="xl:max-w-7xl h-full xs:w-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12
                 xl:px-24
                 ">
                <AnimatePresence>
                    {savedArticle && <Summary articleData={displayData} index={0} />}
                </AnimatePresence>
            </main>

        </section>
    )
}