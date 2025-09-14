import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
const Article = lazy(() => import('@/components/React/Shared/Articles/SuccessFull/Article'));
import ArticleLoader from "@/components/React/Shared/Articles/loaders/ArticleLoader";
import NoContent from "@/components/React/Shared/Articles/Failed/NoContent";
import ArticleSkeleton from "@/components/React/features/dashboard/Content/UserArticles/skeletons/SavedArticleSkeleton";

export default function RenderArticles() {
    const investigateState = useSelector((state: RootState) => state.investigation);
    const { read } = investigateState;
    const { articles, currentStory, ContentStatus } = read;
    const renderArticle = Array.isArray(articles) && (articles.length > 0) && (ContentStatus === 'fulfilled');
    const noResults = (ContentStatus === 'fulfilled') && (Array.isArray(articles)) && (articles.length === 0);

    return (
        <main
            className="2xl:max-w-6xl h-full w-full mx-auto 
                  mb-12 flex flex-col">
            <div
                className="w-full min-h-screen mx-auto relative 
                grow shrink-0"
            >
                <AnimatePresence>
                    {ContentStatus === 'pending' &&
                        <ArticleLoader
                            key='contentLoader'
                        />}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {renderArticle &&
                        (articles[currentStory]) &&
                        <Suspense
                            fallback={
                                <ArticleSkeleton
                                    key={'articleSkeleton'}
                                />}
                        >
                            <Article
                                key={articles[currentStory].article_url}
                                articleData={articles[currentStory]}
                                investigating={true}
                            />
                        </Suspense>}
                </AnimatePresence>

                <AnimatePresence>
                    {noResults && <NoContent key='noResults' />}
                </AnimatePresence>
            </div>
        </main>
    )

}