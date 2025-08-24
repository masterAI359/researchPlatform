import { RootState } from "@/ReduxToolKit/store"
import { lazy, Suspense } from "react"
import { useSelector } from "react-redux"
const Article = lazy(() => import('../../../../Shared/Articles/SuccessFull/Article'))
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import LostData from "@/components/React/Shared/ErrorBoundaries/messages/LostData"
import ArticleSkeleton from "@/components/React/Shared/Articles/skeletons/ArticleSkeleton";
import { motion } from "framer-motion";
import { variants } from "@/motion/variants";
import DetailView from "../../../ProfileNavigation/mobile/DetailView"
import { presentArticles } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice"

export default function ArticleReview() {
    const savedArticle = useSelector((state: RootState) => state.userdata.ArticleToReview);
    const displayData = {
        summary: savedArticle.summary,
        article_image: savedArticle.image_url,
        article_url: savedArticle.url,
        article_title: savedArticle.title,
        date: null,
        article_pub_date: savedArticle.date,
        article_authors: savedArticle.authors,
        article_text: savedArticle.full_text,
        logo: null,
        source: savedArticle.provider,
        bias: savedArticle.bias,
        factual_reporting: savedArticle.factual_reporting
    };


    if (!savedArticle) return null;

    return (

        <motion.section
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.4, delay: 0.7 }}
            className="min-h-full md:px-8 scroll-smooth w-full
                        mx-auto mt-0 md:mt-6 relative">
            <DetailView backTo={presentArticles} />

            <ErrorBoundary fallback={<LostData />}
            >
                <main
                    className="xl:max-w-7xl xl:w-4/5 lg:w-3/4 md:w-4/5 sm:w-3/4 mt-16 sm:mt-12 w-80 h-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12
                 xl:px-24
                 ">
                    {displayData &&
                        <Suspense fallback={<ArticleSkeleton />}>
                            <Article articleData={displayData} investigating={false} />
                        </Suspense>
                    }
                </main>
            </ErrorBoundary>
        </motion.section>
    )
}