import { AnimatePresence } from "framer-motion"
import FailedLoading from "../Articles/Failed/FailedLoading"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary"
import NoContent from "../Articles/Failed/NoContent"
import Article from "../Articles/SuccessFull/Article"
import ArticleLoader from "../Loaders/ArticleLoader"
import ErrMessage from "../ErrorMessages/ErrMessage"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { read, display } = investigateState;
  const { showContent } = display;
  const sources = useSelector((state: RootState) => state.userWork.sourcesToReview);
  const sourcesToDispatch = sources;
  const { articles, failedNotifications, currentStory, ContentStatus } = read;
  const firstRecordedSources = useRef<string>("");
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [showArticles, setShowArticles] = useState<boolean>(false);
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


    if (articles) recordingSourcesChosen();
    if (sources) localStorage.setItem('cachedSources', JSON.stringify(sourcesToDispatch));

  }, [articles, sources]);

  useEffect(() => {

    if (ContentStatus === 'pending') {
      setShowLoader(true)
    } else {
      setShowLoader(false)
    }

    if (!Array.isArray(articles)) {
      setShowArticles(false)
    }

    if ((articles !== null) && (ContentStatus !== 'pending')) {
      setShowArticles(true)
    } else {
      setShowArticles(false)
    }

  }, [ContentStatus, articles])


  return (
    <ErrorBoundary fallback={<ErrMessage message={"Woops, something broke :/"} />}>
      <div
        className="min-h-screen h-full 2xl:max-w-7xl xl:max-w-5xl lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset mx-auto border-white/10 xs:mt-10 xl:mt-12 relative">
        <main
          className="2xl:max-w-6xl h-full w-full mx-auto 
               mb-12 flex flex-col">
          <div
            className="w-full min-h-screen mx-auto relative grow shrink-0">
            <AnimatePresence>
              {showLoader && <ArticleLoader key='contentLoader' />}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {showArticles && Array.isArray(articles) && (articles[currentStory]) &&
                <Article
                  key={articles[currentStory].article_url}
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

