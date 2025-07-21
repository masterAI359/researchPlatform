import { RootState } from "@/ReduxToolKit/store"
import { lazy, Suspense } from "react"
import { useSelector, useDispatch } from "react-redux"
import BackToSavedArticles from "../../../ProfileNavigation/buttons/BackToSavedArticles"
const Article = lazy(() => import('../../../../Shared/Articles/SuccessFull/Article'));
import ErrorBoundary from "@/components/React/Shared/ErrorBoundaries/ErrorBoundary"
import LostData from "@/components/React/Shared/ErrorBoundaries/messages/LostData"
import { useEffect } from "react"
import { readSavedArticle } from "@/ReduxToolKit/Reducers/UserContent.ts/UserContentReducer"
import ArticleSkeleton from "@/components/React/Shared/Articles/skeletons/ArticleSkeleton";

export default function ArticleReview() {
    const savedArticle = useSelector((state: RootState) => state.userdata.ArticleToReview)
    const articlesContext = useSelector((state: RootState) => state.profileNav.backToArticles)
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
        source: savedArticle.provider,
        bias: savedArticle.bias,
        factual_reporting: savedArticle.factual_reporting
    }


    useEffect(() => {

        return () => {
            dispatch(readSavedArticle(null))
        }
    }, [])

    if (!savedArticle) return null;

    return (

        <section
            className="min-h-full xs:px-2 md:px-8 scroll-smooth w-full
                        mx-auto mt-0 md:mt-6 relative animate-fade-in duration-200">
            <BackToSavedArticles articlesContext={articlesContext} />
            <ErrorBoundary fallback={<LostData />}>
                <main
                    className="xl:max-w-7xl xl:w-4/5 lg:w-3/4 md:w-4/5 sm:w-3/4 mt-16 sm:mt-12 w-80 h-full mx-auto 
                 transition-all duration-1000 animate-fade-in mb-12
                 xl:px-24
                 ">
                    {displayData &&
                        <Suspense fallback={<ArticleSkeleton />}>
                            <Article articleData={displayData} />
                        </Suspense>
                    }
                    <Article articleData={displayData} />
                </main>
            </ErrorBoundary>
        </section>
    )
}