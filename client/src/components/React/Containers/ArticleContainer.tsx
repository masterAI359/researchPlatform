import { AnimatePresence, motion } from "framer-motion"
import FailedLoading from "../Articles/Failed/FailedLoading"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import NoContent from "../Articles/Failed/NoContent"
import Article from "../Articles/SuccessFull/Article"
import ArticleLoader from "../Loaders/ArticleLoader"
import { articleData } from "@/ReduxToolKit/Reducers/Investigate/Reading"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { read } = investigateState;
  const { displayArticleContent, showContent } = investigateState.display;
  const { articles, failedNotifications, currentStory, ContentStatus } = read;
  const firstRecordedSources = useRef<string>("");
  const dispatch = useDispatch();


  function recordingSourcesChosen() {
    const scrapedURLs = articles?.map((item: any) => { return item.article_url });
    const failedURLs = failedNotifications?.map((item: any) => { return item.article_url });
    const urls = [...scrapedURLs, ...failedURLs];
    const newSourcesString = JSON.stringify(urls);

    if (urls.length > 0 && newSourcesString !== firstRecordedSources.current) {
      dispatch(recordSources(urls))
      firstRecordedSources.current = newSourcesString;
    }
  };

  useEffect(() => {

    if (articles) {

      recordingSourcesChosen();
    };

  }, [articles, currentStory]);


  return (
    <ErrorBoundary>
      <div
        className="min-h-screen h-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset mx-auto border-white/10 xs:mt-10 xl:mt-12 relative">
        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col">
          <div
            className="w-full min-h-screen mx-auto relative grow shrink-0">
            <AnimatePresence>
              {ContentStatus === 'pending' && <ArticleLoader key='contentLoader' />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {articles && articles[currentStory] &&
                <Article
                  key={currentStory}
                  articleData={articles[currentStory]}
                />
              }
            </AnimatePresence>

            <AnimatePresence>
              {ContentStatus === 'fulfilled' && articles.length < 1 && <NoContent key='noResults' />}
            </AnimatePresence>
          </div>

        </main>
        {ContentStatus === 'fulfilled' && <FailedLoading />}
      </div>
    </ErrorBoundary>
  )
}

